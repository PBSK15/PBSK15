PBS.KIDS.storybook.config.pages.push({
	background: {
		url: "images/page2-background.png"
	},
	content: [

        // Statue After Click
        /*
        {
            type: "Sprite",
            x: 34,
            y: 20.5,
            showIf: ['1B'],
            addClass: 'hidden',
            numFrames: 8,
            frameDelay: 6,
            autoStart: true,
            autoReset: true,
            resetDelay: 120,
            loop: true,
            url: "images/page2-item-1B-2.png",
            onPress: function() {}
        },
        */
        {
            type: "Sprite",
            x: 34,
            y: 20.5,
            showIf: ['1B'],
            addClass: 'hidden',
            url: "images/page2-item-1B-2.png",
            onPress: function() {}
        },

        // Statue Before Click
        _.extend({}, item, {
            x: 34,
            y: 20.5,
            url: "images/page2-item-1B.png",
            numFrames: 8,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 100,
            loop: true,
            addClass: 'page2_item',
            sound: chain([
                '1B',
                '1000ms_of_silence',
                'the_stately_statue_turns'
            ]),
            setChoice: {
                choice: "1",
                option: "B"
            }
        }),

        // Tree After Click
        {
            type: "Sprite",
            x: 58,
            y: 23,
            showIf: ['1C'],
            addClass: 'hidden',
            url: "images/page2-item-1C-2.png",
            onPress: function() {}
        },
        /*
        {
            type: "Sprite",
            x: 58,
            y: 23,
            showIf: ['1C'],
            addClass: 'hidden',
            numFrames: 8,
            frameDelay: 6,
            autoStart: true,
            autoReset: true,
            resetDelay: 120,
            loop: true,
            url: "images/page2-item-1C-2.png",
            onPress: function() {}
        },
        */

        // Tree Before Click
        _.extend({}, item, {
            x: 58,
            y: 23,
            url: "images/page2-item-1C.png",
            numFrames: 8,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 80,
            loop: true,
            addClass: 'page2_item',
            sound: chain([
                '1C',
                '1000ms_of_silence',
                'ooh_this_towering_tree_provides'
            ]),
            setChoice: {
                choice: "1",
                option: "C"
            }
        }),

        {
            type: "Sprite",
            x: 0,
            y: 23,
            addClass: 'hide_after_choice_1',
            url: "images/page2-wordgirl.png"
        }

	]
});