// JavaScript Document

/*
 * kidsCarousel - A feature rotator for awesome people
 *   http://pbskids.org/pbskidswidgets/carousel.html
 *
 * Copyright (c) 2009 PBS KIDS (http://pbskids.org)
 * Written by Nate Eagle
 *
 * Built on top of the jQuery library
 *   http://jquery.com
 *
 */

(function($) {
	// Plugin Definition
	jQuery.fn.kidsCarousel = function(options) {
	  
		// Extend our default options with those provided.
		// Note that the first arg to extend is an empty object -
		// this is to keep from overriding our "defaults" object.
		var opts = jQuery.extend({}, jQuery.fn.kidsCarousel.defaults, options);
		
		// Our plugin implementation code goes here.
		
		var element = this;
		
		jQuery(window).load(function() {
			return element.each(function(){
				var carousel = this;
				var $this = jQuery(this);
				
				var panelWidth;
				var panelExtraWidth;
				var numChildren;
				
				// Give all interior elements the class "panel"
				var $panels = $this.children(opts.panel);
				$panels.addClass('panel');
				// Wrap the children in a single, larger div
				$this.wrapInner('<div class="kidsCarouselStrip"></div>');
				var $strip = $this.children('.kidsCarouselStrip');
				
				// Set the width of panels to be equal to the width of the container element
				panelWidth = $this.width();
				
				// Create an array to tally up the total extra width elements (padding, margin, border) for panels
				var panelExtraWidthArray = new Array();
				panelExtraWidthArray[0] = parseInt($panels.css('padding-left'));
				panelExtraWidthArray[1] = parseInt($panels.css('padding-right'));
				panelExtraWidthArray[2] = parseInt($panels.css('margin-left'));
				panelExtraWidthArray[3] = parseInt($panels.css('margin-right'));
				panelExtraWidthArray[4] = parseInt($panels.css('border-left-width'));
				panelExtraWidthArray[5] = parseInt($panels.css('border-right-width'));
				
				panelExtraWidth = 0;
				for(var i=0;i<panelExtraWidthArray.length;i++) {
					// If any item is not a number (ie "auto"), set it to zero
					if(isNaN(panelExtraWidthArray[i]) == true) {
						panelExtraWidthArray[i] = 0;
					}
					// Make sure the variable is a number
					panelExtraWidthArray[i] = panelExtraWidthArray[i] * 1;	
					panelExtraWidth += panelExtraWidthArray[i];
				};
				
				// Calculate number of children
				numChildren = $strip.children().size();
				
				
				
				// Create styles that result from the above properties
				$strip.css({
					'left' : 0,
					'position' : 'absolute',
					'top': 0 + $this.css('padding-top'),
					'width' : numChildren * panelWidth + 'px'
				});
				
				$panels.css({
					'display' : 'inline',
					'float' : 'left',
					'width' : panelWidth - panelExtraWidth + 'px'
				});
				
				$this.css({
					'overflow' : 'hidden',
					'position' : 'relative'
				});
				
				$this.css({
					'height' : $strip.height() + 'px'
				});
				
				var startChild;
				if (opts.randomStart == true) {
					startChild = Math.floor((Math.random() * numChildren) + 1);
				} else {
					startChild = 1;
				}
				$strip.css({
					'left' : -((startChild * panelWidth) - panelWidth) + 'px'
				});
				
				// Create navigation if enabled
				// var $navigation;
				// var $panelNavigation;
				
				if (opts.navigation == true) {
					// Relative Navigation (ie back, forward)
					if (opts.relativeNav == true) {
						$this.append('<div class="kidsCarouselNavigation"><a href="" class="back">' + opts.relativeNavButtons[0] + '</a><span class="kidsCarouselNavigationList"></span><a href="" class="forward">' + opts.relativeNavButtons[1] + '</a></div>');
					} else {
						// No Relative Navigation
						$this.append('<div class="kidsCarouselNavigation"><span class="kidsCarouselNavigationList"></span></div>');
					};
					
					var $navigation = $this.children('.kidsCarouselNavigation');
					var $relativeNavBack = $navigation.children('a.back');
					var $relativeNavForward = $navigation.children('a.forward');
					
					$navigation.children('a').css({
						'display' : 'block',
						'float' : 'left'
					});
					
					var $panelNavigation = $navigation.children('.kidsCarouselNavigationList');
					
					// Create panel navigation if enabled
					if (opts.panelNav == true) {
						// Create panel nav pulled from panel titles
						if (opts.panelNavType == 'title') {
							var $titles = $panels.children(opts.panelTitle);
							$titles.each(function(i){
								var titleText;
								if (jQuery(this).attr('title') != '') {
									titleText = jQuery(this).attr('title');
								} else {
									titleText = jQuery(this).text();
								}
								$panelNavigation.append('<a href="#">' + titleText + '</a>');
							});
						}
						
						// Create panel nav of numbers
						if (opts.panelNavType == 'number') {
							$panels.each(function(i){
								$panelNavigation.append('<a href="#">' + (i+1) + '</a>');
							});
						}
						var $panelNavigationLinks = $panelNavigation.children('a');
						$panelNavigation.children().css({
							'display' : 'block',
							'float' : 'left'
						});
					};
					
				};
							
				var innerCarouselWidth = $this.width() + parseInt($this.css('padding-left')) + parseInt($this.css('padding-right'));
				var extraNavigationWidth = parseInt($navigation.outerWidth(true)) - parseInt($navigation.width());
				$navigation.css({
					'bottom' : 0,
					'float' : 'left',
					'left' : 0,
					'position' : 'absolute',
					'width' : innerCarouselWidth - extraNavigationWidth + 'px'
				});
				$this.css({
					'padding-bottom' : parseInt($this.css('padding-bottom')) + $navigation.outerHeight(true) + 'px'
				});
				
				$panelNavigation.children('a:nth-child(' + startChild + ')').addClass('current');
				
				addClickEvents(this);
				
				if (opts.autoAdvance == true) {
					// Initialize autoadvance
					beginAutoAdvance(this, opts.delay);
					
					// Pause autoadvance on hover
					$this.mouseover(function() {
						clearTimeout(autoAdvanceTimer);
					});
					// Resume autoadvance on mouseout
					$this.mouseout(function() {
						beginAutoAdvance(this, opts.delay);
					});
				};
				
				
				
				var autoAdvanceTimer;
	
	//
	// Private Functions
	// 
	function beginAutoAdvance(carousel, delay) {
		autoAdvanceTimer = setTimeout(function() {
			slide(carousel, 'forward', true, delay);
		}, delay);
		/* autoAdvanceTimer = setTimeout(function() {
			slide(carousel, 'forward', true);
		}, delay); */
		// alert(autoAdvanceTimer);
	}
	
	function addClickEvents(carousel) {
		var $back = jQuery(carousel).children('.kidsCarouselNavigation').children('a.back');
		var $forward = jQuery(carousel).children('.kidsCarouselNavigation').children('a.forward');
		var $navlinks = jQuery(carousel).children('.kidsCarouselNavigation').children('.kidsCarouselNavigationList').children('a');
		
		if (opts.relativeNavCustomButtons[0] != null) {
			var $customBack = jQuery(opts.relativeNavCustomButtons[0]);
			var $customForward = jQuery(opts.relativeNavCustomButtons[1]);
			
			$customBack.click(function() {
				slide(carousel, 'backward', false);
				return false;
			});
			
			$customForward.click(function() {
				slide(carousel, 'forward', false);
				return false;
			});
		};
		
		$back.click(function() {
			slide(carousel, 'backward', false);
			return false;
		});
		
		$forward.click(function() {
			slide(carousel, 'forward', false);
			return false;
		});
		
		$navlinks.each(function(i) {
			jQuery(this).click(function() {
				slide(carousel, 'forward', false, 0, i + 1);
				return false;
			});
		});
	}
	
	function removeClickEvents(carousel) {
		var $back = jQuery(carousel).children('.kidsCarouselNavigation').children('a.back');
		var $forward = jQuery(carousel).children('.kidsCarouselNavigation').children('a.forward');
		var $navlinks = jQuery(carousel).children('.kidsCarouselNavigation').children('.kidsCarouselNavigationList').children('a');
		
		if (opts.relativeNavCustomButtons[0] != null) {
			var $customBack = jQuery(opts.relativeNavCustomButtons[0]);
			var $customForward = jQuery(opts.relativeNavCustomButtons[1]);
			
			$customBack.unbind('click');
			$customForward.unbind('click');
			
			$customBack.click(function() {
				return false;
			});
			
			$customForward.click(function() {
				return false;
			});
		};
		
		$back.unbind('click');
		$forward.unbind('click');
		$navlinks.unbind('click');
		$back.click(function() {
			return false;
		});
		$forward.click(function() {
			return false;
		});
		$navlinks.each(function(i) {
			jQuery(this).click(function() {
				return false;
			});
		});
	};
	
	function slide(carousel, direction, auto, delay, destination) {
		
		clearTimeout(autoAdvanceTimer);
		
		if (typeof auto == 'undefined' ) auto = true;
		if (typeof delay == 'undefined' ) delay = 0;
		if (typeof destination == 'undefined' ) { destination = 'undefined' };
		
		removeClickEvents(carousel);
		
		// alert(carousel);
		var $carousel = jQuery(carousel);
		var panelWidth = $carousel.width();
		var $strip = jQuery(carousel).children('.kidsCarouselStrip');
		var $navigation = $carousel.children('.kidsCarouselNavigation');
		var $panelNavigation = $navigation.children('.kidsCarouselNavigationList');
		
		var position = $strip.position();
		var currentChild = Math.ceil(Math.abs(position.left - panelWidth) / panelWidth);
		var totalChildren = $strip.width() /  panelWidth;
		var nextPosition;
		
		// Do nothing if already at destination
		if ( currentChild == destination ) {
			addClickEvents(carousel);
			return false;
		}
		
		// Set nextChild for forward and back buttons
		if (destination == 'undefined') {
			if (direction=='forward') {
				destination = currentChild + 1;
			} else {
				destination = currentChild - 1;
			};
		}
		
		// Set nextPosition
		nextPosition = -((destination * panelWidth) - panelWidth);
		
		if (destination > totalChildren || destination < 1) {
			$strip.clone().prependTo(carousel);
			var cloneDestination;
			
			if (destination > totalChildren) {
				$carousel.children('.kidsCarouselStrip:nth-child(2)').css({'left' : panelWidth + 'px'});
				cloneDestination = 0;
			} else {
				$carousel.children('.kidsCarouselStrip:nth-child(2)').css({'left' : -($strip.width()) + 'px'});
				cloneDestination = -($strip.width() - panelWidth);
			}
			
			$carousel.children('.kidsCarouselStrip:nth-child(1)').animate({'left' : nextPosition + 'px'}, 'slow', function() {
				$carousel.children('.kidsCarouselStrip:nth-child(1)').remove();
				addClickEvents(carousel);
			});
			$carousel.children('.kidsCarouselStrip:nth-child(2)').animate({'left' : cloneDestination + 'px'}, 'slow');
		} else {	
			$strip.animate({'left' : nextPosition + 'px'}, 'slow', function() {
				addClickEvents(carousel);
			});
		}
		
		
		$panelNavigation.children('a.current').removeClass('current');
		
		if ( destination > totalChildren ) { destination = 1; }
		if ( destination < 1 ) { destination = totalChildren; }
		
		$panelNavigation.children('a:nth-child(' + destination + ')').addClass('current');
			
		if (auto==true) { beginAutoAdvance(carousel, delay); };
		
	}
				
				
		});
		
		});
	};
	
	
	
	//
	// Plugin defaults
	//
	jQuery.fn.kidsCarousel.defaults = {
		autoAdvance: true,
		delay: 7000,
		navigation: true,
		panel: 'div',
		panelNav: false,
		panelNavType: 'number',
		panelTitle: 'h4',
		randomStart: true,
		relativeNav: true,
		relativeNavButtons: ['<img src="images/backward.png" />', '<img src="images/forward.png" />'],
		relativeNavCustomButtons: [null, null]
	};

// End of Closure
})(jQuery);