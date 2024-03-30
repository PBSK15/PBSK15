(function(){

	/**
	*  For playing a flash game
	*  @class HTML5GamePlayer
	*  @extends GamePlayer
	*  @constructor
	*  @param {jquery} content The DOM element container which 
	*     contains folder and game-id 
	*/
	var HTML5GamePlayer = function(options)
	{
		// Call the super constructor
		s.constructor.call(this, options);

		this.messageReceiver = this.messageReceiver.bind(this);	

		// Construct the game
		this.initialize();
	},

	// Reference to the protoptype
	p = HTML5GamePlayer.prototype = new LunchLab.players.GamePlayer(),

	// Reference to the super prototype
	s = LunchLab.players.GamePlayer.prototype;

	/**
	*  Constructor
	*/
	p.initialize = function()
	{
		var settings = Canteen.settings;

		var src = settings.basePath + settings.gamesPath + this.name + "/index.html";

		$("#"+this.id).append("<iframe id='" + this.id + "_frame" + "' " + "scrolling='no' src='"+src+"'></iframe>");

		var iframe = document.getElementById(this.id + "_frame");

		this.dom = iframe.contentWindow || iframe;
		this.dom.hasLunchLabSite = true;
		this.dom.LLSiteWindow = $(this.dom);
		var sizer = $("#"+this.id);
		var jqIF = $(iframe);
		this._resizeFunc = function(){
			jqIF.width(sizer.width());
			jqIF.height(sizer.height());
		};
		sizer.on("resize", this._resizeFunc);
		jqIF.width(sizer.width());
		jqIF.height(sizer.height());

		//this.listenerJQ = $(this.dom);
		//this.addListeners();

		window.addEventListener("message", this.messageReceiver);
	};

	p.sendMessage = function(message)
	{
		this.dom.postMessage(message, "*");
	};

	p.messageReceiver = function(event)
	{
		var data = event.data;
		if(data == "LL_Game_Lib")
			this.dom.postMessage("In_LL_Site", "*");
		else
		{
			switch(data.type)
			{
				case "gameLoaded":
					this._loadComplete(data);
					break;
				case "loadProgress":
					this._loadProgress(data);
					break;
				case "kid-is-logged-in":
					this._getUser(data);
					break;
				case "game-save":
					this._saveData(data);
					break;
				case "kid-get-kid-saves-by-game":
					this._loadData(data);
					break;
				case "kid-award-kid-points":
					this._earnPoints(data);
					break;
				case "magnet-earn-requirement":
					this._earnMagnet(data);
					break;
			}
		}
	};

	/**
	*  This is the login box closed implementation, See
	*  GamePlayer.loginCheck for more information about
	*  when this method is called.
	*  @method loginCheck
	*/
	p.loginCheck = function()
	{
		this.sendMessage({type:"loginCheck"});
	};

	/**
	*  Set the music muted state
	*  @method setMusicMuted
	*  @param {Boolean} mute If music is muted
	*/
	p.setMusicMuted = function(mute)
	{
		if(!this.isGameLoaded) return;

		this.sendMessage({type:"muteChange", context:"music", mute: mute});
	};

	/**
	*  Set the effects muted state
	*  @method setEffectsMuted
	*  @param {Boolean} mute If effects are muted
	*/
	p.setEffectsMuted = function(mute)
	{
		if(!this.isGameLoaded) return;

		this.sendMessage({type:"muteChange", context:"sfx", mute: mute});
	};

	/**
	*  Set the captions muted state
	*  @method setCaptionsMuted
	*  @param {Boolean} mute If captions are muted
	*/
	p.setCaptionsMuted = function(mute)
	{
		if(!this.isGameLoaded) return;

		this.sendMessage({type:"muteChange", context:"captions", mute: mute});
	};

	/**
	*  The game is hidden
	*  @method hide
	*/
	p.hide = function()
	{
		if(!this.isGameLoaded) return;

		this.sendMessage({type:"pause"});
	};

	/**
	*  The game is showing
	*  @method show
	*/
	p.show = function()
	{
		if(!this.isGameLoaded) return;

		this.sendMessage({type:"unpause"});
	};

	/**
	*  Get the DOM element for the game player
	*  @method getContent
	*  @return {DOM} The DOM element for the player object
	*/
	p.getContent = function()
	{
		if (!this.dom)
		{
			this.dom = $("#"+this.id).get(0);
		}
		return this.dom;
	};

	/**
	*  Destroy, don't use after this
	*  @method destroy
	*/
	p.destroy = function()
	{
		$("#"+this.id).off("resize", this._resizeFunc);
		this._resizeFunc = null;
		s.destroy.call(this);
		window.removeEventListener("message", this.messageReceiver);
		this.messageReceiver = null;
	};

	// Assign to the namesapce
	namespace('LunchLab.players').HTML5GamePlayer = HTML5GamePlayer;

}());