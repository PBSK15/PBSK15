/*
* Class CreatureDutyAchievementManager
*	Singleton class that handles the awarding of all achievements for the Creature Duty game
*/
		
/*
* Get the singleton instance of PienadoAchievementManager
*/
var CreatureDutyAchievementManager = CreatureDutyAchievementManager || new function(){
	var _this = this;

	//IDs of achievements for creature duty
	_this.FIRST_CREATURE_ACHIEVE_ID = 29;
	_this.FAIR_SHARING_ACHIEVE_ID = 30;
	_this.FIRST_GROW_ACHIEVE_ID = 28;
	_this.FIRST_RELEASE_ACHIEVE_ID = 26;
	_this.FIRST_CUT_ACHIEVE_ID = 27;
	
	//[Container] - Container to draw the achievements popups to
	var _container;

	/*
	* Initialize the AchievementsDisplay
	*/
	function _construct(){

		return _this;
	}

	/*
	* Initialize the achievements display
	* @param displayContainer:[Container] - Container to draw the achievements popups to
	*/
	_this.init = function(displayContainer){
		_container = displayContainer;
	}

	/*
	* Allocate a particular achievement for this player
	* @param achievementId:[Integer] - The Numeric ID identifying the achievement	
	*/
	_this.addAchievement = function (achievementId) {

		_log(" ~!        addAchievement "+achievementId);

		//Unlock the achievement in the database
		ss.AchievementManager.addAchievement(achievementId,"unlocked");

		//Display the achievement
		var popup = new AchievementsPopup(achievementId, _container);
	}

	return _construct();
}