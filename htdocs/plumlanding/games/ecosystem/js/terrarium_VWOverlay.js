// VIRTUAL WORLD OVERLAY ------------------------------------------------	
// used to block interactivity when vw message is onscreen
function VWOverlay(pst, gmwid, gmhgt, lwrbnds, cs) {

	// static
	var LOWER_BOUNDS = lwrbnds;
	// objects
	var c = cs,
		vw_msg_overlay = new c.Container(),	// overlay screen
		gm_width = gmwid,
		gm_height = gmhgt;
		
	this.vw_open_msg = false;				// virtual world message screen open
	this.par_stage = pst;					// stage for overlay
		
	// used to build the overlay screen
	this.buildVWOverlayScreen = function () {
		var overlay_sh = new c.Shape();		// shape for the overlay screen		
		vw_msg_overlay.addChild(overlay_sh);
		vw_msg_overlay.visible = false;
		this.par_stage.addChild(vw_msg_overlay);
		
		// draw screen
		overlay_sh.graphics.beginFill(WHT_COLOR).drawRect(0, 0, gm_width, (gm_height - LOWER_BOUNDS)).endFill();			
		overlay_sh.alpha = 0.01;
//		overlay_sh.graphics.beginFill(PUR_COLOR).drawRect(0, 0, gm_width, (gm_height - LOWER_BOUNDS)).endFill();			
//		overlay_sh.alpha = 0.5;
		overlay_sh.addEventListener('click', this.overlayClicked.bind(this), false);
	};
	
	// used to react to overlay being selected
	this.overlayClicked = function() {
		$(document).trigger('VW_MESSAGE_CLICKED');
		vw_msg_overlay.visible = false;		
		this.par_stage.update();	
	}
	
	// used to show the overlay screen
	this.showVWOverlay = function () {
		this.vw_open_msg = true;
		vw_msg_overlay.visible = true;		
		this.par_stage.update();
	};	
	
	// used to hide the overlay screen
	this.hideVWOverlay = function () {
		this.vw_open_msg = false;
		vw_msg_overlay.visible = false;		
		this.par_stage.update();
	};		

	this.buildVWOverlayScreen();
}