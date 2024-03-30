var GameStartup = {
	targetHeight:600,
	targetWidth:960,
	minSupportedWidth:960,
	maxSupportedWidth:960,
	resizeTimeout: 0,
	lastInnerHeight: 0,
	
	init: function( mediaPath ) {
		var self = this;

		//Add Resize Listeners
		window.addEventListener('resize', function() {self.resizeGame();}, false);
		window.addEventListener('orientationchange', function() {
			window.setTimeout(function() {
				self.resizeGame();
			}, 300);
		}, false);
		
		//Add On Load Listener
		window.addEventListener("load", function() { self.onPageLoad(); }, false);

		//Mobile - Prevent touch dragging
		document.ontouchmove = function(e) { e.preventDefault(); };
		
		//Check for ig availablity and start game!
		var x = setInterval(function() {
			if(ig && ig.deploy) {
				ig.deploy( mediaPath );
				self.resizeGame();
				clearInterval(x);
			}
		}, 250);
	},

	hideAddressBar: function() {
		setTimeout(function() {window.scrollTo(0,0);}, 0);
	},
	
	onPageLoad: function() {
		this.hideAddressBar();
	},
	
	resizeGame: function() {
		window.scrollTo(0,0);

		var wrapper = document.getElementById('wrapper');
		var wWidth = wrapper.parentNode.offsetWidth;
		var wHeight = wrapper.parentNode.offsetHeight-wrapper.parentNode.offsetTop;
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
			maxWidth = (wHeight/this.targetHeight) * this.targetWidth;
			wrapper.style.maxWidth = maxWidth+"px";
			wrapper.style.margin = "0 auto";
		}else {
			maxHeight = (wWidth/this.targetWidth) * this.targetHeight;
			wrapper.style.maxHeight = maxHeight+"px";
			wrapper.style.marginTop = (wHeight-maxHeight)/2 + "px";
		}

		if((typeof ig != "undefined") && (typeof ig.system != "undefined")) {
			ig.system.resize(this.targetWidth, this.targetHeight);
		}
		
		var gameCanvas = document.getElementById('bgCanvas');
		gameCanvas.style.width = maxWidth + "px";
		gameCanvas.style.height = maxHeight + "px";

		gameCanvas = document.getElementById('fgCanvas');
		gameCanvas.style.width = maxWidth + "px";
		gameCanvas.style.height = maxHeight + "px";
					
		clearTimeout(this.resizeTimeout);
		this.resizeTimeout = setTimeout(GameStartup.hideAddressBar, 500);
	}
};
