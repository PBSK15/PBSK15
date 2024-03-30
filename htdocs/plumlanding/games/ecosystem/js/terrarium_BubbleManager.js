/////////////////////////////////////////////////////////////////////////
//                                                                                                                                     
//  Bubble Manager for Terrarium Game in Virtual World - Plum Landing            
//
//  Copyright © 2014 WGBH Digital                                 
//  WGBH Educational Foundation
//
//  Provides character bubble objects for use with the terrarium in the
// 	Virtual World.
//
//	Authored by Kal Gieber
//
/////////////////////////////////////////////////////////////////////////

; var BubbleManager = (function() {

	// VARIABLES ********************************************************

	// STATIC
	var	IMG_PATH = 'i/',	// path to images
		VERT_DIST = 12,		// amt of pixels for up and down floating
		VERT_SPEED = 0.5,	// vertical speed of the floating
		HORZ_EDGE = -200,	// left boundary for horizontal movement
		HORZ_SPEED = 6,		// horizontal speed of bubbles
		PAUSE_AMT = 9,		// how many ticks to wait to continue
		PAUSE_MAX = 150;	// maximum ticks to wait before reshowing bubble
	
	// PARAMETERS
	var currCharIndex,		// index of current active character
		y_diff,				// difference between y positioning
		sc_diff,			// difference between the scaling
		gm_type,			// game type
		gm_view,			// view area of the game (left, right, top, bottom)
		max_width;			// maximum width of the environment

	// OBJECTS
	var c=createjs,			// reference to createjs namespace
		display_cont,		// display container from parent
		curr_bubble,		// holds current bubble reference
		curr_placed,		// holds placed bubble being moved
		curr_bmp,			// holds the bitmap child of the bubbles
		curr_param,			// current parameters
		main = this;		// pointer to this object
		
	// ARRAYS
	var placedBubbles = [],	// list of bubbles that have been placed
		charAvail = [],		// index of available characters
		gameBubbles = [
			{name:'brad'},
			{name:'clem'},
			{name:'coop'},
			{name:'gabi'},
			{name:'oli'}
			];		// bubbles to use

	// desert paramaters for bubbles	
	main.desert_left_param = {
		'min_y':150,
		'max_y':250,
		'min_scale':0.2,
		'max_scale':0.5,
		'start_xl':0,
		'start_xr':988
	};
	main.desert_right_param = {
		'min_y':150,
		'max_y':250,
		'min_scale':0.2,
		'max_scale':0.5,	
		'start_xl':988,
		'start_xr':1976
	};
	
	// jungle paramaters for bubbles	
	main.jungle_top_param = {
		'min_y':150,
		'max_y':400,
		'min_scale':0.30,
		'max_scale':0.34,
		'start_xl':0,
		'start_xr':988
	};
	main.jungle_bottom_param = {
		'min_y':700,
		'max_y':820,
		'min_scale':0.34,
		'max_scale':0.36,	
		'start_xl':0,
		'start_xr':988
	};
	
	// mountain paramaters for bubbles	
	main.mountain_top_param = {
		'min_y':130,
		'max_y':280,
		'min_scale':0.3,
		'max_scale':0.45,
		'start_xl':0,
		'start_xr':988
	};
	main.mountain_bottom_param = {
		'min_y':694,
		'max_y':694,
		'min_scale':0.5,
		'max_scale':0.5,	
		'start_xl':0,
		'start_xr':988
	};
	
	// water paramaters for bubbles	
	main.water_left_param = {
		'min_y':150,
		'max_y':180,
		'min_scale':0.57,
		'max_scale':0.6,
		'start_xl':0,
		'start_xr':988
	};
	main.water_right_param = {
		'min_y':540,
		'max_y':640,
		'min_scale':0.5,
		'max_scale':0.56,	
		'start_xl':988,
		'start_xr':1976
	};

	// FUNCTIONS ********************************************************

	// used to reset the parameters for each game
	function resetParameters(){
		var i = 0;
		placedBubbles = [];
		charAvail = [];
		for(;i<gameBubbles.length;++i) {
			charAvail.push(i);
		}
	}
	
	resetParameters();

	// EVENT FUNCTIONS **************************************************
	
	// used to save image after being loaded
	function charImageLoaded(ev) {
		ev.target.removeEventListener('load', charImageLoaded);
		var new_BMP = new c.Bitmap(ev.target),
			BMP_bounds = new_BMP.getBounds(),
			bmp_cont = new c.Container();
		new_BMP.x = 0;
		new_BMP.y = -(BMP_bounds.height);
		bmp_cont.addChild(new_BMP);
		curr_bubble.cont = new c.Container();
		curr_bubble.cont.addChild(bmp_cont);
		placeBubble();
		new_BMP = null;
		BMP_bounds = null;
		bmp_cont = null;
	}
	
	// PRIVATE FUNCTIONS ************************************************
		
	// used to place a bubble in the display container
	function placeBubble() {
		// determine which direction to start
		var rdm_dir = (Math.random() > 0.5) ? 'right' : 'left';
		// set up bubble display
		moveBubble(curr_bubble.cont, rdm_dir);
		display_cont.addChild(curr_bubble.cont);
		placedBubbles.push({cont:curr_bubble.cont,vdir:'down',hdir:((rdm_dir === 'right') ? 'left' : 'right')});
	}
	
	// used to move the bubble to a new location
	function moveBubble(pos_cont, pos_side) {
		curr_param = main[gm_type+'_'+gm_view+'_param'];
		y_diff = curr_param.max_y - curr_param.min_y;
		sc_diff = curr_param.max_scale - curr_param.min_scale;	
	
		var rdm_sc = (Math.floor(Math.random() * 100))/100;
/*
// USED FOR TESTING EXACT POSITION		
		pos_cont.y = 250;
		pos_cont.scaleX = pos_cont.scaleY = .5;
// USED FOR TESTING MIN AND MAX		
		if(Math.random() > .5) {
			pos_cont.y = 280;
			pos_cont.scaleX = pos_cont.scaleY = .4;			
		}
		else {
			pos_cont.y = 200;
			pos_cont.scaleX = pos_cont.scaleY = .2;			
		}
*/
		// random normal positioning
		pos_cont.y = (y_diff * rdm_sc) + curr_param.min_y;
		pos_cont.scaleX = pos_cont.scaleY = (sc_diff * rdm_sc) + curr_param.min_scale;	
/**/
		if(pos_side === 'left') {
			pos_cont.x = curr_param.start_xl - (pos_cont.getBounds().width *pos_cont.scaleX);
		}
		else {
			pos_cont.x = curr_param.start_xr;
		}
	}
	
	// PUBLIC FUNCTIONS *************************************************
		
	// used to set the display container for the bubbles
	function setDisplayContainer(cont, type) {
		display_cont = cont;
		gm_type = type;
	}
	
	// used to set the maximum width where the bubbles can appear
	function setDisplayWidth(wid) {
		max_width = wid;
	}
	
	// used to set the game view area
	function setGameView(view) {
		gm_view = view;
	}
	
	// used to add a new character bubble
	function addNewBubble(){
		var ixNum = Math.floor(Math.random() * charAvail.length);
		currCharIndex = charAvail[ixNum];
		charAvail.splice(ixNum, 1);
		curr_bubble = gameBubbles[currCharIndex];
		// check if container has already been built
		if(curr_bubble.cont) {
			placeBubble();
		}
		else {
			var char_img = new Image();
			char_img.src = IMG_PATH + 'bubble_'+curr_bubble.name+'.png';
			char_img.addEventListener('load', charImageLoaded);
		}
	}
	
	// used to identify how many bubbles can still be made
	function getNumBubblesAvailable() {
		return charAvail.length;
	}
	
	// used to get number of bubbles that have been placed
	function getNumBubblesPlaced() {
		return placedBubbles.length;
	}
	
	// used to add the bubbles to the parent array that gets sorted for z-index
	function addBubblesToArray(sortChars) {
		var si = 0;
		for(;si < placedBubbles.length; ++si) {
			curr_placed = placedBubbles[si];
			sortChars.push({name:('bubble'+si), char:curr_placed.cont, charY:curr_placed.cont.y, scaleY:curr_placed.cont.scaleY});
		}
	}
	
	// used to update the display of the bubbles
	function updateBubbles() {
		var j = 0;
		for(; j < placedBubbles.length; ++j) {
			curr_placed = placedBubbles[j];
			// adjust vertical movement
			curr_bmp = curr_placed.cont.getChildAt(0);
			switch(curr_placed.vdir) {
			case 'down':
				curr_bmp.y += VERT_SPEED;
				if(curr_bmp.y >= VERT_DIST){
					curr_placed.vdir = 'pause_u';
					curr_placed.vctr = Math.ceil(PAUSE_AMT * Math.random());
				}
				break;
			case 'up':
				curr_bmp.y -= VERT_SPEED;
				if(curr_bmp.y <= -VERT_DIST){
					curr_placed.vdir = 'pause_d';
					curr_placed.vctr = Math.ceil(PAUSE_AMT * Math.random());
				}
				break;
			case 'pause_d':
				--curr_placed.vctr;
				if(curr_placed.vctr <= 0){
					curr_placed.vdir = 'down';
				}
				break;
			case 'pause_u':
				--curr_placed.vctr;
				if(curr_placed.vctr <= 0){
					curr_placed.vdir = 'up';
				}
				break;
			default:
				// do nothing
				break;
			}
			
			// adjust horizontal movement
			switch(curr_placed.hdir) {
			case 'right':
				curr_placed.cont.x += (HORZ_SPEED * curr_placed.cont.scaleX);
				if(curr_placed.cont.x > max_width){
					curr_placed.hdir = 'pause_l';
					curr_placed.hctr = Math.ceil(PAUSE_MAX * Math.random());
				}
				break;
			case 'left':
				curr_placed.cont.x -= (HORZ_SPEED * curr_placed.cont.scaleX);
				if(curr_placed.cont.x < HORZ_EDGE){
					curr_placed.hdir = 'pause_r';
					curr_placed.hctr = Math.ceil(PAUSE_MAX * Math.random());
				}
				break;
			case 'pause_r':
				--curr_placed.hctr;
				if(curr_placed.hctr <= 0){
					// place the bubble in a new place
					moveBubble(curr_placed.cont, 'left');
					curr_placed.hdir = 'right';
				}
				break;
			case 'pause_l':
				--curr_placed.hctr;
				if(curr_placed.hctr <= 0){
					// place the bubble in a new place
					moveBubble(curr_placed.cont, 'right');
					curr_placed.hdir = 'left';
				}
				break;
			default:
				// do nothing
				break;
			}
		}
	}
	
	// used to clear out the bubbles when the game restarts
	function clearBubbles() {
		while(placedBubbles.length > 0) {
			display_cont.removeChild(placedBubbles[0].cont);
			placedBubbles.splice(0, 1);
		}
		resetParameters();
	}
	
	return  {
		setDisplayContainer:setDisplayContainer,
		setDisplayWidth:setDisplayWidth,
		setGameView:setGameView,
		addNewBubble:addNewBubble,
		getNumBubblesAvailable:getNumBubblesAvailable,
		getNumBubblesPlaced:getNumBubblesPlaced,
		addBubblesToArray:addBubblesToArray,
		updateBubbles:updateBubbles,
		clearBubbles:clearBubbles
	};
	
})();