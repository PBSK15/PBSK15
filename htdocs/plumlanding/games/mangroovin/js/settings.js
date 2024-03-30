//settings.js

// asset manifest array - images and audio
var assetManifest = [
	{src:"assets/spritesheets/heronSpritesheet.png", id:"heronSpritesheet"},
	{src:"assets/spritesheets/grouper_baby.png", id:"grouper_baby"},
	{src:"assets/spritesheets/prawn.png", id:"prawn"},
	{src:"assets/spritesheets/shark.png", id:"shark"},
	{src:"assets/img/Background_1.jpg", id:"background_1"},
	{src:"assets/img/Background_2.jpg", id:"background_2"},
	{src:"assets/img/BG_Dirt1.png", id:"waterBottom3"},
	{src:"assets/img/BG_Dirt2.png", id:"waterBottom2"},
	{src:"assets/img/BG_Dirt3.png", id:"waterBottom1"},
	{src:"assets/img/bg_grass1.png", id:"grassTuff"},
	{src:"assets/img/bg_grass2.png", id:"grassTuff2"},
	{src:"assets/img/bg_stick1.png", id:"root1"},
	{src:"assets/img/bg_stick2.png", id:"root2"},
	{src:"assets/img/bg_stick3.png", id:"root3"},
	{src:"assets/img/camo_roots_back.png", id:"mangrove_back"},
	{src:"assets/img/camo_roots_front.png", id:"mangrove_front"},
	{src:"assets/img/bg_rock.png", id:"rock"},
	{src:"assets/img/bg_rock2.png", id:"rock2"},
	{src:"assets/img/homeExitAreaImg.png", id:"homeExitArea"},
	{src:"assets/img/playbutton.png", id:"PlayButton"},
	{src:"assets/img/hitboxArea.png", id:"hitboxArea"},
	{src:"assets/img/camo_rock_back.png", id:"camoRock_back"},
	{src:"assets/img/camo_rock_front.png", id:"camoRock_front"},
	{src:"assets/img/shadow.png", id:"heron_shadow"},
	{src:"assets/img/plum/theship2.jpg", id:"plumShip"},
	{src:"assets/img/funFacts/06_babyFish.png", id:"funFact1"},
	{src:"assets/img/funFacts/03_babyGrouper.png", id:"funFact2"},
	{src:"assets/img/funFacts/04_world.png", id:"funFact3"},
	{src:"assets/img/funFacts/05_Mangrove.png", id:"funFact4"},
	{src:"assets/img/funFacts/02_mangroveRoots.png", id:"funFact5"},
	{src:"assets/img/funFacts/07_sharkNight.png", id:"funFact6"},
	{src:"assets/img/funFacts/08_sharkDay.png", id:"funFact7"},
	{src:"assets/img/funFacts/09_sharkBabies.png", id:"funFact8"},
	{src:"assets/img/funFacts/10_sharkTeeth.png", id:"funFact9"},
	{src:"assets/img/bubbles_ss.png", id:"bubbles_ss"},
	{src:"assets/img/bgFish.png", id:"bgFish"},

	{src:"assets/audio/amazingjobhighscore.mp3", id:"amazingjobhighscore"},
	{src:"assets/audio/amazingjobhighscore.ogg", id:"amazingjobhighscore"},

	{src:"assets/audio/beathighscore.mp3", id:"beathighscore"},
	{src:"assets/audio/beathighscore.ogg", id:"beathighscore"},
	
	{src:"assets/audio/buttonplayagain.mp3", id:"buttonplayagain"},
	{src:"assets/audio/buttonplayagain.ogg", id:"buttonplayagain"},

	{src:"assets/audio/careful_predators.mp3", id:"careful_predators"},
	{src:"assets/audio/careful_predators.ogg", id:"careful_predators"},
	
	{src:"assets/audio/click_play.mp3", id:"click_play"},
	{src:"assets/audio/click_play.ogg", id:"click_play"},
	
	{src:"assets/audio/click_toswim.mp3", id:"click_toswim"},
	{src:"assets/audio/click_toswim.ogg", id:"click_toswim"},

	{src:"assets/audio/eaten_by_heron.mp3", id:"eaten_by_heron"},
	{src:"assets/audio/eaten_by_heron.ogg", id:"eaten_by_heron"},
	
	{src:"assets/audio/eaten_by_shark.mp3", id:"eaten_by_shark"},
	{src:"assets/audio/eaten_by_shark.ogg", id:"eaten_by_shark"},

	{src:"assets/audio/endofgame.mp3", id:"endofgame"},
	{src:"assets/audio/endofgame.ogg", id:"endofgame"},
	
	{src:"assets/audio/fact5.mp3", id:"fact1"},
	{src:"assets/audio/fact5.ogg", id:"fact1"},

	{src:"assets/audio/fact2.mp3", id:"fact2"},
	{src:"assets/audio/fact2.ogg", id:"fact2"},

	{src:"assets/audio/fact3.mp3", id:"fact3"},
	{src:"assets/audio/fact3.ogg", id:"fact3"},

	{src:"assets/audio/fact4.mp3", id:"fact4"},
	{src:"assets/audio/fact4.ogg", id:"fact4"},

	{src:"assets/audio/fact1.mp3", id:"fact5"},
	{src:"assets/audio/fact1.ogg", id:"fact5"},

	{src:"assets/audio/fact6.mp3", id:"fact6"},
	{src:"assets/audio/fact6.ogg", id:"fact6"},

	{src:"assets/audio/fact7.mp3", id:"fact7"},
	{src:"assets/audio/fact7.ogg", id:"fact7"},

	{src:"assets/audio/fact8.mp3", id:"fact8"},
	{src:"assets/audio/fact8.ogg", id:"fact8"},

	{src:"assets/audio/fact9.mp3", id:"fact9"},
	{src:"assets/audio/fact9.ogg", id:"fact9"},	

	{src:"assets/audio/gametitle.mp3", id:"gametitle"},
	{src:"assets/audio/gametitle.ogg", id:"gametitle"},

	{src:"assets/audio/greathighscore.mp3", id:"greathighscore"},
	{src:"assets/audio/greathighscore.ogg", id:"greathighscore"},

	{src:"assets/audio/heron_quicker.mp3", id:"heron_quicker"},
	{src:"assets/audio/heron_quicker.ogg", id:"heron_quicker"},

	{src:"assets/audio/hide_seagrass.mp3", id:"hide_seagrass"},
	{src:"assets/audio/hide_seagrass.ogg", id:"hide_seagrass"},

	{src:"assets/audio/hit_to_start_unlogged_key.mp3", id:"hit_to_start_unlogged_key"},
	{src:"assets/audio/hit_to_start_unlogged_key.ogg", id:"hit_to_start_unlogged_key"},

	{src:"assets/audio/hit_to_start_unlogged_touch.mp3", id:"hit_to_start_unlogged_touch"},
	{src:"assets/audio/hit_to_start_unlogged_touch.ogg", id:"hit_to_start_unlogged_touch"},
	
	{src:"assets/audio/last_shrimp.mp3", id:"last_shrimp"},
	{src:"assets/audio/last_shrimp.ogg", id:"last_shrimp"},

	{src:"assets/audio/more_sharks.mp3", id:"more_sharks"},
	{src:"assets/audio/more_sharks.ogg", id:"more_sharks"},

	{src:"assets/audio/mystuffspacebar.mp3", id:"mystuffspacebar"},
	{src:"assets/audio/mystuffspacebar.ogg", id:"mystuffspacebar"},

	{src:"assets/audio/mystufftap.mp3", id:"mystufftap"},
	{src:"assets/audio/mystufftap.ogg", id:"mystufftap"},

	{src:"assets/audio/nexttime.mp3", id:"nexttime"},
	{src:"assets/audio/nexttime.ogg", id:"nexttime"},

	{src:"assets/audio/oneleft.mp3", id:"oneleft"},
	{src:"assets/audio/oneleft.ogg", id:"oneleft"},

	{src:"assets/audio/safe_but_eat_more_short.mp3", id:"safe_but_eat_more_short"},
	{src:"assets/audio/safe_but_eat_more_short.ogg", id:"safe_but_eat_more_short"},

	{src:"assets/audio/safe_but_eat_more.mp3", id:"safe_but_eat_more"},
	{src:"assets/audio/safe_but_eat_more.ogg", id:"safe_but_eat_more"},

	{src:"assets/audio/Safe_but.mp3", id:"Safe_but"},
	{src:"assets/audio/Safe_but.ogg", id:"Safe_but"},

	{src:"assets/audio/safe.mp3", id:"safe"},
	{src:"assets/audio/safe.ogg", id:"safe"},

	{src:"assets/audio/spacebarplayagain.mp3", id:"spacebarplayagain"},
	{src:"assets/audio/spacebarplayagain.ogg", id:"spacebarplayagain"},

	{src:"assets/audio/swim_camouflage.mp3", id:"swim_camouflage"},
	{src:"assets/audio/swim_camouflage.ogg", id:"swim_camouflage"},

	{src:"assets/audio/swim_camouflage.mp3", id:"swim_camouflage"},
	{src:"assets/audio/swim_camouflage.ogg", id:"swim_camouflage"},

	{src:"assets/audio/tap_play.mp3", id:"tap_play"},
	{src:"assets/audio/tap_play.ogg", id:"tap_play"},

	{src:"assets/audio/tap_toswim.mp3", id:"tap_toswim"},
	{src:"assets/audio/tap_toswim.ogg", id:"tap_toswim"},

	{src:"assets/audio/tapbuttonplayagain.mp3", id:"tapbuttonplayagain"},
	{src:"assets/audio/tapbuttonplayagain.ogg", id:"tapbuttonplayagain"},

	{src:"assets/audio/tapplayagain.mp3", id:"tapplayagain"},
	{src:"assets/audio/tapplayagain.ogg", id:"tapplayagain"},

	{src:"assets/audio/tapplaybuttonplayagain.mp3", id:"tapplaybuttonplayagain"},
	{src:"assets/audio/tapplaybuttonplayagain.ogg", id:"tapplaybuttonplayagain"},

	{src:"assets/audio/watchout_heron.mp3", id:"watchout_heron"},
	{src:"assets/audio/watchout_heron.ogg", id:"watchout_heron"},

	{src:"assets/audio/watchout_shark.mp3", id:"watchout_shark"},
	{src:"assets/audio/watchout_shark.ogg", id:"watchout_shark"},

	{src:"assets/audio/welcome1.mp3", id:"welcome1"},
	{src:"assets/audio/welcome1.ogg", id:"welcome1"},

	{src:"assets/audio/welcome2.mp3", id:"welcome2"},
	{src:"assets/audio/welcome2.ogg", id:"welcome2"},

	{src:"assets/audio/welcome3.mp3", id:"welcome3"},
	{src:"assets/audio/welcome3.ogg", id:"welcome3"},

	{src:"assets/audio/welcome4.mp3", id:"welcome4"},
	{src:"assets/audio/welcome4.ogg", id:"welcome4"},

	{src:"assets/audio/yourpoints.mp3", id:"yourpoints"},
	{src:"assets/audio/yourpoints.ogg", id:"yourpoints"},

	{src:"assets/audio/safe_roots.mp3", id:"safe_roots"},
	{src:"assets/audio/safe_roots.ogg", id:"safe_roots"},
		
	{src:"assets/audio/mystuffpress.mp3", id:"mystuffpress"},
	{src:"assets/audio/mystuffpress.ogg", id:"mystuffpress"},

	{src:"assets/audio/endgame_playagain.mp3", id:"endgame_playagain"},
	{src:"assets/audio/endgame_playagain.ogg", id:"endgame_playagain"},

	{src:"assets/audio/plum/plinkopen.mp3", id:"plinkopen"},
	{src:"assets/audio/plum/plinkopen.ogg", id:"plinkopen"},

	{src:"assets/audio/plum/pointcount.mp3", id:"pointcount"},
	{src:"assets/audio/plum/pointcount.ogg", id:"pointcount"},

	{src:"assets/audio/plum/sfx_plumconfetti.mp3", id:"plumconfetti"},
	{src:"assets/audio/plum/sfx_plumconfetti.ogg", id:"plumconfetti"},

	{src:"assets/audio/sfx/heronsplash.mp3", id:"heronsplash"},
	{src:"assets/audio/sfx/heronsplash.ogg", id:"heronsplash"},

	{src:"assets/audio/sfx/sharkchomp.mp3", id:"sharkchomp"},
	{src:"assets/audio/sfx/sharkchomp.ogg", id:"sharkchomp"},

	{src:"assets/audio/sfx/shrimpeaten.mp3", id:"shrimpeaten"},
	{src:"assets/audio/sfx/shrimpeaten.ogg", id:"shrimpeaten"},

	{src:"assets/audio/sfx/waterbubbles.mp3", id:"waterbubbles"},
	{src:"assets/audio/sfx/waterbubbles.ogg", id:"waterbubbles"},

	{src:"assets/audio/sfx/opengate2.mp3", id:"opengate2"},
	{src:"assets/audio/sfx/opengate2.ogg", id:"opengate2"},

];

