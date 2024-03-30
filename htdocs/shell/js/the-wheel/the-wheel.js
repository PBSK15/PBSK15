(function ( factory ) {
	var deps = [ "jquery", "images-loaded", "jquery-bxslider", "swf-object" ];

	//Load kinetic if addEventListener is available and if Canvas is supported for 2D rendering
    if(document.addEventListener && !!window.CanvasRenderingContext2D) deps.push("kinetic");

	if( typeof PBS !== 'undefined' && typeof PBS.KIDS !== 'undefined' && typeof PBS.KIDS.define === "function" && PBS.KIDS.define.amd ){
    // PBS.KIDS AMD. Register as an anonymous module.
    PBS.KIDS.define( deps, factory );
	}
	else if ( typeof define === "function" && define.amd ) {
		// AMD. Register as an anonymous module.
		define( deps, factory );
	} else {
		// Browser globals
		factory( jQuery, window.imagesLoaded );
	}
}( function ( $, imagesLoaded ) {
	//setInterval(function(){console.log("wheel on")}, 10000);
	// Dependencies: KineticJS, Jquery and Jquery Touch Swipe, and bxSlider
	var href       = ( window.top != window ) ? document.referrer : window.location.href ;
	var _SITE_ROOT = href.match(/\/~|\/cms/) ? href.substring(0,href.indexOf("site") + 4) + "/" : "/shell/";
	// var _CDN       = href.match(/(dev|qa|demo|stage)\.pbskids\.org\//) ? "" : "http://www-tc.pbskids.org";
	var _CDN = "http://pbskids.org";

	// Tool to help make the wheel responsive ... Todo Wrap in resize() handler instead of 500ms poll

	/*! jRespond.js v 0.10 | Author: Jeremy Fields [jeremy.fields@viget.com], 2013 | License: MIT */
	(function(b,a,c){b.jRespond=function(h){var i=[];var n=[];var g=h;var t="";var m="";var d;var e=0;var o=100;var f=500;var r=f;var k=function(){var v=0;if(typeof(window.innerWidth)!="number"){if(!(document.documentElement.clientWidth===0)){v=document.documentElement.clientWidth;}else{v=document.body.clientWidth;}}else{v=window.innerWidth;}return v;};var j=function(w){if(w.length===c){u(w);}else{for(var v=0;v<w.length;v++){u(w[v]);}}};var u=function(x){var w=x.breakpoint;var v=x.enter||c;i.push(x);n.push(false);if(q(w)){if(v!==c){v.call(null,{entering:t,exiting:m});}n[(i.length-1)]=true;}};var s=function(){var A=[];var v=[];for(var C=0;C<i.length;C++){var D=i[C]["breakpoint"];var x=i[C]["enter"]||c;var w=i[C]["exit"]||c;if(D==="*"){if(x!==c){A.push(x);}if(w!==c){v.push(w);}}else{if(q(D)){if(x!==c&&!n[C]){A.push(x);}n[C]=true;}else{if(w!==c&&n[C]){v.push(w);}n[C]=false;}}}var y={entering:t,exiting:m};for(var B=0;B<v.length;B++){v[B].call(null,y);}for(var z=0;z<A.length;z++){A[z].call(null,y);}};var p=function(w){var x=false;for(var v=0;v<g.length;v++){if(w>=g[v]["enter"]&&w<=g[v]["exit"]){x=true;break;}}if(x&&t!==g[v]["label"]){m=t;t=g[v]["label"];s();}else{if(!x&&t!==""){t="";s();}}};var q=function(v){if(typeof v==="object"){if(v.join().indexOf(t)>=0){return true;}}else{if(v==="*"){return true;}else{if(typeof v==="string"){if(t===v){return true;}}}}};var l=function(){var v=k();if(v!==e){r=o;p(v);}else{r=f;}e=v;setTimeout(l,r);};l();return{addFunc:function(v){j(v);},getBreakpoint:function(){return t;}};};}(this,this.document));

	// call jRespond and add breakpoints for responsive JS
	var jRes = jRespond([
	    {
	        label: 'wheel-reset',
	        enter: 600,
	        exit: 775
	    },{
	        label: 'wheel-mini',
	        enter: 776,
	        exit: 824
	    },{
	        label: 'wheel-small',
	        enter: 825,
	        exit: 900
	    },{
	        label: 'wheel-normal',
	        enter: 901,
	        exit: 1025
	    },{
	        label: 'wheel-big',
	        enter: 1026,
	        exit: 1381
	    },{
	        label: 'wheel-huge',
	        enter: 1382,
	        exit: 10000
	    }
	]);

	// Flash Support
	if( swfobject && swfobject.getFlashPlayerVersion ){
	  $('html').addClass( swfobject.getFlashPlayerVersion().major > 0 ? 'has-flash' : 'no-flash' );
	}
	else{
	  if( typeof navigator.plugins['Shockwave Flash'] !== 'undefined' ){
	    $('html').addClass('has-flash');
	  }
	  else {
	    $('html').addClass('no-flash');
	  }
	}


	// Set wedges based off of flash support. Todo: move to config
	if ($('html').hasClass('no-flash')) {
		var numWedges = 8;
		var wedge_size_ratio = 1.2; // 1.6 was too big
	} else {
		var numWedges = 16;
		var wedge_size_ratio = 16 / numWedges;
	}

	var DEBUG = true;
	var host = window.location.href.split('/')[2];
	if ((host == 'pbskids.org')) {
	    DEBUG = false;
	}

	var angularVelocityMultiplier = 25;
	var angularVelocity = 360; //Initial wheel velocity, in deg/s
	var maxVelocity = 720;
	var angVelocityCutoff = 1145;
	var timeDelta = 25/1000; //approximate time between frames, in ms
	var angularVelocities = [];

	var lastRotations = 0;
	var controlled = false;
	var is_moving = false;

	var angularFriction = 6.5*180/Math.PI; //Friction coefficient
	var target, activeWedge, stage, layer, wheel, pointer;

	var canvas_initial_width = 564;
	var canvas_initial_height = 208;
	var canvas_width_ratio = 1;
	var canvas_height_ratio = 1;

	var audio_loaded = false;

	var config = null;
	var updated_wedge_index = -1;
	var show_images = [];
	var wedge_show_map = [];
	for (var i=0; i<numWedges; i++) {
	    wedge_show_map[i] = i;
	}


	function randomize_sort(a, b) {
	    return Math.random() > 0.5 ? -1 : 1;
	}


	function tier_sort(a, b) {
	    if (a.tier > b.tier) {
	        return 1;
	    }
	    return -1;
	}


	function getAverageAngularVelocity() {

	if (angularVelocities[angularVelocities.length-1] == 0  
	& angularVelocities[angularVelocities.length-2] == 0 
	& angularVelocities[angularVelocities.length-3] == 0){
	//Assume wheel stopped
	angularVelocities = [];	
	return 0
	}

	    angularVelocities = angularVelocities.filter(function(velocity) {
		return (Math.abs(velocity) < angVelocityCutoff);
	    });

		var total = 0;
		var len = angularVelocities.length;

		if(len === 0) {
		  return 0;
		}

		for(var n = 0; n < len; n++) {
		  total += angularVelocities[n];
		}

		//    if( console && DEBUG && console.log ) console.log('velocities (' + (total/len) + '): ' + angularVelocities);
	  	var avg = total/len;
		return avg > 0 ? Math.min(avg, maxVelocity) : Math.max(avg, -maxVelocity);
		//Reset previous velocities
		angularVelocities = [];

		return avg;

	}

	var uber_color = function (col, amt) {
		var usePound = false;
		if (col[0] == "#") {
			col = col.slice(1);
			usePound = true;
		}
		var num = parseInt(col, 16);
		var r = (num >> 16) + amt;
		if (r > 255) {
			r = 255;
		} else if (r < 0) {
			r = 0;
		}
		var b = ((num >> 8) & 0x00FF) + amt;
		if (b > 255) {
			b = 255;
		} else if (b < 0) {
			b = 0;
		}
		var g = (num & 0x0000FF) + amt;
		if (g > 255) {
			g = 255;
		} else if (g < 0) {
			g = 0;
		}
		return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
	};


	if( Modernizr.canvas && $('body').hasClass('home')){

	    var angularSpeed = 180 / 2 / 1500;
	    var CLOCKWISE = 1;
	    var COUNTER_CLOCKWISE = -1;

	    var wheel_animate_left = new Kinetic.Animation(function(frame) {
	      var angleDiff = frame.timeDiff * angularSpeed;
	      wheel.rotate(-angleDiff);
	      update_wedge(0);
	    }, layer);

	    var wheel_animate_right = new Kinetic.Animation(function(frame) {
	      var angleDiff = frame.timeDiff * angularSpeed;
	      wheel.rotate(angleDiff);
	      update_wedge(180);
	    }, layer);
	}

	function bind_events() {
		wheel.on('mousedown', function(evt) {
		    angularVelocity = 0;
		    controlled = true;
		    target = evt.target;
		});

		spin_arrow_right.tween = new Kinetic.Tween({
		  node: spin_arrow_right,
		  x: 480,
		  y: 158,
		  easing: Kinetic.Easings.EaseOut,
		  duration: .5
		});

		spin_arrow_left.tween = new Kinetic.Tween({
		  node: spin_arrow_left,
		  x: 82,
		  y:158,
		  easing: Kinetic.Easings.EaseOut,
		  duration: .5
		});

		all_shows_link.tween = new Kinetic.Tween({
		  node: all_shows_link,
		  x: 0,
		  y: 0,
		  easing: Kinetic.Easings.EaseIn,
		  duration: .5
		});

		stage.tween = new Kinetic.Tween({
		  node: stage,
		  scaleX: 1.1 * canvas_width_ratio,
	      scaleY: 1.1 * canvas_width_ratio,
		  easing: Kinetic.Easings.EaseOut,
		  duration: .5
		});

		layer.tween = new Kinetic.Tween({
			node: layer,
			y: 0,
			x:	- disc.getWidth() * .1 + 10,
			easing: Kinetic.Easings.EaseOut,
			duration: .5
		});

		var original_stage_width = stage.getWidth();
		var original_stage_height = stage.getHeight();

		var embiggen_wheel = function () {
			$('#the-wheel-canvas').addClass('embiggen');
			$('body').addClass('wheel-open');
			spin_arrow_left.tween.play();
			spin_arrow_right.tween.play();
			all_shows_link.tween.play();
			layer.tween.play();
			stage.tween.play();
			
			if ($('body').hasClass('traffic-theme')){
				//$('.savage-stage').addClass('cars-stopped');
			}
		};

		var dembiggen_wheel = function () {

			$('#the-wheel-canvas').removeClass('embiggen');
			$('body').removeClass('wheel-open');
			spin_arrow_left.tween.reverse();
			spin_arrow_right.tween.reverse();
			all_shows_link.tween.reverse();
			layer.tween.reverse();
			stage.tween.reverse();
			
			if ($('body').hasClass('traffic-theme')){
				//$('.savage-stage').removeClass('cars-stopped');
			}
		};
		
		// Create invisible wheel event detection span

		var can_click_through = true;
		$('#the-wheel-canvas').css('pointer-events', 'none');
		var wheel_off_timeout;
		
		layer.children.on('mouseenter', function() {
			clearTimeout(wheel_off_timeout);
			
			if ($('#the-wheel-canvas').hasClass('embiggen')){
				return false;
			}
			
			embiggen_wheel();
			wheel_animation.start();
			document.body.style.cursor = 'pointer';	
			
			
			if (can_click_through == true){
				can_click_through = false;
			}
		});

		layer.children.on('mouseleave', function() {
			if (can_click_through == false){
				wheel_off_timeout = setTimeout(function(){
					can_click_through = true;
					$('#the-wheel-canvas').css('pointer-events', 'none');
					$('#wheel-event-detector').css('z-index', '1');
					
					document.body.style.cursor = 'default';
					wheel_animation.stop();
					dembiggen_wheel();
				}, 200);
			}
		});
		
		$('#wheel-event-detector circle').on('mouseenter', function(e) {
			e.stopPropagation();
			
			$('#the-wheel-canvas').css('pointer-events', '');
			$('#wheel-event-detector').css('z-index', '0');
			
			if ($('html').hasClass('touch')){
			    embiggen_wheel();
			    
				clearTimeout(wheel_off_timeout);
				
				if (can_click_through == true){
					can_click_through = false;
				}	
			}
		});
		

	    // Wheel Arrow Actions
	    var wheel_rotation_start;
	    var wheel_rotation_end;

	    var left_arrow_button = stage.find('.left-arrow-button')[0];
	    var left_arrow_button_inner = left_arrow_button.getChildren()[1];
		var left_arrow_button_shape = left_arrow_button.getChildren()[2];

		left_arrow_button.on('mouseover touchstart', function() {
	        wheel_rotation_start = new Date();
			wheel_animate_left.start();
			left_arrow_button_inner.setFill(uber_color(config.arrow_buttons.arrow_inner_fill, 6));
			left_arrow_button_shape.setStroke(uber_color(config.arrow_buttons.arrow_inner_fill, 6));
			left_arrow_button_shape.setScale({x:-.96, y:.96});
		});

		left_arrow_button.on('mouseleave touchend', function() {
	        wheel_rotation_end = new Date();
			wheel_animate_left.stop();
			left_arrow_button_inner.setFill(config.arrow_buttons.arrow_inner_fill);
			left_arrow_button_shape.setStroke(config.arrow_buttons.arrow_inner_fill);
			left_arrow_button_shape.setScale({x:-1, y:1});
		});

	    left_arrow_button.on('tap', function() {
	        var wheel_rotation_duration = wheel_rotation_end - wheel_rotation_start;
	        var wheel_skip_left = new Kinetic.Animation(function(frame) {
	            wheel.rotate(-0.065);
	            update_wedge(0);
	        }, layer);

	        if (wheel_rotation_duration > 250) {
	            return;
	        }

	        wheel_skip_left.start();
	        setTimeout(function() {
	            wheel_skip_left.stop();
	        }, 250);
	    });


		var right_arrow_button = stage.find('.right-arrow-button')[0];
		var right_arrow_button_inner = right_arrow_button.getChildren()[1];
		var right_arrow_button_shape = right_arrow_button.getChildren()[2];

		right_arrow_button.on('mouseover touchstart', function() {
	        wheel_rotation_start = new Date();
			wheel_animate_right.start();
			right_arrow_button_inner.setFill(uber_color(config.arrow_buttons.arrow_inner_fill, 6));
			right_arrow_button_shape.setStroke(uber_color(config.arrow_buttons.arrow_inner_fill, 6));
			right_arrow_button_shape.setFill(uber_color(config.arrow_buttons.arrow_shape_color, 6));
			right_arrow_button_shape.setScale({x:.96, y:.96});
		});

		right_arrow_button.on('mouseleave touchend', function(evt) {
	        wheel_rotation_end = new Date();
			wheel_animate_right.stop();
			right_arrow_button_inner.setFill(config.arrow_buttons.arrow_inner_fill);
			right_arrow_button_shape.setStroke(config.arrow_buttons.arrow_inner_fill);
			right_arrow_button_shape.setFill(config.arrow_buttons.arrow_shape_color);
			right_arrow_button_shape.setScale({x:1, y:1});
		});

	    right_arrow_button.on('tap', function() {
	        var wheel_rotation_duration = wheel_rotation_end - wheel_rotation_start;
	        var wheel_skip_right = new Kinetic.Animation(function(frame) {
	            wheel.rotate(0.065);
	            update_wedge(180);
	        }, layer);

	        if (wheel_rotation_duration > 250) {
	            return;
	        }

	        wheel_skip_right.start();
	        setTimeout(function() {
	            wheel_skip_right.stop();
	        }, 250);
	    });

	    // all shows link
	    var all_shows_button = stage.find('.all-shows-link');
	    var all_shows_shape = stage.find('.all-shows-shape')[0];
	    var all_shows_text = stage.find('.all-shows-text')[0];
	    var all_shows_arrow = stage.find('.all-shows-arrow')[0];
	    
	    all_shows_button.on('mouseover touchstart', function() {
			all_shows_shape.setFill(config.wheel.wedge_colors[1]);
		    all_shows_text.setFill('#fff');
		    all_shows_arrow.setFill('#fff');
	    });

	    all_shows_button.on('mouseleave', function() {
			all_shows_shape.setFill(config.arrow_buttons.arrow_inner_fill);
		    all_shows_text.setFill(config.arrow_buttons.arrow_shape_color);
		    all_shows_arrow.setFill(config.arrow_buttons.arrow_shape_color);

		    if (audio_loaded == true) {
	            wheel_show_audio.stop();
	        }
	    });

	    all_shows_button.on('mousedown touchend', function() {    	
	    	GA_obj.trackEvent("Wheel", "All Shows Selected" , "Canvas Wheel | "+$(window).width()+"x"+$(window).height());
	    	
	    	setTimeout(function(){
		    	window.parent.location = 'everything/';
		    }, 100);
	    });

	    all_shows_button.on('mouseenter touchstart', function() {
		    if (audio_loaded == true) {
	            wheel_show_audio.stop();
	            wheel_show_audio.play('all-shows');
	        }
	    });
	    
		// add listeners to container
		$('body').on('mouseup touchend', function() {
	        controlled = false;
	        angularVelocity = getAverageAngularVelocity();
	        if (is_moving == false){
		    	angularVelocity = 0;
	        } else if (angularVelocity > angVelocityCutoff) {
	            angularVelocity = angVelocityCutoff;
	        }
	        else if (angularVelocity < -angVelocityCutoff) {
	            angularVelocity = -angVelocityCutoff;
	        }

	        angularVelocities = [];
		});
	      
		$('body').on('mousemove touchmove', function(e) {		    
		    var mousePos = stage.getPointerPosition();
		    var lastRotation = wheel.getRotation(); 
  
		    setTimeout(function(){
		    	var currentRotation = wheel.getRotation(); 		    	
		    	
		    	if(Math.abs(currentRotation - lastRotation) <= 1){
			    	is_moving = false;
		    	} else {
			    	is_moving = true;
		    	}	
		    }, 100);

		    if (controlled && mousePos && target && (typeof(target.getAngle) != 'undefined')) {
	            var x = (-1 * $('canvas').width() / 2) + mousePos.x;
	            var y = -1 * ($('canvas').height() - mousePos.y);
	            var atan = Math.atan(y / x) * 180 / Math.PI;
		    var rotation = x >= 0 ? atan : atan + 180;
	            var targetGroup = target.getParent();
		    var raw_controlled_rotation = 	rotation - targetGroup.startRotation - (target.getAngle() / 2)
		    var _controlled_rotation = 	(raw_controlled_rotation + 360) % 360;
		    //console.log("Controlled rotation: " + _controlled_rotation);
	        wheel.setRotation(_controlled_rotation);
		    }
		});
	}


	function addWedge(n) {
		var angle = 360 / numWedges;
		var wedge_color = config.wheel.wedge_colors[n % 2];

		var wedge = new Kinetic.Group({
		  rotation: n * 360 / numWedges,
		  name: 'wedge'
		});

		var wedgeBackground = new Kinetic.Wedge({
		  radius: 175,
		  angle: angle,
		  name: 'wedge-background',
		  fill: wedge_color
		});

		wedge.add(wedgeBackground);

	    var show_sound_init = null;
	    var showImage = show_images[n];
	    showImage.src = config.shows[n].image;

	    $(showImage).data('show-title', config.shows[n].title);
	    $(showImage).data('show-slug', config.shows[n].id);

	    var showBubble = new Kinetic.Image({
	        rotation: 100.27,
	        x: 144,
	        y: 28,
	        offset: {x:23, y:23},
	        name: 'show-bubble',
	        image: showImage,
	        width: 48 * wedge_size_ratio,
	        height: 48 * wedge_size_ratio
	    });

	    if ($('html').hasClass('no-flash')) {
	        showBubble.setOffset({x:2, y:16}); //Shift offset to center smaller bubble (just until we have normal count)
	    }

	    var goto_show_link = function () {
		    if ($('#the-wheel-canvas').hasClass('closed')){
			} else{
	            var show_href = config.shows[wedge_show_map[n]].href;
	            
	            GA_obj.trackEvent("Wheel", "Show Selected" , show_href +" | Canvas Wheel | "+$(window).width()+"x"+$(window).height());
	    	
		    	setTimeout(function(){
			        window.parent.location = show_href;
			    }, 100);
		    }
	    };

	    showBubble.on('mousedown touchend', goto_show_link);

	    showBubble.on('touchmove', function() {
	      // Unbind tap so that at the end of flick the link isn't triggered
	      showBubble.off('mousedown touchend');
	      angularVelocity = 0;
	      controlled = true;
	      target = wedgeBackground;
	    });

	    // Flick unbinds link... so rebind tap to trigger link
	    showBubble.on('touchstart', function() {
	        showBubble.on('mousedown touchend', goto_show_link);
	    });

	    showBubble.off('mouseenter');
	    showBubble.on('mouseenter', function () {
	        var show_title = $(this.getAttr('image')).data('show-title');
	        var show_slug = $(this.getAttr('image')).data('show-slug');

		    if (audio_loaded == true) {
	            wheel_show_audio.stop();
	            wheel_show_audio.play(show_slug);
	        }

	        $('.bubble-title').html(show_title);
	        $('.bubble-title').addClass('show-me');

	        if( $('.bubble-title').css('height') > $('.bubble-title').css('font-size') ){
	            $('.bubble-title').addClass('two-lines');
	        }
	        else{
	            $('.bubble-title').removeClass('two-lines');
	        }
	    });

	    showBubble.on('mouseleave', function (){
	        $('.bubble-title').html('');
	        $('.bubble-title').removeClass('show-me');

	        if (audio_loaded == true) {
	            wheel_show_audio.stop();
	        }
	    });

	    wedge.add(showBubble);


		wedge.startRotation = wedge.getRotation();
		wheel.add(wedge);
	}

	function update_wedge(angular_offset) {
	    var tripwire_angle = (wheel.getRotationDeg() + angular_offset) % 360;
	    if (tripwire_angle < 0) {
	        tripwire_angle = 360 + (tripwire_angle % 360);
	    }

	    var detected_wedge_index = Math.floor(tripwire_angle / (360 / numWedges));
	    detected_wedge_index = (numWedges - 1) - detected_wedge_index;

	    // Skip unnecessary show replacement operations
	    if (updated_wedge_index == detected_wedge_index) {
	        return;
	    }
	    updated_wedge_index = detected_wedge_index;

	    // Calculate next wedge
	    var next_wedge_index;
	    if (angular_offset == 180) {
	        // Clockwise rotation
	        next_wedge_index = detected_wedge_index - 1;
	        if (next_wedge_index < 0) {
	            next_wedge_index = numWedges - 1;
	        }
	    } else if (angular_offset == 0) {
	        // Counter-clockwise rotation
	        next_wedge_index = detected_wedge_index + 1;
	        if (next_wedge_index == numWedges) {
	            next_wedge_index = 0;
	        }
	    }

	    // Calculate show that goes in the next wedge
	    var current_show_index;
	    if (angular_offset == 180) {
	        // Clockwise rotation
	        current_show_index = wedge_show_map[detected_wedge_index];
	        var next_show_index = current_show_index - 1;
	        if (next_show_index < 0) {
	            next_show_index = config.shows.length - 1;
	        }
	    } else if (angular_offset == 0) {
	        // Counter-clockwise rotation
	        current_show_index = wedge_show_map[detected_wedge_index];
	        var next_show_index = current_show_index + 1;
	        if (next_show_index == config.shows.length) {
	            next_show_index = 0;
	        }
	    }

	    /*Debugging information
	    if( console && DEBUG && console.log ) {
		    console.log('---tripwire angle---: ' + tripwire_angle);
		    console.log(wedge_show_map);
		    console.log('detected wedge index: ' + detected_wedge_index);
		    console.log('next wedge\'s show index: ' + next_show_index);
		    console.log('next wedge\'s show: ' + config.shows[next_show_index].title);
	    }*/

	    // Update next wedge's show image
	    wedge_show_map[next_wedge_index] = next_show_index;
	    show_images[next_wedge_index].src = config.shows[next_show_index].image;

	    var show_title = config.shows[next_show_index].title;
	    var show_slug = config.shows[next_show_index].id;

	    $(show_images[next_wedge_index]).data('show-title', show_title);
	    $(show_images[next_wedge_index]).data('show-slug', show_slug);
	}
	var angularVelocity;
	
	function animate(frame) {
		// handle wheel spin
	    var spin_direction;
	    var currentAngle = wheel.getRotation();
        currentAngle = (currentAngle > 0 ? currentAngle : (360 + currentAngle)) % 360;
        
	    if (angularVelocity > 0) {
	        spin_direction = CLOCKWISE;
	    } else {
	        spin_direction = COUNTER_CLOCKWISE;
	    }
	    
	    var angularVelocityChange = spin_direction*angularFriction*timeDelta;
		
		if(Math.abs((angularVelocity-angularVelocityChange)) < Math.abs(angularVelocity) || angularVelocityChange == 0){
		    angularVelocity -= angularVelocityChange;
		} else{
		    angularVelocity = 0;
		}
		
		if(controlled) {
		  if(angularVelocities.length > 10) {
		    angularVelocities.shift();
		  }

	      var controlVelocity = (currentAngle - lastRotation)/timeDelta;
		  angularVelocities.push(controlVelocity);
		} else {
			if(Math.abs(angularVelocity) > 0){
			  wheel.rotate(angularVelocity*timeDelta);
			}
		    if (angularVelocity > 0) {
		      update_wedge(180);
			} else {
		      update_wedge(0);
			}
		}
		lastRotation = currentAngle;		
	}

	function init_canvas() {
		stage = new Kinetic.Stage({
		  container: 'the-wheel-stage',
		  scaleX: canvas_width_ratio,
	    scaleY: canvas_height_ratio,
		  width: canvas_initial_width,
		  height: canvas_initial_height
		});
		layer = new Kinetic.Layer({
			y: 25
		});
		wheel = new Kinetic.Group({
		  x: stage.getWidth() / 2,
		  y: 190
		});

		// The Green Border around the wheel.
		disc = new Kinetic.Circle({
			radius: 175,
			x: stage.getWidth() / 2,
			y: 190,
			fill: config.wheel.wheel_border_color,
			stroke: config.wheel.wheel_border_color,
			strokeWidth: 26
		});

		for(var n = 0; n < numWedges; n++) {
		  addWedge(n);
		}

		// Ticker Area

		ticker = new Kinetic.Group({
			name: 'ticker'
		});

		hub = new Kinetic.Circle({
			x: stage.getWidth() / 2,
			y: 180,
			radius: 80,
			fill: config.text_hub.text_hub_fill,
			stroke: config.text_hub.text_hub_stroke,
			strokeWidth: 8
		});

		pointer = new Kinetic.Wedge({
			//fill: config.text_hub.pointer_fill,
			fill: 'transparent',
			lineJoin: 'round',
			angleDeg: 30,
			radius: 30,
			x: stage.getWidth() / 2,
			y: 82,
			rotationDeg: 75
		});
		ticker.add(pointer);
		ticker.add(hub);

		// Nav Arrows

		spin_arrow_right = new Kinetic.Group({
		  x: 200,
		  y: 250,
		  name: 'right-arrow-button'
		});

		arrow_inner_right = new Kinetic.Circle({
		    x: 0,
		    y: 0,
		    radius: 40,
		    fill: config.arrow_buttons.arrow_inner_fill,
		    stroke: config.arrow_buttons.arrow_inner_stroke,
		    strokeWidth: 8
		});

		arrow_outer_right = new Kinetic.Circle({
		    x: 0,
		    y: 0,
		    radius: 40,
		    fill: config.arrow_buttons.arrow_outer_border,
		    stroke: config.arrow_buttons.arrow_outer_border,
		    strokeWidth: 30
		});

	    spin_arrow_right.add(arrow_outer_right);
		spin_arrow_right.add(arrow_inner_right);

		var right_arrow_shape = new Kinetic.Shape({
	    	fill: config.arrow_buttons.arrow_shape_color,
	        stroke: config.arrow_buttons.arrow_inner_fill,
	        strokeWidth: 0,
	        name: 'right-arrow-shape',

	        sceneFunc: function(context) {
	          context.beginPath();
	          context.moveTo(-8, -3);
	          context.lineTo(3, 26);
	          context.lineTo(29, 6);
	          context.lineTo(17, 3);
	          context.quadraticCurveTo(23, -19, 6, -29);
	          context.lineTo(-7, -21);
	          context.quadraticCurveTo(6, -12, 4, 0);
	          context.closePath();
	          context.fillStrokeShape(this);
	        }
	    });
	    
	    // Make it so the arrow shape not listen for events
	    right_arrow_shape.listening(false);

	    spin_arrow_right.add(right_arrow_shape);

		spin_arrow_left = new Kinetic.Group({
		  x: 200,
		  y: 250,
		  name: 'left-arrow-button'
		});

		arrow_inner_left = new Kinetic.Circle({
		    x: 0,
		    y: 0,
		    radius: 40,
		    fill: config.arrow_buttons.arrow_inner_fill,
		    stroke: config.arrow_buttons.arrow_inner_stroke,
		    strokeWidth: 8
		});

		arrow_outer_left = new Kinetic.Circle({
		    x: 0,
		    y: 0,
		    radius: 40,
		    fill: config.arrow_buttons.arrow_outer_border,
		    stroke: config.arrow_buttons.arrow_outer_border,
		    strokeWidth: 30
		});

		spin_arrow_left.add(arrow_outer_left);
		spin_arrow_left.add(arrow_inner_left);


		var left_arrow_shape = new Kinetic.Shape({
			fill:  config.arrow_buttons.arrow_shape_color,
	        stroke: config.arrow_buttons.arrow_inner_fill,
	        strokeWidth: 0,
	        name: 'left-arrow-shape',

	        sceneFunc: function(context) {
	          context.beginPath();
	          context.moveTo(-8, -3);
	          context.lineTo(3, 26);
	          context.lineTo(29, 6);
	          context.lineTo(17, 3);
	          context.quadraticCurveTo(23, -19, 6, -29);
	          context.lineTo(-7, -21);
	          context.quadraticCurveTo(6, -12, 4, 0);
	          context.closePath();
	          context.fillStrokeShape(this);
	        }
	    });
	    
	    // Make it so the arrow shape not listen for events
	    left_arrow_shape.listening(false);

	    left_arrow_shape.scaleX(-1); //flips arrow to mirror right arrow
	    left_arrow_shape.setOffsetX(2); //nudges 2 pixels
	    spin_arrow_left.add(left_arrow_shape);

	    $('.bubble-title').css('color', config.text_hub.text_hub_font);

	    all_shows_link = new Kinetic.Group({
		  x: -40,
		  y: 20,
		  name: 'all-shows-link'
		});

		var all_shows_shape = new Kinetic.Shape({
			fill: config.arrow_buttons.arrow_inner_fill,
	        name: 'all-shows-shape',

	        sceneFunc: function(context) {
	          context.beginPath();
	          context.moveTo(380, 30);
	          context.lineTo(396, 3);
	          context.quadraticCurveTo(465, 40, 485, 110);
	          context.lineTo(400, 130);
	          context.closePath();
	          context.fillStrokeShape(this);
	        }
	    });

	    var all_shows_arrow = new Kinetic.Shape({
	    	fill: config.arrow_buttons.arrow_shape_color,
	        name: 'all-shows-arrow',

	        sceneFunc: function(context) {
	          context.beginPath();
	          context.moveTo(459, 80);
	          context.lineTo(459, 91);
	          context.lineTo(449, 86);
	          context.closePath();
	          context.fillStrokeShape(this);
	        }

	    });

	    var all_shows_text = new Kinetic.TextPath({
	    	name: 'all-shows-text',
	      	x: 398,
	      	y: -7,
	        fill: config.arrow_buttons.arrow_shape_color,
	        fontSize: '16',
	        fontFamily: 'PBS_KIDS_Headline',
	        text: 'All Shows',
	        rotationDeg: 6,
	        data: 'M9.268,34.955c0,0,91.59,37.221,96.481,180.441'

	    });
	    
	    // Make it so the text node does not listen for events
	    all_shows_text.listening(false);

	    all_shows_link.add(all_shows_shape);
	    all_shows_link.add(all_shows_text);
	    all_shows_link.add(all_shows_arrow);

		// add components to the stage
		layer.add(all_shows_link);
		layer.add(spin_arrow_left);
		layer.add(spin_arrow_right);
		layer.add(disc);
		layer.add(wheel);
		layer.add(ticker);
		
		// Hide till ready to spin in
		layer.opacity(0);

		stage.add(layer);

		// bind events
		bind_events();
		init_sound();


		// position wheel
		$('#the-wheel-canvas').css('margin-left', '-' + canvas_initial_width/2 + 'px');
		$('#the-wheel-canvas canvas').addClass('tap-event-tigger');

		wheel_animation = new Kinetic.Animation(animate, layer);

		// wait one second and then spin the wheel
		setTimeout(function() {
		  // show wheel and animate in
		  layer.opacity(1);
		  
		  is_moving = true; // to account for spin in. 
		  wheel_animation.start();	   
		}, 1000);
		

		// Resonsive/adaptive Rules (only on homepage)
		if ($('body').hasClass('games')){
			resize_canvas(1.6, 1.6);
			$('#wheel-ui').attr('class', 'wheel-huge');

		} else if ($('html').hasClass('touch') && $(window).width() > 601){
			// Open by default on touch
			setTimeout(function() {
				$('#the-wheel-canvas').addClass('embiggen');
				$('body').addClass('wheel-open');
				spin_arrow_left.tween.play();
				spin_arrow_right.tween.play();
				all_shows_link.tween.play();
				layer.tween.play();
				stage.tween.play();
			}, 1000);

			resize_canvas(1, 1);
			$('#wheel-ui').attr('class', 'wheel-normal');
		} else if ($(window).width() < 1025 && $(window).height() > 1024 ){ 
			
			// sets it big first time for devices that fit this case.
			resize_canvas(1.4, 1.4);
			$('#wheel-ui').attr('class', 'wheel-big');

		} else {
			// register enter and exit functions for a single breakpoint
			jRes.addFunc({
			    breakpoint: 'wheel-huge',
			    enter: function() {
			       wheel_animation.start();	
			       resize_canvas(1.6, 1.6);
			       $('#wheel-ui').attr('class', 'wheel-huge');
			       $('#wheel-event-detector circle').attr({
				       cx: '451',
					   cy: '344',
				       r:  '300'
			       });
			       setTimeout(function(){
				       wheel_animation.stop();
			       }, 300);
			    }
			});

			jRes.addFunc({
			    breakpoint: 'wheel-big',
			    enter: function() {
			       wheel_animation.start();
			       resize_canvas(1.4, 1.4);
			       $('#wheel-ui').attr('class', 'wheel-big');
			       $('#wheel-event-detector circle').attr({
				       cx: '395.25',
					   cy: '302',
				       r:  '263.5'
			       });
			       setTimeout(function(){
				       wheel_animation.stop();
			       }, 300);
			    }
			});

			jRes.addFunc({
			    breakpoint: 'wheel-normal',
			    enter: function() {
			       wheel_animation.start();
			       resize_canvas(1.2, 1.2);
			       $('#wheel-ui').attr('class', 'wheel-normal');
			       $('#wheel-event-detector circle').attr({
				       cx: '339',
					   cy: '259',
				       r:  '225.5'
			       });
			       setTimeout(function(){
				       wheel_animation.stop();
			       }, 300);
			    }
			});

			jRes.addFunc({
			    breakpoint: 'wheel-small',
			    enter: function() {
			       wheel_animation.start();
			       resize_canvas(1, 1);
			       $('#wheel-ui').attr('class', 'wheel-small');
			       $('#wheel-event-detector circle').attr({
				       cx: '282',
					   cy: '215',
				       r:  '188'
			       });
			       setTimeout(function(){
				       wheel_animation.stop();
			       }, 300);
			    }
			});

			jRes.addFunc({
			    breakpoint: 'wheel-mini',
			    enter: function() {
			       wheel_animation.start();
			       resize_canvas(.9, .9);
			       $('#wheel-ui').attr('class', 'wheel-mini');
			       $('#wheel-event-detector circle').attr({
				       cx: '254.2',
					   cy: '194',
				       r:  '169.5'
			       });
			       setTimeout(function(){
				       wheel_animation.stop();
			       }, 300);
			    }
			});

			jRes.addFunc({
			    breakpoint: 'wheel-reset',
			    enter: function() {
			       wheel_animation.start();
			       resize_canvas(1.2, 1.2);
			       $('#wheel-ui').attr('class', 'wheel-mini');
			       $('#wheel-event-detector circle').attr({
				       cx: '339',
					   cy: '259',
				       r:  '225.5'
			       });
			       setTimeout(function(){
				       wheel_animation.stop();
			       }, 300);
			    }
			});
		}

		$(document).ready(function() {			
			$('body').trigger('wheel.ready');	
		});
	}

	function init_fallback() {
		//add fallback HTML show-bubbles
		var show_fallback = $('#wheel-fallback');

		$.each(config.shows, function(n){

			var show_fallback_item = $('<li/>')
			   .addClass('bubble-item')
			   .appendTo(show_fallback);

			var show_fallback_link = $('<a/>')
				.attr('title', '' + config.shows[n].title + '')
				.attr('href', '' + config.shows[n].href + '')
				.appendTo(show_fallback_item);

			var show_fallback_img = $('<img/>')
				.attr('src', '' + config.shows[n].image + '')
				.attr('alt', 'Visit' + config.shows[n].title + '')
				.appendTo(show_fallback_link);

		});
		
		// Add All Shows Bubble on homepage only
		if ($('body').hasClass('home')){
			var all_shows_item = $('<li/>')
			   .addClass('bubble-item')
			   .appendTo(show_fallback);
		
			var all_shows_link = $('<a/>')
				.attr('title', 'All Shows')
				.attr('href', 'everything/')
				.appendTo(all_shows_item);
		
			var all_shows_img = $('<img/>')
				.attr('src', '' + _CDN + _SITE_ROOT + 'images/content/show-bubbles/wheel_all-shows.png')
				.attr('alt', 'Visit All Shows')
				.appendTo(all_shows_link);
		}

		// Make Slider for Fallback
		var fallback_slider;

		var viewWidth = $(document).width();
		var showCount = show_fallback.find('li').length;
		var pageSteps = Math.round(viewWidth/56);
		var slideSteps = 3;

		if (!fallback_slider) {
			fallback_slider = $(show_fallback).bxSlider({
		    	displaySlideQty:pageSteps,
		    	moveSlideQty:slideSteps,
		    	infiniteLoop: true,
		    	speed: 1000,
		    	startingSlide: 0
			});

			$('<span class="fader left"></span><span class="fader right"></span>').insertAfter('.bx-window');
			
			// bind events
	        $('body').on('touch_party.ready', function() {
	            $('.bx-prev').touch_party('no-link');
	            $('.bx-next').touch_party('no-link');
	            $('#wheel-fallback .bubble-item').touch_party('bubble');
	        });
			
			$('.bx-window').on('swiperight', function(e){
				$('.bx-prev').trigger('click');
			});
			$('.bx-window').on('swipeleft', function(e){
				$('.bx-next').trigger('click');
			}); 
			
			// GA event for show bubbles
			$('#wheel-fallback .bubble-item a').on('click', function(e){
				var show_href = $(this).attr('href'); 
				
				e.preventDefault();
			
				GA_obj.trackEvent("Wheel", "Show Selected" , show_href +" | HTML Fallback Slider | "+$(window).width()+"x"+$(window).height());
		    	
		    	setTimeout(function(){
			        window.parent.location = show_href;
			    }, 100);
		    });
		}
	}

	function init(){

	  if( !Modernizr.canvas && $('body').hasClass('home')){
	    var __WRAPPER_ID = "the-wheel-canvas";
	    var __ELEMENT_ID = "wheel-ui";
	    var __SWF_WIDTH = 675;
	    var __SWF_HEIGHT = 250;

	    swfobject.embedSWF(
	       _SITE_ROOT + "js/the-wheel/flash/wheel.swf",//swfUrlStr
	       __ELEMENT_ID,//replaceElemIdStr
	       __SWF_WIDTH,//widthStr
	       __SWF_HEIGHT,//heightStr
	       "10.1",//!important  //swfVersionStr
	       "http://pbskids.org/pbsk/swf/expressInstall.swf",//express-install swf-url
	       {// Flash Vars
	         "numWedges"  : numWedges,
	         "config"     : _SITE_ROOT + "js/the-wheel/wheel-config.json",
	         // "cdn"        : "http://www-tc.pbskids.org",
			 "cdn"        : "http://pbskids.org",
	         "allShowsURL": _SITE_ROOT.replace("/shell/","/") + "everything/",
	         "audioData"  : _SITE_ROOT + "audio/nothing",
	         "audioSprite": _SITE_ROOT + "audio/views/home/audiosprite.mp3"
	       },

	       {// SWF File Parameters
	         allowFullScreen   : "false"  ,
	         scale             : "default",
	         allowscriptaccess : "always" ,
	         menu              : "false"  ,
	         wmode             : "transparent"
	       },

	       {// HTML Object attributes
	         id: __ELEMENT_ID + "-swf",
	         name: __ELEMENT_ID + "-swf"
	       },

	       function(e)
	       {// Callback Function
	         if(e && e.success){
	           $( "#" + __WRAPPER_ID ).css( {"margin-left": - __SWF_WIDTH / 2  + "px", "z-index": "999"} );
	         }
	         else{
	           init_fallback();
	           $('body').trigger('wheel.ready');
	         }
	       }
	    );// .embedSWF()

	  }

	  else if ($('body').hasClass('games')) {
	  	var wheel_config;
	  	
	  	if ($('html').hasClass('no-flash')) {
	        wheel_config = 'js/the-wheel/wheel-mobile-config.json'; 	
	  	} else {
		  	wheel_config = 'js/the-wheel/wheel-config.json';
	  	}
	  	
	  	$.getJSON(_SITE_ROOT + wheel_config, function(data) {
	  	    config = data;

	        if ((host == 'pbskids.org')) {
	            for (var i=0; i<config.shows.length; i++) {
	                // config.shows[i].image = 'http://www-tc.pbskids.org' + config.shows[i].image;
					config.shows[i].image = 'http://pbskids.org' + config.shows[i].image;
	            }
	        }

	  	    //Is this a preview?
	  	    if (window.location.hostname.search(/^admin/) != -1){
	  		    config = window.wheel_config;
	  	    }

	  	    config.shows.sort(randomize_sort);
	  	    config.shows.sort(tier_sort);

	  	    for (var i=0; i<config.shows.length; i++) {
	  	        var image = new Image();
	  	        image.src = config.shows[i].image;
	  	        show_images.push(image);
	  	    }
	  	    imagesLoaded(show_images, function() {
	  	        init_fallback();

	  	        $(document).ready(function() {
	  	            $('body').trigger('wheel.ready');
	  	        });
	  	    });

	  	});
	  }

	  else if ($('html').hasClass('no-flash')) {
	    $.getJSON(_SITE_ROOT + 'js/the-wheel/wheel-mobile-config.json', function(data) {
	  	    config = data;

	        if ((host == 'pbskids.org')) {
	            for (var i=0; i<config.shows.length; i++) {
	                // config.shows[i].image = 'http://www-tc.pbskids.org' + config.shows[i].image;
					config.shows[i].image = 'http://pbskids.org' + config.shows[i].image;
	            }
	        }

	  	    config.shows.sort(randomize_sort);
	  	    config.shows.sort(tier_sort);

	  	    for (var i=0; i<config.shows.length; i++) {
	  	        var image = new Image();
	  	        image.src = config.shows[i].image;
	  	        show_images.push(image);
	  	    }
	  	    imagesLoaded(show_images, init_canvas);
	  	    init_fallback(); // second function was not firing above
	  	});
	  }

	  else {//
	  	$.getJSON(_SITE_ROOT + 'js/the-wheel/wheel-config.json', function(data) {
	  	    config = data;

	        if ((host == 'pbskids.org')) {
	            for (var i=0; i<config.shows.length; i++) {
	                // config.shows[i].image = 'http://www-tc.pbskids.org' + config.shows[i].image;
					config.shows[i].image = 'http://pbskids.org' + config.shows[i].image;
	            }
	        }
	  	    //Is this a preview?
	  	    if (window.location.hostname.search(/^admin/) != -1){
	  		    config = window.wheel_config;
	  	    }

	  	    config.shows.sort(randomize_sort);
	  	    config.shows.sort(tier_sort);

	  	    for (var i=0; i<config.shows.length; i++) {
	  	        var image = new Image();
	  	        image.src = config.shows[i].image;
	  	        show_images.push(image);
	  	    }
	  	    imagesLoaded(show_images, init_canvas);
	  	    init_fallback(); // second function was not firing above
	  	});

	  }//end if
	}//init()


	function init_sound() {

		return false; // this disables wheel audio -mm
		
		var audioPath = _SITE_ROOT + "audio/views/home/";

		// Show UI Audio
	    var soundJSON = $.getJSON( audioPath + 'audiosprite.json', function() { })
	    .done(function(data){
	        var audio_spritemap = data.spritemap;

	        var sprite = {};
	        var spritemap_keys = Object.keys(data.spritemap);

	        for (var i=0; i<spritemap_keys.length; i++) {
	            var key = spritemap_keys[i];
	            var value = data.spritemap[key];

	            sprite[key] = [
	                value.start * 1000,
	                (value.end - value.start) * 1000
	            ];
	        }

	        wheel_show_audio = new Howl({
	        	urls: [audioPath + 'audiosprite.mp3', audioPath + 'audiosprite.ogg'],
	        	sprite: sprite,
	            onload: function() {
	                if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
	                    return;
	                }

	                audio_loaded = true;
	            }
	        });
	    });
	}

	function handleLoad(event) {

	}

	function resize_canvas(width_ratio, height_ratio) {
	    canvas_width_ratio = width_ratio;
	    canvas_height_ratio = height_ratio;
	    var canvas_new_width = width_ratio * canvas_initial_width;
	    var canvas_new_height = height_ratio * canvas_initial_height;

	    stage.setWidth(canvas_new_width);
	    stage.setHeight(canvas_new_height);
	    stage.scaleX(width_ratio);
	    stage.scaleY(height_ratio);

	    stage.tween.destroy();

	    stage.tween = new Kinetic.Tween({
		  node: stage,
		  scaleX: 1.1 * canvas_width_ratio,
	    scaleY: 1.1 * canvas_width_ratio,
		  easing: Kinetic.Easings.EaseOut,
		  duration: .5
		});

		// re-position wheel
		$('#the-wheel-canvas').css('margin-left', '-' + canvas_new_width/2 + 'px');
	}

	init();//get starteds
	
}));

