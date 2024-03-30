var item = {
    type: "Sprite",
    onPress: function(e) {
        $('.hide_after_choice_1').hide();
        $('.page1-speaker').fadeIn();
        $('.page1_item').show();
        $('.hideOnChoice_1A_1B_1C').hide();
        $('.showOnChoice_1A_1B_1C').show();
        e.$clickedElement.hide();
    }
};



PBS.KIDS.storybook.config.pages.push({

    sound: chain([
        '500ms_of_silence',
        'once_upon_a_time',
        'she_wanted_to_take_them_a_special_gift',
        '{{choice1}}',
        '{{narration1}}'
    ]),

    background: {
   		url: "images/page1-background.png"
   	},

	content: [
        _.extend({}, mainText, {
            x: 17,
            y: 6,
            text: [
                "Once upon a time, Pretty Princess was getting ready to " +
                audioBinding('attend', ['attend_definition']) +
                " a birthday party for her friends, " +
                "the Berry Buddies. She wanted to take them a special gift" +
                " <span class='blank_box hide_after_choice_1'>" +
                    "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" +
                    "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" +
                "</span>" +
                selection('1A', ', a ' + pink(choice_1A + '.')) +
                selection('1B', ', a ' + pink(choice_1B + '.')) +
                selection('1C', ', a ' + pink(choice_1C + '.'))
            ]
        }),

        // speaker
        _.extend({}, speaker, {
            sound: chain([
                'once_upon_a_time',
                'she_wanted_to_take_them_a_special_gift',
                '{{choice1}}',
                '1000ms_of_silence',
                '{{narration1}}'
            ])
        }),

        // items
        _.extend({}, item, {
            x: 49,
            y: 69,
            url: "images/page1-scepter-of-smiles.png",
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 0,
            loop: true,
            addClass: 'page1_item',
            sound: chain([
                '1C',
                '1_second_of_silence',
                'this_sparkling_scepter_of_smiles_will_surely'
            ]),
            setChoice: {
                choice: "1",
                option: "C"
            }
        }),

        _.extend({}, item, {
            x: 31,
            y: 54,
            url: "images/page1-squirrel.png",
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 0,
            loop: true,
            addClass: 'page1_item',
            sound: chain([
                '1B',
                '1_second_of_silence',
                'this_fluffy_pet_squirrel_will_be_the_perfect'
            ]),
            setChoice: {
                choice: "1",
                option: "B"
            }
        }),

        _.extend({}, item, {
            x: 14,
            y: 75,
            url: "images/page1-skates.png",
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 0,
            loop: true,
            addClass: 'page1_item',
            sound: chain([
                '1A',
                '1_second_of_silence',
                'this_pair_of_shimmering_ice_skates_will_surely'
            ]),
            setChoice: {
                choice: "1",
                option: "A"
            }
        })
	]
});