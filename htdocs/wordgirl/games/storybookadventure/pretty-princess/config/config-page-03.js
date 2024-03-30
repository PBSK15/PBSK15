PBS.KIDS.storybook.config.pages.push({

    background: {
   		url: "images/page3-background.png"
   	},

    sound: chain([
        '500ms_of_silence',
        'with',
        '{{choice1}}',
        'for_the_berry_buddies_pretty_princess_started',
        'pretty_princess_searched_through',
        '{{choice2}}',
        '{{narration2}}'
    ]),

	content: [
        {
            addClass: "princess-default",
            type: "Sprite",
            x: 19,
            y: 28.7,
            url: "images/page3-princess.png"
        },
        {
            addClass: "hidden",
            type: "Sprite",
            x: 29,
            y: 33.7,
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 0,
            loop: true,
            showIf: ["2A"],
            url: "images/page3-princess-gown.png"
        },
        {
            addClass: "hidden",
            type: "Sprite",
            x: 29,
            y: 33.7,
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 0,
            loop: true,
            showIf: ["2C"],
            url: "images/page3-princess-dress.png"
        },
        {
            addClass: "hidden",
            type: "Sprite",
            x: 29,
            y: 33.7,
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 0,
            loop: true,
            showIf: ["2B"],
            url: "images/page3-princess-jazzy-jumper.png"
        },

        {
            type: "Sprite",
            x: 1.4,
            y: 1.5,
            url: "images/page3-scroll-foreground.png"
        },

        _.extend({}, mainText, {
            addClass: "mainText",
            text: [
                "With a " +
                selection('1A', pink(choice_1A)) +
                selection('1B', pink(choice_1B)) +
                selection('1C', pink(choice_1C)) +
                " for the Berry Buddies, Pretty Princess started to get ready for the party, but had yet to decide " +
                "what to wear. Pretty Princess searched through her closet for " +
                "<span class='blank_box hide_after_choice_2'>" +
                    "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" +
                    "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" +
                "</span>" +
                selection('2A', ' a ' + pink(choice_2A + '.')) +
                selection('2B', ' a ' + pink(choice_2B + '.')) +
                selection('2C', ' a ' + pink(choice_2C + '.'))
            ]
        }),

        // Speaker Icon
        _.extend({}, speaker, {
            addClass: 'hidden speaker page3-speaker',
            x: 85.5,
            y: 32.4,
            sound: chain([
                'with',
                '{{choice1}}',
                'for_the_berry_buddies_pretty_princess_started',
                'pretty_princess_searched_through',
                '{{choice2}}',
                '1000ms_of_silence',
                '{{narration2}}'
            ])
        })
	]
});