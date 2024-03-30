PBS.KIDS.storybook.config.pages.push({

    background: {
   		url: "images/page3-background.png"
   	},

    sound: chain([
        '500ms_of_silence',
        'though_wordgirl_has_avoided',
        '{{choice1}}',
        'his_meaty_onslaught_continues',
        'needing_a_way_to_distract',
        '{{choice2}}',
        '{{narration2}}'
    ]),

	content: [
        // main text
        _.extend({}, mainText, {
            addClass: "mainText",
            size: 22,
            text: [
                "Though WordGirl has avoided the Butcher's initial attack by diving behind " +
                selection('1A', red(choice_1A)) +
                selection('1B', red(choice_1B)) +
                selection('1C', red(choice_1C)) +
                ", his meaty " +
                audioBinding('onslaught', ['onslaught_definition']) +
                " continues. Needing a way to distract the Butcher, WordGirl considers " +
                "<span class='blank_box hide_after_choice_2'>" +
                    "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" +
                    "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" +
                "</span>" +
                selection('2A', red(choice_2A + '.')) +
                selection('2B', red(choice_2B + '.')) +
                selection('2C', red(choice_2C + '.')) +
                "<span class='page3-speaker-wrapper speaker-wrapper'></span>"
            ]
        }),

        {
            type: "Sprite",
            x: 20,
            y: 43,
            addClass: 'hide_after_choice_2',
            url: "images/page3-wordgirl.png"
        },

        {
            type: "Sprite",
            x: 1,
            y: 36,
            showIf: ['2A'],
            addClass: 'hidden',
            url: "images/page3-item-2A.png"
        },

        {
            type: "Sprite",
            x: 10,
            y: 36,
            showIf: ['2B'],
            addClass: 'hidden',
            url: "images/page3-item-2B.png"
        },

        {
            type: "Sprite",
            x: 10,
            y: 36,
            showIf: ['2C'],
            addClass: 'hidden',
            url: "images/page3-item-2C.png"
        },


        // Speaker Icon
        _.extend({}, speaker, {
            addClass: 'hidden page3-speaker',
            sound: chain([
                'though_wordgirl_has_avoided',
                '{{choice1}}',
                'his_meaty_onslaught_continues',
                'needing_a_way_to_distract',
                '{{choice2}}',
                '1000ms_of_silence',
                '{{narration2}}'
            ])
        })
	]
});