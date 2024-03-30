PBS.KIDS.storybook.config.pages.push({
    background: {
   		url: "images/page7-background.png"
   	},

    sound: chain([
        '500ms_of_silence',
        'after_helping_bob_find',
        '{{choice3}}',
        'and_entertaining_tj',
        '{{choice2}}',
        'becky_was_finally_ready',
        '{{choice1}}',
        'but_before_she_could_beckys',
        '200ms_of_silence',
        'the_end'
    ]),

	content: [
        {
            type: "Sprite",
            x: 30,
            y: 28.8,
            addClass: 'hidden',
            showIf: ["1A"],
            numFrames: 5,
            frameDelay: 7,
            autoStart: true,
            autoReset: false,
            resetDelay: 200,
            loop: false,
            url: "images/page7-item-1A.png" // dictionary
        },
        {
            type: "Sprite",
            x: 30,
            y: 28.8,
            addClass: 'hidden',
            showIf: ["1B"],
            numFrames: 5,
            frameDelay: 7,
            autoStart: true,
            autoReset: false,
            resetDelay: 0,
            loop: false,
            url: "images/page7-item-1B.png" // ogre
        },
        {
            type: "Sprite",
            x: 30,
            y: 28.8,
            addClass: 'hidden',
            showIf: ["1C"],
            numFrames: 5,
            frameDelay: 7,
            autoStart: true,
            autoReset: false,
            resetDelay: 0,
            loop: false,
            url: "images/page7-item-1C.png" // some other book
        },

        {
            type: "Sprite",
            x: 30,
            y: 12,
            showIf: ["3A"],
            url: "images/page7-item-3A.png" // apple
        },
        {
            type: "Sprite",
            x: 21,
            y: 14.3,
            showIf: ["3B"],
            url: "images/page7-item-3B.png" // sundae
        },
        {
            type: "Sprite",
            x: 17,
            y: 5.8,
            showIf: ["3C"],
            url: "images/page7-item-3C.png" // snappy snaps
        }
	]
});