var assetManifest_IE = [
	{src:"assets/spritesheets/heronSpritesheet.png", id:"heronSpritesheet"},
	{src:"assets/spritesheets/grouper_baby.png", id:"grouper_baby"},
	{src:"assets/spritesheets/prawn.png", id:"prawn"},
	{src:"assets/spritesheets/shark.png", id:"shark"},
	{src:"assets/img/Background_1.jpg", id:"background_1"},
	{src:"assets/img/Background_2.jpg", id:"background_2"},
	{src:"assets/img/BG_Dirt1.png", id:"waterBottom3"},
	{src:"assets/img/BG_Dirt2.png", id:"waterBottom2"},
	{src:"assets/img/BG_Dirt3.png", id:"waterBottom1"},
	{src:"assets/img/bg_grass1.png", id:"grassTuff"},
	{src:"assets/img/bg_grass2.png", id:"grassTuff2"},
	{src:"assets/img/bg_stick1.png", id:"root1"},
	{src:"assets/img/bg_stick2.png", id:"root2"},
	{src:"assets/img/camo_roots_back.png", id:"mangrove_back"},
	{src:"assets/img/camo_roots_front.png", id:"mangrove_front"},
	{src:"assets/img/bg_rock.png", id:"rock"},
	{src:"assets/img/bg_rock2.png", id:"rock2"},
	{src:"assets/img/homeExitAreaImg.png", id:"homeExitArea"},
	{src:"assets/img/playbutton.png", id:"PlayButton"},
	{src:"assets/img/hitboxArea.png", id:"hitboxArea"},
	{src:"assets/img/camo_rock_back.png", id:"camoRock_back"},
	{src:"assets/img/camo_rock_front.png", id:"camoRock_front"},
	{src:"assets/img/shadow.png", id:"heron_shadow"},
	{src:"assets/img/plum/theship2.jpg", id:"plumShip"},
	{src:"assets/img/funFacts/06_babyFish.png", id:"funFact1"},
	{src:"assets/img/funFacts/03_babyGrouper.png", id:"funFact2"},
	{src:"assets/img/funFacts/04_world.png", id:"funFact3"},
	{src:"assets/img/funFacts/05_Mangrove.png", id:"funFact4"},
	{src:"assets/img/funFacts/02_mangroveRoots.png", id:"funFact5"},
	{src:"assets/img/funFacts/07_sharkNight.png", id:"funFact6"},
	{src:"assets/img/funFacts/08_sharkDay.png", id:"funFact7"},
	{src:"assets/img/funFacts/09_sharkBabies.png", id:"funFact8"},
	{src:"assets/img/funFacts/10_sharkTeeth.png", id:"funFact9"},
	{src:"assets/img/bubbles_ss.png", id:"bubbles_ss"},
	{src:"assets/img/bgFish.png", id:"bgFish"},
	
	{src:"assets/audio/click_play.mp3", id:"click_play"},
	{src:"assets/audio/click_play.ogg", id:"click_play"},
	
	{src:"assets/audio/click_toswim.mp3", id:"click_toswim"},
	{src:"assets/audio/click_toswim.ogg", id:"click_toswim"},

	{src:"assets/audio/eaten_by_heron.mp3", id:"eaten_by_heron"},
	{src:"assets/audio/eaten_by_heron.ogg", id:"eaten_by_heron"},
	
	{src:"assets/audio/eaten_by_shark.mp3", id:"eaten_by_shark"},
	{src:"assets/audio/eaten_by_shark.ogg", id:"eaten_by_shark"},

	{src:"assets/audio/endofgame.mp3", id:"endofgame"},
	{src:"assets/audio/endofgame.ogg", id:"endofgame"},
	
	{src:"assets/audio/fact5.mp3", id:"fact1"},
	{src:"assets/audio/fact5.ogg", id:"fact1"},

	{src:"assets/audio/fact2.mp3", id:"fact2"},
	{src:"assets/audio/fact2.ogg", id:"fact2"},

	{src:"assets/audio/fact3.mp3", id:"fact3"},
	{src:"assets/audio/fact3.ogg", id:"fact3"},

	{src:"assets/audio/fact4.mp3", id:"fact4"},
	{src:"assets/audio/fact4.ogg", id:"fact4"},

	{src:"assets/audio/fact1.mp3", id:"fact5"},
	{src:"assets/audio/fact1.ogg", id:"fact5"},

	{src:"assets/audio/fact6.mp3", id:"fact6"},
	{src:"assets/audio/fact6.ogg", id:"fact6"},

	{src:"assets/audio/fact7.mp3", id:"fact7"},
	{src:"assets/audio/fact7.ogg", id:"fact7"},

	{src:"assets/audio/fact8.mp3", id:"fact8"},
	{src:"assets/audio/fact8.ogg", id:"fact8"},

	{src:"assets/audio/fact9.mp3", id:"fact9"},
	{src:"assets/audio/fact9.ogg", id:"fact9"},	

	{src:"assets/audio/gametitle.mp3", id:"gametitle"},
	{src:"assets/audio/gametitle.ogg", id:"gametitle"},

	{src:"assets/audio/safe.mp3", id:"safe"},
	{src:"assets/audio/safe.ogg", id:"safe"},

	{src:"assets/audio/welcome1.mp3", id:"welcome1"},
	{src:"assets/audio/welcome1.ogg", id:"welcome1"},

	{src:"assets/audio/welcome2.mp3", id:"welcome2"},
	{src:"assets/audio/welcome2.ogg", id:"welcome2"},

	{src:"assets/audio/welcome3.mp3", id:"welcome3"},
	{src:"assets/audio/welcome3.ogg", id:"welcome3"},

	{src:"assets/audio/welcome4.mp3", id:"welcome4"},
	{src:"assets/audio/welcome4.ogg", id:"welcome4"},

	{src:"assets/audio/endgame_playagain.mp3", id:"endgame_playagain"},
	{src:"assets/audio/endgame_playagain.ogg", id:"endgame_playagain"},

	{src:"assets/audio/plum/plinkopen.mp3", id:"plinkopen"},
	{src:"assets/audio/plum/plinkopen.ogg", id:"plinkopen"}

];

