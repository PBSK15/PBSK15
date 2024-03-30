//  ------------------------------------------------------------------
//  config-book.js
//
//  Copyright 2012 PBS KIDS Interactive. All Rights Reserved.

PBS.KIDS.storybook.config = {
	background: {
	},
	audio: {
		enabled: true,
		path: "http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/audio/",
		name: "babysitter"	
	},
	book: {
		font: "Georgia",
		startOnPage: 0,
		pageWidth: 768,
		pageHeight: 1024,
		previousPageButton: {
			url: "http://www-tc.pbskids.org/daniel/stories/book-shell/images/prev-page-button.png",
			x: 1,
			y: 50,
			width: "85px",
			height: "85px"
		},
		nextPageButton: {
			url: "http://www-tc.pbskids.org/daniel/stories/book-shell/images/next-page-button.png",
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
			url: "http://www-tc.pbskids.org/daniel/stories/book-shell/images/left-page-bkgrnd.png"	
		},
		evenPageBackground: {
			color: "#f9f9f9"
		},
		pageTurnDuration: 1000,
		pageSlideDuration: 200
	},
	cover: {
		background: {
			url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/cover.jpg"
		},
		sound: {
			startTime: 1.181,
			endTime: 3.269,
			loop: false
		},
		content: [
			{
				type: "Sprite",
				sound: {
					startTime: 1.181,
					endTime: 3.269,
					loop: false
				},
				x: 0,
				y: 0,
				width: 100,
				height: 100
			}
		]
	},
	pages: [
		{
			background: {
				url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-1-left.jpg"	
			},
			sound: {
				startTime: 3.269,
				endTime: 10.757,
				loop: false
			},
			content: [
				{
					type: "Sprite",
					x: 22,
					y: 15,
					numFrames: 10,
					frameDelay: 10,
					autoStart: false,
					autoReset: true,
					resetDelay: 1,
					playOnPress: true,
					url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-1-tigey.png",
					sound: {
						startTime: 95,
						endTime: 96.6,
						loop: false
					}
				}
			]
		},{
			background: {
				url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-1-right.jpg"	
			},
			content: [
				{
					type: "TextArea",
					sound: {
						startTime: 3.269,
						endTime: 10.757,
						loop: false
					},
					x: 5,
					y: 65,
					width: 75,
					align: "left",
					color: "#54331b",
					text: "Hi neighbor! It's me, Daniel Tiger. Come on in! I'm playing peek-a-boo with Tigey. <font='Raphael-Icons'>s</font>"
				},
				{
					type: "Sprite",
					x: 12,
					y: 36,
					numFrames: 8,
					frameDelay: 24,
					autoStart: false,
					autoReset: true,
					resetDelay: 1,
					playOnPress: true,
					playAfterDelay: 3,
					url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-1-trolley.png",
					sound: {
						startTime: 96.9,
						endTime: 98.3,
						loop: false
					}
				}
			]
		},{
			background: {
				color: "#ffffff"		
			},
			sound: {
				startTime: 10.757,
				endTime: 16.517,
				loop: false
			},
			content: [
				{
					type: "TextArea",
					sound: {
						startTime: 10.757,
						endTime: 16.517,
						loop: false
					},
					x: 5,
					y: 5,
					width: 75,
					align: "left",
					color: "#54331b",
					text: "My Mom and Dad are going out dancing and Prince Tuesday's here to be my babysitter. <font='Raphael-Icons'>s</font>"
				},{
					type: "Sprite",
					x: 0,
					y: 30,
					width: 94.5,
					height: 65.615,
					numFrames: 10,
					frameDelay: 18,
					autoStart: false,
					autoReset: true,
					playOnPress: true,
					url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-2-parents.png",
					sound: {
						startTime: 150, /*148*/
						endTime: 153.94,
						loop: false
					}
				}
			]
		},{
			background: {
				url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-2-right.jpg"
			},
			content: [
				{
					type: "Sprite",
					x: 12,
					y: 38,
					numFrames: 7,
					frameDelay: 10,
					autoStart: false,
					autoReset: true,
					playOnPress: true,
					url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-2-daniel.png",
					sound: {
						startTime: 98.829,
						endTime: 100.3,
						loop: false
					}
				}, {
					type: "Sprite",
					x: 43,
					y: 30,
					numFrames: 6,
					frameDelay: 10,
					autoStart: false,
					autoReset: false,
					playOnPress: true,
					url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-2-prince.png",
					sound: {
						startTime: 101.040,
						endTime: 102.312,
						loop: false
					}
				}
			]
		},{
			background: {
				url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-3-left.jpg"	
			},
			sound: {
				startTime: 16.517,
				endTime: 25.709,
				loop: false
			},
			content: [
				{
					type: "Sprite",
					x: 0,
					y: 27,
					numFrames: 7,
					frameDelay: 10,
					autoStart: false,
					autoReset: true,
					playOnPress: true,
					url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-3-daniel-dad.png",
					sound: {
						startTime: 108.366,
						endTime: 111.75,
						loop: false
					}
				}
			]
		},{
			background: {
				url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-3-right.jpg"	
			},
			content: [
				{
					type: "TextArea",
					sound: {
						startTime: 16.517,
						endTime: 25.709,
						loop: false
					},
					x: 5,
					y: 4,
					width: 78,
					align: "left",
					color: "#54331b",
					text: "I wish my Mom and Dad were staying home with me. But they told me, <i>Grown ups come back</i>. <font='Raphael-Icons'>s</font>"
				},
				{
					type: "Sprite",
					x: 0,
					y: 32,
					numFrames: 10,
					frameDelay: 10,
					autoStart: false,
					autoReset: true,
					playOnPress: true,
					url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-3-mom.png",
					sound: {
						startTime: 130.957,
						endTime: 138.99,
						loop: false
					}
				}
			]
		},{
			background: {
				color: "#ffffff"
			},
			sound: {
				startTime: 25.709,
				endTime: 34.229,
				loop: false
			},
			content: [
				{
					type: "Sprite",
					x: -5,
					y: 12,
					url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-4-daniel-prince.png",
					sound: {
						startTime: 145.016,
						endTime: 146.672,
						loop: false
					}
				}
			]
		},{
			background: {
				url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-4-right.jpg"	
			},
			content: [
				{
					type: "TextArea",
					sound: {
						startTime: 25.709,
						endTime: 34.229,
						loop: false
					},
					x: 11,
					y: 5,
					width: 68,
					align: "left",
					color: "#54331b",
					text: "I play jungle with Prince Tuesday. We pretend that we're in a real jungle hopping from stone to stone. <font='Raphael-Icons'>s</font>"
				},
				{
					type: "Cycler",
					autoStart: false,
					content: [
						{
							type: "Sprite",
							x: 6,
							y: 38,
							numFrames: 2,
							frameDelay: 10,
							autoStart: false,
							autoReset: false,
							url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-4-hop-1.png"
						},
						{
							type: "Sprite",
							x: 6,
							y: 38,
							numFrames: 2,
							frameDelay: 10,
							autoStart: false,
							autoReset: false,
							playOnPress: true,
							url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-4-hop-2.png"
						},
						{
							type: "Sprite",
							x: 6,
							y: 38,
							numFrames: 3,
							frameDelay: 10,
							autoStart: false,
							autoReset: false,
							playOnPress: true,
							url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-4-hop-3.png"
						},
						{
							type: "Sprite",
							x: 6,
							y: 38,
							numFrames: 2,
							frameDelay: 10,
							autoStart: false,
							autoReset: false,
							playOnPress: true,
							url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-4-hop-4.png"
						},
						{
							type: "Sprite",
							x: 6,
							y: 38,
							numFrames: 2,
							frameDelay: 10,
							autoStart: false,
							autoReset: false,
							playOnPress: true,
							url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-4-hop-5.png"
						},
						{
							type: "Sprite",
							x: 6,
							y: 38,
							numFrames: 1,
							frameDelay: 10,
							autoStart: false,
							autoReset: false,
							playOnPress: true,
							url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-4-hop-6.png"
						}
					]
				}
			]
		},{
			background: {
				url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-5-left.jpg"	
			},
			sound: {
				startTime: 34.229,
				endTime: 37.565,
				loop: false		
			},
			content: [
				{
					type: "TextArea",
					sound: {
						startTime: 34.229,
						endTime: 37.565,
						loop: false
					},
					x: 4,
					y: 10,
					width: 80,
					align: "left",
					color: "#54331b",
					text: "We even made a pretend cave. <font='Raphael-Icons'>s</font>"
				}
			]
		},{
			background: {
				url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-5-right.jpg"	
			},
			content: [
				{
					type: "Cycler",
					autoStart: false,
					content: [
						{
							type: "Sprite",
							x: 1,
							y: 13,
							url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-5-cave-open.png"
						},
						{
							type: "Sprite",
							x: 1,
							y: 13,
							numFrames: 6,
							frameDelay: 12,
							autoStart: false,
							autoReset: false,
							playOnPress: true,
							url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-5-daniel.png"
						}
					]
				}
			]
		},{
			background: {
				url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-6-left.jpg"	
			},
			sound: {
				startTime: 37.565,
				endTime: 47.813,
				loop: false
			},
			content: [
				{
					type: "TextArea",
					sound: {
						startTime: 37.565,
						endTime: 47.813,
						loop: false
					},
					x: 10,
					y: 5,
					width: 65,
					align: "left",
					color: "#54331b",
					text: "I don't like to stop playing, but Prince Tuesday says it's time for bed. He lets me pick my favorite Trolley pajamas, just like Mom and Dad do. <font='Raphael-Icons'>s</font>"
				}
			]
		},{
			background: {
				url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-6-right.jpg"	
			},
			content: [
				{
					type: "Cycler",
					autoStart: true,
					content: [
						{
							type: "Sprite",
							x: 0,
							y: 53,
							url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-6-daniel.png"
						},
						{
							type: "Sprite",
							x: 0,
							y: 53,
							url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-6-daniel-pjs.png"
						}
					]
				}
			]
		},{
			background: {
				url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-7-left.jpg"	
			},
			sound: {
				startTime: 47.813,
				endTime: 53.861,
				loop: false
			},
			content: [
				
			]
		},{
			background: {
				url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-7-right.jpg"	
			},
			content: [
				{
					type: "Cycler",
					autoStart: true,
					sound: {
						startTime: 118.332,
						endTime: 123.674,
						loop: false
					},
					content: [
						{
							type: "Sprite",
							x: 4,
							y: 0,
							numFrames: 6,
							frameDelay: 10,
							autoStart: true,
							loop: true,
							url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-7-daniel.png"
						},
						{
							type: "Sprite",
							x: 4,
							y: 0,
							numFrames: 6,
							frameDelay: 24,
							autoStart: false,
							autoReset: false,
							loop: false,
							url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-7-daniel.png"
						},
					]
				},
				{
					type: "TextArea",
					sound: {
						startTime: 47.813,
						endTime: 53.861,
						loop: false
					},
					x: 12,
					y: 76,
					width: 68,
					align: "left",
					color: "#54331b",
					text: "Then I flush, wash and brush so I'm all ready for bed. <font='Raphael-Icons'>s</font>"
				}
			]
		},{
			background: {
				url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-8-left.jpg"	
			},
			sound: {
				startTime: 53.861,
				endTime: 64.997,
				loop: false
			},
			content: [
				{
					type: "TextArea",
					sound: {
						startTime: 53.861,
						endTime: 64.997,
						loop: false
					},
					x: 12,
					y: 10,
					width: 68,
					align: "left",
					color: "#54331b",
					text: ["I'm all ready for bed, except for one really important thing. Where's Tigey? I wish my Mom and Dad were here. <font='Raphael-Icons'>s</font>"]
				}
			]
		},{
			background: {
				url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-8-right.jpg"	
			},
			content: [
				{
					type: "Sprite",
					x: 0,
					y: 15,
					numFrames: 7,
					frameDelay: 10,
					autoStart: false,
					autoReset: false,
					playOnPress: true,
					url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-8-daniel.png"
				}
			]
		},{
			background: {
				url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-9-left.jpg"	
			},
			sound: {
				startTime: 64.997,
				endTime: 73.997,
				loop: false
			},
			content: [
				{
					type: "TextArea",
					sound: {
						startTime: 64.997,
						endTime: 73.997,
						loop: false
					},
					x: 12,
					y: 65,
					width: 68,
					align: "left",
					color: "#54331b",
					text: "Prince Tuesday helps me look for Tigey. What were we doing? Oh, we were playing in the cave! <font='Raphael-Icons'>s</font>"
				},
				{
					type: "Sprite",
					x: 35,
					y: 15,
					url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-9-hotspot.png"
				}
			]
		},{
			background: {
				url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-9-right.jpg"	
			},
			content: [
				{
					type: "Sprite",
					x: 40,
					y: 5,
					url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-9b-hotspot.png",
					sound: {
						startTime: 160.736,
						endTime: 166.360,
						loop: false
					}
				}
			]
		},{
			background: {
				url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-10-left.jpg"	
			},
			sound: {
				startTime: 156.60,
				endTime: 160,
				loop: false
			},
			content: []
		},{
			background: {
				url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-10-right.jpg"	
			},
			content: [
				{
					type: "Cycler",
					autoStart: true,
					content: [
						{
							type: "Sprite",
							x: 12,
							y: 29,
							url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-10-tigey-visible.png"
						},
						{
							type: "Sprite",
							x: 12,
							y: 29,
							url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-10-tigey-hidden.png"
						}
					]
				}, {
					type: "TextArea",
					sound: {
						startTime: 156.60,
						endTime: 160,
						loop: false
					},
					x: 25,
					y: 5,
					width: 40,
					align: "left",
					color: "#54331b",
					text: "There's Tigey! <font='Raphael-Icons'>s</font>"
				}
			]
		},{
			background: {
				url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-11-left.jpg"	
			},
			sound: {
				startTime: 75.989,
				endTime: 84.677,
				loop: false
			},
			content: [
				{
					type: "TextArea",
					sound: {
						startTime: 75.989,
						endTime: 84.677,
						loop: false
					},
					x: 12,
					y: 10,
					width: 68,
					align: "left",
					color: "#54331b",
					text: "Now I can go to sleep. Prince Tuesday sings me a goodnight song, like Mom and Dad do. <font='Raphael-Icons'>s</font>"
				}
			]
		},{
			background: {
				url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-11-right.jpg"	
			},
			content: [
				{
					type: "Sprite",
					x: 0,
					y: 31,
					numFrames: 8,
					frameDelay: 24,
					autoStart: false,
					autoReset: true,
					playOnPress: true,
					url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-11-prince.png",
					sound: {
						startTime: 124.154,
						endTime: 129.938,
						loop: false
					}
				}
			]
		},{
			background: {
				url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-12-left.jpg"	
			},
			sound: {
				startTime: 84.8,
				endTime: 87.9,
				loop: false
			},
			content: [
				{
					type: "Sprite",
					x: 17,
					y: 20,
					numFrames: 6,
					frameDelay: 12,
					autoStart: false,
					autoReset: true,
					playOnPress: true,
					url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-12-dad.png",
					sound: {
						startTime: 140,
						endTime: 141.3,
						loop: false
					}
				}
			]
		},{
			background: {
				url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-12-right.jpg"	
			},
			content: [
				{
					type: "TextArea",
					sound: {
						startTime: 84.8,
						endTime: 87.9,
						loop: false
					},
					x: 8,
					y: 4,
					width: 75,
					align: "left",
					color: "#54331b",
					text: "Mom and Dad come home, just like they said they would. <font='Raphael-Icons'>s</font>"
				},{
					type: "Sprite",
					x: 4,
					y: 25.5,
					numFrames: 8,
					frameDelay: 12,
					autoStart: false,
					autoReset: true,
					playOnPress: true,
					url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-12-mom.png",
					sound: {
						startTime: 130.957,
						endTime: 138.853,
						loop: false
					}
				}
			]
		},{
			background: {
				url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-13-left.jpg"	
			},
			sound: {
				startTime: 88.181,
				endTime: 94.805,
				loop: false
			},
			content: [
				{
					type: "TextArea",
					sound: {
						startTime: 88.181,
						endTime: 94.805,
						loop: false
					},
					x: 10,
					y: 20,
					width: 65,
					align: "left",
					color: "#54331b",
					text: ["Goodnight Tigey.", "Goodnight neighbor.", "Ugga Mugga. <font='Raphael-Icons'>s</font>"]
				}
			]
		},{
			background: {
				url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-13-right.jpg"	
			},
			content: [
				{
					type: "Sprite",
					x: -3,
					y: 15,
					numFrames: 6,
					frameDelay: 24,
					autoStart: false,
					autoReset: false,
					playOnPress: true,
					url:"http://www-tc.pbskids.org/daniel/stories/daniels-babysitter/images/page-13-daniel.png",
					sound: {
						startTime: 141.371,
						endTime: 143.867,
						loop: false
					}
				}
			]
		}
	]
};