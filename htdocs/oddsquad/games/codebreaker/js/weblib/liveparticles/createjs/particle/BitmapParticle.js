//equire.include("weblib/ssnamespace");
//equire.include("weblib/liveparticles/AbstractParticle.js");

/*
* Class BitmapParticle extends createjs.Bitmap, AbstractParticle
*	Manages the data and display of an individual particle
*/

/*
* Create a new BitmapParticle
* @param image:Image|HTMLCanvasElement|String - The source for the bitmap
* @param regX:[Number] (Optional) - Registration point in the X
* @param regY:[Number] (Optional) - Registration point in the Y
*/
ss.BitmapParticle = function(image, regX, regY){
	//Extend createjs.Bitmap
	createjs.Bitmap.call(this, image);
	this.mouseEnabled = false;

	//Inherit additional properties from AbstractParticle
	ss.AbstractParticle.call(this);

	//Set registration point for this particle
	this.regX = regX !== undefined ? regX : 0;
	this.regY = regY !== undefined ? regY : 0;

	//Disable input on this particle
	this.mouseEnabled = false;
}

//Extend createjs.Bitmap
ss.BitmapParticle.prototype = new createjs.Bitmap();
ss.BitmapParticle.prototype.constructor = ss.BitmapParticle;