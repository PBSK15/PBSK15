
//require.include("GameManager.js");


$( document ).ready(function() {

	"use strict";

    console.log( "ready!" );
	$(window).resize();

	//$("#gameCanvas").attr({width:400,height:300});
	//$("#gameCanvas").css("width","100%");
	// $("#gameCanvas").css("height","100%");
    var Game = new GameManager( "gameCanvas" );

});

var DEFAULT_WIDTH = 1024;
var DEFAULT_HEIGHT = 768;

// Window resize functions
$( window ).resize ( function () {

	"use strict";

	//Get the canvas to draw the game to
	var $cb_video = $("#videoPlayer");
	var $cb_canvas = $("#gameCanvas");
	var $cb_wrapper = $("#gameWrapper");

	//Calculate ratio of window width and height to game width and height
	var widthRatio =  window.innerWidth / DEFAULT_WIDTH;
	var heightRatio = window.innerHeight / DEFAULT_HEIGHT;
	var canvasRatio = DEFAULT_HEIGHT / DEFAULT_WIDTH;

	var winWidth = window.innerWidth;
	var winHeight = window.innerHeight - 42;

	//Fit the canvas wrapper to whatever dimension has the smallest ratio compared to the game size
	if(heightRatio < widthRatio){
		$cb_wrapper.css("width", winHeight / canvasRatio);
		$cb_wrapper.css("height", winHeight);
	} else {
		$cb_wrapper.css("width", winWidth);
		$cb_wrapper.css("height", winWidth * canvasRatio);
	}

	$cb_canvas.css("width", $cb_wrapper.width());
	$cb_canvas.css("height", $cb_wrapper.height());

	// magic numbers based on the frame position in the background image
	$cb_video.css("top", $cb_wrapper.width() * 0.305);
	$cb_video.css("left", $cb_wrapper.width() * 0.157);
	$cb_video.css("width", $cb_wrapper.width() * 0.69);
	$cb_video.css("height", $cb_wrapper.height() * 0.52);

});


document.ontouchmove = function(e){ e.preventDefault(); }
