//require.include("weblib/external/createjs.min.js");
//require.include("weblib/core/CorePackage");
//require.include("weblib/asset/AssetLoaderEvent");
//require.include("weblib/utils/SystemInfo");
//require.include("weblib/event/BaseEvent");
/*
* Class CreateJSAssetManager
*	Singleton class that loads and provides access to assets in a CreateJS context
* Events:
*	AssetLoaderEvent.FILE_LOADED - Dispatched when a single file has completed loading
*	AssetLoaderEvent.LOAD_COMPLETE - Dispatched when a full loading operation has completed
*	AssetLoaderEvent.ASSET_PROGRESS - NOT CURRENTLY DISPATCHED
*/
var CreateJSAssetManager = CreateJSAssetManager || new function CreateJSAssetManager () {
	"use strict";

	var _this = AbstractObject ( this ); // jshint ignore:line

	var _loadQueue;

	//Object - Associated array mapping json data ids to their loaded data object
	var _json;

	//Object - Associative array mapping image asset ids to their loaded images
	var _images;
	//Object - Associative array mapping sound asset ids to their loaded sounds
	var _sounds;

	//Object - Associative array mapping spritesheet animation IDs to their corresponding spritesheet data
	//Each entry takes the following form: {spriteSheet:[String], animName:[String]}
	var _sprites;

	//Object - Associative array mapping sprite sheet IDs to their loaded spritesheet data
	var _spriteSheets;

	//Object - Associative array mapping sprite sheet IDs to their configuration data
	//Array<Object> - Array storing list of spritesheet config data that has been loaded
	var _spriteSheetData;

	//Integer: The total number of files being loaded in the current load operation
	var _fileCount;

	//Integer: The number of files that have completed loading in the current load operation
	var _loadedCount;

	//Whether a load operation is currently being executed
	var _isLoading;

	function _construct () {

		_images = {};
		_sounds = {};
		_json = {};
		_spriteSheets = {};
		_spriteSheetData = [];
		_sprites = {};

		_loadedCount = 0;
		_isLoading = false;

		_loadQueue = new createjs.LoadQueue (false);
		//_loadQueue = new createjs.LoadQueue (true, null, true);

        _loadQueue.addEventListener ( "loadstart", _onLoadStart_listener );
        _loadQueue.addEventListener ( "fileload", _onFileLoad_listener );
        _loadQueue.addEventListener ( "error", _onAssetLoadError_listener );
        //_loadQueue.addEventListener ( "progress", _onProgress_listener );
        _loadQueue.addEventListener ( "complete", _onAssetLoadedComplete_listener );
	}

	/*
	* Load a set of assets from a manifest object
	* @param config:Object - An object containing information about the assets to be loaded in the following format:
	* 	{assets: [{id:String, src:String}]}
	*/
	_this.load = function ( config ) {

		//TESTING
		//console.log("Asset manager starting load");

		//No load is in progress so start a new load operation
		if ( !_isLoading ) {
			_isLoading = true;
console.dir(config.assets);
			_fileCount = config.assets.length;
			_loadedCount = 0;

			//Start loading the assets
			_loadQueue.loadManifest ( config.assets );
			//_loadQueue.load ();
		//Assets are still being loaded from another load operation so show a warning
		}else{
			console.warn("Attempt made to load files while another load operation was still in progress!");
		}
	};

	/*
	* Get the total number of assets being loaded in the current load operation
	* @return:Integer - The total number of assets being loaded in the current load operation
	*/
	_this.getTotalLoadingAssets = function(){
		return _fileCount;
	};

	/*
	* Get the number of assets that have finished loading in the current load operation 
	* @return:Integer - The number of assets that have finished loading in the current load operation 
	*/
	_this.getNumLoadedAssets = function(){
		return _loadedCount;
	};

	_this.buildPane = function ( buildInfo ) {

		var $pane = $ ( "#templates #panes " + buildInfo.selector ).clone ();
		var Class = ( isEmpty ( $pane.attr ( "pane" ) ) ) ? "GenericPane" : $pane.attr ( "pane" );
		var pane = new window [ Class ] ( $pane, buildInfo );

		return pane;
	};

	/*
	* Create a CreateJS Bitmap instance
	* @param id:[String] - Id of the asset to create the bitmap from
	* @param mouseEnabled:[Boolean] (Optional) - Whether the mouse should be enabled on this object or not (defaults to false)
	* @param setDefaultHitArea:[Boolean] (Optional) - Whether a default hit area should be set for this mouse enabled object
	* @param setMouseOverCursor:[Boolean] (Optional) - Whether the cursor should change on mouseover (defaults to true if mouseEnabled is true)
	* @param pivitCenter[Boolean] - Set the pivit to the center of bitmap (defaults to false)
	* @return:[Bitmap] - The bitmap with the requested ID or null if no bitmap with this ID was found
	*/
	_this.getBitmap = function ( id, mouseEnabled, setDefaultHitArea, setMouseOverCursor, pivitCenter) {
		//console.log ( id );
		//console.log ( _images [ id ] );

		var retBitmap;

		if(_images[id] === undefined){
			console.log("!! WARNING !! Found no bitmap with id '" + id + "'");
			return null;
		}


		retBitmap = new createjs.Bitmap ( _images [ id ] );
		//Set whether the mouse should be enabled on this object
		if(mouseEnabled === true){
			retBitmap.mouseEnabled = true;
			//Assign a default hit area if requested
			if(setDefaultHitArea === true){
				retBitmap.hitArea = _createDefaultHitArea(retBitmap);
			}

			//Change cursor on mouse over, unless requested otherwise
			if(setMouseOverCursor !== false){
				retBitmap.cursor = "pointer";
			}

		}else{
			retBitmap.mouseEnabled = false;
		}

		// set shortcut to the bitmap width and height
		retBitmap.width = retBitmap.image.width;
		retBitmap.height = retBitmap.image.height;

		// center the pivit for the bitmap if requested
		if (pivitCenter) {
			retBitmap.regX = retBitmap.width / 2;
			retBitmap.regY = retBitmap.height / 2;
		}
		return retBitmap;
	};

	_this.getImage = function ( id ) {
		//console.log ( id );
		//console.log ( _images [ id ] );
		return _images [ id ];
	};

	/*
	* Create a CreateJS sprite
	* @param spriteName:[String] - String ID of the sprite to create
	* @param mouseEnabled:[Boolean] (Optional) - Whether the mouse should be enabled on this object or not (defaults to false)
	* @param setDefaultHitArea:[Boolean] (Optional) - Whether a default hit area should be set for this mouse enabled object
	* @param setMouseOverCursor:[Boolean] (Optional) - Whether the cursor should change on mouseover (defaults to true if mouseEnabled is true)
	* @param pivitCenter[Boolean] - Set the pivit to the center of bitmap (defaults to false)
	* @return:[Sprite] - The sprite with the requested ID or null if no sprite with this ID was found
	*/
	_this.getSprite = function(spriteName, mouseEnabled, setDefaultHitArea, setMouseOverCursor, pivitCenter){
		var spriteData;
		var retSprite;

		spriteData = _sprites[spriteName];

		//Return null if no sprite exists with this name
		if(isUndefined(spriteData)){
			console.log("!! WARNING !! Found no sprite with name '" + spriteName + "'");
			return null;
		}

		//Create a new sprite from the correct spritesheet and animation name
		retSprite = new createjs.Sprite(_spriteSheets[spriteData.spriteSheet], spriteData.animName);

		//Set whether the mouse should be enabled on this object
		if(mouseEnabled === true){
			retSprite.mouseEnabled = true;
			if(setDefaultHitArea === true){
				retSprite.hitArea = _createDefaultHitArea(retSprite);
			}

			//Change cursor on mouse over
			if(setMouseOverCursor !== false){
				retSprite.cursor = "pointer";
			}
		} else {
			retSprite.mouseEnabled = false;
		}

		// set shortcut to the bitmap width and height
		retSprite.width = _spriteSheets[spriteData.spriteSheet].getFrameBounds(retSprite.currentFrame).width;
		retSprite.height = _spriteSheets[spriteData.spriteSheet].getFrameBounds(retSprite.currentFrame).height;

		// center the pivit for the bitmap if requested
		if (pivitCenter) {
			retSprite.regX = retSprite.width / 2;
			retSprite.regY = retSprite.height / 2;
		}

		return retSprite;
	};

	/*
	* Get a reference to a spritesheet that was loaded
	* @param spriteSheetName:[String] - ID of the spritesheet data
	* @return:[SpriteSheet] - Reference to the spritesheet with the provided name, or null if none exists
	*/
	_this.getSpriteSheet = function(spriteSheetName){
		if(isUndefined(_spriteSheets[spriteSheetName])){
			console.log("!! WARNING !! - SpriteSheet '" + spriteSheetName + "' does not exist!");
			return null;
		}

		return _spriteSheets[spriteSheetName];
	};

	/*
	* Get a reference to the spritesheet used to draw a particular sprite
	* @param spriteName:[String] - Name of the sprite whose spritesheet should be retrieved
	* @return:[SpriteSheet] - Reference to the spritesheet for the provided sprite, or null if the sprite doesn't exist
	*/
	_this.getSpriteSheetForSprite = function(spriteName){
		if(isUndefined(_sprites[spriteName])){
			console.log("!! WARNING !! - Sprite '" + spriteName + "' does not exist!");
			return null;
		}

		return _spriteSheets[_sprites[spriteName].spriteSheet];
	};

	/*
	* Get an object that was loaded from JSON data
	* @param id:String - Id of the asset
	* @return:Object - Object containing the loaded JSON data
	*/
	_this.getJson = function(id){
		return _json[id];
	};

	/*
	* Create a default hit area for a display object
	* @param displayObj:[DisplayObject] - Object to create the hit area for
	*/
	function _createDefaultHitArea(displayObj){
		var retArea = new createjs.Shape();
		var bounds = displayObj.getBounds();

		retArea.graphics.beginFill("#000000");
		retArea.graphics.drawRect(bounds.x, bounds.y, bounds.x + bounds.width, bounds.y + bounds.height);
		retArea.graphics.endFill();
		retArea.setBounds(bounds.x, bounds.y, bounds.width, bounds.height);

		//Make sure to cache hit area on iPhone or iPod
		if(ss.SystemInfo.isIPhone || ss.SystemInfo.isIPod){
			retArea.cache(bounds.x, bounds.y, bounds.width, bounds.height);
		}

		return retArea;
	}

	function _onLoadStart_listener ( event ) { // jshint ignore:line
		//alert ( "load start" )
	}

	function _onFileLoad_listener ( asset ) {

		//console.log("Asset Manager: File Loaded: Type = " + asset.item.type);

		switch ( asset.item.type ) {
			case "image" :
				_images [ asset.item.id ] = asset.result;

				//TESTING
				_images [ asset.item.id ].crossOrigin = "anonymous";

				break;
			case "sound" :
				_sounds [ asset.item.id ] = asset.result;
				break;
			case "json":
				//If this is a Texture Packer JSON file, load it as a spritesheet
				if(isDefined(asset.result.texturepacker)){
					var i;
					var animFrames;

					//_spriteSheets[asset.item.id] = new createjs.SpriteSheet(asset.result);
					_spriteSheetData.push({id:asset.item.id, data:asset.result});

					//Spritesheet images are already loaded, so call the handler immediately
					// if(_spriteSheets[asset.item.id].complete){
					// 	_setupLoadedSpriteSheet(_spriteSheets[asset.item.id]);
					// //Spritesheet images aren't loaded yet, so listen for completion
					// }else{
					// 	_spriteSheets[asset.item.id].addEventListener("complete", _handleSpriteSheetImagesLoaded);
					// }

					//Queue up all spritesheet images to be loaded
					for(i = 0; i < asset.result.images.length; i++){
						_fileCount += 1;
					 	_loadQueue.loadFile(asset.result.images[i]);
					}

					//Loop through all keys on the animation object and create a sprite for each of them
					for(var animName in asset.result.animations){
						animFrames = asset.result.animations[animName];

						//Show a warning for multi-frame animations
						//TODO: Store multi-frame animations
						// if(animFrames.length > 1){
						// 	console.log("!! WARNING !! - Animations defined with multiple frames aren't supported by the Asset Manager yet!");
						// }

						//Check for duplicate assets
						if(!isEmpty(_sprites[animName])){
							console.warn("CreateJSAssetManager: Sprite '" + animName + "' has already been defined! This will overwrite the original!");
						}

						_sprites[animName] = {spriteSheet:asset.item.id, animName:animName};
					}

				//Otherwise, add this as generic JSON data
				}else{
					_json[asset.item.id] = asset.result;
				}

				break;
			default:
				console.log("!! WARNING !! Found unrecognized asset type '" + asset.item.type + "'");
				break;
		}

		// increment the amount loaded
		_loadedCount++;

		_this.dispatchEvent ( new BaseEvent (AssetLoaderEvent.FILE_LOADED, { "loaded" : _loadedCount, "count" : _fileCount } ) );
	}

	/*
	*
	*/
	// function _handleSpriteSheetImagesLoaded(e){
	// 	e.target.removeEventListener("complete", _handleSpriteSheetImagesLoaded);

	// 	_setupLoadedSpriteSheet(e.target);
	// }

	/*
	* Performs any required setup on a fully loaded spritesheet
	* @param spriteSheet:[SpriteSheet] - The spritesheet to set up
	*/
	/*function _setupLoadedSpriteSheet(spriteSheet){
		var numFrames = spriteSheet.getNumFrames();
		var frameImage;

		//console.dir(spriteSheet);

		// for(var i = 0; i < numFrames; i++){
		// 	spriteSheet.getFrame(i).image.crossOrigin = "anonymous";
		// }

	}*/

	/*
	* Handle completion of loading for all queued assets
	*/
	function _onAssetLoadedComplete_listener ( event ) { //jshint ignore:line
		//TESTING
		//console.log("Asset manager finished load");

		finishAssetLoading();

		_this.dispatchEvent ( new BaseEvent ( AssetLoaderEvent.LOAD_COMPLETE ) );
	}

	/*
	* Handle an error occurring during asset loading
	*/
	function _onAssetLoadError_listener ( event ) {
		console.warn("Error occurred during asset loading: asset path: " + event.item.src);
		//console.dir(event);

		_reloadAsset(event.item.id, event.item.src);
		//finishAssetLoading();

		//_this.dispatchEvent ( new BaseEvent ( AssetLoaderEvent.LOAD_ERROR ) );
	}

	function _reloadAsset(assetId, fileName){
		console.log("Attempting to reload asset with ID = " + assetId + ", SRC = " + fileName);

		_loadQueue.loadFile({id:assetId, src:fileName});
	}

	/*
	* Helper function that performs any tasks required after all assets have loaded
	*/
	function finishAssetLoading(){
		var editedData;

		//Create sprite sheet objects for any data that was loaded
		for(var i = 0; i < _spriteSheetData.length; i++){
			if(isUndefined(_spriteSheets[_spriteSheetData[i].id])){
				editedData = _spriteSheetData[i].data;

				//Replace all image names with actual image instances and create the sprite sheets
				for(var j = 0; j < editedData.images.length; j++){
					editedData.images[j] = _this.getImage(editedData.images[j]);
				}

				_spriteSheets[_spriteSheetData[i].id] = new createjs.SpriteSheet(editedData);
				//_spriteSheets[_spriteSheetData[i].id].addEventListener("complete", _handleSpriteSheetImagesLoaded);
			}
		}

		_isLoading = false;
	}

/*	function _onProgress_listener ( eventJS ) {
		_this.dispatchEvent ( new BaseEvent ( AssetLoaderEvent.ASSET_PROGRESS, { "eventJS" : eventJS } ) );
	}*/

	return _construct ();
}; // jshint ignore:line