var highlightedText = _.extend({}, highlightedText, {
    x: 12.5,
    y: 30.2
});

var item = _.extend({}, item, {
    onPress: function(e) {
        $('.page1_item').show();
        $('.page2_item').show();
        $('.hide_after_choice_1').hide();
        $('.page2-clickable-word').hide();
        $('.page1-speaker').fadeIn();
        e.$clickedElement.hide();
    }
});

PBS.KIDS.storybook.config.pages.push({

    sound: chain([
        '500ms_of_silence',
        'battling_the_butcher',
        'looking_for_a_place_to_shield',
        '{{choice1}}',
        '{{narration1}}'
    ]),

    background: {
   		url: "images/page1-background.png"
   	},

	content: [
        _.extend({}, mainText, {
            addClass: 'mainText',
            text: [
                "Battling the Butcher on the city streets, WordGirl is about to be " +
                audioBinding('pummeled', ['pummeled_definition']) +
                " by a sausage cyclone, " +
                "one of the Butcher's signature attacks! Looking for a place to shield herself from harm, WordGirl " +
                audioBinding('surveys', ['surveys_definition']) +
                " the area and sees " +
                "<span class='blank_box hide_after_choice_1'>" +
                    "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" +
                    "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" +
                "</span>" +
                selection('1A', red(choice_1A + '.')) +
                selection('1B', red(choice_1B + '.')) +
                selection('1C', red(choice_1C + '.'))
            ]
        }),

        // Bench After Click
        {
            type: "Sprite",
            x: 36,
            y: 69,
            showIf: ['1A'],
            addClass: 'hidden',
            numFrames: 3,
            frameDelay: 6,
            autoStart: true,
            autoReset: true,
            resetDelay: 120,
            loop: false,
            url: "images/page1-item-1A-2.png",
            onPress: function() {}
        },

        // Bench Before Click
        _.extend({}, item, {
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 80,
            loop: true,
            addClass: 'page1_item',
            x: 36,
            y: 69,
            url: "images/page1-item-1A.png",
            sound: chain([
                '1A',
                '1000ms_of_silence',
                'the_peaceful_park_bench_provides_cover'
            ]),
            setChoice: {
                choice: "1",
                option: "A"
            }
        }),


        // speaker
        _.extend({}, speaker, {
            addClass: 'hidden page1-speaker',
            sound: chain([
                'battling_the_butcher',
                'looking_for_a_place_to_shield',
                '{{choice1}}',
                '1000ms_of_silence',
                '{{narration1}}'
            ])
        })
	]
});