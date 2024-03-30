PBS.KIDS.storybook.config.pages.push({

    background: {
   		url: "images/page3-background.png"
   	},

    sound: chain([
        '500ms_of_silence',
        'as_becky_settles_the',
        '{{choice1}}',
        'tj_bursts_into_the_room',
        'needing_something_to_occupy',
        '{{choice2}}',
        '{{narration2}}'
    ]),

	content: [
        {
            type: "Sprite",
            addClass: "hide_after_choice_2",
            x: 52,
            y: 44,
            url: "images/page3-item-default.png"
        },

        {
            type: "Sprite",
            addClass: "hidden",
            showIf: ["2A"],
            x: 52,
            y: 44,
            url: "images/page3-item-2A.png"
        },

        {
            type: "Sprite",
            addClass: "hidden",
            showIf: ["2B"],
            x: 52,
            y: 44,
            url: "images/page3-item-2B.png"
        },

        {
            type: "Sprite",
            addClass: "hidden",
            showIf: ["2C"],
            x: 52,
            y: 44,
            url: "images/page3-item-2C.png"
        },

        // Main Text
        _.extend({}, mainText, {
            addClass: "mainText",
            text: [
                "As Becky settles down with one of her favorites, the " +
                "<span class='choice1A hidden'>" + choice_1A_pink + "</span>" +
                "<span class='choice1B hidden'>" + choice_1B_pink + "</span>" +
                "<span class='choice1C hidden'>" + choice_1C_pink + "</span>" +
                ", TJ bursts into the room, complaining of boredom. " +
                "Needing something to " +
                audioBinding('occupy', ['occupy_definition']) +
                " TJ so she could get back to her book, Becky notices her " +
                "<span class='blank_box hide_after_choice_2'>" +
                    "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" +
                    "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" +
                "</span>" +
                selection('2A', pink(choice_2A + '.')) +
                selection('2B', pink(choice_2B + '.')) +
                selection('2C', pink(choice_2C + '.'))
            ]
        }),

        // Speaker Icon
        _.extend({}, speaker, {
            addClass: 'hidden speaker page3-speaker',
            y: 35.4,
            sound: chain([
                'as_becky_settles_the',
                '{{choice1}}',
                'tj_bursts_into_the_room',
                'needing_something_to_occupy',
                '{{choice2}}',
                '1000ms_of_silence',
                '{{narration2}}'
            ])
        })
	]
});