PBS.KIDS.storybook.config.pages.push({
	background: {
		url: "images/page2-background.png"
	},
	content: [
        {
            addClass: "hideOnChoice_1A_1B_1C",
            type: "Sprite",
            x: 6,
            y: 11.2,
            url: "images/page2-princess-sighed.png"
        },
        {
            addClass: "showOnChoice_1A_1B_1C hidden",
            type: "Sprite",
            x: 6,
            y: 11.2,
            url: "images/page2-princess-delighted.png"
        },
        {
            addClass: "hidden",
            type: "Sprite",
            showIf: ["1A"],
            x: 30,
            y: 61.9,
            url: "images/page2-skates.png",
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 0,
            loop: true
        },
        {
            addClass: "hidden",
            type: "Sprite",
            showIf: ["1B"],
            x: 27,
            y: 59.2,
            url: "images/page2-squirrel.png",
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 0,
            loop: true
        },
        {
            addClass: "hidden",
            type: "Sprite",
            showIf: ["1C"],
            x: 38,
            y: 52.2,
            url: "images/page2-scepter-of-smiles.png"
        },
        {
            addClass: "showOnChoice_1A_1B_1C hidden",
            type: "Sprite",
            x: 38,
            y: 71.2,
            url: "images/page2-princess-arm.png"
        }
	]
});