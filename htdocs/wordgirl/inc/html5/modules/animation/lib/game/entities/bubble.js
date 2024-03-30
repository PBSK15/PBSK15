ig.module
(
	"game.entities.bubble"
)
.requires
(
	"impact.entity"
)
.defines(function()
{
	EntityBubble = ig.Entity.extend(
	{
//		collides: ig.Entity.COLLIDES.NEVER,
//	    type: ig.Entity.TYPE.NONE,
//	    checkAgainst: ig.Entity.TYPE.NONE,

		animSheet: new ig.AnimationSheet("media/bubble.png", 282, 202),
		size: {x:282, y:202},
		offset: {x:0, y:0},

		init: function(x, y, settings)
		{
			this.addAnim("idle", 0.1, [0]);
			this.addAnim("show", 0.05, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], true);
			this.addAnim("hide", 0.05, [9, 8, 7, 6, 5, 4, 3, 2, 1, 0], true);
			this.parent(x, y, settings);
			this.zIndex = 9999;
		},

		setAnim: function($animName)
		{
			switch($animName)
			{
				case "idle":
					this.currentAnim = this.anims.idle;
					break;
				case "show":
					this.currentAnim = this.anims.show;
					break;
				case "hide":
					this.currentAnim = this.anims.hide;
					break;
			}
			this.currentAnim.gotoFrame(0);
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