(function(){
	
	var Dialog = LunchLab.dialogs.Dialog,
		DialogManager = LunchLab.dialogs.DialogManager;

	/**
	*  For displaying a Magnet Dialog
	*  @class LunchLab.dialogs.CoinDialog
	*  @constructor
	*  @param {object} earnResult The earn result from the database
	*  @param {object} earnResult.kid The kid object
	*  @param {int} earnResult.coins The number of coins earned
	*  @param {int} earnResult.alias The alias earned
	*/
	var CoinDialog = function(earnResult)
	{
		/**
		*  The result of the earning a magnet
		*  @property {object} earnResult
		*/
		this.earnResult = earnResult;
	};

	var p = CoinDialog.prototype = new Dialog();

	/** 
	*  The list of alias for coins earned while logged out
	*  @property {Array} anonymousPoints
	*/
	CoinDialog.anonymousPoints = [];

	/**
	*  Earn a requirement by the requirement id
	*  @method earnRequirement
	*  @static
	*  @param {int} requirementId The magnet requirement id
	*/
	CoinDialog.awardKidPoints = function(alias)
	{
		var anon = isAnonymousUser();
		var service = 'kid/award-kid-points';

		if (anon)
		{
			if (DEBUG)
			{
				Debug.log("Award coins anonymously for : " + alias);
			}
			CoinDialog.anonymousPoints.push(alias);
			service = 'kid/no-award-kid-points';
		}
		Canteen.Site.instance.gateway.get(onCoinsEarned, service, alias);
	};

	/**
	*  When the user logged-in to the site, check the pool
	*  @method onLogin
	*  @static
	*/
	CoinDialog.onLogin = function()
	{
		var alias, i, len = CoinDialog.anonymousPoints.length;

		// Bail out if we have no points waiting to add
		if (len === 0) return;

		for(i = 0; i < len; i++)
		{
			alias = CoinDialog.anonymousPoints[i];
			Canteen.Site.instance.gateway.get(
				onSilentCoinsEarned, 
				'kid/award-kid-points', 
				alias
			);
		}
		CoinDialog.anonymousPoints = [];
	};

	/**
	*  Handler for the gateway response when silently awarding user coins
	*  @method onSilentCoinsEarned
	*  @private
	*  @param {object} response The gateway response
	*/
	var onSilentCoinsEarned = function(response)
	{
		// Check for errors
		if (!response || response.type == "error")
		{
			Debug.error(response);
		}
		else if (DEBUG)
		{
			Debug.log("Awarded kid some coins");
			Debug.log(response.result);
		}
	};

	/**
	*  Handler for the gateway response
	*  @method onMagnetEarned
	*  @private
	*  @param {object} response The gateway response
	*/
	var onCoinsEarned = function(response)
	{
		if(!Modernizr.flash) return;
		
		// Check for errors
		if (!response || response.type == "error")
		{
			Debug.error(response);
		}
		else if (response.result)
		{
			// Add to the site's DialogManager
			DialogManager.instance.add(new CoinDialog(response.result));
		}
	};

	/**
	*  Display the dialog with the earn result
	*  @method display
	*/
	p.open = function()
	{
		this.content = $("#coinNotificationTemplate").html();
		this.content = $(this.content);
		this.content.find(".coinValue").html(this.earnResult.coins);
		this.content.find(".closeButton").touch(this.manualClose.bind(this));
	};

	/**
	*  Destroy and don't use after this
	*  @method destroy
	*/
	p.close = function()
	{
		this.content.find(".closeButton").untouch();
		this.content = null;
		this.earnResult = null;
	};

	// Assign to the global namespace
	namespace("LunchLab.dialogs").CoinDialog = CoinDialog;

}());