
//require.include("weblib/liveparticles/LiveParticlePackage.js");


var FxHelper = FxHelper || new function () {

	"use strict";

  	var _this = this;

	function _Construct() {
		return _this;
	}
	
	
	// good default to use for height=16, speed=1200.
	_this.PulseFloat = function( object, height, speed ) {
		object.y = 0;
		var pulseObj = createjs.Tween
			.get(object, {loop:true, override:true})
			.to({y:-height}, speed, createjs.Ease.sineInOut)
			.to({y:0}, speed, createjs.Ease.sineInOut);
		return pulseObj;
	}

	// good default to use for height=24, speed=500.
	_this.PulseArrow = function( object, height, speed ) {
		object.y = 0;
		var pulseObj = createjs.Tween
			.get(object, {loop:true, override:true})
			.to({y:-height}, speed, createjs.Ease.quadIn)
			.to({y:0}, speed / 2, createjs.Ease.quadIn);
		return pulseObj;
	}


	_this.PulseBlink = function( object, size, speed ) {
		// get the center of regstration
		object.scaleX = 1;
		object.scaleY = 1;
		object.alpha = 1;

		var pulseObj = createjs.Tween
			.get(object, {loop:true, override:true})
			.to({scaleX:size, scaleY:size, alpha:0.0}, speed, createjs.Ease.quadIn);
		return pulseObj;
	}
	
	
	_this.PulseHint = function( object, size, speed ) {

		// get the center of regstration
		object.scaleX = 1;
		object.scaleY = 1;
		object.alpha = 1;

		var pulseObj = createjs.Tween
			.get(object, {loop:true, override:true})
			.to({scaleX:size, scaleY:size, alpha:0.8}, speed, createjs.Ease.quadIn);
		return pulseObj;
	}

	
	_this.PulseGrow = function( object, size, speed ) {

		// get the center of regstration
		object.scaleX = 1;
		object.scaleY = 1;

		var pulseObj = createjs.Tween
			.get(object, {loop:true, override:true})
			.to({scaleX:size, scaleY:size}, speed)
			.to({scaleX:1, scaleY:1}, speed, createjs.Ease.quadIn);
		return pulseObj;
	}


	
	_this.PulseBouncy = function( object, scaleTo, speed ) {
		
		object.scaleX = 1;
		object.scaleY = 1;

		var pulseObj = createjs.Tween
			.get(object, {override:true})
			.to({scaleX:0.9, scaleY:0.9}, speed)
			.to({scaleX:scaleTo, scaleY:scaleTo}, speed * 3, createjs.Ease.elasticOut);
		return pulseObj;
	}


	_this.StopPulse = function ( object ) {
		createjs.Tween.removeTweens(object);
	}



	// Create text with borders
	_this.CreateFansyText = function ( value, size, glow, sizeOutline, color, colorOutline ) {

		var newText = new createjs.Container();

		var textOuter = new createjs.Text( value, "900 " + size + "px " + GameManager.FONT, colorOutline);
		textOuter.textBaseline = "middle";
		textOuter.textAlign = "center";
		textOuter.outline = sizeOutline;

		var textInner = new createjs.Text( value, "100 " + size + "px " + GameManager.FONT, color);
		textInner.textBaseline = "middle";
		textInner.textAlign = "center";

		if (!ss.SystemInfo.isMobile()) {
			textOuter.shadow = new createjs.Shadow(color, 0, 0, glow);
		}

		if (!ss.SystemInfo.isMobile()) {
			newText.addChild(textOuter);
		}

		newText.addChild(textInner);
		newText.textInner = textInner;
		newText.textOuter = textOuter;

		newText.ResetCache = function() {
			
		    if (textInner.getBounds() != null) {

				var textBound = {x: textInner.getBounds().x - size / 2,
								y: textInner.getBounds().y - size / 2,
								w: textInner.getBounds().width + size,
								h: textInner.getBounds().height + size};

				//var outline =  new createjs.Shape();
				//outline.graphics.beginStroke("#000000").drawRect(textBound.x, textBound.y, textBound.w, textBound.h);
				//newText.addChild(outline);

				newText.cache(textBound.x, textBound.y, textBound.w, textBound.h );
			}
		}

		newText.SetTextColor = function ( colorText, colorOutline ) {
			if (colorText) {
				textInner.color = colorText;
			}
			if (colorOutline) {
				textOuter.color = colorOutline;
			}
			newText.ResetCache();
		}
		
		newText.SetOutlineColor = function ( colorOutline ) {
			textOuter.color = colorOutline;
			newText.ResetCache();
		}

		newText.ResetCache();

		return newText;
	}





	// Given a color return the color darkened or brightened from the original.
	// @percent the percent of shade, 0 is original form, greater than 0 is brighter, less than 0 is darker.
	function _ShadeColor(color, percent) {   
	    var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
	    return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
	}


	// Blend two colors together
	function _BlendColors(c0, c1, p) {
	    var f=parseInt(c0.slice(1),16),t=parseInt(c1.slice(1),16),R1=f>>16,G1=f>>8&0x00FF,B1=f&0x0000FF,R2=t>>16,G2=t>>8&0x00FF,B2=t&0x0000FF;
	    return "#"+(0x1000000+(Math.round((R2-R1)*p)+R1)*0x10000+(Math.round((G2-G1)*p)+G1)*0x100+(Math.round((B2-B1)*p)+B1)).toString(16).slice(1);
	}


	// For testing use, make a semi transparent box of 20x20 pixel.
	_this.MakeShadowBox = function () {
		var boxArea = new createjs.Shape();
		boxArea.graphics.beginFill("#000000").drawRect(-10, -10, 20, 20);
		boxArea.alpha = 0.6;
		return boxArea;
	}




	// Used for the TileButton text flash
	_this.FlashNumber = function ( stage, startObj, endObj, speed ) {

		var tileText = startObj.text.textInner;
		var globalEndPos = endObj.localToGlobal(0, 0);
		var globalStartPos = startObj.localToGlobal(0, 0);

		var flashText = new createjs.Text( tileText.text, tileText.font, "#FFFFFF");
		flashText.textBaseline = "middle";
		flashText.textAlign = "center";
		flashText.alpha = 0.5;
		flashText.x = globalStartPos.x;
		flashText.y = globalStartPos.y;

		createjs.Tween.get(flashText, {override:true})
			.to({x: globalEndPos.x, y: globalEndPos.y, scaleX:5, scaleY:5}, speed, createjs.Ease.cubicOut)
			.call(function() {
				_createFlashEmitter(stage, globalEndPos);
				stage.removeChild(flashText);
			});

		stage.addChild(flashText);
	}



	function _createFlashEmitter( stage, position ) {

		var starParticleImg = CreateJSAssetManager.getImage("GameParticleBling");

		var factory = new ss.BitmapParticleFactory(starParticleImg);
		var shape = new ss.RadialSpawnShape(new Vector2(0, -5), 50, 100, 1000, 0, 360);
		//var shape = new LineSpawnShape(-100, 0, 100, 0, 0, 50);
		//var timer = new UniformSpawnTimer(300);
		var timer = new ss.BurstSpawnTimer(40, 10);

		var emitter = new ss.CreateJSParticleEmitter();
		//emitter.setupFromObjects(6000, 1, 1, factory, timer, shape, [new InterpolatePropertyUpdater("alpha", 0.6, 0, Interpolation.inverseSquared), new ForceUpdater(800, 500)], stage);
		/*
		emitter.setupFromObjects(6000, 1, 1, factory, timer, shape,[new PropertyRateChangeUpdater("rotation", 360), 
			new InterpolatePropertyUpdater("scaleX", 1, 0, Interpolation.inverseSquared),
			new InterpolatePropertyUpdater("scaleY", 1, 0, Interpolation.inverseSquared),
			new InterpolatePropertyUpdater("alpha", 0.6, 0, Interpolation.inverseSquared),
			new ForceUpdater(0, 1000)], stage);
		*/
		
	
		emitter.setupFromObjects(1000, 0.25, 0.75, factory, timer, shape, 
			[//new InterpolatePropertyUpdater("alpha", 1 0.5, Interpolation.squared), 
			new ss.InterpolatePropertyUpdater("scaleX", 1, 0.01, Interpolation.inverseSquared),
			new ss.InterpolatePropertyUpdater("scaleY", 1, 0.01, Interpolation.inverseSquared),
			new ss.PropertyRateChangeUpdater("rotation", 100),
			new ss.DragUpdater(0.01),
			new ss.ForceUpdater(0, 3000),
			], stage);

		stage.addChild(emitter);
		emitter.x = position.x;
		emitter.y = position.y;
		emitter.startEmit(true);
	}


	/**
	 * Used to create a box of stary bling effect
	 * @param stage: createjs.Container() - the parent container for the particle container
	 * @return the particle emitter
	 */
	_this.CreateBlingEffect = function (stage) {
		var emitPos = {x:0, y:0};
		return _createBlingEmitter(stage, new createjs.Rectangle(-300, -240, 600, 400));
	}

	
	function _createBlingEmitter( stage, blinAreaRect ) {

		var starParticleImg = CreateJSAssetManager.getImage("GameParticleBling");

		var factory = new ss.BitmapParticleFactory(starParticleImg);
		//var shape = new RadialSpawnShape(new Vector2(0, 0), 10, 50, 500, 0, 360);
		var shape = new ss.BoxSpawnShape(blinAreaRect, 0, 24, -180, 150);
		//var shape = new LineSpawnShape(-100, 0, 100, 0, 0, 50);
		var timer = new ss.UniformSpawnTimer(10);
		//var timer = new BurstSpawnTimer(50, 10);

		var emitter = new ss.CreateJSParticleEmitter();
		//emitter.setupFromObjects(6000, 1, 1, factory, timer, shape, [new InterpolatePropertyUpdater("alpha", 0.6, 0, Interpolation.inverseSquared), new ForceUpdater(800, 500)], stage);
		/*
		emitter.setupFromObjects(6000, 1, 1, factory, timer, shape,[new PropertyRateChangeUpdater("rotation", 360), 
			new InterpolatePropertyUpdater("scaleX", 1, 0, Interpolation.inverseSquared),
			new InterpolatePropertyUpdater("scaleY", 1, 0, Interpolation.inverseSquared),
			new InterpolatePropertyUpdater("alpha", 0.6, 0, Interpolation.inverseSquared),
			new ForceUpdater(0, 1000)], stage);
		*/
		
	
		emitter.setupFromObjects(1000, 0.5, 1, factory, timer, shape, 
			[
			//new InterpolatePropertyUpdater("alpha", 0.0, 1, Interpolation.inverseSquared), 
			new ss.InterpolatePropertyUpdater("alpha", 1, 0, Interpolation.squared), 
			new ss.InterpolatePropertyUpdater("scaleX", 0.25, 2, Interpolation.inverseSquared), 
			new ss.InterpolatePropertyUpdater("scaleY", 0.25, 2, Interpolation.inverseSquared), 
			new ss.PropertyRateChangeUpdater("rotation", 120)
			//new InterpolatePropertyUpdater("alpha", 1.0, 0.5, Interpolation.inverseSquared), 
			//new InterpolatePropertyUpdater("scaleX", 0.01, 1.0, Interpolation.inverseSquared),
			//new InterpolatePropertyUpdater("scaleY", 0.01, 1.0, Interpolation.inverseSquared),
			//new PropertyRateChangeUpdater("rotation", 12),
			//new DragUpdater(0.005),
			//new ForceUpdater(0, -10),
			], stage);

		stage.addChild(emitter);
		return emitter;
	}


	// Create text with borders
	_this.CreateLevelNumber = function ( value, size, glow, sizeOutline, color, colorOutline ) {

		var newText = new createjs.Container();

		var textOuter = new createjs.Text( value, "900 " + size + "px " + GameManager.FONT, colorOutline);
		textOuter.textBaseline = "bottom";
		textOuter.textAlign = "center";
		textOuter.outline = sizeOutline;

		var textInner = new createjs.Text( value, "300 " + size + "px " + GameManager.FONT, color);
		textInner.textBaseline = "bottom";
		textInner.textAlign = "center";

		if (!ss.SystemInfo.isMobile()) {
			newText.addChild(textOuter);
		}
		newText.addChild(textInner);
		newText.textInner = textInner;
		newText.textOuter = textOuter;

		newText.ResetCache = function() {
			
		    if (textInner.getBounds() != null) {

				var textBound = {x: textInner.getBounds().x - size / 2,
								y: textInner.getBounds().y - size / 2,
								w: textInner.getBounds().width + size,
								h: textInner.getBounds().height + size};

				//var outline = new createjs.Shape();
				//outline.graphics.beginStroke("#000000").drawRect(textBound.x, textBound.y, textBound.w, textBound.h);
				//newText.addChild(outline);

				newText.cache(textBound.x, textBound.y, textBound.w, textBound.h );
			}
		}

		newText.SetTextColor = function ( colorText, colorOutline ) {
			if (colorText) {
				textInner.color = colorText;
			}
			if (colorOutline) {
				textOuter.color = colorOutline;
			}
			newText.ResetCache();
		}

		newText.SetOutlineColor = function ( colorOutline ) {
			textOuter.color = colorOutline;
			newText.ResetCache();
		}

		newText.ResetCache();

		return newText;
	}




	return _Construct();
}
