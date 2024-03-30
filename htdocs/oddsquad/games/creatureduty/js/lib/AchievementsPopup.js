/* global createjs */

AchievementsPopup.SpriteSheet = {
"images": ["images/awards_popup.png"],
"frames": [
    [4, 0, 658, 161],
	[0, 363, 342, 44],
	[0, 164, 406, 45],
	[0, 211, 350, 41],
	[0, 250, 377, 37],
	[0, 286, 366, 37],
	[0, 326, 271, 37],
	[472, 294, 101, 108],
	[531, 166, 121, 119],
	[574, 316, 117, 79],
	[357, 293, 111, 97],
	[413, 173, 113, 114]
],
"animations": {
    
        "Acheivement_panel":[0], 
        "AwardUnlocked":[1], 
		"text_toenail":[2], 
		"text_platter":[3], 
		"text_chicken":[4], 
		"text_brasshorn":[5], 
		"text_trextooth":[6], 
        "award-toenail":[7], 
		"award-platter":[8], 
		"award-chicken":[9], 
		"award-brasshorn":[10], 
		"award-trextooth":[11]
        
}
};


AchievementsPopup.AchievementsConfig = {
	"achievements": [
		{	"id": 1,	"icon":  	"award-pink", 			"text": 	"text_pink"				},
		{	"id": 2,	"icon":   	"award-gurple", 		"text": 	"text_gurple"			},
		{	"id": 3,	"icon": 	"award-golden", 		"text": 	"text_gold"				},
		{	"id": 4,	"icon": 	"award-scram", 			"text": 	"text_scram"			},
		{	"id": 5,	"icon": 	"award-threec", 		"text": 	"text_threec"			},
		{	"id": 6, 	"icon": 	"award-soundcheck", 	"text": 	"text_soundcheck" 		},
		{	"id": 7, 	"icon": 	"award-2468", 			"text": 	"text_2468" 			},
		{	"id": 8, 	"icon": 	"award-countdown", 		"text": 	"text_countdown" 		},
		{	"id": 9, 	"icon": 	"award-lazer", 			"text": 	"text_lazer" 			},
		{	"id": 10, 	"icon": 	"award-mso", 			"text": 	"text_mso" 				},
		{	"id": 11, 	"icon": 	"award-obrian", 		"text": 	"text_obrian" 			},
		{	"id": 12, 	"icon": 	"award-elbow", 			"text": 	"text_elbow" 			},
		{	"id": 13, 	"icon": 	"award-mom", 			"text": 	"text_mom" 				},
		{	"id": 14, 	"icon": 	"award-squash",			"text": 	"text_squash" 			},
		{	"id": 15, 	"icon": 	"award-ohara",			"text": 	"text_ohara" 			},
		{	"id": 16, 	"icon": 	"award-orange",			"text": 	"text_orange" 			},	
		{	"id": 17, 	"icon": 	"award-order",			"text": 	"text_order" 			},
		{	"id": 18, 	"icon": 	"award-eieio",			"text": 	"text_eieio" 			},
		{	"id": 19, 	"icon": 	"award-mathless",		"text": 	"text_mathless"			},
		{	"id": 20, 	"icon": 	"award-mathroom",		"text": 	"text_mathroom"			},
		{	"id": 21, 	"icon": 	"award-crimson",		"text": 	"text_crimson"			},
		{	"id": 22, 	"icon": 	"award-draggin",		"text": 	"text_draggin"			},
		{	"id": 23, 	"icon": 	"award-goldencrust",	"text": 	"text_goldencrust"		},
		{	"id": 24, 	"icon": 	"award-blueberrytorc",	"text": 	"text_blueberrytorc"	},
		{	"id": 25, 	"icon": 	"award-trisquare",		"text": 	"text_trisquare"		},
		{	"id": 26, 	"icon": 	"award-toenail",		"text": 	"text_toenail"		},
		{	"id": 27, 	"icon": 	"award-platter",		"text": 	"text_platter"		},
		{	"id": 28, 	"icon": 	"award-chicken",		"text": 	"text_chicken"		},
		{	"id": 29, 	"icon": 	"award-brasshorn",		"text": 	"text_brasshorn"		},
		{	"id": 30, 	"icon": 	"award-trextooth",		"text": 	"text_trextooth"		}
	]
};


