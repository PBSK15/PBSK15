PBS.KIDS.storybook.config.pages.push({
	background: {
		url: "images/page6-background.png"
	},
	content: [

        {
            addClass: "hidden",
            type: "Sprite",
            x: 2,
            y: 29.6,
            showIf: ["3B"],
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 0,
            loop: true,
            url: "images/page6-princess-pony.png"
        },

        {
            addClass: "hidden",
            type: "Sprite",
            x: 43.3,
            y: 13.6,
            showIf: ["2A"],
            url: "images/page6-princess-gown.png"
        },
        {
            addClass: "hidden",
            type: "Sprite",
            x: 48.2,
            y: 13.6,
            showIf: ["2C"],
            url: "images/page6-princess-dress.png"
        },
        {
            addClass: "hidden",
            type: "Sprite",
            x: 52.9,
            y: 13.6,
            showIf: ["2B"],
            url: "images/page6-princess-jazzy-jumper.png"
        },
        {
            addClass: "hidden",
            type: "Sprite",
            x: 3,
            y: 23.6,
            showIf: ["3A"],
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 0,
            loop: true,
            url: "images/page6-cloud.png"
        },

        {
            addClass: "hidden",
            type: "Sprite",
            x: 12,
            y: 22,
            showIf: ["3C"],
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 0,
            loop: true,
            url: "images/page6-puppy-2.png"
        },

        {
            addClass: "hidden showOnChoice_3A_3B_3C",
            type: "Sprite",
            x: 59.9,
            y: 19.2,
            url: "images/page6-princess-face-cheer.png"
        },

        _.extend({}, item, {
            x: 6.2,
            y: 17.2,
            url: "images/page6-puppy.png",
            addClass: 'page6_puppy',
            numFrames: 5,
            frameDelay: 4,
            autoStart: true,
            autoReset: true,
            resetDelay: 0,
            loop: true,
            setChoice: {
                choice: "3",
                option: "C"
            },
            sound: chain([
                '3C',
                '1000ms_of_silence',
                'on_the_whimsical_giant_winged_puppy_i_will'
            ])
        })
	]
});