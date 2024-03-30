ig.module
(
	"game.entities.bg"
)
.requires
(
	"impact.entity"
)
.defines(function()
{
	EntityBG = ig.Entity.extend(
	{
		collides: ig.Entity.COLLIDES.ACTIVE,
	    type: ig.Entity.TYPE.A,
	    checkAgainst: ig.Entity.TYPE.B,  
	
		size: {x:736, y:592},
		offset: {x:0, y:0},
	    animSheet: new ig.AnimationSheet("media/home-animation-bg.png", 736, 592),

		init: function(x, y, settings)
		{                                 
			this.addAnim("idle", 0.1, [0]);
			this.parent(x, y, settings);  
		},

		draw: function()
		{
			this.parent();
		},
		
		update: function()
		{
			this.parent();
		},
		
		kill: function()
		{
			this.parent();
		}
	});
});