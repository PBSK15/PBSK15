/**
 * ODDSQUAD CREATURE DUTY 
 * 
 * AudioData
 *
 * A hardcoded specification for an audio sprite, 
 * a bunch of groupings of sounds for easy reference and randomization,
 * and some methods for retrieving specific sounds or info about those sounds.
 * 
 */
var AudioData = function () {

	var _this = this;

	// All the sounds, specified by name, start point, duration, and optionally, caption text.
	this.sound_data = {
		'filename': 'allthesounds2_low', 
		'full_length': 374,
		
		'init': { 'start': 0.1, 'duration': 0.3 },
		'welcomeback0': { 'start': 1.4, 'duration': 1.6, 'text': "Welcome back." }, 
		'welcomeback1': { 'start': 3.3, 'duration': 1.5, 'text': "Welcome back!" }, 
		'pickandfeed': { 'start': 5.2, 'duration': 3.1, 'text': "Pick some food and feed it\nto the creature to help it grow." }, 
		'clicktofeedit': { 'start': 8.8, 'duration': 2.1, 'text': "Click the creature to feed it." }, 
		'taptofeedit': { 'start': 11.2, 'duration': 2.0, 'text': "Tap the creature to feed it." }, 
		'clicktofeedthem': { 'start': 13.6, 'duration': 2.1, 'text': "Click the creatures to feed them." }, 
		'taptofeedthem': { 'start': 16.1, 'duration': 1.8, 'text': "Tap the creatures to feed them." }, 
		'putfoodinbowl': { 'start': 18.5, 'duration': 2.2, 'text': "Put some food in the creature's bowl." }, 
		'putfoodinbowls': { 'start': 21.1, 'duration': 2.6, 'text': "Put some food into the creatures' bowls." }, 
		'giveeachsame': { 'start': 24.1, 'duration': 2.6, 'text': "Give each creature the\nsame amount of food. " }, 

		'useallfood': { 'start': 27.2, 'duration': 2.3, 'text': "Make sure you use all the food." }, 
		'foodleftover': { 'start': 30.0, 'duration': 3.8, 'text': "If there is a piece of food left over, \nyou still have to share fairly." }, 
		'notenoughcut': { 'start': 34.4, 'duration': 5.1 , 'text': "If there's not enough food, choose a\nfractionator to divide the food into smaller pieces." }, 
		'choosefractionator': { 'start': 40.1, 'duration': 3.8, 'text': "Choose a fractionator to cut the food\ninto smaller pieces." }, 
		'putbackandcut': { 'start': 44.4, 'duration': 5.8, 'text': "Put the food back on the table. Then choose a fractionator\nto divide the food into smaller pieces." }, 
		'plateisfull': { 'start': 50.8, 'duration': 4.1, 'text': "This plate is full. Try\nputting food on a plate\nthat isn't full yet."  }, 
		'trymoving': { 'start': 55.3, 'duration': 4.6, 'text': "Try moving some of the food\nfrom a creature with more to a creature with less." }, 
		'dividehalf': { 'start': 60.4, 'duration': 5.6, 'text': "Try dividing a piece of food in half.\nThat means cut it into two equal pieces." }, 
		'dividethirds': { 'start': 66.5, 'duration': 6.9, 'text': "Try dividing a piece of food into thirds.\nThat means cut it into three equal pieces." }, 
		'dividefourths': { 'start': 73.8, 'duration': 6.5, 'text': "Try dividing a piece of food into fourths.\nThat means cut it into four equal pieces." }, 

		'ifmistake': { 'start': 80.8, 'duration': 1.7, 'text': "If you make a mistake," }, 

		'clicktoredo': { 'start': 83.1, 'duration': 2.9, 'text': "Click here to put all the food back together and start over." }, 

		'taptoredo': { 'start': 86.5, 'duration': 2.9, 'text': "Tap here to put all the food back together and start over." }, 

		'notfair0': { 'start': 89.9, 'duration': 1.6, 'text': "That's not fair sharing." }, 
		'notfair1': { 'start': 92.1, 'duration': 2.0, 'text': "That's not fair sharing." }, 
		'notfair2': { 'start': 94.4, 'duration': 2.3, 'text': "That's not fair sharing." }, 
		'notfair3': { 'start': 97.0, 'duration': 2.0, 'text': "That's not fair sharing." }, 
		'notfair4': { 'start': 99.4, 'duration': 1.8, 'text': "That's not fair sharing." }, 
		'notfair5': { 'start': 101.6, 'duration': 2.0, 'text': "That's not fair sharing." }, 	

		'alreadyfed0': { 'start': 104.0, 'duration': 2.5, 'text': "You already fed these creatures." }, 
		'alreadyfed1': { 'start': 106.9, 'duration': 2.1, 'text': "You already fed these creatures." }, 

		// unused V
		'tapputbackstartover': { 'start': 109.5, 'duration': 3.9, 'text': "Tap here to put all the food back on the table and\nstart over." }, 
		// unused V
		'clickputbackstartover': { 'start': 113.7, 'duration': 2.9, 'text': "Click here to put all the food back on the table\nand start over." }, 
		// unused V
		'introducecutters': { 'start': 117.9, 'duration': 3.7, 'text': "If you want to cut the food into smaller pieces, use these." }, 
		'introducefractionators': { 'start': 122.0, 'duration': 4.2, 'text': "If you want to cut the food into smaller pieces, \nuse these fractionators." }, 
		'goodsharing': { 'start': 126.6, 'duration': 3.4, 'text': "Good sharing!\nEach creature got the same amount of food." }, 
		'goodworkallfed0': { 'start': 130.5, 'duration': 2.7, 'text': "Good work!\nThe creatures are all fed." }, 
		'putinrect': { 'start': 133.7, 'duration': 2.6, 'text': "Put the creature in one of\nthese rectangles." }, 
		'goodworkallfed1': { 'start': 136.8, 'duration': 2.9, 'text': "Great work!\nThe creatures are all fed." }, 
		'clicktoplace': { 'start': 140.3, 'duration': 2.5, 'text': "Click an area to put the new creature there." }, 
		'taptoplace': { 'start': 143.3, 'duration': 2.6, 'text': "Tap an area to put the new creature there." }, 	
		'wheretoputit': { 'start': 146.4, 'duration': 1.5, 'text': "Where do you want to put it?" }, 
		'choosenewhome0': { 'start': 148.4, 'duration': 1.9, 'text': "Choose a new home for it." }, 
		'choosenewhome1': { 'start': 150.8, 'duration': 1.7, 'text': "Choose a new home for it." }, 
		// unused V
		'putwithsize': { 'start': 153.0, 'duration': 2.5, 'text': "Put it with other creatures the same size." }, 
		'newcreature0': { 'start': 156.0, 'duration': 1.9, 'text': "A new creature has arrived!" }, 
		'newcreature1': { 'start': 158.3, 'duration': 2.1, 'text': "A new creature has arrived!" }, 
		'newcreature2': { 'start': 160.9, 'duration': 2.0, 'text': "A new creature has arrived!" }, 
		'growingup0': { 'start': 163.4, 'duration': 1.6, 'text': "A creature is growing up!" }, 
		'growingup1': { 'start': 165.4, 'duration': 1.9, 'text': "A creature is growing up!" }, 
		'growingup2': { 'start': 167.7, 'duration': 1.8, 'text': "A creature is growing up!" }, 
		'release0': { 'start': 169.9, 'duration': 2.1, 'text': "A creature is being released!" }, 
		'release1': { 'start': 172.4, 'duration': 2.3, 'text': "A creature is being released!" }, 
		'releaselongform': { 'start': 175.1, 'duration': 5.7, 'text': "A creature is being released into the wild!\nGood work. You've taken excellent care of it." }, 
		'greatworkrelease0': { 'start': 181.3, 'duration': 3.4, 'text': "Great work!\nA creature is being released." }, 
		'greatworkrelease1': { 'start': 185.1, 'duration': 3.2, 'text': "Great work!\nA creature is being released." }, 
		'tellingcolours': { 'start': 188.8, 'duration': 3.5, 'text': "The creatures are telling you\nwhat colours of food they want." }, 
		'tellingshapes': { 'start': 192.7, 'duration': 3.1, 'text': "The creatures are telling you\nwhat shapes of food they want." }, 
		'tellingpatterns': { 'start': 196.2, 'duration': 3.2, 'text': "The creatures are telling you\nwhat they want on their food." }, 
		'thinkingdifferent': { 'start': 199.8, 'duration': 2.7, 'text': "Each creature is thinking of something different." }, 
		'chooseonepiece':  { 'start': 203.0, 'duration': 3.4, 'text': "Choose one piece of food that has everything the creatures want." }, 
		'pickdifferent': { 'start': 206.8, 'duration': 4.0, 'text': "If a creature doesn't like one kind of food,\ntry picking something different." }, 
		'chooseforall': { 'start': 211.2, 'duration': 2.7, 'text': "Choose food that all the creatures will like." }, 
		'chooseforall_strong': { 'start': 214.3, 'duration': 2.6, 'text': "Choose food that all the creatures will like." }, 
		'choosehasfeatures': { 'start': 217.3, 'duration': 4.1, 'text': "Choose a piece of food that has all the things\nthe creatures are thinking of." }, 
		// unused V
		'whichpleaseall': { 'start': 221.8, 'duration': 3.0, 'text': "Which kind of food will make all the creatures happy?" }, 
		'tellingcolour': { 'start': 225.1, 'duration': 3.3, 'text': "The creature is telling you\nwhat color of food it wants." }, 
		'tellingshape': { 'start': 228.8, 'duration': 3.1, 'text': "The creature is telling you\nwhat shape of food it wants." }, 
		'tellingpattern': { 'start': 232.2, 'duration': 3.2, 'text': "The creature is telling you\nwhat it wants on its food." }, 
		'tellingkind': { 'start': 235.8, 'duration': 2.8, 'text': "The creature is telling you\nwhat kind of food it wants." }, 
		'tellingkinds':  { 'start': 239.1, 'duration': 2.9, 'text': "The creatures are telling you\nwhat kinds of food they want." }, 
		'greatwork0': { 'start': 242.5, 'duration': 1.6, 'text': "Great work!" }, 
		'greatwork1': { 'start': 244.6, 'duration': 1.5, 'text': "Great work!" }, 
		'greatwork2': { 'start': 246.5, 'duration': 1.5, 'text': "Great work!" }, 
		'goodjob0': { 'start': 248.4, 'duration': 1.6, 'text': "Good job!" }, 
		'goodjob1': { 'start': 250.3, 'duration': 1.3, 'text': "Good job!" }, 
		'goodwork0': { 'start': 252.0, 'duration': 1.4, 'text': "Good work!" }, 
		'goodwork1': { 'start': 253.9, 'duration': 1.2, 'text': "Good work!" }, 
		'excellentwork0': { 'start': 255.6, 'duration': 1.7, 'text': "Excellent work!" }, 
		'excellentwork1': { 'start': 257.8, 'duration': 1.6, 'text': "Excellent work!" },
		'growingupstrong': { 'start': 259.9, 'duration': 4.5, 'text': "Excellent work. The creatures are\ngrowing up healthy and strong." }, 
		'happyhealthy': { 'start': 264.9, 'duration': 4.4, 'text': "You're helping all of OddSquad's\ncreatures to grow up happy and healthy." }, 
		'okay0': { 'start': 269.8, 'duration': 1.3, 'text': "Okay!" }, 
		'okay1': { 'start': 271.6, 'duration': 1.2, 'text': "Okay!" }, 
		'allright0': { 'start': 273.3, 'duration': 1.3, 'text': "All right!" }, 
		'good0': { 'start': 275.1, 'duration': 1.1, 'text': "Good!"  }, 
		'good1': { 'start': 276.6, 'duration': 1.1, 'text': "Good!" }, 
		'thatsright0': { 'start': 278.2, 'duration': 1.6, 'text': "That's right!" }, 
		'thatsright1': { 'start': 280.2, 'duration': 1.3, 'text': "That's right!" }, 
		'right0': { 'start': 281.9, 'duration': 1.4, 'text': "Right!" }, 		
		'shebeetleeat': { 'start': 283.8, 'duration': 2.2  }, 
	 	'hebeetleeat': { 'start': 283.8, 'duration': 2.2  }, 
		'shebeetleno': { 'start': 286.6, 'duration': 1.3  }, 
		'hebeetleno': {  'start': 286.6, 'duration': 1.3  }, 
		'laserchickenvoice': {  'start': 288.4, 'duration': 1.2  }, 
		'laserchickeneat': { 'start': 289.1, 'duration': 1.2  }, 
		'laserchickenno': { 'start': 291.6, 'duration': 2.0  }, 
		'creaturedropin': {  'start': 294.1, 'duration': 2.7  }, 
		'creaturegrowup': {  'start': 297.4, 'duration': 1.9  }, 
		'creaturegrowrelease': { 'start': 300.1, 'duration': 4.5  }, 
		'creatureliftup': { 'start': 305.1, 'duration': 3.1  }, 
		'cutfood': {  'start': 308.7, 'duration': 1.1  }, 
		'trexeat': { 'start': 310.3, 'duration': 1.0  }, 
		'griffineat': { 'start': 310.3, 'duration': 1.0  }, 
		'dragoneat': { 'start': 310.3, 'duration': 1.0  }, 
		'dragonno': { 'start': 311.8, 'duration': 1.3  },		
		'dragonvoice': {  'start': 313.6, 'duration': 2.2  }, 
		'reddragoneat': { 'start': 310.3, 'duration': 1.0  }, 
		'reddragonno': { 'start': 311.8, 'duration': 1.2  },
		'reddragonvoice': {  'start': 313.6, 'duration': 2.2  }, 
		'foodfliesin': {  'start': 316.7, 'duration': 1.5  }, 
		'foodslide': {  'start': 318.2, 'duration': 1.5  }, 
		'griffinno': { 'start': 320.2, 'duration': 1.2  }, 
		'griffinvoice': {  'start': 321.9, 'duration': 1.9  }, 
		'groupeat': { 'start': 324.2, 'duration': 1.4  }, 
		'happyfaceappears': {  'start': 326.0, 'duration': 1.9  }, 
		'jackalopeeat': { 'start': 328.1, 'duration': 1.4  }, 
		'jackalopeno': { 'start': 330.1, 'duration': 1.9  }, 
		'menubutton': {  'start': 332.5, 'duration':  0.9 }, 
		'menuclose': {  'start': 333.8, 'duration': 0.8  }, 
		'menuopen': {  'start': 335.1, 'duration': 1.3  }, 
		'onoffbutton': {  'start': 336.8, 'duration': 1.0  }, 
		'plateappears': {  'start': 338.3, 'duration': 0.9  }, 
		'putfoodonplate': {  'start': 339.7, 'duration': 0.8  }, 
		'spidercateat': { 'start': 341.0, 'duration': 1.2  }, 
		'spidercatvoice': {  'start': 342.6, 'duration': 1.6  }, 
		'spidercatno': {  'start': 344.5, 'duration': 1.9  }, 
		'bubbleappears': {  'start': 346.9, 'duration': 1.2    }, 
		'newpensopen': {  'start': 348.6, 'duration': 2.2  }, 
		'tigglevoice': { 'start': 351.4, 'duration': 2.1  }, 
		'tiggleeat': { 'start': 353.9, 'duration': 2.0  }, 
		'tiggleno': { 'start': 356.4, 'duration': 2.1  }, 
		'trexno': { 'start': 359.0, 'duration': 2.8  }, 
		'trexvoice': {  'start': 362.3, 'duration':  2.2 }, 
		'unicorneat': { 'start': 364.9, 'duration': 2.8  }, 
		'unicornno': { 'start':  368.1, 'duration': 1.6  }, 
		'unicornvoice': { 'start': 370.2, 'duration': 2.1  }, 
		'whiteunicorneat': { 'start': 364.9, 'duration': 2.8  }, 
		'whiteunicornno': { 'start':  368.1, 'duration': 1.6  },
		'whiteunicornvoice': { 'start': 370.2, 'duration': 2.1  }, 
		'yummy': {  'start': 372.8, 'duration': 2.3  }
	};

	
	//this.crunchSounds = ["crunch0", "crunch1", "crunch2", "crunch3", "crunch4", "crunch5", "crunch6", "crunch7", "crunch8", "crunch9"];
	this.crunchSounds = ["spidercateat", "tiggleeat", "laserchickeneat", "unicorneat", "whiteunicorneat", "hebeetleeat", "shebeetleeat", "dragoneat", "reddragoneat", "trexeat", "griffineat", "jackalopeeat", "groupeat"];
	this.greatWorkVOs = ["greatwork0", "greatwork1", "greatwork2"];
	this.goodWorkVOs = ["goodwork0", "goodwork1"];
	this.excellentWorkVOs = ["excellentwork0", "excellentwork1"];
	this.rightVOs = ["thatsright0", "thatsright1", "right0"];
	this.okayVOs = ["okay0", "okay1"];
	this.allRightVOs = ["allright0"];
	this.goodVOs = ["good0", "good1"];
	this.praiseVOs = this.greatWorkVOs.concat(this.goodWorkVOs, this.excellentWorkVOs, this.rightVOs, this.goodVOs);
	this.affirmationVOs = this.okayVOs.concat(this.allRightVOs);
	this.tellingVOs = ["tellingcolours", "tellingshapes", "tellingpatterns", "tellingkind", "thinkingdifferent", "tellingcolour", "tellingshape", "tellingpattern"];
	this.chooseVOs = ["chooseforall", "chooseforall_strong", "choosehasfeatures", "whichpleaseall"];

	this.newCreatureVOs = ["newcreature0", "newcreature1"];
	this.growingUpVOs = ["growingup0", "growingup1", "growingup2"];
	
	this.releaseVOs_stage1 = ["releaselongform"];
	this.releaseVOs_stage2 = ["greatworkrelease0", "greatworkrelease1"];
	this.releaseVOs_stage3 = ["release0", "release1"];
	
	this.houseCreatureVOs_stage1 = ["putwithsize"];
	this.houseCreatureVOs_stage2 = ["choosenewhome0", "choosenewhome1"];
	this.houseCreatureVOs_stage3 = ["wheretoputit"];
	
	this.notFairVOs = ["notfair0", "notfair1", "notfair2", "notfair3", "notfair4", "notfair5"];
	this.alreadyFedVOs = ["alreadyfed0", "alreadyfed1"];
	this.allFedVOs = ["goodworkallfed0", "goodworkallfed1"];
	this.sharingFeedbackVOs = ["goodsharing", "goodsharing", "goodsharing", "goodsharing", "goodsharing", "goodsharing", "goodsharing"].concat(this.allFedVOs).concat(this.praiseVOs);
	
	this.feedingVOs = ["pickandfeed", "giveeachsame", "introducecutters"];
	
	this.feedingHintsSingle = [(!!('ontouchstart' in window)) ? "taptofeedit" : "clicktofeedit","pickandfeed","useallfood"];
	this.feedingHintsMultiple = [(!!('ontouchstart' in window)) ? "taptofeedthem" : "clicktofeedthem","giveeachsame","useallfood"];


	/**
	 * captionForId
	 * ------------
	 * Given the name of a sound, return a caption representing that sound (empty string if none exists)
	 * 
	 * @param  {string} soundName The name of a sound in this sprite
	 * @return {string}           The caption text representing the specified sound.
	 */
	this.captionForId = function (soundName){
		if(_this.sound_data[soundName] == undefined || _this.sound_data[soundName].text == undefined){
			return "";
		} else {
			return _this.sound_data[soundName].text;
		}
	}

	/**
	 * durationForId
	 * -------------
	 * Given the name of a sound, return its duration
	 * 
	 * @param  {string} soundName The name of a sound in this sprite
	 * @return {Number}           The duration of the sound, in seconds
	 */
	this.durationForId = function (soundName){
		if(_this.sound_data[soundName] == undefined || _this.sound_data[soundName].duration == undefined){
			return 0;
		} else {
			_log("S O U N D   "+soundName+" has duration "+_this.sound_data[soundName].duration);
			return _this.sound_data[soundName].duration;
		}
	}
	
	/**
	 * randomSoundNameFrom
	 * --------------------
	 * Given the name of a group of sounds, return the name of a random group member
	 * 
	 * @param  {string} soundArrayName The name of an array of sounds to select from
	 * @return {string}                The name of a randomly chosen sound from the specified array
	 */
	this.randomSoundNameFrom = function (soundArrayName){
		var soundname =  _this[soundArrayName][Math.floor(Math.random()*_this[soundArrayName].length)];
		return soundname;
	}
	
	/**
	 * soundBelongsTo
	 * --------------
	 * Return whether the specified sound is a member of the specified sound array.
	 * 
	 * @param  {string} soundName      The name of a sound in this sprite
	 * @param  {string} soundArrayName The name of a group of sounds
	 * @return {Boolean}              
	 */
	this.soundBelongsTo = function (soundName, soundArrayName){
		for(var i=0; i<_this[soundArrayName].length; i++ ){
			if(_this[soundArrayName][i] == soundName){
				//_log("yes, "+soundName+" belongs to "+soundArrayName+"!");
				return true;
			} 
		}
		return false;
	}	
}