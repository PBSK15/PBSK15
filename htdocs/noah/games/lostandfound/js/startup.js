var GameStartup = {
	targetHeight:768,
	targetWidth:1424,
	minSupportedWidth:1024,
	maxSupportedWidth:1424,
	resizeTimeout: 0,
	lastInnerHeight: 0,
	
	init: function( mediaPath ) {
		var self = this;

		//Add Resize Listeners
		window.addEventListener('resize', function() {self.resizeGame();}, false);
		window.addEventListener('orientationchange', function() {self.resizeGame();}, false);
		
		//Add On Load Listener
		//window.addEventListener("load", function() { self.onPageLoad(); }, false);
		
		//Check for ig availablity and start game!
		var x = setInterval(function() {
			if(ig && ig.deploy) {
				ig.deploy( mediaPath, self.targetWidth, self.targetHeight );
				self.resizeGame();
				clearInterval(x);
			}
		}, 250);
	},
	
	resizeGame: function() {
		window.scrollTo(0,0);
	
		var wWidth = window.innerWidth;
		var wHeight = window.innerHeight;
		
		var wrapper = document.getElementById('gameHolder');
		wrapper.style.maxWidth = "";
		wrapper.style.maxHeight = "";
		wrapper.style.margin = "";
		wrapper.style.marginTop = "";

		var maxWidth = wWidth;
		var maxHeight = wHeight;
		var hScale = (wHeight/this.targetHeight);
		if(wWidth > this.maxSupportedWidth*hScale) {
			this.targetWidth = this.maxSupportedWidth;
		}else if(wWidth < this.minSupportedWidth*hScale) {
			this.targetWidth = this.minSupportedWidth;
		}else {
			this.targetWidth = wWidth/hScale;
		}

		if(wWidth > this.targetWidth * (wHeight/this.targetHeight)) {
			maxWidth = Math.floor((wHeight/this.targetHeight) * this.targetWidth);
			wrapper.style.maxWidth = maxWidth+"px";
			wrapper.style.margin = "0 auto";
		}else {
			maxHeight = Math.floor((wWidth/this.targetWidth) * this.targetHeight);
			wrapper.style.maxHeight = maxHeight+"px";
			wrapper.style.marginTop = (wHeight-maxHeight)/2 + "px";
		}

		if((typeof ig != "undefined") && (typeof ig.system != "undefined")) {
			ig.system.resize(this.targetWidth, this.targetHeight);
		}
		
		var gameCanvas = document.getElementById('gameCanvas');
		gameCanvas.style.width = maxWidth + "px";
		gameCanvas.style.height = maxHeight + "px";
	}
};