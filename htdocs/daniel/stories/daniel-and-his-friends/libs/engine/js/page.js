sbe.Page = sbe.Class.extend(
{
	n : -1, // page number
	data : null,
	con : null, // container
	mask : null, // the mask for the container when flipping pages
	gradient : null,
	cacheCanvas : null, // for the page flip
	textElement : null,

	// isPlaying : false, // if the VO is playing

	spanIndex : -1,
	spanObjs : [],

	init : function(data)
	{
		var w = sbe.system.pageWidth;
		var h = sbe.system.pageHeight;

		this.data = data;
		this.con = new cjs.Container().set({ visible : false });
		this.mask = new cjs.Shape( new cjs.Graphics().f('#fff').dr(0, 0, w, h) );
		// this.gradient = new cjs.Shape( new cjs.Graphics().f('#000').dr(0, 0, w, h) ).set({ zIndex : Infinity, alpha : 0 });
		this.gradient = new cjs.Shape( new cjs.Graphics().lf(['#000', 'transparent'], [0, 1], 0, 1, w, 1).dr(0, 0, w, h) ).set({ zIndex : Infinity, alpha : 0, regY : h * 0.5 });

		this.conContent = this.con.addChild( new cjs.Container() );

		// add to the book container
		sbe.book.con.addChild( this.con );
	},

	// called to get the page setup
	setup : function()
	{
		if ( this.data.setup )
			this.data.setup.apply(this);

		if ( this.n > 0 )
		{
			var w = sbe.system.pageWidth;
			var h2 = sbe.system.pageHeight * 0.5;
			var g = new cjs.Graphics()
				.mt(-w, -h2 + 12) // start in top left
				.qt(-200, -h2 - 24, 0, -h2 + 16) // top left curve
				.qt(200, -h2 - 24, w, -h2 + 12) // top right curve
				.lt(w + 10, h2 - 6) // continue to bottom right corner
				.qt(80, h2 - 28, 0, h2) // bottom right curve
				.qt(-80, h2 - 28, -w - 10, h2 - 6); // bottom left curve, ends

			this.conContent.mask = new cjs.Shape( g );
		}
	},

	// called when the book has completely opened up to this page
	start : function()
	{
		if ( this.data.start )
			this.data.start.apply(this);
	},

	// called when this page is about to be turned out of view
	end : function()
	{
		// fade out the vo
		sbe.vo.fadeOut( sbe.book.data.pageTurnDelay );

		// this will un-highlight the word
		this.updateText();

		// fade out the text box
		$('#' + sbe.book.data.wrapperId).find('div.text.page-' + this.n).each(function(a, b)
		{ 
			$(b).animate({ opacity : 0 }, sbe.book.data.pageTurnDelay, null, function() { $(b).remove(); });
		});

		// stop all animations
		this.stopAnimations(this.con.children);

		if ( this.data.end )
			this.data.end.apply(this);
	},

	// called when this page has turned out of view
	breakdown : function()
	{
		if ( this.data.breakdown )
			this.data.breakdown.apply(this);
	},

	update : function()
	{
		this.updateText();

		if ( this.data.update )
			this.data.update.apply(this);
	},

	click : function(e)
	{
		if ( this.data.click )
			this.data.click.call(this, e);
	},

	mousedown : function(e)
	{
		if ( this.data.mousedown )
			this.data.mousedown.call(this, e);
	},

	mouseover : function(e)
	{
		if ( this.data.mouseover )
			this.data.mouseover.call(this, e);
	},

	mouseout : function(e)
	{
		if ( this.data.mouseout )
			this.data.mouseout.call(this, e);
	},

	pressup : function(e)
	{
		if ( this.data.pressup )
			this.data.pressup.call(this, e);
	},

	stopAnimations : function(children)
	{
		for ( var i = 0, child; i < children.length; i++ )
		{
			child = children[i];

			if ( child instanceof cjs.MovieClip || child instanceof cjs.Sprite )
				child.stop();

			else if ( child instanceof cjs.Container )
				this.stopAnimations(child.children);
		}
	},

	updateText : function()
	{
		// just a safe capture to make sure no words are highlighted if the vo is playing
		if ( !sbe.vo.isPlaying )
		{
			if ( this.spanIndex > -1 )
				$(this.spanObjs[ this.spanIndex ]).removeClass('highlight');

			this.spanIndex = -1;
			return;
		}

		var pos = sbe.vo.soundObj.position,
			voInfo = sbe.book.data.vo[ sbe.vo.sequence[ sbe.vo.index - 1 ].id ],
			voTime,
			i = 0,
			curSpanIndex = this.spanIndex,
			newSpanIndex = curSpanIndex;
			
		if ( typeof voInfo != 'undefined' && voInfo.words.length > 0 && voInfo.time.length > 0 ) 
		{
			for ( ; i < voInfo.time.length; i++ )
			{
				voTime = voInfo.time[i];

				if ( pos >= voTime[0] && pos <= voTime[1] )
					newSpanIndex = i;
			}

			// its over
			if ( pos > voTime[1] )
				newSpanIndex = -1;

			if ( curSpanIndex !== newSpanIndex )
			{
				$(this.spanObjs[ curSpanIndex ]).removeClass('highlight');
				$(this.spanObjs[ newSpanIndex ]).addClass('highlight');

				this.spanIndex = newSpanIndex;

				// make it visible again
				if ( this.spanIndex < 0 )
					$(this.spanObjs[ curSpanIndex ]).parent('div.text').find('.replay').css({ opacity : 1 });
			}
		}
	},

	addText : function(id, textStyle, imgStyle)
	{
		var html = [];
		var style = [];
		var voInfo = sbe.book.data.vo[id];

		// create the styles for this
		for ( var prop in textStyle || {} )
			style.push(prop + ':' + textStyle[prop]);

		// now create the html for this text
		html.push('<div id="vo-' + id + '" class="text page-' + this.n + '" style="' + style.join(';') + '">');

		if ( voInfo.words.length > 0 && voInfo.time.length > 0) 
		{
			for ( var i = 0; i < voInfo.words.length; i++ )
				html.push('<span data-start="' + voInfo.time[i][0] + '" data-end="' + voInfo.time[i][1] + '">' + voInfo.words[i] + '</span>');
		} 
		else
			html.push('<span>' + voInfo.text + '</span>');
		
		// now the image and styles
		if ( imgStyle !== false )
		{
			style.length = 0;

			for ( var prop in imgStyle || {} )
				style.push(prop + ':' + imgStyle[prop]);

			html.push('<img src="' + sbe.book.data.textReplayBtn + '" class="replay" style="' + style.join(';') + '" />');
		}

		html.push('</div>');

		var domEl = $('#' + sbe.book.data.domId);

		// add it
		domEl.append(html.join(' '));

		// fade in
		domEl.find('#vo-' + id).css('opacity', 0).animate({ opacity : 1 }, sbe.book.data.pageTurnDelay);
	},

	voText : function(id, callback)
	{
		this.fixReplayButton(0.4);

		var that = this;

		// show the page the text is on
		if ( sbe.book.isSinglePage )
		{
			var el = $('#vo-' + id).position();
			sbe.book.singlePageSide = el && el.left < -100 ? 0 : 1;
		}

		// play the vo
		sbe.vo.play(sbe.book.data.vo[id].ssId || id, function()
		{
			if ( callback )
				callback();

			that.fixReplayButton(1);

			// is there another text box to play?
			var ids = id.split('-');
			var l = ids.length - 1;
			if ( !isNaN(ids[l]) )
				ids[l] = parseFloat(ids[l]) + 1;

			var nextText = $('#' + sbe.book.data.wrapperId).find('#vo-' + ids.join('-'));

			if ( nextText.length )
				setTimeout(function() { that.voText(ids.join('-')); }, 10);
		});

		this.textElement = $('#' + sbe.book.data.wrapperId).find('#vo-' + id);

		// get all the span objects
		this.spanObjs = this.textElement.find('span');//.selector;

		// change the replay button, if any
		this.textElement.find('.replay').css({ opacity : 0.4 });
	},

	fixReplayButton : function(opacity)
	{
		$('#' + sbe.book.data.wrapperId).find('.text').each(function()
		{
			$(this).find('.replay').css({ opacity : opacity });
		});
	},


	// for the page turn, only the book class calls this

	prepRight : function()
	{
		var w = sbe.system.pageWidth,
			h = sbe.system.pageHeight;

		this.con.cache(0, -h * 0.5, w, h);
		this.mask.x = -w;
		this.mask.y = -h * 0.5;
		this.con.mask = this.mask;

		this.cacheCanvas = this.con.cacheCanvas;
		this.con.cacheCanvas = null;
	},

	prepLeft : function()
	{
		var w = sbe.system.pageWidth,
			h = sbe.system.pageHeight;

		this.con.cache(-w, -h * 0.5, w, h);
		this.mask.x = 0;
		this.mask.y = -h * 0.5;
		this.con.mask = this.mask;

		this.cacheCanvas = this.con.cacheCanvas;
		this.con.cacheCanvas = null;
	},

	// for the cover only
	prepTurn : function()
	{
		var w = sbe.system.pageWidth,
			h = sbe.system.pageHeight;

		this.con.cache(-w * 0.5, -h * 0.5, w, h);

		this.cacheCanvas = this.con.cacheCanvas;
		this.con.cacheCanvas = null;
	}
});