var item = _.extend({}, item, {
    addClass: 'page5_item',
    onPress: function(e) {
        $('.hide_after_choice_3').hide();
        $('.show_after_choice_3').fadeIn();
        $('.page5-speaker').fadeIn();
        $('.page5_item').show();
        e.$clickedElement.hide();
    }
});


PBS.KIDS.storybook.config.pages.push({
    background: {
   		url: "images/page5-background.png"
   	},

    sound: chain([
        '500ms_of_silence',
        'happy_to_play_with_the',
        '{{choice2}}',
        'tj_left_the_room_allowing',
        '{{choice1}}',
        'just_then_a_famished_bob',
        'knowing_a_hungry_bob_would',
        '{{choice3}}',
        '{{narration3}}'
    ]),

	content: [
        // Main Text
        _.extend({}, mainText, {
            addClass: "mainText",
            text: [
                "Happy to play with the " +
                "<span class='choice2A hidden'> " + choice_2A_pink + "</span>" +
                "<span class='choice2B hidden'> " + choice_2B_pink + "</span>" +
                "<span class='choice2C hidden'> " + choice_2C_pink + "</span>" +
                ", TJ left the room, allowing Becky to return to her book, the " +
                "<span class='choice1A hidden'>" + choice_1A_pink + "</span>" +
                "<span class='choice1B hidden'>" + choice_1B_pink + "</span>" +
                "<span class='choice1C hidden'>" + choice_1C_pink + "</span>" +
                ". Just then, a " +
                audioBinding('famished', ['famished_definition']) +
                " Bob moped into the room. Knowing a hungry Bob would never leave her be, Becky looked for food and noticed " +
                "<span class='blank_box hide_after_choice_3'>" +
                    "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" +
                    "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" +
                "</span>" +
                selection('3A', pink(choice_3A + '.')) +
                selection('3B', pink(choice_3B + '.')) +
                selection('3C', pink(choice_3C + '.'))
            ]
        }),

        // Items
        _.extend({}, item, {
            x: 16,
            y: 69,
            url: "images/page5-item-3A.png",
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 0,
            loop: true,
            sound: chain([
                '3A',
                '1000ms_of_silence',
                'might_i_suggest_and_appetizing_apple'
            ]),
            setChoice: {
                choice: "3",
                option: "A"
            }
        }),
        _.extend({}, item, {
            x: 35,
            y: 60,
            url: "images/page5-item-3B.png",
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 0,
            loop: true,
            sound: chain([
                '3B',
                '1000ms_of_silence',
                'one_delectable_ice_cream'
            ]),
            setChoice: {
                choice: "3",
                option: "B"
            }
        }),
        _.extend({}, item, {
            x: 60,
            y: 59,
            url: "images/page5-item-3C.png",
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 0,
            loop: true,
            sound: chain([
                '3C',
                '1000ms_of_silence',
                'ive_got_just_the_thing'
            ]),
            setChoice: {
                choice: "3",
                option: "C"
            }
        }),

        // Speaker Icon
        _.extend({}, speaker, {
            addClass: 'hidden speaker page5-speaker',
            y: 41.5,
            sound: chain([
                'happy_to_play_with_the',
                '{{choice2}}',
                'tj_left_the_room_allowing',
                '{{choice1}}',
                'just_then_a_famished_bob',
                'knowing_a_hungry_bob_would',
                '{{choice3}}',
                '1000ms_of_silence',
                '{{narration3}}'
            ])
        })
	]
});