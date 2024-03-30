sbe.Book = sbe.Class.extend(
{
	data : null,
	con : null, // book container

	isSinglePage : false,
	singlePageSide : 0,
	isSwipping : true,
	isFlipping : false,

	currentPageIndex : -1, // -1 is the startup/loader
	currentPageObj : null,
	pageObjs : [],

	init : function(data)
	{
		sbe.book = this;

		// keep hold of the data
		this.data = data;

		// add this container to the stage
		this.con = new cjs.Container();
		this.con.on('click', this.interactionHandler, this);
		this.con.on('mousedown', this.interactionHandler, this);
		this.con.on('mouseover', this.interactionHandler, this);
		this.con.on('mouseout', this.interactionHandler, this);
		this.con.on('pressup', this.interactionHandler, this);
		this.con.mouseEnabled = true;
		sbe.system.stage.addChild( this.con );
        
        this.frameRateText = new createjs.Text("0", "20px Arial", "#39b4ed");
        if(data.fps) {
            sbe.system.stage.addChild(this.frameRateText);
        }

		// create the flip pages
		this.pageflipLeft = $('<div class="pageflip left"><div class="gradient"></div></div>');
		this.pageflipRight = $('<div class="pageflip right"><div class="gradient"></div></div>');
		this.pageflipLeft.css('display', 'none');
		this.pageflipRight.css('display', 'none');
		$('#' + data.wrapperId).append(this.pageflipLeft, this.pageflipRight);

		// add the buttons on the side
		this.pageturnLeft = $('img.pageturn.left').css('display', 'none');//$('<img class="pageturn left" src="' + data.pageTurnBtns[0] + '" />').css('display', 'none');
		this.pageturnRight = $('img.pageturn.right').css('display', 'none');//$('<img class="pageturn right" src="' + data.pageTurnBtns[1] + '" />').css('display', 'none');
		$('#' + data.containerId).append(this.pageturnLeft, this.pageturnRight);

		// clicks for the page turns
		this.pageturnLeft.on('click', function(e)
		{
			if ( !this.isFlipping && this.pageturnLeft.css('opacity') >= 1 )
			{
				if ( !this.isSinglePage || (this.isSinglePage && this.singlePageSide < 1) )
					this.gotoPage(this.currentPageIndex - 1);
				else
					this.singlePageSide--;
			}
		}.bind(this));
		this.pageturnRight.on('click', function(e)
		{
			if ( !this.isFlipping && this.pageturnRight.css('opacity') >= 1 )
			{
				if ( !this.isSinglePage || (this.isSinglePage && this.singlePageSide > 0) )
					this.gotoPage(this.currentPageIndex + 1);
				else
				{
					if ( this.currentPageIndex === 0 )
						this.gotoPage(1);
					else
						this.singlePageSide++;
				}
			}
		}.bind(this));

		// replay the book
		$('#' + data.replayId).on('click', function()
		{
			if ( $(this).css('opacity') > 0 )
				sbe.book.gotoPage(0);
		});

		// for the text replays
		$('#' + data.domId).on('click', 'img.replay', function(e)
		{
			var name = $(this).parent('div.text')[0].id;
			if ( sbe.book.currentPageObj )
				sbe.book.currentPageObj.voText( name.split('vo-').pop() );
		});

		// create the pages
		for ( var i = 0; i < data.pages.length; i++ )
		{
			var pageObj = new sbe.Page(data.pages[i]);
			pageObj.n = i;
			this.pageObjs.push( pageObj );
		}

		// show the start up!
		// cjs.Tween.get(this).wait(200).call(this.showStartup, null, this);
	},

	run : function()
	{
        this.frameRateText.text = ~~createjs.Ticker.getMeasuredFPS();
		this.con.x = sbe.system.width * 0.5;
		this.con.y = sbe.system.height * 0.5;

		if ( this.currentPageIndex < 0 )
			this.updateLoader();

		if ( this.currentPageObj )
			this.currentPageObj.update();

		if ( this.isSwipping )
			this.detectSwipping();

		this.updateSinglePage();
	},

	updateSinglePage : function()
	{
		var style = sbe.system.wrapper.style;
		var perc = -50;

		this.isSinglePage = window.innerWidth < window.innerHeight;

		if ( this.isSinglePage )
		{
			if ( sbe.book.currentPageIndex === 0 )
				style.transform = 'translate(-50%, 0)';
			else
				style.transform = 'translate(' + (this.singlePageSide < 1 ? -25 : -75) + '%, 0)';
		}
		else
			style.transform = 'translate(-50%, 0)';
	},

	interactionHandler : function(e)
	{
		if ( !this.currentPageObj )
			return;

		this.currentPageObj[e.type](e);
	},

	canSwipe : function(flag)
	{
		this.isSwipping = flag;
	},

	detectSwipping : function()
	{
		if ( sbe.input.pressed(sbe.KEY.MOUSE1) )
		{
			this.touchStartX = sbe.input.mouse.x;
			this.touchStartY = sbe.input.mouse.y;
			this.touchTime = Date.now();
		}

		if ( sbe.input.released(sbe.KEY.MOUSE1) )
		{
			if ( Date.now() - this.touchTime < 600 )
			{
				var dist = Math.distance(sbe.input.mouse.x, sbe.input.mouse.y, this.touchStartX, this.touchStartY, true);
				var angle = Math.angle(sbe.input.mouse.x, sbe.input.mouse.y, this.touchStartX, this.touchStartY, true);

				if ( dist > 300 )
				{
					if ( angle < 0 )
						angle = 360 + angle;

					if ( angle < 45 || angle > 315 )
						this.gotoPage(this.currentPageIndex - 1);
					else if ( angle > 135 || angle < 225 )
						this.gotoPage(this.currentPageIndex + 1);
				} 
			}
		}
	},

	gotoPage : function(index)
	{
		if ( index < 0 || index > this.pageObjs.length - 1 )
			return;

		if ( this.isFlipping )
			return;

		if ( this.data.gotoPage )
			this.data.gotoPage.call(this, index);

		this.isFlipping = true;

		// toggles the buttons on the side
		this.pageTurn(index);

		// end the current page
		if ( this.currentPageObj )
			this.currentPageObj.end();
		this.currentPageObj = null; // set to null so the update doesn't get called

		var oldPageObj = this.pageObjs[this.currentPageIndex],
			newPageObj = this.pageObjs[index],
			speed = this.data.pageFlipDuration,
			delay = this.data.pageFlipDelay,
			newSinglePageSide = index > this.currentPageIndex ? 0 : 1;

		newPageObj.setup();
		newPageObj.con.visible = true;

		// turn page effect
		if ( this.currentPageIndex > -1 )
		{
			// we are on the cover, openning the book
			if ( this.currentPageIndex === 0 )
			{
				oldPageObj.prepTurn();
				newPageObj.prepLeft();

				newPageObj.con.addChild(newPageObj.gradient.set({ scaleX : 1, alpha : 0.7 }));
				cjs.Tween.get(newPageObj.gradient).wait(delay + speed).to({ alpha : 0 }, speed);

				// move the dom
				this.pageflipRight.css('left', '25%');
				this.pageflipLeft.css('right', '50%');

				// translate
				this._gotoPagePageFlipRight = this._gotoPagePageFlipRight || function(e)
				{
					sbe.book.pageflipRight.css('left', e.target.target.v + '%');
				};
				cjs.Tween.get({ v : 25 }, { onChange : this._gotoPagePageFlipRight }).wait(delay).to({ v : 50 }, speed);

				this._gotoPageBookCoverFront = this._gotoPageBookCoverFront || function(e)
				{
					$('#book-cover-front').css('x', e.target.target.v + '%');
				};
				this._gotoPageBookCoverFrontComplete = this._gotoPageBookCoverFrontComplete || function()
				{
					$('#book-cover-front, #book-cover-full, #book-cover-top, #book-cover-bottom').toggle();
				};
				cjs.Tween.get({ v : -50 }, { onChange : this._gotoPageBookCoverFront }).wait(delay).to({ v : -7 }, speed).wait(speed).call(this._gotoPageBookCoverFrontComplete);

				// move the page container
				oldPageObj.con.visible = false;
				newPageObj.con.x = newPageObj.mask.x = -sbe.system.pageWidth * 0.5;
				cjs.Tween.get(newPageObj.con).wait(delay).to({ x : 0 }, speed);
				cjs.Tween.get(newPageObj.mask).wait(delay).to({ x : 0 }, speed);

				this.pageFlip(1, oldPageObj.cacheCanvas, newPageObj.cacheCanvas);
			}
			// we are going to the cover
			else if ( index === 0 )
			{
				oldPageObj.prepLeft();
				newPageObj.prepTurn();

				oldPageObj.con.addChild(oldPageObj.gradient.set({ scaleX : 1, alpha : 0 }));
				cjs.Tween.get(oldPageObj.gradient).wait(delay).to({ alpha : 0.7 }, speed);

				// move the dom
				this.pageflipRight.css('left', '50%');
				this.pageflipLeft.css('right', '50%');

				// translate
				this._gotoPagePageFlipRight = this._gotoPagePageFlipRight || function(e)
				{
					sbe.book.pageflipRight.css('left', e.target.target.v + '%');
				};
				cjs.Tween.get({ v : 50 }, { onChange : this._gotoPagePageFlipRight }).wait(speed + delay).to({ v : 25 }, speed);

				// translate
				this._gotoPageBookCoverFront = this._gotoPageBookCoverFront || function(e)
				{
					$('#book-cover-front').css('x', e.target.target.v + '%');
				};
				this._gotoPageBookCoverFrontComplete = this._gotoPageBookCoverFrontComplete || function()
				{
					$('#book-cover-front, #book-cover-full, #book-cover-top, #book-cover-bottom').toggle();
				};
				cjs.Tween.get({ v : -7 }, { onChange : this._gotoPageBookCoverFront }).call(this._gotoPageBookCoverFrontComplete).wait(speed + delay).to({ v : -50 }, speed);

				// move the page container
				newPageObj.con.visible = false;
				cjs.Tween.get(oldPageObj.con).wait(speed + delay).to({ x : -sbe.system.pageWidth * 0.5 }, speed);
				cjs.Tween.get(oldPageObj.mask).wait(speed + delay).to({ x : -sbe.system.pageWidth * 0.5 }, speed);

				this.pageFlip(-1, newPageObj.cacheCanvas, oldPageObj.cacheCanvas);
			}
			// turn the page
			else
			{
				if ( index > this.currentPageIndex )
				{
					oldPageObj.prepRight();
					newPageObj.prepLeft();

					oldPageObj.con.addChild(oldPageObj.gradient.set({ scaleX : -1, alpha : 0 }));
					cjs.Tween.get(oldPageObj.gradient).wait(delay).to({ alpha : 0.7 }, speed);

					newPageObj.con.addChild(newPageObj.gradient.set({ scaleX : 1, alpha : 0.7 }));
					cjs.Tween.get(newPageObj.gradient).wait(delay + speed).to({ alpha : 0 }, speed);

					this.pageFlip(1, oldPageObj.cacheCanvas, newPageObj.cacheCanvas);
				}
				else if ( index < this.currentPageIndex )
				{
					oldPageObj.prepLeft();
					newPageObj.prepRight();

					oldPageObj.con.addChild(oldPageObj.gradient.set({ scaleX : 1, alpha : 0 }));
					cjs.Tween.get(oldPageObj.gradient).wait(delay).to({ alpha : 0.7 }, speed);

					newPageObj.con.addChild(newPageObj.gradient.set({ scaleX : -1, alpha : 0.7 }));
					cjs.Tween.get(newPageObj.gradient).wait(delay + speed).to({ alpha : 0 }, speed);

					this.pageFlip(-1, newPageObj.cacheCanvas, oldPageObj.cacheCanvas);
				}
			}

			this._gotoPageTurnPage1 = this._gotoPageTurnPage1 || function(a, b)
			{
				a.con.mask = null; 
				a.con.visible = true;
				b.con.visible = false;

				// breakd down!
				b.breakdown();
			};

			this._gotoPageTurnPage2 = this._gotoPageTurnPage2 || function(a)
			{
				// so it will update
				// this.currentPageObj = this.pageObjs[this.currentPageIndex];
				// this.currentPageObj.start();
				this.currentPageObj = a;
				a.start();

				// you can now flip the page!
				this.isFlipping = false;
			};

			cjs.Tween.get(this)
				.wait(delay)
				.call(cjs.Sound.play, ['sfx-page-turn'], cjs.Sound) // play turn sfx
				.call(this.set, [{ singlePageSide : newSinglePageSide }], this)
				.wait(speed * 2)
				.call(this._gotoPageTurnPage1, [newPageObj, oldPageObj], this)
				.wait(delay)
				.call(this._gotoPageTurnPage2, [newPageObj], this);
		}
		// on the cover
		else
		{
			this.currentPageObj = this.pageObjs[index];
			this.currentPageObj.start();
			this.isFlipping = false;
			$('#book-cover-front').css('display', 'block');
		}

		this.currentPageIndex = index;

		// start loading next page assets
		sbe.loader.load(this.getAssetsToLoad( this.currentPageIndex ), this.assetsLoaded);
	},

	pageFlip : function(dir, rPage, lPage)
	{
		var ftn = function() { this.css('display', 'none'); },
			speed = this.data.pageFlipDuration,
			delay = this.data.pageFlipDelay + (1000 / 20), // avoids flickering on ipad 4
			pfLeft = this.pageflipLeft,
			pfRight = this.pageflipRight,
			lGradient = pfLeft.find('.gradient'),
			rGradient = pfRight.find('.gradient');

		// remove the old
		pfLeft.find('canvas').remove();
		pfRight.find('canvas').remove();

		this._pageFlipLeft = this._pageFlipLeft || function(e)
		{
			pfLeft.css('rotateY', e.target.target.rotateY + 'deg');
			lGradient.css('opacity', e.target.target.opacity);
		};

		this._pageFlipRight = this._pageFlipRight || function(e)
		{
			pfRight.css('rotateY', e.target.target.rotateY + 'deg');
			rGradient.css('opacity', e.target.target.opacity);
		};

		// set some styles
		lGradient.css('opacity', dir > 0 ? 0.7 : 0);
		pfLeft.prepend(lPage).css({ display : 'block', rotateY : (dir > 0 ? 90 : 0) + 'deg' });

		rGradient.css('opacity', dir > 0 ? 0 : 0.7);
		pfRight.prepend(rPage).css({ display : 'block', rotateY : (dir > 0 ? 0 : -90) + 'deg' });

		// start some tweens
		cjs.Tween.get({ rotateY : dir > 0 ? 90 : 0, opacity : dir > 0 ? 0.7 : 0 }, { onChange : this._pageFlipLeft })
			.wait(dir > 0 ? speed + delay : delay)
			.to({ rotateY : dir > 0 ? 0 : 90, opacity : dir > 0 ? 0 : 0.7 }, speed)
			.call(ftn, null, pfLeft);

		cjs.Tween.get({ rotateY : dir > 0 ? 0 : -90, opacity : dir > 0 ? 0 : 0.7 }, { onChange : this._pageFlipRight })
			.wait(dir > 0 ? delay : speed + delay)
			.to({ rotateY : dir > 0 ? -90 : 0, opacity : dir > 0 ? 0.7 : 0 }, speed)
			.call(ftn, null, pfRight);
	},

	pageTurn : function(index)
	{
		var speed = this.data.pageFlipDuration,
			delay = this.data.pageFlipDelay,
			ptLeft = this.pageturnLeft,
			ptRight = this.pageturnRight,
			btnReplay = $('#' + this.data.replayId);

		ptLeft.css('cursor', 'default').animate({ opacity : 0 }, delay);//, ptLeft.hide.bind(ptLeft));
		ptRight.css('cursor', 'default').animate({ opacity : 0 }, delay);//, ptRight.hide.bind(ptRight));
		btnReplay.css('cursor', 'default').animate({ opacity : 0 }, delay);//, ptReplay.hide.bind(ptReplay));
	},

	assetsLoaded : function()
	{
		if ( sbe.book.isFlipping )
		{
			setTimeout(sbe.book.assetsLoaded, 200);
			return;
		}

		sbe.book.isLoading = false;

		var index = sbe.book.currentPageIndex;
		var speed = sbe.book.data.pageFlipDuration;

		if ( index > 0 )
			sbe.book.pageturnLeft.show().animate({ opacity : 1 }, speed).css('cursor', 'pointer');
			// sbe.book.pageturnLeft.css('display', '').animate({ opacity : 1 }, speed);

		if ( index < sbe.book.pageObjs.length - 1 )
			sbe.book.pageturnRight.show().animate({ opacity : 1 }, speed).css('cursor', 'pointer');
		else
			$('#' + sbe.book.data.replayId).show().animate({ opacity : 1 }, speed).css('cursor', 'pointer');
	},

	// loader stuff below

	showStartup : function()
	{
		var con = new cjs.Container().set({ name : 'startup', cursor : 'pointer' }),
			cSpr = new cjs.Shape( new cjs.Graphics().f('#fff').dc(0, 0, 128) ),
			aSpr = new cjs.Shape( new cjs.Graphics().f('#000').mt(-32, -64).lt(64, 0).lt(-32, 64) );

		con.addChild( cSpr, aSpr );
		this.con.addChild( con );

		con.on('click', this.hideStartup, this);
	},

	hideStartup : function()
	{
		this.con.removeChild( this.con.getChildByName('startup') );
		this.showLoader();
	},

	showLoader : function()
	{
		var con = new cjs.Container().set({ name : 'loader' }),
			bgSpr = new cjs.Shape( new cjs.Graphics().s('#fff').ss(4).f('#000').dr(0, 0, 200, 32) ).set({ x : -100, y : -16 }),
			bSpr = new cjs.Shape( new cjs.Graphics().f('#900').dr(0, 0, 196, 28) ).set({ x : -98, y : -14, scaleX : 0 });

		con.addChild( bgSpr, bSpr );
		this.con.addChild( con );

		this.status = 0;

		// start loading
		sbe.loader.load(this.getAssetsToLoad( this.currentPageIndex > -1 ? this.currentPageIndex : this.data.startOnPage ));
	},

	updateLoader : function()
	{
		if ( sbe.loader.status === 0 )
			return;

		this.status = this.status.lerp( sbe.loader.status, 0.08 );
		
		var con = this.con.getChildByName('loader');
		con.getChildAt(1).scaleX = this.status;

		// we've loaded enough
		if ( sbe.loader.status >= 1 && this.status >= 0.99 )
			this.hideLoader();
	},

	hideLoader : function()
	{
		this.con.removeChild( this.con.getChildByName('loader') );
		this.gotoPage( this.data.startOnPage );
	},

	getAssetsToLoad : function(pageN)
	{
		var assets = [];
		var asset;

		for ( var i = 0; i < this.data.assets.length; i++ )
		{
			asset = this.data.assets[i];

			// load the asset if we are one page away
			if ( typeof asset.page === 'number' )
			{
				if ( asset.page >= pageN - 1 && asset.page <= pageN + 1 )
					assets.push(asset);
			}
			// it belongs to multiple pages, so we need to check it
			else if ( asset.page instanceof Array  )
			{
				for ( var j = 0; j < asset.page.length; j++ )
				{
					if ( asset.page[j] >= pageN - 1 && asset.page[j] <= pageN + 1 )
						assets.push(asset);
				}
			}
			// no page indentifies? must be global, like vo
			else if ( typeof asset.page === 'undefined' )
				assets.push(asset);
		}

		return assets;
	}
});