PBS.KIDS.storybook.config.pages.push({
	background: {
		url: "images/page6-background.png"
	},
	content: [
        {
            type: "Sprite",
            addClass: "hide_after_choice_3",
            x: 11,
            y: 21,
            url: "images/page6-item-default.png"
        },

        {
            type: "Sprite",
            addClass: "show_after_choice_3 hidden",
            x: 32,
            y: 21,
            url: "images/page6-item-after-selection.png"
        },

        {
            type: "Sprite",
            addClass: "hidden",
            showIf: ["3A"],
            x: 0,
            y: 40,
            url: "images/page6-item-3A.png"
        },

        {
            type: "Sprite",
            addClass: "hidden",
            showIf: ["3B"],
            x: 0,
            y: 29,
            url: "images/page6-item-3B.png"
        },

        {
            type: "Sprite",
            addClass: "hidden",
            showIf: ["3C"],
            x: 0,
            y: 29,
            url: "images/page6-item-3C.png"
        }

	]
});