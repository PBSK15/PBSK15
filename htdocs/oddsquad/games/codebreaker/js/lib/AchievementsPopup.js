/* global createjs */
//require.include("weblib/achievements/AchievementManager.js");

AchievementsPopup.CB1 = 6;
AchievementsPopup.CB2 = 7;
AchievementsPopup.CB3 = 8;
AchievementsPopup.CB4 = 9;
AchievementsPopup.CB5 = 10;

AchievementsPopup.SpriteSheet = {
	"images": ["img/achive/awards_popup.png"],
	"frames": [
    [2, 2, 667, 158], 
    [1069, 64, 313, 32], 
    [1474, 305, 116, 46], 
    [984, 421, 88, 84], 
    [1320, 269, 92, 92], 
    [544, 399, 106, 104], 
    [1494, 353, 82, 82], 
    [1660, 400, 78, 78], 
    [652, 437, 84, 56], 
    [848, 313, 62, 92], 
    [1022, 325, 106, 94], 
    [2, 369, 150, 136], 
    [154, 369, 150, 134], 
    [1623, 141, 122, 88], 
    [306, 430, 142, 70], 
    [744, 313, 102, 102], 
    [1583, 231, 110, 60], 
    [1414, 269, 58, 84], 
    [1481, 203, 100, 100], 
    [1695, 232, 90, 78], 
    [922, 407, 60, 98], 
    [1074, 421, 88, 84], 
    [1130, 325, 98, 94], 
    [1750, 140, 96, 90], 
    [1239, 203, 122, 52], 
    [1592, 293, 92, 80], 
    [1750, 38, 96, 100], 
    [1252, 369, 66, 108], 
    [1774, 312, 72, 102], 
    [652, 313, 90, 122], 
    [744, 417, 88, 88], 
    [1686, 312, 86, 86], 
    [1320, 363, 90, 86], 
    [1412, 363, 80, 86], 
    [450, 430, 92, 70], 
    [912, 325, 108, 80], 
    [1230, 257, 88, 110], 
    [834, 417, 86, 88], 
    [1680, 69, 68, 70], 
    [1578, 375, 80, 70], 
    [1363, 203, 116, 64], 
    [1164, 421, 86, 84], 
    [671, 34, 396, 34], 
    [423, 198, 240, 29], 
    [1384, 69, 294, 34], 
    [1355, 105, 291, 34], 
    [2, 302, 353, 29], 
    [661, 245, 260, 34], 
    [1111, 2, 360, 29], 
    [2, 162, 441, 29], 
    [671, 178, 284, 34], 
    [671, 70, 379, 34], 
    [1052, 98, 301, 29], 
    [1027, 129, 301, 29], 
    [339, 363, 223, 34], 
    [394, 265, 257, 34], 
    [665, 214, 269, 29], 
    [394, 229, 265, 34], 
    [306, 399, 184, 29], 
    [357, 332, 226, 29], 
    [1431, 38, 317, 29], 
    [1111, 33, 318, 29], 
    [936, 227, 252, 29], 
    [653, 281, 257, 30], 
    [912, 289, 251, 34], 
    [1295, 172, 282, 29], 
    [1473, 2, 327, 34], 
    [671, 106, 354, 34], 
    [2, 193, 419, 31], 
    [2, 333, 335, 34], 
    [367, 301, 228, 29], 
    [445, 162, 224, 34], 
    [1330, 141, 291, 29], 
    [2, 266, 363, 34], 
    [957, 191, 280, 34], 
    [998, 160, 295, 29], 
    [2, 226, 390, 38], 
    [923, 258, 252, 29], 
    [671, 2, 438, 30], 
    [671, 142, 325, 34]
],
"animations": {
    
        "Acheivement_panel":[0], 
        "AwardUnlocked":[1], 
        "award-2468":[2], 
        "award-azure":[3], 
        "award-beaker":[4], 
        "award-blueberrytorc":[5], 
        "award-brasshorn":[6], 
        "award-bridgebarrier":[7], 
        "award-chicken":[8], 
        "award-countdown":[9], 
        "award-crimson":[10], 
        "award-default-BAK":[11], 
        "award-default":[12], 
        "award-draggin":[13], 
        "award-eieio":[14], 
        "award-elbow":[15], 
        "award-epaulets":[16], 
        "award-golden":[17], 
        "award-goldencrust":[18], 
        "award-gurple":[19], 
        "award-jackie":[20], 
        "award-lazer":[21], 
        "award-mathless":[22], 
        "award-mathroom":[23], 
        "award-mom":[24], 
        "award-mso":[25], 
        "award-obrian":[26], 
        "award-ohara":[27], 
        "award-orange":[28], 
        "award-order":[29], 
        "award-pink":[30], 
        "award-platter":[31], 
        "award-redswan":[32], 
        "award-scram":[33], 
        "award-sneaker":[34], 
        "award-soundcheck":[35], 
        "award-squash":[36], 
        "award-threec":[37], 
        "award-toenail":[38], 
        "award-trextooth":[39], 
        "award-trisquare":[40], 
        "award-turquoise":[41], 
        "text_2468":[42], 
        "text_azure":[43], 
        "text_beaker":[44], 
        "text_blueberrytorc":[45], 
        "text_brasshorn":[46], 
        "text_bridgebarrier":[47], 
        "text_chicken":[48], 
        "text_countdown":[49], 
        "text_crimson":[50], 
        "text_draggin":[51], 
        "text_eieio":[52], 
        "text_elbow":[53], 
        "text_epaulets":[54], 
        "text_gold":[55], 
        "text_goldencrust":[56], 
        "text_gurple":[57], 
        "text_jackie":[58], 
        "text_lazer":[59], 
        "text_mathless":[60], 
        "text_mathroom":[61], 
        "text_mom":[62], 
        "text_mso":[63], 
        "text_obrian":[64], 
        "text_ohara":[65], 
        "text_orange":[66], 
        "text_order":[67], 
        "text_pink":[68], 
        "text_platter":[69], 
        "text_redswan":[70], 
        "text_scram":[71], 
        "text_sneaker":[72], 
        "text_soundcheck":[73], 
        "text_squash":[74], 
        "text_threec":[75], 
        "text_toenail":[76], 
        "text_trextooth":[77], 
        "text_trisquare":[78], 
        "text_turquoise":[79]
	}
};


