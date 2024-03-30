var item = _.extend({}, item, {
    addClass: "page4_items",
    onPress: function(e) {
        $('.hide_after_choice_2').hide();
        $('.princess-default').hide();
        $('.page3-speaker').fadeIn();
        $('.page4_items').show();

        e.$clickedElement.hide();
        if(e.$clickedElement.hasClass('gown')) {
            $('.gown').hide();
        }
        else if(e.$clickedElement.hasClass('dress')) {
            $('.dress').hide();
        }
        else if(e.$clickedElement.hasClass('jumper')) {
            $('.jumper').hide();
        }
    }
});

var secondaryTextDefault =
    "Pretty Princess " +
    audioBinding('mused', ['mused_definition']) +
    ", \"What shall I wear to the party?\"";


PBS.KIDS.storybook.config.pages.push({

	background: {
		url: "images/page4-background.png"
	},

	content: [
        _.extend({}, item, {
            x: 1,
            y: 37,
            addClass: "page4_items gown",
            url: "images/page4-gown.png",
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 0,
            loop: true,
            sound: chain([
                '2A',
                '1000ms_of_silence',
                'with_this_fantastic_glowing_gown'
            ]),
            setChoice: {
                choice: "2",
                option: "A"
            }
        }),
        _.extend({}, item, {
            x: 26,
            y: 39.1,
            url: "images/page4-dress.png",
            addClass: "page4_items dress",
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 0,
            loop: true,
            sound: chain([
                '2C',
                '1000ms_of_silence',
                'with_this_stunning_sweet_summer_dress'
            ]),
            setChoice: {
                choice: "2",
                option: "C"
            }
        }),
        _.extend({}, item, {
            x: 49,
            y: 41,
            url: "images/page4-summer-dress.png",
            addClass: "page4_items jumper",
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 0,
            loop: true,
            sound: chain([
                '2B',
                '1000ms_of_silence',
                'with_this_terrific_jazzy_jumper'
            ]),
            setChoice: {
                choice: "2",
                option: "B"
            }
        }),

        {
            type: "Sprite",
            x: 66.9,
            y: 42.1,
            url: "images/page4-closet-foreground.png"
        },

        // hitboxes
        _.extend({}, item, {
            x: 1,
            y: 40,
            addClass: "page4_items gown",
            url: "images/page4-gown-hitbox.png",
            sound: chain([
                '2A',
                '1000ms_of_silence',
                'with_this_fantastic_glowing_gown'
            ]),
            setChoice: {
                choice: "2",
                option: "A"
            }
        }),

        _.extend({}, item, {
            x: 34,
            y: 41.1,
            url: "images/page4-dress-hitbox.png",
            addClass: "page4_items dress",
            sound: chain([
                '2C',
                '1000ms_of_silence',
                'with_this_stunning_sweet_summer_dress'
            ]),
            setChoice: {
                choice: "2",
                option: "C"
            }
        }),

        _.extend({}, item, {
            x: 57,
            y: 43,
            url: "images/page4-jazzy-jumper-hitbox.png",
            addClass: "page4_items jumper",
            sound: chain([
                '2B',
                '1000ms_of_silence',
                'with_this_terrific_jazzy_jumper'
            ]),
            setChoice: {
                choice: "2",
                option: "B"
            }
        }),

	]
});
