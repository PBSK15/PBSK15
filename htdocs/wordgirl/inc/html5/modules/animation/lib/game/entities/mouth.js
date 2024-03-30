ig.module
(
	"game.entities.mouth"
)
.requires
(
	"impact.entity"
)
.defines(function()
{
	EntityMouth = ig.Entity.extend(
	{
		collides: ig.Entity.COLLIDES.NEVER,
	    type: ig.Entity.TYPE.NONE,
	    checkAgainst: ig.Entity.TYPE.NONE,

		animSheetMouth1: new ig.AnimationSheet("media/mouth_1.png", 65, 24),
		animSheetMouth2: new ig.AnimationSheet("media/mouth_2.png", 51, 26),

		init: function(x, y, settings)
		{
			this.parent(x, y, settings);  
		},

		initMouthAnimation: function($mouthNum)
		{
			switch($mouthNum)
			{
				case 1:
					this.animSheet = this.animSheetMouth1;
					this.addAnim("mouth1", 0.045, [  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
													11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
													21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
													41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
													51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
													61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
													71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
													81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
													91, 92, 93, 94], true);
					break;
				case 2:
					this.animSheet = this.animSheetMouth1;
					this.addAnim("mouth1", 0.045, [  2, 3, 4, 5, 6, 7, 8, 9, 10,
													11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
													21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
													41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
													51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
													61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
													71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
													81, 82, 83, 0], true);
					break;
			}
		}
	});
});