(function(){

	var swfobject = org.pbskids.swfobject2_2;

	/**
	*  For playing a flash game
	*  @class FlashGamePlayer
	*  @extends GamePlayer
	*  @constructor
	*/
	var FlashGamePlayer = function(options)
	{
		// Call the super constructor
		s.constructor.call(this, options);

		/** 
		*  The jquery element for player 
		*  @property {jquery} content
		*/
		this.content = null;

		// Construct the game
		this.initialize();
	},

	// Reference to the protoptyp
	p = FlashGamePlayer.prototype = new LunchLab.players.GamePlayer(),

	// Super prototype
	s = LunchLab.players.GamePlayer.prototype,

	// Singleton instance
	_instance = null;

	/**
	*  The singleton instance of the flash game player
	*  @property {FlashGamePlayer} instance
	*  @readOnly
	*/
	Object.defineProperty(FlashGamePlayer, "instance", 
		{
			get : function()
			{
				return _instance;
			}
		}
	);

	/**
	*  Constructor
	*/
	p.initialize = function()
	{
		_instance = this;

		var basePath = Canteen.settings.basePath;
		var cb = Canteen.settings.cacheBust !== undefined ? Canteen.settings.cacheBust : "";
		
		var flashVars = {
			local : Canteen.settings.local,
			debug : Canteen.settings.debug,
			cacheBust : Canteen.settings.debug,
			versions : basePath + 'assets/txt/versions.txt',
			basePath : basePath,
			gateway : "http:" + Canteen.settings.host + basePath + "amf",
			folder : this.name,
			trackEvent : "GA_obj.trackEvent",
			gameId : this.gameId,
			gameBaseUrl : basePath + Canteen.settings.gamesPath,
			siteUrl : "http:" + Canteen.settings.baseUrl,
			showLoginCall: 'PBS.KIDS.identity.signin',
			callbackObject: "LunchLab.players.FlashGamePlayer.instance"
		};

		$.extend(flashVars, this.options.flashVars);

		var params = {
			wmode : 'opaque',
			allowScriptAccess : 'always',
			id : this.id,
			bgcolor : '#000000',
			menu : 'false'
		};

		swfobject.embedSWF(
			basePath + "assets/swfs/LunchLab.swf" + cb, 
			this.id, 
			"100%", 
			"100%", 
			"10.0.0", 
			'', 
			flashVars,
			params,
			{ id : this.id },
			this.onSwfEmbedded.bind(this)
		);
	};

	/**
	*  If the load is completed
	*  @method loadComplete
	*/
	p.loadComplete = function(ev)
	{
		this.listenerJQ.trigger("gameLoaded");

		this.listenerJQ.resize();//just in case our other attempts to get Firefox to behave didn't work
	};

	/**
	*  If the load is completed
	*  @method loadComplete
	*/
	p.loadProgress = function(amount)
	{
		this.listenerJQ.trigger({type:"loadProgress", amount:amount});
	};

	p.awardKidPoints = function(alias)
	{
		this.listenerJQ.trigger({type:"kid-award-kid-points", coinEventAlias:alias});
	};

	p.earnRequirement = function(id)
	{
		this.listenerJQ.trigger({type:"magnet-earn-requirement", magnetRequirement:id});
	};

	/**
	*  Callback when swf object is done
	*  @method onSwfEmbedded
	*/
	p.onSwfEmbedded = function()
	{
		this.content = $("#"+this.id)
			.attr("width", this.width)
			.attr("height", this.height);

		this.dom = this.content.get(0);
		this.listenerJQ = $(this.dom.parentNode);
		this.addListeners();

		if(this.content.height() === 0)//Call resize an extra time if height isn't set fast enough in Firefox
			setTimeout(this.listenerJQ.resize.bind(this.listenerJQ), 100);
	};

	/**
	*  This is the login box closed implementation, See
	*  GamePlayer.loginCheck for more information about
	*  when this method is called.
	*  @method loginCheck
	*/
	p.loginCheck = function()
	{
		if(this.dom.loginCheck)
			this.dom.loginCheck();
	};

	/**
	*  Set the music muted state
	*  @method setMusicMuted
	*  @param {Boolean} mute If music is muted
	*/
	p.setMusicMuted = function(mute)
	{
		if(!this.isGameLoaded) return;

		this.dom.setMusicMuted(mute);
	};

	/**
	*  Set the effects muted state
	*  @method setEffectsMuted
	*  @param {Boolean} mute If effects are muted
	*/
	p.setEffectsMuted = function(mute)
	{
		if(!this.isGameLoaded) return;

		this.dom.setEffectsMuted(mute);
	};

	/**
	*  Set the captions muted state
	*  @method setCaptionsMuted
	*  @param {Boolean} mute If captions are muted
	*/
	p.setCaptionsMuted = function(mute)
	{
		if(!this.isGameLoaded) return;
		
		this.dom.setCaptionsMuted(mute);
	};

	/**
	*  The game becomes visible
	*  @method show
	*/
	p.show = function()
	{
		this.dom.show();
	};

	/**
	*  The game becomes invisible
	*  @method hide
	*/
	p.hide = function()
	{
		this.dom.hide();
	};

	/**
	*  Destroy, don't use after this
	*/
	p.destroy = function()
	{
		this.content = null;

		s.destroy.call(this);
	};

	// Assign to the namesapce
	namespace('LunchLab.players').FlashGamePlayer = FlashGamePlayer;

}());