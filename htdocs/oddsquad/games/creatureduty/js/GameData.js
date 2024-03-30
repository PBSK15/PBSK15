/**
 * ODDSQUAD CREATURE DUTY 
 * 
 * GameData
 * 
 * handles saving, loading, and erasing of game data, including:
 * - how many rounds of the game have been played
 * - which creatures are in each pen
 * - how many rounds each creature has been fed
 * - how many creatures have been released
 * - what achievements have been achieved
 * - whether audio is on or off
 * - whether captions are on or off
 *     
 * @param {GameManager} gM  	the boss
 *
 */
var GameData = function (gM) {
	"use strict";
	
	var _this = this;
	this.name = "GameData";
	this.gameManager = gM;
	
	_log(".GAMEDATA.");

	// First let's see if we are hooked up to the database.
	KeyValueStorage.set("cd_online", "true", true);

	_this.gameManager.gameIsOnline = KeyValueStorage.get("cd_online") == "true";
	
	_log("\n_ _ _ _ _ _ _ _ _ _ _ _ _ _ \nare we online? " + KeyValueStorage.get("cd_online") + ", " + _this.gameManager.gameIsOnline + "\n_ _ _ _ _ _ _ _ _ _ _ _ ");
	

	// Now update the latest values of our stored data.
	var storageVars = ["cd_online", "cd_roundNum", "cd_numReleased", "cd_audioOn", "cd_ccOn", "cd_introducedCutters", "cd_achievement1", "cd_achievement2", "cd_achievement3", "cd_achievement4", "cd_achievement5"];
	var defaultValues = { cd_online: "false", cd_roundNum: "X", cd_numReleased: "0", cd_audioOn: "true", cd_ccOn: "false", cd_introducedCutters: "false", cd_achievement1: "false", cd_achievement2: "false", cd_achievement3: "false", cd_achievement4: "false", cd_achievement5: "false" };
	var MAX_PER_PEN = 4;
	var NUM_PENS = 9;
	
	for(var i=0; i<NUM_PENS; i++ ){
		storageVars.push("cd_numCreaturesInPen" + i);
		defaultValues["cd_numCreaturesInPen" + i] = "0";
		for(var j=0; j<MAX_PER_PEN; j++ ){
			storageVars.push("cd_pen" + i + "Creature" + j + "Type");
			storageVars.push("cd_pen" + i + "Creature" + j + "RAS");
			defaultValues["cd_pen" + i + "Creature" + j + "Type"] = "";
			defaultValues["cd_pen" + i + "Creature" + j + "RAS"] = "0";
		}
	}
	
	/**
	 * clearHistory
	 * ------------
	 * Remove all saved information and restore game data to the initial game state.
	 * 
	 * @return {void}
	 */
	this.clearHistory = function (){
		_log("ERASE GAME.");
		KeyValueStorage.set("cd_roundNum", "X", true);
		KeyValueStorage.set("cd_numReleased", "0", true);
		KeyValueStorage.set("cd_audioOn", "true", true);
		KeyValueStorage.set("cd_ccOn", "false", true);
		KeyValueStorage.set("cd_introducedCutters", "false", true);
		KeyValueStorage.set("cd_achievement1", "false", true);
		KeyValueStorage.set("cd_achievement2", "false", true);
		KeyValueStorage.set("cd_achievement3", "false", true);
		KeyValueStorage.set("cd_achievement4", "false", true);
		KeyValueStorage.set("cd_achievement5", "false", true);
		
		for(var i=0; i< _this.gameManager.pens.length; i++ ){		
			KeyValueStorage.set("cd_numCreaturesInPen" + i, "0", true);
			for(var j=0; j < _this.gameManager.pens[i].creatures.length; j++ ){
				KeyValueStorage.set("cd_pen" + i + "Creature" + j + "Type", "", true);
				KeyValueStorage.set("cd_pen" + i + "Creature" + j + "RAS", "0", true);
			}
		}
	}
	
	/**
	 * saveGame
	 * --------
	 * Save all relevant game data (as per the class description)
	 * 
	 * @return {void}
	 */
	this.saveGame = function (){
		_log("SAVE GAME, " + _this.gameManager.loggedIn + ", " + (_this.gameManager.gameRound).toString());
		
		if(_this.gameManager.loggedIn){

			KeyValueStorage.set("cd_roundNum", (_this.gameManager.gameRound).toString(), true);
			KeyValueStorage.set("cd_numReleased", (_this.gameManager.numCreaturesReleased).toString(), true);
			KeyValueStorage.set("cd_audioOn", _this.gameManager.audioOn ? "true" : "false", true);
			KeyValueStorage.set("cd_ccOn", _this.gameManager.ccOn ? "true" : "false", true);
			KeyValueStorage.set("cd_introducedCutters", _this.gameManager.introducedCutters ? "true" : "false", true);
			KeyValueStorage.set("cd_achievement1", _this.gameManager.achievedFirstCreature ? "true" : "false", true);
			KeyValueStorage.set("cd_achievement2", _this.gameManager.achievedFairSharing ? "true" : "false", true);
			KeyValueStorage.set("cd_achievement3", _this.gameManager.achievedGrowth ? "true" : "false", true);
			KeyValueStorage.set("cd_achievement4", _this.gameManager.achievedRelease ? "true" : "false", true);
			KeyValueStorage.set("cd_achievement5", _this.gameManager.achievedFractionation ? "true" : "false", true);
			
			_log("SAVING data about " + _this.gameManager.pens.length + " pens.");
			for(var i=0; i< _this.gameManager.pens.length; i++ ){
				var num_in_i = _this.gameManager.pens[i].creatures.length;
				_log("SAVING data on " + num_in_i + " creatures in " + _this.gameManager.pens[i]);
				KeyValueStorage.set("cd_numCreaturesInPen" + i, num_in_i.toString(), true);
				for(var j=0; j < num_in_i; j++ ){
					KeyValueStorage.set("cd_pen" + i + "Creature" + j + "Type", (_this.gameManager.pens[i].creatures[j].creatureType).toString(), true);
					var cijras = _this.gameManager.pens[i].creatures[j].numRoundsAtSize;
					if(cijras == undefined || cijras == null){
						cijras = 0;
					}
					KeyValueStorage.set("cd_pen" + i + "Creature" + j + "RAS", cijras.toString(), true);
				}
			}
			KeyValueStorage.updateLocalCache(storageVars);
		} else{
			_log("SAVE GAME FAIL ----- NOT LOGGED IN ");
		}
	}
		
	/**
	 * loadGame
	 * --------
	 * Get all game data and save it locally to be used in recreating the last saved game
	 * 
	 * @return {void}
	 */
	this.loadGame = function (){
		_log("LOAD GAME");
		KeyValueStorage.setDefaults(defaultValues);
		KeyValueStorage.resetToDefaults(false);
		KeyValueStorage.updateLocalCache(storageVars);
	}
	
	/**
	 * buildLoadedGame
	 * ---------------
	 * Use the loaded game data to set up a new game session JUST LIKE THE LAST ONE!
	 * 
	 * @return {void}
	 */
	this.buildLoadedGame = function (){

		var roundNumFromKVS = KeyValueStorage.get("cd_roundNum");

		_this.gameManager.gameRound = (roundNumFromKVS == undefined || roundNumFromKVS == "X") ? -1 : parseInt(roundNumFromKVS);
		
		if(_this.gameManager.gameRound < 0){
			_this.gameManager.gameInit(true);
		} else {
			var numReleasedFromKVS = KeyValueStorage.get("cd_numReleased")
			_this.gameManager.numCreaturesReleased = numReleasedFromKVS == undefined ? 0 : parseInt(numReleasedFromKVS);
			_this.gameManager.creaturesReleasedDO.releasedTxt.text = _this.gameManager.numCreaturesReleased;
			_this.gameManager.menuHelper.setAudio(KeyValueStorage.get("cd_audioOn") == "true" ? true : false);
			_this.gameManager.menuHelper.setCC(KeyValueStorage.get("cd_ccOn") == "true" ? true : false);
			_this.gameManager.introducedCutters = KeyValueStorage.get("cd_introducedCutters") == "true" ? true : false;
			_this.gameManager.achievedFirstCreature = KeyValueStorage.get("cd_achievement1") == "true" ? true : false;
			_this.gameManager.achievedFairSharing = KeyValueStorage.get("cd_achievement2") == "true" ? true : false;
			_this.gameManager.achievedGrowth = KeyValueStorage.get("cd_achievement3") == "true" ? true : false;
			_this.gameManager.achievedRelease = KeyValueStorage.get("cd_achievement4") == "true" ? true : false;
			_this.gameManager.achievedFractionation = KeyValueStorage.get("cd_achievement5") == "true" ? true : false;
			
			for(var i=0; i<_this.gameManager.pens.length; i++ ){
				
				var pen_i_num_creatures = parseInt(KeyValueStorage.get("cd_numCreaturesInPen" + i));
				
				if(pen_i_num_creatures > 0){
					_this.gameManager.pens[i].open();
					for(var j=0; j < pen_i_num_creatures; j++ ){
						
						var cijRASfromKVS = KeyValueStorage.get("cd_pen" + i + "Creature" + j + "RAS");
						var cijTypefromKVS = KeyValueStorage.get("cd_pen" + i + "Creature" + j + "Type");
						
						var creature_ij = _this.gameManager.spawnCreature(false,cijTypefromKVS);
						creature_ij.setSize(_this.gameManager.pens[i].size);
						creature_ij.bowl.setSize(_this.gameManager.pens[i].size);
						creature_ij.numRoundsAtSize = parseInt(cijRASfromKVS);
						creature_ij.isNew = false;
						creature_ij.droppedIn = true;
					
						_this.gameManager.pens[i].addCreature(creature_ij);
						_log("For Pen " + i + ": " + creature_ij.name + ", " + creature_ij.numRoundsAtSize + " rounds as " + _this.gameManager.pens[i].size + "; " + cijRASfromKVS);
					}
				}
				_this.gameManager.pens[i].updatePreview();
				_this.gameManager.pens[i].showHighlight(false);

				_this.gameManager.pens[i].initRound();
			}
			
			if(!_this.gameManager.gameInitialized){
				_this.gameManager.gameInit(false);
			}

		}
	}

}