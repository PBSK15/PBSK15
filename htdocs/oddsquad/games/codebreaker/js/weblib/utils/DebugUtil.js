//require.include("weblib/external/createjs.min.js");
//require.include("weblib/ssnamespace");
//require.include("weblib/core/Util");

/*
* Class DebugUtil
* 	Singleton class that provides helpful debugging functionality
*/

/*
* Get the singleton instance of this class
*/
ss.DebugUtil = ss.DebugUtil || new function(){
	var _this = this;

	//[Boolean] - Whether this debug utilily is enabled
	var _enabled = false;

	//[String] - Tag to use if none is provided
	var _DEFAULT_TAG = "DEBUG_DEFAULT";

	//Positioning for debug text fields
	var _TEXT_START_X = 5;
	var _TEXT_START_Y = 5;
	var _TEXT_OFFSET_Y = 20;	

	//[Container] - Container to display debug content to
	var _display;
	var _maxWidth = 1000;
	var _fontSize = 12;

	//[Array<String>] - List of all tags currently in use
	var _tags;

	//Object - Dictionary mapping tags to text fields displaying text associated with them
	var _textFieldDict;

	/*
	* Initialize this debug util
	*/
	function _construct() {
		_display = null;

		_tags = new Array();
		_textFieldDict = new Object();

		return _this;
	}

	/*
	* Set the container to display debug info to
	*/
	_this.setDisplay = function(display, fontSize, maxWidth){
		_display = display;
		_fontSize = isDefined(fontSize) ? fontSize : _fontSize;
		_maxWidth = isDefined(maxWidth) ? maxWidth : _maxWidth;
	}

	/*
	* Set whether this debug utility should be enabled
	* @param enabled:[Boolean] - True to enable on-screen debugging, false to disable
	*/
	_this.setEnabled = function(enabled){
		_enabled = enabled;
	}

	/*
	* Show a debug message
	* @param message:[String] - Message to show
	*/
	_this.showMessage = function(message, tag){		
		var useTag;

		//Don't show messages if disabled
		if(!_enabled){
			return;
		}

		useTag = isDefined(tag) ? tag : _DEFAULT_TAG;

		//Remove any existing text field associated with this tag
		_removeTaggedTextField(useTag);

		//Add the new message with the new tag
		_addTaggedMessage(useTag, message);
	}

	/*
	* Add a message with a specific tag
	* @param tag:[String] - Tag to associate with this debug message
	* @param message:[String] - The message to be displayed
	*/
	function _addTaggedMessage(tag, message){
		var tagIndex = _tags.indexOf(tag);

		//If this tag doesn't exist yet, add it to the tag list
		if(tagIndex < 0){
			_tags.push(tag);
			tagIndex = _tags.length - 1;
		}
		
		//Display a warning if no display container was provided
		if(_display == null){
			console.warn("DebugUtil: Attempted to display debug message but no display container was set!");
			return;
		}

		//Create and position a text field for this message
		_textFieldDict[tag] = new createjs.Text(message, String(_fontSize) + "px Arial", "#FFFFFF");
		_textFieldDict[tag].lineWidth = _maxWidth;
		_display.addChild(_textFieldDict[tag]);
		_textFieldDict[tag].x = _TEXT_START_X;
		_textFieldDict[tag].y = _TEXT_START_Y + tagIndex * _TEXT_OFFSET_Y;
	}

	/*
	* Remove any message with the provided tag
	* @param tag:[String] - Tag associated with the text field to remove
	*/
	function _removeTaggedTextField(tag){

		//Remove the message from the list
		if(isDefined(_textFieldDict[tag])){
			_display.removeChild(_textFieldDict[tag]);
			delete _textFieldDict[tag];
		}
	}

	return _construct();
}
