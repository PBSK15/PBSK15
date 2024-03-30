var item = _.extend({}, item, {
    addClass: 'page4_item',
    onPress: function(e) {
        $('.hide_after_choice_2').hide();
        $('.page3-speaker').fadeIn();
        $('.page4_item').show();
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
            x: 30,
            y: 55,
            url: "images/page4-item-2A.png",
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 0,
            loop: true,
            sound: chain([
                '2A',
                '1000ms_of_silence',
                'interested_in_this_marvelous'
            ]),
            setChoice: {
                choice: "2",
                option: "A"
            }
        }),

        _.extend({}, item, {
            x: 67,
            y: 58.1,
            url: "images/page4-item-2B.png",
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 0,
            loop: true,
            sound: chain([
                '2B',
                '1000ms_of_silence',
                'hey_tj_why_dont_you'
            ]),
            setChoice: {
                choice: "2",
                option: "B"
            }
        }),

        _.extend({}, item, {
            x: 33,
            y: 77,
            url: "images/page4-item-2C.png",
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 0,
            loop: true,
            sound: chain([
                '2C',
                '1000ms_of_silence',
                'this_sensational_soccer'
            ]),
            setChoice: {
                choice: "2",
                option: "C"
            }
        })
	]
});
