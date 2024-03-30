(function(){

	var GamePage = LunchLab.pages.GamePage;

	/**
	*  The food page
	*  @class LunchLab.pages.MyKitchenPage
	*  @extends Canteen.Page
	*/
	var MyKitchenPage = function()
	{
		s.constructor.call(this);		
	};
	
	// Reference to the prototype
	var p = MyKitchenPage.prototype = new GamePage(),

	// Super referenc
	s = GamePage.prototype;

	p.enter = function()
	{
		var settings = Canteen.settings;
		var uri = window.location.href.split('my-kitchen/');

		this.options = {
			flashVars : {
				baseShareUrl : 'http:' + settings.host + settings.basePath + 'my-kitchen/',
				share : uri[1]
			}
		};
		
		s.enter.call(this);
	};

	// Assign to the global space
	namespace('LunchLab.pages').MyKitchenPage = MyKitchenPage;

}());