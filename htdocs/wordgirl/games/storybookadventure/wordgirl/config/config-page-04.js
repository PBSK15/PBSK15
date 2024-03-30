var item = _.extend({}, item, {
    onPress: function(e) {
        $('.page3_item').show();
        $('.page4_item').show();
        $('.hide_after_choice_2').hide();
        $('.page3-speaker').fadeIn();
        e.$clickedElement.hide();
    }
});

PBS.KIDS.storybook.config.pages.push({

	background: {
		url: "images/page4-background.png"
	},

	content: [

        // items
        _.extend({}, item, {
            x: 0,
            y: 39,
            url: "images/page4-item-2A.png",
            addClass: "page4_item",
            numFrames: 6,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 0,
            loop: true,
            sound: chain([
                '2A',
                '1000ms_of_silence',
                'dancing_captain_huggyface_will'
            ]),
            setChoice: {
                choice: "2",
                option: "A"
            }
        }),

        _.extend({}, item, {
            x: 42,
            y: 63.1,
            url: "images/page4-item-2B.png",
            addClass: "page4_item",
            numFrames: 6,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 0,
            loop: true,
            sound: chain([
                '2B',
                '1000ms_of_silence',
                'this_shiny_rock_is_perfect'
            ]),
            setChoice: {
                choice: "2",
                option: "B"
            }
        }),

        _.extend({}, item, {
            x: 67,
            y: 74,
            url: "images/page4-item-2C.png",
            addClass: "page4_item",
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 50,
            loop: true,
            sound: chain([
                '2C',
                '1000ms_of_silence',
                'this_adorable_kitten_is_just'
            ]),
            setChoice: {
                choice: "2",
                option: "C"
            }
        }),

	]
});