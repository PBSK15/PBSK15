//require.include("weblib/external/createjs.min.js");
//require.include("weblib/ssnamespace");
//require.include("weblib/liveparticles/AbstractParticle.js");

/*
* Class SpriteParticle extends createjs.Sprite, AbstractParticle
*	Manages the data and display of an individual sprite-based particle
*/

/*
* Create a new SpriteParticle
* @param spriteSheet:[SpriteSheet] - The spritesheet containing the images for thsi particle
* @param animationName:[String] - Name of the animation to use to display this sprite
*/
ss.SpriteParticle = function(spriteSheet, animationName, regX, regY){
	//Extend createjs.Sprite
	createjs.Sprite.call(this, spriteSheet, animationName);

	//Inherit additional properties from AbstractParticle
	ss.AbstractParticle.call(this);

	//Set registration point for this particle
	this.regX = regX !== undefined ? regX : 0;
	this.regY = regY !== undefined ? regY : 0;

	//Disable input on this particle
	this.mouseEnabled = false;
}

//Extend createjs.Bitmap
ss.SpriteParticle.prototype = new createjs.Sprite();
ss.SpriteParticle.prototype.constructor = ss.SpriteParticle;