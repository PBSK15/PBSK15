/*
** Map screen
** Main processing functions.
** Included in all versions of game.
*/

const PS_MAP_ICON_PLAY_BTN_X = 134;
const PS_MAP_ICON_PLAY_BTN_Y = 15;
const PS_MAP_ICON_PLAY_BTN_W = 240;
const PS_MAP_ICON_PLAY_BTN_H = 114;

const PS_MAP_ICON_CLOSE_BTN_X = 285;
const PS_MAP_ICON_CLOSE_BTN_Y = -145;
const PS_MAP_ICON_CLOSE_BTN_W = 90;
const PS_MAP_ICON_CLOSE_BTN_H = 90;

const PS_MAP_CLOSE_BTN_X = 450;
const PS_MAP_CLOSE_BTN_Y = -290;
const PS_MAP_CLOSE_BTN_W = 60;
const PS_MAP_CLOSE_BTN_H = 60;

var ps_map_bg          			 = {};
var ps_map_btn_close   		 	 = {};
var ps_map_icon_active 			 = {};
var ps_map_icon_active_btn_play  = {};
var ps_map_icon_active_btn_close = {};

var ps_map_icon = -1;


function psMapAdjust()
{
	psShootAdjustObject( ps_map_bg );
	psShootAdjustObject( ps_map_btn_close );
	
	for( var icon=0; icon<ps_map_icons.length; icon++ )
	{
		psShootAdjustObject( ps_map_icons[icon] );
	}	
		
	if( ps_map_icon != -1 )
	{
		psShootAdjustObject( ps_map_icon_active );
		psShootAdjustObject( ps_map_icon_active_btn_play );
		psShootAdjustObject( ps_map_icon_active_btn_close );
	}
	
	psMapRender();	
}

function psMapRender()
{
	displayContext.fillStyle = "#FFFFFF";
	displayContext.fillRect( displayX, displayY, displayW, displayH );
	
	displayContext.drawImage( ps_map_bg.img, 
							  ps_map_bg.l, ps_map_bg.t, 
							  ps_map_bg.w, ps_map_bg.h );		
	
	if( ps_map_icon >= 0 )
	{
		displayContext.drawImage( ps_map_icon_active.img, 
								  ps_map_icon_active.l, ps_map_icon_active.t,
								  ps_map_icon_active.w, ps_map_icon_active.h 
								  );
	}
}

function psMapStart()
{
	ps_map_icon = -1;	
	
	ps_map_bg.img = ps_img_map_bg;
	ps_map_bg.x   = 0;
	ps_map_bg.y   = 0;
	
	ps_map_btn_close.x  = PS_MAP_CLOSE_BTN_X;
	ps_map_btn_close.y  = PS_MAP_CLOSE_BTN_Y;
	ps_map_btn_close.sw = PS_MAP_CLOSE_BTN_W;
	ps_map_btn_close.sh = PS_MAP_CLOSE_BTN_H;
	ps_map_btn_close.img= null;
	
	ps_map_icon_active_btn_play.x  = PS_MAP_ICON_PLAY_BTN_X;
	ps_map_icon_active_btn_play.y  = PS_MAP_ICON_PLAY_BTN_Y;
	ps_map_icon_active_btn_play.sw = PS_MAP_ICON_PLAY_BTN_W;
	ps_map_icon_active_btn_play.sh = PS_MAP_ICON_PLAY_BTN_H;
	
	ps_map_icon_active_btn_close.x  = PS_MAP_ICON_CLOSE_BTN_X;
	ps_map_icon_active_btn_close.y  = PS_MAP_ICON_CLOSE_BTN_Y;
	ps_map_icon_active_btn_close.sw = PS_MAP_ICON_CLOSE_BTN_W;
	ps_map_icon_active_btn_close.sh = PS_MAP_ICON_CLOSE_BTN_H;
	
	psMapAdjust();		
	psMapListenerAdd();
		
	psShootAdjustFunction ( psMapAdjust  );
	psShootStateTransition( psMapProcess );	
}

function psMapProcess()
{
}

function psMapExit()
{
	psShootAdjustFunction( null );
	psMapListenerRemove();
	
	psShootStateTransition( psSplashStart );
}

function psMapEnd()
{
	console.log( "Map end" );
	
	psShootAdjustFunction( null );
	psMapListenerRemove();
	
	psShootStateTransition( psLoadStart );
}
