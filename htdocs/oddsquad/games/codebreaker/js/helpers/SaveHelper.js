
//require.include("weblib/storage/KeyValueStorage.js");



var SaveHelper = SaveHelper || new function () {

	"use strict";

  	var _this = this;

	function _Construct() {
		return _this;
	}

	_this.loadStorage = function () {

		var pbsID = ss.oddsquad.UserLogin.getPbsId();
		console.log("LOAD == " + pbsID);

		// setup the KeyValue Storage's connection to the DB, and
		// pull the values for all the keys.
		KeyValueStorage.setGameSettingsURL("../../php/gameSettings.php");
		KeyValueStorage.updateLocalCache([
			pbsID + "_LEVEL_PROGESS", 		// the last level unlocked in the game.
			pbsID + "_JUICE_SCORE_0", 		// how many presents the player got on level 1
			pbsID + "_JUICE_SCORE_1", 		// how many presents the player got on level 2
			pbsID + "_JUICE_SCORE_2", 		// how many presents the player got on level 3
			pbsID + "_JUICE_SCORE_3", 		// how many presents the player got on level 4
			pbsID + "_JUICE_SCORE_4", 		// how many presents the player got on level 5
			pbsID + "_JUICE_SCORE_5", 		// how many presents the player got on level 6
			pbsID + "_JUICE_SCORE_6", 		// how many presents the player got on level 7
			pbsID + "_JUICE_SCORE_7", 		// how many presents the player got on level 8
			pbsID + "_JUICE_SCORE_8", 		// how many presents the player got on level 9
			pbsID + "_JUICE_SCORE_9", 		// how many presents the player got on level 10
			pbsID + "_JUICE_SCORE_10", 		// how many presents the player got on level 11
			pbsID + "_JUICE_SCORE_11", 		// how many presents the player got on level 12
			pbsID + "_JUICE_SCORE_12", 		// how many presents the player got on level 13
			pbsID + "_JUICE_SCORE_13", 		// how many presents the player got on level 14
			pbsID + "_JUICE_SCORE_14", 		// how many presents the player got on level 15
			pbsID + "_JUICE_SCORE_15", 		// how many presents the player got on level 16
			pbsID + "_JUICE_SCORE_16", 		// how many presents the player got on level 17
			pbsID + "_JUICE_SCORE_17", 		// how many presents the player got on level 18
			pbsID + "_JUICE_SCORE_18", 		// how many presents the player got on level 19
			pbsID + "_JUICE_SCORE_19", 		// how many presents the player got on level 20
			pbsID + "_JUICE_SCORE_20", 		// how many presents the player got on level 21
			pbsID + "_JUICE_SCORE_21", 		// how many presents the player got on level 22
			pbsID + "_JUICE_SCORE_22", 		// how many presents the player got on level 23
			pbsID + "_JUICE_SCORE_23", 		// how many presents the player got on level 24
			pbsID + "_JUICE_SCORE_24", 		// how many presents the player got on level 25
			pbsID + "_JUICE_SCORE_25", 		// how many presents the player got on level 26
			pbsID + "_JUICE_SCORE_26", 		// how many presents the player got on level 27
			pbsID + "_JUICE_SCORE_27", 		// how many presents the player got on level 28
			pbsID + "_JUICE_SCORE_28", 		// how many presents the player got on level 29
			pbsID + "_JUICE_SCORE_29", 		// how many presents the player got on level 30
			pbsID + "_JUICE_SCORE_30", 		// how many presents the player got on level 31
			pbsID + "_JUICE_SCORE_31", 		// how many presents the player got on level 32
			pbsID + "_JUICE_SCORE_32", 		// how many presents the player got on level 33
			pbsID + "_JUICE_SCORE_33", 		// how many presents the player got on level 34
			pbsID + "_JUICE_SCORE_34", 		// how many presents the player got on level 35
			pbsID + "_JUICE_SCORE_35", 		// how many presents the player got on level 36
			pbsID + "_JUICE_SCORE_36", 		// how many presents the player got on level 37
			pbsID + "_JUICE_SCORE_37", 		// how many presents the player got on level 38
			pbsID + "_JUICE_SCORE_38", 		// how many presents the player got on level 39
			pbsID + "_JUICE_SCORE_39", 		// how many presents the player got on level 40
			pbsID + "_JUICE_SCORE_40", 		// how many presents the player got on level 41
			pbsID + "_JUICE_SCORE_41", 		// how many presents the player got on level 42
			pbsID + "_JUICE_SCORE_42", 		// how many presents the player got on level 43
			pbsID + "_JUICE_SCORE_43", 		// how many presents the player got on level 44
			pbsID + "_JUICE_SCORE_44" 		// how many presents the player got on level 45
		]);
	}

	_this.SetCC = function ( ccOn ) {
		KeyValueStorage.set(SaveHelper.CC_STATE, ccOn, true);
	}

	_this.GetCC = function ( ccOn ) {
		var ccState = KeyValueStorage.get(SaveHelper.CC_STATE);
		if (ccState && ccState != "false") {
			return true;
		}
		return false;
	}



	_this.SaveLevelData = function ( lvlKey, data ) {
		var pbsID = ss.oddsquad.UserLogin.getPbsId();
		KeyValueStorage.set(pbsID + "_" + SaveHelper.STORAGE_PREFIX + lvlKey, data, true);
	}


	_this.GetLevelData = function ( lvlKey ) {
		var pbsID = ss.oddsquad.UserLogin.getPbsId();
		var initCollection = KeyValueStorage.get(pbsID + "_" + SaveHelper.STORAGE_PREFIX + lvlKey);
		initCollection = (initCollection) ? initCollection : "";
		return initCollection;
	}



	/**
	* Unlock every level index before and include the given level index.	
	* @param levelIndex [int]: The index of the most recently unlocked level
	**/
	_this.UnlockLevel = function ( levelIndex ) {
		var pbsID = ss.oddsquad.UserLogin.getPbsId();
		var unlockCount = KeyValueStorage.getInt(pbsID + "_" + SaveHelper.LEVEL_PROGRESS);
		unlockCount = (levelIndex + 1 > unlockCount) ? levelIndex + 1 : unlockCount;
		KeyValueStorage.set(pbsID + "_" + SaveHelper.LEVEL_PROGRESS, unlockCount, true);
	}


	_this.GetLastUnlockedLevel = function () {
		var pbsID = ss.oddsquad.UserLogin.getPbsId();
		return KeyValueStorage.getInt(pbsID + "_" + SaveHelper.LEVEL_PROGRESS);
	}


	return _Construct();

}

SaveHelper.CC_STATE = "CC_STATE";
SaveHelper.STORAGE_PREFIX = "JUICE_SCORE_";
SaveHelper.LEVEL_PROGRESS = "LEVEL_PROGESS";