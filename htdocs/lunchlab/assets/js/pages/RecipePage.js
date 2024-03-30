(function(){

	// Imports
	var ProducerPlayer = LunchLab.players.ProducerPlayer,
		MagnetDialog = LunchLab.dialogs.MagnetDialog,
		PrintablePage = LunchLab.pages.PrintablePage;

	/**
	*  The food page
	*  @class LunchLab.pages.RecipePage
	*  @extends Canteen.Page
	*/
	var RecipePage = function(){

		/**
		*  The video player object
		*  @property {ProducerPlayer} player
		*  @private
		*/
		this.player = null;

		/**
		*  The selected video guid
		*  @property {String} guid
		*  @private
		*/
		this.guid = null;

		/**
		*  The button to download
		*/
		this.button = null;
	},
	
	// Reference to the prototype
	p = RecipePage.prototype = new PrintablePage(),

	// The super prototype
	s = PrintablePage.prototype;

	/**
	*  When the page is entered
	*  @method enter
	*/
	p.enter = function()
	{
		s.enter.call(this);

		window.scrollTo(0, 72);

		this.guid = $("#videoPlayer").data('media-id');

		if (!this.guid) return;

		this.player = new ProducerPlayer(
			{
				pauseToggleControl : "#playButton"
			}
		);
		this.player.onLoaded = this._onLoaded.bind(this);
	};

	/**
	*  When the video player has completed
	*  @protected
	*  @method _onLoaded
	*/
	p._onLoaded = function()
	{
		this.player.player.loadAndPause(this.guid);
	};

	/**
	*  When the page is exited
	*  @method exit
	*/
	p.exit = function()
	{
		if(this.player)
		{
			this.player.destroy();
			this.player = null;
			this.guid = null;	
		}
		s.exit.call(this);
	};

	// Assign to the global space
	namespace('LunchLab.pages').RecipePage = RecipePage;

}());