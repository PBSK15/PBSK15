ig.module( 
	'game.main' 
)
.requires
(
	'impact.game',
	'impact.font',
//	"impact.debug.debug",
	"game.entities.wganim",
	"game.entities.mouth",
	"game.entities.bubble",
	'game.entities.buttonbase',
//	'game.entities.mutebtn',
	"game.entities.bg"
)
.defines(function()
{
	WGHomeAnim = ig.Game.extend(
	{
		clearColor: '#ffffff',
		font: new ig.Font( 'media/arial_40_white.png' ),

		hasBeenLoaded: false,

		bg: null,

		numTaps: 0,
//		debugString: "NONE",

		wgAnim: null,
		xPos: 0,
		yPos: 0,
		wgAnimOffsetX: 0,

		firstVO: true,
		voDelayTime: 0,

//		muteBtn: null,
		isMuted: true,

		innerWidth: 0,
		innerHeight: 0,

		init: function()
		{
			ig.System.drawMode = ig.System.DRAW.AUTHENTIC;

			ig.input.initPage();
//			console.log("------------------------------  WG INIT  ------------------------------");
//			ig.setNocache(true); // won't cache files
//			ig.setNocache(false); // will cache files

			if(ig.ua.mobile)
				ig.game.isMuted = true;
			else
				ig.game.isMuted = false;

			ig.input.bind(ig.KEY.MOUSE1, "leftMouse");

//			console.log(window.soundJockeyz.format);
			if(ig.ua.androidDevice)
			{

			}
			else
			{
				if(SoundJockey.soundFormat === "mp3")
				{
					SoundJockey.addSound("FlyBy", "sfx", window.stringsjs.FlyByMP3);
					SoundJockey.addSound("TakeOff", "sfx", window.stringsjs.TakeOffMP3);
					SoundJockey.addSound("PlayGames", "voiceover", window.stringsjs.PlayGamesMP3);
					SoundJockey.addSound("WatchVideos", "voiceover", window.stringsjs.WatchVideosMP3);
				}
				else if(SoundJockey.soundFormat === "ogg")
				{
					SoundJockey.addSound("FlyBy", "sfx", window.stringsjs.FlyByOGG);
					SoundJockey.addSound("TakeOff", "sfx", window.stringsjs.TakeOffOGG);
					SoundJockey.addSound("PlayGames", "voiceover", window.stringsjs.PlayGamesOGG);
					SoundJockey.addSound("WatchVideos", "voiceover", window.stringsjs.WatchVideosOGG);
				}
//				SoundJockey.initSounds();
			}


			ig.game.bg = ig.game.spawnEntity(EntityBG, 0, 0);
			ig.game.wgAnim = ig.game.spawnEntity(EntityWGAnim, ig.game.xPos, ig.game.yPos);
			TweenMax.delayedCall(0.75, ig.game.initForwardAnim);

			this.hasBeenLoaded = true;
			console.log("HAS BEEN LOADED");
		},

		hidePage: function()
		{
				ig.game.isMuted = true;
				window.soundJockeyz.pauseSounds(["audio"]);
		},
		showPage: function()
		{
//			if(ig.game.muteBtn != null)
//			{
				if(ig.ua.androidDevice)
				{
					ig.game.isMuted = true;
				}
				else
				{
					SoundJockey.muted = false;
				}
//			}
		},


		initForwardAnim: function()
		{
			if(!ig.game.isMuted)
			{
				if(ig.ua.android || ig.ua.kindle)
				{
					window.soundJockeyz.playSound('audio', 'flyby', false);
				}
				else
				{
					SoundJockey.playSound("FlyBy", false);
				}
			}
			TweenMax.delayedCall(0.75, ig.game.delayedForwardAnim);
		},
		delayedForwardAnim: function()
		{
			ig.game.xPos = 200;
			ig.game.yPos = 0;
			ig.game.wgAnim.setAnim("forward");
		},
		finishForwardAnim: function()
		{
			ig.game.initSidewaysAnim();
		},

		initSidewaysAnim: function()
		{
			ig.game.xPos = 735;
			ig.game.yPos = 116;
			ig.game.wgAnim.setAnim("sideways");
			TweenMax.to(this, 0.5, {delay:0.25, xPos:-412, onComplete:ig.game.finishSidewaysAnim, onCompleteScope:this});
		},
		finishSidewaysAnim: function()
		{
			ig.game.initLandingStartAnim();
		},

		initLandingStartAnim: function()
		{
			ig.game.xPos = 125;
			ig.game.yPos = -830;
			ig.game.wgAnim.setAnim("landingStart");
			TweenMax.to(this, 0.2, {yPos:0, onComplete:ig.game.initLandingAnim, onCompleteScope:this});
		},

		initLandingAnim: function()
		{
			ig.game.xPos = 125;
			ig.game.yPos = 0;
			ig.game.wgAnim.setAnim("landing");
		},
		initLandingIdleAnim: function()
		{
			ig.game.wgAnim.setAnim("landingIdle");
			ig.game.xPos = 125;
			ig.game.yPos = 0;
			if(ig.game.firstVO == true)
			{
				ig.game.voDelayTime = 5;
				if(!ig.game.isMuted)
				{
					window.soundJockeyz.playSound('audio', 'playgames', false);
				}
				ig.game.firstVO = false;

				if(ig.game.isMuted === true)
					ig.game.wgAnim.createBubbleAnimation(1);
				else
					ig.game.wgAnim.createMouthAnimation(1);
			}
			else
			{
				ig.game.voDelayTime = 5;
				if(!ig.game.isMuted)
				{
					window.soundJockeyz.playSound('audio', 'watchvideos', false);
				}
				ig.game.firstVO = true;
				if(ig.game.isMuted === true)
					ig.game.wgAnim.createBubbleAnimation(1);
				else
					ig.game.wgAnim.createMouthAnimation(2);
			}

			if(this.isMuted === true)
			{
				var bubbleTime = this.voDelayTime - 0.5;
				TweenMax.to(this, bubbleTime, {onComplete:ig.game.hideBubble, onCompleteScope:this});
			}

			TweenMax.to(this, this.voDelayTime, {onComplete:ig.game.finishLandingAnim, onCompleteScope:this});
		},
		hideBubble: function()
		{
			ig.game.wgAnim.createBubbleAnimation(2);
		},

		finishLandingAnim: function()
		{
			ig.game.wgAnim.setAnim("takeOff");
			if(!ig.game.isMuted)
			{
				window.soundJockeyz.playSound('audio', 'takeoff', false);
			}
		},

		finishTakeOff: function()
		{
			ig.game.wgAnim.setAnim("takeOffEnd");
			TweenMax.to(this, 0.3, {yPos:-1200, onComplete:ig.game.startNewAnimation, onCompleteScope:this});
		},
		startNewAnimation: function()
		{
			TweenMax.to(this, 2, {onComplete:ig.game.initForwardAnim, onCompleteScope:this});
		},

		update: function()
		{
			if(ig.input.pressed("leftMouse"))
			{
				ig.game.isMuted = false;
			}
			ig.game.innerWidth = window.innerWidth;
			if(window.innerWidth >= 736)
				ig.game.innerWidth = 736;

			if(ig.game.innerWidth < 736)
			{
				ig.game.wgAnimOffsetX = (736 - ig.game.innerWidth) * 0.5;
			}
			else
			{
				ig.game.wgAnimOffsetX = 0;
			}

//			if(ig.game.muteBtn != null)
//			{
//				var xPos = ig.game.innerWidth - 70;
//				var yPos = 40;
//
//				ig.game.muteBtn.pos.x = xPos;
//				ig.game.muteBtn.pos.y = yPos;
//			}

			if(ig.game.bg != null)
			{
				ig.game.bg.pos.x = (ig.game.innerWidth * 0.5) - (736 * 0.5);
			}

			if(ig.game.wgAnim != null)
			{
				ig.game.wgAnim.pos.x = ig.game.xPos - ig.game.wgAnimOffsetX;
				ig.game.wgAnim.pos.y = ig.game.yPos;
			}
			this.parent();
		},

		draw: function()
		{
			this.parent();
//			var text = "desktop";
//			if(ig.ua.mobile)
//				text = "mobile";
//			if(ig.ua.androidDevice)
//				text = "isAndroidDevice";
//			this.font.draw( text, 10, 10, ig.Font.ALIGN.LEFT );
//			this.font.draw( ig.game.numTaps, 10, 50, ig.Font.ALIGN.LEFT );
//			this.font.draw( ig.game.debugString, 10, 90, ig.Font.ALIGN.LEFT );
		}
	});


	var canvas = ig.$('#canvas');
	ig.handleStageTouch = function(event)
	{
		$('#impactdiv').css('pointer-events', 'none');
		ig.game.numTaps = ig.game.numTaps + 1;
		if(ig.ua.androidDevice)
		{
			if(window.soundJockeyz.currentAudioFileName === undefined)
			{
				if(window.soundJockeyz.soundFileIsPlaying('audio') === false)
				{
					window.soundJockeyz.playSound('audio', 'silence', true);
				}
				else
				{
					canvas.removeEventListener('touchstart', ig.handleStageTouch, false);
				}
			}
		}
		else
		{
			if(SoundJockey.soundFormat === "mp3")
			{
				SoundJockey.addSound("FlyBy", "sfx", window.stringsjs.FlyByMP3);
				SoundJockey.addSound("TakeOff", "sfx", window.stringsjs.TakeOffMP3);
				SoundJockey.addSound("PlayGames", "voiceover", window.stringsjs.PlayGamesMP3);
				SoundJockey.addSound("WatchVideos", "voiceover", window.stringsjs.WatchVideosMP3);
			}
			else if(SoundJockey.soundFormat === "ogg")
			{
				SoundJockey.addSound("FlyBy", "sfx", window.stringsjs.FlyByOGG);
				SoundJockey.addSound("TakeOff", "sfx", window.stringsjs.TakeOffOGG);
				SoundJockey.addSound("PlayGames", "voiceover", window.stringsjs.PlayGamesOGG);
				SoundJockey.addSound("WatchVideos", "voiceover", window.stringsjs.WatchVideosOGG);
			}
			SoundJockey.initSounds();
		}
	};
	canvas.addEventListener('touchstart', ig.handleStageTouch, false);

	//////  PRELOADER  //////
	ig.loadImage = new Image();
	ig.loadImage.src = "media/wordgirl-loader.png";
	MyLoader = ig.Loader.extend(
		{
//			fakeLoadPercent: 0,
			draw: function ()
			{
				var SW = window.innerWidth;
				if(SW >= 740)
					SW = 740;
				var SH = window.innerHeight;
				if(SH >= 592)
					SH = 592;
				var halfSW = SW * 0.5;
				var halfSH = SH * 0.5;

				var loadBarOrange = "#fd8711";
				var loadBarYellow = "#ffcc00";

				var loadBarTotalWidth = SW * .5;
				var loadBarTotalHeight = 20;

				var yellowLoadBarBuffer = 5;

//				if(this.fakeLoadPercent < 100)
//					this.fakeLoadPercent++;
//				var percentLoaded = this.fakeLoadPercent;
				var percentLoaded = this.status * 100;

				var ctx = ig.system.context;
				ctx.clearRect(0, 0, SW, SH);

				//////  WHITE BG  //////
				ctx.save();
				ctx.fillStyle = "#FFFFFF";
				ctx.fillRect(   -100,
								-100,
								SW + 400,
								SH + 400);
				ctx.restore();

				//////  ORANGE BAR  //////
				ctx.save();
				ctx.fillStyle = loadBarOrange;
				ctx.fillRect(   halfSW - (loadBarTotalWidth * 0.5),
								halfSH - (loadBarTotalHeight * 0.5),
								loadBarTotalWidth * (percentLoaded * 0.01),
								loadBarTotalHeight);
				ctx.restore();

				//////  YELLOW BAR  //////
				ctx.save();
				ctx.fillStyle = loadBarYellow;
				ctx.fillRect(   halfSW - (loadBarTotalWidth * 0.5) + yellowLoadBarBuffer,
								halfSH - (loadBarTotalHeight * 0.5) + (loadBarTotalHeight * 0.5) - yellowLoadBarBuffer,
								loadBarTotalWidth * (percentLoaded * 0.01) - yellowLoadBarBuffer,
								loadBarTotalHeight * 0.5);
				ctx.restore();

				//////  WG LOAD IMAGE  //////
				ctx.save();
				ctx.drawImage(  ig.loadImage,
								((halfSW - (loadBarTotalWidth * 0.5)) + (loadBarTotalWidth * (percentLoaded * 0.01))) - (ig.loadImage.width * 0.5),
								halfSH - (ig.loadImage.height * 0.5),
								ig.loadImage.width,
								ig.loadImage.height);
				ctx.restore();
			}
		});

	    if(isMobile.apple.phone || isMobile.apple.ipod || isMobile.android.phone || isMobile.phone) {
		    ig.main('#canvas', WGHomeAnim, 30, 736, 592, 1, MyLoader);
	    } else {
		    ig.main('#canvas', WGHomeAnim, 30, 638, 510, 1, MyLoader);
	    }


});
