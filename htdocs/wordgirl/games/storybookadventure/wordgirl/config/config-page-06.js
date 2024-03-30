
PBS.KIDS.storybook.config.pages.push({
	background: {
		url: "images/page6-background.png"
	},
	content: [

        {
            addClass: 'hide_after_choice_3',
            type: "Sprite",
            x: 51,
            y: 48,
            url: "images/page6-wordgirl-default.png"
        },

        {
            addClass: 'hidden',
            type: "Sprite",
            x: 63,
            y: 20,
            url: "images/page6-wordgirl-3C.png",
            showIf: ['3C']
        },

        _.extend({}, item, {
            x: 31,
            y: 69,
            url: "images/page6-item-3B.png",
            addClass: 'page6_item',
            numFrames: 6,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 80,
            loop: true,
            sound: chain([
                '3B',
                '1000ms_of_silence',
                'this_timely_trashcan_bay'
            ]),
            setChoice: {
                choice: "3",
                option: "B"
            }
        }),


        _.extend({}, item, {
            x: 62,
            y: 19,
            url: "images/page6-item-3C.png",
            addClass: 'page6_item',
            numFrames: 6,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 140,
            loop: true,
            sound: chain([
                '3C',
                '1000ms_of_silence',
                'this_sizable_streetlamp_end'
            ]),
            setChoice: {
                choice: "3",
                option: "C"
            }
        }),

        {
            addClass: 'hidden',
            type: "Sprite",
            x: 32,
            y: 63,
            url: "images/page6-wordgirl-3B.png",
            showIf: ['3B']
        }
	]
});