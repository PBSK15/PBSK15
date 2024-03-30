sbe.Loader = sbe.Class.extend(
{
	loadCallbacks : [],
	loadQueue : null,
	status : 0,

	loadedObjects : {},

	staticInit : function()
	{
		return sbe.loader || null;
	},

	init : function()
	{
		sbe.loader = this;

		// createjs.FlashPlugin.swfPath = sbe.prefix + 'media/swf/';
		// createjs.Sound.registerPlugins([ createjs.WebAudioPlugin, createjs.FlashPlugin, createjs.HTMLAudioPlugin ]);

		createjs.Sound.registerPlugins([ createjs.WebAudioPlugin, createjs.HTMLAudioPlugin ]);
		createjs.Sound.alternateExtensions = ['mp3', 'ogg'];
		createjs.Sound.EXTENSION_MAP.mp3 = 'mpeg';
	},

	load : function(manifest, loadCallback)
	{
		// check if any exist
		for ( var i = 0; i < manifest.length; i++ )
		{
			// duplicates?
			for ( var j = 0; j < manifest.length; j++ )
			{
				if ( manifest[i].id === manifest[j].id && i !== j )
				{
					manifest.splice(j, 1);
					j--;
				}
			}

			// already loaded
			if ( this.get(manifest[i].id) )
			{
				manifest.splice(i, 1);
				i--;
			}
			// apply cache
			else
				manifest[i].src += sbe.nocache;
		}

		this.loadCallback = loadCallback || this.loadCallback;

		if ( manifest.length )
			this.loadManifest(manifest);
		else
			this.handleComplete();
	},

	unload : function(manifest)
	{
		for ( var i = 0; i < manifest.length; i++ )
			this.set(manifest[i].id, null);
	},

	loadManifest : function(manifest)
	{
		if ( !this.loadQueue )
		{
			this.status = 0; // reset it

			var loadQueue = new createjs.LoadQueue(false);
			loadQueue.setMaxConnections(8);
			loadQueue.installPlugin(createjs.Sound);
			loadQueue.on('fileload', this.handleFileload, this);
			// loadQueue.on('complete', this.handleComplete, this);

			this.loadQueue = loadQueue;
		}

		this.loadQueue.loadManifest(manifest);
	},

	handleFileload : function(e)
	{
		// update status
		this.status = this.loadQueue ? this.loadQueue.getItems(true).length / this.loadQueue.getItems().length : this.status;
		this.set(e.item.id, e.result);

		if ( this.status >= 1 )
			this.handleComplete();
	},

	handleComplete : function(e)
	{
		// complete
		this.status = 1;

		var loadCallback = this.loadCallback;
		this.loadCallback = null;
		
		if ( this.loadQueue )
			this.loadQueue.unregisterLoader();
		this.loadQueue = null;

		if ( loadCallback )
			loadCallback();
	},

	get : function(id) 
	{
		return this.loadedObjects[id] || null;
	},

	set : function(id, value)
		{
			this.loadedObjects[id] = value;

			if ( value === null )
				delete this.loadedObjects[id];
		}
});