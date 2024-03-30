if ( !window.sbe )
	throw 'Global "sbe" doesn\'t exist';

sbe.bookData = 
{
	title: 'Different and the Same',
	fps: false,
	orientationId: 'orientation',
	containerId: 'book-container',
	wrapperId: 'book-wrapper',
	canvasId: 'book-canvas',
	domId : 'book-dom',
	replayId : 'book-replay',

	format: 2, // 1 for single page, 2 for two pages
	width: 576,
	height: 768,

	startOnPage: 0, // 0 is the cover
	pageFlipDuration: 600, // duration of the page turn (left and right combined)
	pageFlipDelay: 200, // so the text on the page can go away
	pageTurnBtns: ['media/images/btn-back.png', 'media/images/btn-next.png'], // the previous and next buttons
	textReplayBtn : 'media/images/btn-replay.png',

	pages: [], // we will add to this later

	assetBasePath : '',
	assets : [
		// { id : 'loading-animation', src : 'media/images/loading-animation.png', page : -1 },
		{ id : 'loading-bg', src : 'media/images/loading-bg.png', page : -1 },
		{ id : 'loading-text', src : 'media/images/loading-text.png', page : -1 },
		{ id : 'loading-btn', src : 'media/images/loading-btn.png', page : -1 },

		{ id : 'vo-sprites', src : 'media/audio/vo/all.ogg', data : { channels : 1, audioSprite : sbe.voData.audioSprite } },

		{ id : 'sfx-page-turn', src : 'media/audio/sfx/page-turn.ogg' }, // MUST HAVE THE ID "sfx/page-turn"

		{ id : 'pg00-bg', src : 'media/images/page00/bg.png', page : 0 },

		{ id : 'pg01-bg', src : 'media/images/page01/bg.jpg', page : 1 },
		{ id : 'pg01-script01', src : 'media/animations/page01/daniel/anim.js', page : 1 },
		{ id : 'pg01-anim-daniel', src : 'media/animations/page01/daniel/sprites.json', page : 1, type : 'spritesheet' },
		{ id : 'pg01-script02', src : 'media/animations/page01/chrissie/anim.js', page : 1 },
		{ id : 'pg01-anim-chrissie', src : 'media/animations/page01/chrissie/sprites.json', page : 1, type : 'spritesheet' },
		{ id : 'pg01-script03', src : 'media/animations/page01/elaina/anim.js', page : 1 },
		{ id : 'pg01-anim-elaina', src : 'media/animations/page01/elaina/sprites.json', page : 1, type : 'spritesheet' },

		{ id : 'pg02-bg', src : 'media/images/page02/bg.jpg', page : 2 },
		{ id : 'pg02-script01', src : 'media/animations/page02/daniel/anim.js', page : 2 },
		{ id : 'pg02-anim-daniel', src : 'media/animations/page02/daniel/sprites.json', page : 2, type : 'spritesheet' },

		{ id : 'pg03-bg', src : 'media/images/page03/bg.jpg', page : 3 },
		{ id : 'pg03-script01', src : 'media/animations/page03/daniel/anim.js', page : 3 },
		{ id : 'pg03-anim-daniel', src : 'media/animations/page03/daniel/sprites.json', page : 3, type : 'spritesheet' },

		{ id : 'pg04-bg', src : 'media/images/page04/bg.jpg', page : 4 },
		{ id : 'pg04-script01', src : 'media/animations/page04/anim.js', page : 4 },
		{ id : 'pg04-anim-anim', src : 'media/animations/page04/sprites.json', page : 4, type : 'spritesheet' },

		{ id : 'pg05-bg', src : 'media/images/page05/bg.jpg', page : 5 },
		{ id : 'pg05-script01', src : 'media/animations/page05/anim.js', page : 5 },
		{ id : 'pg05-anim-anim', src : 'media/animations/page05/sprites.json', page : 5, type : 'spritesheet' },

		{ id : 'pg06-bg', src : 'media/images/page06/bg.jpg', page : 6 },
		{ id : 'pg06-script01', src : 'media/animations/page06/chrissie/anim.js', page : 6 },
		{ id : 'pg06-anim-chrissie', src : 'media/animations/page06/chrissie/sprites.json', page : 6, type : 'spritesheet' },

		{ id : 'pg07-bg', src : 'media/images/page07/bg.jpg', page : 7 },
		{ id : 'pg07-script01', src : 'media/animations/page07/anim.js', page : 7 },
		{ id : 'pg07-anim-anim', src : 'media/animations/page07/sprites.json', page : 7, type : 'spritesheet' },

		{ id : 'pg08-bg', src : 'media/images/page08/bg.jpg', page : 8 },
		{ id : 'pg08-script01', src : 'media/animations/page08/elaina/anim.js', page : 8 },
		{ id : 'pg08-anim-elaina', src : 'media/animations/page08/elaina/sprites.json', page : 8, type : 'spritesheet' },

		{ id : 'pg09-bg', src : 'media/images/page09/bg.jpg', page : 9 },
		{ id : 'pg09-script01', src : 'media/animations/page09/wednesday/anim.js', page : 9 },
		{ id : 'pg09-anim-wednesday', src : 'media/animations/page09/wednesday/sprites.json', page : 9, type : 'spritesheet' },
		{ id : 'pg09-script02', src : 'media/animations/page09/daniel/anim.js', page : 9 },
		{ id : 'pg09-anim-daniel', src : 'media/animations/page09/daniel/sprites.json', page : 9, type : 'spritesheet' },
		{ id : 'pg09-script03', src : 'media/animations/page09/elaina/anim.js', page : 9 },
		{ id : 'pg09-anim-elaina', src : 'media/animations/page09/elaina/sprites.json', page : 9, type : 'spritesheet' },

		{ id : 'pg10-bg', src : 'media/images/page10/bg.jpg', page : 10 },
		{ id : 'pg10-script01', src : 'media/animations/page10/anim.js', page : 10 },
		{ id : 'pg10-anim-anim', src : 'media/animations/page10/sprites.json', page : 10, type : 'spritesheet' },
		// { id : 'pg10-script01', src : 'media/animations/page10/daniel/anim.js', page : 10 },
		// { id : 'pg10-anim-daniel', src : 'media/animations/page10/daniel/sprites.json', page : 10, type : 'spritesheet' },
		// { id : 'pg10-script02', src : 'media/animations/page10/chrissie/anim.js', page : 10 },
		// { id : 'pg10-anim-chrissie', src : 'media/animations/page10/chrissie/sprites.json', page : 10, type : 'spritesheet' },
		// { id : 'pg10-script03', src : 'media/animations/page10/elaina/anim.js', page : 10 },
		// { id : 'pg10-anim-elaina', src : 'media/animations/page10/elaina/sprites.json', page : 10, type : 'spritesheet' },
		// { id : 'pg10-script04', src : 'media/animations/page10/wednesday/anim.js', page : 10 },
		// { id : 'pg10-anim-wednesday', src : 'media/animations/page10/wednesday/sprites.json', page : 10, type : 'spritesheet' },

		{ id : 'pg11-bg', src : 'media/images/page11/bg.jpg', page : 11 },
		{ id : 'pg11-script01', src : 'media/animations/page11/daniel/anim.js', page : 11 },
		{ id : 'pg11-anim-daniel', src : 'media/animations/page11/daniel/sprites.json', page : 11, type : 'spritesheet' },
		{ id : 'pg11-script02', src : 'media/animations/page11/katerina/anim.js', page : 11 },
		{ id : 'pg11-anim-katerina', src : 'media/animations/page11/katerina/sprites.json', page : 11, type : 'spritesheet' },

		{ id : 'pg12-bg', src : 'media/images/page12/bg.jpg', page : 12 },

		{ id : 'pg13-bg', src : 'media/images/page13/bg.jpg', page : 13 },
		{ id : 'pg13-script01', src : 'media/animations/page13/daniel/anim.js', page : 13 },
		{ id : 'pg13-anim-daniel', src : 'media/animations/page13/daniel/sprites.json', page : 13, type : 'spritesheet' }
	],

	vo :
	{
		'page-1-0' : { text : "Hi neighbor. It's me, Daniel Tiger. I'm at school with all my friends. Chrissie is here, too. She's Prince Wednesday's cousin.", ssId : '001 TK7 DANIEL SEL DANIELFRIENDS', words : [], time : [] },
		'page-2-0' : { text : "Miss Elaina, Chrissie and I are playing. They want to be cowgirls. And they want me to be the horse - because I have a tail. But I don't want to be a horse.", ssId : '002 TK4 DANIEL SEL DANIELFRIENDS', words : [], time : [] },
		'page-3-0' : { text : "Chrissie doesn't have a tail. Miss Elaina doesn't have a tail. I have a tail. That makes me feel different - and feeling different makes me feel sad.<br /><br />", ssId : '003 TK3 DANIEL SEL DANIELFRIENDS', words : [], time : [] },
		'page-4-0' : { text : "I talk with Teacher Harriet. She understands how I feel. She says, <i>In some ways we are different, but in so many ways, we are the same.</i> She asks me to look for some of the ways my friends and I are different...and the same.<br /><br />", ssId : '004_edited-no-musicbed', words : [], time : [] },
		'page-5-0' : { text : "Prince Wednesday wears glasses to help him see better. But I don't. That's one way we're different. But we both like to play with blocks. That's one way we're the same!", ssId : '005 TK1 DANIEL ALT DANIELFRIENDS', words : [], time : [] },
		'page-6-0' : { text : "Chrissie wears braces and uses crutches to help her walk. That's one way we're different.", ssId : '006 TK1C DANIEL SEL DANIELFRIENDS', words : [], time : [] },
		'page-7-0' : { text : "Miss Elaina and Chrissie both like to play pretend. I like to play pretend, too. That's one way we're the same.<br /><br />", ssId : '007 TK2 DANIEL SEL DANIELFRIENDS', words : [], time : [] },
		'page-8-0' : { text : "Miss Elaina's skin is a different color than Chrissie's. But it's the same as Teacher Harriet's. Can you think of other ways that we are different...and the same?", ssId : '008 TK2 DANIEL SEL DANIELFRIENDS', words : [], time : [] },
		'page-9-0' : { text : "Prince Wednesday's hair is straight and brown. Miss Elaina's hair is curly and black. And my hair is fur. That's one way we're different.", ssId : '009 TK3 DANIEL SEL DANIELFRIENDS', words : [], time : [] },
		'page-10-0' : { text : "But we all have feelings - and sometimes we all feel the same way. Like now, we all feel happy!<br /><br />", ssId : '010 TK2 DANIEL ALT DANIELFRIENDS', words : [], time : [] },
		'page-11-0' : { text : "Oh look! I see Katerina painting. And do you see what I see? Katerina has a tail, too!", ssId : '011 TK 4 DANIEL SEL DANIELFRIENDS', words : [], time : [] },
		'page-12-0' : { text : "Just like Teacher Harriet says,<br /><i>In some ways we are different, but in so many ways, we are the same.</i>", ssId : '012_edited-no-musicbed', words : [], time : [] },
		'page-13-0' : { text : "What are some of the ways that you and your friends are different...and the same?", ssId : '013 TK5 DANIEL SEL DANIELFRIENDS', words : [], time : [] },
		'page-13-1' : { text : "I'm glad that <i>you're</i> my friend. Ugga mugga.", ssId : '013_im-glad-that-youre-my-friend', words : [], time : [] }
	},
	gotoPage : function(index)
	{
		// if ( !this.bgMusic )
			// this.bgMusic = cjs.Sound.play('bg-music', { loop : -1, volume : 0.1 });
	}
};