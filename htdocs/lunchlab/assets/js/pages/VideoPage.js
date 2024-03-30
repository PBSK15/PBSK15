(function(){

	// Imports
	var ProducerPlayer = LunchLab.players.ProducerPlayer,
	MagnetDialog = LunchLab.dialogs.MagnetDialog;

	/**
	*  The food page
	*  @class LunchLab.pages.VideoPage
	*  @extends Canteen.Page
	*/
	var VideoPage = function()
	{		
		/**
		*  The current game player
		*  @property {ProducerPlayer} player
		*/
		this.player = null;

		/**
		* The player frame 
		*  @property {jquery} frame
		*/
		this.frame = null;

		/**
		*  If we are doing the initial URI change
		*  @property {Boolean} updatingUri
		*  @default false
		*/
		this.updatingUri = false;

		/**
		*  The select box of categories
		*  @property {jquery} categoriesList
		*/
		this.categoriesList = null;

		/**
		*  The collection of category objects
		*  @property {Array} categories
		*/
		this.categories = null;

		/**
		*  Whether or not the playlist needs to be refreshed after current video finishes
		*  @property {boolean} clearPlaylist
		*/
		this.clearPlaylist = false;

		/**
		*  ID of currently playing video (for magnet earning purposes)
		*  @property {int} currentVideoId
		*/
		this.currentVideoId = null;
	};
	
	// Reference to the prototype
	var p = VideoPage.prototype = new Canteen.Page();

	/**
	*  When the page is entered
	*  @method enter
	*/
	p.enter = function()
	{
		this.updatingUri = false;

		this.frame = $("#producerPlayer").addClass('loading');

		// Setup the toggling list of categories
		this.categories = {};

		this.categoriesList = $("#categoryList");

		this.categoriesList.find('option').each(getCategoryLinks.bind(this));
		this.categoriesList.on("change", this._onCategorySelect.bind(this));

		// Create the producer player
		this.player = new ProducerPlayer(
			{
				pauseToggleControl : ".controlRack .playPause",
				captionsToggleControl : ".controlRack .captions",
				muteToggleControl : ".controlRack .volume",
				scrubber : ".controlRack .scrubber"
			}
		);
		this.player.hasPlaylist = true;
		this.player.onLoaded = this._onLoaded.bind(this);
		this.player.onStart = this._onStart.bind(this);
	};

	p._onCategorySelect = function(e){
		var list = this.categoriesList[0];
		this.site.redirect(list.options[list.selectedIndex].value.split(Canteen.settings.basePath)[1]);		

	};

	/**
	*  Get the categories and seasons fromt the category links
	*  @method _getSeasonsCategories
	*  @param {int} i The touch event
	*  @private
	*/
	var getCategoryLinks = function(i)
	{
		var links = this.categoriesList.find('option');
		var link = links.eq(i),
			category = link.data('category'),
			season = link.data('season'),
			value = link.attr('value').split(Canteen.settings.basePath)[1];

		if (category)
		{
			this.categories[value] = category; 
		}
		else if (season)
		{
			this.categories[value] = season;
		}
	};

	/**
	*  Callback when a video is starting to play
	*  @method _onStart
	*/
	p._onStart = function(guid)
	{		
		this.site.gateway.get(
			this._onVideo.bind(this), 
			'video', 
			'get-video-by-media-id', 
			[guid]
		);
	};

	/**
	*  Response for searching for a video by GUID
	*  @param The server response
	*/
	p._onVideo = function(response)
	{
		if (response.type == 'error' || !response.result)
		{
			Debug.warn("Invalid video for GUID");
			this.site.redirect('videos');
			return;
		}
		else
		{
			this.currentVideoId = response.result.id;
			// Get the stub
			var uri = "videos/video/"+response.result.uri;
			if (this.uri != uri)
			{
				this.updatingUri = true;
				this.site.redirect(uri);
			}
		}
	};

	/**
	*  When the player has been fully initialized
	*  @method _onPlayerInit
	*  @private
	*/
	p._onLoaded = function(success)
	{
		this.frame.removeClass('loading');
		var guid = this.frame.data('guid');
		
		this.player.onCompleted = this._videoEnded.bind(this);
		if (guid)
		{
			this.player.play(guid);
			
			this.clearPlaylist = true;
		}
		else
		{
			this.player.play();
			this.clearPlaylist = false;
		}
		if ($(this.player.options.playerOptions.captionsToggleControl).css("display") == "none")
		{
			this.frame.addClass("no-captions");
		}
	};

	p._videoEnded = function()
	{
		MagnetDialog.earnRequirementByContent('Video', this.currentVideoId);

		if(this.clearPlaylist)
		{
			this.player.playlist.refresh();
			this.clearPlaylist = false;
		}
			
	};

	/**
	*  Change the video based on the URL
	*  @method _switchVideo
	*  @param {object} response The reponse from server
	*/
	p._switchVideo = function(response)
	{
		if (response.type == 'error')
		{
			Debug.error("Invalid video for URL");
			this.site.redirect("videos");
			return;
		}
		this.player.playlist.selectItem(response.result.mediaId);
	};

	/**
	*  Change the video based on the category
	*  @method _switchCategory
	*  @param {object} response The reponse from server
	*/
	p._switchCategory = function(response)
	{
		if (response.type == 'error')
		{
			Debug.error("Invalid video for URL");
			this.site.redirect("videos");
			return;
		}
		this.player.play(response.result.join(','));
	};

	/** 
	* Callback when page visibility has gone to hidden
	* @method hide
	*/
	p.hide = function() 
	{
		this.player.hide();
	};
	
	/** 
	* Callback when page visibility has gone to show
	* @method show
	*/
	p.show = function()
	{
		this.player.show();
	};

	p.resize = function()
	{
		this.player.resize();
	};

	/**
	*  When the page is exited
	*  @method exit
	*/
	p.exit = function()
	{

		try
		{
			this.player.destroy();
		}
		catch(e)
		{
			Debug.error("Caught error when destroying player: ");
			Debug.error(e);
		}

		this.currentVideoId = 
		this.categories = 
		this.categoryList = 
		this.player =
		this.frame = null;
	};

	/**
	*  Don't refresh after we already loaded
	*  @method refresh
	*/
	p.refresh = function(uri)
	{
		if (this.updatingUri)
		{
			this.updatingUri = false;
		}
		else if (/videos\/video\/[a-z0-9A-Z\-]+/.test(uri))
		{
			this.site.gateway.get(
				this._switchVideo.bind(this),
				'video',
				'get-video-by-uri',
				[uri.split('/')[2]]
			);
		}
		else if (this.categories[uri] !== undefined)
		{
			var serviceCall = /\/category\//.test(uri) ? 
				"get-category-media-ids" : 
				"get-season-media-ids";

			this.site.gateway.get(
				this._switchCategory.bind(this),
				'video',
				serviceCall,
				this.categories[uri] // either the season or category id
			);
		}
		else if (/^videos(\/)?$/.test(uri))
		{
			this.player.play();
		}
		return false;
	};

	// Assign to the global space
	namespace('LunchLab.pages').VideoPage = VideoPage;

}());