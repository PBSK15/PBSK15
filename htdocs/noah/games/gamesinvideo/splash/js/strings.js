ig.strings =
{
	LOADING : 'LOADING',

	MENU :
	{
		TITLE : 'Games',
		BTN_MATCH_IT : 'MATCH IT        ', // notice the extra spacing!
		BTN_WORD_RACE : 'WORD RACE',
		BTN_CATCH : 'YOU CATCH IT, YOU KEEP IT'
	},

	CATCH :
	{
		EASY_DIFFICULTY : 'EASY LEVEL',
		HARD_DIFFICULTY : 'HARD LEVEL',
		PRO_DIFFICULTY : 'PRO LEVEL',
		CATCH_N_THINGS : 'Catch    {objects}    things', // notice the extra spacing!

		TITLE_1 : 'You Catch It, You Keep It!',
		TITLE_2 : 'Si lo atrapaste, quédatelo',

		ITEMS : 'ITEMS',
		POPUP_MISS : 'Miss!',
		DISPLAY_TIME : 'Time:\n{time}',

		END_GOOD_JOB : 'Good job!',
		END_MISSES : 'Oh no, you had three misses! Try again...',
		END_STATS : '{correct} items caught, {miss} missed',
		END_SCORE : 'your score: {score}'
	},

	RACE : 
	{
		INSTRUCTIONS_1 : 'Pick up as many right things as you can in',
		INSTRUCTIONS_2 : '{time} seconds.',

		POPUP_MISS : 'Miss!',
		POPUP_CORRECT : '+{points} Points!',

		DISPLAY_SCORE : 'Score:\n{score}',
		DISPLAY_TIME : 'Time:\n{time}',
		DISPLAY_MISS : 'Miss:\n{miss}',

		END_HEADER_OHNO : 'Oh no!',
		END_HEADER_TIMESUP : 'Time\'s up!',
		END_SCORE : 'Your Score: {score}',
		END_STATS : '{correct} collected, {miss} missed',
	},

	MATCH : 
	{
		MATCH_IT : 'Match It',
		MATCH_IT_ES : 'Combínalo',
		DISPLAY_TIME : 'Time: {time}',

		INSTRUCTIONS_1 : ig.device.mobile ? 'Tap the items to hear how to saw them in Spanish' : 'Move your mouse around to learn some Spanish words',
		INSTRUCTIONS_2 : ig.device.mobile ? 'Tap an image, then tap a word to make a match!' : 'Click an image, then click a word to make a match!',

		END_HEADER_OHNO : 'Oh no!',
		END_HEADER_OUT_OF_TIME : 'You ran out of time!',
		END_HEADER_GOOD_JOB : 'Good job!',
		END_HEADER_TIME_WAS : 'Your time was:',
		END_TIME : '{time} seconds',
		END_MESSAGE : 'Play again to get a better time.'
	},

	BTN_KEEP_WATCHING : 'KEEP WATCHING',
	BTN_PLAY : 'PLAY',
	BTN_NEXT : 'NEXT',
	BTN_PLAY_AGAIN : 'PLAY AGAIN',
	BTN_CHANGE_LEVEL : 'CHANGE LEVEL',
	DIRECTIONS_STEP : ig.device.mobile ? 'Tap the items to hear how to say them in Spanish.' : 'Roll over the items to hear how to say them in Spanish!',

	DIFFICULTY_BACK : 'Back to words',
	DIFFICULTY_TITLE : 'Choose your level',
	DIFFICULTY_EASY : 'Easy',
	DIFFICULTY_HARD : 'Hard',
	DIFFICULTY_PRO : 'Pro',

	CHANGE_YOUR_DIFFICULTY : 'Change Your Level',

	OBJECT_FLIPFLOPS : 'las chancletas',
	OBJECT_BATHINGSUIT : 'el traje de baño',
	OBJECT_LIFEPRESERVER : 'el flotador',
	OBJECT_SUNGLASSES : 'las gafas de sol',
	OBJECT_UMBRELLA : 'la sombrilla',
	OBJECT_CUCUMBER : 'el pepino',
	OBJECT_LETTUCE : 'la lechuga',
	OBJECT_PINEAPPLE : 'la piña',
	OBJECT_GRAPES : 'las uvas',
	OBJECT_STRAWBERRIES : 'las fresas'
};

ig.module('strings').defines();