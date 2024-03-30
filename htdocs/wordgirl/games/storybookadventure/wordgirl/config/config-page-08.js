PBS.KIDS.storybook.config.pages.push({
	background: {
		url: "images/page8-background.png"
	},

	content: [

        {
            addClass: 'hidden',
            type: "Sprite",
            x: 2,
            y: 50,
            showIf: ["3A"],
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 80,
            loop: true,
            url: "images/page8-item-3A.png"
        },
        {
            addClass: 'hidden',
            type: "Sprite",
            x: 0,
            y: 46,
            showIf: ["3B"],
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 80,
            loop: true,
            url: "images/page8-item-3B.png"
        },
        {
            addClass: 'hidden',
            type: "Sprite",
            x: 0,
            y: 2,
            showIf: ["3C"],
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 80,
            loop: true,
            url: "images/page8-item-3C.png"
        },


        {
            addClass: 'hidden',
            type: "Sprite",
            x: 67,
            y: 60,
            showIf: ["2A"],
            numFrames: 6,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 0,
            loop: true,
            url: "images/page8-item-2A.png"
        },
        {
            addClass: 'hidden',
            type: "Sprite",
            x: 70,
            y: 86,
            showIf: ["2B"],
            numFrames: 6,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 0,
            loop: true,
            url: "images/page8-item-2B.png"
        },
        {
            addClass: 'hidden',
            type: "Sprite",
            x: 70,
            y: 82,
            showIf: ["2C"],
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 128,
            loop: true,
            url: "images/page8-item-2C.png"
        },

        {
            type: "Sprite",
            x: 3.5,
            y: 1.5,
            url: "images/maintext-background.png"
        },

        _.extend({}, mainText, {
            addClass: "mainText",
            size: 20,
            text: [
	            audioBinding('Emerging', ['emerging_definition']) +
                " from behind " +
                selection('1A', red(choice_1A)) +
                selection('1B', red(choice_1B)) +
                selection('1C', red(choice_1C)) +
                ", WordGirl used " +
                selection('3A', red(choice_3A)) +
                selection('3B', red(choice_3B)) +
                selection('3C', red(choice_3C)) +
                " to " +
                audioBinding('shackle', ['shackle_definition']) +
                " the Butcher while he was distracted by " +
                selection('2A', red(choice_2A)) +
                selection('2B', red(choice_2B)) +
                selection('2C', red(choice_2C)) +
                ". All in a day's work."
            ]
        }),

        {
            type: "Sprite",
            x: 11.5,
            y: 29.1,
            url: "images/page8-the-end.png"
        }
	]
});