function buildSpritesheetData(images){
	// buildSpritesheetData called - create spritesheet objects

	heronSpritesheetData = {
	"images": [images.heronSpritesheet],
	"frames": [
	    [1112, 446, 220, 220], 
	    [1112, 224, 220, 220], 
	    [1112, 2, 220, 220], 
	    [890, 668, 220, 220], 
	    [890, 446, 220, 220], 
	    [890, 224, 220, 220], 
	    [890, 2, 220, 220], 
	    [668, 668, 220, 220], 
	    [668, 446, 220, 220], 
	    [668, 224, 220, 220], 
	    [668, 2, 220, 220], 
	    [446, 668, 220, 220], 
	    [446, 446, 220, 220], 
	    [446, 224, 220, 220], 
	    [446, 2, 220, 220], 
	    [224, 668, 220, 220], 
	    [224, 446, 220, 220], 
	    [224, 224, 220, 220], 
	    [224, 2, 220, 220], 
	    [2, 668, 220, 220], 
	    [2, 446, 220, 220], 
	    [2, 224, 220, 220], 
	    [2, 2, 220, 220], 
	    [1181, 844, 122, 72], 
	    [1057, 890, 122, 72], 
	    [933, 890, 122, 72], 
	    [809, 890, 122, 72], 
	    [685, 890, 122, 72], 
	    [561, 890, 122, 72], 
	    [437, 890, 122, 72], 
	    [313, 890, 122, 72], 
	    [189, 890, 122, 72], 
	    [1112, 668, 256, 174], 
	    [2, 890, 185, 103]
	],
	"animations": {
	        "blue_heron_diving":[32], 
	        "blue_heron_on_water":[33], 
	        "heron_flaps": { "frames": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]}, 
	        "underwater_splash": {"frames": [23,24,25,26,27,28,29,30,31]}
	},
	"texturepacker": [
	        "SmartUpdateHash: $TexturePacker:SmartUpdate:38420cb4b2d06a135cc303e1808d42d3:698f0f85c7b18fdcb1e62cc579ee618e:fb30bb84aa5f19813fd8f6e574402041$",
	        "Created with TexturePacker (https://www.texturepacker.com) for EaselJS"
	]
	};

	grouperBabyData = {
	    "animations": {"all": {"frames": [0]}, "_rest": {"frames": [0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10, 11, 11, 12, 12, 13, 13]}, "_loop": {"frames": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}},
	    "images": [images.grouper_baby],
	    "frames": [[945, 2, 104, 60, 0, -1, -1], [623, 2, 104, 61, 0, -1, -1], [309, 2, 102, 62, 0, -2, 0], [415, 2, 101, 62, 0, -2, 0], [2, 2, 99, 63, 0, -2, 0], [207, 2, 98, 63, 0, -2, 0], [105, 2, 98, 63, 0, -2, 0], [520, 2, 99, 61, 0, -1, -1], [731, 2, 101, 60, 0, 0, -2], [1270, 2, 102, 58, 0, 0, -3], [1376, 2, 104, 58, 0, 0, -3], [1053, 2, 105, 59, 0, 0, -3], [836, 2, 105, 60, 0, 0, -2], [1162, 2, 104, 59, 0, -1, -2]]
	};

	prawnData = {
		"animations": {"all": {"frames": [0]}, "_loop": {"frames": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}, "_rest": {"frames": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}},
		"images": [images.prawn],
		"frames": [
		    [1, 1, 45, 25], 
		    [47, 1, 45, 25], 
		    [93, 1, 45, 25], 
		    [139, 1, 45, 25], 
		    [185, 1, 45, 25], 
		    [231, 1, 45, 25], 
		    [277, 1, 45, 25], 
		    [323, 1, 45, 25], 
		    [369, 1, 45, 25], 
		    [415, 1, 45, 25], 
		    [461, 1, 45, 25], 
		    [507, 1, 45, 25], 
		    [553, 1, 45, 25], 
		    [599, 1, 45, 25]
		]
	};

	sharkData = {
	"images": [images.shark],
	"frames": [
	    [583, 913, 338, 161], 
	    [1450, 784, 338, 144], 
	    [1602, 211, 335, 108], 
	    [870, 658, 330, 121], 
	    [277, 899, 305, 145], 
	    [1, 897, 275, 144], 
	    [1175, 782, 274, 138], 
	    [897, 780, 277, 132], 
	    [1, 769, 281, 127], 
	    [1201, 658, 286, 123], 
	    [1, 649, 291, 119], 
	    [599, 538, 303, 115], 
	    [1211, 429, 328, 112], 
	    [604, 317, 318, 109], 
	    [923, 319, 313, 109], 
	    [1237, 319, 310, 109], 
	    [1, 317, 308, 108], 
	    [310, 317, 293, 108], 
	    [317, 427, 288, 110], 
	    [1540, 430, 289, 112], 
	    [1548, 320, 293, 109], 
	    [1304, 211, 297, 107], 
	    [606, 427, 311, 110], 
	    [591, 780, 305, 125], 
	    [283, 774, 307, 124], 
	    [1488, 660, 309, 123], 
	    [1495, 543, 285, 116], 
	    [903, 541, 286, 115], 
	    [310, 538, 288, 114], 
	    [918, 429, 292, 111], 
	    [1006, 211, 297, 107], 
	    [1, 1, 304, 104], 
	    [340, 211, 338, 105], 
	    [306, 1, 334, 104], 
	    [641, 1, 331, 104], 
	    [973, 1, 328, 104], 
	    [1302, 1, 327, 104], 
	    [1630, 1, 301, 104], 
	    [590, 106, 294, 104], 
	    [296, 106, 293, 104], 
	    [1, 106, 294, 104], 
	    [885, 106, 295, 104], 
	    [1181, 106, 298, 104], 
	    [1480, 106, 303, 104], 
	    [1, 211, 338, 105], 
	    [679, 211, 326, 105], 
	    [1, 426, 315, 109], 
	    [1, 536, 308, 112], 
	    [1190, 542, 304, 115], 
	    [293, 653, 290, 119], 
	    [584, 654, 285, 119]
	],
	"animations": {
	        "all": {"frames": [0]}, 
	        "_attack":{ "frames":[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]},
	        "_loop":{ "frames":[26, 26, 26, 27, 27, 27, 28, 28, 28, 29, 29, 29, 30, 30, 30, 31, 31, 31, 32, 32, 32, 33, 33, 33, 34, 34, 34, 35, 35, 35, 36, 37, 37, 37, 38, 38, 38, 39, 39, 39, 40, 40, 40, 41, 41, 41, 42, 42, 42, 43, 43, 43, 44, 44, 44, 45, 45, 45, 46, 46, 46, 47, 47, 47, 48, 48, 48, 49, 49, 49, 50, 50, 50]},
	        "_rest": {"frames": [26, 26, 26, 26, 26, 26, 26, 26, 26, 26]}
	},
	"texturepacker": [
	        "SmartUpdateHash: $TexturePacker:SmartUpdate:d2af80ef23749f117bdbb92bf79f00ac:233641f4257649f9a48c61bd2d40e446:4e05a5061713d9d1032890fa731cd3a8$",
	        "Created with TexturePacker (https://www.texturepacker.com) for EaselJS"
	]
	};

	bubblesData = {
	"images": [images.bubbles_ss],
	"frames": [
	    [685, 1660, 75, 236], 
	    [685, 1423, 75, 236], 
	    [685, 1186, 75, 236], 
	    [685, 949, 75, 236], 
	    [685, 712, 75, 236], 
	    [685, 475, 75, 236], 
	    [685, 238, 75, 236], 
	    [685, 1, 75, 236], 
	    [609, 1660, 75, 236], 
	    [609, 1423, 75, 236], 
	    [609, 1186, 75, 236], 
	    [609, 949, 75, 236], 
	    [609, 712, 75, 236], 
	    [609, 475, 75, 236], 
	    [609, 238, 75, 236], 
	    [609, 1, 75, 236], 
	    [533, 1660, 75, 236], 
	    [533, 1423, 75, 236], 
	    [533, 1186, 75, 236], 
	    [533, 949, 75, 236], 
	    [533, 712, 75, 236], 
	    [533, 475, 75, 236], 
	    [533, 238, 75, 236], 
	    [533, 1, 75, 236], 
	    [457, 1660, 75, 236], 
	    [457, 1423, 75, 236], 
	    [457, 1186, 75, 236], 
	    [457, 949, 75, 236], 
	    [457, 712, 75, 236], 
	    [457, 475, 75, 236], 
	    [457, 238, 75, 236], 
	    [457, 1, 75, 236], 
	    [381, 1660, 75, 236], 
	    [381, 1423, 75, 236], 
	    [381, 1186, 75, 236], 
	    [381, 949, 75, 236], 
	    [381, 712, 75, 236], 
	    [381, 475, 75, 236], 
	    [381, 238, 75, 236], 
	    [381, 1, 75, 236], 
	    [305, 1660, 75, 236], 
	    [305, 1423, 75, 236], 
	    [305, 1186, 75, 236], 
	    [305, 949, 75, 236], 
	    [305, 712, 75, 236], 
	    [305, 475, 75, 236], 
	    [305, 238, 75, 236], 
	    [305, 1, 75, 236], 
	    [229, 1660, 75, 236], 
	    [229, 1423, 75, 236], 
	    [229, 1186, 75, 236], 
	    [229, 949, 75, 236], 
	    [229, 712, 75, 236], 
	    [229, 475, 75, 236], 
	    [229, 238, 75, 236], 
	    [229, 1, 75, 236], 
	    [153, 1660, 75, 236], 
	    [153, 1423, 75, 236], 
	    [153, 1186, 75, 236], 
	    [153, 949, 75, 236], 
	    [153, 712, 75, 236], 
	    [153, 475, 75, 236], 
	    [153, 238, 75, 236], 
	    [153, 1, 75, 236], 
	    [77, 1660, 75, 236], 
	    [77, 1423, 75, 236], 
	    [77, 1186, 75, 236], 
	    [77, 949, 75, 236], 
	    [77, 712, 75, 236], 
	    [77, 475, 75, 236], 
	    [77, 238, 75, 236], 
	    [77, 1, 75, 236], 
	    [1, 1660, 75, 236], 
	    [1, 1423, 75, 236], 
	    [1, 1186, 75, 236], 
	    [1, 949, 75, 236], 
	    [1, 712, 75, 236], 
	    [1, 475, 75, 236], 
	    [1, 238, 75, 236], 
	    [1, 1, 75, 236]
	],
	"animations": { "all": {"frames": [0]}, "_loop": {"frames": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79]}
	},
	"texturepacker": [
	        "SmartUpdateHash: $TexturePacker:SmartUpdate:e75895d451af086d5ac765ea352dea57:63c9acf66d88339be14229a45c359ca3:7f2d75fdff8957245bda68532a7c0300$",
	        "Created with TexturePacker (https://www.texturepacker.com) for EaselJS"
	]};

};

