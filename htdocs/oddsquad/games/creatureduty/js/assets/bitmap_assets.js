(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1024, 
	height: 768, 
	fps: 12, 
	color: "#000000", 
	manifest: [
		// Menu Widget
		{src:"images/Loading_Bar.png", id:"Loading_Bar"}, 
		{src:"images/MenuAudio.png", id:"MenuAudio"}, 
		{src:"images/MenuAudioOff.png", id:"MenuAudioOff"}, 
		{src:"images/MenuBar.png", id:"MenuBar"}, 
		{src:"images/MenuCC.png", id:"MenuCC"}, 
		{src:"images/MenuCCOff.png", id:"MenuCCOff"}, 
		{src:"images/MenuFullscreen.png", id:"MenuFullscreen"}, 
		{src:"images/MenuFullscreenOff.png", id:"MenuFullscreenOff"}, 
		{src:"images/MenuHome.png", id:"MenuHome"}, 
		{src:"images/MenuHomeOff.png", id:"MenuHomeOff"}, 
		{src:"images/MenuLevel.png", id:"MenuLevel"}, 
		{src:"images/MenuReplay.png", id:"MenuReplay"}, 
		{src:"images/MenuReplayOff.png", id:"MenuReplayOff"}, 
		{src:"images/MenuStart.png", id:"MenuStart"}, 

		// Sprites
		{src:"sprites/cd_bgs1.png", id:"cd_bgs1"}, 
		{src:"sprites/cd_bgs2.png", id:"cd_bgs2"}, 
		{src:"sprites/cd_bgs3.png", id:"cd_bgs3"}, 
		{src:"sprites/cd_creatureparts1.png", id:"cd_creatureparts1"}, 
		{src:"sprites/cd_creatureparts2.png", id:"cd_creatureparts2"}, 
		{src:"sprites/cd_foodparts1.png", id:"cd_foodparts1"}, 
		{src:"sprites/cd_foodparts2.png", id:"cd_foodparts2"}, 
		{src:"sprites/cd_foodparts3.png", id:"cd_foodparts3"},
		{src:"sprites/cd_miscbits1.png", id:"cd_miscbits1"}, 
		{src:"sprites/cd_miscbits2.png", id:"cd_miscbits2"}

	]
};
//_log(".........creatureDutyAssets is "+creatureDutyAssets+".......");
/*
(lib.choicebox = function () {
	this.initialize(creatureDutyAssets.getSprite("choicebox"));
}).prototype = p = new createjs.Bitmap();
 p.nominalBounds = new createjs.Rectangle(0, 0, 135, 162);

(lib.choiceboxshadow = function () {
	this.initialize(creatureDutyAssets.getSprite("choiceboxshadow"));
}).prototype = p = new createjs.Bitmap();
 p.nominalBounds = new createjs.Rectangle(0, 0, 135, 162);
 */

})(lib = lib||{}, images = images||{}, createjs = createjs||{});

var lib, images, createjs;