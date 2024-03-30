//  ------------------------------------------------------------------
//  book.js
//
//  Copyright 2012 PBS KIDS Interactive. All Rights Reserved.

PBS.KIDS.storybook.config = {
	background: {
	},
	audio: {
		enabled: true,
		path: "audio/",
		name: "daniel-tiger_book-1_audio"	
	},
	book: {
		font: "Georgia",
		startOnPage: 0 * 2,
		pageWidth: 768,//576,
		pageHeight: 1024,//768,
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
			url: "images/Book1-Cover_v6.jpg"
		},
		sound: {
			startTime: 1,
			endTime: 3.523,
			loop: false
		},
		content: [
			{
				type: "Sprite",
				sound: {
					startTime: 1,
					endTime: 3.523,
					loop: false
				},
				x: 0,
				y: 0,
				width: 100,
				height: 100,
				onPress : function()
				{
					setTimeout(book.nextPage, 2600);
				}
			}			
		]
	},
	pages: [
	  {
		background: {
			url: "images/page1_bkgrnd.jpg"
		},
		sound: {
			startTime: 6,
			endTime: 14.952,
			loop: false
	    },
		content: [
			{
				type: "Sprite",
				sound: {
					startTime: 110,
					endTime: 112.5,
					loop: false
				},
				x: -25,
				y: 7,
				width: 125,
				height: 96.5, // IE 9 needs a height. 
				numFrames: 9,  
				frameDelay: 4, 
				playOnPress: true,
				autoStart: false,
				autoReset: true,
				url: "images/page1_dad-and-daniel.png"
			},
			{
				type: "TextArea",
				sound: {
					startTime: 6,
					endTime: 14.952,
					loop: false
				},
				x: 10,
				y: 66,
				width: 76,
				align: "left",
				color: "#54331b",
				text: "Hi neighbor! It's me, Daniel Tiger. Dad and I are checking our mailbox, and we got a letter today! <font='Raphael-Icons'>s</font>"
			}
		]
	  }, // End Page 1
	  {
		background: {
			url: "images/page2_bkgrnd.jpg"
		},
		content: [
			{
				type: "Cycler",
				autoStart: false,
				sound: {
					startTime: 180,
					endTime: 180.815,
					loop: false
				},
				content: [
					{
						type: "Sprite",
						x: 0,
						y: 30,
						width: 100,
						height: 82.6, // IE 9 needs a height. 
						autoStart: false,
						numFrames: 5,  
						frameDelay: 4, 
						url: "images/page2_mailbox_open.png"
					},
					{
						type: "Sprite",
						x: 0,
						y: 30,
						width: 100,
						height: 82.6, // IE 9 needs a height. 
						autoStart: false,
						numFrames: 5,  
						frameDelay: 4, 
						url: "images/page2_mailbox_close.png"
					}
				]
			}
		]
	  },  // End Page 2
	  {
	  	background: {
			url: "images/page3_bkgrnd.jpg"
		},
		sound: {
			startTime: 18,
			endTime: 25.345,
			loop: false
	    },
		content: [
			{
				type: "Sprite",
				sound: {
					startTime: 125.4,
					endTime: 127.5,
					loop: false
				},
				x: -4,
				y: 20.6,
				width: 105,
				height: 96.7, // IE 9 needs a height. 
				playOnPress: true,
				autoStart: false,
				autoReset: true,
				resetDelay: 60,
			    numFrames: 15,  
			    frameDelay: 4,
				url: "images/page3_daniel.png"
			},
			{
				type: "TextArea",
				sound: {
					startTime: 18,
					endTime: 25.345,
					loop: false
			    },
				x: 7,
				y: 71,
				width: 62,
				align: "left",
				color: "#54331b",
				text: "It's a letter from my grandpa, Grandp&egrave;re. Dad is so happy when he gets a letter. <font='Raphael-Icons'>s</font>"
			}
		]
		  
	  }, // End Page 3
	  {
		background: {
			url: "images/page4_bkgrnd.jpg"
		},
		content: [
			{
				type: "Sprite",
				sound: {
					startTime: 113,
					endTime: 124.4,
					loop: false
				},
				x: 7,
				y: 12.5,
				width: 50,
				height: "auto",
				playOnPress: true,
				autoStart: false,
				autoReset: true,
			    numFrames: 38,  
			    frameDelay: 6, 
			    resetDelay: 240,
				url: "images/page4_dad-face.png"
			},
			{
				type: "Sprite",
				sound: {
					startTime: 186.5,
					endTime: 189.95,
					loop: false
				},
				x: 43,
				y: 51,
				width: 43,
				height: "auto",
				playOnPress: true,
				autoStart: true,
				autoReset: true,
			    numFrames: 14,  
			    frameDelay: 10,
				url: "images/page4_boat.png"
			}
			
		]	  
	  }, // End Page 4
	  {
	    background: {
			url: "images/page5_bkgrnd.jpg"
		},
		sound: {
			startTime: 28,
			endTime: 39.5,
			loop: false
		},
		content: [
			{
				type: "Sprite",
				sound: {
					startTime: 127.5,
					endTime: 134.114,
					loop: false
				},
				x: -7,
				y: 7,
				width: 159,
				height: 103.25, // IE 9 needs a height. 
				numFrames: 9,  
				frameDelay: 4, 
				playOnPress: true,
				autoStart: false,
				autoReset: true,
				resetDelay: 210,
				url: "images/page5_mom-and-daniel.png"
			},
			{
				type: "TextArea",
				sound: {
					startTime: 28,
					endTime: 39.5,
					loop: false
			    },
				x: 10,
				y: 67,
				width: 68,
				align: "left",
				color: "#54331b",
				size: 44,
				text: "I have an idea. I want to make something for my dad, too, because <i>making something is one way to say &ldquo;I love you.&rdquo;</i> <font='Raphael-Icons'>s</font>"
			}
		]
	  }, // End Page 5
	  {
		background: {
			url: "images/page6_background.jpg"
		},
		content: [
			{
				type: "Sprite",
				sound: {
					startTime: 40.000,
					endTime: 43.355,
					loop: false
				},
				x: 47,
				y: 8,
				width: 52,
				height: 26
			},
			{
				type: "Sprite",
				sound: {
					startTime: 40.000,
					endTime: 43.355,
					loop: false
				},
				x: 13,
				y: 25,
				width: 65,
				height: 53.25, // IE 9 needs a height. 
				numFrames: 11,  
				frameDelay: 10, 
				playOnPress: true,
				autoStart: false,
				autoReset: false,
				url: "images/page6_heart.png"
			}
	
		]
	  },  // End Page 6
	  {
		background: {
			url: "images/page7_bkgrnd.jpg"
		},
		sound: {
			startTime: 44,
			endTime: 51.674,
			loop: false
	    },
		content: [
			{
				type: "Sprite",
				x: 0,
				y: 0,
				width: 100,
				height: "auto",
				url: "images/page7_foliage.png"
			},
			{
				type: "TextArea",
				sound: {
					startTime: 44,
					endTime: 51.674,
					loop: false
			    },
				x: 14,
				y: 60,
				width: 65,
				align: "left",
				color: "#54331b",
				size: 44,
				text: [
					"Now Mom will help me mail it.",
					"Oh, Dad will be so surprised!",
					"Come along to the post office with us. <font='Raphael-Icons'>s</font>"
				]
			}
		]
	  },  // End Page 7
	  {
		background: {
			url: "images/page8_bkgrnd.jpg"
		},
		content: [
			{
				type: "Sprite",
				sound: {
					startTime: 134.5,
					endTime: 143.752,
					loop: false
				},
				x: 0,
				y: 33,
				width: 100,
				height: 52.63, // IE 9 needs a height. 
				numFrames: 16,  
				frameDelay: 6, 
				playOnPress: true,
				autoStart: false,
				autoReset: false,
				url: "images/page8_trolly-v2.png"
			},
			{
				type: "Sprite",
				x: 0,
				y: 0,
				width: 100,
				height: "auto",
				url: "images/page8_foliage.png"
			}
			
		]
	  }, // End Page 8
	  {
		background: {
			url: "images/page9_bkgrnd.jpg"
		},
		sound: {
			startTime: 54,
			endTime: 61.752,
			loop: false
		},
		content: [
			{
				type: "TextArea",
				sound: {
					startTime: 54,
					endTime: 61.752,
					loop: false
				},
				x: 5,
				y: 70,
				width: 82,
				align: "left",
				color: "#54331b",
				size: 44,
				text: "Look at all the things in the post office. There are so many packages. What do you think might be inside of them? <font='Raphael-Icons'>s</font>"
			}
			
		]
	  },  // End Page 9
	  {
		background: {
			url: "images/page10_bkgrnd.jpg"
		},
		content: [
			{
				type: "Cycler",
				autoStart: false,
				sound: {
					startTime: 182,
					endTime: 183.302,
					loop: false
				},
				content: [
					{
						type: "Sprite",
						autoStart: false,
						x: 29,
						y: 7,
						width: 68,
						height: 47.42, // IE 9 needs a height.
						numFrames: 15,  
						frameDelay: 3, 
						url: "images/page10_socks-open.png"
					},
					{
						type: "Sprite",
						autoStart: false,
						x: 29,
						y: 7,
						width: 68,
						height: 47.42, // IE 9 needs a height.
						numFrames: 15,  
						frameDelay: 3, 
						url: "images/page10_socks-close.png"
					}
				]
			},
			{
				type: "Cycler",
				autoStart: false,
				sound: {
					startTime: 182,
					endTime: 183.302,
					loop: false
				},
				content: [
					{
						type: "Sprite",
						autoStart: false,
						x: 0,
						y: 12,
						width: 50,
						height: 42.83, // IE 9 needs a height.
						numFrames: 12,  
						frameDelay: 4, 
						url: "images/page10_teddy.png"
					},
					{
						type: "Sprite",
						autoStart: false,
						x: 0,
						y: 12,
						width: 50,
						height: 42.83, // IE 9 needs a height.
						numFrames: 12,  
						frameDelay: 4, 
						url: "images/page10_teddy-close.png"
					}
				]
			}
			
		]
	  },  // End Page 10
	  {
		background: {
			url: "images/page11_bkgrnd.jpg"
		},
		sound: {
			startTime: 65,
			endTime: 74.938,
			loop: false
		},
		content: [
			
		]
	  }, // End Page 11
	  {
		background: {
			url: "images/page12_bkgrnd.jpg"
		},
		content: [
			{	
				type: "Sprite",
				sound: {
					startTime: 184.5,
					endTime: 185.9,
					loop: false
				},
				x: -7.1,
				y: 16.8,
				width: 94,
				height: 56.14, // IE 9 needs a height.
				numFrames: 9,  
				frameDelay: 8, 
				playOnPress: true,
				easing: "easeIn",
				autoStart: false,
				autoReset: true,
				url: "images/page12_postmark.png"
			},
			{
				type: "TextArea",
				sound: {
					startTime: 65,
					endTime: 74.938,
					loop: false
				},
				x: 2,
				y: 70.5,
				width: 83,
				align: "left",
				color: "#54331b",
				size: 44,
				text: [
					"Mr. McFeely is the neighborhood mailman. He makes speedy deliveries.",
					"He puts my letter through the postmark machine. Isn't it tiger-tastic? <font='Raphael-Icons'>s</font>"
				]
			}
		]
	  },  // End Page 12
	  {
		background: {
			url: "images/page13_bkgrnd.jpg"
		},
		sound: {
			startTime: 78,
			endTime: 86.074,
			loop: false
		},
		content: [
			{
				type: "Sprite",
				sound: {
					startTime: 202,
					endTime: 203.2,
					loop: false
				},
				onPress: function() {
					book.getContent(13, 0).setCurFrame(1);
					book.getContent(12, 0).setCurFrame(1);
				},
				x: 22.6,
				y: 15,
				width: 78,
				height: 85.966, // IE9 needs a height.
				numFrames: 2,  
				frameDelay: 1, 
				autoStart: false,
				autoReset: false,
				url: "images/page13_daniel.png"
			},
			{
				type: "TextArea",
				sound: {
					startTime: 78,
					endTime: 86.074,
					loop: false
				},
				x: 6,
				y: 72,
				width: 82,
				align: "left",
				color: "#54331b",
				size: 44,
				text: "Now we can go deliver our letter to Dad! Mr. McFeely even lets me wear his hat because I'm his helper. <font='Raphael-Icons'>s</font>"
			}
			
		]
	  },  // End Page 13
	  {
		background: {
			url: "images/page14_bkgrnd.jpg"
		},
		content: [
			{
				type: "Sprite",
				sound: {
					startTime: 150.55,
					endTime: 151.8,
					loop: false
				},
				onPress: function() {
					book.getContent(12, 0).setCurFrame(0);
					book.getContent(13, 0).setCurFrame(0);
				},
				x: 0,
				y: -2.5,
				width: 100,
				height: 102.945, // IE9 needs a height.
				numFrames: 2,  
				frameDelay: 1, 
				autoStart: true,
				autoReset: false,
				url: "images/page14_feely-hat.png"
			}
		]
	  },  // End Page 14
	  {
		background: {
			url: "images/page15_bkgrnd.jpg"
		},
		sound: {
			startTime: 88,
			endTime: 92.753,
			loop: false
		},
		content: [
			{
				type: "Sprite",
				sound: {
					startTime: 163.9,
					endTime: 165.5,
					loop: false
				},
				x: -7.5,
				y: 13,
				width: 67.5,
				height: 81.125, // IE9 needs a height.
				numFrames: 9,  
			    frameDelay: 5,
			    playOnPress: true,
				autoStart: false,
				autoReset: true,
				resetDelay: 30,
				url: "images/page15_mcfeely.png"
			},
			{
				type: "Sprite",
				sound: {
					startTime: 167,
					endTime: 169.9,
					loop: false
				},
				x: 34,
				y: 39,
				width: 66,
				height: 58.858, // IE9 needs a height.
				numFrames: 17,  
			    frameDelay: 2,
			    playOnPress: true,
				autoStart: false,
				autoReset: true, 
				resetDelay: 90,
				url: "images/page15_daniel.png"
			}
			
		]
	  }, // End Page 15
	  {
		background: {
			url: "images/page16_bkgrnd.jpg"
		},
		content: [
			{
				type: "Sprite",
				x: 54,
				y: 17,
				width: 56,
				height: 78.166, // IE9 needs a height.
				url: "images/page16_mom.png"
			},
			{
				type: "Cycler",
				autoStart: false,
				sound: {
					startTime: 180,
					endTime: 180.815,
					loop: false
				},
				content: [
					{
						type: "Sprite",
						autoStart: false,
						x: 2,
						y: 31.5,
						width: 50,
						height: 41.263, // IE9 needs a height.
						numFrames: 5,  
						frameDelay: 4, 
						url: "images/page2_mailbox_open.png"
					},
					{
						type: "Sprite",
						autoStart: false,
						x: 2,
						y: 31.5,
						width: 50,
						height: 41.263, // IE9 needs a height.
						numFrames: 5,  
						frameDelay: 4, 
						url: "images/page2_mailbox_close.png"
					}
				]
			},
			{
				type: "TextArea",
				sound: {
					startTime: 88,
					endTime: 92.753,
					loop: false
				},
				x: 6,
				y: 72,
				width: 80,
				align: "left",
				color: "#54331b",
				size: 44,
				text: "Here we are at my house. Dad is going to be so surprised! <font='Raphael-Icons'>s</font>"
			}
		]
	  },  // End Page 16
	  {
		background: {
			url: "images/page17_bkgrnd.jpg"
		},
		sound: {
			startTime: 95,
			endTime: 105.912,
			loop: false
		},
		content: [
			{
				type: "TextArea",
				sound: {
					startTime: 95,
					endTime: 105.912,
					loop: false
				},
				x: 6,
				y: 58,
				width: 66,
				align: "left",
				color: "#54331b",
				size: 44,
				text: [
					"Dad really loved his letter.",
					"We read it together.",
					"&ldquo;Dear Dad.",
					"This heart is for you.",
					"Love, Daniel&rdquo; <font='Raphael-Icons'>s</font>"
				]
			},
			{
				type: "Cycler",
				sound: {
					startTime: 178,
					endTime: 179.3,
					loop: false
				},
				content: [
					{
						type: "Sprite",
						x: 0,
						y: 11.7,
						width: 100,
						height: 54.965, // IE9 needs a height.
						numFrames: 6,  
						frameDelay: 6, 
						url: "images/page17_trolly_backward.png"
					},
					{
						type: "Sprite",
						x: 0,
						y: 11.7,
						width: 100,
						height: 54.965, // IE9 needs a height.
						numFrames: 6,  
						frameDelay: 6, 
						url: "images/page17_trolly_foward.png"
					}
				]
			}			
		]
	  }, // End Page 17
	  {
		background: {
			url: "images/page18_bkgrnd.jpg"
		},
		content: [
			{
				type: "Sprite",
				sound: {
					startTime: 152,
					endTime: 162.009,
					loop: false
				},
				x: -21.5,
				y: 12.4,
				width: 121.5,
				height: 90.779, // IE9 needs a height.
			    playOnPress: true,
				autoStart: false,
				autoReset: true,
			    numFrames: 11,  
			    frameDelay: 4,
				resetDelay: 300,
				url: "images/page18_dad-and-daniel.png"
			}
		]
	  } // End Page 18
	  
	] // End Pages
};