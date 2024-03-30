/////////////////////////////////////////////////////////////////////////
//                                                                                                                                     
//  Virtual World implementation for Terrarium Game - Plum Landing            
//
//  Copyright © 2014 WGBH Digital                                 
//  WGBH Educational Foundation
//
//  Main javascript programming for the virtual world interaction with 
//  the terrarium game.
//
//	Authored by Kal Gieber
//
/////////////////////////////////////////////////////////////////////////

; var VirtualWorldManager = (function($) {
	// VARIABLES ********************************************************

	// STATIC PBS VW LISTENERS
	var	MINIGAME_READY = 'pbskids_kartkingdom_minigameEvent_MinigameReady',
		LEVEL_COMPLETE_OPEN = 'pbskids_kartkingdom_minigameEvent_LevelCompleteOpen',
		LEVEL_COMPLETE_CLOSED = 'pbskids_kartkingdom_minigameEvent_LevelCompleteClosed',
		LEVEL_RESET = 'pbskids_kartkingdom_minigameEvent_LevelReset',
		RESOURCES_EARNED = 'pbskids_kartkingdom_minigameEvent_ResourcesEarned',
		RESOURCE_REQUEST_COMPLETE = 'pbskids_kartkingdom_minigameEvent_ResourceRequestComplete';
		
	// STATIC PBS GAME GUIDS
	var gameGUID = {
		'desert':'d1590ac5-6f33-4a9b-b6e7-3ea70fcda3f7',
		'jungle':'916197ca-ceec-4334-96e4-6c7d2949e23d',
		'mountain':'7f4a457a-0d56-4f60-b651-09b5a7f80fee',
		'water':'b3cfbb2c-2a32-4a12-9e55-97faf293e857'
	};
			
	// STATIC PBS RESOURCE GUIDS	
	var resourceGUID = {
		'desert':{
			'greenlites':'7253bb11-e7ff-441a-8974-6f182424a147',
			'noloss':'0f65654f-4e23-4a8d-8098-b08278858202',
			'highscore':'b4097162-3a0d-4879-ade7-ae4e8507c549'
			},
		'jungle':{
			'greenlites':'088c20c5-d97a-4e71-8afb-cb2a60a87e1e',
			'noloss':'9c6261ed-daf7-490d-b26e-4f41e411a428',
			'highscore':'f5cb4efc-ec9c-451c-93fe-a36f31a2339a'
			},
		'mountain':{
			'greenlites':'f865c337-24b7-4386-8bff-f98b3361fd82',
			'noloss':'ac29fc67-ad49-47f1-bd66-dcd0fb0fac7d',
			'highscore':'f519e437-a4fd-4331-9c43-09b538dba51c'
			},
		'water':{
			'greenlites':'5c66263b-a53b-4891-a42e-58cfa69d0cbc',
			'noloss':'53c2ac2e-cb54-4e9f-b0f0-b89ba1513236',
			'highscore':'b7997b50-4579-4b74-a96e-55d31b49a1dd'
			}
	};
	
	// STATIC
	var SPRITES_URL = 'i/vw_powerup_icons', // path to spritesheet assets
		GAMEDIV_ID = 'terr-game',	// id to game holder div
		PLUSONE_ID = 'extra_bubble',// id for the extra bubble power-up
		DOUBLER_ID = 'plum_double',	// id for the double points power-up
		BUDDIES_ID = 'bubble_buddy',// id for the bubble buddies power-up 
		ROUNDED_CORNERS = 10,		// amount to round the button corners
		ICONS_DIM = 42,				// dimensions of icon buttons
		ICONS_X = 4.5,				// x pos of icon buttons
		ICONS_Y = 7.5,				// y pos of icon buttons
		ICONS_DOWN_Y = 9.5,			// y pos of icon buttons in down pos
		CONT_X = 762,				// x pos of buttons container
		CONT_Y = 8,					// y pos of buttons container
		PLUSONE_X = 0,				// x pos of plus one power up button
		DOUBLER_X = 50,				// x pos of doubler power up button
		BUDDIES_X = 100;			// x pos of bubble buddies power up button
		
	// STATIC COLORS
	var PUR_COLOR = '#9e89e5',		// light color of purple bar and alt buttons
		WHT_COLOR = '#ffffff',		// text white
		RED_COLOR = '#d7353a',		// red color or cc0e0b
		COVER_COLOR = '#6d44ac',	// cover over inactive buttons
		DEACTIVE_COLOR = '#4b2994',	// darker purple color
		ACTIVE_COLOR = '#33a1a5',	// 
		INUSE_COLOR = '#5cb4b7',	// 
		SHADOW_COLOR = 'rgba(0,0,0,0.25)', // icon shadow color
		SHADOW_DEACT_COLOR = 'rgba(54,54,54,0.25)'; // deactive shadow color
	
	// PARAMETERS
	var gm_type,					// game type
//		num_rewards = 0,			// number of rewards received in a day
		num_plusone = 0,			// number of plus one power-ups
		num_doubler = 0,			// number of doubler power-ups
		num_bubblebuddies = 0,		// number of bubblebuddies power-ups
		powerup_type = '';			// power up type
	
	// OBJECTS
	var c=createjs,					// reference to createjs namespace
		powerupbt_cont,				// container for power up buttons
		display_stage,				// display container from parent
		powerup_spritesheet,		// holds sprite sheet for power up icons
		plusone_bt,					// plus one character button
		doubler_bt,					// double the score button
		bubblebuddy_bt,				// bubble buddy button
		vwConnection;				// object to connect with the virtual world

	// FLAGS
	var PBS_loggedin = false,		// player is logged into PBS
		VW_accessed = false,		// player is logged into VW
		buildComplete = false,		// indicates when VW has been built
		doublepts_active = false,	// player activated double pts powerup
		bubblebuddy_allused = false,// bubble buddy power-up is allowed
		end_game = false;			// after vw msg closes, game should end
		
// FOR TESTING
	var show_comments = false;
//	var show_comments = true;
	
trace('>>> WGBH ***** testing version 1.14');
		
	// INIT OBJECTS *****************************************************
	
	// power up buttons
	(PowerUpButton =function(btname) {
		this.initialize();
		this.name = btname;
		this.bg = new c.Shape();
		this.shadow = new c.Shape();
		this.overlay = new c.Shape();
		this.status = '';
		this.prev_status = '';
		
		// icons
		this.act_icon_img = new createjs.Bitmap(powerup_spritesheet._images[0]);
		this.inact_icon_img = new createjs.Bitmap(powerup_spritesheet._images[0]);
		this.act_icon_img.sourceRect = powerup_spritesheet.getFrame(powerup_spritesheet.getAnimation(this.name).frames[0]).rect;
		this.inact_icon_img.sourceRect = powerup_spritesheet.getFrame(powerup_spritesheet.getAnimation(this.name + '_off').frames[0]).rect;
		this.act_icon_img.x = this.inact_icon_img.x = ICONS_X;
		this.act_icon_img.y = this.inact_icon_img.y = ICONS_Y;
		
		// position graphics
		this.bg.x = 0;
		this.bg.y = 0;
		this.shadow.x = 0;
		this.shadow.y = 0;

		// draws graphics for shadow
		this.buildShadow = function (){
			this.shadow.graphics.f(SHADOW_COLOR).drawRoundRect(0,5,ICONS_DIM,ICONS_DIM,ROUNDED_CORNERS);
		};
		
		// draws graphics for end of day overlay blocker
		this.buildOverlay = function (){
			this.overlay.graphics.f(COVER_COLOR).drawRoundRect(0,0,ICONS_DIM,ICONS_DIM,ROUNDED_CORNERS);
			this.overlay.alpha = 0.5;
			this.overlay.visible = false;
		};
		
		// draw graphics for inactive button
		this.buildNotActive = function() {
			this.status = 'inactive';
			this.inact_icon_img.visible = true;
			this.act_icon_img.visible = false;
			this.bg.graphics.clear();
			this.bg.graphics.f(DEACTIVE_COLOR).drawRoundRect(0,0,ICONS_DIM,ICONS_DIM,ROUNDED_CORNERS);
			this.shadow.graphics.clear();
			this.shadow.graphics.f(SHADOW_DEACT_COLOR).drawRoundRect(0,5,ICONS_DIM,ICONS_DIM,ROUNDED_CORNERS);
		};
		
		// draw graphics for active button
		this.buildActive = function() {
			this.status = 'active';
			this.act_icon_img.visible = true;
			this.inact_icon_img.visible = false;
			this.bg.graphics.clear();
			this.bg.graphics.f(ACTIVE_COLOR).drawRoundRect(0,0,ICONS_DIM,ICONS_DIM,ROUNDED_CORNERS);
			this.shadow.graphics.clear();
			this.shadow.graphics.f(SHADOW_COLOR).drawRoundRect(0,5,ICONS_DIM,ICONS_DIM,ROUNDED_CORNERS);
			this.act_icon_img.y = ICONS_Y;
		};
		
		// draw graphics for active button
		this.buildInUse = function() {
			this.status = 'inuse';
			this.act_icon_img.visible = true;
			this.inact_icon_img.visible = false;
			this.bg.graphics.clear();
			this.bg.graphics.f(INUSE_COLOR).drawRoundRect(0,2,ICONS_DIM,ICONS_DIM,ROUNDED_CORNERS);
			this.shadow.graphics.clear();
			this.shadow.graphics.f(SHADOW_COLOR).drawRoundRect(0,5,ICONS_DIM,ICONS_DIM,ROUNDED_CORNERS);
			this.act_icon_img.y = ICONS_DOWN_Y;
		};
		
		// show button overlay for end of day tallies
		this.showOverlay = function() {
			if(this.status === 'inuse'){
				this.overlay.y = 2;
			}
			else {
				this.overlay.y = 0;
			}
			this.overlay.visible = true;
			this.prev_status = this.status;
			this.status = 'blocked';
		};
		
		// hide button overlay for end of day tallies
		this.hideOverlay = function() {
			this.overlay.visible = false;
			this.status = this.prev_status;
		};
		
		// returns status of button
		this.getStatus = function() {
			return this.status;
		};
		
		this.addChild(this.shadow);
		this.addChild(this.bg);
		this.addChild(this.inact_icon_img);
		this.addChild(this.act_icon_img);
		this.addChild(this.overlay);
		
		this.buildShadow();
		this.buildOverlay();
		this.buildNotActive();
		
	}).prototype=new c.Container();
	
	// message object
	
	// virtual world message box
	var vw_messenger = (function() {
		
		// static
		var	VW_MSG_WIDTH = 240,				// width of message area
			VW_MSG_HGT = 166,				// height of message area
			VW_MSG_HGT_LONG = 190,			// height of message area
			MASK_COLOR = '#ff0000',			// color of mask
			TRI_HEIGHT = 27,				// height of triangle
			NUM_DIM = 20,					// dimensions of the circle
			NUM_MARGIN = 12,				// margin between header and num
			BTN_Y = 136,					// y pos of buttons
			BTN_Y_LONG = 160,				// y pos of buttons, long screen
			ROUNDED_EDGE = 20;				// radius of rounded rectangle

		var TXT_PLUSONE = 'Use this power-up to add one more plant or animal bubble.',	
			TXT_DOUBLER = 'Use this power-up to double your points for one day.',
			TXT_BUBBLES = 'Use this power-up to add one of the kids to your game.',
			TXT_NONELEFT = 'Go to the new virtual world, Kart Kingdom, to earn this power-up.',
			TXT_INUSE = 'Sorry! You can\'t use any more of this power-up right now.',
			TXT_SORRY = 'Sorry! You can\'t use any more of this power-up in this game.',
			TXT_NOTLOGGEDIN = 'You can earn cool power-ups for this game in the new virtual world, Kart Kingdom.';

		// parameters
		var outclick_todo = '';					// if bg area is clicked
		
		// objects
		var vw_msg_cont = new c.Container(),	// vw message block
			bg_cont = new c.Container(),		// bg container
			bg_mask = new c.Shape(),			// bg mask area
			bg_msg = new c.Shape(),				// message area bg
			bg_hdr = new c.Shape(),				// header bg
			tri_cont = new c.Container(),		// triangle container
			tri_shape = new c.Shape(),			// triangle shape
			bg_border = new c.Shape(),			// border around area
			active_area = new c.Shape(),		// area for background hits
			title_cont = new c.Container(),		// power up title
			actmsg_cont = new c.Container(),	// power up messages
			numleft_cont = new c.Container(),	// number left container
			numleft_circ = new c.Shape(),		// number left shape
			numleft_amt,						// number left text 
			title_plusone,						// title - plus one power-up
			title_doubler,						// title - doubler power-up
			title_bubble,						// title - bubble buddy power-up
			msg_plusone,						// message - plus one power-up
			msg_doubler,						// message - doubler power-up
			msg_bubble,							// message - bubble power-up
			msg_noneleft,						// message - none left
			msg_inuse,							// message - inuse
			msg_sorry,							// message - no more in game
			msg_notloggedin,					// message - not logged in
			use_bt,								// use button
			cancel_bt,							// cancel button
			okay_bt,							// okay button
			titles,								// holds various titles
			actpwr_msgs,						// holds active power up msgs
			msg_pos,							// holds position of msg block
			arrow_pos;							// hold position of center arrow
			
		function buildVWMessageDisplay() {
		
			// static
			var	VW_MSG_X = 664,					// x pos of vw msg box
				VW_MSG_Y = 58,					// y pos of vw msg box
				VW_MSG_WIDTH = 240,				// width of message area
				MSG_X = 14,						// x pos of messages
				MSG_Y = 90,						// y pos of messages
				MSG_WIDTH = 212,				// width of messages
				TRI_WIDTH = 51,					// dimensions of triangle
				BDR_COLOR = '#f3f3f3',			// color of border
				BAR_HEIGHT = 44,				// height of purple bar
				NUMLEFT_Y = 38,					// y pos of num left block
				TITLE_Y = 48;					// y pos of name block
			
			// parameters
			var	midpoint = VW_MSG_WIDTH/2,			// midpoint of box
				tri_midpoint = TRI_WIDTH/2;			// midpoint of triangle
				
			// set up positioning
			msg_pos= {
				'plusone':VW_MSG_X,
				'doubler':(VW_MSG_X + 50),
				'bubble':(VW_MSG_X + 84)
			};
			arrow_pos= {
				'plusone':(midpoint - tri_midpoint),
				'doubler':(midpoint - tri_midpoint),
				'bubble':((midpoint - tri_midpoint) + 16)
			};
							
			// set up main msg container
			vw_msg_cont.x = msg_pos.plusone;
			vw_msg_cont.y = VW_MSG_Y;
			display_stage.addChild(vw_msg_cont);
			
			// set up bg container and mask
			bg_cont.y = TRI_HEIGHT;
			bg_cont.mask=bg_mask;
			
			// backgrounds
			drawLongerBackground();
			bg_hdr.graphics.beginFill(PUR_COLOR).drawRect(0, 0, VW_MSG_WIDTH, BAR_HEIGHT).endFill();
			bg_cont.addChild(bg_msg);
			bg_cont.addChild(bg_hdr);
			vw_msg_cont.addChild(bg_cont);
			
			// triangle
			tri_shape.graphics.setStrokeStyle(1).beginStroke(PUR_COLOR).beginFill(PUR_COLOR).moveTo(0, TRI_HEIGHT+1).lineTo((TRI_WIDTH/2), 0).lineTo(TRI_WIDTH, TRI_HEIGHT+1).endFill().endStroke();
			tri_cont.addChild(tri_shape);
			tri_cont.x = arrow_pos.plusone;
			tri_cont.y = 0;
			vw_msg_cont.addChild(tri_cont);
			
			// add text content
			title_cont.y = TITLE_Y;
			title_plusone = new lib.gametext('Extra Bubble','h7');
			title_doubler = new lib.gametext('Plum Double','h7');
			title_bubble = new lib.gametext('Bubble Buddy','h7');
			title_plusone.textBaseline = 'middle';
			title_doubler.textBaseline = 'middle';
			title_bubble.textBaseline = 'middle';
			title_cont.addChild(title_plusone);
			title_cont.addChild(title_doubler);
			title_cont.addChild(title_bubble);
			vw_msg_cont.addChild(title_cont);
			titles= {
				'plusone':title_plusone,
				'doubler':title_doubler,
				'bubble':title_bubble
			};
			hideTitles();
			
			// add number left
			numleft_cont.x = 164;
			numleft_cont.y = NUMLEFT_Y;
			numleft_circ.graphics.beginFill(RED_COLOR).setStrokeStyle(1).beginStroke(RED_COLOR).drawCircle(NUM_DIM/2,NUM_DIM/2,NUM_DIM/2).endStroke();
			numleft_amt = new lib.gametext('0','.game-blurb-number'); 
			setNumValue(0);
			numleft_amt.y = NUM_DIM/2;
			numleft_amt.textBaseline = 'middle';
			numleft_cont.addChild(numleft_circ);
			numleft_cont.addChild(numleft_amt);
			vw_msg_cont.addChild(numleft_cont);

			// add individual message content					
			actmsg_cont.y = MSG_Y;
			actmsg_cont.x = MSG_X;
			msg_plusone = new lib.vwmessage(TXT_PLUSONE,MSG_WIDTH);
			msg_doubler = new lib.vwmessage(TXT_DOUBLER,MSG_WIDTH);
			msg_bubble = new lib.vwmessage(TXT_BUBBLES,MSG_WIDTH);
			msg_noneleft = new lib.vwmessage(TXT_NONELEFT,MSG_WIDTH);
			msg_inuse = new lib.vwmessage(TXT_INUSE,MSG_WIDTH);
			msg_sorry = new lib.vwmessage(TXT_SORRY,MSG_WIDTH);
			msg_notloggedin = new lib.vwmessage(TXT_NOTLOGGEDIN,MSG_WIDTH);
			
			actmsg_cont.addChild(msg_plusone);
			actmsg_cont.addChild(msg_doubler);
			actmsg_cont.addChild(msg_bubble);
			actmsg_cont.addChild(msg_noneleft);
			actmsg_cont.addChild(msg_inuse);
			actmsg_cont.addChild(msg_sorry);
			actmsg_cont.addChild(msg_notloggedin);
			
			vw_msg_cont.addChild(actmsg_cont);
			actpwr_msgs= {
				'plusone':msg_plusone,
				'doubler':msg_doubler,
				'bubble':msg_bubble,
				'noneleft':msg_noneleft,
				'inuse':msg_inuse,
				'sorry':msg_sorry,
				'notloggedin':msg_notloggedin
			};
			hideActiveMessages();
			
			// add background hit area
// FOR TESTING
//			active_area.graphics.beginFill('#FF0000').drawRect(0, 0, VW_MSG_WIDTH, (VW_MSG_HGT+TRI_HEIGHT)).endFill();			
//			active_area.alpha = .5;
			active_area.graphics.beginFill(WHT_COLOR).drawRect(0, 0, VW_MSG_WIDTH, VW_MSG_HGT).endFill();			
			active_area.alpha = 0.01;
			vw_msg_cont.addChild(active_area);
			active_area.addEventListener('click', backgroundClicked);
			
			// cancel button
			cancel_bt = new lib.buttonbg('Cancel', false, PUR_COLOR);
			cancel_bt.name = 'cancel';
			vw_msg_cont.addChild(cancel_bt);
			cancel_bt.x = midpoint + 10;
			cancel_bt.y = BTN_Y;	
			cancel_bt.cursor = 'pointer';
			cancel_bt.addEventListener('click', vwScreenClick);
			
			// use button
			use_bt = new lib.buttonbg('Use it!', false, ACTIVE_COLOR);
			use_bt.name = 'use';
			vw_msg_cont.addChild(use_bt);
			use_bt.x = 30;
			use_bt.y = BTN_Y;	
			use_bt.cursor = 'pointer';
			use_bt.addEventListener('click', vwScreenClick);
					
			// okay button
			okay_bt = new lib.buttonbg('Okay', false, ACTIVE_COLOR);
			okay_bt.name = 'okay';
			vw_msg_cont.addChild(okay_bt);
			okay_bt.x = midpoint - (okay_bt.width/2);
			okay_bt.y = BTN_Y_LONG;	
			okay_bt.cursor = 'pointer';
			okay_bt.addEventListener('click', vwScreenClick);

			// start with everything hidden
			hideVWMessageCont();
			
		}
		
		// used to draw shorter background
		function drawShorterBackground() {
			bg_mask.graphics.clear();
			bg_mask.graphics.beginFill(MASK_COLOR).drawRoundRect(0, TRI_HEIGHT, VW_MSG_WIDTH,VW_MSG_HGT, ROUNDED_EDGE).endFill();
			bg_msg.graphics.clear();
			bg_msg.graphics.beginFill(WHT_COLOR).drawRect(0,0,VW_MSG_WIDTH,VW_MSG_HGT);
			bg_cont.setBounds(bg_cont.x, bg_cont.y, VW_MSG_WIDTH, VW_MSG_HGT);
		}
		
		// used to draw longer background
		function drawLongerBackground() {
			bg_mask.graphics.clear();
			bg_mask.graphics.beginFill(MASK_COLOR).drawRoundRect(0, TRI_HEIGHT, VW_MSG_WIDTH,VW_MSG_HGT_LONG, ROUNDED_EDGE).endFill();
			bg_msg.graphics.clear();
			bg_msg.graphics.beginFill(WHT_COLOR).drawRect(0,0,VW_MSG_WIDTH,VW_MSG_HGT_LONG);
			bg_cont.setBounds(bg_cont.x, bg_cont.y, VW_MSG_WIDTH, VW_MSG_HGT_LONG);
		}
		
		// used to set the number value in the number left
		function setNumValue(val_amt) {
			numleft_amt.text = val_amt;
			numleft_amt.x = (NUM_DIM - numleft_amt.getMeasuredWidth())/2;
		}
		
		// used to hide all of the titles
		function hideTitles(){
			title_plusone.visible = false;
			title_doubler.visible = false;
			title_bubble.visible = false;
		}
		
		// used to hide all of the messages for active power ups
		function hideActiveMessages(){
			msg_plusone.visible = false;
			msg_doubler.visible = false;
			msg_bubble.visible = false;
			msg_noneleft.visible = false;
			msg_inuse.visible = false;
			msg_sorry.visible = false;
			msg_notloggedin.visible = false;
		}
		
		// used to do the next step after click
		function nextStep(nxstep) {
			hideVWMessageCont();
			$(document).trigger('VW_MESSAGE_CLOSED');
			switch(nxstep) {
			case 'use':
				selectPowerUp();
				break;
			default:
				// do nothing
				break;
			}
		}
		
		// used to detect when one of the buttons has been pressed
		function vwScreenClick(ev) {
			nextStep(ev.currentTarget.name);
		}
		
		// used to react to the area outside of the buttons being clicked
		function backgroundClicked(ev) {
			nextStep(outclick_todo);
		}
		
		// used to hide virtual world messages
		function hideVWMessageCont() {
			vw_msg_cont.visible = false;
			display_stage.update();
		}
		
		// used to show virtual world messages
		function showVWMessageCont(pwr_type, bt_state, amt_left) {
			outclick_todo = 'cancel';
			$(document).trigger('VW_MESSAGE');
			changeMsgContent(pwr_type, bt_state, amt_left, false);
			vw_msg_cont.visible = true;
			display_stage.update();
		}
		
		// used to change the content when the window is open
		function changeMsgContent(pwr_type, bt_state, amt_left, upd_disp) {
			powerup_type = pwr_type;
			// set up positioning
			vw_msg_cont.x = msg_pos[pwr_type];
			tri_cont.x = arrow_pos[pwr_type];

			// set up title
			hideTitles();
			titles[pwr_type].visible = true;
			
			// set amount
			setNumValue(amt_left);
			
			// determine messaging
			hideActiveMessages();
			
			if(VW_accessed) {
				// make sure shorter background is displayed
				if(bg_cont.getBounds().height !== VW_MSG_HGT) {
					drawShorterBackground();
				}
				// position title to include amount
				title_cont.x = (VW_MSG_WIDTH - (titles[pwr_type].getMeasuredWidth() + (NUM_MARGIN + NUM_DIM)))/2;
				numleft_cont.x = title_cont.x + titles[pwr_type].getMeasuredWidth() + NUM_MARGIN;
				numleft_cont.visible = true;
				
				// check if button is inactive
				if(bt_state === 'inactive'){
					if(powerup_type === 'bubble' && num_bubblebuddies > 0) {
						actpwr_msgs.sorry.visible = true;
						okay_bt.y = BTN_Y;
					}
					else {
						if(bg_cont.getBounds().height !== VW_MSG_HGT_LONG) {
							drawLongerBackground();
						}
						okay_bt.y = BTN_Y_LONG;
						actpwr_msgs.noneleft.visible = true;
					}
					cancel_bt.visible = false;
					use_bt.visible = false;
					okay_bt.visible = true;
				}
				else {
					if(powerup_type === 'doubler' && bt_state === 'inuse') {
						actpwr_msgs.inuse.visible = true;
						cancel_bt.visible = false;
						use_bt.visible = false;
						okay_bt.y = BTN_Y;
						okay_bt.visible = true;
					}
					else {
						actpwr_msgs[pwr_type].visible = true;					
						cancel_bt.visible = true;
						use_bt.visible = true;
						okay_bt.visible = false;
					}
				}
			}
			else {
				if(bg_cont.getBounds().height !== VW_MSG_HGT_LONG) {
					drawLongerBackground();
				}
				// position title in center and hide amount
				title_cont.x = (VW_MSG_WIDTH - titles[pwr_type].getMeasuredWidth())/2;
				numleft_cont.visible = false;
				actpwr_msgs.notloggedin.visible = true;
				cancel_bt.visible = false;
				use_bt.visible = false;
				okay_bt.visible = true;
			}

			if(upd_disp) {
				display_stage.update();
			}
			
		}
		
		// used to indicate whether the message area is open
		function isMessageOpen() {
			return vw_msg_cont.visible;
		}
				
		return {
			buildVWMessageDisplay:buildVWMessageDisplay,
			backgroundClicked:backgroundClicked,
			showVWMessageCont:showVWMessageCont,
			changeMsgContent:changeMsgContent,
			isMessageOpen:isMessageOpen
		};
		
	})();
	
	// INIT FUNCTION ****************************************************
	
	// used to initialize the objects in the game
	function initVirtualWorld() {
		powerupbt_cont = new c.Container();
		powerupbt_cont.x = CONT_X;
		powerupbt_cont.y = CONT_Y;
		display_stage.addChild(powerupbt_cont);
		powerupbt_cont.visible = false;
	
		// set up power up buttons 
		$.getJSON(SPRITES_URL + '.json', function(data,status,xhr){
			data.images[0] = 'i/' + data.images[0];
			powerup_spritesheet=new c.SpriteSheet(data);
			// check if spritesheet has been loaded
			if(!powerup_spritesheet.complete) {
				powerup_spritesheet.addEventListener('complete',buildPowerUpButtons);
			} 
			else {
				buildPowerUpButtons(); // it may be cached.
			}			
		});			
	}
	
	// used to build the buttons used for the power ups
	function buildPowerUpButtons() {
		// add one life button
		plusone_bt = new PowerUpButton('plusone');
		doubler_bt = new PowerUpButton('doubler');
		bubblebuddy_bt = new PowerUpButton('bubblebuddy');
		plusone_bt.x = PLUSONE_X;
		doubler_bt.x = DOUBLER_X;
		bubblebuddy_bt.x = BUDDIES_X;
		plusone_bt.y = doubler_bt.y = bubblebuddy_bt.y = 0;
		plusone_bt.cursor = doubler_bt.cursor = bubblebuddy_bt.cursor = 'pointer';
		plusone_bt.addEventListener('click', function(){
			// CustomEvent trigger event may not be supported in IE9 or below, so using jQuery
			/*
			var plusoneEvent=new Event('PUP_PLUS_ONE');
			document.dispatchEvent(readyEvent);
			*/
			if(plusone_bt.status !== 'blocked') {
				if(vw_messenger.isMessageOpen()){
					vw_messenger.changeMsgContent('plusone', plusone_bt.getStatus(), num_plusone, true);
				}
				else {
					vw_messenger.showVWMessageCont('plusone', plusone_bt.getStatus(), num_plusone);				
				}
			}
		});
		doubler_bt.addEventListener('click', function(ev){
			if(doubler_bt.status !== 'blocked') {
				if(vw_messenger.isMessageOpen()){
					vw_messenger.changeMsgContent('doubler', doubler_bt.getStatus(), num_doubler, true);
				}
				else {
					vw_messenger.showVWMessageCont('doubler', doubler_bt.getStatus(), num_doubler);
				}
			}
		});
		bubblebuddy_bt.addEventListener('click', function(ev){
			if(bubblebuddy_bt.status !== 'blocked') {
				if(vw_messenger.isMessageOpen()){
					vw_messenger.changeMsgContent('bubble', bubblebuddy_bt.getStatus(), num_bubblebuddies, true);
				}
				else {
					vw_messenger.showVWMessageCont('bubble', bubblebuddy_bt.getStatus(), num_bubblebuddies);
				}
			}
		});
		powerupbt_cont.addChild(plusone_bt);
		powerupbt_cont.addChild(doubler_bt);
		powerupbt_cont.addChild(bubblebuddy_bt);
		
		// launch the virtual world
trace('>>> WGBH ***** INITIALIZING VW OBJECT gameID['+gameGUID[gm_type]+']');
		vwConnection =  new PBS.KIDS.KartKingdom.minigame(gameGUID[gm_type], GAMEDIV_ID, pauseEcoGame, unpauseEcoGame, {'enable_notifications':false});
trace('>>> WGBH ***** vwConnection['+vwConnection+']');
		// add listeners
		vwConnection.addEventListener(MINIGAME_READY, vwInitComplete);
		vwConnection.addEventListener(LEVEL_COMPLETE_OPEN, vwEventsHandler);
		vwConnection.addEventListener(LEVEL_COMPLETE_CLOSED, vwEventsHandler);
		vwConnection.addEventListener(LEVEL_RESET, vwEventsHandler);
		vwConnection.addEventListener(RESOURCES_EARNED, vwEventsHandler);
		vwConnection.addEventListener(RESOURCE_REQUEST_COMPLETE, vwEventsHandler);
	}
	
	// used to get the data for the virtual and set the screen accordingly
	function getPlayersData() {
		// clear out numbers
		num_plusone = num_doubler = num_bubblebuddies = 0;
		
		// check if player is logged in
		if(PBS_loggedin) {
trace('>>> WGBH  PLAYER LOGGED IN, CHECK FOR POWER-UPS');
			var vw_plusone = vwConnection.hasPowerUp(PLUSONE_ID),
				vw_doubler = vwConnection.hasPowerUp(DOUBLER_ID),
				vw_buddy = vwConnection.hasPowerUp(BUDDIES_ID);
trace('>>> WGBH - PLAYER DATA PLUSONE['+vw_plusone+'] DOUBLER['+vw_doubler+'] BUDDIES['+vw_buddy+']');
			if(vw_plusone) {num_plusone = vw_plusone;}
			if(vw_doubler) {num_doubler = vw_doubler;}
			if(vw_buddy ) {num_bubblebuddies = vw_buddy;}
			
			// set up power up area
			if(num_plusone > 0) {
				plusone_bt.buildActive();
			}
			else {
				plusone_bt.buildNotActive();
			}
			if(num_doubler > 0) {
				doubler_bt.buildActive();
			}
			else {
				doubler_bt.buildNotActive();
			}
			if(num_bubblebuddies > 0) {
				bubblebuddy_bt.buildActive();		
			}
			else {
				bubblebuddy_bt.buildNotActive();
			}			
		}
		else {
trace('>>> WGBH PLAYER NOT LOGGED IN, CLEAR POWER-UPS');
			plusone_bt.buildNotActive();
			doubler_bt.buildNotActive();
			bubblebuddy_bt.buildNotActive();		
		}		
		display_stage.update();
	}

	// EVENT FUNCTIONS **************************************************
		
	// used to confirm initialization complete (from virtual world)
	function vwInitComplete(ev_log_stat) {
		vwConnection.removeEventListener(MINIGAME_READY, vwInitComplete);
		PBS_loggedin = ev_log_stat.is_logged_in;
		VW_accessed = ev_log_stat.has_played_virtual_world;
trace('>>> WGBH ************* VIRTUAL WORLD HAS BEEN INITIALIZED: logged in['+PBS_loggedin+'] vw accessed['+VW_accessed+']');
		getPlayersData();
	}
	
	// generic handler for the rest of the events
	function vwEventsHandler(ev) {
trace('\n>>> WGBH ************* VIRTUAL WORLD EVENT HANDLER['+ev.type+']');
trace(ev);
trace('\n>>> WGBH **********\n');
		switch(ev.type) {
		case LEVEL_RESET:
			if(end_game) {
				setTimeout(function(){
					getPlayersData();
					$(document).trigger('VW_START_END_GAME');			
				}, 500); //wait 0.5 seconds
			}
			else {
				setTimeout(function(){
					getPlayersData();
					$(document).trigger('VW_START_NEW_DAY');			
				}, 500); //wait 0.5 seconds
			}
			break;
		default:
			// do nothing
			break;
		}
	}
		
	// GAME PUBLIC FUNCTIONS ********************************************
		
	// used to set the display stage for the power up icons
	function setDisplayStage(st, type) {
		gm_type = type;
		display_stage = st;	
		vw_messenger.buildVWMessageDisplay();
		initVirtualWorld();
	}
	
	// used to show the display of the powerup button container
	function showPowerupArea() {
		powerupbt_cont.visible = true;
	}
	
	// used when the status of the player log in has changed
	function playerLoginChange(new_status) {
		PBS_loggedin = new_status;
		if(buildComplete) {
			getPlayersData();
		}
	}
	
	// used when the background area is clicked when message is open
	function msgBackgroundClicked(){
		vw_messenger.backgroundClicked();
	}
	
	// used to hide the display of the powerup button container
	function hidePowerupArea() {
		powerupbt_cont.visible = false;
	}
	
	// returns whether the player can double points for one round
	function isDoublePoints() {
		return doublepts_active;
	}
	
	// used to inactivate buttons during certain times
	function makeButtonsInactive() {
		plusone_bt.showOverlay();
		doubler_bt.showOverlay();
		bubblebuddy_bt.showOverlay();
		display_stage.update();
	}
	
	// used to reset the display and clear power ups used during the round
	function resetPowerUps() {
		plusone_bt.hideOverlay();			
		bubblebuddy_bt.hideOverlay();
		doubler_bt.hideOverlay();
		if(doublepts_active) {
			doublepts_active = false;
			if(num_doubler > 0) {
				doubler_bt.buildActive();
			}
			else {
				doubler_bt.buildNotActive();			
			}
		}
		display_stage.update();
	}
	
	// used to select a certain powerup and notify the virtual world
	function selectPowerUp() {
		switch(powerup_type) {
		case 'plusone':
			vwConnection.usePowerUps({'extra_bubble':1}, activatePowerUp, noActivationPowerUp);
			break;
		case 'doubler':
			vwConnection.usePowerUps({'plum_double':1}, activatePowerUp, noActivationPowerUp);
			break;
		case 'bubble':
			vwConnection.usePowerUps({'bubble_buddy':1}, activatePowerUp, noActivationPowerUp);
			break;				
		}
	}
		
	// used to identify when power ups can't be activated
	function noActivationPowerUp() {
		console.log('>>> WGBH POWER-UP CANNOT BE ACTIVATED: '+powerup_type);
	}
	
	// used to activate a certain powerup
	function activatePowerUp() {
		switch(powerup_type) {
		case 'plusone':
			$(document).trigger('PUP_PLUS_ONE');
			num_plusone = vwConnection.hasPowerUp(PLUSONE_ID);
			if(num_plusone <= 0) {
				plusone_bt.buildNotActive();
				display_stage.update();
			}
			break;
		case 'doubler':
			$(document).trigger('PUP_DOUBLER');
			doublepts_active = true;
			doubler_bt.buildInUse();
			display_stage.update();
			num_doubler = vwConnection.hasPowerUp(DOUBLER_ID);
			break;
		case 'bubble':
			$(document).trigger('PUP_ADD_BUBBLE');
			num_bubblebuddies = vwConnection.hasPowerUp(BUDDIES_ID);
			if(num_bubblebuddies <= 0) {
				bubblebuddy_bt.buildNotActive();
				display_stage.update();
			}
			break;				
		}
	}		
	
	// called when player achieves the green light bonus
	function greenLightBonusAchieved() {
trace('>>> WGBH green light bonus trigger['+resourceGUID[gm_type]['greenlites']+']');
		vwConnection.event(resourceGUID[gm_type]['greenlites']);
	}
	
	// called when player achieves the amount of days without species lost
	function noSpeciesLostBonusAchieved() {
trace('>>> WGBH no species lost bonus trigger['+resourceGUID[gm_type]['noloss']+']');
		vwConnection.event(resourceGUID[gm_type]['noloss']);
	}
	
	// called when player beats their previous high score
	function newHighScoreBonusAchieved() {
trace('>>> WGBH highscore bonus trigger['+resourceGUID[gm_type]['highscore']+']');
		vwConnection.event(resourceGUID[gm_type]['highscore']);
	}
	
	// used when all of the bubble buddies have been used
	function noMoreBubbleBuddies() {
		bubblebuddy_bt.buildNotActive();
		display_stage.update();
	}
	
	// used to set virtual world for new day
	function readyForNewDay() {
		setTimeout(function(){
			end_game = false;
			vwConnection.levelComplete();	
		}, 500); //wait 0.5 seconds
	}
	
	// used to display any virtual world messages prior to ending game
	function readyEndOfGame() {
		setTimeout(function(){
			end_game = true;
			vwConnection.levelComplete();	
		}, 500); //wait 0.5 seconds
	}
	
	// used to set virtual world for restarting the game
	function restartGame() {
		resetPowerUps();
		// check bubble buddy
		if((bubblebuddy_bt.status === 'inactive') && (num_bubblebuddies > 0)) {
			bubblebuddy_bt.buildActive();
		}
		showPowerupArea();
	}
	
	// used to update the vw content based on log in change
	function loginStatusChange(stlogin) {
		PBS_loggedin = stlogin;
		getPlayersData();
	}
	
	// used for printing comments
	function trace(msg) {
		if(show_comments) {
			console.log(msg);
		}	
	}

	// VW PUBLIC FUNCTIONS **********************************************
			
	// used to pause the game from virtual world
	function pauseEcoGame() {
		console.log('>>> WGBH --------- GAME HAS BEEN PAUSED');	
	}
	
	// used to unpause the game from virtual world
	function unpauseEcoGame() {
		console.log('>>> WGBH +++++++++ GAME HAS BEEN UNPAUSED');	
	}
	
	return {
		setDisplayStage:setDisplayStage,
		showPowerupArea:showPowerupArea,
		playerLoginChange:playerLoginChange,
		msgBackgroundClicked:msgBackgroundClicked,
		hidePowerupArea:hidePowerupArea,
		isDoublePoints:isDoublePoints,
		makeButtonsInactive:makeButtonsInactive,
		resetPowerUps:resetPowerUps,
		greenLightBonusAchieved:greenLightBonusAchieved,
		noSpeciesLostBonusAchieved:noSpeciesLostBonusAchieved,
		newHighScoreBonusAchieved:newHighScoreBonusAchieved,
		noMoreBubbleBuddies:noMoreBubbleBuddies,
		readyForNewDay:readyForNewDay,
		readyEndOfGame:readyEndOfGame,
		restartGame:restartGame,
		loginStatusChange:loginStatusChange,
		vwInitComplete:vwInitComplete,
		pauseEcoGame:pauseEcoGame,
		unpauseEcoGame:unpauseEcoGame,
		noActivationPowerUp:noActivationPowerUp,
		activatePowerUp:activatePowerUp
	};

})(jQuery);
