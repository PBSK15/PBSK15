//  ------------------------------------------------------------------
//  
//
//  Copyright 2012 PBS KIDS Interactive. All Rights Reserved.

PBS.KIDS.storybook.config.pages.push({
	background: {
		url: "images/drawing-pad/wood_bkgrnd.jpg"
	},
	sound: {
		startTime: 190,
		endTime: 201.2,
		loop: false
	},
	content: [
		{
			type: "TextArea",
			x: 0,
			y: -1,
			width: 86.5,
			align: "right",
			color: "#bfae95",
			size: 50,
			text: [
				"You can make something special for someone you love, because <i>making something is</i>",
				"one way to say <em>I love you.</em>"
			]
		},	
		{
			type: "Sprite",
			sound: {
				startTime: 190,
				endTime: 201.2,
				loop: false
			},
			x: 3.5,
			y: 32,
			width: 62,
			height: 62.75, // IE9 needs a height.
			url: "images/drawing-pad/page19_daniel.png"
		},
		{	
			type: "DrawingPad",
			x: -500,
			y: -500,
			width: 76,
			height: 78,
			defaultColor: "#D3333C",
			radius: 30,
			clearButtons: [
				{
					x: 58,
					y: 61,
					width: 40,
					height: 13.08, // IE9 needs a height.
					url: "images/drawing-pad/clear-button.png"
				},
				{
					x: 58,
					y: 77,
					width: 40,
					height: 13.08, // IE9 needs a height.
					url: "images/drawing-pad/save-button.png"
				}
			]
		}
	]
}, {

	background: {
		url: "images/drawing-pad/page20_paper-bkgrnd.jpg"
	},
	content: [
		{
			type: "DrawingPad",
			x: 11,
			y: 5,
			width: 76,
			height: 78,
			defaultColor: "#D3333C",
			radius: 30,
			textureUrl: "images/drawing-pad/crayon-texture.png",
			eraserButtons: [
				{
					x: 78,
					y: 82,
					url: "images/drawing-pad/eraser-button.png"
				}
			],
			colorButtons: [
				{
					paintColor: "#D3333C",
					x: 6,
					y: 82,
					url: "images/drawing-pad/crayon-red.png"
				},
				{
					paintColor: "#A3C87F",
					x: 18,
					y: 82,
					url: "images/drawing-pad/crayon-green.png"
				},
				{
					paintColor: "#53CAD3",
					x: 30,
					y: 82,
					url: "images/drawing-pad/crayon-blue.png"
				},
				{
					paintColor: "#F6B058",
					x: 42,
					y: 82,
					url: "images/drawing-pad/crayon-orange.png"
			    },
			    {
					paintColor: "#9A8DF0",
					x: 54,
					y: 82,
					url: "images/drawing-pad/crayon-purple.png"
				},
				{
					paintColor: "#844E3C",
					x: 66,
					y: 82,
					url: "images/drawing-pad/crayon-brown.png"
				}
			]
		}
	]
});	
