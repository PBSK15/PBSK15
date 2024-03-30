var item = _.extend({}, item, {
    onPress: function(e) {


        $('.page5_item').show();
        $('.page6_item').show();
        $('.hide_after_choice_3').hide();
        $('.page5-speaker').fadeIn();
        $('.page6-default-secondary-text').hide();
        $('.page6-clickable-word').hide();
        e.$clickedElement.hide();
    }
});

PBS.KIDS.storybook.config.pages.push({
    background: {
   		url: "images/page5-background.png"
   	},

    sound: chain([
        '500ms_of_silence',
        'having_averted_the_butchers_meat',
        '{{choice1}}',
        'wordgirl_has_now_distracted',
        '{{choice2}}',
        'and_is_finally_ready',
        'searching_for_something',
        '{{choice3}}',
        '{{narration3}}'
    ]),

	content: [

        // Main Text
        _.extend({}, mainText, {
            addClass: "mainText",
            text: [
                "Having " +
                audioBinding('averted', ['averted_definition']) +
                " the Butcher's meat attack by ducking behind " +
                selection('1A', red(choice_1A)) +
                selection('1B', red(choice_1B)) +
                selection('1C', red(choice_1C)) +
                ", WordGirl has now distracted the Butcher with " +
                selection('2A', red(choice_2A)) +
                selection('2B', red(choice_2B)) +
                selection('2C', red(choice_2C)) +
                " and is finally ready to " +
                audioBinding('apprehend', ['apprehend_definition']) +
                " the villain. Searching " +
                "for something with which to contain the Butcher, WordGirl sees " +
                "<span class='blank_box hide_after_choice_3'>" +
                    "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; " +
                    "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; " +
                "</span>" +
                selection('3A', red(choice_3A + '.')) +
                selection('3B', red(choice_3B + '.')) +
                selection('3C', red(choice_3C + '.'))
            ]
        }),

        {
            addClass: 'hidden',
            type: "Sprite",
            x: 51.5,
            y: 69.2,
            url: "images/page5-item-2A.png",
            numFrames: 6,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 0,
            loop: true,
            showIf: ['2A']
        },
        {
            addClass: 'hidden',
            type: "Sprite",
            x: 47.5,
            y: 90.2,
            url: "images/page5-item-2B.png",
            numFrames: 11,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 0,
            loop: true,
            showIf: ['2B']
        },
        {
            addClass: 'hidden',
            type: "Sprite",
            x: 49.5,
            y: 88.2,
            url: "images/page5-item-2C.png",
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 80,
            loop: true,
            showIf: ['2C']
        },

        _.extend({}, item, {
            x: 72,
            y: 55,
            url: "images/page5-item-3A.png",
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 80,
            loop: true,
            addClass: 'page5_item',
            sound: chain([
                '3A',
                '1000ms_of_silence',
                'this_serviceable_tire_swing_wrap'
            ]),
            setChoice: {
                choice: "3",
                option: "A"
            }
        }),

        {
            addClass: 'hidden',
            type: "Sprite",
            x: 61,
            y: 54,
            url: "images/page5-wordgirl-3A.png",
            showIf: ['3A']
        },

        // Speaker Icon
        _.extend({}, speaker, {
            addClass: 'hidden page5-speaker',
            y: 38.5,
            sound: chain([
                'having_averted_the_butchers_meat',
                '{{choice1}}',
                'wordgirl_has_now_distracted',
                '{{choice2}}',
                'and_is_finally_ready',
                'searching_for_something',
                '{{choice3}}',
                '1000ms_of_silence',
                '{{narration3}}'
            ])
        })
	]
});