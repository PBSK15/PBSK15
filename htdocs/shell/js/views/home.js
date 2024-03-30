(function( require, define, factory ){
	//PBS AMD support for PBS.KIDS.requireJS
  if( typeof define === "function" && define.amd ){
    define(["jquery", "images-loaded", "jquery-easing", "jquery-mobile", "carson"], factory );
  }
  else{
    factory( jQuery );
  }
}(PBS.KIDS.require, PBS.KIDS.define, function( $ ){

	//var _SITE_ROOT = href.match(/\/~/) ? href.substring(0,href.indexOf("site") + 4) + "/" : "/shell/";
	
	(function( onCarsonReady ){
		if(typeof PBS !== "undefined" && PBS.KIDS && PBS.KIDS.carson) {
			//do this check in case carson fires the carson.load method
			//prior to this script setting up the listener for it
			//this will be the case 99% of the time
			onCarsonReady();
		}
		else{
			//this should be the case only if AMD is not used
			$('body').on('carson.load', onCarsonReady);
		}
	}(function(event) {
    PBS.KIDS.carson.init({
        rules: {
            /**
             * Mezzanine for all high pixel density displays.
             * Large for everything else.
             */
            'retina-optimized': function() {
                var opera_density = '2.99/2';
                var webkit_density = '1.499';
                var density_queries = [
                    'only screen and (min-device-pixel-ratio:' + webkit_density + ')',
                    'only screen and (-webkit-min-device-pixel-ratio:' + webkit_density + ')',
                    'only screen and (min--moz-device-pixel-ratio:' + webkit_density + ')',
                    'only screen and (-o-min-device-pixel-ratio:' + opera_density + ')'
                ];

                for (var i=0; i<density_queries.length; i++) {
                    if (Modernizr.mq(density_queries[i])) {
                        return 'mezzanine';
                    }
                }

                return 'large';
            }
        }
    });
	}));

	$(document).ready(function() {
		var scroll_container = $('html, body');
		var top_panel = $('.scroll-panel.top');
	    var sub_panel =  $('.scroll-panel.sub');
	    var sub_panel_peak_height = 95;
	    var snap_back_timeout = null;
	    var current_position;

	    var page_position = function () {

	        if (current_position ==  $(sub_panel).offset().top + 120) {
	            $(sub_panel).addClass('active-frame');  
	              
	        } else  {
	            $(sub_panel).removeClass('active-frame'); 
	        } 
	        
	        if (current_position > $(sub_panel).offset().top) {
	            $(sub_panel).find('.scroll-arrow').removeClass('down').addClass('up');
	            $(sub_panel).addClass('in-view');          
	        } else {
	            $(sub_panel).find('.scroll-arrow').removeClass('up').addClass('down');
	            $(sub_panel).removeClass('in-view');
	        }
	    };
	    
	    page_position(); 
	    
	    var snap_back_action = function () {
	         
	    } 
	    
	    var top_panel_height = function () {   
		     top_panel.height($(window).height() - $('#headband-container').height() -  sub_panel_peak_height);
		}  
		
		top_panel_height();  
		
		$(document).trigger("themestage.ready");
	    
	    $(document).scroll(function() {
	        current_position = $(document).scrollTop();            
	        page_position(); 
	        
	    });
	    
	    $('.scroll-arrow').on('mousedown touchend',function(event){
	        var scroll_button = $(event.target);
	        
	        if (scroll_button.hasClass('up')){
	            scroll_container.stop().animate({
	                scrollTop: $('body').offset().top
	            }, 1500, 'easeOutBack', function() {
	            	scroll_button.removeClass('up').addClass('down');
	            });
	            
	        } else {
	            scroll_container.stop().animate({
	                scrollTop: $(sub_panel).offset().top + 4
	            }, 1500,'easeOutBack', function() {
	            	scroll_button.removeClass('down').addClass('up');
	            });         
	        }          

	        event.preventDefault();
	    });
		
		//Grid Tabs
		var grid_tab_container = $('.grid-tabs');
		var grid_stage = grid_tab_container.find('.the-pusher');
		var panel_head = $('.panel-head');
		var active_grid_tab = $('.promo-grid.active');
		var show_all_button = grid_tab_container.find('.show-all');
		var last_grid_image = active_grid_tab.find('.grid-item:last-child');

		var grid_aligment = function () {
			var grid_image_position = last_grid_image.position();
			var button_align_position = grid_image_position.left + last_grid_image.width();
			
			if ($('html').hasClass('no-flash')){
			
				// if no flash set height to match fallback
				grid_stage.height($('#no-flash-list').height() + 30);
				
				//Align Show-All Button
				show_all_button.css('marginRight', function() {
					var last_grid_image = $('#no-flash-list .grid-item:last-child');
					var grid_image_position = last_grid_image.position();
					var button_align_position = grid_image_position.left + last_grid_image.width();
					
					return  $('#no-flash-list').width() - button_align_position - 10;  
				});	
			} else {
				// else set to height of active container
				grid_stage.height(active_grid_tab.height());
				
				//Align Show-All Button
				show_all_button.css('marginRight', function() {
				  return  active_grid_tab.width() - button_align_position - 10;  
				});
			}
			
			setTimeout(function() {
				$('#6-to-8').addClass('content-ready');
			}, 300);
			
			$('.sub .grid-tabs .show-all').css('display', 'block');	
		}
		
		var align_pancake_mini = function() {
			if ($(window).width() <= 601){
				$('#mega-promo').css('top', function(index) {
					return $('.the-pusher').height() + 88;
				});
			} else {
				$('#mega-promo').css('top', function(index) {
					return '0px';
				});
			}		
			
		}
		// Move inactive panels off screen	
		var hide_inactive_panels = function() {
			var other_panels = $('.promo-grid.tabbed').not('.active');
			
			other_panels.css('marginLeft', function() {
				return -(grid_tab_container.width() + grid_tab_container.offset().left + 50); 
			});
		}
		
		// Grid Tabs Animation	
		function animate_grid_panel(panel) {	
			panel.addClass('active');	
			
			if (panel.is('#hard-list')){
			  	$('.show-all.games em span').text('All Hard Games');
			  	$('.show-all.games').attr('href', 'games/#hard-games-panel');
		  	} else {
			  	$('.show-all.games em span').text('All Games');
			  	$('.show-all.games').attr('href', 'games/');
		  	}
							
			$(panel).animate({
			    marginLeft: '0'
			  }, 1000, 'easeOutBack', function() {
			  	hide_inactive_panels();		  	
			});	  
		}
		
		panel_head.on('mousedown touchend', function(){
			if ($('html').hasClass('has-flash')){
				var sibling_grid_panel = $('#'+ $(this).data('sibling-panel') +'');
				var active_grid_panel = $('.promo-grid.active');
		
				active_grid_panel.removeClass('active');
				panel_head.removeClass('active');
				$(this).addClass('active');

				GA_obj.trackEvent("Promo Grid", "Panel Selected" , $(this).text() +" | "+$(window).width()+"x"+$(window).height());
				
				hide_inactive_panels();
				
				animate_grid_panel(sibling_grid_panel); 
			}
		});
		
		// Special GA Events
		$('#6-to-8 .promo-grid .grid-item .promo-graphic').on('click', function(e){
			var promo_graphic_link = $(this).attr('href');
			var view_port = $(window).width() + "x" + $(window).height(); 
			var promo_graphic_index = $(this).parents('.grid-item').index() + 1;
			var selected_panel_name = $('#6-to-8 .panel-head.active').text();
			
			e.preventDefault();	
		    
		    GA_obj.trackEvent("Promo Grid", "Game Selected" , promo_graphic_link +" | "+ selected_panel_name +" | "+ view_port + " | Position: "+ promo_graphic_index);
		    
		    setTimeout(function(){
		    	window.location.href = promo_graphic_link;
		    }, 100);
		});
		
		show_all_button.on('click', function(e){	
			var button_link = $(this).attr('href');
			var view_port = $(window).width() + "x" + $(window).height();
			var selected_panel_name = $('#6-to-8 .panel-head.active').text();
			
			e.preventDefault();
			
			GA_obj.trackEvent("Promo Grid", "Panel Selected" ,  "All Games Selected | "+ selected_panel_name +" | "+ view_port);
			
			setTimeout(function(){
		    	window.location.href = button_link;
		    }, 100);
		});
		
		$('#6-to-8 .timely-badges .badge > a').on('click', function(e){
		    var badge_link = $(this).attr('href');
			var badge_name = $(this).find('em').text();
			var view_port = $(window).width() + "x" + $(window).height(); 
			var badge_index = $(this).parents('.badge').index() + 1;
			
			e.preventDefault();	
		    
		    GA_obj.trackEvent("Timely Badges", "Badge Selected" , badge_name +" | "+ view_port + " | Position: "+ badge_index);
		    
		    setTimeout(function(){
		    	window.location.href = badge_link;
		    }, 100);
		});
		
		$('#mega-promo a').on('click', function(e){
		    var promo_link = $(this).attr('href');
		    var promo_version = $(this).attr('class');
			var view_port = $(window).width() + "x" + $(window).height(); 
			
			e.preventDefault();	
		    
		    GA_obj.trackEvent("Mega Promo", "Promo Selected" , promo_link +" | "+ promo_version +" | "+ view_port);
		    
		    setTimeout(function(){
		    	window.location.href = promo_link;
		    }, 100);
		});
		
		// End Special GA Events
		
		if ($('html').hasClass('no-flash')){
			$('#no-flash-list').imagesLoaded( function() {
				grid_stage.height(active_grid_tab.height());
				grid_aligment();
				align_pancake_mini();
				hide_inactive_panels();			
			});	
		} else {
			active_grid_tab.imagesLoaded( function() {
				grid_stage.height(active_grid_tab.height());
				grid_aligment();
				align_pancake_mini();
				hide_inactive_panels();
			});	
		}
		
		$(window).resize(function() {
			grid_aligment();
			top_panel_height();
			align_pancake_mini();
			hide_inactive_panels()		
		});
		
		// Theme Color Switcher
	    $('.color-selection .input-group').on('vmousedown', function(){
	    	var color_selection = $(this);
	    	var color_selection_value = color_selection.find('input').attr('value');
	    	
	    	color_selection.addClass('selected'); 
	    	color_selection.siblings().removeClass('selected'); 
	    	
	    	$('body').attr('style', '');
	    	
	    	if (color_selection.hasClass('hex')) {
	    		$('body').css('background-color',  ''+ color_selection_value +'');
	    	} else {
	    		$('body').removeClass('magenta green seafoam blue yellow');
	    		$('body').addClass(color_selection_value);
	    	}
	    }); 
	     
	    // Create Video Teaser Container
	    var init_video_teaser = function () {   
	    	var video_button = $('.phat-button.videos');
	    	var video_element = $('<video id="video-teaser"></video>');
	    	var teaser_url;
	    	
	    	var xml = $.ajax({
	    		url: 'https://pbskids.org/video/data/pbsKidsVideo.xml',
	    		success: function(data){
	    			var teaser_xml = $(data);
	    			teaser_url = teaser_xml.find("videoURL");
	    		}
	    	});
	    	
	    	if (Modernizr.isios == false && Modernizr.video.h264 === "probably") {

	    		// bind events 
	    		video_element.on("ended", function() {
				    video_button.addClass('video-done');
				});
				
				video_element.error(function() {
					video_button.addClass('no-video');
				});
				
				// create DOM elements 
	    		$('body').one('wheel.ready', function(event){
	    			video_button.append(video_element);
	    			
	    			setTimeout(function(){
	    			    if (typeof teaser_url !== "undefined") {
	    				   video_element.attr('src', teaser_url.text()).get(0).play();
	    				   video_button.addClass('video-ready');
	    				}
	    			}, 600);
	    		});
	    		
	    	} else {  	
				video_button.addClass('no-video');
	        }
		    
	    }
	    
	    var href = ( window.top != window ) ? document.referrer : window.location.href ;
	    if (!href.match(/(dev)\.pbskids\.org\//)) {
	        if (!$('body').hasClass('os-video-theme')) {
	            init_video_teaser();
	        }
	    }
	    
	    /* UI Audio
	    var soundJSON = $.getJSON( _SITE_ROOT + 'audio/views/home/audiosprite.json', function() { })
	    .done(function(data){
	        var audio_spritemap = data.spritemap;
	        
	        var ui_audio = new Howl({
	        	urls: [ _SITE_ROOT + 'audio/views/home/audiosprite.mp3', _SITE_ROOT + 'audio/views/home/audiosprite.ogg'],
	        	sprite: {
				   video: [(audio_spritemap.video.start) * 1000, (audio_spritemap.video.end - audio_spritemap.video.start) * 1000],
				   games: [(audio_spritemap.games.start) * 1000, (audio_spritemap.games.end - audio_spritemap.games.start) * 1000],
				   pbskids: [(audio_spritemap['pbs-kids'].start) * 1000, (audio_spritemap['pbs-kids'].end - audio_spritemap['pbs-kids'].start) * 1000]
				}
	        });
	        
	        $('.nav-buttons .phat-button').on('mouseenter touchstart', function(){
	        	if ($('body').hasClass('quiet-a-sec')){
	        		// Shut Up!
	        	} else {
			    	if ($(this).hasClass('videos')){
			    		ui_audio.play('video');
			    	} else {
				    	ui_audio.play('games');
			    	}
		    	}   	
	        });
		    
		    $('header.brand').on('mouseenter touchstart', function(){
		    	if ($('body').hasClass('quiet-a-sec')){
	        		// Shut Up!
	        	} else {
		    		ui_audio.play('pbskids');
		    	}
		    });
		    
		    $('.ui-audio').on('mouseleave', function(e){
	            ui_audio.stop();
		    });
		   
	    }); */  

	});
}));