/**
 * ODDSQUAD CREATURE DUTY 
 * 
 * AssetManager
 *
 * Take a list of spritesheets and turn them into Bitmaps!
 * 
 * @param {Array} spritesheetnamesarray The names of JSON sprite sheets to be processed.
 *
 * Files must be in a subfolder, named "sprites", of the main game directory
 * e.g. "myspritesheet" if the actual filename is "myspritesheet.json".
 *
 * @return {AssetManager} This function.
 */
var AssetManager = function (spritesheetnamesarray) {
 
	this.spritesheet_specs = [];
	var copyCanvas = document.createElement('canvas');
	var copyCtx = copyCanvas.getContext('2d');

	var _this = this;

	/**
	 * onJSONLoaded
	 * ------------
	 * Store the loaded JSON data in our list of spritesheet specs and
	 * check to see if all the spritesheets have been read.  If so, continue
	 * to build the game.
	 * 
	 * @param  {string} response The contents of one JSON file
	 * @return {void}
	 */
 	this.onJSONLoaded = function(response) {
	  // Parse JSON string into object
	  	var theHash = JSON.parse(response);
		_this.spritesheet_specs.push(theHash);
		if(_this.spritesheet_specs.length == spritesheetnamesarray.length){
			buildGame();
		}
	 };

	/**
	 * loadJSON
	 * --------
	 * Load the specified JSON file and do something when it's loaded.
	 * 
	 * @param  {string}   filename	"myspritesheet" if the actual filename is "myspritesheet.json".
	 * @param  {Function} callback 	What to do after the file is loaded
	 * @return {void}
	 */
 	this.loadJSON = function(filename,callback) {   
	    var xobj = new XMLHttpRequest();
		xobj.open('GET', 'sprites/'+filename+'.json', true);
		xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
	    };
	    xobj.send(null);  
	 }

	 /**
	  * processSpriteSheets
	  * -------------------
	  * Load the JSON file associated with each name in our list.
	  * 
	  * @return {void}
	  */
	 this.processSpriteSheets = function(){
	 	for(var i=0; i<spritesheetnamesarray.length; i++){
			 _this.loadJSON(spritesheetnamesarray[i],_this.onJSONLoaded);
		}
	 }

	 /**
	  * getBitmap
	  * ---------
	  * Return a loaded Image as a Bitmap.
	  * 
	  * @param  {string} bmpItemName The name of a loaded Image object
	  * @return {createjs.Bitmap} The specified Image converted to a Bitmap
	  */
  	this.getBitmap = function (bmpItemName) {
		if(lib[bmpItemName] != undefined){
			var newbmp = new createjs.Bitmap(images[bmpItemName]);
			var newbmpBounds = newbmp.getBounds();
			if(newbmpBounds !== null){
				newbmp.regX = newbmpBounds.width/2;
				newbmp.regY = newbmpBounds.height/2;
				var newbmpHA = new createjs.Shape();
				newbmpHA.graphics.beginFill("red").drawRect(newbmpBounds.x, newbmpBounds.y, newbmpBounds.width, newbmpBounds.height);
				newbmp.hitArea = newbmpHA;
			}
			return newbmp;
			
		} else {
			return null;
		}
  	}

	/**
	 * getSprite
	 * ---------
	 * Return a bitmap extracted by name from the appropriate sprite sheet
	 * 
	 * @param  {string} spriteName 	The name of a png embedded in the spritesheet
	 * @return {createjs.Bitmap}    The png converted to a Bitmap, or null if the png could not be found.
	 */
	this.getSprite = function(spriteName){
		var foundSprite = false;
	 	for(var i=0; i<_this.spritesheet_specs.length; i++){
	 		var theHash = _this.spritesheet_specs[i].frames[spriteName];
	 		if( theHash != undefined && theHash != null){
	 			var srcIndex = -1;
	 			for(var j=0; j < spritesheetnamesarray.length; j++){
	 				if((spritesheetnamesarray[j]+".png") == _this.spritesheet_specs[i].meta.image){
	 					srcIndex = j;
	 				}
	 			}
	 			if(srcIndex >= 0){
	 				foundSprite = true;
		 			var bmp = new createjs.Bitmap(images[spritesheetnamesarray[srcIndex]]);
		 			bmp.sourceRect = new createjs.Rectangle(theHash.frame.x,theHash.frame.y,theHash.frame.w,theHash.frame.h);
		 			bmp.mouseEnabled = false;
		 			return bmp;
		 			break;
	 			} 
	 		}
	 	}
	 	if(!foundSprite){
	 		return null;
	 	}
	}

	return this;
};