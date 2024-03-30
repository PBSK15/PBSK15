(function(){

	// Required imports, these need to be available
	// before this class is included on the page
	var Application = cloudkid.Application,
		OS = cloudkid.OS,
		TaskManager = cloudkid.TaskManager,
		LoadTask = cloudkid.LoadTask,
		MediaLoader = cloudkid.MediaLoader,
		Audio = cloudkid.Audio,
		Stage = createjs.Stage,
		Animator = cloudkid.Animator;

	/**
	*  Character controller plays a character animation and some audio
	*  using EaselJS and HTML5 audio playback
	*  @class HomeCharacterController
	*  @extends cloudkid.Application
	*  @constructor
	*  @param {Object} options The options
	*  @param {String} options.name The name of the character class to intanciate
	*  @param {String} options.animation The name of the animation file to load
	*  @param {String} options.audio The name of the audio data json to load
	*/
	var HomeCharacterController = function(options)
	{
		/**
		*  The collection of properties
		*  @property {Object} options
		*/
		this.options = options;

		/**
		*  The scale of the clip
		*  @property {Number} scale
		*  @private
		*/
		this.scale = 1;

		/**
		*  The character animation timeline
		*  @property {createjs.MovieClip} character
		*  @private
		*/
		this.character = null;
	};
	
	// Extend the createjs container
	var p = HomeCharacterController.prototype = new Application();
	
	// The name of this app
	p.name = "HomeCharacterController";

	/** 
	*  Check if the sound has sound been initialized
	*  @property {Boolean} soundInitialized
	*  @private
	*  @default false
	*/
	var soundInitialized = false,

	/** 
	*  Has the sound been loaded
	*  @property {Boolean} soundLoaded
	*  @private
	*  @default false
	*/
	soundLoaded = false,

	/**
	*  Has the character art been loaded
	*  @property {Boolean} artLoaded
	*  @private
	*  @default false
	*/
	artLoaded = false,

	/**
	*  The bound character idle callback
	*  @property {Function} characterIdle
	*  @private
	*/
	characterIdle = null,

	/**
	*  The AudioAnimation for this character
	*  @property {cloudkid.AudioAnimation} anim
	*  @private
	*/
	anim = null,

	/**
	*  If the character can be played
	*  @property {Boolean} characterPlayable
	*  @private
	*  @default false
	*/
	characterPlayable = false,

	/**
	*  The bound click on the document
	*  @property {Function} somethingClicked
	*  @private
	*/
	somethingClicked = null,

	/**
	*  The type of event to play the character
	*  @property {String} touchEvent
	*  @private
	*/
	touchEvent = null,

	/**
	*  The mixie animation
	*  @property {createjs.MovieClip} mixie
	*  @private
	*/
	mixie = null,

	/**
	*  The mixie animation stage
	*  @property {createjs.Stage} mixieStage
	*  @private
	*/
	mixieStage = null;	

	/**
	*  The global collection of images
	*/
	images = {};

	/**
	*  This is called by the OS when the application is ready
	*  @method init
	*  @protected
	*/
	p.init = function()
	{		
		// Enable the cursor change
		OS.instance.stage.enableMouseOver(30);

		// Add cache busting if debug is true
		MediaLoader.instance.cacheManager.cacheBust = OS.instance.options.debug || false;
		
		// Set the default boolean
		artLoaded = soundLoaded = soundInitialized = characterPlayable = false;

		this.character = null;

		// Initialize the audio
		Audio.init(
			this.options.audio,
			this._soundInitComplete.bind(this)
		);
		Animator.audioLib = Audio.instance;
		
		// Load the animation file
		var tasks =	[new LoadTask('characteranim', this.options.animation, this._characterLoaded.bind(this))];

		var taskManager = new TaskManager(tasks);
		taskManager.addEventListener(
			TaskManager.ALL_TASKS_DONE, 
			this._loadTasksComplete.bind(this)
		);
		taskManager.startAll();

		// Save the bound callbacks
		characterIdle = this._characterIdle.bind(this);
		somethingClicked = this._characterClicked.bind(this);

		$('body').on("touchclick", somethingClicked);

		//resizeBind = this.resize.bind(this);
		//$(window).on("resize", resizeBind);
		//this.resize();
		MediaLoader.instance.load('Mixie_Home.js', this._mixieLoaded.bind(this));
	};

	/**
	*  Resume the animation
	*  @method resume
	*/
	p.resume = function()
	{
		OS.instance.resume();
		Audio.instance.resume();
		Animator.resume();
	};

	/**
	*  Pause the animation and audio
	*  @method pause
	*/
	p.pause = function()
	{
		OS.instance.pause();
		Audio.instance.pause();
		Animator.pause();
	};

	/**
	*  Mixie animation is finished loading
	*  @method _mixieLoaded
	*  @param {MediaLoadResult} result
	*  @private
	*/
	p._mixieLoaded = function(result)
	{
		if(result !== undefined)
			document.body.appendChild(result.content);

		var canvas = document.getElementById("homeMixie");
		
		mixieStage = new Stage(canvas);
		mixie = new lib.Mixie_Home();
		mixie.enableFramerateIndependence(30);
		mixieStage.addChild(mixie);
		Animator.play(mixie, "intro", this._mixieIdle.bind(this));
	};

	/**
	*  Play the mixie idle
	*  @method _mixieIdle
	*  @private
	*/
	p._mixieIdle = function()
	{
		Animator.play(mixie, "idle");
	};
	
	/**
	*  Media Loader callback on the animation load
	*  @method _characterLoaded
	*  @private
	*/
	p._characterLoaded = function(result)
	{
		if(result !== undefined)
			document.body.appendChild(result.content);
	};

	/**
	*  Media Loader callback on the manifest load
	*  @method _onManifestLoaded
	*  @private
	*/
	p._onManifestLoaded = function(results)
	{
		for(var id in results)
		{
			images[id] = results[id].content;
		}
	};

	/**
	*  Handler for all art load tasks
	*  @method _loadTasksComplete
	*  @private
	*/
	p._loadTasksComplete = function()
	{
		artLoaded = true;

		if(soundInitialized)
		{
			this._showCharacter();
		}	
	};
	
	/**
	*  Sound initialization complete callback
	*  @method _soundInitComplete
	*  @private
	*/
	p._soundInitComplete = function()
	{
		this.aliases = Audio.instance.getAliases();

		soundInitialized = true;
		
		if(artLoaded)
		{
			this._showCharacter();
		}
	};
	
	/**
	*  Add the character and show
	*  @method _showCharacter
	*  @private
	*/
	p._showCharacter = function()
	{
		this.character = new lib[this.options.name]();
		this.character.enableFramerateIndependence(30);
		this.character.mouseChildren = false;
		this.addChild(this.character);
		Animator.play(this.character, "intro", this._introDone.bind(this));
	};
	
	/**
	*  Handler when the character is clicked
	*  @method _characterClicked
	*  @private
	*/
	p._characterClicked = function(e)
	{
		$('body').off();
		if (soundLoaded)
		{
			if(characterPlayable)
			{
				characterPlayable = false;
				if(this.character)
					this.character.cursor = "";
				Animator.play(this.character, "action", characterIdle, null, 0, 1, {alias:this.options.name, start:0});
			}
			
		}
		else
		{
			Audio.instance.load(this._soundLoaded.bind(this));
		}
	};
	
	/**
	*  Callback when the audio is finished loading
	*  @method _soundLoaded
	*  @private
	*/
	p._soundLoaded = function()
	{
		soundLoaded = true;

		// The character is clicked on, play the first sound
		setTimeout(this._characterClicked.bind(this), 25);
	};

	/**
	*  When the intro is done playing
	*  @method _introDone
	*  @private
	*/
	p._introDone = function()
	{
		Audio.instance.load(this._soundLoaded.bind(this));
		characterIdle();
	};

	/**
	*  Play the character idle animation
	*  @method _characterIdle
	*  @private
	*/
	p._characterIdle = function()
	{
		if(!this.character) return;
		Animator.play(this.character, "idle");
		this.character.cursor = "pointer";
		characterPlayable = true;
	};

	/**
	*  Update function
	*  @method update
	*  @param {int} elapsed Number of milliseconds since last update
	*/
	p.update = function(elapsed)
	{
		if(mixieStage)
			mixieStage.update(elapsed);
	};
	
	/**
	*  Destroy this app, don't use after this
	*  @method destroy
	*/
	p.destroy = function()
	{
		$('body').off();

		this.removeAllChildren();

		if(this.character)
			Animator.stop(this.character);
		this.character = 
		characterIdle = null;

		Audio.instance.stop();
		Audio.instance.destroy();

		OS.instance.stage.clear();

		if(mixieStage)
		{
			Animator.stop(mixie);
			mixieStage.clear();
			mixieStage = 
			mixie = null;
		}
	};

	// Assign to the global namespace
	namespace("LunchLab.animation").HomeCharacterController = HomeCharacterController;

}());