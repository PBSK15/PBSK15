(function(window){

	/**
	*  For playing a flash game
	*  @class GamePlayer
	*  @constructor
	*  @param {object} options The options 
	*  @param {String} options.id The Id name of the content DOM element
	*  @param {int} options.width The width of the game
	*  @param {int} options.height The height of the game
	*  @param {String} options.name The folder name of the game
	*  @param {int} [options.gameId=0] The database game id for accessing leaderboards
	*  and applying other database class specific to the game
	*/
	var GamePlayer = function(options)
	{
		// Import the class name
		SavedData = SavedData || cloudkid.SavedData;
		ServiceCall = ServiceCall || LunchLab.utils.ServiceCall;

		// If we're extending, ignore!
		if (!options) return;

		/** 
		*  The DOM element id for content 
		*  @property {String} id
		*/
		this.id = options.id;

		/**
		*  The width of the game
		*  @property {int} width
		*/
		this.width = options.width;

		/**
		*  The height tof the game
		*  @property {int} height
		*/
		this.height = options.height;

		/**
		*  The folder name of the game
		*  @property {String} folder
		*/
		this.name = options.name;

		/**
		*  The database id of the game
		*  @property {int} gameId
		*/
		this.gameId = options.gameId || 0;

		/**
		*  Save the collection of options
		*  @property {object} options
		*/
		this.options = options;

		/** 
		*  The DOM element for player 
		*  @property {DOM} dom
		*/
		this.dom = null;

		/** 
		*  The jquery element for listening for events
		*  @property {jquery} listenerJQ
		*/
		this.listenerJQ = null;
		
		/** 
		*  The jquery element for game container 
		*  @property {jquery} container
		*/
		this.container = $("#game");

		/**
		*  If the game has finished loading 
		*  @property {Boolean} isGameLoaded
		*/
		this.isGameLoaded = false;

		/**
		*  The UI element for handling captions toggle
		*  @property {ContainerButton} captionsButton
		*  @private
		*/
		this.captionsButton = new ContainerButton("captionsButton", this.onCaptionsButton.bind(this));

		/**
		*  The UI element for handling music toggle
		*  @property {ContainerButton} musicButton
		*  @private
		*/
		this.musicButton = new ContainerButton("musicButton", this.onMusicButton.bind(this));

		/**
		*  The UI element for handling soundfx toggle
		*  @property {ContainerButton} effectsButton
		*  @private
		*/
		this.effectsButton = new ContainerButton("effectsButton", this.onEffectsButton.bind(this));

		//set up settings and initial checked state of buttons
		if (SavedData.read(CAPTIONS_SAVE) === null)
		{
			//first initialization
			SavedData.write(CAPTIONS_SAVE, true);
			SavedData.write(MUSIC_SAVE, false);
			SavedData.write(EFFECTS_SAVE, false);
			this.captionsButton.setChecked(false);
			this.musicButton.setChecked(true);
			this.effectsButton.setChecked(true);
		}
		else
		{
			this.captionsButton.setChecked(!SavedData.read(CAPTIONS_SAVE));
			this.musicButton.setChecked(!SavedData.read(MUSIC_SAVE));
			this.effectsButton.setChecked(!SavedData.read(EFFECTS_SAVE));
		}
	},

	// Reference to the protoptyp
	p = GamePlayer.prototype = {},

	/**
	*  The captions save cookie name
	*  @property {String} CAPTIONS_SAVE
	*  @readOnly
	*  @final
	*/
	CAPTIONS_SAVE = "LLGameCaptionsMuted",

	/**
	*  The music save cookie name
	*  @property {String} MUSIC_SAVE
	*  @readOnly
	*  @final
	*/
	MUSIC_SAVE = "LLGameMusicMuted",

	/**
	*  The effects save cookie name
	*  @property {String} EFFECTS_SAVE
	*  @readOnly
	*  @final
	*/
	EFFECTS_SAVE = "LLGameEffectsMuted";

	//make sure that the constructor is set properly
	p.constructor = GamePlayer;

	// The save data class
	var SavedData = null;
	var ServiceCall = null;

	/**
	*  Do any clean up here for javascript listeners etc
	*  @method destroy
	*/
	p.destroy = function()
	{
		if(window.PBS && window.PBS.KIDS && window.PBS.KIDS.$_auth)
			PBS.KIDS.$_auth("body").off('cbox_closed', this.onLoginBoxClosed);
		if(this.timeoutId)
			clearInterval(this.timeoutId);

		this.captionsButton.destroy();
		this.musicButton.destroy();
		this.effectsButton.destroy();

		var jqDom = this.listenerJQ;
		if(jqDom)
		{
			jqDom.off("gameLoaded", this._loadComplete);
			jqDom.off("kid-is-logged-in", this._getUser);
			jqDom.off("game-save", this._saveData);
			jqDom.off("kid-get-kid-saves-by-game", this._loadData);
			jqDom.off("kid-award-kid-points", this._earnPoints);
			jqDom.off("magnet-earn-requirement", this._earnMagnet);
		}
		this._loadComplete = 
		this._getUser = 
		this._saveData = 
		this._loadData = 
		this._earnPoints = 
		this._earnMagnet = null;

		this.options =
		this.container = 
		this.dom =
		this.listenerJS =
		this.width = 
		this.height =
		this.id = 
		this.name =
		this.captionsButton = 
		this.musicButton = 
		this.effectsButton = null;
	};

	p.addListeners = function()
	{
		var jqDom = this.listenerJQ;
		this._loadComplete = this._loadComplete.bind(this);
		this._getUser = this._getUser.bind(this);
		this._saveData = this._saveData.bind(this);
		this._loadData = this._loadData.bind(this);
		this._earnPoints = this._earnPoints.bind(this);
		this._earnMagnet = this._earnMagnet.bind(this);
		jqDom.on("gameLoaded", this._loadComplete);
		jqDom.on("kid-is-logged-in", this._getUser);
		jqDom.on("game-save", this._saveData);
		jqDom.on("kid-get-kid-saves-by-game", this._loadData);
		jqDom.on("kid-award-kid-points", this._earnPoints);
		jqDom.on("magnet-earn-requirement", this._earnMagnet);
	};

	/** Function to be overridden by HTML5GamePlayer for cross domain iframe communication */
	p.sendMessage = function()
	{
	};

	/** Figures out if a callback should be a normal callback or a postMessage() callback */
	p.doCallback = function(callback, data)
	{
		if(!callback) return;
		if(typeof callback == "string")
		{
			var message = {callback:callback};
			if(data !== undefined)
				message.data = data;
			this.sendMessage(message);
		}
		else
		{
			if(data !== undefined)
				callback(data);
			else
				callback();
		}
	};

	/**
	*  If the load is completed
	*  @method loadComplete
	*  @param {JQuery Event} ev An event object with a callback property.
	*/
	p._loadComplete = function(ev)
	{
		this.isGameLoaded = true;
		this.restoreMuteSettings();
		this.container.removeClass("loading");

		this.doCallback(ev.callback);
	};

	p._getUser = function(ev)
	{
		ServiceCall.create().get("kid/is-logged-in", this.doCallback.bind(this, ev.callback));
	};

	p._saveData = function(ev)
	{
		ServiceCall.create().post("LunchLab\\Forms\\GameSaveForm", null, {gameid: ev.gameId, save: JSON.stringify(ev.save)});
	};

	p._loadData = function(ev)
	{
		ServiceCall.create().get("kid/get-kid-saves-by-game", pullData.bind(this, this.doCallback.bind(this, ev.callback)), ev.gameId);
	};

	p._earnPoints = function(ev)
	{
		//ServiceCall.create().get("kid/award-kid-points", ev.callback, ev.coinEventAlias);
		LunchLab.dialogs.CoinDialog.awardKidPoints(ev.coinEventAlias);
	};

	p._earnMagnet = function(ev)
	{
		//ServiceCall.create().get("magnet/earn-requirement", ev.callback, ev.magnetRequirement);
		LunchLab.dialogs.MagnetDialog.earnRequirement(ev.magnetRequirement);
	};

	/**
	*  Handle the game save response
	*  @method pullData
	*  @private
	*  @param {Function} callback The callback function
	*  @param {object} response The server gateway response
	*/
	var pullData = function(callback, response)
	{
		if(callback)
		{
			callback(response ? JSON.parse(response.data) : null);
		}
	};

	/**
	*  When the login box has been closed either by login in correctly
	*  or canceling. There's no login event so all we can to is check
	*  for the user interaction with the login system.
	*  @method loginCheck
	*/
	p.loginCheck = function()
	{
		throw "loginCheck needs to be implemented";
	};

	/**
	*  Set the music muted state
	*  @method setMusicMuted
	*  @param {Boolean} mute If music is muted
	*/
	p.setMusicMuted = function(mute)
	{
		throw "Player must implement setMusicMuted";
	};

	/**
	*  Set the effects muted state
	*  @method setEffectsMuted
	*  @param {Boolean} mute If effects are muted
	*/
	p.setEffectsMuted = function(mute)
	{
		throw "Player must implement setEffectsMuted";
	};

	/**
	*  Set the captions muted state
	*  @method setCaptionsMuted
	*  @param {Boolean} mute If captions are muted
	*/
	p.setCaptionsMuted = function(mute)
	{
		throw "Player must implement setCaptionsMuted";
	};

	/**
	*  The game is hidden
	*  @method hide
	*/
	p.hide = function()
	{
		throw "Player must implement hide method";
	};

	/**
	*  The game is showing
	*  @method show
	*/
	p.show = function()
	{
		throw "Player must implement show method";
	};

	/**
	*  Sets all 3 mute states based on the saved values. Call this when the game has finished loading.
	*  @method restoreMuteSettings
	*/
	p.restoreMuteSettings = function()
	{
		this.setCaptionsMuted(SavedData.read(CAPTIONS_SAVE));
		this.setMusicMuted(SavedData.read(MUSIC_SAVE));
		this.setEffectsMuted(SavedData.read(EFFECTS_SAVE));
	};

	/**
	*  Callback for button clicks on the captions mute button.
	*  @method onCaptionsButton
	*  @param {Boolean} checked If the button is now checked
	*/
	p.onCaptionsButton = function(checked)
	{
		this.setCaptionsMuted(!checked);
		SavedData.write(CAPTIONS_SAVE, !checked);
	};

	/**
	*  Callback for button clicks on the music mute button.
	*  @method onMusicButton
	*  @param {Boolean} checked If the button is now checked
	*/
	p.onMusicButton = function(checked)
	{
		this.setMusicMuted(!checked);
		SavedData.write(MUSIC_SAVE, !checked);
	};

	/**
	*  Callback for button clicks on the effects mute button.
	*  @method onEffectsButton
	*  @param {Boolean} checked If the button is now checked
	*/
	p.onEffectsButton = function(checked)
	{
		this.setEffectsMuted(!checked);
		SavedData.write(EFFECTS_SAVE, !checked);
	};

	/**
	*  Button container
	*
	*/
	var ContainerButton = function(id, callback)
	{
		var button = this.button = $("#"+id);
		var checked = false;
		this.getChecked = function(){ return checked; };
		var setChecked = this.setChecked = function(c)
		{
			checked = c; 
			button.removeClass("checked");
			if (checked)
			{
				button.addClass("checked");
			}
		};

		// Listen for touch
		this.button.touch(function(){
			setChecked(!checked);
			callback(checked);
		});

		this.destroy = function()
		{
			this.button.untouch();
			this.getChecked = null;
			this.setChecked = null;
			this.destroy = null;
		};
	};

	// Assign to the namespace
	namespace('LunchLab.players').GamePlayer = GamePlayer;

}(window));