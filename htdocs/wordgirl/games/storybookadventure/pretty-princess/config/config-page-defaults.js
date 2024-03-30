var chain = PBS.KIDS.storybook.audio.combineClips;
var clip = PBS.KIDS.storybook.audio.getClip;

var choice_1A = "pair of shimmering ice skates";
var choice_1B = "fluffy pet squirrel";
var choice_1C = "sparkling scepter of smiles";

var choice_2A = "glowing gown";
var choice_2B = "jazzy jumper";
var choice_2C = "sweet summer dress";

var choice_3A = "Count Cloudy's captivating cloud";
var choice_3B = "a mystical magic pony";
var choice_3C = "a whimsical giant winged puppy";


function selection(option, text) {
    return "<span class='choice" + option + " hidden'>" + text + "</span>";
}

function pink(text) {
    return "<span style='color: #d40c95'>" + text + "</span>";
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

var choice_1A_pink = "<span style='color: #d40c95'>" + choice_1A + "</span>";
var choice_1B_pink = "<span style='color: #d40c95'>" + choice_1B + "</span>";
var choice_1C_pink = "<span style='color: #d40c95'>" + choice_1C + "</span>";

var choice_2A_pink = "<span style='color: #d40c95'>" + choice_2A + "</span>";
var choice_2B_pink = "<span style='color: #d40c95'>" + choice_2B + "</span>";
var choice_2C_pink = "<span style='color: #d40c95'>" + choice_2C + "</span>";

var choice_3A_pink = "<span style='color: #d40c95'>" + choice_3A + "</span>";
var choice_3B_pink = "<span style='color: #d40c95'>" + choice_3B + "</span>";
var choice_3C_pink = "<span style='color: #d40c95'>" + choice_3C + "</span>";


var choice_1A_yellow = "<span style='color: #ffde42'>" + choice_1A + "</span>";
var choice_1B_yellow = "<span style='color: #ffde42'>" + choice_1B + "</span>";
var choice_1C_yellow = "<span style='color: #ffde42'>" + choice_1C + "</span>";

var choice_2A_yellow = "<span style='color: #ffde42'>" + choice_2A + "</span>";
var choice_2B_yellow = "<span style='color: #ffde42'>" + choice_2B + "</span>";
var choice_2C_yellow = "<span style='color: #ffde42'>" + choice_2C + "</span>";

var choice_3A_yellow = "<span style='color: #ffde42'>" + choice_3A + "</span>";
var choice_3B_yellow = "<span style='color: #ffde42'>" + choice_3B + "</span>";
var choice_3C_yellow = "<span style='color: #ffde42'>" + choice_3C + "</span>";


var mainText = {
    type: "TextArea",
    addClass: "mainText",
    x: 17,
    y: 6,
    width: 72,
    align: "left",
    color: "#222222",
    size: 23,
    font: "Roboto Regular",
    onPress : audioBindingCallback
};

var speaker = {
    addClass: 'hidden page1-speaker speaker',
    type: "Sprite",
    x: 86.5,
    y: 27.4,
    url: "images/speaker.png"
};

var item = {
    type: "Sprite"
};