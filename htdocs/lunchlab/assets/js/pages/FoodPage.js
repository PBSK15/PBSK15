(function(){

	/**
	*  The food page
	*  @class LunchLab.Pages.FoodPage
	*  @extends Canteen.Page
	*/
	var FoodPage = function(){

		this.search = null;
		this.searchText = null;
		this.foodFact = null;
		this.timer = null;
	};

	/**
	*  The number of ms until the next foodfact
	*  @param {int} FACT_TIMEOUT
	*  @readOnly
	*  @final
	*/
	FoodPage.FACT_TIMEOUT = 5000;
	
	// Reference to the prototype
	var p = FoodPage.prototype = new Canteen.Page();

	/**
	*  When the page is entered
	*  @method enter
	*/
	p.enter = function()
	{
		this.searchText = $("#searchText").keypress(this._onEnter.bind(this));
		this.searchGo = $("#searchGo").touch(this._onSubmit.bind(this));
		this.searchText.focus();

		// Setup the food fact
		this.foodFact = $("#foodFact");
		this.enableTimer(true);		
	};

	/**
	*  Enable or disable the food fact timer
	*  @method enableTimer
	*  @param {Boolean} enable If the timer should be turned on
	*/
	p.enableTimer = function(enable)
	{
		if (this.timer)
		{
			clearTimeout(this.timer);
			this.timer = null;
		}
		if (enable)
		{
			this.timer = setInterval(
				this.randomFact.bind(this), 
				FoodPage.FACT_TIMEOUT
			);
		}
	};

	/**
	*  Fetch a random foodfact
	*  @method randomFact
	*/
	p.randomFact = function()
	{
		this.enableTimer(false);
		
		this.site.gateway.get(
			this.onRandomFact.bind(this),
			'food-fact',
			'get-random-food-fact'
		);
	};

	/**
	*  Data received for the next random fact
	*  @method onRandomFact
	*  @param {Object} response THe response from the gateway
	*/
	p.onRandomFact = function(response)
	{
		if (!this.foodFact) return;

		var foodFact = response.result;

		this.foodFact.find(".description").html(foodFact.description);
		this.foodFact.find(".title").html(foodFact.name);
		this.foodFact.find("img").attr('src', foodFact.image + Canteen.settings.cacheBust);

		if (response.type == "success")
		{
			this.enableTimer(true);	
		}
	};

	/**
	*  Handler when the search is submitted
	*  @method _onSubmit
	*  @private
	*/
	p._onSubmit = function()
	{
		var search = this.searchText.val();
		if (search)
		{
			this.site.redirect('food/search/'+search);
		}
	};

	/**
	*  Handler when enter key is pressed on the search input
	*  @method _onEnter
	*  @private
	*  @param {event} event Keypress event
	*/
	p._onEnter = function(event)
	{
		var key = !event.charCode ? event.which : event.charCode;
		if (key == 13)
		{
			this._onSubmit();
		}
	};

	/**
	*  When the page is exited
	*  @method exit
	*/
	p.exit = function()
	{
		this.enableTimer(false);
		this.foodFact = null;

		this.searchGo.untouch();
		this.searchGo = null;

		this.searchText.off('keypress');
		this.searchText = null;
	};

	// Assign to the global space
	namespace('LunchLab.pages').FoodPage = FoodPage;

}());