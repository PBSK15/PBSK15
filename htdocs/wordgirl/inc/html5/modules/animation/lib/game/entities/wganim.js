ig.module
(
	"game.entities.wganim"
)
.requires
(
	"impact.entity"
)
.defines(function()
{
	EntityWGAnim = ig.Entity.extend(
	{
		collides: ig.Entity.COLLIDES.NONE,
	    type: ig.Entity.TYPE.NONE,
	    checkAgainst: ig.Entity.TYPE.NONE,
	
		size: {x:50, y:50},
		offset: {x:0, y:0},

		animSheetForward: new ig.AnimationSheet("media/forward.png", 573, 317),
		animSheetLandingStart: new ig.AnimationSheet("media/landing-start.png", 450, 840),
		animSheetLanding: new ig.AnimationSheet("media/landing.png", 450, 592),
		animSheetSideways: new ig.AnimationSheet("media/sideways.png", 411, 100),
		animSheetTakeOff: new ig.AnimationSheet("media/take-off.png", 450, 591),
		animSheetTakeOffEnd: new ig.AnimationSheet("media/take-off-end.png", 420, 1143),

		mouth: null,
		bubble: null,

		currentAnimName: "",
		animAlpha: 1,

		init: function(x, y, settings)
		{
			this.parent(x, y, settings);
		},

		setAnim: function($name)
		{
			this.currentAnimName = $name;
			switch(this.currentAnimName)
			{
				case "forward":
					this.animSheet = this.animSheetForward;
					this.addAnim("forward", 0.02, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], true);
					this.addAnim("forwardEnd", 0.01, [10], true);
					this.currentAnim = this.anims.forward;
					break;
				case "landingStart":
					this.animSheet = this.animSheetLandingStart;
					this.addAnim("landingStart", 0.01, [0], true);
					this.currentAnim = this.anims.landingStart;
					break;
				case "landing":
					this.animSheet = this.animSheetLanding;
					this.addAnim("landing", 0.04, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], true);
					this.currentAnim = this.anims.landing;
					break;
				case "landingIdle":
					this.animSheet = this.animSheetLanding;
					this.addAnim("landingIdle", 0.01, [12], true);
					this.currentAnim = this.anims.landingIdle;
					break;
				case "sideways":
					this.animSheet = this.animSheetSideways;
					this.addAnim("sideways", 0.01, [0], true);
					this.currentAnim = this.anims.sideways;
					break;
				case "takeOff":
					this.animSheet = this.animSheetTakeOff;
					this.addAnim("takeOff", 0.04, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], true);
					this.currentAnim = this.anims.takeOff;
					break;
				case "takeOffEnd":
					this.animSheet = this.animSheetTakeOffEnd;
					this.addAnim("takeOffEnd", 0.01, [0], true);
					this.currentAnim = this.anims.takeOffEnd;
					break;
			}
		},

		createBubbleAnimation: function($animNum)
		{
			if(this.bubble === null)
				this.bubble = ig.game.spawnEntity(EntityBubble, 0, 0);
			this.bubble.pos.x = this.pos.x - 20;
			this.bubble.pos.y = this.pos.y + 50;
			switch($animNum)
			{
				case 1:  //  OPEN
					this.bubble.setAnim("show");
					break;
				case 2:  //  CLOSE
					this.bubble.setAnim("hide");
					break;
			}
		},
		createMouthAnimation: function($animNum)
		{
			this.mouth = ig.game.spawnEntity(EntityMouth, this.pos.x + 216, this.pos.y + 272);
			switch($animNum)
			{
				case 1:
					this.mouth.initMouthAnimation(1);
					break;
				case 2:
					this.mouth.initMouthAnimation(2);
					break;
			}
		},

		update: function()
		{
			if(this.currentAnimName === "forward")
			{
				if(this.currentAnim.frame === 10)
				{
					this.currentAnim = this.anims.forwardEnd;
					TweenMax.to(this, 0.2, {animAlpha:0, onComplete:ig.game.finishForwardAnim, onCompleteScope:this});
				}
				this.currentAnim.alpha = this.animAlpha;
			}
			if(this.currentAnimName === "landing")
			{
				if(this.currentAnim.frame === 12)
				{
					ig.game.initLandingIdleAnim();
				}
			}
			if(this.currentAnimName === "takeOff")
			{
				if(this.mouth != null)
				{
					this.mouth.kill();
					this.mouth = null;
				}

				if(this.currentAnim.frame === 9)
				{
					ig.game.finishTakeOff();
				}
			}

			if(this.mouth != null)
			{
				this.mouth.pos.x = this.pos.x + 216;
				this.mouth.pos.y = this.pos.y + 272;
			}

			this.parent();
		}
	});
});