AchievementsPopup.AchievementsConfig = {
	1: {"icon":  	"award-pink", 			"text": 	"text_pink"				},
	2: {"icon":   	"award-gurple", 		"text": 	"text_gurple"			},
	3: {"icon": 	"award-golden", 		"text": 	"text_gold"				},
	4: {"icon": 	"award-scram", 			"text": 	"text_scram"			},
	5: {"icon": 	"award-threec", 		"text": 	"text_threec"			},
	6: {"icon": 	"award-soundcheck", 	"text": 	"text_soundcheck" 		},
	7: {"icon": 	"award-2468", 			"text": 	"text_2468" 			},
	8: {"icon": 	"award-countdown", 		"text": 	"text_countdown" 		},
	9: {"icon": 	"award-sneaker", 		"text": 	"text_sneaker" 			},
	10: {"icon": 	"award-mso", 			"text": 	"text_mso" 				},
	11: {"icon": 	"award-obrian", 		"text": 	"text_obrian" 			},
	12: {"icon": 	"award-elbow", 			"text": 	"text_elbow" 			},
	13: {"icon": 	"award-mom", 			"text": 	"text_mom" 				},
	14: {"icon": 	"award-squash",			"text": 	"text_squash" 			},
	15: {"icon": 	"award-ohara",			"text": 	"text_ohara" 			},
	16: {"icon": 	"award-orange",			"text": 	"text_orange" 			},	
	17: {"icon": 	"award-order",			"text": 	"text_order" 			},
	18: {"icon": 	"award-eieio",			"text": 	"text_eieio" 			},
	19: {"icon": 	"award-redswan",		"text": 	"text_redswan"			},
	20: {"icon": 	"award-jackie",			"text": 	"text_jackie"			},
	21: {"icon": 	"award-crimson",		"text": 	"text_crimson"			},
	22: {"icon": 	"award-draggin",		"text": 	"text_draggin"			},
	23: {"icon": 	"award-goldencrust",	"text": 	"text_goldencrust"		},
	24: {"icon": 	"award-blueberrytorc",	"text": 	"text_blueberrytorc"	},
	25: {"icon": 	"award-trisquare",		"text": 	"text_trisquare"		},
	26: {"icon": 	"award-toenail",		"text": 	"text_toenail"			},
	27: {"icon": 	"award-platter",		"text": 	"text_platter"			},
	28: {"icon": 	"award-chicken",		"text": 	"text_chicken"			},
	29: {"icon": 	"award-brasshorn",		"text": 	"text_brasshorn"		},
	30: {"icon": 	"award-trextooth",		"text": 	"text_trextooth"		}
};


/**
 * How long it takes to tween the popup in.
 * @type {Number}
 */
AchievementsPopup.TWEEN_TIME = 500;

/**
 * How long the popup stays up after it tweens in.
 * @type {Number}
 */
AchievementsPopup.WAIT_TIME = 3000;

