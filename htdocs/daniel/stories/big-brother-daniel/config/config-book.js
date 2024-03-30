//  ------------------------------------------------------------------
//  config-book.js
//
//  Copyright 2012 PBS KIDS Interactive. All Rights Reserved.

PBS.KIDS.storybook.sounds = {"silence":[0.1,1,0],"0.1":[2,4.283,0],"10.goodnight_sleep_tight":[6,14.693,0],"11.2mom_dad_and_i_love_you":[16,17.909,0],"12_uggamugga":[19,19.89,0],"2.baby_margaret_happy":[21,28.446,0],"3.2baby_margaret ":[30,33.655,0],"5.2":[35,37.588,0],"5.3":[39,40.588,0],"6.1daniel_strategy":[42,47.911,0],"6.2dad_big_helper_singing":[49,53.848,0],"Baby Coos06":[55,57.208,0],"crying 2":[59,63.372,0],"crying":[65,70.645,0],"crying2":[72,75.271,0],"giggle":[77,77.853,0],"laugh1":[79,80.175,0],"laugh2":[82,83.007,0],"008861959-latch-door":[85,85.81,0],"026969882-childrens-push-chair-pram-bugg":[87,90.683,0],"1.1":[92,100.141,0],"1.2(hi)":[102,102.955,0],"10.1":[104,113.707,0],"11.1":[115,123.875,0],"12.1":[125,135.283,0],"2.1":[137,142.472,0],"3.1":[144,150.457,0],"4.1":[152,158.736,0],"5.1":[160,168.245,0],"5.4":[170,173.637,0],"6.1":[175,181.976,0],"6.2":[183,185.176,0],"7.1":[187,191.011,0],"8.a.1":[193,195.741,0],"8.b.1":[197,199.592,0],"9.1":[201,210.237,0],"Baby Coos04":[212,215.553,0],"Baby Coos10":[217,219.277,0],"Baby Coos12":[221,222.66,0],"Baby Coos14":[224,226.418,0],"Baby,Coo,Single 02-01":[228,228.749,0],"coo-giggle":[230,232.305,0],"mom_strategy_big_helper":[234,239.565,0]};

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
			startTime: PBS.KIDS.storybook.sounds['0.1'][0],
			endTime: PBS.KIDS.storybook.sounds['0.1'][1]
		},
		content: [
			{
				type: "Sprite",
				sound: {
					startTime: PBS.KIDS.storybook.sounds['0.1'][0],
					endTime: PBS.KIDS.storybook.sounds['0.1'][1]
				},
				x: 0,
				y: 0,
				width: 100,
				height: 100,
				onPress : function()
				{
					var t = ((PBS.KIDS.storybook.sounds['0.1'][1] - PBS.KIDS.storybook.sounds['0.1'][0]) * 1000) + 100;
					setTimeout(book.nextPage, t);
				}
			}
		]
	},

	// page 1
	pages: [
		{
			background: {
				url: "images/page-1-left.jpg"	
			},
			content: [
				{
					type: "Sprite",
					x: 42,
					y: 18,
					numFrames: 9,
					frameDelay: 8,
					autoStart: false,
					autoReset: false,
					resetDelay: 0,
					url: "images/page-1-daniel.png"
				},
				{
					type: "Sprite",
					x: 1,
					y: 9,
					numFrames: 9,
					frameDelay: 6,
					autoStart: true,
					autoReset: false,
					resetDelay: 0,
					playOnPress: true,
					playBackwards : true,
					url: "images/page-1-door.png",
					onPress : function(e, frameNum)
					{
						if ( frameNum == 0 )
						{
							book.playSound({
								startTime : PBS.KIDS.storybook.sounds['008861959-latch-door'][0],
								endTime : PBS.KIDS.storybook.sounds['008861959-latch-door'][1]
							});
						}
					},
					onAnimationComplete : function(frameNum)
					{
						if ( frameNum == 0 )
						{
							book.playSound({
								startTime : PBS.KIDS.storybook.sounds['008861959-latch-door'][0],
								endTime : PBS.KIDS.storybook.sounds['008861959-latch-door'][1]
							});
						}
						else
						{
							var s = book.getContent(0, 0);
							s.reset(true);
							s.play();

							book.playSound({
								startTime : PBS.KIDS.storybook.sounds['1.2(hi)'][0],
								endTime : PBS.KIDS.storybook.sounds['1.2(hi)'][1]
							})
						}
					}

					// sound : {
					// 	startTime : PBS.KIDS.storybook.sounds['008861959-latch-door'][0],
					// 	endTime : PBS.KIDS.storybook.sounds['008861959-latch-door'][1]
					// }
					// onPress : function() 
					// {
					// 	book.playSound({
					// 		startTime : PBS.KIDS.storybook.sounds['008861959-latch-door'][0],
					// 		endTime : PBS.KIDS.storybook.sounds['008861959-latch-door'][1]
					// 	})
					// }
				}
			]
		},{
			background: {
				url: "images/page-1-right.jpg"	
			},
			sound: {
				startTime: PBS.KIDS.storybook.sounds['1.1'][0],
				endTime: PBS.KIDS.storybook.sounds['1.1'][1]
			},
			content: [
				{
					type: "TextArea",
					sound: {
						startTime: PBS.KIDS.storybook.sounds['1.1'][0],
						endTime: PBS.KIDS.storybook.sounds['1.1'][1]
					},
					x: 5,
					y: 21.5,
					width: 75,
					align: "left",
					color: "#54331b",
					text: "Hi neighbor. It’s me, Daniel Tiger. Come on in. There’s someone special I want you to meet. <font='Raphael-Icons'>s</font>"
				},
				{
					type : 'Cycler',
					autoStart : false,
					playThrough : true,
					content : [
					{
						type: "Sprite",
						x: 0,
						y: 65,
						numFrames: 5,
						frameDelay: 6,
						autoStart: false,
						autoReset: false,
						resetDelay: 0,
						playOnPress: true,
						url: "images/page-1-bunnies-1.png"
					},
					{
						type: "Sprite",
						x: 0,
						y: 65,
						numFrames: 5,
						frameDelay: 6,
						autoStart: true,
						autoReset: false,
						resetDelay: 0,
						playOnPress: false,
						url: "images/page-1-bunnies-2.png"
					},
					{
						type: "Sprite",
						x: 0,
						y: 65,
						numFrames: 7,
						frameDelay: 6,
						autoStart: true,
						autoReset: true,
						resetDelay: 60,
						playOnPress: false,
						url: "images/page-1-bunnies-3.png"
					}]
				}
			]

		// page 2
		},{
			background: {
				url: "images/page-2-left.jpg"
			},
			content: [
				{
					type : 'Cycler',
					autoStart : false,
					playThrough : true,
					sound: {
						startTime: PBS.KIDS.storybook.sounds['2.baby_margaret_happy'][0],
						endTime: PBS.KIDS.storybook.sounds['2.baby_margaret_happy'][1]
					},
					content : [
					{
						type: "Sprite",
						x: 42,
						y: 39,
						numFrames: 4,
						frameDelay: 8,
						autoStart: false,
						autoReset: false,
						resetDelay: 0,
						playOnPress: true,
						playBackwards : true,
						playCount : 2,
						url: "images/page-2-daniel-shrug.png"
					},
					{
						type: "Sprite",
						x: 42,
						y: 39,
						numFrames: 1,
						frameDelay: 12,
						autoStart: true,
						autoReset: false,
						playOnPress: false,
						playBackwards : true,
						playCount : 11,
						url: "images/page-2-daniel-idle.png"
					},
					{
						type: "Sprite",
						x: 42,
						y: 39,
						numFrames: 4,
						frameDelay: 8,
						autoStart: true,
						autoReset: false,
						resetDelay: 0,
						playOnPress: false,
						playBackwards : true,
						playCount : 2,
						url: "images/page-2-daniel-shrug.png"
					},
					{
						type: "Sprite",
						x: 42,
						y: 39,
						numFrames: 1,
						frameDelay: 12,
						autoStart: true,
						autoReset: false,
						playOnPress: false,
						playBackwards : true,
						playCount : 11,
						url: "images/page-2-daniel-idle.png"
					},
					{
						type: "Sprite",
						x: 42,
						y: 39,
						numFrames: 4,
						frameDelay: 8,
						autoStart: true,
						autoReset: true,
						resetDelay: 0,
						playOnPress: false,
						playBackwards : true,
						playCount : 2,
						url: "images/page-2-daniel-shrug.png"
					}]


					// type: "Sprite",
					// x: 42,
					// y: 39,
					// numFrames: 4,
					// frameDelay: 8,
					// autoStart: false,
					// autoReset: false,
					// playOnPress: true,
					// playBackwards : true,
					// playCount : 2,
					// url: "images/page-2-daniel.png",
					// sound: {
					// 	startTime: PBS.KIDS.storybook.sounds['2.baby_margaret_happy'][0],
					// 	endTime: PBS.KIDS.storybook.sounds['2.baby_margaret_happy'][1]
					// }
				}
			]
		},{
			background: {
				url: "images/page-2-right.jpg"
			},
			sound: {
				startTime: PBS.KIDS.storybook.sounds['2.1'][0],
				endTime: PBS.KIDS.storybook.sounds['2.1'][1]
			},
			content: [
				{
					type: "TextArea",
					sound: {
						startTime: PBS.KIDS.storybook.sounds['2.1'][0],
						endTime: PBS.KIDS.storybook.sounds['2.1'][1]
					},
					x: 20,
					y: 65,
					width: 60,
					align: "left",
					color: "#54331b",
					text: "This is my new baby sister, Margaret. I’m a big brother now! <font='Raphael-Icons'>s</font>"
				},
				{
					type: "Sprite",
					x: 17,
					y: 35,
					numFrames: 3,
					frameDelay: 16,
					autoStart: false,
					autoReset: false,
					playOnPress: true,
					playCount : 4,
					playBackwards : true,
					url: "images/page-2-baby.png",
					sound: {
						startTime: PBS.KIDS.storybook.sounds['Baby Coos04'][0],
						endTime: PBS.KIDS.storybook.sounds['Baby Coos04'][1]
						// startTime: PBS.KIDS.storybook.sounds['Baby,Coo,Single 02-01'][0],
						// endTime: PBS.KIDS.storybook.sounds['Baby,Coo,Single 02-01'][1]
					}
				},
				{
					type: "Sprite",
					x: 0,
					y: 42,
					onPress : function()
					{
						var s = book.getContent(3, 1);
						s.play();
						s.dispatchEvent('PRESS');
					},
					url: "images/page-2-baby-hit.png"
				}
			]

		// page 3
		},{
			background: {
				url: "images/page-3-left.jpg"	
			},
			content: [
				{
					type: "Sprite",
					x: 1,
					y: 5,
					numFrames: 7,
					frameDelay: 7,
					autoStart: false,
					// playAfterDelay: 3, // removed narration
					autoReset: true,
					playOnPress: true,
					playBackwards : true,
					playCount : 4,
					url: "images/page-3-daniel.png",
					sound: {
						startTime: PBS.KIDS.storybook.sounds['3.2baby_margaret '][0],
						endTime: PBS.KIDS.storybook.sounds['3.2baby_margaret '][1]
					}
				}
			]
		},{
			background: {
				url: "images/page-3-right.jpg"	
			},
			sound: {
				startTime: PBS.KIDS.storybook.sounds['3.1'][0],
				endTime: PBS.KIDS.storybook.sounds['3.1'][1]
			},
			content: [
				{
					type: "TextArea",
					sound: {
						startTime: PBS.KIDS.storybook.sounds['3.1'][0],
						endTime: PBS.KIDS.storybook.sounds['3.1'][1]
					},
					x: 5,
					y: 8,
					width: 78,
					align: "left",
					color: "#54331b",
					text: "I’m so excited she’s finally here. <i>Baby Margaret is part of our family.</i> <font='Raphael-Icons'>s</font>"
				},
				{
					type : 'Cycler',
					autoStart : false,
					playThrough : true,
					sound: {
						startTime: PBS.KIDS.storybook.sounds['Baby Coos06'][0],
						endTime: PBS.KIDS.storybook.sounds['Baby Coos06'][1]
					},
					content : [
					{
						type: "Sprite",
						x: 4,
						y: 40.5,
						numFrames: 7,
						frameDelay: 6,
						autoStart: false,
						autoReset: false,
						playOnPress: true,
						playBackwards : true,
						playCount : 2,
						url: "images/page-3-baby-1.png"
					},
					{
						type: "Sprite",
						x: 4,
						y: 40.5,
						numFrames: 7,
						frameDelay: 6,
						autoStart: true,
						autoReset: true,
						playOnPress: false,
						playBackwards : true,
						playCount : 2,
						url: "images/page-3-baby-2.png"
					}]
				},
				{
					type: "Sprite",
					x: -21,
					y: 76.5,
					url: "images/page-3-blanket.png"
				}
			]

		// page 4
		},{
			background: {
				url: "images/page-4-left.jpg"
			},
			content: [
				{
					type: "Sprite",
					x: -7,
					y: 12,
					numFrames : 4,
					frameDelay : 6,
					autoStart : false,
					autoReset : true,
					playOnPress : true,
					playBackwards : true,
					playCount : 2,
					url: "images/page-4-daniel.png"
				}
			]
		},{
			background: {
				url: "images/page-4-right.jpg"	
			},
			sound: {
				startTime: PBS.KIDS.storybook.sounds['4.1'][0],
				endTime: PBS.KIDS.storybook.sounds['4.1'][1]
			},
			content: [
				{
					type: "Cycler",
					autoStart: true,
					playThrough : true,
					sound: {
						startTime: PBS.KIDS.storybook.sounds['crying2'][0],
						endTime: PBS.KIDS.storybook.sounds['crying2'][1]
					},
					isClickable : false,
					content: [
						{
							type: "Sprite",
							x: 1,
							y: 12,
							numFrames: 1,
							frameDelay: 6,
							autoStart: false,
							autoReset: false,
							playOnPress : true,
							url: "images/page-4-baby-1.png"
						},
						{
							type: "Sprite",
							x: 1,
							y: 12,
							numFrames: 4,
							frameDelay: 6,
							autoStart: true,
							autoReset: true,
							playOnPress : false,
							playBackwards : true,
							playCount : 8,
							url: "images/page-4-baby-2.png"
						}
					]
				},
				{
					type: "Sprite",
					x: 4,
					y: 16,
					onPress : function()
					{
						var s = book.getContent(7, 0);
						s.play();
						s.dispatchEvent('PRESS');
					},
					url: "images/page-4-baby-hit.png"
				},
				{
					type: "TextArea",
					sound: {
						startTime: PBS.KIDS.storybook.sounds['4.1'][0],
						endTime: PBS.KIDS.storybook.sounds['4.1'][1]
					},
					x: 11,
					y: 70,
					width: 68,
					align: "left",
					color: "#54331b",
					text: ["But Baby Margaret is so small.", "And babies sleep a lot.", "And cry a lot. <font='Raphael-Icons'>s</font>"]
				}
			]

		// page 5
		},{
			background: {
				url: "images/page-5-left.jpg"	
			},
			content: [
				{
					type: "Cycler",
					autoStart: false,
					playThrough : true,
					sound : {
						startTime: PBS.KIDS.storybook.sounds['5.2'][0],
						endTime: PBS.KIDS.storybook.sounds['5.2'][1]
					},
					content: [
						{
							type: "Sprite",
							x: 0,
							y: 0,
							numFrames : 1,
							playOnPress : true,
							autoStart : false,
							autoReset : true,
							url: "images/page-5-dad-1.png"
						},
						{
							type: "Sprite",
							x: 0,
							y: 0,
							numFrames: 3,
							frameDelay: 6,
							autoStart: true,
							autoReset: true,
							playBackwards : true,
							playCount : 8,
							url: "images/page-5-dad-2.png"
						}
					]
				},
				{
					type: "Cycler",
					autoStart: false,
					playThrough : true,
					sound : {
						startTime: PBS.KIDS.storybook.sounds['5.4'][0],
						endTime: PBS.KIDS.storybook.sounds['5.4'][1]
					},
					content: [
						{
							type: "Sprite",
							x: 34,
							y: 36,
							numFrames : 1,
							playOnPress : false,
							autoStart : false,
							autoReset : true,
							url: "images/page-5-daniel-1.png"
						},
						{
							type: "Sprite",
							x: 34,
							y: 36,
							numFrames: 3,
							frameDelay: 10,
							autoStart: true,
							autoReset: true,
							playBackwards : true,
							playCount : 2,
							url: "images/page-5-daniel-2.png"
						}
					]
				},
				{
					type: "Sprite",
					x: 1,
					y: 40,
					numFrames : 1,
					autoStart : false,
					autoReset : false,
					url: "images/page-5-dad-body.png",
					onPress : function()
					{
						var s = book.getContent(8, 0);
						s.play();
						s.dispatchEvent('PRESS');
					}
				}
			]
		},{
			background: {
				url: "images/page-5-right.jpg"	
			},
			sound: {
				startTime: PBS.KIDS.storybook.sounds['5.1'][0],
				endTime: PBS.KIDS.storybook.sounds['5.1'][1]
			},
			content: [
				{
					type: "Cycler",
					autoStart: false,
					playThrough : true,
					sound: {
						startTime: PBS.KIDS.storybook.sounds['crying2'][0],
						endTime: PBS.KIDS.storybook.sounds['crying2'][1]
					},
					content: [
						{
							type: "Sprite",
							x: 0,
							y: 34,
							numFrames : 1,
							playOnPress : true,
							autoStart : false,
							autoReset : true,
							url: "images/page-5-baby-1.png"
						},
						{
							type: "Sprite",
							x: 0,
							y: 34,
							numFrames: 2,
							frameDelay: 12,
							autoStart: true,
							autoReset: true,
							playBackwards : true,
							playCount : 4,
							url: "images/page-5-baby-2.png"
						}
					]
				},
				{
					type: "Cycler",
					autoStart: false,
					playThrough : true,
					sound: {
						startTime: PBS.KIDS.storybook.sounds['5.3'][0],
						endTime: PBS.KIDS.storybook.sounds['5.3'][1]
					},
					content: [
						{
							type: "Sprite",
							x: 12,
							y: 2,
							numFrames : 1,
							playOnPress : true,
							autoStart: false,
							url: "images/page-5-mom-1.png"
						},
						{
							type: "Sprite",
							x: 12,
							y: 2,
							numFrames: 2,
							frameDelay: 12,
							autoStart: true,
							autoReset: true,
							playBackwards : true,
							playCount : 4,
							url: "images/page-5-mom-2.png"
						}
					]
				},
				{
					type: "TextArea",
					sound: {
						startTime: PBS.KIDS.storybook.sounds['5.1'][0],
						endTime: PBS.KIDS.storybook.sounds['5.1'][1]
					},
					x: 4,
					y: 65,
					width: 80,
					align: "left",
					color: "#54331b",
					text: "Dad told me that babies cry because they're trying to tell us something. They can’t use words to tell us what they want – like I can. <font='Raphael-Icons'>s</font>"
				}
			]

		// page 6
		},{
			background: {
				url: "images/page-6-left.jpg"	
			},
			sound: {
				startTime: PBS.KIDS.storybook.sounds['6.1'][0],
				endTime: PBS.KIDS.storybook.sounds['6.1'][1]
			},
			content: [
				{
					type: "TextArea",
					sound: {
						startTime: PBS.KIDS.storybook.sounds['6.1'][0],
						endTime: PBS.KIDS.storybook.sounds['6.1'][1]
					},
					x: 10,
					y: 5,
					width: 65,
					align: "left",
					color: "#54331b",
					text: "There’s something else I can do that the baby can’t do – I can be a big helper in our family. <font='Raphael-Icons'>s</font>"
				},
				{
					type: "Sprite",
					x: -2,
					y: 34,
					numFrames: 1,
					playOnPress : false,
					autoStart : false,
					autoReset : true,
					url: "images/page-6-mom-1.png"

					// type : 'Cycler',
					// autoStart : false,
					// playThrough : false,
					// sound: {
					// 	startTime: PBS.KIDS.storybook.sounds['mom_strategy_big_helper'][0],
					// 	endTime: PBS.KIDS.storybook.sounds['mom_strategy_big_helper'][1],
					// 	volume : 0.6
					// },
					// content : [
					// 	{
					// 		type: "Sprite",
					// 		x: -2,
					// 		y: 34,
					// 		numFrames: 1,
					// 		playOnPress : false,
					// 		autoStart : false,
					// 		autoReset : true,
					// 		url: "images/page-6-mom-1.png"
					// 	},
					// 	{
					// 		type: "Sprite",
					// 		x: -2,
					// 		y: 34,
					// 		numFrames: 3,
					// 		frameDelay: 8,
					// 		autoStart: true,
					// 		autoReset : true,
					// 		playBackwards : true,
					// 		playCount : 14,
					// 		url: "images/page-6-mom-2.png"
					// 	}
					// ]
				},
				{
					type : 'Cycler',
					autoStart : false,
					playThrough : true,
					sound: {
						startTime: PBS.KIDS.storybook.sounds['6.1daniel_strategy'][0],
						endTime: PBS.KIDS.storybook.sounds['6.1daniel_strategy'][1]
					},
					content : [
						{
							type: "Sprite",
							x: 44,
							y: 55,
							numFrames : 1,
							playOnPress : true,
							autoStart : false,
							autoReset : true,
							url: "images/page-6-left-daniel-1.png"
						},
						{
							type: "Sprite",
							x: 44,
							y: 55,
							numFrames: 4,
							frameDelay: 8,
							autoStart: true,
							autoReset : true,
							playBackwards : true,
							playCount : 10,
							url: "images/page-6-left-daniel-2.png"
						}
					]
				},
				{
					type : 'Cycler',
					autoStart : false,
					playThrough : true,
					sound: {
						startTime: PBS.KIDS.storybook.sounds['Baby Coos06'][0],
						endTime: PBS.KIDS.storybook.sounds['Baby Coos06'][1]
					},
					content : [
						{
							type: "Sprite",
							x: 4.5,
							y: 64,
							numFrames : 1,
							playOnPress : true,
							autoStart : false,
							autoReset : true,
							url: "images/page-6-left-baby-1.png"
						},
						{
							type: "Sprite",
							x: 4.5,
							y: 64,
							numFrames: 2,
							frameDelay: 8,
							autoStart: true,
							autoReset : true,
							playBackwards : true,
							playCount : 6,
							url: "images/page-6-left-baby-2.png"
						}
					]
				}
			]
		},{
			background: {
				color: "#f9f7e2"
			},
			sound: {
				startTime: PBS.KIDS.storybook.sounds['6.2'][0],
				endTime: PBS.KIDS.storybook.sounds['6.2'][1]
			},
			content: [
				{
					type: "TextArea",
					sound: {
						startTime: PBS.KIDS.storybook.sounds['6.2'][0],
						endTime: PBS.KIDS.storybook.sounds['6.2'][1]
					},
					x: 15,
					y: 5,
					width: 65,
					align: "left",
					color: "#54331b",
					text: "I can help hold the baby. <font='Raphael-Icons'>s</font>"
				},
				{
					type: "Sprite",
					x: 0,
					y: 38,
					url: "images/page-6-dad-daniel.png"
				},
				{
					type : 'Cycler',
					autoStart : false,
					playThrough : true,
					sound: {
						startTime: PBS.KIDS.storybook.sounds['6.2dad_big_helper_singing'][0],
						endTime: PBS.KIDS.storybook.sounds['6.2dad_big_helper_singing'][1]
					},
					content : [
						{
							type: "Sprite",
							x: 10,
							y: 32,
							numFrames : 1,
							playOnPress : true,
							autoStart : false,
							autoReset : true,
							url: "images/page-6-dad-1.png"
						},
						{
							type: "Sprite",
							x: 10,
							y: 32,
							numFrames: 2,
							frameDelay: 8,
							autoStart: true,
							autoReset : true,
							playBackwards : true,
							playCount : 18,
							url: "images/page-6-dad-2.png"
						}
					]
				},
				{
					type: "Sprite",
					x: 41,
					y: 55,
					numFrames: 4,
					frameDelay: 8,
					autoReset : true,
					autoStart : false,
					playOnPress : true,
					playBackwards : true,
					playCount : 2,
					url: "images/page-6-right-baby.png",
					sound: {
						startTime: PBS.KIDS.storybook.sounds['Baby,Coo,Single 02-01'][0],
						endTime: PBS.KIDS.storybook.sounds['Baby,Coo,Single 02-01'][1]
					}
				}
			]

		// page 7
		},{
			background: {
				url: "images/page-7-left.jpg"	
			},
			sound: {
				startTime: PBS.KIDS.storybook.sounds['7.1'][0],
				endTime: PBS.KIDS.storybook.sounds['7.1'][1]
			},
			content: [
				{
					type : 'Cycler',
					autoStart : true,
					playThrough : true,
					canPlayAgain : true,
					onPress : function() {
						book.getContent(13, 0).cycle();
					},
					// stopAfterPlayThrough: true,
					content : [
						{
							type: "Sprite",
							x: 24,
							y: 17.75,
							numFrames : 1,
							playOnPress: true,
							autoStart: false,
							url: "images/page-7-diaper-left-1.png"
						},
						{
							type: "Sprite",
							x: 24,
							y: 17.75,
							numFrames: 7,
							frameDelay: 8,
							playOnPress: false,
							autoStart: true,
							url: "images/page-7-diaper-left-2.png"
						},
						{
							type: "Sprite",
							x: 24,
							y: 17.75,
							numFrames: 7,
							frameDelay: 8,
							playOnPress: false,
							autoStart: true,
							url: "images/page-7-diaper-left-3.png"
						},
						{
							type: "Sprite",
							x: 24,
							y: 17.75,
							numFrames: 5,
							frameDelay: 8,
							autoStart: true,
							playOnPress: true,
							autoReset : false,
							url: "images/page-7-diaper-left-4.png"
						}
					]
				},
				{
					type: "Sprite",
					x: 8,
					y: 55,
					url: "images/page-7-table-left.png"
				},
				{
					id: 'baby-left',
					playOtherIds: ['baby-right'],
					type: "Sprite",
					x: 81,
					y: 46,
					numFrames: 7,
					frameDelay: 8,
					autoStart: false,
					playOnPress : true,
					playBackwards : true,
					playCount : 2,
					url: "images/page-7-baby-left.png",
					sound : {
						startTime: PBS.KIDS.storybook.sounds['Baby Coos10'][0],
						endTime: PBS.KIDS.storybook.sounds['Baby Coos10'][1]
					}
				},
				{
					type: "TextArea",
					sound: {
						startTime: PBS.KIDS.storybook.sounds['7.1'][0],
						endTime: PBS.KIDS.storybook.sounds['7.1'][1]
					},
					x: 8,
					y: 74,
					width: 75,
					align: "left",
					color: "#54331b",
					text: "I can help when it’s time to change the baby’s diaper. <font='Raphael-Icons'>s</font>"
				}
			]
		},{
			background: {
				url: "images/page-7-right.jpg"	
			},
			content: [
				{
					type : 'Cycler',
					autoStart : true,
					playThrough : true,
					canPlayAgain : true,
					onPress : function() {
						book.getContent(12, 0).cycle();
					},
					// stopAfterPlayThrough: true,
					content : [
						{
							type: "Sprite",
							x: 0,
							y: 2,
							numFrames : 1,
							playOnPress: true,
							autoStart : false,
							url: "images/page-7-diaper-right-1.png"
						},
						{
							type: "Sprite",
							x: 0,
							y: 2,
							numFrames: 7,
							frameDelay: 8,
							playOnPress: false,
							autoStart: true,
							url: "images/page-7-diaper-right-2.png"
						},
						{
							type: "Sprite",
							x: 0,
							y: 2,
							numFrames: 7,
							frameDelay: 8,
							playOnPress: false,
							autoStart: true,
							url: "images/page-7-diaper-right-3.png"
						},
						{
							type: "Sprite",
							x: 0,
							y: 2,
							numFrames: 5,
							frameDelay: 8,
							autoStart: true,
							playOnPress: false,
							autoReset : false,
							url: "images/page-7-diaper-right-4.png"
						}
					]
				},
				{
					type: "Sprite",
					x: 0,
					y: 55,
					url: "images/page-7-table-right.png"
				},
				{
					id: 'baby-right',
					playOtherIds: ['baby-left'],
					type: "Sprite",
					x: 0,
					y: 46,
					numFrames: 7,
					frameDelay: 8,
					autoStart: false,
					playOnPress : true,
					playBackwards : true,
					playCount : 2,
					url: "images/page-7-baby-right.png",
					sound : {
						startTime: PBS.KIDS.storybook.sounds['Baby Coos10'][0],
						endTime: PBS.KIDS.storybook.sounds['Baby Coos10'][1]
					}
				}
			]

		// page 8
		},{
			background: {
				url: "images/page-8-left.jpg"	
			},
			sound: {
				startTime: PBS.KIDS.storybook.sounds['8.a.1'][0],
				endTime: PBS.KIDS.storybook.sounds['8.a.1'][1]
			},
			content: [
				{
					type: "Cycler",
					autoStart: true,
					playThrough : true,
					sound : 
					{
						startTime : PBS.KIDS.storybook.sounds['026969882-childrens-push-chair-pram-bugg'][0],
						endTime : PBS.KIDS.storybook.sounds['026969882-childrens-push-chair-pram-bugg'][1]
					},
					// onPress : function() 
					// {
					// 	setTimeout(function()
					// 	{
					// 		book.playSound(
					// 		{
					// 			startTime : PBS.KIDS.storybook.sounds['026969882-childrens-push-chair-pram-bugg'][0],
					// 			endTime : PBS.KIDS.storybook.sounds['026969882-childrens-push-chair-pram-bugg'][1]
					// 		})
					// 	}, 3800);
					// },
					content: [
						{
							type: "Sprite",
							x: 0,
							y: 24,
							numFrames: 5,
							frameDelay: 8,
							autoStart : true,
							url: "images/page-8-walk-1.png"
						},
						{
							type: "Sprite",
							x: 0,
							y: 24,
							numFrames: 5,
							frameDelay : 8,
							autoStart : true,
							url: "images/page-8-walk-2.png"
						},
						{
							type: "Sprite",
							x: 0,
							y: 24,
							numFrames: 5,
							frameDelay : 8,
							autoStart : true,
							url: "images/page-8-walk-3.png"
						},
						{
							type: "Sprite",
							x: 0,
							y: 24,
							numFrames: 3,
							frameDelay : 8,
							autoStart : true,
							playOnPress : true,
							url: "images/page-8-walk-4.png"
						},

						{
							type: "Sprite",
							x: 0,
							y: 24,
							numFrames: 5,
							frameDelay: 8,
							autoStart : false,
							playOnPress : true,
							url: "images/page-8-walk-5.png"
						},
						{
							type: "Sprite",
							x: 0,
							y: 24,
							numFrames: 5,
							frameDelay : 8,
							autoStart : true,
							url: "images/page-8-walk-6.png"
						},
						{
							type: "Sprite",
							x: 0,
							y: 24,
							numFrames: 5,
							frameDelay : 8,
							autoStart : true,
							url: "images/page-8-walk-7.png"
						},
						{
							type: "Sprite",
							x: 0,
							y: 24,
							numFrames: 5,
							frameDelay : 8,
							autoStart : true,
							autoReset : true,
							resetDelay : 60,
							url: "images/page-8-walk-8.png"
						}
					]
				},
				{
					type: "Sprite",
					x: 0,
					y: 80,
					numFrames: 1,
					url: "images/page-8-bush.png"
				},
				{
					type: "TextArea",
					sound: {
						startTime: PBS.KIDS.storybook.sounds['8.a.1'][0],
						endTime: PBS.KIDS.storybook.sounds['8.a.1'][1]
					},
					x: 5,
					y: 5,
					width: 80,
					align: "left",
					color: "#54331b",
					text: "I can help push the baby’s stroller. <font='Raphael-Icons'>s</font>"
				}
			]
		},{
			background: {
				color: "#f9f7e2"
			},
			sound: {
				startTime: PBS.KIDS.storybook.sounds['8.b.1'][0],
				endTime: PBS.KIDS.storybook.sounds['8.b.1'][1]
			},
			content: [
				{
					type: "Sprite",
					x: 42,
					y: 25,
					numFrames: 1,
					url: "images/page-8-dad.png",
					onPress : function()
					{
						book.getContent(15, 1).play(true);
						book.getContent(15, 2).play(true);
						book.playSound(
						{
							startTime : PBS.KIDS.storybook.sounds['coo-giggle'][0],
							endTime : PBS.KIDS.storybook.sounds['coo-giggle'][1]
						})
					}
				},
				{
					type: "Cycler",
					autoStart: false,
					playThrough : true,
					onPress : function()
					{
						book.getContent(15, 1).play(true);
						book.getContent(15, 2).play(true);
						book.playSound(
						{
							startTime : PBS.KIDS.storybook.sounds['coo-giggle'][0],
							endTime : PBS.KIDS.storybook.sounds['coo-giggle'][1]
						})
					},
					content: [
						{
							type: "Sprite",
							x: 41.5,
							y: 57,
							numFrames: 1,
							autoStart : false,
							playOnPress : true,
							url: "images/page-8-baby-1.png"
						},
						{
							type: "Sprite",
							x: 41.5,
							y: 57,
							numFrames: 7,
							frameDelay : 8,
							autoStart : true,
							autoReset : true,
							playBackwards : true,
							playCount : 2,
							url: "images/page-8-baby-2.png"
						}
					]
				},
				{
					type: "Cycler",
					autoStart: false,
					playThrough : true,
					onPress : function()
					{
						book.getContent(15, 1).play(true);
						book.getContent(15, 2).play(true);
						book.playSound(
						{
							startTime : PBS.KIDS.storybook.sounds['coo-giggle'][0],
							endTime : PBS.KIDS.storybook.sounds['coo-giggle'][1]
						})
					},
					content: [
						{
							type: "Sprite",
							x: 2,
							y: 48,
							numFrames: 1,
							autoStart : false,
							playOnPress : true,
							url: "images/page-8-dan-1.png"
						},
						{
							type: "Sprite",
							x: 2,
							y: 48,
							numFrames: 3,
							frameDelay : 8,
							autoStart : true,
							autoReset : true,
							playBackwards : true,
							playCount : 4,
							url: "images/page-8-dan-2.png"
						}
					]
				},
				{
					type: "TextArea",
					sound: {
						startTime: PBS.KIDS.storybook.sounds['8.b.1'][0],
						endTime: PBS.KIDS.storybook.sounds['8.b.1'][1]
					},
					x: 10,
					y: 5,
					width: 70,
					align: "left",
					color: "#54331b",
					text: "And I can play with the baby. <font='Raphael-Icons'>s</font>"
				}
			]

		// page 9
		},{
			background: {
				url: "images/page-9-left.jpg"	
			},
			content: [
				{
					type : 'Cycler',
					autoStart : false,
					playThrough : true,
					sound: {
						startTime: PBS.KIDS.storybook.sounds['mom_strategy_big_helper'][0],
						endTime: PBS.KIDS.storybook.sounds['mom_strategy_big_helper'][1],
						volume : 0.6
					},
					content: [
					{
						type: "Sprite",
						x: 25,
						y: 12,
						numFrames: 1,
						autoStart: false,
						autoReset: true,
						playOnPress: true,
						playBackwards : true,
						url: "images/page-9-mom-1.png"
					},
					{
						type: "Sprite",
						x: 25,
						y: 12,
						numFrames: 4,
						frameDelay: 6,
						autoStart: true,
						autoReset: true,
						playOnPress: false,
						playBackwards : true,
						playCount : 14,
						url: "images/page-9-mom-2.png"
					}]
				},
				{
					type : 'Cycler',
					autoStart : false,
					playThrough : true,
					sound: { 
						startTime: PBS.KIDS.storybook.sounds['crying2'][0],
						endTime: PBS.KIDS.storybook.sounds['crying2'][1]
					},
					content: [
					{
						type: "Sprite",
						x: 17,
						y: 44,
						numFrames: 1,
						autoStart: false,
						autoReset: true,
						playOnPress: true,
						playBackwards : true,
						url: "images/page-9-baby-1.png"
					},
					{
						type: "Sprite",
						x: 17,
						y: 44,
						numFrames: 3,
						frameDelay: 8,
						autoStart: true,
						autoReset: true,
						playOnPress: false,
						playBackwards : true,
						playCount : 8,
						url: "images/page-9-baby-2.png"
					}]
				}
			]
		},{
			background: {
				url: "images/page-9-right.jpg"	
			},
			sound: {
				startTime: PBS.KIDS.storybook.sounds['9.1'][0],
				endTime: PBS.KIDS.storybook.sounds['9.1'][1]
			},
			content: [
				{
					type: "TextArea",
					sound: {
						startTime: PBS.KIDS.storybook.sounds['9.1'][0],
						endTime: PBS.KIDS.storybook.sounds['9.1'][1]
					},
					x: 12,
					y: 5,
					width: 68,
					align: "left",
					color: "#54331b",
					text: "Baby Margaret is crying. She needs something. Maybe she needs me - her big brother! <font='Raphael-Icons'>s</font>"
				}
			]

		// page 10
		},{
			background: {
				url: "images/page-10-left.jpg"	
			},
			content: [
				{
					type: "Sprite",
					x: 6.5,
					y: 43,
					numFrames: 4,
					frameDelay: 8,
					autoReset: false,
					autoStart : false,
					playOnPress : true,
					playBackwards : true,
					playCount : 2,
					url: "images/page-10-baby.png",
					sound : {
						startTime: PBS.KIDS.storybook.sounds['Baby,Coo,Single 02-01'][0],
						endTime: PBS.KIDS.storybook.sounds['Baby,Coo,Single 02-01'][1]
					}
				}
			]
		},{
			background: {
				url: "images/page-10-right.jpg"	
			},
			sound: {
				startTime: PBS.KIDS.storybook.sounds['10.1'][0],
				endTime: PBS.KIDS.storybook.sounds['10.1'][1]
			},
			content: [
				{
					type: "Cycler",
					autoStart: false,
					playThrough : true,
					playAfterDelay : 1,
					sound : {
						startTime: PBS.KIDS.storybook.sounds['10.goodnight_sleep_tight'][0],
						endTime: PBS.KIDS.storybook.sounds['10.goodnight_sleep_tight'][1]
					},
					content: [
						{
							type: "Sprite",
							x: 0,
							y: 24,
							numFrames: 6,
							frameDelay: 8,
							url: "images/page-10-daniel-1.png"
						},
						{
							type: "Sprite",
							x: 0,
							y: 24,
							numFrames: 1,
							autoStart : true,
							playOnPress : true,
							url: "images/page-10-daniel-2.png"
						},
						{
							type: "Sprite",
							x: 0,
							y: 24,
							numFrames: 9,
							frameDelay: 10,
							autoReset: true,
							autoStart : false,
							resetToIndex : 1,
							playBackwards : true,
							playCount : 4,
							url: "images/page-10-daniel-3.png"
						}
					]
				},
				{
					type: "TextArea",
					sound: {
						startTime: PBS.KIDS.storybook.sounds['10.1'][0],
						endTime: PBS.KIDS.storybook.sounds['10.1'][1]
					},
					x: 5,
					y: 5,
					width: 80,
					align: "left",
					color: "#54331b",
					text: ["I show her the book I used to like when I was little. And then I sing her a lullaby.", "She really liked that. And I did too! <font='Raphael-Icons'>s</font>"]
				}
			]

		// page 11
		},{
			background: {
				url: "images/page-11-left.jpg"	
			},
			sound: {
				startTime: PBS.KIDS.storybook.sounds['11.1'][0],
				endTime: PBS.KIDS.storybook.sounds['11.1'][1]
			},
			content: [
				{
					type: "TextArea",
					sound: {
						startTime: PBS.KIDS.storybook.sounds['11.1'][0],
						endTime: PBS.KIDS.storybook.sounds['11.1'][1]
					},
					x: 6,
					y: 10,
					width: 75,
					align: "left",
					color: "#54331b",
					text: "When Baby Margaret is sleeping, I can have special time – with just Mom and Dad. I like that too. <font='Raphael-Icons'>s</font>"
				},
				{
					type: "Sprite",
					x: 0,
					y: 41.75,
					numFrames: 6,
					frameDelay: 8,
					autoStart : false,
					playOnPress : true, 
					playBackwards : true,
					playCount : 2,
					url: "images/page-11-baby.png",
					sound : {
						startTime: PBS.KIDS.storybook.sounds['Baby Coos10'][0],
						endTime: PBS.KIDS.storybook.sounds['Baby Coos10'][1],
						volume : 0.5
					}
				},
			]
		},{
			background: {
				url: "images/page-11-right.jpg"	
			},
			content: [
				{
					type: "Sprite",
					x: 1,
					y: 10,
					numFrames: 8,
					frameDelay: 8,
					autoStart: false,
					autoReset: true,
					playOnPress: true,
					resetDelay : 60,
					playBackwards : true,
					playCount : 2,
					onPress : function()
					{
						book.getContent(21, 0).reset(true);
					},
					url: "images/page-11-hug.png",
						sound: {
						startTime: PBS.KIDS.storybook.sounds['11.2mom_dad_and_i_love_you'][0],
						endTime: PBS.KIDS.storybook.sounds['11.2mom_dad_and_i_love_you'][1]
					}
				},
				{
					type: "Sprite",
					x: 2,
					y: 46,
					onPress : function()
					{
						var s = book.getContent(21, 0);
						s.reset(true);
						s.play();
						s.dispatchEvent('PRESS');
					},
					url: "images/page-11-hug-hit1.png"
				},
				{
					type: "Sprite",
					x: 36,
					y: 10,
					onPress : function()
					{
						var s = book.getContent(21, 0);
						s.reset(true);
						s.play();
						s.dispatchEvent('PRESS');
					},
					url: "images/page-11-hug-hit2.png"
				}
				// {
				// 	type : 'Cycler',
				// 	autoStart : false,
				// 	playThrough : true,
				// 	sound: {
				// 		startTime: PBS.KIDS.storybook.sounds['11.2mom_dad_and_i_love_you'][0],
				// 		endTime: PBS.KIDS.storybook.sounds['11.2mom_dad_and_i_love_you'][1]
				// 	},
				// 	content: [
				// 	{
				// 		type: "Sprite",
				// 		x: 1,
				// 		y: 10,
				// 		numFrames: 1,
				// 		autoStart: false,
				// 		autoReset: false,
				// 		playOnPress: true,
				// 		url: "images/page-11-hug-1.png"
				// 	},
				// 	{
				// 		type: "Sprite",
				// 		x: 1,
				// 		y: 10,
				// 		numFrames: 1,
				// 		frameDelay: 8,
				// 		autoStart: true,
				// 		autoReset: false,
				// 		playOnPress: false,
				// 		playBackwards : true,
				// 		playCount : 10,
				// 		url: "images/page-11-hug-2.png"
				// 	},
				// 	{
				// 		type: "Sprite",
				// 		x: 1,
				// 		y: 10,
				// 		numFrames: 2,
				// 		frameDelay: 8,
				// 		autoStart: true,
				// 		autoReset: false,
				// 		playOnPress: false,
				// 		playBackwards : true,
				// 		playCount : 8,
				// 		url: "images/page-11-hug-3.png"
				// 	},
				// 	{
				// 		type: "Sprite",
				// 		x: 1,
				// 		y: 10,
				// 		numFrames: 7,
				// 		frameDelay: 8,
				// 		autoStart: true,
				// 		autoReset: true,
				// 		playOnPress: false,
				// 		resetDelay : 60,
				// 		url: "images/page-11-hug-4.png"
				// 	}]
				// }
			]

		// page 12
		},{
			background: {
				url: "images/page-12-left.jpg"	
			},
			content: [
				{
					type : 'Cycler',
					autoStart : false,
					playThrough : true,
					sound : {
						startTime: PBS.KIDS.storybook.sounds['Baby Coos12'][0],
						endTime: PBS.KIDS.storybook.sounds['Baby Coos12'][1]
					},
					content: [
					{
						type: "Sprite",
						x: 38,
						y: 46,
						numFrames: 1,
						frameDelay: 6,
						autoStart: false,
						autoReset: false,
						playOnPress: true,
						url: "images/page-12-baby-1.png"
					},
					{
						type: "Sprite",
						x: 38,
						y: 46,
						numFrames: 2,
						frameDelay: 6,
						autoStart: true,
						autoReset: true,
						playOnPress: false,
						playBackwards : true,
						playCount : 6,
						url: "images/page-12-baby-2.png"
					}]
				}
			]
		},{
			background: {
				url: "images/page-12-right.jpg"	
			},
			sound: {
				startTime: PBS.KIDS.storybook.sounds['12.1'][0],
				endTime: PBS.KIDS.storybook.sounds['12.1'][1]
			},
			content: [
				{
					type: "TextArea",
					sound: {
						startTime: PBS.KIDS.storybook.sounds['12.1'][0],
						endTime: PBS.KIDS.storybook.sounds['12.1'][1]
					},
					x: 8,
					y: 4,
					width: 75,
					align: "left",
					color: "#54331b",
					text: "I'm so glad you got to meet baby Margaret. Our family is bigger now and I want to be the best big brother that I can be. Ugga Mugga. <font='Raphael-Icons'>s</font>"
				},
				{
					type: "Sprite",
					x: 0,
					y: 30,
					numFrames: 7,
					frameDelay: 6,
					autoStart: false,
					autoReset: false,
					playOnPress: true,
					playBackwards : true,
					playCount : 2,
					playAfterDelay : 9.5,
					url: "images/page-12-daniel.png",
					sound : 
					{
						startTime : PBS.KIDS.storybook.sounds['12_uggamugga'][0],
						endTime : PBS.KIDS.storybook.sounds['12_uggamugga'][1]
					}
				}
			]
		}
	]
};