// prawn position arrays
var prawnLevel_1A = [[653,136], [250,204], [281,86], [750,275]];
var prawnLevel_1B = [[250,226], [611,231], [338,322], [750,301]];
var prawnLevel_2A = [[666,433], [250,266], [532,324], [268,431], [700,301]];
var prawnLevel_2B =  [[697,461], [240,456], [474,336], [250,180], [750,283]];
var prawnLevel_3A = [[639,147], [697,461], [240,456], [514,436], [349,431], [474,56], [240,378], [250,180], [750,283]];
var prawnLevel_3B = [[692,119], [697,461], [236,421], [545,415], [514,436], [349,431], [474,56], [539,52], [750,283]];

// spritesheet data objects
var heronSpritesheetData = {};
var grouperBabyData = {};
var prawnData = {};
var sharkData = {};
var bubblesData = {};

/*
speak audio tags for mapping to speakSync array
00 welcome1,
01 welcome2,
02 welcome3,
03 welcome4,
04 tap_toswim ,
05 click_toswim,
06 careful_predators,
07 tap_play
08 click_play,
09 end of game
10 mystufftap
11 mystuffpress
*/
var speakSync = [ 
 [0, 2, 3, 3, 4, 2, 1, 0, 3, 2, 0, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3, 3, 1, 1, 1, 4, 5, 2, 2, 2, 1, 0, 1, 1, 1, 2, 2, 2, 1, 2, 1, 2, 2, 3, 1, 1, 1, 0, 0, 0, 0],
 [0, 3, 4, 3, 2, 1, 0, 1, 1, 1, 3, 3, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 3, 2, 1, 1, 1, 1, 3, 3, 4, 2, 1, 1, 1, 0, 1, 3, 3, 3, 1, 0, 1, 1, 1, 0, 0, 4, 3, 1, 0, 1, 4, 5, 0, 1, 1, 1, 1, 0],
 [0, 2, 3, 2, 1, 3, 2, 0, 0, 2, 1, 1, 1, 1, 0, 1, 1, 3, 4, 2, 2, 1, 4, 5, 3, 2, 2, 2, 1, 1, 0, 3, 5, 2, 2, 2, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 2, 4, 2, 1, 1, 0, 1, 0, 0, 0, 2, 3, 3],
 [0, 3, 3, 1, 0, 0, 0, 0, 0, 1, 1, 2, 2, 0, 0, 1, 2, 2, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1, 0, 0, 0, 2, 1, 0, 1, 5, 2, 0, 1, 2, 2, 0, 1, 1, 1, 0, 1, 1, 1],
 [0, 0, 2, 5, 0, 1, 3, 1, 1, 2, 1, 1, 2, 1, 0, 4, 4, 2, 1, 2, 1, 0, 2, 3, 1, 0, 1, 1, 0, 0],
 [0, 1, 5, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 2, 0, 1, 2, 1, 0, 1, 1, 0, 0],
 [0, 0, 1, 1, 0, 0, 1, 2, 2, 0, 2, 2, 1, 1, 0, 0, 0, 0, 0, 1, 1, 2, 2, 1, 2, 1, 3, 3, 3, 0, 0, 0, 0, 3, 3, 5, 4, 4, 1, 1, 2, 3, 3, 2, 2, 1, 1, 1, 0, 0, 0],
 [0, 0, 4, 3, 0, 2, 1, 1, 1, 1, 2, 3, 4, 2, 5, 3, 2, 1, 0, 0],
 [0, 0, 4, 5, 1, 0, 1, 1, 1, 1, 0, 1, 2, 2, 3, 3, 2, 1, 0, 0, 0],
 [0, 0, 1, 1, 0, 2, 2, 2, 1, 1, 1, 0, 0, 0, 0, 1, 2, 2, 4, 4, 0, 0, 0, 1, 2, 2, 0, 0, 0, 0, 0],
 [0, 1, 3, 2, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 4, 3, 0, 0, 1, 0, 1, 1],
 [0, 4, 5, 2, 0, 1, 2, 1, 1, 2, 2, 1, 0, 0, 4, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 2, 2, 1, 1, 0, 1, 0, 2, 1, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 3, 2, 0, 1, 3, 4, 0, 2, 1, 4, 4, 1]   
];
