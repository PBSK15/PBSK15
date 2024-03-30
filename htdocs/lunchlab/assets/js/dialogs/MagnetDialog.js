(function(){
	
	var Dialog = LunchLab.dialogs.Dialog,
		DialogManager = LunchLab.dialogs.DialogManager;

	/**
	*  For displaying a Magnet Dialog
	*  @class LunchLab.dialogs.MagnetDialog
	*  @constructor
	*  @param {object} earnResult The earn result from the database
	*  @param {object} earnResult.magnet The magnet object
	*  @param {int} earnResult.numEarned The number of earned results
	*/
	var MagnetDialog = function(earnResult)
	{
		/**
		*  The result of the earning a magnet
		*  @property {object} earnResult
		*/
		this.earnResult = earnResult;
	};

	var p = MagnetDialog.prototype = new Dialog();

	/**
	*  The pool of anonymous magnet events
	*  @property {Array} anonymousMagnets
	*  @private
	*/
	MagnetDialog.anonymousMagnets = [];

	/**
	*  Earn the first time login
	*  @method firstTimeLogin
	*  @static
	*/
	MagnetDialog.firstTimeLogin = function(callback)
	{
		Canteen.Site.instance.gateway.get(
			onMagnetEarned.bind(MagnetDialog, callback), 
			'magnet',
			'first-time-login'
		);
	};

	/**
	*  Check to see if the anonymous user has already earned
	*  this magnet requirement
	*  @method anonymousEarned
	*  @private
	*  @param {int|String} magnet The requirement id or "contentType:contentId"
	*/
	var anonymousEarned = function(magnet)
	{
		return MagnetDialog.anonymousMagnets.indexOf(magnet) > -1;
	};

	/**
	*  When the user logged-in to the site, check the pool and 
	*  silently earn the magnets
	*  @method onLogin
	*  @static
	*/
	MagnetDialog.onLogin = function()
	{
		var magnet = null, 
			i = 0, 
			len = MagnetDialog.anonymousMagnets.length,
			gateway = Canteen.Site.instance.gateway;

		// Bail out if we have no points waiting to add
		if (len === 0) return;

		for(i = 0; i < len; i++)
		{
			magnet = MagnetDialog.anonymousMagnets[i];

			if (magnet.match(/^[0-9]+$/))
			{
				gateway.get(
					onSilentMagnetEarned, 
					'magnet/earn-requirement',
					magnet
				);
			}
			else
			{
				magnet = magnet.split(':');
				gateway.get(
					onSilentMagnetEarned, 
					'magnet/earn-requirement' , 
					magnet[0],
					magnet[1]
				);
			}
			
		}
		MagnetDialog.anonymousPoints = [];
	};

	/**
	*  Earn a requirement by the requirement id
	*  @method earnRequirement
	*  @static
	*  @param {int} requirementId The magnet requirement id
	*/
	MagnetDialog.earnRequirement = function(requirementId, callback)
	{
		var anon = isAnonymousUser();
		var service = 'magnet/earn-requirement';
		var anonEarn = null;

		if (anon)
		{
			if (DEBUG)
			{
				Debug.log("Award magnet anonymously for : " + requirementId);
			}

			anonEarn = requirementId;

			// User has already earned this magnet
			if (anonymousEarned(anonEarn)) return;
	
			service = 'magnet/no-earn-requirement';
		}
		
		Canteen.Site.instance.gateway.get(
			onMagnetEarned.bind(MagnetDialog, callback, anonEarn), 
			service, 
			requirementId
		);
	};

	/**
	*  Earn a requirement by content and type
	*  @method earnRequirementByContent
	*  @static
	*  @param {String} contentType The type of content
	*  @param {int} contentId The content id
	*/
	MagnetDialog.earnRequirementByContent = function(contentType, contentId, callback)
	{
		var anon = isAnonymousUser();
		var service = 'magnet/earn-requirement';
		var anonEarn = null;

		if (anon)
		{
			if (DEBUG)
			{
				Debug.log("Award magnet anonymously for : " + contentType + "(" + contentId + ")");
			}

			anonEarn = contentType+":"+contentId;

			// User has already earned this magnet
			if (anonymousEarned(anonEarn)) return;

			service = 'magnet/no-earn-requirement';
		}

		Canteen.Site.instance.gateway.get(
			onMagnetEarned.bind(MagnetDialog, callback, anonEarn), 
			service, 
			contentType, 
			contentId
		);
	};

	/**
	*  Handler for the gateway response
	*  @method onMagnetEarned
	*  @private
	*  @param {function} callback Callback when done earning
	*  @param {int|String} anonEarn The anonymously earned id
	*  @param {object} response The gateway response
	*/
	var onMagnetEarned = function(callback, anonEarn, response)
	{
		if (!response)
		{
			Debug.error("No magnet response");
		}
		else if (response.type == "error")
		{
			Debug.error(response.result);
		}
		else
		{
			// Earn the magnet anonymously
			if (anonEarn)
			{
				MagnetDialog.anonymousMagnets.push(anonEarn);
			}

			if (response.result)
			{
				// Add to the site's DialogManager
				DialogManager.instance.add(new MagnetDialog(response.result));
			}
			if(callback) callback(!!response.result);
		}
	};

	/**
	*  Handler for the gateway response silent result
	*  @method onSilentMagnetEarned
	*  @private
	*  @param {object} response The gateway response
	*/
	var onSilentMagnetEarned = function(response)
	{
		if (!response)
		{
			Debug.error("No magnet response");
		}
		else if (response.type == "error")
		{
			Debug.error(response.result);
		}
		else if (DEBUG)
		{
			Debug.log("Earned a magnet silently");
			Debug.log(response.result);
		}
	};

	/**
	*  Display the dialog with the earn result
	*  @method display
	*/
	p.open = function()
	{
		this.content = $("#magnetNotificationTemplate").html();
		this.content = $(this.content);
		this.content.find(".magnetName").html(this.earnResult.magnet.name);
		this.content.find(".title").html(this.earnResult.magnet.total == this.earnResult.numEarned ? "You've unlocked:": "One step closer to:");
		this.content.find(".icon img").attr("alt", this.earnResult.magnet.name);
		this.content.find("a.icon")
			.attr('href', this.earnResult.magnet.stub)
			.internalLink(Canteen.Site.instance);

		var image = this.earnResult.magnet.image;
		var perStep = Math.floor(this.earnResult.magnet.total / this.earnResult.magnet.steps);
		var numEarned = this.earnResult.numEarned;
		var stepNum = numEarned >= 1 && Math.floor(numEarned / perStep) === 0 ? 1 : Math.floor(numEarned / perStep);
		image = image.replace(".", stepNum + ".");
		
		this.content.find(".icon img").attr("src", image);
		this.content.find(".closeButton").touch(this.manualClose.bind(this));
	};

	/**
	*  Destroy and don't use after this
	*  @method destroy
	*/
	p.close = function()
	{
		this.earnResult = null;
		this.content.find(".closeButton").untouch();
		this.content = null;
	};

	namespace("LunchLab.dialogs").MagnetDialog = MagnetDialog;

}());