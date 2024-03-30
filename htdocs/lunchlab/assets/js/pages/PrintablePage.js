(function(){

	// Imports
	var MagnetDialog = LunchLab.dialogs.MagnetDialog;

	/**
	*  The food page
	*  @class LunchLab.pages.PrintablePage
	*  @extends Canteen.Page
	*/
	var PrintablePage = function(){

		this.button = null;

	},
	
	// Reference to the prototype
	p = PrintablePage.prototype = new Canteen.Page();

	/**
	*  When the page is entered
	*  @method enter
	*/
	p.enter = function()
	{
		this.button = $("#downloadButton")
			.untouch() // remove the existing event
			.touch(this._checkMagnetRequirement.bind(this));
	};

	/**
	*  Handler for the magnet requirement
	*/
	p._checkMagnetRequirement = function(ev)
	{
		MagnetDialog.earnRequirementByContent(
			'Recipe', 
			this.button.data('id'),
			this._onMagnet.bind(this)
		);	
	};

	/**
	*  Visit the magnet
	*/
	p._onMagnet = function()
	{
		var href = this.button.attr('href');
		
		// Download using an iframe
		if (!Modernizr.touch)
		{
			$(".download iframe").remove();
			this.button.after("<iframe style='display:none' src='"+href+"' id='downloadFile'></iframe>");
		}
		else
		{
			// Redirect to the page directly
			//assemble the full URL because iOS is picky
			document.location.href = document.location.protocol + "//" + document.location.hostname + href;
			//window.open(document.location.protocol + "//" + document.location.hostname + href, "_blank");
		}
	};

	/**
	*  When the page is exited
	*  @method exit
	*/
	p.exit = function()
	{
		this.button.untouch();
		this.button = null;
	};

	// Assign to the global space
	namespace('LunchLab.pages').PrintablePage = PrintablePage;

}());