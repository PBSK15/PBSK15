PBS.KIDS.storybook.config.pages.push({
	background: {
		url: "images/page8-background.png"
	},
	content: [

        _.extend({}, mainText, {
            addClass: "mainText final-page",
            size: 21,
            text: [
                "Pretty Princess, looking fashionable, arrived at the Berry Buddies' birthday party on time, riding " +
                selection('3A', pink(choice_3A)) +
                selection('3B', pink(choice_3B)) +
                selection('3C', pink(choice_3C)) +
                ", dressed in a " +
                selection('2A', pink(choice_2A)) +
                selection('2B', pink(choice_2B)) +
                selection('2C', pink(choice_2C)) +
                ". She gave them her gift, a " +
                selection('1A', pink(choice_1A)) +
                selection('1B', pink(choice_1B)) +
                selection('1C', pink(choice_1C)) +
                ", which they " +
                audioBinding('cherished.', ['cherished_definition']) +
                "<br>And they all lived happily ever after."
            ]
        }),

        {
            type: "Sprite",
            x: 16.5,
            y: 41,
            url: "images/page8-the-end.png"
        },

        {
            type: "Sprite",
            addClass: "hidden",
            x: 20,
            y: 72,
            showIf: ["1B"],
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 0,
            loop: true,
            url: "images/page8-squirrel.png"
        },

        {
            type: "Sprite",
            addClass: "hidden",
            x: 17,
            y: 55.6,
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 0,
            loop: true,
            showIf: ["1C"],
            url: "images/page8-scepter-of-smiles.png"
        },

        {
            type: "Sprite",
            addClass: "hidden",
            x: 22,
            y: 75.6,
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 0,
            loop: true,
            showIf: ["1A"],
            url: "images/page8-skates.png"
        },

        {
            type: "Sprite",
            x: 42,
            y: 61.6,
            url: "images/page8-berry-buddy.png"
        }
	]
});