AchievementsPopup.SHOW_POSITION = {x:0, y:0};
AchievementsPopup.HIDE_POSITION = {x:0, y:200};


/**
 * Creates a new achievements popup.
 * @param {number} achievementId - The identifier of the achievement to display.
 * @param {createjs.Container} container - The container that the popup gets added to.
 */
function AchievementsPopup (achievementId, container, factory) {

	"use strict";
	var _this = new createjs.Container();

	// The createjs sprite sheet that contains the images for this popup.
	var _spritesheet;

	// The popup bg, icon, and text.
	var _popupContainer;
	var _popupBackground;
	var _popupTitle;
	var _popupIcon;
	var _popupText;

	function _Construct() {

		_spritesheet = new createjs.SpriteSheet(AchievementsPopup.SpriteSheet);

		// add then set the initial container position
		_popupContainer = new createjs.Container();
		_popupContainer.x = AchievementsPopup.HIDE_POSITION.x;
		_popupContainer.y = AchievementsPopup.HIDE_POSITION.y;
		_this.addChild(_popupContainer);

		// add the container background
		_popupBackground = new createjs.Sprite(_spritesheet, "Acheivement_panel");
		_CenterPivit(_popupBackground);
		_this.width = _popupBackground.width;
		_this.height = _popupBackground.height;
		_popupBackground.regY = _popupBackground.height;
		_popupContainer.addChild(_popupBackground);

		// add the container title
		_popupTitle = new createjs.Sprite(_spritesheet, "AwardUnlocked");
		_CenterPivit(_popupTitle);
		_popupTitle.x = -72;
		_popupTitle.y = -100;
		_popupContainer.addChild(_popupTitle);

		return _this;
	}


	_this.ShowAward = function( awardId ) {
		console.log(ss.oddsquad.UserLogin.hasPbsLogin());
		if (ss.oddsquad.UserLogin.hasPbsLogin()) {
			_AddAward(String(awardId));
		}
	}

	function _AddAward( awardId ) {
		
		var awardName = AchievementsPopup.AchievementsConfig[awardId].icon;
		var awardText = AchievementsPopup.AchievementsConfig[awardId].text;

		// Add to database based on achive manager in library
		var isValid = ss.AchievementManager.addAchievement(awardId);
		console.log("Award is valid = " + isValid);

		// Show the achievement in game
		if (isValid) {

			// Remove old achievement icon and text if exists
			if (_popupIcon) {
				_this.removeChild(_popupIcon);
			}
			if (_popupText) {
				_this.removeChild(_popupText);
			}

			// create new achievement icon
			_popupIcon = new createjs.Sprite(_spritesheet, awardName);
			_CenterPivit(_popupIcon);

			// create new achievement text
			_popupText = new createjs.Sprite(_spritesheet, awardText);
			_CenterPivit(_popupText);

			// add new achievement icon and text to the achievement container
			_popupIcon.x = 216;
			_popupIcon.y = -64;
			_popupText.x = -72;
			_popupText.y = -50;
			_popupContainer.addChild(_popupIcon);
			_popupContainer.addChild(_popupText);

			// set the initial container position
			_popupContainer.x = AchievementsPopup.HIDE_POSITION.x;
			_popupContainer.y = AchievementsPopup.HIDE_POSITION.y;

			// display the container
			var awardTransition = createjs.Tween
				.get(_popupContainer, {loop:false, override:true})
				.to(AchievementsPopup.SHOW_POSITION, AchievementsPopup.TWEEN_TIME, createjs.Ease.sineInOut)
				.wait(AchievementsPopup.WAIT_TIME)
				.to(AchievementsPopup.HIDE_POSITION, AchievementsPopup.TWEEN_TIME, createjs.Ease.sineInOut);
		}
	}


	function _CenterPivit( spriteObj ) {
		spriteObj.width = _spritesheet.getFrameBounds(spriteObj.currentFrame).width;
		spriteObj.height = _spritesheet.getFrameBounds(spriteObj.currentFrame).height;
		spriteObj.regX = spriteObj.width / 2;
		spriteObj.regY = spriteObj.height / 2;
	}
/*
	function _getAsset(name) {
		if(!isEmpty(factory)) {
			_factory.getAsset(name);
		} else {
			return new createjs.Sprite(_spritesheet, name);
		}
	}


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

		// determine where the center of the award icon image is and position it.
		var icon_bounds = _spritesheet.getFrameBounds(_awardIcon.currentFrame);
		_awardIcon.regX = icon_bounds.width / 2;
		_awardIcon.regY = icon_bounds.height / 2;
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
	*/

	return _Construct();
}