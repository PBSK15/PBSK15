// Page Random Color Switcher
var colors = ['green', 'seafoam', 'blue', 'yellow']; //add as many classes as u want
var randomnumber = Math.floor(Math.random() * colors.length);

$('body').removeClass('green seafoam blue yellow');
$('body').addClass(colors[randomnumber]);