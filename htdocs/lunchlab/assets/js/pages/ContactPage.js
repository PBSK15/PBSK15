(function(){


	/**
	*  The Contact Us page
	*  @class LunchLab.pages.ContactPage
	*  @extends Canteen.Page
	*/
	var ContactPage = function(){},
	
	// Reference to the prototype
	p = ContactPage.prototype = new Canteen.Page();

	/**
	*  When the page is entered
	*  @method enter
	*/
	p.enter = function()
	{
		window.scrollTo(0, 72);
	};

	// Assign to the global space
	namespace('LunchLab.pages').ContactPage = ContactPage;

}());