/*
* class AbstractParticle 
*	Defines common properties for all particles
* NOTE: We expect all particles to be a subclass of DisplayObject
*/

//require.include("weblib/ssnamespace");

/*
* Create a new AbstractParticle
*/
function AbstractParticle(){

	//Number - Max lifetime of this particle (in seconds)
	this.maxLife = 0;

	//Number - Time elapsed since this particle was spawned (in seconds)
	this.curLife = 0;

	//Number - Value between 0 and 1 indicating the fraction of max lifetime this particle has existed for
	this.normalizedLife = 0;

	//Number - Velocity in X direction
	this.velX = 0;
	//Number - Velocity in Y direction
	this.velY = 0;
}

//Add this to the Sinking Ship namespace
ss.AbstractParticle = AbstractParticle;