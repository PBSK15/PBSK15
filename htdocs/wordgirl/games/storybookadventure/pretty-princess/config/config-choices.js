PBS.KIDS.storybook.choices = {
    elements : [
        {
            selector: ".choice1A",
            showIf: ['1A']
        },
        {
            selector: ".choice1B",
            showIf: ['1B']
        },
        {
            selector: ".choice1C",
            showIf: ['1C']
        },
        {
            selector: ".choice2A",
            showIf: ['2A']
        },
        {
            selector: ".choice2B",
            showIf: ['2B']
        },
        {
            selector: ".choice2C",
            showIf: ['2C']
        },
        {
            selector: ".choice3A",
            showIf: ['3A']
        },
        {
            selector: ".choice3B",
            showIf: ['3B']
        },
        {
            selector: ".choice3C",
            showIf: ['3C']
        }
    ],

    current: [
        {
            'A' : false,
            'B' : false,
            'C' : false
        },
        {
            'A' : false,
            'B' : false,
            'C' : false
        },
        {
            'A' : false,
            'B' : false,
            'C' : false
        }
    ],

    bindElement: function(data) {
        PBS.KIDS.storybook.choices.elements.push(data);
    },

    updatePages: function() {
        var selectors = {
            all : [],
            show : [],
            hide : []
        };

        _.each(PBS.KIDS.storybook.choices.current, function(choice, choice_key) {
            var choiceId = parseInt(choice_key) + 1;

            _.each(choice, function(option, option_key) {
                var optionId = choiceId + option_key;

                if(option) {
                    selectors.show.push(optionId);
                } else {
                    selectors.hide.push(optionId);
                }
                selectors.all.push(optionId);
            });
        });

        _.each(PBS.KIDS.storybook.choices.elements, function(element, i) {
            if(_.isEqual(element.showIf, _.intersection(element.showIf, selectors.show))) {
                $(element.selector).fadeIn();
            } else {
                $(element.selector).hide();
            }
        });

    },

    optionSelected: function(choiceIndex) {
        var choice = PBS.KIDS.storybook.choices.current[choiceIndex - 1];
        var optionSelected = false;
        _.each(choice, function(option, option_key) {
            if(option) {
                optionSelected = true;
            }
        });
        return optionSelected;
    },

    getOptionSelectedKey: function(choiceIndex) {
        var choice = PBS.KIDS.storybook.choices.current[choiceIndex - 1];
        var optionSelected = false;
        _.each(choice, function(option, option_key) {
            if(option) {
                optionSelected = option_key;
            }
        });
        return optionSelected;
    },

    setChoice: function(updated) {
        PBS.KIDS.storybook.choices.current[updated.choice-1]['A'] = false;
        PBS.KIDS.storybook.choices.current[updated.choice-1]['B'] = false;
        PBS.KIDS.storybook.choices.current[updated.choice-1]['C'] = false;
        PBS.KIDS.storybook.choices.current[updated.choice-1][updated.option] = true;
        PBS.KIDS.storybook.choices.updatePages();
        $('#pbsNextPageButton').fadeIn();
    }
};