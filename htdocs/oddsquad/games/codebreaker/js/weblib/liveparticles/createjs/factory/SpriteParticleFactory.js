//require.include("weblib/external/createjs.min.js");
//require.include("weblib/ssnamespace");
//require.include("weblib/core/Util");
//require.include("weblib/liveparticles/createjs/particle/SpriteParticle");

/*
* Class SpriteParticleFactory
*	Handles the instantiation of new sprite-based particles
*/

/*
* Create a new SpriteParticleFactory
* @param spriteSheet:[String] - Spritesheet with images to use for the created particles
* @param animationName:[String] - Name of the animation to use for created particles
*/
ss.SpriteParticleFactory = function(spriteSheet, animationName){
	//[String] - Spritesheet with images to use for the created particles
	var _spriteSheet;
	//[String] - Name of the animation to use for created particles
	var _animName;

	//[createjs.Sprite] - Sprite used to obtain properties of the particles
	var _sprite; 

	//[Number] - X coordinate of the particle registration point
	var _spriteRegX;
	//[Number] - Y coordinate of the particle registration point
	var _spriteRegY;

	/*
	* Initialize this SpriteParticleFactory
	* @param spriteSheet:[String] - Spritesheet with images to use for the created particles
	* @param animationName:[String] - Name of the animation to use for created particles
	*/
	function _construct(spriteSheet, animationName){
		//Throw warning if no spritesheet was provided
		if(isEmpty(spriteSheet)){
			console.log("!! WARNING !! No valid spritesheet provided for SpriteParticleFactory!");
		}

		//Throw warning if no animation name was provided
		if(isUndefined(animationName)){
			console.log("!! WARNING !! No frame or animation name provided for SpriteParticleFactory");		
		}

		_spriteSheet = spriteSheet;
		_animName = animationName;

		_sprite = new createjs.Sprite(spriteSheet, animationName);
		_spriteRegX = _sprite.getBounds().width / 2;
		_spriteRegY = _sprite.getBounds().height / 2;
	}

	/*
	* Create a new particle
	* @return:AbstractParticle - The newly created particle
	*/
	this.createParticle = function(){
		return new ss.SpriteParticle(_spriteSheet, _animName, _spriteRegX, _spriteRegY);
	}

	return _construct(spriteSheet, animationName);
}