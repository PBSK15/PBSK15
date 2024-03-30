(function(){

	// Imports
	var MagnetDialog = LunchLab.dialogs.MagnetDialog;

	/**
	*  The Magnets page
	*  @class LunchLab.pages.MagnetsPage
	*  @extends Canteen.Page
	*/
	var MagnetsPage = function(){},
	
	// Reference to the prototype
	p = MagnetsPage.prototype = new Canteen.Page();

	var prevX;
	var prevY;

	/**
	*  When the page is entered
	*  @method enter
	*/
	p.enter = function()
	{
		this.site.gateway.get(
			this._getLoggedIn.bind(this),
			'kid',
			'is-logged-in'
		);

		$(window).off("touchstart", touchCatcher);
		$(window).on("touchstart", touchCatcher);
		if(this.uri != "magnets")//if viewing a specific magnet
		{
			//apply listener directly to elements to make sure it is blocked in time
			$(".listLink").off("mousedown mouseup", mouseBlocker);
			$(".listLink").on("mousedown mouseup", mouseBlocker);
		}
		else
		{
			MagnetDialog.earnRequirementByContent('Page', $("#magnetList").data('id'), this.onMagnet.bind(this));
			//apply listener directly to elements to make sure it is blocked in time
			$(".magnetLink").off("mousedown mouseup", mouseBlocker);
			$(".magnetLink").on("mousedown mouseup", mouseBlocker);
		}
	};

	/** Looks at position of touch events to block subsequent mouse events. */
	function touchCatcher(e)
	{
		e = e.originalEvent;
		prevX = e.changedTouches[0].screenX;
		prevY = e.changedTouches[0].screenY;
	}

	/** Blocks mouse events if they were preceded by a touch event. */
	function mouseBlocker(e)
	{
		e = e.originalEvent;
		if(Math.abs(e.screenX - prevX) < 2 && Math.abs(e.screenY - prevY) < 2)
		{
			e.preventDefault();
			e.stopPropagation();
		}
	}

	/**
	*	result of gateway call for logged in user
	*/
	p._getLoggedIn = function(result)
	{
		if(result.type != "success")
			this._showLoginDialog();
	};

	/**
	*	activate dialog asking user to login to view magnets	
	*/
	p._showLoginDialog = function()
	{
		$("#loginContainer").show();
		$("#loginButton").touch(this._doLogin.bind(this));
		$("#noButton").touch(this._goHome.bind(this));
	};

	/**
	*	show pbskids login dialog
	*/
	p._doLogin = function(e)
	{
		PBS.KIDS.identity.signin();
	};
	/**
	*	if user declines to login, return them to home page
	*/
	p._goHome = function(e)
	{
		$("#loginButton").untouch(this._doLogin.bind(this));
		$("#noButton").untouch(this._goHome.bind(this));
		this.site.redirect("");
	};
	/**
	*  refresh page if logged in
	*  @method loginCheck
	*/
	p.loginCheck = function()
	{
		$("#loginButton").untouch(this._doLogin.bind(this));
		$("#noButton").untouch(this._goHome.bind(this));
		this.site.refresh();
	};

	/**
	*  The magnet earn is done
	*  @method onMagnet
	*  @param {Boolean} success If the magnet was earned
	*/
	p.onMagnet = function(success)
	{
		var img;

		img = $("img#magnets-visitor");
		if (success && !img.attr("src").match(/1\./))
		{
			img.attr("src", img.attr("src").replace(".", "1."));
		}

		img = $("img#first-login");
		// Check for the first time login and make sure we aren't already showing the updated
		if ($("#notifications").data('first-time-login') && !img.attr("src").match(/1\./))
		{
			img.attr("src", img.attr("src").replace(".", "1."));
		}
		return true;
	};

	p.exit = function()
	{
		$(window).off("touchstart", touchCatcher);
		if(this.uri != "magnets")
			$(".listLink").off("mousedown mouseup", mouseBlocker);
		else
			$(".magnetLink").off("mousedown mouseup", mouseBlocker);
	};

	// Assign to the global space
	namespace('LunchLab.pages').MagnetsPage = MagnetsPage;

}());