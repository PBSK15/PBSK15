//require.include("weblib/core/Util");
//require.include("weblib/ssnamespace");
//require.include("weblib/liveparticles/createjs/particle/BitmapParticle");

/*
* Class BitmapParticleFactory
*	Handles the instantiation of new bitmap particles
*/

/*
* Create a new BitmapParticleFactory
* @param image:Image - The image to use for each particle
*/
ss.BitmapParticleFactory = function(image){
	var _image = image;

	if(isEmpty(_image)){
		console.log("!! WARNING !! No valid image provided for bitmap particles!");
	}

	/*
	* Create a new particle
	* @return:AbstractParticle - The newly created particle
	*/
	this.createParticle = function(){
		return new ss.BitmapParticle(_image, _image.width / 2, _image.height / 2);
	}
}