$(document).ready(function() {
	var gameCanvas = $("#content-container");
	var gameCanvasHeight;
	var game_area;
	
	if ($("body").hasClass("html-game")) {
		gameCanvas = $("#gameCanvas");
	}

	gameCanvas.onmousedown = returnFalse;
	gameCanvas.onmouseup = returnFalse;
	gameCanvas.onclick = returnFalse;
	gameCanvas.onselectstart = returnFalse;
	setGameCanvasHeight();

	$(window).resize(function() {
		setGameCanvasHeight();
	});

	//Upholds aspect ratio of game canvas based on width
	//Keeps game canvas from extending past bottom of screen
	function setGameCanvasHeight() {

		var max_width = 960;
		var ratio = 1.92;

		if ( $("#coloringActivity").length > 0 ) {
			gameCanvas = $("#coloringActivity");
			max_width = 1310;
			ratio = 1.63;
		}

		game_area = $(window).height() - 100 - 28 - 4;
		gameCanvas.css("width", max_width);
		gameCanvasHeight = gameCanvas.width() / ratio;

		//accommodates for border when game is not fullscreen (desktop sizes)
		if (gameCanvas.css("max-width") == "96%") {
			gameCanvasHeight += 28;
		}

		if (gameCanvasHeight > game_area) {
			gameCanvasHeight = game_area;
			gameCanvas.css("height", gameCanvasHeight);
			gameCanvas.css("width", gameCanvasHeight * ratio);
		} else {
			gameCanvas.css("height", gameCanvasHeight);
		}
	}

	function returnFalse() {
	    return false;
	}
});
