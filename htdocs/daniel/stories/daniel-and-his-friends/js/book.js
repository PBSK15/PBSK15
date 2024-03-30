sbe.Book.inject(
{
	isPreloading : true,

	init : function(data)
	{
		this.parent(data);

		cjs.Tween.get(this).wait(200).call(this.showStartup, null, this);

		sbe.loader.load(this.getAssetsToLoad(-1));
	},

	run : function()
	{
		if ( !this.isPreloading )
			this.parent();
		else
		{
			this.con.scaleX = this.con.scaleY = (1 / sbe.system.scale) * (sbe.device.mobile && !sbe.device.tablet ? 0.75 : 1);

			this.con.x = sbe.system.width * 0.5;
			this.con.y = sbe.system.height * 0.5;

			this.updateLoader();
		}
	},

	showStartup : function()
	{
		var ss = new cjs.SpriteSheet(
		{ 
			images : ['media/images/loading-animation.png'], 
			frames : { width : 328, height : 180 },
			animations : { idle : [0,1,2,3,4,5,6,7,8,9,10] }
		});

		var btnSpr = new cjs.Bitmap(sbe.loader.get('loading-btn')).set({ name : 'loading-btn', y : -28, regX : 130 * 0.5, regY : 138 * 0.5 });
		var bookSpr = new cjs.Sprite(ss, 'idle').set({ name : 'loading-book', regX : 328 * 0.5, regY : 180 * 0.5, framerate : 12, zIndex : -1 });
		bookSpr.gotoAndStop('idle');

		this.con.addChild( bookSpr, btnSpr );

		// one time
		sbe.system.stage.on('stagemousedown', this.showLoader, this, true);
	},

	showLoader : function()
	{
		this.con.getChildByName('loading-book').gotoAndPlay('idle');

		var btnSpr = this.con.getChildByName('loading-btn');

		cjs.Tween.get(btnSpr)
			.to({ alpha : 0 }, 400)
			.call(this.con.removeChild, [btnSpr], this.con)
			.call(sbe.loader.load, [this.getAssetsToLoad( this.data.startOnPage ), this.hideLoader.bind(this)], sbe.loader);

		var loadingBg = new cjs.Bitmap( sbe.loader.get('loading-bg') ).set({ regX : 329 * 0.5, regY : 71 * 0.5, zIndex : -1 });
		var loadingBar = new cjs.Shape( new cjs.Graphics() ).set({ name : 'loading-bar', regX : 146 });
		var loadingText = new cjs.Bitmap( sbe.loader.get('loading-text') ).set({ regX : 329 * 0.5, regY : 71 * 0.5, zIndex : 1 });
		var conLoader = new cjs.Container().set({ name : 'con-loading-bar', y : 140, alpha : 0 });
		conLoader.addChild(loadingBg, loadingBar, loadingText);
		this.con.addChild(conLoader);

		cjs.Tween.get(conLoader).to({ alpha : 1 }, 400);
	},

	hideLoader : function()
	{
		var bookSpr = this.con.getChildByName('loading-book');
		var conLoader = this.con.getChildByName('con-loading-bar');

		cjs.Tween.get(bookSpr)
			.to({ alpha : 0 }, 400)
			.call(this.con.removeChild, [bookSpr], this.con)
			.call(this.set, [{ isPreloading : false }], this)
			.call(function() { $('#book-wrapper-outter').removeClass('loader'); })
			.call(this.con.set, [{ scaleX : 1, scaleY : 1 }], this.con)
			.call(this.gotoPage, [this.data.startOnPage], this);

		cjs.Tween.get(conLoader)
			.to({ alpha : 0 }, 400)
			.call(this.con.removeChild, [conLoader], this.con);
	},

	updateLoader : function()
	{
		var conLoader = this.con.getChildByName('con-loading-bar');
		if ( !conLoader )
			return;

		var loadingBar = conLoader.getChildByName('loading-bar');

		if ( !loadingBar.locked )
		{
			var perc = sbe.loader.status;
			loadingBar.graphics.c().f('#f05119').mt(0, -15).lt(294 * perc, -15 - (6 * perc)).lt(292 * perc, 14 + (8 * perc)).lt(3, 14);

			if ( perc >= 1 )
				loadingBar.locked = true;
		}
	}
});