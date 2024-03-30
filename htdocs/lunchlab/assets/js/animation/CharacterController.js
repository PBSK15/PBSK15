(function(){

	// Required imports, these need to be available
	// before this class is included on the page
	var Application = cloudkid.Application,
		OS = cloudkid.OS,
		MediaLoader = cloudkid.MediaLoader,
		Audio = cloudkid.Audio,
		AudioAnimation = cloudkid.AudioAnimation,
		Animator = cloudkid.Animator;

	/**
	*  Character controller plays a character animation and some audio
	*  using EaselJS and HTML5 audio playback
	*  @class CharacterController
	*  @extends cloudkid.Application
	*  @constructor
	*  @param {Object} options The options
	*  @param {String} options.name The name of the character class to intanciate
	*  @param {String} options.animation The name of the animation file to load
	*  @param {String} options.audio The name of the audio data json to load
	*/
	var CharacterController = function(options)
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
		*  The collection of audio animation classes 
		*  @property {Array} animations
		*  @private
		*/
		this.animations = [];

		/**
		*  The collection of animation aliases
		*  @property {Array} aliases
		*  @private
		*/
		this.aliases = [];

		/**
		*  The character animation timeline
		*  @property {createjs.MovieClip} character
		*  @private
		*/
		this.character = null;
	};
	
	// Extend the createjs container
	var p = CharacterController.prototype = new Application();
	
	// The name of this app
	p.name = "CharacterController";
	
	//var resizeBind = null;
	//var images = {};

	/** 
	*  Check if the sound has sound been initialized
	*  @property {Boolean} soundInitialized
	*  @private
	*  @default false
	*/
	var soundInitialized = false;

	/** 
	*  Has the sound been loaded
	*  @property {Boolean} soundLoaded
	*  @private
	*  @default false
	*/
	var soundLoaded = false;

	/**
	*  Has the character art been loaded
	*  @property {Boolean} artLoaded
	*  @private
	*  @default false
	*/
	var artLoaded = false;

	/**
	*  The bound character click callback
	*  @property {Function} characterClicked
	*  @private
	*/
	var characterClicked;


	/**
	*  The last animation index played
	*  @property {int} lastPlayed
	*  @private
	*  @default -1
	*/
	var lastPlayed = -1;

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
		

		artLoaded = soundLoaded = soundInitialized = false;
		// Initialize the audio
		Audio.init(
			this.options.audio,
			this._soundInitComplete.bind(this)
		);
		cloudkid.Animator.audioLib = Audio.instance;
		
		// Load the animation file
		var tasks =	[new cloudkid.LoadTask('characteranim', this.options.animation, this._characterLoaded.bind(this))];

		if(this.options.name == "freezerburn")
		{
			manifest = [
				{src:"guitar2.png", id:"guitar2"},
				{src:"popsicleLeg.png", id:"popsicleLeg"},
				{src:"PosicleBody.png", id:"PosicleBody"}
			];

			tasks.push(new cloudkid.ListTask('manifests', manifest, this._onManifestLoaded.bind(this)));
		}

		var taskManager = new cloudkid.TaskManager(tasks);
		taskManager.addEventListener(
			cloudkid.TaskManager.ALL_TASKS_DONE, 
			this._loadTasksComplete.bind(this)
		);
		taskManager.startAll();

		// Save the bound callbacks
		characterClicked = this._characterClicked.bind(this);

		//resizeBind = this.resize.bind(this);
		//$(window).on("resize", resizeBind);
		//this.resize();
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
		if(this.options.name == "freezerburn")
			this.character.hitRect = new createjs.Rectangle(this.character.nominalBounds.x, this.character.nominalBounds.y, this.character.nominalBounds.width, this.character.nominalBounds.height);
		this.addChild(this.character);
		this._characterIdle();
	};
	
	/**
	*  Handler when the character is clicked
	*  @method _characterClicked
	*  @private
	*/
	p._characterClicked = function()
	{
		if (soundLoaded)
		{
			$(OS.instance.stage.canvas).untouch(characterClicked);
			this.character.cursor = "";

			lastPlayed++;

			// If the last index played is greater than the total
			// number of animations we have to play, reset
			if (lastPlayed >= this.animations.length) lastPlayed = 0;

			var soundData = this.animations[lastPlayed];
			cloudkid.Animator.play(this.character, soundData.alias, this._characterIdle.bind(this), null, 0, 1, soundData);
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
		// Create the Audio animations based on the aliases
		// The sound alias needs to be the same as the frame event
		for(var i = 0; i < this.aliases.length; i++)
		{
			var alias = this.aliases[i];
			this.animations.push(
				{
					alias:alias,
					start:0
				}
			);
		}
		soundLoaded = true;

		// The character is clicked on, play the first sound
		setTimeout(characterClicked, 25);
		//this._characterClicked();
	};

	/**
	*  Play the character idle animation
	*  @method _characterIdle
	*  @private
	*/
	p._characterIdle = function()
	{
		if(!this.character) return;
		cloudkid.Animator.play(this.character, "idle");
		this.character.cursor = "pointer";
		$(OS.instance.stage.canvas).touch(characterClicked);
	};
	
	/**
	*  Resize function whenver the window resizes
	*  @method resize
	*/
	p.resize = function()
	{	
		//var stage = OS.instance.stage;
	};

	/**
	*  Destroy this app, don't use after this
	*  @method destroy
	*/
	p.destroy = function()
	{
		if(this.character){
			Animator.stop(this.character);
			$(OS.instance.stage.canvas).untouch(characterClicked);
		}

		//$(window).off("resize", resizeBind);
		this.removeAllChildren();

		this.character = 
		this.aliases =
		this.animations =  
		characterClicked = null;

		Audio.instance.stop();
		Audio.instance.destroy();
		//images = null;
	};

	// Assign to the global namespace
	namespace("LunchLab.animation").CharacterController = CharacterController;

}());