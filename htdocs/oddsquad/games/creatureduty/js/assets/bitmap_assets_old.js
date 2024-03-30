(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1024, 
	height: 768, 
	fps: 12, 
	color: "#000000", 
	manifest: [
		{src:"sprites/cd_ss0.png", id:"cd_ss0"}, 	
		{src:"sprites/cd_ss1.png", id:"cd_ss1"}, 	
		{src:"sprites/cd_ss2.png", id:"cd_ss2"}, 	
		{src:"sprites/cd_ss3.png", id:"cd_ss3"}, 	
		{src:"sprites/cd_ss4.png", id:"cd_ss4"}, 	
		{src:"sprites/cd_ss5.png", id:"cd_ss5"}, 	
		{src:"sprites/cd_ss6.png", id:"cd_ss6"}, 	
		{src:"sprites/cd_ss7.png", id:"cd_ss7"}	

};


(lib.choicebox = function () {
	this.mouseEnabled = false;  this.initialize(img.choicebox);
}).prototype = p = new createjs.Bitmap();
 p.nominalBounds = new createjs.Rectangle(0, 0, 135, 162);

(lib.choiceboxshadow = function () {
	this.mouseEnabled = false;  this.initialize(img.choiceboxshadow);
}).prototype = p = new createjs.Bitmap();
 p.nominalBounds = new createjs.Rectangle(0, 0, 135, 162);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});

var lib, images, createjs;