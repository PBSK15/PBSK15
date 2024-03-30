(function(document, window){

	var OS = cloudkid.OS,
		Audio = cloudkid.Audio,
		Animator = cloudkid.Animator,
		SupportUtils = LunchLab.utils.SupportUtils,
		HomeCharacterController = LunchLab.animation.HomeCharacterController;

	/**
	*  The home page
	*  @class LunchLab.pages.HomePage
	*  @extends Canteen.Page
	*/
	var HomePage = function(){},

	/**
	*  The number of ms between promo cycles
	*  @property {int} TIMEOUT
	*  @default 6000
	*/
	TIMEOUT = 6000,

	/**
	*  The number of ms for promos to cross fade
	*  @property {int} FADE_TIME
	*  @default 500
	*/
	FADE_TIME = 500,

	/**
	*  The minimum size of the page to show animation
	*  @property {int} MIN_ANIMTION_WIDTH
	*  @default 700
	*/
	MIN_ANIMTION_WIDTH = 700,

	/**
	*  The maximum size for a mobile layout
	*  @property {int} MOBILE_LAYOUT
	*  @default 600
	*/
	MOBILE_LAYOUT = 600,

	/**
	*  The maximum promo width
	*  @property {int} PROMO_WIDTH
	*  @default 610
	*/
	PROMO_WIDTH = 610,

	// Reference to the prototype
	p = HomePage.prototype = new Canteen.Page(),

	/**
	*  The jquery cycle box for promos
	*  @property {jquery} _box
	*  @private
	*/
	_box = null,

	/**
	*  If our browser has the features to display this content
	*  @property {Boolean} _display
	*  @private
	*/
	_display = Modernizr.canvas && Modernizr.audio,
	
	/**
	*  If the animation has been loaded
	*  @property {Boolean} _animationLoaded
	*  @private
	*/
	_animationLoaded = false,

	/**
	*  If the animation has started loading
	*  @property {Boolean} _animationLoading
	*  @private
	*/
	_animationLoading = false,

	/**
	*  The animation controller
	*  @property {HomeCharacterController} _animation
	*  @private
	*/
	_animation = null,

	/**
	*  The window jquery node
	*  @property {jquery} _win
	*  @private
	*/
	_win = null,

	/**
	*  The document jquery node
	*  @property {jquery} _doc
	*  @private
	*/
	_doc = null,

	/**
	*  The frame containing promos
	*  @property {jquery} _frame
	*  @private
	*/
	_frame = null,

	/**
	*  The canvases
	*  @property {jquery} _canvas
	*  @private
	*/
	_canvas = null,

	/**
	*  The collection of homepage promo list items
	*  @property {jquery} _promos
	*  @private
	*/
	_promos = null,

	/**
	*  If our browser has the features to display this content
	*  @property {Boolean} _showAnimation
	*  @private
	*/
	_showAnimation = (Modernizr.canvas && Modernizr.audio);

	/**
	*  When the page is entered
	*  @method enter
	*/
	p.enter = function()
	{		
		// Important to remove HTML nodes which can't be
		// displayed on this device
		SupportUtils.clean();

		_animationLoaded = false;
		_animationLoading = false;

		_win = $(window);
		_doc = $(document);
		_canvas = $('canvas');
		_frame = $('#promoFrame');
		_box = $('#promoBox');
		_promos = _box.find('li');

		// Setup the rotation of
		_box.cycle({ 
			prev : '#prev', 
			next : '#next', 
			timeout : TIMEOUT,
			speed : FADE_TIME,
			before : this.resize.bind(this)
		});

		//fix miscalculated size on initial load
		if(_win.width() <= MIN_ANIMTION_WIDTH)
			setTimeout(this.resize.bind(this), 50);

		this.resize();	
	};

	/**
	*  Start the loading of the animation
	*  @method _startAnimationLoad
	*  @private
	*/
	p._startAnimationLoad = function()
	{
		_animationLoading = true;

		this.site.gateway.get(
			this._getAnimation.bind(this),
			'home-animation',
			'get-random-home-animation'
			);
	};

	/**
	*  Resaume the cycle on page show
	*  @method show
	*/
	p.show = function()
	{
		_box.cycle('resume');

		if (_animationLoaded)
		{
			_animation.resume();
		}
	};

	/**
	*  Pause the cycle on page hide
	*  @method hide
	*/
	p.hide = function()
	{
		_box.cycle('pause');

		if (_animationLoaded)
		{
			_animation.pause();
		}
	};

	/**
	*  Callback from gateway for the current animation
	*  @method _getAnimation
	*  @private
	*  @param {Object} response The gateway resposne
	*/
	p._getAnimation = function(response)
	{
		if (response.type == "error")
		{
			throw "There was an error loading animation data";
		}

		var file = response.result.file;
		var settings = Canteen.settings;
		var basePath = settings.cdnDomain + settings.basePath + settings.characterAssetPath;

		var os = OS.init('homeCharacter', {
			fps : 30, 
			clearView : true,
			basePath : basePath
		});

		_animation = new HomeCharacterController({
			name : file.substr(file.lastIndexOf("/")+1),
			animation : file + '.js',
			audio : file+ '.json'
		});

		os.addApp(_animation);

		_animationLoaded = true;
		this.resize();
	};

	/**
	*  The window resize function
	*  @method resize
	*  @private
	*/
	p.resize = function()
	{
		var leftOffset;
		var winWidth = _win.width();
		var boxWidth = _box.width();

		// Mobile layout!
		if (winWidth <= MOBILE_LAYOUT)
		{		
			leftOffset = (boxWidth - (boxWidth * 1.28)) / 2;
			_promos.width('128%');
			_frame.height(_promos.height());
			_box.height(_promos.height() + 33);
			_promos.css('left', leftOffset);

		}
		else
		{
			leftOffset = (boxWidth - PROMO_WIDTH) / 2;
			_promos.width(boxWidth - leftOffset * 2);
			_promos.css('left', leftOffset);
			_box.removeAttr('style');
			_frame.removeAttr('style');
		}		

		// Too narrow for animation
		if(winWidth <= MIN_ANIMTION_WIDTH)
		{
			_canvas.hide();

			if (_animationLoaded)
			{
				_animation.pause();
			}
		}
		else
		{
			_canvas.show();

			if (_animationLoaded)
			{
				_animation.resume();
			}
			else if(!_animationLoading)
			{
				this._startAnimationLoad();
			}
		}	
	};

	/**
	*  When the page is exited
	*  @method exit
	*/
	p.exit = function()
	{
		if (_animationLoaded)
		{
			OS.instance.destroy();
		}

		if (_box)
		{
			_box.css("pointer-events", "none");
			_box.cycle('destroy');
		}

		_animation =
		_frame = 
		_canvas = 
		_win =
		_doc =
		_box = null;
	};

	// Assign to the global space
	namespace('LunchLab.pages').HomePage = HomePage;

}(document, window));