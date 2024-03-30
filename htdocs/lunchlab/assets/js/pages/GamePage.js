(function(Modernizr){

	/**
	*  The food page
	*  @class LunchLab.pages.GamePage
	*  @extends Canteen.Page
	*/
	var GamePage = function()
	{		
		/**
		*  The current game player
		*  @property {GamePlayer} player
		*/
		this.player = null;

		/**
		*  Optional options to pass
		*  @property {object} options
		*/
		this.options = {};
	};
	
	// Reference to the prototype
	var p = GamePage.prototype = new Canteen.Page();

	// Create the constructor
	p.constructor = GamePage;

	/**
	*  When the page is entered
	*  @method enter
	*/
	p.enter = function()
	{
		window.scrollTo(0, 72);
		// The game content jquery node
		var content = $("#gameContent");

		// The game options
		var options = {
			id : "gameContent",
			width : content.data('game-width'),
			height : content.data('game-height'),
			gameId : content.data('game-id'),
			name : content.data('name')
		};

		$.extend(options, this.options);

		if (content.data('is-flash') && Modernizr.flash)
		{
			this.player = new LunchLab.players.FlashGamePlayer(options);
		}
		else if (content.data('is-html') && Modernizr.canvas && Modernizr.audio)
		{
			if (content.data('is-webaudio') && !Modernizr.webaudio)
			{
				this.site.redirect('games');
				return;
			}
			this.player = new LunchLab.players.HTML5GamePlayer(options);
		}
		else
		{
			this.site.redirect('games');
		}
	};

	/** 
	* Callback when page visibility has gone to hidden
	* @method hide
	*/
	p.hide = function() 
	{
		this.player.hide();
	};
	
	/** 
	* Callback when page visibility has gone to show
	* @method show
	*/
	p.show = function()
	{
		this.player.show();
	};

	/**
	*  Pass through the login check to the player
	*  @method loginCheck
	*/
	p.loginCheck = function()
	{
		this.player.loginCheck();
	};

	/**
	*  Resize the game for the correct aspect ratio
	*  @method resize
	*/
	p.resize = function()
	{
		if(this.player)
		{
			var kitchenRatio = 494/869;//for MyKitchen
			var frame = $("#game .frame");
			if($("#game").data("aspect") === '')
				frame.css("padding-bottom", (kitchenRatio*100) + "%");
			var game = $("#game");
			game.css("width", "inherit");
			if($(window).width() > 600)
			{
				game.css("margin", "0 12px");
				frame.css("margin-top", "21px");
			}
			else
			{
				game.css("margin", "0");
				frame.css("margin-top", "10px");
			}

			var winHeight = $(window).height();
			var containerHeight = game.height();
			var topBar = $("#game .frame .topBar");
			topBar.show();
			
			if(containerHeight > winHeight)
			{
				if($(window).width() < 600)
				{
					topBar.hide();
					frame.css("margin-top", "0");
				}
					
				var ratio;

				if (DEBUG)
				{
					Debug.log("data-aspect: " + game.data('aspect'));
				}
				if(game.data('aspect') !== '')
					ratio = game.data('aspect') / 100;
				else
					ratio = kitchenRatio;

				var gameHeight = $("#gameContent").height();

				if(gameHeight === 0)//Firefox is a little slow to give a height to the Flash games - let's not use bad numbers
					return;

				var heightPadding = containerHeight - gameHeight;

				game.width((winHeight - heightPadding)/ratio);
				game.css("margin", "0 auto");
			}

		}
	};

	/**
	*  When the page is exited
	*  @method exit
	*/
	p.exit = function()
	{
		if (this.player)
		{
			this.player.destroy();
		}
	};

	// Assign to the global space
	namespace('LunchLab.pages').GamePage = GamePage;

}(Modernizr));