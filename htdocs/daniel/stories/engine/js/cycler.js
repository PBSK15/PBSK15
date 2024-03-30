//  ------------------------------------------------------------------
//  cycler.js
//
//  Copyright 2012 PBS KIDS Interactive. All Rights Reserved.

PBS.KIDS.storybook.cycler = function (GLOBAL, PBS, options, pageObj) {
	
	"use strict";
	
	var that = PBS.KIDS.storybook.eventDispatcher(),
		initialized = false,
		itemArray = [],
		started = false,
		activeIndex = 0, // Index of the item that is currently shown
		playThrough = options.playThrough || false,
		stopAfterPlayThrough = options.stopAfterPlayThrough || false,

		init = function () {
		
			var i, curItem, config;

			if (!initialized) {
				initialized = true;
				
				// For each item on the page
				if (options && options.content) {
					for (i = 0; i < options.content.length; i += 1) {
						
						config = options.content[i];
						config.parentElement = options.parentElement;
						config.parentWidth = options.parentWidth;
						config.parentHeight = options.parentHeight;
						if (options.className) {
							config.className = options.className + "Sprite" + (i + 1);
						}

						curItem = PBS.KIDS.storybook.sprite(GLOBAL, PBS, config, pageObj);

						if ( !(options.isClickable === false) )
						{
							curItem = PBS.KIDS.storybook.makeInteractionObject(GLOBAL, PBS, curItem);
							curItem.addEventListener("PRESS", function(e) {
							
								if ( stopAfterPlayThrough )
									return;

								that.dispatchEvent("PRESS", {
									x: e.x,
									y: e.y
								});

								options.onPress && options.onPress();

								if ((started || !itemArray[0].isAnimation() || that.autoStart) && !playThrough || options.canPlayAgain)
								{
									that.cycle();
									started = true;
								}
								else if ( !itemArray[activeIndex].isPlaying() ) 
								{
									updateAnimation();
									updateVisibility();
									started = true;
								}
							});
						}

						curItem.addEventListener('ANIMATION_COMPLETE', function(e)
						{
							if ( playThrough )
							{
								// increment counter
								activeIndex++;

								// play the next one?
								if ( itemArray[activeIndex] && itemArray[activeIndex].autoStart )
								{
									itemArray[activeIndex].reset();
									itemArray[activeIndex].play();
									updateVisibility();
								}

								// reset back to the first a specific index?
								else if ( itemArray[activeIndex - 1] && itemArray[activeIndex - 1].autoReset )
								{
									var reseted = itemArray[activeIndex - 1].resetToIndex;

									activeIndex = reseted || 0;
									itemArray[activeIndex].reset();

									if ( itemArray[activeIndex].autoStart )
										itemArray[activeIndex].play();

									updateVisibility();

									if ( reseted )
										activeIndex++;
								}
							}
						})
						
						itemArray.push(curItem);
					}
				} else {
					PBS.KIDS.storybook.error("Cycler missing content array.");
				}
			}
		},
		
		updateVisibility = function () {
		
			var i;
		
			// Hide all items and show the active item
			for (i = 0; i < itemArray.length; i += 1) {
				itemArray[i].visible = (i === activeIndex);
				itemArray[i].dirty = true;
				itemArray[i].render();
			}
		},
		
		updateAnimation = function () {

			var i;
		
			// Reset all items and play the active item
			for (i = 0; i < itemArray.length; i += 1) {
				if (i === activeIndex) {
					itemArray[i].play();
				} else {
					itemArray[i].reset();
				}
			}
		};
	
	// Public properties
	that.x = options && (options.x !== undefined) ? options.x : 0;
	that.y = options && (options.y !== undefined) ? options.y : 0;
	that.width = options && (options.width !== undefined) ? options.width : 0;
	that.height = options && (options.height !== undefined) ? options.height : 0;
	that.autoStart = options && (options.autoStart !== undefined) ? options.autoStart : true;
	that.autoReset = options && (options.autoReset !== undefined) ? options.autoReset : false;
	that.id = options ? options.id : null;

	// Display the next item in list
	that.cycle = function () {

		// Increment the item index
		if (activeIndex < itemArray.length - 1 && !playThrough) {
			activeIndex += 1;
		} else {
			activeIndex = 0;
		}

		updateAnimation();
		updateVisibility();
	};
	
	// Play the active item
	that.play = function (forced) {
	
		itemArray[activeIndex].play(forced);
	};
	
	// Resume the active item
	that.resume = function () {
	
		itemArray[activeIndex].resume();
	};
	
	// Stop the active item
	that.stop = function () {
	
		itemArray[activeIndex].stop();
	};
	
	// Reset the active item
	that.reset = function (forced) {
	
		started = false;
		activeIndex = 0;
		itemArray[activeIndex].reset(forced);
		updateVisibility();
	};
	
	// Update the active item
	that.update = function () {
	
		itemArray[activeIndex].update();
	};
	
	// Render the active item
	that.render = function () {
	
		if ( itemArray[activeIndex] )
			itemArray[activeIndex].render();
		else 
			activeIndex--;
	};
	
	that.destroy = function () {
	
		var i;
	
		for (i = 0; i < itemArray.length; i += 1) {
			itemArray[i].destroy();
		}
		itemArray = null;
		that = null;
	};

	that.getElement = function()
	{
		return itemArray;
	};

	that.onPageTurnStart = function()
	{
		if ( options.onPageTurnStart )
			options.onPageTurnStart();
	};

	that.onPageTurnEnd = function()
	{
		if ( options.onPageTurnEnd )
			options.onPageTurnEnd();
	};
	
	init();
	
	return that;
};