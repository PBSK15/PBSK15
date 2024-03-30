PBS.KIDS.storybook.config.pages.push({
    background: {
   		url: "images/page7-background.png"
   	},

    sound: chain([
        '500ms_of_silence',
        'pretty_princess_looking_fashionable_arrived',
        '{{choice3}}',
        'dressed_in',
        '{{choice2}}',
        'she_gave_them_their_gift',
        '{{choice1}}',
        'which_they_cherished',
        'and_they_all_lived_happily_ever_after',
	    'the_end'
    ]),

	content: [
        {
            type: "Sprite",
            addClass: "hidden",
            x: "-100px",
            y: 28.6,
            showIf: ["3B"],
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 0,
            loop: true,
            url: "images/page7-princess-pony.png"
        },
        {
            type: "Sprite",
            addClass: "hidden",
            x: 0,
            y: 6.6,
            showIf: ["3A"],
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 0,
            loop: true,
            url: "images/page7-cloud.png"
        },
        {
            type: "Sprite",
            addClass: "hidden",
            x: 0,
            y: 12.6,
            showIf: ["3C"],
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 0,
            loop: true,
            url: "images/page7-puppy.png"
        },
        {
            type: "Sprite",
            addClass: "hidden",
            x: 34,
            y: 12.6,
            showIf: ["2A"],
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 0,
            loop: true,
            url: "images/page7-princess-gown.png"
        },
        {
            type: "Sprite",
            addClass: "hidden",
            x: 34,
            y: 12.6,
            showIf: ["2C"],
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 0,
            loop: true,
            url: "images/page7-princess-dress.png"
        },
        {
            type: "Sprite",
            addClass: "hidden",
            x: 34,
            y: 12.6,
            showIf: ["2B"],
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 0,
            loop: true,
            url: "images/page7-princess-jazzy-jumper.png"
        }
	]
});