/**
 * How long it takes to tween the popup in.
 * @type {Number}
 */
AchievementsPopup.tweenInTime = 500;

/**
 * How long the popup stays up after it tweens in.
 * @type {Number}
 */
AchievementsPopup.waitTime = 3000;


/**
 * How long it takes for the popup to go back down after it tweens in.
 * @type {Number}
 */
AchievementsPopup.tweenOutTime = 500;

/**
 * Creates a new achievements popup.
 * @param {number} achievementId - The identifier of the achievement to display.
 * @param {createjs.Container} container - The container that the popup gets added to.
 */
function AchievementsPopup (achievementId, container, factory) {
	"use strict";
	var _this = this;

	// The createjs sprite sheet that contains the images for this popup.
	var _spritesheet;

	// The container that holds the popup.
	var _popupContainer;

	// The background image for the popup.
	var _background;

	// The container that this popup has been added to.
	var _container;

	// The title text (Achievement unlocked).
	var _title;

	// The image showing the name of the award being unlocked.
	var _awardName;

	// The image showing the icon of the award being unlocked.
	var _awardIcon;

	var _factory;

	function _getAsset(name) {
		if(!isEmpty(factory)) {
			_factory.getAsset(name);
		} else {
			var newSprite = new createjs.Sprite(_spritesheet, name);
			newSprite.mouseEnabled = false;
			return newSprite;
		}
	}

	/**
	 * Construct the achievements popup.
	 * @param  {Number} achievementId - The unique identifier for the achievement to display.
	 * @param  {createjs.Container} container - The container to add this popup to.
	 * @return {[createjs.Container]} - The popup's container.
	 */
	function _construct(achievementId, container, factory) {
		_factory = factory;
		_container = container;
		_spritesheet = new createjs.SpriteSheet(AchievementsPopup.SpriteSheet);

		// create the achievement popup container and add it to the container passed in.
		_popupContainer = new createjs.Container();
		_container.addChild(_popupContainer);

		// create the background and add it to the container.
		_background = _getAsset("Acheivement_panel");
		_popupContainer.addChild(_background);

		// set the default achevement to display to the 1st in the list, in case the one we want isn't found.
		var achievementInfo = AchievementsPopup.AchievementsConfig.achievements[0];

		// get the achievement info for the desired achievement.
		var i;
		for (i = 0; i < AchievementsPopup.AchievementsConfig.achievements.length; i++) {
			var currentInfo = AchievementsPopup.AchievementsConfig.achievements[i];
			if(currentInfo.id == achievementId)
			{
				achievementInfo = currentInfo;
				break;
			}
		}

		// create the title text and add it.
		_title = _getAsset("AwardUnlocked");
		_popupContainer.addChild(_title);
		_title.x = 105;
		_title.y = 50;

		// create the award name image.
		_awardName = _getAsset(achievementInfo.text);

		// determine where the center of the award name image is and position it.
		var name_bounds = _spritesheet.getFrameBounds(_awardName.currentFrame);
		_awardName.regX = name_bounds.width / 2;
		_awardName.regY = name_bounds.height / 2;
		_awardName.x = 262;
		_awardName.y = 125;

		// add the award name.
		_popupContainer.addChild(_awardName);

		// create the award icon image.
		_awardIcon = _getAsset(achievementInfo.icon);
		_awardIcon.mouseEnabled = false;
		
		// determine where the center of the award icon image is and position it.
		var icon_bounds = _spritesheet.getFrameBounds(_awardIcon.currentFrame);
		if(icon_bounds != null){
			_awardIcon.regX = icon_bounds.width / 2;
			_awardIcon.regY = icon_bounds.height / 2;
		}
		_awardIcon.x = 550;
		_awardIcon.y = 97;
		// add the award icon.
		_popupContainer.addChild(_awardIcon);

		// position the container itself.
		_popupContainer.x = 179;
		_popupContainer.y = 768;

		// Tween the popup in and out.
		createjs.Tween.get(_popupContainer).
		to({y:610}, AchievementsPopup.tweenInTime).
		wait(AchievementsPopup.waitTime).
		to({y:768}, AchievementsPopup.tweenOutTime).
		call(function() {
			_container.removeChild(_popupContainer);
		});

		return _popupContainer;

	}

	return _construct(achievementId, container, factory);
}