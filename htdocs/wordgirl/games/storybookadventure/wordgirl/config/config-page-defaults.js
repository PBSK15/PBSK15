var chain = PBS.KIDS.storybook.audio.combineClips;
var clip = PBS.KIDS.storybook.audio.getClip;


var choice_1A = "a peaceful park bench";
var choice_1B = "a stately statue";
var choice_1C = "a towering tree";

var choice_2A = "a dancing Captain Huggyface";
var choice_2B = "a shiny rock";
var choice_2C = "an adorable kitten";

var choice_3A = "a serviceable tire swing";
var choice_3B = "a timely trashcan";
var choice_3C = "a sizable street lamp";

var choice_1A_pink = "<span style='color: #fc4445'>" + choice_1A + "</span>";
var choice_1B_pink = "<span style='color: #fc4445'>" + choice_1B + "</span>";
var choice_1C_pink = "<span style='color: #fc4445'>" + choice_1C + "</span>";

var choice_2A_pink = "<span style='color: #fc4445'>" + choice_2A + "</span>";
var choice_2B_pink = "<span style='color: #fc4445'>" + choice_2B + "</span>";
var choice_2C_pink = "<span style='color: #fc4445'>" + choice_2C + "</span>";

var choice_3A_pink = "<span style='color: #fc4445'>" + choice_3A + "</span>";
var choice_3B_pink = "<span style='color: #fc4445'>" + choice_3B + "</span>";
var choice_3C_pink = "<span style='color: #fc4445'>" + choice_3C + "</span>";

var choice_1A_yellow = "<span style='color: #ffde42'>" + choice_1A + "</span>";
var choice_1B_yellow = "<span style='color: #ffde42'>" + choice_1B + "</span>";
var choice_1C_yellow = "<span style='color: #ffde42'>" + choice_1C + "</span>";

var choice_2A_yellow = "<span style='color: #ffde42'>" + choice_2A + "</span>";
var choice_2B_yellow = "<span style='color: #ffde42'>" + choice_2B + "</span>";
var choice_2C_yellow = "<span style='color: #ffde42'>" + choice_2C + "</span>";

var choice_3A_yellow = "<span style='color: #ffde42'>" + choice_3A + "</span>";
var choice_3B_yellow = "<span style='color: #ffde42'>" + choice_3B + "</span>";
var choice_3C_yellow = "<span style='color: #ffde42'>" + choice_3C + "</span>";


function selection(option, text) {
    return "<span class='choice" + option + " hidden'> " + text + "</span>";
}

function red(text) {
    return "<span style='color: #fc4445'>" + text + "</span>";
}

function yellow(text) {
    return "<span style='color: #ffde42'>" + text + "</span>";
}

function audioBinding(text, audioChain) {
    return "<span class='playSoundOnPress' data-audioChain='" + JSON.stringify(audioChain) + "'>" + text + "</span>";
}

function audioBindingCallback(e) {
    var target = {};
    if(e.originalEvent && e.originalEvent.srcElement) {
        target = e.originalEvent.srcElement;
    }
    else if (e.originalEvent && e.originalEvent.originalTarget) {
        target = e.originalEvent.originalTarget;
    }
    var $elem = $(target);
    if($elem.hasClass('playSoundOnPress')) {
        var soundChainArray = $.parseJSON($elem.attr('data-audioChain'));
        var soundChain = PBS.KIDS.storybook.audio.combineClips(soundChainArray);
        PBS.KIDS.storybook.audio.player.play(soundChain);
    }
}

var mainText = {
    type: "TextArea",
    addClass: "mainText hidden",
    x: 11,
    y: 8,
    width: 76,
    align: "left",
    color: "#222222",
    size: 21,
    font: "Roboto Regular",
    onPress : audioBindingCallback
};


var speaker = {
    type: "Sprite",
    x: 86,
    y: 35,
    url: "images/speaker.png"
};

var item = {
    type: "Sprite",
    onPress: function() { }
};