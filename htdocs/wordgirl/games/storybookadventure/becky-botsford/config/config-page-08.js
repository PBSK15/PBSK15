PBS.KIDS.storybook.config.pages.push({
	background: {
		url: "images/page8-background.png"
	},

	content: [

        _.extend({}, mainText, {
            addClass: "mainText",
            text: [
                "After helping Bob find a " +
                audioBinding('suitable', ['suitable_definition']) +
                " snack, " +
                selection('3A', pink(choice_3A)) +
                selection('3B', pink(choice_3B)) +
                selection('3C', pink(choice_3C)) +
                ", and entertaining TJ with the " +
                selection('2A', pink(choice_2A)) +
                selection('2B', pink(choice_2B)) +
                selection('2C', pink(choice_2C)) +
                ", Becky was finally ready to dig into the " +
                selection('1A', pink(choice_1A)) +
                selection('1B', pink(choice_1B)) +
                selection('1C', pink(choice_1C)) +
                ". But before she could, Becky's super hearing picked up on the Energy Monster wreaking " +
                audioBinding('havoc', ['havoc_definition']) +
                " downtown. Maybe there will be time to relax tomorrow..."
            ]
        }),

        {
            type: "Sprite",
            x: 16.5,
            y: 51.1,
            url: "images/page8-the-end.png"
        },

        {
            addClass: 'hidden',
            type: "Sprite",
            x: 54.9,
            y: 68,
            showIf: ["2A"],
            url: "images/page8-item-2A.png" // unicorn
        },
        {
            addClass: 'hidden',
            type: "Sprite",
            x: 66.8,
            y: 60,
            showIf: ["2B"],
            url: "images/page8-item-2B.png" // pretty princess doll
        },
        {
            addClass: 'hidden',
            type: "Sprite",
            x: 70,
            y: 68,
            showIf: ["2C"],
            url: "images/page8-item-2C.png" // soccer ball
        }
	]
});
