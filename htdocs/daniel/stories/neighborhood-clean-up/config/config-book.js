//  ------------------------------------------------------------------
//  config-book.js
//
//  Copyright 2012 PBS KIDS Interactive. All Rights Reserved.

PBS.KIDS.storybook.config = {
	background: {
	},
	audio: {
		enabled: true,
		path: "./audio/",
		name: "all"	
	},
	book: {
		font: "Georgia",
		startOnPage: 0 * 2,
		pageWidth: 576,
		pageHeight: 768,
		previousPageButton: {
			url: "../book-shell/images/prev-page-button.png",
			x: 1,
			y: 50,
			width: "85px", 
			height: "85px"
		},
		nextPageButton: {
			url: "../book-shell/images/next-page-button.png",
			horizontalAlign: "RIGHT",
			x: 1,
			y: 50,
			width: "85px",
			height: "85px"
		},
		pageBackground: {
			color: "#f9f9f9"
		},
		oddPageBackground: {
			color: "#f9f9f9",
			url: "../book-shell/images/left-page-bkgrnd.png"	
		},
		evenPageBackground: {
			color: "#f9f9f9"
		},
		pageTurnDuration: 1000,
		pageSlideDuration: 200
	},
	cover: {
		background: {
			url: "images/cover.jpg"
		},
		sound: {
			startTime: PBS.KIDS.storybook.sounds['_TITLE TK1D DANIEL SEL CLEANUP'][0],
			endTime: PBS.KIDS.storybook.sounds['_TITLE TK1D DANIEL SEL CLEANUP'][1]
		},
		content: [
			{
				type: "Sprite",
				sound: {
					startTime: PBS.KIDS.storybook.sounds['_TITLE TK1D DANIEL SEL CLEANUP'][0],
					endTime: PBS.KIDS.storybook.sounds['_TITLE TK1D DANIEL SEL CLEANUP'][1]
				},
				x: 0,
				y: 0,
				width: 100,
				height: 100,
				onPress : function()
				{
					var t = ((PBS.KIDS.storybook.sounds['_TITLE TK1D DANIEL SEL CLEANUP'][1] - PBS.KIDS.storybook.sounds['_TITLE TK1D DANIEL SEL CLEANUP'][0]) * 1000) + 100;
					setTimeout(book.nextPage, t);
				}
			}
		]
	},

	pages: [
		// page 1
		{
			background: {
				url: "images/page-1-left.jpg"	
			},
			content: [
				{
					type: "Sprite",
					x: -14,
					y: 11,
					autoStart: true,
					autoReset: false,
					frameDelay: 6,
					numFrames : 1,
					url: "images/page-1-door.png"
					// onAnimationComplete : function()
					// {
					// 	// put the door in the back
					// 	var door = book.getContent(0, 2).getElement();
					// 	var catElements = book.getContent(0, 0).getElement();

					// 	for ( var i = 0; i < catElements.length; i++ )
					// 		door.parentNode.insertBefore(door, door.parentNode.firstChild.nextElementSibling);
					// },
					// onPageTurnStart : function()
					// {
					// 	// put the door in the front
					// 	var door = book.getContent(0, 2).getElement();
					// 	var cn = door.parentNode.childNodes;
					// 	door.parentNode.insertBefore(door, cn[cn.length - 1]);
					// }
				},
				{
					type: "Cycler",
					autoStart: true,
					playThrough: true,
					// playAfterDelay: 1.4,
					sound : {
						startTime: PBS.KIDS.storybook.sounds['hi_neighbor_spread_1'][0],
						endTime: PBS.KIDS.storybook.sounds['hi_neighbor_spread_1'][1]
					},
					content: [
						{
							type: "Sprite",
							x: 4,
							y: 28,
							numFrames: 2,
							frameDelay: 8,
							url: "images/page-1-cat-1.png"
						},
						{
							type: "Sprite",
							x: 4,
							y: 28,
							numFrames: 3,
							frameDelay : 8,
							autoStart : true,
							playBackwards : true,
							playCount : 8,
							url: "images/page-1-cat-2.png"
						},
						{
							type: "Sprite",
							x: 4,
							y: 28,
							numFrames: 2,
							frameDelay: 8,
							autoStart: true,
							url: "images/page-1-cat-3.png"
						},
						{
							type: "Sprite",
							x: 4,
							y: 28,
							numFrames: 1,
							autoStart : true,
							playOnPress : true,
							url: "images/page-1-cat-4.png"
						},
						{
							type: "Sprite",
							x: 4,
							y: 28,
							numFrames: 7,
							frameDelay: 4,
							autoReset: true,
							autoStart: false,
							playBackwards: 2,
							playCount: 2,
							resetToIndex: 3,
							url: "images/page-1-cat-5.png"
						}
					]
				},
				{
					type: "Cycler",
					autoStart: true,
					playThrough: true,
					// playAfterDelay: 1.4,
					sound : {
						startTime: PBS.KIDS.storybook.sounds['hi-neighbor'][0],
						endTime: PBS.KIDS.storybook.sounds['hi-neighbor'][1]
					},
					content: [
						// {
						// 	type: "Sprite",
						// 	x: 48,
						// 	y: 26,
						// 	numFrames: 5,
						// 	frameDelay: 6,
						// 	url: "images/page-1-dan-1.png"
						// },
						// {
						// 	type: "Sprite",
						// 	x: 48,
						// 	y: 26,
						// 	numFrames: 1,
						// 	autoStart : false,
						// 	playOnPress : true,
						// 	url: "images/page-1-dan-2.png"
						// },
						// {
						// 	type: "Sprite",
						// 	x: 48,
						// 	y: 26,
						// 	numFrames: 5,
						// 	frameDelay: 6,
						// 	autoReset: true,
						// 	autoStart: false,
						// 	resetToIndex: 1,
						// 	playBackwards : true,
						// 	playCount : 2,
						// 	url: "images/page-1-dan-3.png"
						// },

						{
							type: "Sprite",
							x: 48,
							y: 26,
							numFrames: 2,
							frameDelay: 8,
							url: "images/page-1-dan-1.png"
						},
						{
							type: "Sprite",
							x: 48,
							y: 26,
							numFrames: 3,
							frameDelay : 8,
							autoStart : true,
							playBackwards : true,
							playCount : 8,
							url: "images/page-1-dan-2.png"
						},
						{
							type: "Sprite",
							x: 48,
							y: 26,
							numFrames: 2,
							frameDelay: 8,
							autoStart: true,
							url: "images/page-1-dan-3.png"
						},
						{
							type: "Sprite",
							x: 48,
							y: 26,
							numFrames: 1,
							autoStart : true,
							playOnPress : true,
							url: "images/page-1-dan-4.png"
						},
						{
							type: "Sprite",
							x: 48,
							y: 26,
							numFrames: 5,
							frameDelay: 6,
							autoReset: true,
							autoStart: false,
							playBackwards: 2,
							playCount: 2,
							resetToIndex: 3,
							url: "images/page-1-dan-5.png"
						}
					]
				}
				// {
				// 	type: "Sprite",
				// 	x: -14,
				// 	y: 11,
				// 	autoStart: true,
				// 	autoReset: false,
				// 	frameDelay: 6,
				// 	numFrames : 1,
				// 	url: "images/page-1-door.png",
				// 	onAnimationComplete : function()
				// 	{
				// 		// put the door in the back
				// 		var door = book.getContent(0, 2).getElement();
				// 		var catElements = book.getContent(0, 0).getElement();

				// 		for ( var i = 0; i < catElements.length; i++ )
				// 			door.parentNode.insertBefore(door, door.parentNode.firstChild.nextElementSibling);
				// 	},
				// 	onPageTurnStart : function()
				// 	{
				// 		// put the door in the front
				// 		var door = book.getContent(0, 2).getElement();
				// 		var cn = door.parentNode.childNodes;
				// 		door.parentNode.insertBefore(door, cn[cn.length - 1]);
				// 	}
				// }
			]
		},{
			background: {
				url: "images/page-1-right.jpg"	
			},
			sound: {
				startTime: PBS.KIDS.storybook.sounds['001 TK1D DANIEL SEL CLEANUP'][0],
				endTime: PBS.KIDS.storybook.sounds['001 TK1D DANIEL SEL CLEANUP'][1]
			},
			content: [
				{
					type: "TextArea",
					sound: {
						startTime: PBS.KIDS.storybook.sounds['001 TK1D DANIEL SEL CLEANUP'][0],
						endTime: PBS.KIDS.storybook.sounds['001 TK1D DANIEL SEL CLEANUP'][1]
					},
					x: 7,
					y: 16,
					width: 75,
					align: "left",
					color: "#54331b",
					text: "Hi neighbor. It's me, Daniel Tiger. Katerina and I are going to the playground today. <font='Raphael-Icons'>s</font>"
				}
			]
		},

		// page 2
		{
			background: {
				url: "images/page-2-left.jpg"	
			},
			sound: {
				startTime: PBS.KIDS.storybook.sounds['002 TK1B DANIEL SEL CLEANUP'][0],
				endTime: PBS.KIDS.storybook.sounds['002 TK1B DANIEL SEL CLEANUP'][1]
			},
			content: [
				{
					type: "Sprite",
					x: 42,
					y: 8,
					autoStart: false,
					autoReset: true,
					resetDelay: 0,
					frameDelay: 8,
					frames : [
						0, 1, 2, 3, 4, 3, 2, 1, 
						0, 5, 6, 7, 8, 7, 6, 5, 
						0, 1, 2, 3, 4, 3, 2, 1, 
						0, 5, 6, 7, 8, 7, 6, 5,
						0, 1, 2, 3, 4, 3, 2, 1, 
						0, 5, 6, 7, 8, 7, 6, 5, 
						0, 1, 2, 3, 4, 3, 2, 1, 
						0, 5, 6, 7, 8, 7, 6, 5],
					frameWidth : 391,
					url: "images/page-2-dad-cat.png"
				},
				{
					type: "Sprite",
					x: 0,
					y: 0,
					numFrames: 0,
					autoStart: false,
					autoReset: false,
					resetDelay: 0,
					url: "images/page-2-left-top.png"
				},
				{
					type: "Sprite",
					x: 46,
					y: 14,
					autoStart: false,
					autoReset: false,
					playOnPress: true,
					numFrames: 1,
					url: "images/page-2-dad-cat-hit.png",
					onPress : function()
					{
						var s = book.getContent(2, 0);
						s.reset(true);
						s.play();
						var s = book.getContent(3, 0);
						s.reset(true);
						s.play();
					},
					sound : {
						startTime: PBS.KIDS.storybook.sounds['sfx_spread2a'][0],
						endTime: PBS.KIDS.storybook.sounds['sfx_spread2a'][1]
					}
				},
				{
					type: "TextArea",
					sound: {
						startTime: PBS.KIDS.storybook.sounds['002 TK1B DANIEL SEL CLEANUP'][0],
						endTime: PBS.KIDS.storybook.sounds['002 TK1B DANIEL SEL CLEANUP'][1]
					},
					x: 15,
					y: 70,
					width: 60,
					align: "left",
					color: "#54331b",
					text: "Trolley, please take us to the playground. <font='Raphael-Icons'>s</font>"
				}
			]
		},{
			background: {
				url: "images/page-2-right.jpg"	
			},
			content: [
				{
					type: "Sprite",
					x: -5,
					y: 14,
					autoStart: false,
					autoReset: true,
					resetDelay: 0,
					frameDelay: 8,
					frames : [
						0, 1, 2, 3, 4, 3, 2, 1, 
						0, 5, 6, 7, 8, 7, 6, 5, 
						0, 1, 2, 3, 4, 3, 2, 1, 
						0, 5, 6, 7, 8, 7, 6, 5,
						0, 1, 2, 3, 4, 3, 2, 1, 
						0, 5, 6, 7, 8, 7, 6, 5, 
						0, 1, 2, 3, 4, 3, 2, 1, 
						0, 5, 6, 7, 8, 7, 6, 5],
					frameWidth : 417,
					url: "images/page-2-mom-dan.png"
				},
				{
					type: "Sprite",
					x: 0,
					y: 0,
					numFrames: 0,
					autoStart: false,
					autoReset: false,
					resetDelay: 0,
					url: "images/page-2-right-top.png"
				},
				{
					type: "Sprite",
					x: 2,
					y: 14,
					autoStart: false,
					autoReset: false,
					playOnPress: true,
					numFrames: 1,
					url: "images/page-2-mom-dan-hit.png",
					onPress : function()
					{
						var s = book.getContent(2, 0);
						s.reset(true);
						s.play();
						var s = book.getContent(3, 0);
						s.reset(true);
						s.play();
					},
					sound : {
						startTime: PBS.KIDS.storybook.sounds['sfx_spread2a'][0],
						endTime: PBS.KIDS.storybook.sounds['sfx_spread2a'][1]
					}
				}
			]
		},

		// page 3
		{
			background: {
				url: "images/page-3-left.jpg"
			},
			sound: {
				// startTime: PBS.KIDS.storybook.sounds['003 TK1 DANIEL SEL CLEANUP'][0],
				// endTime: PBS.KIDS.storybook.sounds['003 TK1 DANIEL SEL CLEANUP'][1]
				startTime: PBS.KIDS.storybook.sounds['003A PU TK1C DANIEL SEL CLEANUP STORYBOOK'][0],
				endTime: PBS.KIDS.storybook.sounds['003A PU TK1C DANIEL SEL CLEANUP STORYBOOK'][1]
			},
			content: [
				{
					type: "Sprite",
					x: -3,
					y: 38,
					autoStart: false,
					autoReset: true,
					playOnPress: true,
					resetDelay: 0,
					frameDelay: 8,
					numFrames : 10,
					playCount : 2,
					url: "images/page-3-swing.png"
				},
				{
					type: "TextArea",
					sound: {
						// startTime: PBS.KIDS.storybook.sounds['003 TK1 DANIEL SEL CLEANUP'][0],
						// endTime: PBS.KIDS.storybook.sounds['003 TK1 DANIEL SEL CLEANUP'][1]
						startTime: PBS.KIDS.storybook.sounds['003A PU TK1C DANIEL SEL CLEANUP STORYBOOK'][0],
						endTime: PBS.KIDS.storybook.sounds['003A PU TK1C DANIEL SEL CLEANUP STORYBOOK'][1]
					},
					x: 4,
					y: 14,
					width: 80,
					align: "left",
					color: "#54331b",
					// text: "When we got to the playground, we saw that it was a big mess. <font='Raphael-Icons'>s</font>"
					text: "Oh no, the playground is a big mess! <font='Raphael-Icons'>s</font>"
				}
			]
		},{
			background: {
				url: "images/page-3-right.jpg"	
			},
			content: [
				{
					type: "Sprite",
					x: 41,
					y: 42,
					autoStart: false,
					autoReset: true,
					resetDelay: 0,
					numFrames: 1,
					url: "images/page-3-mom.png"
				},
				{
					type: "Sprite",
					x: 70,
					y: 42,
					autoStart: false,
					autoReset: true,
					playOnPress: true,
					frameDelay: 8,
					frames : [0, 1, 2, 3, 4, 3, 3, 4, 3, 3, 4, 3, 2, 1],
					frameWidth : 172,
					url: "images/page-3-dad.png",
					sound : {
						startTime: PBS.KIDS.storybook.sounds['sfx_spread3a'][0],
						endTime: PBS.KIDS.storybook.sounds['sfx_spread3a'][1]
					}
				},
				{
					type: "Sprite",
					x: 4,
					y: 58,
					autoStart: false,
					autoReset: true,
					playOnPress: true,
					resetDelay: 0,
					frameDelay: 6,
					frames : [0, 1, 2, 3, 4, 5, 6, 7, 6, 5, 6, 7, 6, 5, 6, 7, 6, 5, 6, 7, 6, 5, 4, 3, 2, 1],
					frameWidth : 149,
					url: "images/page-3-cat.png",
					sound : {
						startTime: PBS.KIDS.storybook.sounds['sfx_spread3'][0],
						endTime: PBS.KIDS.storybook.sounds['sfx_spread3'][1]
					}
				},
				{
					type: "Sprite",
					x: 23,
					y: 59,
					autoStart: false,
					autoReset: true,
					playOnPress: true,
					resetDelay: 0,
					frameDelay: 6,
					// frames : [0, 1, 2, 3, 4, 5, 6, 5, 4, 4, 4, 4, 4, 4, 4, 5, 6, 5, 4, 5, 6, 5, 4, 5, 6, 5, 4, 3, 2, 1],
					frames : [0, 1, 2, 3, 4, 5, 6, 5, 4, 5, 6, 5, 4, 5, 6, 5, 4, 5, 6, 5, 4, 3, 2, 1],
					frameWidth : 151,
					url: "images/page-3-dan.png",
					sound : {
						startTime: PBS.KIDS.storybook.sounds['sfx_spread3b'][0],
						endTime: PBS.KIDS.storybook.sounds['sfx_spread3b'][1],
						volume : 0.7


						// startTime: PBS.KIDS.storybook.sounds['003A PU TK1C DANIEL SEL CLEANUP STORYBOOK'][0],
						// endTime: PBS.KIDS.storybook.sounds['003A PU TK1C DANIEL SEL CLEANUP STORYBOOK'][1]
					}
				}
			]
		},

		// page 4
		{
			background: {
				url: "images/page-4-left.jpg"
			},
			content: [
				{
					type: "Sprite",
					x: 32,
					y: 28,
					autoStart: false,
					autoReset: true,
					playOnPress: true,
					resetDelay: 0,
					frameDelay: 4,
					frames : [
						0, 1, 2, 3, 4, 5, 6, 
						7, 8, 9, 8, 7, 8, 9, 8, 7, 8, 9, 8, 7, 6, 5, 4, 4, 4, 4, 5, 6,
						7, 8, 9, 8, 7, 8, 9, 8, 7, 8, 9, 8, 7, 6, 5, 4, 4, 4, 4, 5, 6, 
						7, 8, 9, 8, 7, 8, 9, 8, 7, 8, 9, 8, 7, 6, 5, 4,
						3, 2, 1],
					frameWidth : 318,
					url: "images/page-4-king.png",
					sound: {
						startTime: PBS.KIDS.storybook.sounds['sfx_spread4'][0],
						endTime: PBS.KIDS.storybook.sounds['sfx_spread4'][1]
					}
				}
			]
		},{
			background: {
				url: "images/page-4-right.jpg"	
			},
			sound: {
				startTime: PBS.KIDS.storybook.sounds['004 TK3 DANIEL SEL CLEANUP'][0],
				endTime: PBS.KIDS.storybook.sounds['004 TK3 DANIEL SEL CLEANUP'][1]
			},
			content: [
				{
					type: "TextArea",
					sound: {
						startTime: PBS.KIDS.storybook.sounds['004 TK3 DANIEL SEL CLEANUP'][0],
						endTime: PBS.KIDS.storybook.sounds['004 TK3 DANIEL SEL CLEANUP'][1]
					},
					x: 8,
					y: 10,
					width: 72,
					align: "left",
					color: "#54331b",
					text: "King Friday asks the neighbors to work together to help clean up the playground. <font='Raphael-Icons'>s</font>"
				}
			]
		},

		// page 5
		{
			background: {
				url: "images/page-5-left.jpg"
			},
			content: [
				{
					type: "Sprite",
					x: 15,
					y: 47,
					autoStart: false,
					autoReset: true,
					playOnPress: true,
					resetDelay: 0,
					frameDelay: 4,
					frames : [0, 1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 5, 6, 7, 6, 5, 4, 5, 6, 7, 6, 5, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1],
					frameWidth : 270,
					url: "images/page-5-cat.png",
					sound: {
						startTime: PBS.KIDS.storybook.sounds['sfx_spread5b'][0],
						endTime: PBS.KIDS.storybook.sounds['sfx_spread5b'][1]
					}
				},
				{
					type: "Sprite",
					x: 58,
					y: 42,
					autoStart: false,
					autoReset: false,
					playOnPress: true,
					resetDelay: 0,
					numFrames : 7,
					frameDelay: 6,
					frames : [0, 1, 2, 3, 4, 5, 6, 5, 4, 5, 6, 5, 4, 3, 2, 1],
					frameWidth : 246,
					url: "images/page-5-daniel.png",
					sound: {
						startTime: PBS.KIDS.storybook.sounds['005 TK1B DANIEL SEL CLEANUP'][0],
						endTime: PBS.KIDS.storybook.sounds['005 TK1B DANIEL SEL CLEANUP'][1]
					}
				}
				// {
				// 	type: "Sprite",
				// 	x: 58,
				// 	y: 42,
				// 	autoStart: false,
				// 	autoReset: false,
				// 	resetDelay: 0,
				// 	numFrames : 1,
				// 	url: "images/page-5-dan.png",
				// 	sound: {
				// 		startTime: PBS.KIDS.storybook.sounds['005 TK1B DANIEL SEL CLEANUP'][0],
				// 		endTime: PBS.KIDS.storybook.sounds['005 TK1B DANIEL SEL CLEANUP'][1]
				// 	}
				// }
			]
		},{
			background: {
				url: "images/page-5-right.jpg"	
			},
			sound: {
				startTime: PBS.KIDS.storybook.sounds['005 TK1B DANIEL SEL CLEANUP'][0],
				endTime: PBS.KIDS.storybook.sounds['005 TK1B DANIEL SEL CLEANUP'][1]
			},
			content: [
				{
					type: "Sprite",
					x: 35,
					y: 42,
					autoStart: false,
					autoReset: true,
					playOnPress: true,
					resetDelay: 0,
					frameDelay: 4,
					frames : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
					frameWidth : 284,
					url: "images/page-5-bird.png"
				},
				{
					type: "Sprite",
					x: 0,
					y: 35,
					autoStart: false,
					autoReset: true,
					playOnPress: true,
					resetDelay: 0,
					frameDelay: 6,
					frames : [0, 1, 2, 3, 4, 5, 6, 7, 7, 7, 6, 5, 4, 3, 2],
					frameWidth : 286,
					sound: {
						startTime: PBS.KIDS.storybook.sounds['sfx_spread5c'][0],
						endTime: PBS.KIDS.storybook.sounds['sfx_spread5c'][1]
					},
					url: "images/page-5-girl2.png"
				},
				{
					type: "Sprite",
					x: 38,
					y: 42,
					autoStart: false,
					autoReset: false,
					playOnPress: true,
					numFrames: 1,
					url: "images/page-5-bird-hit.png",
					sound: {
						startTime: PBS.KIDS.storybook.sounds['sfx_spread5a'][0],
						endTime: PBS.KIDS.storybook.sounds['sfx_spread5a'][1]
					},
					onPress : function()
					{
						var s = book.getContent(9, 0);
						s.reset(true);
						s.play();
					}
				},
				{
					type: "TextArea",
					sound: {
						startTime: PBS.KIDS.storybook.sounds['005 TK1B DANIEL SEL CLEANUP'][0],
						endTime: PBS.KIDS.storybook.sounds['005 TK1B DANIEL SEL CLEANUP'][1]
					},
					x: 20,
					y: 8,
					width: 55,
					align: "left",
					color: "#54331b",
					text: "Let's start cleaning! <font='Raphael-Icons'>s</font>"
				}
			]
		},

		// page 6
		{
			background: {
				url: "images/page-6-left.jpg"
			},
			content: [
				{
					type: "Sprite",
					x: 25,
					y: 38,
					autoStart: false,
					autoReset: false,
					playOnPress: true,
					frameDelay: 6,
					numFrames : 4,
					playBackwards : true,
					url: "images/page-6-blue.png",
					onAnimationComplete : function(n)
					{
						if ( n > 0 )
						{
							book.playSound({
								startTime : PBS.KIDS.storybook.sounds['lid close'][0],
								endTime : PBS.KIDS.storybook.sounds['lid close'][1]
							});
						}
					}
				},
				{
					type: "Sprite",
					x: 55,
					y: 40,
					autoStart: false,
					autoReset: false,
					playOnPress: true,
					frameDelay: 6,
					numFrames : 4,
					playBackwards : true,
					url: "images/page-6-red.png",
					onAnimationComplete : function(n)
					{
						if ( n > 0 )
						{
							book.playSound({
								startTime : PBS.KIDS.storybook.sounds['lid close'][0],
								endTime : PBS.KIDS.storybook.sounds['lid close'][1]
							});
						}
					}
				},
				{
					type: "Sprite",
					x: 0,
					y: 35,
					autoStart: true,
					autoReset: false,
					frameDelay: 8,
					frames : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
					frameWidth : 505,
					url: "images/page-6-dan.png"
				},
				{
					type: "Sprite",
					x: 30,
					y: 38,
					autoStart: false,
					autoReset: false,
					playOnPress: true,
					numFrames: 1,
					url: "images/page-6-blue-hit.png",
					onPress: function()
					{
						var s = book.getContent(10, 0);

						if ( s.getCurFrame() > 0 )
						{
							book.playSound({
								startTime : PBS.KIDS.storybook.sounds['lid open'][0],
								endTime : PBS.KIDS.storybook.sounds['lid open'][1]
							});
						}

						s.play();
					}
				},
				{
					type: "Sprite",
					x: 60,
					y: 42,
					autoStart: false,
					autoReset: false,
					playOnPress: true,
					numFrames: 1,
					url: "images/page-6-red-hit.png",
					onPress: function()
					{
						var s = book.getContent(10, 1);

						if ( s.getCurFrame() > 0 )
						{
							book.playSound({
								startTime : PBS.KIDS.storybook.sounds['lid open'][0],
								endTime : PBS.KIDS.storybook.sounds['lid open'][1]
							});
						}

						s.play();
					}
				},
				{
					type: "Sprite",
					x: 2,
					y: 50,
					autoStart: false,
					autoReset: false,
					playOnPress: true,
					numFrames: 1,
					url: "images/page-6-dan-hit.png",
					onPress: function()
					{
						var s = book.getContent(10, 1);
						if ( s.getCurFrame() > 0 )
						{
							book.playSound({
								startTime : PBS.KIDS.storybook.sounds['lid open'][0],
								endTime : PBS.KIDS.storybook.sounds['lid open'][1]
							});

							s.play();
						}

						var s = book.getContent(10, 2);
						s.reset(true);
						s.play();

						setTimeout(function()
						{
							book.playSound({
								startTime : PBS.KIDS.storybook.sounds['plastic_bottle_in_garbage'][0],
								endTime : PBS.KIDS.storybook.sounds['plastic_bottle_in_garbage'][1]
							});
						}, 1200);
					}
				}
			]
		},{
			background: {
				url: "images/page-6-right.jpg"	
			},
			sound: {
				// startTime: PBS.KIDS.storybook.sounds['007 TK2 DANIEL SEL CLEANUP'][0],
				// endTime: PBS.KIDS.storybook.sounds['007 TK2 DANIEL SEL CLEANUP'][1]
				startTime: PBS.KIDS.storybook.sounds['006A PU TK1E DANIEL SEL CLEANUP STORYBOOK'][0],
				endTime: PBS.KIDS.storybook.sounds['006A PU TK1E DANIEL SEL CLEANUP STORYBOOK'][1]
			},
			content: [
				{
					type: "Sprite",
					x: 0,
					y: 42,
					autoStart: false,
					autoReset: false,
					playOnPress: true,
					frameDelay: 6,
					numFrames : 4,
					playBackwards : true,
					url: "images/page-6-yellow.png",
					onPress : function(e, n)
					{
						if ( n > 0 )
						{
							book.playSound({
								startTime : PBS.KIDS.storybook.sounds['lid open'][0],
								endTime : PBS.KIDS.storybook.sounds['lid open'][1]
							});
						}
					},
					onAnimationComplete : function(n)
					{
						if ( n > 0 )
						{
							book.playSound({
								startTime : PBS.KIDS.storybook.sounds['lid close'][0],
								endTime : PBS.KIDS.storybook.sounds['lid close'][1]
							});
						}
					}
				},
				{
					type: "Sprite",
					x: 44,
					y: 54,
					autoStart: false,
					autoReset: false,
					resetDelay: 0,
					numFrames : 1,
					url: "images/page-6-owl.png"
				},
				{
					type: "TextArea",
					sound: {
						// startTime: PBS.KIDS.storybook.sounds['007 TK2 DANIEL SEL CLEANUP'][0],
						// endTime: PBS.KIDS.storybook.sounds['007 TK2 DANIEL SEL CLEANUP'][1]
						startTime: PBS.KIDS.storybook.sounds['006A PU TK1E DANIEL SEL CLEANUP STORYBOOK'][0],
						endTime: PBS.KIDS.storybook.sounds['006A PU TK1E DANIEL SEL CLEANUP STORYBOOK'][1]
					},
					x: 10,
					y: 8,
					width: 70,
					align: "left",
					color: "#54331b",
					text: "O the Owl tells me about recycling. That's turning something old - like trash - into something new. <font='Raphael-Icons'>s</font>"
				}
			]
		},

		// page 7
		{
			background: {
				url: "images/page-7-left.jpg"
			},
			sound: {
				startTime: PBS.KIDS.storybook.sounds['008 TK1 DANIEL SEL CLEANUP'][0],
				endTime: PBS.KIDS.storybook.sounds['008 TK1 DANIEL SEL CLEANUP'][1]
			},
			content: [
				
				{
					type: "Sprite",
					x: 0,
					y: 0,
					autoStart: true,
					frameDelay: 6,
					numFrames : 5,
					loop : true,
					url: "images/page-7-border-left.png"
				},
				
				{
					type: "TextArea",
					sound: {
						startTime: PBS.KIDS.storybook.sounds['008 TK1 DANIEL SEL CLEANUP'][0],
						endTime: PBS.KIDS.storybook.sounds['008 TK1 DANIEL SEL CLEANUP'][1]
					},
					x: 10,
					y: 8,
					width: 65,
					align: "left",
					color: "#54331b",
					text: "Let's make believe we're turning something old into something new. <font='Raphael-Icons'>s</font>"
				},
				{
					type: "Sprite",
					x: 10,
					y: 22,
					autoStart: false,
					autoReset: false,
					frameDelay: 6,
					numFrames : 11,
					playBackwards : true,
					url: "images/page-7-can-car.png"
				},
				{
					type: "Sprite",
					x: 20,
					y: 32,
					autoStart: false,
					autoReset: false,
					playOnPress: true,
					numFrames : 1,
					url: "images/page-7-can-car-hit.png",
					sound: {
						startTime: PBS.KIDS.storybook.sounds['trash_transformation'][0],
						endTime: PBS.KIDS.storybook.sounds['trash_transformation'][1]
					},
					onPress : function()
					{
						book.getContent(12, 2).play();

						// // left/right border
						// var s = book.getContent(12, 1); s.reset(true); s.play();
						// // left/right border
						// var s = book.getContent(13, 2); s.reset(true); s.play();
					}
				},
			]
		},{
			background: {
				url: "images/page-7-right.jpg"	
			},
			content: [
				{
					type: "Sprite",
					x: 5,
					y: 8,
					autoStart: false,
					autoReset: false,
					frameDelay: 6,
					numFrames : 11,
					playBackwards : true,
					url: "images/page-7-glass-glass.png"
				},
				{
					type: "Sprite",
					x: 35,
					y: 10,
					autoStart: false,
					autoReset: false,
					playOnPress: true,
					frameDelay: 6,
					numFrames : 11,
					playBackwards : true,
					url: "images/page-7-paper-book.png"
				},
				{
					type: "Sprite",
					x: 0,
					y: 0,
					autoStart: true,
					frameDelay: 6,
					numFrames : 5,
					loop : true,
					url: "images/page-7-border-right.png"
				},
				{
					type: "Sprite",
					x: 8,
					y: 14,
					autoStart: false,
					autoReset: false,
					playOnPress: true,
					numFrames : 1,
					url: "images/page-7-glass-glass-hit.png",
					sound: {
						startTime: PBS.KIDS.storybook.sounds['trash_transformation'][0],
						endTime: PBS.KIDS.storybook.sounds['trash_transformation'][1]
					},
					onPress : function()
					{
						book.getContent(13, 0).play();

						// // left/right border
						// var s = book.getContent(12, 1); s.reset(true); s.play();
						// // left/right border
						// var s = book.getContent(13, 2); s.reset(true); s.play();
					}
				},
				{
					type: "Sprite",
					x: 40,
					y: 30,
					autoStart: false,
					autoReset: false,
					playOnPress: true,
					numFrames : 1,
					url: "images/page-7-paper-book-hit.png",
					sound: {
						startTime: PBS.KIDS.storybook.sounds['trash_transformation'][0],
						endTime: PBS.KIDS.storybook.sounds['trash_transformation'][1]
					},
					onPress : function()
					{
						book.getContent(13, 1).play();

						// // left/right border
						// var s = book.getContent(12, 1); s.reset(true); s.play();
						// // left/right border
						// var s = book.getContent(13, 2); s.reset(true); s.play();
					}
				}
			]
		},

		// page 8
		{
			background: {
				url: "images/page-8-left.jpg"
			},
			sound: {
				// startTime: PBS.KIDS.storybook.sounds['006 TK1D DANIEL SEL CLEANUP'][0],
				// endTime: PBS.KIDS.storybook.sounds['006 TK1D DANIEL SEL CLEANUP'][1]
				startTime: PBS.KIDS.storybook.sounds['008A PU TK1E DANIEL SEL CLEANUP STORYBOOK'][0],
				endTime: PBS.KIDS.storybook.sounds['008A PU TK1E DANIEL SEL CLEANUP STORYBOOK'][1]
			},
			content: [
				{
					type: "Sprite",
					x: 25,
					y: 27,
					autoStart: false,
					autoReset: false,
					frameDelay: 8,
					frames : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
					frameWidth : 365,
					url: "images/page-8-cat.png"
				},
				{
					type: "Sprite",
					x: 30,
					y: 35,
					autoStart: false,
					autoReset: false,
					playOnPress: true,
					numFrames : 1,
					url: "images/page-8-cat-hit.png",
					onPress : function()
					{
						var s = book.getContent(14, 0);
						s.reset(true);
						s.play();

						setTimeout(function()
						{
							book.playSound({
								// startTime : PBS.KIDS.storybook.sounds['trash_pickup3'][0],
								// endTime : PBS.KIDS.storybook.sounds['trash_pickup3'][1]
								startTime : PBS.KIDS.storybook.sounds['sfx_trash_clunk_'][0],
								endTime : PBS.KIDS.storybook.sounds['sfx_trash_clunk_'][1],
								volume : 0.3
							});
						}, 1500);
					}
				},
				{
					type: "TextArea",
					sound: {
						// startTime: PBS.KIDS.storybook.sounds['006 TK1D DANIEL SEL CLEANUP'][0],
						// endTime: PBS.KIDS.storybook.sounds['006 TK1D DANIEL SEL CLEANUP'][1]
						startTime: PBS.KIDS.storybook.sounds['008A PU TK1E DANIEL SEL CLEANUP STORYBOOK'][0],
						endTime: PBS.KIDS.storybook.sounds['008A PU TK1E DANIEL SEL CLEANUP STORYBOOK'][1]
					},
					x: 10,
					y: 8,
					width: 65,
					align: "left",
					color: "#54331b",
					text: "Cleaning up is fun when we all work together. <font='Raphael-Icons'>s</font>"
				}
			]
		},{
			background: {
				url: "images/page-8-right.jpg"	
			},
			content: [
				{
					type: "Sprite",
					x: 0,
					y: 22,
					autoStart: false,
					autoReset: false,
					frameDelay: 8,
					frames : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
					frameWidth : 355,
					url: "images/page-8-girl.png"
				},
				{
					type: "Sprite",
					x: 28,
					y: 36,
					autoStart: false,
					autoReset: false,
					frameDelay: 8,
					frames : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
					frameWidth : 409,
					url: "images/page-8-dan.png"
				},
				{
					type: "Sprite",
					x: 54,
					y: 40,
					autoStart: false,
					autoReset: false,
					playOnPress: true,
					numFrames : 1,
					url: "images/page-8-dan-hit.png",
					onPress : function()
					{
						var s = book.getContent(15, 1);
						s.reset(true);
						s.play();

						setTimeout(function()
						{
							book.playSound({
								// startTime : PBS.KIDS.storybook.sounds['trash_pickup3'][0],
								// endTime : PBS.KIDS.storybook.sounds['trash_pickup3'][1]
								startTime : PBS.KIDS.storybook.sounds['sfx_trash_clunk_'][0],
								endTime : PBS.KIDS.storybook.sounds['sfx_trash_clunk_'][1],
								volume : 0.3
							});
						}, 1000);
					}
				},
				{
					type: "Sprite",
					x: 14,
					y: 26,
					autoStart: false,
					autoReset: false,
					playOnPress: true,
					numFrames : 1,
					url: "images/page-8-girl-hit.png",
					onPress : function()
					{
						var s = book.getContent(15, 0);
						s.reset(true);
						s.play();

						setTimeout(function()
						{
							book.playSound({
								// startTime : PBS.KIDS.storybook.sounds['trash_pickup3'][0],
								// endTime : PBS.KIDS.storybook.sounds['trash_pickup3'][1]
								startTime : PBS.KIDS.storybook.sounds['sfx_trash_clunk_'][0],
								endTime : PBS.KIDS.storybook.sounds['sfx_trash_clunk_'][1],
								volume : 0.3
							});
						}, 800);
					}
				}
			]
		},

		// page 9
		{
			background: {
				url: "images/page-9-left.jpg"
			},
			content: [
				{
					type: "Sprite",
					x: -25,
					y: 25,
					autoStart: true,
					autoReset: true,
					resetDelay: 0,
					frameDelay: 6,
					frames : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9],
					frameWidth : 514,
					url: "images/page-9-swing.png"
				},
				{
					type: "Sprite",
					x: 40,
					y: 40,
					autoStart: false,
					autoReset: true,
					resetDelay: 0,
					frameDelay: 6,
					frames : [0, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 7, 8, 7, 6, 7, 8, 7, 6, 5, 4, 4, 4, 5, 6, 7, 8, 7, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1],
					frameWidth : 325,
					url: "images/page-9-king.png"
				},
				{
					type: "Sprite",
					x: -8,
					y: 25,
					autoStart: false,
					autoReset: false,
					playOnPress: true,
					numFrames: 1,
					url: "images/page-9-swing-hit.png",
					sound : {
						startTime: PBS.KIDS.storybook.sounds['swings'][0],
						endTime: PBS.KIDS.storybook.sounds['swings'][1]
					},
					onPress : function()
					{
						var s = book.getContent(16, 0);
						s.reset(true);
						s.play();
					}
				},
				{
					type: "Sprite",
					x: 54,
					y: 44,
					autoStart: false,
					autoReset: false,
					playOnPress: true,
					numFrames: 1,
					url: "images/page-9-king-hit.png",
					sound: {
						startTime: PBS.KIDS.storybook.sounds['sfx_spread9'][0],
						endTime: PBS.KIDS.storybook.sounds['sfx_spread9'][1]
					},
					onPress : function()
					{
						var s = book.getContent(16, 1);
						s.reset(true);
						s.play();
					}
				}
			]
		},{
			background: {
				url: "images/page-9-right.jpg"	
			},
			sound: {
				// startTime: PBS.KIDS.storybook.sounds['009 TK9 DANIEL SEL CLEANUP'][0],
				// endTime: PBS.KIDS.storybook.sounds['009 TK9 DANIEL SEL CLEANUP'][1]
				startTime: PBS.KIDS.storybook.sounds['009A PU TK1D DANIEL ALT CLEANUP STORYBOOK'][0],
				endTime: PBS.KIDS.storybook.sounds['009A PU TK1D DANIEL ALT CLEANUP STORYBOOK'][1]
			},
			content: [
				{
					type: "Sprite",
					x: 27,
					y: 35,
					autoStart: true,
					autoReset: true,
					playOnPress: true,
					resetDelay: 0,
					frameDelay: 6,
					frames : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1],
					frameWidth : 218,
					url: "images/page-9-ladybug-1.png",
					sound : {
						startTime: PBS.KIDS.storybook.sounds['sfx_ladybug_01'][0],
						endTime: PBS.KIDS.storybook.sounds['sfx_ladybug_01'][1],
						volume : 0.7
					}
				},
				{
					type: "Sprite",
					x: 62,
					y: 40,
					autoStart: true,
					autoReset: true,
					playOnPress: true,
					resetDelay: 0,
					frameDelay: 6,
					frames : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1],
					frameWidth : 214,
					url: "images/page-9-ladybug-2.png",
					sound : {
						startTime: PBS.KIDS.storybook.sounds['sfx_ladybug_01'][0],
						endTime: PBS.KIDS.storybook.sounds['sfx_ladybug_01'][1],
						volume : 0.7
					}
				},
				{
					type: "TextArea",
					sound: {
						// startTime: PBS.KIDS.storybook.sounds['009 TK9 DANIEL SEL CLEANUP'][0],
						// endTime: PBS.KIDS.storybook.sounds['009 TK9 DANIEL SEL CLEANUP'][1]
						startTime: PBS.KIDS.storybook.sounds['009A PU TK1D DANIEL ALT CLEANUP STORYBOOK'][0],
						endTime: PBS.KIDS.storybook.sounds['009A PU TK1D DANIEL ALT CLEANUP STORYBOOK'][1]
					},
					x: 10,
					y: 8,
					width: 70,
					align: "left",
					color: "#54331b",
					text: "Now that we're finished, the playground looks grr-ific. And we can all play again! <font='Raphael-Icons'>s</font>"
				}
			]
		},

		// page 10
		{
			background: {
				url: "images/page-10-left.jpg"
			},
			sound: {
				startTime: PBS.KIDS.storybook.sounds['010 TK6 DANIEL SEL CLEANUP'][0],
				endTime: PBS.KIDS.storybook.sounds['010 TK6 DANIEL SEL CLEANUP'][1]
			},
			content: [
				{
					type: "Sprite",
					x: 58,
					y: 10,
					autoStart: false,
					autoReset: true,
					playOnPress: false,
					resetDelay: 0,
					frameDelay: 6,
					playAfterDelay : 9,
					frames : [0, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1],
					frameWidth : 244,
					url: "images/page-10-dan-left.png"
				},
				{
					type: "TextArea",
					sound: {
						startTime: PBS.KIDS.storybook.sounds['010 TK6 DANIEL SEL CLEANUP'][0],
						endTime: PBS.KIDS.storybook.sounds['010 TK6 DANIEL SEL CLEANUP'][1]
					},
					x: 5,
					y: 5,
					width: 68,
					align: "left",
					color: "#54331b",
					text: "I'm glad you were here with me and my neighbors to help with the clean-up. It's such a good feeling when we all work together.[newline]Ugga Mugga. <font='Raphael-Icons'>s</font>"
				}
			]
		},{
			background: {
				url: "images/page-10-right.jpg"	
			},
			content: [
				{
					type: "Sprite",
					x: 0,
					y: 10,
					autoStart: false,
					autoReset: true,
					playOnPress: true,
					resetDelay: 0,
					frameDelay: 6,
					playAfterDelay : 9,
					frames : [0, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1],
					frameWidth : 584,
					url: "images/page-10-dan-right.png",
					onPress : function()
					{
						var s = book.getContent(18, 0);
						s.reset(true);
						s.play();

						book.playSound({
							startTime : PBS.KIDS.storybook.sounds['ugga-mugga'][0],
							endTime : PBS.KIDS.storybook.sounds['ugga-mugga'][1]
						});
					}
				}
			]
		}
	]
};