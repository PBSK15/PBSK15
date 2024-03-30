(function(undefined){
	
	// Imports
	var VideoEvent = org.pbskids.video.VideoEvent,
		PlayList = org.pbskids.video.PlayList,
		Player = org.pbskids.video.Player;

	/**
	*  The Producer Player wrapper class for the PBSKIDS HTML5 video player
	*  @class ProducerPlayer
	*  @constructor 
	*  @param {Object} playerOptions  The player options
	*  @param {Object} playlistOptions The playlist options
	*/
	var ProducerPlayer = function(playerOptions, playlistOptions)
	{
		/** 
		*  Function callback when a video has finished playing 
		*  @property {Function} onCompleted
		*/
		this.onCompleted = null;
		
		/** 
		*  Function callback when the videos have finished loading 
		*  @property {Function} onLoaded
		*/
		this.onLoaded = null;
		
		/** 
		*  Function callback when a video has started playing 
		*  @property {Function} onStart
		*/
		this.onStart = null;

		/**
		*  The player object
		*  @property {org.pbskids.video.Player} player
		*/
		this.player = null;
		
		/** 
		*  The playlist object
		*  @property {org.pbskids.video.Playlist} playlist
		*/
		this.playlist = null;
		
		/** 
		*  The options 
		*  @property {Object} options
		*/
		this.options = null;
		
		/** 
		*  If the player is loaded and ready 
		*  @property {Boolean} ready
		*  @default false
		*/
		this.ready = false;

		/** 
		*  If we should display a playlist 
		*  @property {Boolean} hasPlaylist
		*  @default false
		*/
		this.hasPlaylist = false;

		/**
		*  The currently playing video GUID 
		*  @property {String} guid
		*/
		this.guid = null;

		/** 
		* Keep track of the paused state when the page blur/focuses 
		* a value of -1 means the page isn't hidden, 1 means the 
		* playing before hide, and 0 means paused before hide
		* 
		* @property {int} autoPaused
		* @private
		*/
		this.autoPaused = -1;

		/**
		* The videoPlayerContainer div, so we can keep track of resizing.
		* @property container
		* @private
		*/
		this.container = $("#videoPlayerContainer");

		// Construct
		this.initialize(playerOptions, playlistOptions);
	},
	
	/** Reference to the prototype */
	p = ProducerPlayer.prototype,

	basePath = Canteen.settings.cdnDomain + Canteen.settings.basePath + "assets/images/",
	cacheBust = Canteen.settings.cacheBust,
	
	/** The default options */
	_defaultOptions = {
		playerId : 'videoPlayer',
		playlistId :  'videoPlaylist',
		videoPlaylistItemClass : 'videoPlaylistItem',
		playlistOptions : {
			debugMode: Canteen.settings.debug,
			loadingIndicator : basePath + "arrowspin.gif" + cacheBust,
			loadMoreVideosMessage : "Show More Videos",
			loadMoreButtonClass	: "showmoreVideos"
		},
		playerOptions : {
			onVideoClick : "toggle-fullscreen",
			debugMode : Canteen.settings.debug,
			onHoverOverlay : {
				url: basePath + "button_big.png" + cacheBust,
				width:"58px", 
				height:"30px",
				fs_url: basePath + "button_small.png" + cacheBust,
				fs_width:"78px"
			},
			/*loadingOverlay	: {
				url: basePath + "arrowspin.gif" + cacheBust,
				swf: basePath + "arrowspin.swf" + cacheBust,
				width:"50px", 
				height:"50px",
				color:"black",
				opacity:"90"
			},*/
			playIconOverlay : {
				url : basePath + "button_overlay_play.png" + cacheBust,
				width : "200px",
				height : "200px",
				color : "black",
				opacity : "50"
			}
		}
	},

	/** Static function rerference */
	_onVideoEnd = null,
	
	/** Static function reference */
	_onPlayState = null;
	
	/**
	*  Create the producer player
	*  @method initialize
	*  @param {Object} playerOptions  The player options
	*  @param {Object} playlistOptions The playlist options
	*/
	p.initialize = function(playerOptions, playlistOptions)
	{
		_onVideoEnd = this._onVideoEnd.bind(this);
		_onPlayState = this._onPlayState.bind(this);

		// Create the options
		this.options = _defaultOptions;

		// Add to the options
		$.extend(this.options.playerOptions, playerOptions);
		$.extend(this.options.playlistOptions, playlistOptions);
		
		// Add the player completed callback, always override
		this.options.playerOptions.onPlayerComplete = this._onPlayerComplete.bind(this);
		
		this.player = new Player(
			this.options.playerId, 
			this.options.playerOptions
		);
	};

	/**
	*	Resizes the video container.
	*/
	p.resize = function()
	{
		this.container.css("height",this.container.width() * 0.5625);//keep a specific aspect ratio
	};
	
	/**
	*  Handler for when a video has ended
	*  @param The end event
	*/
	p._onVideoEnd = function(event)
	{
		if (this.onCompleted) this.onCompleted();
	};

	/**
	*  Handler for when a video has started playing
	*  @param The play stage change event
	*/
	p._onPlayState = function(event)
	{	
		if (event.canPlay && this.onStart && this.hasPlaylist)
		{
			var items = $("#"+this.options.playlistId + " li"),
				index = this.playlist.selectedIndex(),
				item = items.eq(index);
			
			var guid = item.attr('class');
			if(guid)
				guid = guid.match(/\bguid_[a-zA-Z0-9\-\_]+\b/)[0].substr(5);
			
			if (this.guid != guid)
			{
				this.guid = guid;
				if (this.onStart) this.onStart(guid);
			}
		}
	};
 
	/**
	*  When the video player has completed
	*  @access protected
	*  @param The player event
	*/
	p._onPlayerComplete = function(event)
	{
		if (!event.success) 
		{
			Debug.error("Player error: " + event.message);
		}
		else
		{
			$(document).off(VideoEvent.VIDEO_END, _onVideoEnd)
				.off(VideoEvent.CAN_PLAY_STATE_CHANGE, _onPlayState)
				.on(VideoEvent.VIDEO_END, _onVideoEnd)
				.on(VideoEvent.CAN_PLAY_STATE_CHANGE, _onPlayState);
					
			// Create the playlist
			if (this.hasPlaylist)
			{
				this.playlist = new PlayList(
					this.options.playlistId,
					this.options.videoPlaylistItemClass,
					this.player,
					this.options.playlistOptions
				);
			}
			this.ready = true;
		}
		this.onLoaded(event.success);
		this.onLoaded = null;
	};
	
	/**
	*  Refresh the playlist and load a video
	*  @param The media id (optional)
	*/
	p.play = function(guid)
	{
		if (!this.ready)
		{
			throw 'Player is not ready yet';
		}

		this.player.unload();

		if (this.hasPlaylist)
		{
			var refreshObject = guid !== undefined ? {guid:guid} : undefined;
			this.playlist.purge();			
			this.playlist.refresh(refreshObject);
		}
		else
		{
			this.player.loadAndPlay(guid);
		}
	};

	/** 
	* Callback when page visibility has gone to hidden
	* @method hide
	*/
	p.hide = function() 
	{
		if (!this.player) return;
		
		// Only do this once (this callback can happen repeatedly)
		if (this.autoPaused == -1)
		{
			// save the current status of the paused state
			this.autoPaused = !this.player.paused() ? 1 : 0;
		}
		this.player.pause();
	};
	
	/** 
	* Callback when page visibility has gone to show
	* @method show
	*/
	p.show = function()
	{
		if (!this.player) return;
		
		// 0 means we were playing before we went away
		// if that's the case we should unpause what the page
		// blur created
		if (this.autoPaused === 1)
		{
			this.player.playVideo();
		}
		this.autoPaused = -1;
	};

	/**
	*  Don't use the player after this
	*  @method destroy
	*/
	p.destroy = function()
	{
		if (this.player) this.player.unload();
		if (this.hasPlaylist && this.playlist) this.playlist.purge();

		this.onStart = null;
		this.onLoaded = null;
		this.onCompleted = null;
		this.player = null;
		this.playlist = null;
		this.options = null;
		this.ready = false;
		this.guid = null;
		this.container = null;

		$("#pbskids-comscore-video-beacon").remove();
	};
	
	/** Assign to the namespace */
	namespace('LunchLab.players').ProducerPlayer = ProducerPlayer;
	
}());