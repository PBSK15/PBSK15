var item = _.extend({}, item, {
    onPress: function(e) {
        $('.hide_after_choice_1').hide();
        $('.page2-clickable-word').hide();
        $('.page1-speaker').fadeIn();
        $('.book_selection').show();
        e.$clickedElement.hide();
    }
});

PBS.KIDS.storybook.config.pages.push({
	background: {
		url: "images/page2-background.png"
	},
	content: [

        _.extend({}, item, {
            addClass: 'hide_after_choice_1',
            x: -48,
            y: -8.7,
            url: "images/page2-items-default.png",
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 0,
            loop: true,
            onPress : function() {}
        }),

        _.extend({}, item, {
            x: -48,
            y: -8.7,
            url: "images/page2-items-no-1A.png",
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 0,
            loop: true,
            showIf: ['1A'],
            onPress : function() {}
        }),

        _.extend({}, item, {
            x: -48,
            y: -8.7,
            url: "images/page2-items-no-1B.png",
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 0,
            loop: true,
            showIf: ['1B'],
            onPress : function() {}
        }),

        _.extend({}, item, {
            x: -48,
            y: -8.7,
            url: "images/page2-items-no-1C.png",
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 0,
            loop: true,
            showIf: ['1C'],
            onPress : function() {}
        }),

        // items
        _.extend({}, item, {
            x: 9,
            y: 29,
            url: "images/page2-item-1A.png",
            addClass: "book_selection page2_items",
            sound: chain([
                '1A',
                '1000ms_of_silence',
                'ah_the_engrossing_dictionary'
            ]),
            setChoice: {
                choice: "1",
                option: "A"
            }
        }),

        _.extend({}, item, {
            x: 38,
            y: 29,
            url: "images/page2-item-1B.png",
            addClass: "book_selection page2_items",
            sound: chain([
                '1B',
                '1000ms_of_silence',
                'the_exciting_princess_great_escape'
            ]),
            setChoice: {
                choice: "1",
                option: "B"
            }
        }),

        _.extend({}, item, {
            x: 65,
            y: 29,
            url: "images/page2-item-1C.png",
            addClass: "book_selection page2_items",
            sound: chain([
                '1C',
                '1000ms_of_silence',
                'never_hurts_to_brush_up'
            ]),
            setChoice: {
                choice: "1",
                option: "C"
            }
        })
	]
});