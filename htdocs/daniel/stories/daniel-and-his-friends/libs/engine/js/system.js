sbe.System = sbe.Class.extend(
{
	width : 0,
	height : 0,
	pageWidth : 0,
	pageHeight : 0,
	bookWidth : 0,
	bookHeight : 0,

	delta : 0,
	delegate : null, // book class
	stage : null, // the createjs stage

	hiddenEventType : null,
	isWrongOrientation : false,

	staticInit : function()
	{
		return sbe.system || null;
	},

	init : function(bookClass, bookData)
	{
		sbe.system = this;

		this.orientation = sbe.$('#' + bookData.orientationId);
		this.container = sbe.$('#' + bookData.containerId);
		this.wrapper = sbe.$('#' + bookData.wrapperId);
		this.canvas = sbe.$('#' + bookData.canvasId);
		this.dom = sbe.$('#' + bookData.domId);
		this.pageWidth = bookData.width;
		this.pageHeight = bookData.height;
		this.bookWidth = bookData.width * bookData.format;
		this.bookHeight = bookData.height;

		// setup the events
		this.setupEvents();

		// creates the createjs stage
		this.setupStage( this.canvas );

		// create the ticker
		createjs.Ticker.timingMode = createjs.Ticker.RAF;
		// createjs.Ticker.framerate = 12;
		createjs.Ticker.on('tick', this.run, this);

		// one minute timeout
		createjs.LoadItem.LOAD_TIMEOUT_DEFAULT = 60 * 1000;

		// start it already
		this.delegate = new bookClass( bookData );
	},

	run : function(e)
	{
		this.checkWindow();

		if ( this.isFocused === -1 )
			return;

		if ( this.isFocused > 0 )
		{
			this.isFocused--;
			return;
		}

		this.delta = e.delta * 0.001;
		this.delegate.run();
		this.stage.update(e);

		sbe.input.clearPressed();
	},

	setupStage : function(canvas)
	{
		// create the stage
		var stage = new createjs.Stage( canvas );
		stage.preventSelection = false;
		stage.snapToPixelEnabled = true;

		// enable touch events
		if ( sbe.device.mobile && createjs.Touch.isSupported() )
		{
			createjs.Touch.enable(stage);
			stage.enableDOMEvents(false);
		}
		else
			stage.enableMouseOver(30);

		this.stage = stage;
	},

	setupEvents : function()
	{
		// var resizeWindowBound = this.onWindowResize.bind(this);
		var pageShowBound = this.onPageShow.bind(this);
		var pageHideBound = this.onPageHide.bind(this);
		var changeBound = this.onChange.bind(this);

		// some window events
		// window.addEventListener('load', resizeWindowBound, false);
		// window.addEventListener('resize', resizeWindowBound, false);
		// window.addEventListener('orientationchange', function() { console.log('changed'); }, false);
		window.addEventListener('pageshow', pageShowBound, false);
		window.addEventListener('pagehide', pageHideBound, false);
		window.addEventListener('focus', pageShowBound, false);
		window.addEventListener('blur', pageHideBound, false);

		var hidden = 'hidden';
		if ( hidden in document )
			document.addEventListener('visibilitychange', changeBound);
		else if ( (hidden = 'mozHidden') in document )
			document.addEventListener('mozvisibilitychange', changeBound);
		else if ( (hidden = 'webkitHidden') in document )
			document.addEventListener('webkitvisibilitychange', changeBound);
		else if ( (hidden = 'msHidden') in document )
			document.addEventListener('msvisibilitychange', changeBound);

		this.hiddenEventType = hidden;

		// prevent touch and dragging
		document.ontouchmove = function(e) { e.preventDefault(); };
	},

	_lastSize : 0,
	checkWindow : function()
	{
		var winWidth = window.innerWidth,
			winHeight = window.innerHeight;

		// winWidth = winWidth.limit(this.bookWidth, Infinity);
		// winHeight = (winHeight - 128 > this.bookHeight ? this.bookHeight : winHeight - 128).limit(sbe.device.mobile && !sbe.device.tablet ? winHeight - 32 : 532, Infinity);
		// winHeight = (winHeight - 128).limit(sbe.device.mobile && !sbe.device.tablet ? winHeight - 32 : 532, Infinity);
		winWidth = Math.limit(winWidth, this.bookWidth, Infinity);
		winHeight = Math.limit(winHeight - 156, sbe.device.mobile ? winHeight - (sbe.device.tablet ? 128 : 32) : 532, 768);

		if ( this._lastSize === winHeight )
			return;

		this._lastSize = winHeight;

		var widthScale = winWidth / this.bookWidth,
			heightScale = winHeight / this.bookHeight,
			canvasWidth = this.bookWidth,
			canvasHeight = this.bookHeight;

		if ( widthScale > heightScale ) 
		{
			if ( winWidth > canvasWidth * heightScale )
				canvasWidth = canvasWidth;
			else if ( winWidth < canvasWidth * heightScale )
				canvasWidth = canvasWidth;
			else
				canvasWidth = winWidth / heightScale;
		}
		else
		{
			if ( winHeight > canvasHeight * widthScale )
				canvasHeight = canvasHeight;
			else if ( winHeight < canvasHeight * widthScale )
				canvasHeight = canvasHeight;
			else
				canvasHeight = winHeight / widthScale;
		}

		this.width = this.stage.canvas.width = ~~canvasWidth;
		this.height = this.stage.canvas.height = ~~canvasHeight;

		// get aspect scale
		this.scale = widthScale > heightScale ? winHeight / canvasHeight : winWidth / canvasWidth;

		// set some styles to the wrapper
		this.wrapper.style.width = ~~(canvasWidth * this.scale) + 'px';
		this.wrapper.style.height = ~~(canvasHeight * this.scale) + 'px';

		// for mobile only
		// if ( sbe.device.mobile && !sbe.device.tablet )
		// this.wrapper.style.marginTop = ~~((winHeight - this.stage.canvas.offsetHeight) * 0.5) + 'px';

		this.dom.style.transform = this.dom.style['-webkit-transform'] = this.dom.style['-ms-transform'] = 'scale(' + this.scale + ')';

		// is the orientation wrong?
		this.isWrongOrientation = window.innerWidth < window.innerHeight;

		if ( sbe.device.mobile )
			this.orientation.style.display = this.isWrongOrientation ? 'block' : 'none';

		setTimeout(function(){ window.scrollTo(0, 0); }, 1);
	},

	_wasMuted : false,
	onPageShow : function() 
	{
		if ( !this.isFocused )
			return;

		this.isFocused = 1;
		cjs.Sound.muted = this._wasMuted;
	},

	onPageHide : function() 
	{ 
		if ( this.isFocused )
			return;

		this.isFocused = -1;
		this._wasMuted = cjs.Sound.muted;
		cjs.Sound.muted = true;
	},

	onChange : function(e)
	{
		if ( document[this.hiddenEventType] )
			this.onPageHide();
		else
			this.onPageShow();
	}
});