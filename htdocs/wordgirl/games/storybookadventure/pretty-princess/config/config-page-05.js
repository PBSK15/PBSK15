var item = _.extend({}, item, {
    addClass: "page5_items",
    type: "Sprite",
    onPress: function(e) {
        $('.hide_after_choice_3').hide();
        $('.page5-speaker').fadeIn();
        $('.page5_items').show();
        $('.hideOnChoice_3A_3B_3C').hide();
        $('.showOnChoice_3A_3B_3C').show();
        e.$clickedElement.hide();

        var clickedOnPony = e.$clickedElement.hasClass('page5_pony');
        var clickedOnCloud = e.$clickedElement.hasClass('page5_cloud');
        var clickedOnPuppy = e.$clickedElement.hasClass('page6_puppy');

        if(clickedOnPony) {
            $('.page5_puppy').css({
                left: '50.2%'
            }).fadeIn();
            $('.page6_puppy').hide();
        }

        if(clickedOnPuppy) {
            $('.page5_puppy').hide();
            $('.page6_puppy').hide();
        }

        if(clickedOnCloud) {
            $('.page5_puppy').css({
                left: '3.2%'
            }).fadeIn();
            $('.page6_puppy').hide();
        }
    }
});

PBS.KIDS.storybook.config.pages.push({
    background: {
   		url: "images/page5-background.png"
   	},

    sound: chain([
        '500ms_of_silence',
        'fully_flawless_in',
        '{{choice2}}',
        'and_with_the_perfect_gift_for',
        '{{choice1}}',
        'pretty_princess_suddenly_realized_she_was_going_to',
        'now_she_must_rush_to_the_party',
        '{{choice3}}',
        '{{narration3}}'
    ]),

	content: [

        _.extend({}, mainText, {
            addClass: "mainText",
            text: [
                "Fully " +
                audioBinding('flawless', ['flawless_definition']) +
                " in " +
                selection('2A', 'a ' + pink(choice_2A)) +
                selection('2B', 'a ' + pink(choice_2B)) +
                selection('2C', 'a ' + pink(choice_2C)) +
                ", and with the perfect gift for the Berry Buddies, " +
                selection('1A', 'a ' + pink(choice_1A)) +
                selection('1B', 'a ' + pink(choice_1B)) +
                selection('1C', 'a ' + pink(choice_1C)) +
                ", Pretty Princess suddenly realized she was going to be late! Now she must rush to the party aboard " +
                "<span class='blank_box hide_after_choice_3'>" +
                    "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" +
                    "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" +
                "</span>" +
                selection('3A', pink(choice_3A + '.')) +
                selection('3B', pink(choice_3B + '.')) +
                selection('3C', pink(choice_3C + '.'))
            ]
        }),

        _.extend({}, item, {
            x: 38.5,
            y: 50,
            url: "images/page5-princess-pony.png",
            addClass: 'page5_items page5_pony',
            setChoice: {
                choice: "3",
                option: "B"
            },
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 80,
            loop: true,
            sound: chain([
                '3B',
                '1000ms_of_silence',
                'on_the_mystical_magic_pony_i_will_definitely'
            ])
        }),

        _.extend({}, item, {
            x: 2,
            y: 51.6,
            url: "images/page5-cloud.png",
            addClass: 'page5_items page5_cloud',
            setChoice: {
                choice: "3",
                option: "A"
            },
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 0,
            loop: true,
            sound: chain([
                '3A',
                '1000ms_of_silence',
                'on_count_cloudys_captivating_cloud_i_will'
            ])
        }),

        _.extend({}, item, {
            x: 50.2,
            y: 50.2,
            url: "images/page6-puppy.png",
            addClass: 'page5_items page5_puppy hidden',
            setChoice: {
                choice: "3",
                option: "C"
            },
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 0,
            loop: true,
            sound: chain([
                '3C',
                '1000ms_of_silence',
                'on_the_whimsical_giant_winged_puppy_i_will'
            ])
        }),

        // Speaker Icon
        _.extend({}, speaker, {
            addClass: 'hidden speaker page5-speaker',
            y: 36.8,
            x: 86.5,
            sound: chain([
                'fully_flawless_in',
                '{{choice2}}',
                'and_with_the_perfect_gift_for',
                '{{choice1}}',
                'pretty_princess_suddenly_realized_she_was_going_to',
                'now_she_must_rush_to_the_party',
                '{{choice3}}',
                '1000ms_of_silence',
                '{{narration3}}'
            ])
        })
	]
});