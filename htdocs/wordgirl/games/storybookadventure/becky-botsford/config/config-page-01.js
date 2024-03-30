PBS.KIDS.storybook.config.pages.push({

    sound: chain([
        '500ms_of_silence',
        'having_completed_her_homework',
        'taking_advantage_of_the_peace',
        '{{choice1}}',
        '{{narration1}}'
    ]),

    background: {
   		url: "images/page1-background.png"
   	},

	content: [
        {
            type: "Sprite",
            addClass: "hide_after_choice_1",
            x: 22,
            y: 35,
            url: "images/page1-item-default.png"
        },

        {
            type: "Sprite",
            addClass: "hidden",
            showIf: ["1A"],
            x: 22,
            y: 36,
            url: "images/page1-item-1A.png"
        },

        {
            type: "Sprite",
            addClass: "hidden",
            showIf: ["1B"],
            x: 22,
            y: 36,
            url: "images/page1-item-1B.png"
        },

        {
            type: "Sprite",
            addClass: "hidden",
            showIf: ["1C"],
            x: 22,
            y: 36,
            url: "images/page1-item-1C.png"
        },

        {
            type: "Sprite",
            x: 2,
            y: 1,
            url: "images/page1-paper.png"
        },

        _.extend({}, mainText, {
            addClass: 'mainText',
            text: [
                "Having completed her homework and " +
                audioBinding('vanquished', ['vanquished_definition']) +
                " Dr.Two Brains, Becky is ready for a little \"me time.\" " +
                "Taking advantage of the peace and quiet, Becky decides to read a book. " +
                audioBinding('Surveying', ['surveying_definition']) +
                " her bookshelf, " +
                "she sees the " +
                "<span class='blank_box hide_after_choice_1'>" +
                    "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" +
                    "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" +
                "</span>" +
                selection('1A', pink(choice_1A + '.')) +
                selection('1B', pink(choice_1B + '.')) +
                selection('1C', pink(choice_1C + '.'))
            ]
        }),

        // speaker
        _.extend({}, speaker, {
            addClass: 'hidden speaker page1-speaker',
            sound: chain([
                'having_completed_her_homework',
                'taking_advantage_of_the_peace',
                '{{choice1}}',
                '1000ms_of_silence',
                '{{narration1}}'
            ])
        })
	]
});