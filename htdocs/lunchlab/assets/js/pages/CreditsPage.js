(function(){


	/**
	*  The Credits page
	*  @class LunchLab.pages.CreditsPage
	*  @extends Canteen.Page
	*/
	var CreditsPage = function(){},
	
	// Reference to the prototype
	p = CreditsPage.prototype = new Canteen.Page();

	/**
	*  When the page is entered
	*  @method enter
	*/
	p.enter = function()
	{
		window.scrollTo(0, 72);
		$("h2.toggler").touch(function(){
			$(this).toggleClass('selected');
			$(this).next().slideToggle("slow");
		});
	};

	p.exit = function()
	{
		$("h2.toggler").untouch();
	};

	// Assign to the global space
	namespace('LunchLab.pages').CreditsPage = CreditsPage;

}());