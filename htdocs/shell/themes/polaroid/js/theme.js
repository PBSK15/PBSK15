(function( factory ){
	var deps = [ "jquery","images-loaded"];

	if( typeof PBS !== 'undefined' && typeof PBS.KIDS !== 'undefined' && typeof PBS.KIDS.define === "function" && PBS.KIDS.define.amd ){
    //PBS AMD support for PBS.KIDS.requireJS
    PBS.KIDS.define( deps, factory );
  }
  else{
    factory( jQuery, window.imagesLoaded );
  }
}(function( $, imagesLoaded ){
	var href       = ( window.top != window ) ? document.referrer : window.location.href ;
	var _SITE_ROOT = href.match(/\/~|\/cms/) ? href.substring(0,href.indexOf("site") + 4) + "/" : "/shell/";
	var _CDN       = href.match(/(dev|qa|demo|stage)\.pbskids\.org\//) ? "" : "https://www-tc.pbskids.org";
	var qs = window.location.search || '';

	// Random Color Switcher and Set new color in selection tool
	var colors = ['green', 'seafoam', 'blue']; //add as many classes as u want
	var randomnumber = Math.floor(Math.random() * colors.length);
	var new_color = colors[randomnumber];

	$('body').removeClass('green seafoam blue');
	$('body').addClass(new_color);

	$(document).ready(function() {

		// Tools, you know--useful shit
		function get_background_color(element) {
			var rgb = $(element).css('background-color');
			rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
		    function hex(x) {return ("0" + parseInt(x).toString(16)).slice(-2);}
		    return "0x" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
		}

	    function randomize_sort(a, b) {
	        return Math.random() > 0.5 ? -1 : 1;
	    }

	    function _randomInt(upperlimit, lowerlimit){
        	var u = !isNaN(upperlimit) ? upperlimit : 1; //doing it this way to allow passing 0 as an upperlimit
        	var l = (lowerlimit || 0);
        	return Math.min(u, Math.floor(l + Math.random() * (u - l +1)));
        }//_randomInt()

        function _randomFloat(upperlimit, lowerlimit, decimalPlaces){
	        var m =  Math.pow(10, decimalPlaces || 3);
	        var u = !isNaN(upperlimit) ? upperlimit : 1; //doing it this way to allow passing 0 as an upperlimit
	        var l = (lowerlimit || 0);
	        u = u * m;
	        l = l * m;
	        return Math.min(u, Math.floor(l + Math.random() * (u - l +1))) / m;
        }//_randomFloat()

	    function shadeColor(color, percent) {

		    var R = parseInt(color.substring(1,3),16);
		    var G = parseInt(color.substring(3,5),16);
		    var B = parseInt(color.substring(5,7),16);

		    R = parseInt(R * (100 + percent) / 100);
		    G = parseInt(G * (100 + percent) / 100);
		    B = parseInt(B * (100 + percent) / 100);

		    R = (R<255)?R:255;
		    G = (G<255)?G:255;
		    B = (B<255)?B:255;

		    var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
		    var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
		    var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

		    return "0x"+RR+GG+BB;
		}

		// Picture Theme Global-ish Variables
		var theme_config = null;
		var picture_stage;
		var renderer;
		var picture_images = [];
		var picture_images_index;
		var show_graphic_count;
		var show_link_map = [];
		var grid_items = [];
		var no_no_spots = [];
		var start_arrow_animation;
		var stop_arrow_animation;
		var arrow_delay;
		var camera_clicks = 0;
		var pictures_dropped = 0;

		// Picture Creation and Animation
		function add_picture() {
			var background_colors = ['0xFC28FC', '0xffe000', '0x822778', '0xEC0203', '0x52e057', '0x52e0f7']; // Magenta, Yellow, Purple, Brick-Orange, Slime Green
			var randomnumber = Math.floor(Math.random() * background_colors.length);
			var new_background_color = background_colors[randomnumber];
			//var new_background_tint = shadeColor(new_background_color, -10); // Darken 20%

			if (picture_images_index == (show_graphic_count - 1) || picture_images_index == undefined){
			    var show_graphic_src = picture_images[0].src;
			    var show_href = theme_config.shows[0].href;
			    picture_images_index = 0;

			    //console.log(picture_images_index, show_graphic_src, show_href)
			} else {
			    var show_graphic_src = picture_images[picture_images_index + 1].src;
			    var show_href = theme_config.shows[picture_images_index + 1].href;
			    picture_images_index += 1;
			    //console.log(picture_images_index, show_graphic_src, show_href);
			}

			//console.log(pictures_dropped);

			// create a new Sprite using the show graphic as texture
			var show_graphic_texture = PIXI.Texture.fromImage(show_graphic_src);
		    var head_face = new PIXI.Sprite(show_graphic_texture);

		    // Create Picture Border and Frame
		    var picture_border = new PIXI.Graphics();

		    // set picture dimensions is a square that is 12.8% of viewport with max of 220 and a min of 175.
		    var picture_dimensions = picture_stage.stageWidth * 0.128;

		    if (picture_dimensions >= 220){
			   picture_dimensions = 220;
		    } else if (picture_dimensions <= 175){
			   picture_dimensions = 175;
		    }

		    // set border width to be 7.3% of picture_dimensions
		    var picture_border_width = picture_dimensions / 7.3;

		    picture_border.lineStyle(picture_border_width, 0xffffff, 1);
		    picture_border.beginFill(new_background_color);
	        picture_border.drawRect(0, 0, picture_dimensions, picture_dimensions);
	        picture_border.endFill();

	        // Creat container to hold the final picture content
		    var developed_picture = new PIXI.Sprite(picture_border.generateTexture());
	        developed_picture.interactive = true;
	        developed_picture.buttonMode = true;
	        developed_picture.defaultCursor = 'pointer';
	        developed_picture.pivot.x = picture_dimensions / 2;
			developed_picture.pivot.y = picture_dimensions / 2;

	        // Set w/h and undeveloped state of character image, then center in frame
	        head_face.alpha = 4;
	        head_face.width = picture_dimensions - picture_border_width;
	        head_face.height = picture_dimensions - picture_border_width;
			head_face.anchor.x = 0.5;
			head_face.anchor.y = 0.5;
	        head_face.position.x = (picture_dimensions + picture_border_width + 20) / 2;
		    head_face.position.y = (picture_dimensions + picture_border_width + 20) / 2;

		    developed_picture.addChild(head_face);

		    // Make Blurry
		    var blur_filter = new PIXI.BlurFilter();
		    developed_picture.filters = [blur_filter];

		    var grid_item_width = grid_items[0].width;
		    var grid_item_height = grid_items[0].height;
		    var droppable_grid_items = [];

		    for (var i = 0; i < grid_items.length; ++i) {
		    	if (grid_items[i].canPlace == true){
		    		droppable_grid_items.push(grid_items[i]);
		    	}
		    }

		    var drop_block_index = _randomInt(droppable_grid_items.length -1);

			var x_drop_range = droppable_grid_items[drop_block_index].position.x + grid_item_width;
			var y_drop_range = droppable_grid_items[drop_block_index].position.y + grid_item_height;

			var drop_x = _randomFloat(x_drop_range, droppable_grid_items[drop_block_index].position.x);
		    var drop_y = _randomFloat(y_drop_range, droppable_grid_items[drop_block_index].position.y);

		    //console.log(droppable_grid_items[drop_block_index].position.x, x_drop_range, drop_x);

	        developed_picture.position.x = drop_x;
	        developed_picture.position.y = drop_y;
		    developed_picture.scale = {x:2, y:2};

		    // add developed picture to stage and animate in.
			picture_stage.addChild(developed_picture);

			developed_picture.mousedown = developed_picture.touchstart = function(data){
		    	setTimeout(function(){
			        window.parent.location = show_href;
			    }, 100);
		    }

			var rotate_directions = ['clockwise', 'counter'];
			var random_rotation = Math.floor(Math.random() * 2);
			var rotatation_direction = rotate_directions[random_rotation];
			var start_animation = null;
			var animation_loop = requestAnimationFrame(develop_picture_animation);

			if (rotatation_direction === 'clockwise'){
		        developed_picture.rotation = -1;
	    	} else if (rotatation_direction === 'counter'){
	    	    developed_picture.rotation = 1;
	    	}

		    function develop_picture_animation(timestamp) {
		    	var progress;
		    	//console.log('loop running');

				if (start_animation === null) {
				    start_animation = timestamp;
				}
				progress = timestamp - start_animation;

		    	if (head_face.alpha < 1.1 && head_face.alpha >= 1){
			    	head_face.alpha = 1;
		    	} else {
			    	head_face.alpha -= 0.1;
		    	}

		    	if (blur_filter.blur <= .5 && blur_filter.blur >= 0){
		    	   blur_filter.blur = 0;
		    	   developed_picture.filters = null;
		    	} else {
			       blur_filter.blur -= 0.5;
		    	}

		    	if (developed_picture.scale.x < 1.1 && developed_picture.scale.x >= 1) {
		    	    developed_picture.scale = {x:1, y:1};
		    	} else {
			    	developed_picture.scale.x -= .1;
		    	    developed_picture.scale.y -= .1;

		    	    if (rotatation_direction === 'clockwise'){
				        developed_picture.rotation += 0.1;
			    	} else if (rotatation_direction === 'counter'){
			    	    developed_picture.rotation -= 0.1;
			    	}
		    	}

		    	clearTimeout(arrow_delay);

		    	if (progress > 2000) {
		    		blur_filter.blur = 0;
		    		developed_picture.filters = null; // Remove filter for performance reasons
		    		head_face.alpha = 1;
		    		developed_picture.scale = {x:1, y:1};

		    		renderer.render(picture_stage);
		    	    cancelAnimationFrame(animation_loop);

		    	    arrow_delay = setTimeout(function(){
			    	    start_arrow_animation();
		    	    }, 3000);
		    	} else {
		    	   renderer.render(picture_stage);
			       animation_loop = requestAnimationFrame(develop_picture_animation);

		    	}
		    }


		} // end add_picture()

		function init_scene(type) {

			// Set up Snap.svg Camera and Flash
			var camera_arrow = Snap.select('#camera-arrow');
			var flash_action = Snap.select('#flash-svg');
			var flash_gradient_slider = Snap.select('#flash_gradient .slider');

			start_arrow_animation = function() {
				camera_arrow.node.className.baseVal += 'bouncing';
			}

			stop_arrow_animation = function() {
				camera_arrow.node.className.baseVal = '';
			}

			function animate_flash_action() {
				flash_action.node.className.baseVal += 'visible';

				flash_gradient_slider.animate({offset:.75}, 75, function(){
					flash_gradient_slider.animate({offset:0}, 75, function(){
						flash_action.node.className.baseVal = '';
					});
				});

			}

			// Set up canvas stage
			var full_theme_stage = document.getElementById('theme-stage');
			var theme_container = document.getElementById('polaroid-theme-stage');
			picture_stage = new PIXI.Stage(get_background_color('body'));
			picture_stage.stageWidth = full_theme_stage.offsetWidth;
			picture_stage.stageHeight = full_theme_stage.offsetHeight;

		    // create a renderer instance.
		    renderer = PIXI.autoDetectRenderer(picture_stage.stageWidth, picture_stage.stageHeight, null, true);

		    // add the renderer view element to the DOM
		    theme_container.appendChild(renderer.view);
		    renderer.render(picture_stage);

		    // create drop position grid
		    var the_grid = new PIXI.DisplayObjectContainer();
		    var grid_columns = 16;
			var grid_rows = 10;

		    function draw_grid(){
			    var grid_columns_width = picture_stage.stageWidth/grid_columns;
			    var grid_rows_height = picture_stage.stageHeight/grid_rows;

			    //Clear out the grid
			    grid_items = [];
			    the_grid.children = [];
			    no_no_spots = [];

			    for (var row = 0; row < grid_rows; row++) {
			    	for (var col = 0; col < grid_columns; col++) {

			    	  var grid_block = new PIXI.Graphics();
			    	 // grid_block.lineStyle(1, 0xffffff, 1); // makes grid visible for testing
					  grid_block.drawRect(0, 0, grid_columns_width, grid_rows_height);

					  grid_block.canPlace = true;

					  grid_block.width = grid_columns_width;
				      grid_block.height = grid_rows_height;

				      grid_block.position.x = col * (grid_columns_width);
				      grid_block.position.y = row * (grid_rows_height);

				      grid_items.push(grid_block);

				      the_grid.addChild(grid_block);
			    	}
				}

			    // default no_no_spots
			    no_no_spots = [0, 1, 16, 17, 55, 56, 71, 72, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 23, 24, 31, 32, 33, 39, 40, 47, 48, 54, 57, 63, 64, 70, 73, 79, 80, 86, 87, 88, 89, 95, 96, 101, 102, 103, 104, 105, 106, 111, 112, 116, 123, 127];

			    if (picture_stage.stageWidth >= 602){
				    if (picture_stage.stageWidth >= 901){
				    	no_no_spots.push(117, 118, 119, 120, 121, 122);
				    }

				    if (picture_stage.stageWidth >= 1382){
				    	no_no_spots.push(113, 114, 115, 124, 125, 126);
					}

					if (picture_stage.stageWidth >= 776){
						no_no_spots.push(128, 129, 130, 141, 142, 143);
					}

					if (picture_stage.stageWidth <= 776){
						no_no_spots.push(118, 119, 120, 121, 111, 110, 109, 108, 107, 106, 105, 104, 103, 102 , 101, 100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80);
					}

					if (picture_stage.stageWidth <= 1150){
						no_no_spots.push(2, 18);

					}

					if (picture_stage.stageHeight <= 650){
						no_no_spots.push(112, 113, 114, 125, 126, 127, 103, 104, 32, 33);
					}

					if (picture_stage.stageHeight <= 650 && picture_stage.stageWidth >= 1025){
						no_no_spots.push(102, 105);
					}

				}

				if (pictures_dropped <= 1){
					no_no_spots.push(2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 54, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 70, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 116, 123, 127);
				} else if (pictures_dropped == 2){
					no_no_spots.push(2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 57, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 73, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 116, 123, 127);
				} else if (pictures_dropped <= 3){
					no_no_spots.push(2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 51, 52, 53, 54, 57, 58, 59, 60, 63, 64, 67, 68, 69, 70, 73, 74, 75, 76, 79, 80, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 116, 123, 127);
				}

				// iterate through no_no_spots in grid_items and set  to false
				$.each(no_no_spots, function( index, value ) {
					grid_items[value].canPlace = false;
					//grid_items[value].graphicsData[0].fill = 1; // for dev
				   // grid_items[value].graphicsData[0].fillColor = 0xFF0000; // for dev
				});

				picture_stage.addChild(the_grid);

			} // end draw_grid()

			draw_grid();

		    renderer.render(picture_stage);
		    start_arrow_animation();

		    var resize_delay = (function(){
				var timer = 0;
				return function(callback, ms){
					clearTimeout (timer);
					timer = setTimeout(callback, ms);
				};
			})();

		    window.onresize = function(event){

		        resize_delay(function(){
		          picture_stage.stageWidth = full_theme_stage.offsetWidth;
		          picture_stage.stageHeight = full_theme_stage.offsetHeight;
		          renderer.resize(picture_stage.stageWidth, picture_stage.stageHeight);

				  draw_grid();

				  renderer.render(picture_stage);
				}, 300);
		    };

			if ($('html').hasClass('no-flash')) {
				configPath = '/shell/templates/home/config/theme-config.json' + qs;
			} else {
				configPath = '/shell/templates/home/config/theme-config.json' + qs;
			}

		    // Get Picture Data
		    $.getJSON(configPath, function(data) {
		  	    theme_config = data;

		  	    theme_config.shows.sort(randomize_sort);

		  	    for (var j=0; j<theme_config.shows.length; j++) {
		  	        var image = new Image();
		  	        image.src = theme_config.shows[j].image;
		  	        picture_images.push(image);
		            show_link_map[j] = j;
		  	    }

		  	    show_graphic_count = picture_images.length;

		  	});

		  	function init_sound() {
		  	    if (!createjs.Sound.initializeDefaultPlugins()) {return;}

			  	// Create Sound Manifest
			    var audioPath = _SITE_ROOT + "themes/polaroid/media/";
		  		var manifest = [
		  			{id:"flashSound", src:"polaroid_camera_click.ogg"}

		  		];

		  		//console.log(audioPath);
		  	    createjs.Sound.alternateExtensions = ["mp3"]; // Looks for both OGG and MP3
		  	    createjs.Sound.addEventListener("fileload", handleLoad);
                createjs.Sound.registerManifest(manifest, audioPath);
			}

			init_sound();

			function handleLoad(event) {
			    $('#camera-button').on('click', function(){

				  	stop_arrow_animation();
				  	animate_flash_action();
				  	createjs.Sound.play("flashSound");

				  	camera_clicks += 1;

				  	if (camera_clicks == 1){

				  		for (var i = 1; i <=3; i++){


				  			if (pictures_dropped == 0){
				  				pictures_dropped += 1;

				  				draw_grid();
				  				//renderer.render(picture_stage); // for dev

				  				add_picture();
				  			} else {
				  				setTimeout(function(){
				  					pictures_dropped += 1;

				  					draw_grid();
				  					//renderer.render(picture_stage); // for dev

				  					add_picture();
				  				}, 200 * i);
				  			}
				  		}
				  	} else {
				  		pictures_dropped += 1;

				  		if (camera_clicks == 2){
					  		draw_grid();
					  		//renderer.render(picture_stage);
				  		}
					  	add_picture();
				  	}
			  	});
            }
		}
		// Vendor Prefix Detection (consider adding to playnice)
		if (Modernizr.canvas == true) {
			$('body').one('wheel-ready', function(event){
			    imagesLoaded(picture_images, init_scene);
			});
		} else {
			//init_static_scene();
		}

	});
}));
