/*
** Loading screen
*/

const PS_LOAD_X = 0 
const PS_LOAD_Y = 264;

var ps_load    = {};
var ps_load_bg = {};
var ps_load_fg = {};
var ps_load_tx = {};

var ps_load_w;
var ps_load_sc;


function psLoadAdjust()
{
	psShootAdjustObject( ps_load );
	psShootAdjustObject( ps_load_bg );
	psShootAdjustObject( ps_load_fg );	
	psShootAdjustObject( ps_load_tx );
	
	psLoadRender();
}

function psLoadRender()
{
	displayContext.fillStyle = "#FFFFFF";
	displayContext.fillRect( displayX, displayY, displayW, displayH );
	
	displayContext.drawImage( ps_img_splash, ps_load.l, ps_load.t, ps_load.w, ps_load.h );	
		
	displayContext.drawImage( ps_img_splash_loading_bg, 
							  ps_load_bg.l, 
							  ps_load_bg.t,
							  ps_load_bg.w,
							  ps_load_bg.h
							  );	
	displayContext.drawImage( ps_img_splash_loading_fg, 
							  ps_load_fg.l, 
							  ps_load_fg.t, 
							  ps_load_w, 
							  ps_load_fg.h
							  ); 	
	displayContext.drawImage( ps_img_splash_loading_tx, 
							  ps_load_tx.l, 
							  ps_load_tx.t,
							  ps_load_tx.w,
							  ps_load_tx.h 
							  );						
}

function psLoadProgress( count, total )
{
	ps_load_w = (count / total) * ps_img_splash_loading_fg.width * displayScale;
	psLoadRender();		
}

function psLoadStart()
{
	ps_load_w = 1;	
	
	ps_load.x = 0;
	ps_load.y = 0;
	ps_load.img = ps_img_splash;
	
	ps_load_bg.x = PS_LOAD_X;
	ps_load_bg.y = PS_LOAD_Y;
	ps_load_bg.img = ps_img_splash_loading_bg;
	
	ps_load_fg.x = PS_LOAD_X;
	ps_load_fg.y = PS_LOAD_Y;
	ps_load_fg.img = ps_img_splash_loading_fg;	
	
	ps_load_tx.x = PS_LOAD_X;
	ps_load_tx.y = PS_LOAD_Y;
	ps_load_tx.img = ps_img_splash_loading_tx;	
	
	psLoadAdjust();
		
	psShootAdjustFunction ( psLoadAdjust );
	psShootStateTransition( psGameLoad );
}



