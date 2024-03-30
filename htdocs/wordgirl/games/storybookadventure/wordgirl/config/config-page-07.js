PBS.KIDS.storybook.config.pages.push({
    background: {
   		url: "images/page7-background.png"
   	},

    sound: chain([
        '500ms_of_silence',
        'emerging_from_behind',
        '{{choice1}}',
        'wordgirl_used',
        '{{choice3}}',
        'to_shackle_the_butcher',
        '{{choice2}}',
        'all_in_a_days_work',
        '200ms_of_silence',
        'word_up'
    ]),

	content: [
        {
            type: "Sprite",
            x: 69,
            y: 56,
            showIf: ["1A"],
            addClass: 'hidden',
            url: "images/page7-item-1A.png",
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 80,
            loop: true
        },
        {
            type: "Sprite",
            x: 80,
            y: 32,
            showIf: ["1B"],
            addClass: 'hidden',
            url: "images/page7-item-1B.png",
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 80,
            loop: true
        },
        {
            type: "Sprite",
            x: 63,
            y: 19,
            showIf: ["1C"],
            addClass: 'hidden',
            url: "images/page7-item-1C.png",
            numFrames: 6,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 80,
            loop: true
        },

        {
            type: "Sprite",
            x: 3.5,
            y: 9.5,
            url: "images/page7-wordgirl.png"
        },
	]
});