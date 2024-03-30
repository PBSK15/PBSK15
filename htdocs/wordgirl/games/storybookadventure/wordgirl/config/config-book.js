PBS.KIDS.storybook.config = {
    audio: {
   		enabled: true,
        path: "audio/",
        name: "wordgirl"
   	},
	book: {
		font: "Georgia",
		startOnPage: 0,
		pageWidth: 576,
		pageHeight: 768,
        previousPageButton: {
            url: "images/prev-page-button.png",
            x: 3,
            y: 50,
            width: "96px",
            height: "99px"
        },
        nextPageButton: {
            url: "images/next-page-button.png",
            horizontalAlign: "RIGHT",
            x: 3,
            y: 50,
            width: "96px",
            height: "99px"
        },
		pageBackground: {
			color: "#fefefe"
		},
		oddPageBackground: {
			color: "#fdfdfd"
		},
		evenPageBackground: {
			color: "#f9f9f9"
		},
		pageTurnDuration: 500,
		pageSlideDuration: 200
	},
	cover: {
        sound : {
            clipId : 'cover',
            startTime: 322.000000,
            endTime: 327.000000,
            loop: false,
	        persist: false
        },
		background: {
			url: "images/cover.png"
		},
		content: [
			{
				type: "Sprite",
				addClass: "hidden",
				x: 0,
				y: 0,
				url: "images/book-frame-bottom.png"
			},
			{
				type: "Sprite",
				addClass: "hidden",
				x: 0,
				y: 0,
				url: "images/book-frame-top.png"
			},
			{
				type: "Sprite",
				addClass: "hidden",
				x: 0,
				y: 0,
				url: "images/book-frame-full.png"
			},
			{
				type: "Sprite",
				addClass: "hidden",
				x: 0,
				y: 0,
				url: "images/book-frame-cover.png"
			}
		]
	},
	pages: []
};