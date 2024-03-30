ig.config =
{
	version : '1.1',

	gameWrapper : 'game-wrapper',

	gameDimensions :
	{
		width : { min : 1024, max : 1380 },
		height : { min : 768, max : 768 }
	},

	videos :
	[
		'scene_1_16x9',
		'scene_2_16x9',
		'scene_3_16x9'
		// ig.device.mobile ? 'scene_1_16x9_mobile' : 'scene_1_16x9_desktop',
		// ig.device.mobile ? 'scene_2_16x9_mobile' : 'scene_2_16x9_desktop',
		// ig.device.mobile ? 'scene_3_16x9_mobile' : 'scene_3_16x9_desktop'
	],

	wordRace :
	{
		points : 100, // points earned when getting something correct
		miss : 3, // number of misses before game over
		easy : 
		{
			time : 60, // game time
			spawn : 2, // the number of objects to spawn
			speed : 0.2 // the speed
		},
		hard :
		{
			time : 60,
			spawn : 2,
			speed : 0.4
		},
		pro :
		{
			time : 60,
			spawn : 3,
			speed : 0.4
		}
	},

	catchIt : 
	{
		walkSpeed : 900, // the walking speed of the mouse
		easy : 
		{
			total : 5, // the number to collect
			time : 60, // the game time
			objects : 5, // the objects to collect
			spawn : 2, // the number of spawned objects
			fallRate : 180 // the speed of the falling objects
		},
		hard : 
		{
			total : 10,
			time : 90,
			objects : 10,
			spawn : 2,
			fallRate : 180
		},
		pro : 
		{
			total : 10,
			time : 90,
			objects : 10,
			spawn : 3,
			fallRate : 240
		}
	},

	matchIt :
	{
		time : 30
	},

	// below is for dev purposes

	sound :
	{
		object :
		{
			flipflops : 'ON_GAME_177_PU_COCO_01B',
			bathingsuit : 'bathingsuit',
			lifepreserver : 'ON_GAME_173_PU_COCO_01B',
			sunglasses : 'ON_GAME_185_PU_COCO_01B',
			umbrella : 'ON_GAME_189_PU_COCO_02A',
			cucumber : 'ON_GAME_283_PU_COCO_01A',
			lettuce : 'ON_GAME_279_PU_COCO_01B',
			pineapple : 'ON_GAME_291_PU_COCO_01B',
			grapes : 'ON_GAME_287_PU_COCO_02B',
			strawberries : 'ON_GAME_295_PU_COCO_01B'
		},

		threeMisses : '3misses',
		goodJob : 'good-job',
		gotIt : 'got-it',
		keepTrying : 'keep-trying',
		keepWatchingVideo : 'keep-watching-video',
		matchIt : 'match-it',
		wordRace : 'word-race',
		nice : 'nice',
		notRight : 'not-right',
		ohNo : 'oh-no',
		perfectScore : 'perfect-score',
		perfect : 'perfect',
		playAgain : 'play-again',
		playMatchIt : 'play-match-it',
		play : 'play',
		playGames : 'play-games',
		takeChallenge : 'take-a-challenge',
		thatsRight : 'thats-right',
		tryAgain : 'try-again',
		changeLevel : 'change-your-level',
		chooseLevel : 'choose-your-level',
		difficultyEasy : 'easy',
		difficultyHard : 'hard',
		difficultyPro : 'pro',
		youCatchIt : 'you-catch-it',
		missedIt : 'missed-it',
		catchAllFive : 'catch-all-five',
		catchAllTen : 'catch-all-ten',

		directionsIntro_1 : ig.device.mobile ? 'ON_GAME_404_PU_NOAH_01A' : 'roll-over-to-hear-in-spanish-2',
		directionsIntro_2 : ig.device.mobile ? 'ON_GAME_402_PU_NOAH_01C' : 'move-your-mouse-around',

		raceInstructions : ig.device.mobile ? 'ON_GAME_405_PU_NOAH_01B' : 'race-instructions',
		matchInstructions : ig.device.mobile ? 'ON_GAME_403_PU_NOAH_01A' : 'click-an-image-to-make-a-match',
		catchInstructions : ig.device.mobile ? 'ON_GAME_407_PU_NOAH_01C' : 'catch-it-directions-2',

		endGoFaster : 'end-go-faster',
		endTimeUp : 'end-time-up',

		youMadeItThroughAll : 'you-made-it-through-all',
		youMadeItToHard : 'you-made-it-to-hard',
		youMadeItToPro : 'you-made-it-to-pro'
	}
};

ig.module('config').defines();