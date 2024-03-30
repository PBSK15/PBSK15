(function(){

	// Imports
	var OS = cloudkid.OS,
		CharacterController = LunchLab.animation.CharacterController,
		MagnetDialog = LunchLab.dialogs.MagnetDialog;

	/**
	*  The food page
	*  @class LunchLab.pages.CharacterPage
	*  @extends Canteen.Page
	*/
	var CharacterPage = function(){},
	
	// Reference to the prototype
	p = CharacterPage.prototype = new Canteen.Page(),

	/**
	*  If our browser has the features to display this content
	*  @property {Boolean} _showAnimation
	*  @private
	*/
	_showAnimation = Modernizr.canvas && Modernizr.audio;

	/**
	*  When the page is entered
	*  @method enter
	*/
	p.enter = function()
	{
		MagnetDialog.earnRequirementByContent('Page', $("#characterFrame").data('id'));
		window.scrollTo(0, 72);
		if (!_showAnimation)
		{
			return;
		}

		if (Canteen.settings.animationsPath === undefined)
		{
			throw "animationsPath needs to be defined in Canteen.settings";
		}
		var basePath = Canteen.settings.cdnDomain + Canteen.settings.basePath;
		var name = (this.uri.split('/')[1]);
		var os = OS.init("stage", {
			fps:30, 
			clearView:true,
			basePath: basePath + Canteen.settings.animationsPath
		});
		os.addApp(new CharacterController({
			"name": name.replace(/-/g, ""),
			"animation": name + ".js",
			"audio": name+ ".json"
		}));
	};

	/**
	*  When the page is exited
	*  @method exit
	*/
	p.exit = function()
	{
		if (!_showAnimation)
		{
			return;
		}

		OS.instance.destroy();
	};

	// Assign to the global space
	namespace('LunchLab.pages').CharacterPage = CharacterPage;

}());