//require.include("weblib/ssnamespace");
//require.include ("weblib/core/Util");
//require.include ("weblib/core/AbstractObject");
//require.include("weblib/command/CommandQueue");
//require.include("weblib/command/CommandSet");

ss.AchievementManager = ss.AchievementManager || new function() {

	var _super = {};
	var _this = AbstractObject ( this );

	var _achievementSet;

	//var _commandQueue;
	
	//[] - Object to display achievements to on screen
	var _achievementDisplay = null;

	//[Object] - Reference to global object that handles achievement data for the website
	//var _achievementObject;

	function _construct() {
		_achievementSet = null;
		//_commandQueue = new CommandQueue();
		//_commandQueue.start();

		

		return _this;
	}

	/*
	* Load current achievements from the containing page
	*/
	_this.getAchievements = function() {
		
		_achievementSet = new Array();

		//If no achievements object exists, show a warning
		if (typeof achievements === "undefined" || isEmpty(achievements) || isEmpty(achievements.unlocked)) {
			console.warn("Get Achievements: No achievements handler found in page!  No achievements will be retrieved.");
		//If the achievements object exists, copy all the unlocked achievements
		} else {

			//Copy all the unlocked achievements to the locally cached set
			for (var i = 0; i < achievements.unlocked.length; i++) {
				_achievementSet.push(achievements.unlocked[i]);
			}	
		}
	}

	/*
	* Set an object to display achievements on screen
	* @param achievementDisplay:[] - Object to display achievements to on screen
	*/
	_this.setAchievementDisplay = function(achievementDisplay){
		_achievementDisplay = achievementDisplay;
	}

	/*
	* Allocate a particular achievement for this player
	* @param achievementId:[String] - The Numeric ID identifying the achievement
	* @return - if adding achievement is successful
	*/
	_this.addAchievement = function ( achievementId ) {

		//var isSuccess = false;
		//var commandSet = new CommandSet();


		//If the achievement set it empty, wait for it to be loaded before proceeding
		if (isEmpty ( _achievementSet ) ) {
			_this.getAchievements();
		}


		//If this achievement hasn't been unlocked yet, unlock it now
		if(_achievementSet.indexOf(String(achievementId)) < 0){
			_addNewAchievement(achievementId);

			if(!isEmpty(_achievementDisplay)){
				_achievementDisplay.displayAchievement(achievementId);
			}

			return true;
		}

		return false;

		//return isSuccess;

		/*
		commandSet.apply ( function() {			

			//onsole.log ( "_achievementSet" );
			//console.dir ( _achievementSet );

			// we found an award we didn't achieve yet
			if ( _achievementSet.indexOf ( String ( achievementId ) ) == -1 ) {

				//Display an achievement message
				if(_achievementDisplay !== null){
					_achievementDisplay.displayAchievement(achievementId);
				}

				//Show an achievement overlay if the achievements manager is defined in the page
				if(isDefined(window.parent.achievements)){
					// pause the commandqueue until we unravel this mess
					window.parent.achievements.add ( achievementId, 'unlocked', _onAchievementAdded_listener );
					//parent.initOverlay ( title, "award", achievementId ); 
					isSuccess = true;
					achievements.unlocked.push(achievementId);
				} else {
					console.warn("Add Achievement: No achievements handler found in page!  No achievements will be added.");		
				}

				//_achievementSet[achievementId] = 

			}
		} );

		commandSet.queue();
		return isSuccess;*/
	}

	/*
	* Helper that handles awarding an achievement for the first time
	*/
	_addNewAchievement = function(achievementId){
		if(typeof achievements !== "undefined" && !isEmpty(achievements)){
			achievements.add(achievementId, 'unlocked', _onAchievementAdded_listener);
			achievements.unlocked.push(achievementId);
		}
		
		_achievementSet.push(achievementId);
	}

	/*
	* Check if the player has already achieved a particular achievement
	* @param achievementId:[Integer] - Id of the achievement to check
	*/
	_this.hasAchievement = function(achievementId){

		//If current achievements haven't been loaded yet, load them now
		if(isEmpty(_achievementSet)){
			_this.getAchievements();
		}

		//Look through all unlocked achievements for the requested one
		for(var i = 0; i < _achievementSet.length; i++){
			if(_achievementSet[i] == String(achievementId)){
				//TESTING
				//console.log("Achievement Manager has unlocked achievement " + achievementId);
				return true;
			}
		}

		//TESTING
		//console.log("Achievement Manager: achievement " + achievementId + " not unlocked yet");
		return false;
	}

	/*
	_this.clear = function() {
		//window.parent.achievements.clear();
	}*/

	function _onAchievementReceived_listener ( data ) {
		console.log("AchievementManager.Achievement received listener: ");
		console.dir(data);

		_achievementSet = data;
		//console.dir(_achievementSet);
		_this.dispatchEvent ( new BaseEvent ( "ACHIEVEMENT_RECEIVED", data ) );
	}

	function _onAchievementAdded_listener ( data ) {
		console.log("AchievementManager.Achievement added listener: ");

		//console.log ( data );

		//_data = data;

		_this.dispatchEvent ( new BaseEvent ( "ACHIEVEMENT_ADDED", data ) );
	}


	function _onAchievementCleared_listener ( data ) {
		console.log("AchievementManager.Achievement cleared listener: ");

		//console.log ( data );

		//_data = data;

		_this.dispatchEvent ( new BaseEvent ( "ACHIEVEMENT_CLEAR", data ) );
	}

	return _construct();
}
