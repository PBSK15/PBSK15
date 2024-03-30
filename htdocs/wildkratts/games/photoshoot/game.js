/*
** Game
** Main game processing file.
** Included in all versions of the app.
*/

/*
** Game states
*/
const PS_GAME_STATE_NONE        = 0;
const PS_GAME_STATE_PLAY        = 1;
const PS_GAME_STATE_HELP        = 2;
const PS_GAME_STATE_HOME        = 3;
const PS_GAME_STATE_END         = 4;
const PS_GAME_STATE_INFO        = 5;

var ps_game_state = PS_GAME_STATE_NONE;

var ps_game_x;
var ps_game_y;
var ps_game_w;
var ps_game_h;
	/*
	** Dimensions of the game play area.
	*/

var ps_game_bg_x  = 0;		
var ps_game_bg_w;
var ps_game_bg_h;
	/*
	** The current scroll position, and the width of the scroll region.
	** The scroll region width is the width of the background layer image.
	*/

var ps_game_targets;
var ps_game_layers;
var ps_game_names;
var ps_game_duration;
	/*
	** These variables point to the active game variables.
	** They correspond to the arrays set up inside the individual habitat files,
	** and are assigned when a habitat is chosen before the game starts.
	**
	** Therefore:
	**
	** ps_game_targets = ps_<habitat>_targets;
	** ps_game_layers  = ps_<habitat>_layers;
	** ps_game_names   = ps_<habitat>_names;
	*/
	
var ps_game_zone;
	/*
	** Current active habitat.
	** Will be assigned one of the habitat constants, once one is chosen.
	*/

var ps_game_time_limit;
var ps_game_timer = 0;
	/*
	** Game timing.
	** The game time limit is the total time the game is played where the player
	** is allowed to take pictures. The game timer is the current elapsed time.
	** Both variables are measured in milliseconds.
	*/
	
var ps_game_kratt_time;

const PS_GAME_NATIVE_MIN = 2;
const PS_GAME_NATIVE_MAX = 4;

var ps_game_native_count;
var ps_game_native_chosen;
	
var ps_game_cursor_x;
var ps_game_cursor_y;
	/*
	** Current cursor position.
	** Used to display the camera cursor icon while the game is playing.
	*/	
		
var ps_game_camera_flash;
var ps_game_camera_x;
var ps_game_camera_y;
var ps_game_camera_first_time = 1;

var ps_game_instructions_delay;


/*
** Spawn a new target.
** This function is called from the psTargetProcess function.
*/
function psGameSpawn( )
{
	var chosen;
	
	if( ps_game_timer >= ps_game_kratt_time && ps_game_kratt_time > 0 )
	{
		/*
		** If game timer is past the kratt time, force the game to spawn the
		** kratt until one appears.
		*/		
		psTargetSpawnKratt();
		chosen = psTargetSelectAny();
		
		if( chosen != -1 )
			ps_game_kratt_time = 0;
		return;
	}
	
	if( ps_game_native_count > 0 )
	{
		/*
		** Spawn native targets.
		** Add a check to ensure the same target is not spawned twice or 
		** more in a row.
		*/
		psTargetSpawnNative();
		chosen = psTargetSelectExclusive( ps_game_native_chosen );
				
		if( chosen != -1 )
		{
			ps_game_native_chosen = chosen;
			ps_game_native_count--;
		}			
		return;
	}
		
	/*
	** If we reach this point, spawn an intruder.
	** After the intruder, spawn a matching target.
	*/
	psTargetSpawnIntruder();			
	chosen = psTargetSelectAny();
	
	if( chosen != -1 )
	{
		ps_game_native_count = psShootRandomInt( PS_GAME_NATIVE_MIN, PS_GAME_NATIVE_MAX );	
		ps_game_native_chosen = -1;	
	}
}


function psGameCameraRender()
{
	if( ps_game_camera_flash < 0 )
		return;
		
	var w = ps_img_camera_flash[0].width;
	var h = ps_img_camera_flash[0].height;		
	var img;
		
	if( ps_game_camera_flash == 0 )
	{
		img = 0;
	}
	if( ps_game_camera_flash == 1 )
	{
		img = 0;	
		w = w * 3;
		h = h * 3;
	}
	if( ps_game_camera_flash == 2 )
	{
		img = 1;
	}
	if( ps_game_camera_flash == 3 )
	{
		img = 2;
	}	
	displayContext.drawImage( ps_img_camera_flash[img], 
							  ps_game_camera_x - (w / 2), 
							  ps_game_camera_y - (h / 2),
							  w, h
							  );	
	ps_game_camera_flash++;
	
	if( ps_game_camera_flash > 3 )
		ps_game_camera_flash = -1;
}


function psGameAdjust()
{
	ps_game_w = displayW;
	ps_game_h = displayH;	
	ps_game_x = 0;
	ps_game_y = 0;
	
	psHomeAdjust();
	psHelpAdjust();
	psIconAdjust();
	psTalkAdjust();
	
	if( ps_game_state == PS_GAME_STATE_END || ps_game_state == PS_GAME_STATE_INFO )	
	{
		psEndAdjust();	
		psInfoAdjust();		
	}
	
	psGameRender();
}


/*
** Info
*/
var ps_info_x;
var ps_info_y;
var ps_info_w;
var ps_info_h;

var ps_info_img;

function psInfoRender()
{
	if( ps_game_state == PS_GAME_STATE_INFO )
	{
	    displayContext.drawImage( ps_info_img, ps_info_x, ps_info_y, ps_info_w, ps_info_h );    			
	}
}

function psInfoAdjust()
{
	if( ps_game_state == PS_GAME_STATE_INFO )
	{
		ps_info_w = ps_info_img.width  * displayScale;
		ps_info_h = ps_info_img.height * displayScale;		
		ps_info_x = displayX + ((displayW - ps_info_w) / 2);
		ps_info_y = displayY + ((displayH - ps_info_h) / 2);	
	}
}

function psInfoShow( type )
{
	ps_info_img   = ps_img_info[type];
	ps_game_state = PS_GAME_STATE_INFO;	
	psInfoAdjust();	
}

function psInfoHide( )
{
	ps_game_state = PS_GAME_STATE_END;	
}


function psGameRender() 
{	 		
	if( ps_game_bg_x > ps_game_bg_w - 960 )
	{
		var ws1 = ps_game_bg_w - ps_game_bg_x;
		var ws2 = 960 - ws1;
		var wd1 = ws1 * displayScale;
		var wd2 = ws2 * displayScale;
		
		displayContext.drawImage( ps_img_layers[0], ps_game_bg_x, 0, ws1, ps_game_bg_h, displayX,     displayY, wd1, ps_game_h );		
		displayContext.drawImage( ps_img_layers[0],            0, 0, ws2, ps_game_bg_h, displayX+wd1, displayY, wd2, ps_game_h );				                        
		 
		for( layer=0; layer<ps_game_layers.length; layer++ )
		{
			psTargetRender( layer );
			displayContext.drawImage( ps_img_layers[1+layer], ps_game_bg_x, 0, ws1, ps_game_bg_h, displayX,     displayY, wd1, ps_game_h );
			displayContext.drawImage( ps_img_layers[1+layer],            0, 0, ws2, ps_game_bg_h, displayX+wd1, displayY, wd2, ps_game_h );				                         		
		}		                        
	}
	else
	{
		displayContext.drawImage( ps_img_layers[0], ps_game_bg_x, 0, 960, 640, displayX, displayY, ps_game_w, ps_game_h );
						  
		for( layer=0; layer<ps_game_layers.length; layer++ )
		{
			psTargetRender( layer );
			displayContext.drawImage( ps_img_layers[1+layer], ps_game_bg_x, 0, 960, 640, displayX, displayY, ps_game_w, ps_game_h );		
		}
	}
	
	psIconRender();
	
	if( ps_game_state == PS_GAME_STATE_PLAY || ps_game_state == PS_GAME_STATE_HELP || ps_game_state == PS_GAME_STATE_HOME )
	{
		psHomeRender();	
		psHelpRender();
	}
	
	psTalkRender();
	psGameCameraRender();
	
	if( ps_game_state == PS_GAME_STATE_PLAY )
	{
		psGameCursorRender();
	}
	if( ps_game_state == PS_GAME_STATE_END || ps_game_state == PS_GAME_STATE_INFO )
	{
		psEndRender();
		psInfoRender();		
	}
}


function psGameProcess()
{	
	if( ps_game_state == PS_GAME_STATE_PLAY )
	{
		ps_game_timer = ps_game_timer + PS_DISPLAY_REFRESH_RATE;	
		
		if( ps_game_instructions_delay > 0 )
		{
			if( --ps_game_instructions_delay == 0 )
			{
				psTalk( "c_instructions", 1 );
			}
		}
		
		if( ps_game_timer >= ps_game_time_limit && psTargetIsIdle() )
		{
			psIconGameEnd();
			psEndStart();
			ps_game_state = PS_GAME_STATE_END;
		}	
		else
		{
			psTargetProcess();	
			ps_game_bg_x = ps_game_bg_x + PS_DISPLAY_SCROLL_SPEED;	
			
			if( ps_game_bg_x > ps_game_bg_w )
				ps_game_bg_x = 0;
		}
	}
	psGameRender();	
}

function psGameAction( action, cx, cy )
{
	var ps;
	
	if( ps_game_state == PS_GAME_STATE_INFO )
	{
		/*
		** If animal info page is being displayed, any click on screen
		** should dismiss it.
		*/
		if( action == 0 )
		{
			psInfoHide();
			return;
		}	
	}
	
	if( ps_game_state == PS_GAME_STATE_END )
	{
		/*
		** Check to see if we have clicked on any of the animal photos.
		** If we click one we have collected, the animal display window should appear.
		*/
		ps = psIconIsPressed(cx, cy);
		
		if( ps == -2 && action == 0 )
		{
			psTalkStop();
			audioManager.playSound( "c_playagain" );
			return;
		}
		if( ps >= 0 && action == 0 )
		{
			audioManager.playSound( ps_game_targets[ps].sound );							
			psTalkStop();
			psInfoShow( ps );
			return;
		}	
		/*
		** Check to see if any of the play again or restart buttons were pressed.
		*/
		ps = psEndIsPressed(action, cx, cy);
		
		if( ps == 1 )
		{
			psTalkStop();
			psShootStateTransition( psGameEnd );
			return;		
		}
		if( ps == 2 )
		{
			psTalkStop();		
			psShootStateTransition( psGameStart );
			return;
		}
		return;
	}
	
	if( ps_game_state == PS_GAME_STATE_HELP )
	{
		if( psHelpIsPressed(action, cx, cy) )
		{
			psHelpHide();
			ps_game_state = PS_GAME_STATE_PLAY;		
		}
		return;
	}	
	
	if( ps_game_state == PS_GAME_STATE_HOME )
	{
		var t = psHomeIsPressed( action, cx, cy );
		if( t == 1 )
		{
			psHomeHide();
			ps_game_state = PS_GAME_STATE_PLAY;
		}
		if( t == 2 )
		{
			psShootStateTransition( psGameEnd );
		}
		return;				
	}
	
	/*
	** Check to see if the help button is pressed.
	*/
	if( psHelpIsPressed(action, cx, cy) )
	{
		ps_game_state = PS_GAME_STATE_HELP;
		psGameRender();			
		psHelpShow();	
		psTalkStop();
		psHelpRender();
		return;
	}
	/*
	** Check to see if the home button is pressed 
	*/
	if( psHomeIsPressed(action, cx, cy) )
	{
		ps_game_state = PS_GAME_STATE_HOME;
		psTalkStop();		
		psHomeShow();
		return;
	}
		
	/*
	** Check to see if the target was touched.
	*/
	var touched = psTargetIsTouched(cx, cy);
	
	if( touched >= 0 && action == 1 )
	{
		if( ps_game_targets[touched].zone == ps_game_zone )	
		{
			psIconCollect( ps_game_targets[touched].type );	
		
			ps_game_camera_flash = 0;
			ps_game_camera_x = cx;
			ps_game_camera_y = cy;
			
			audioManager.playSound( 'fx_camera' );								
		}
		else
		{
			psGameCursorShake();
			psTalk( ps_game_targets[touched].sound, ps_game_targets[touched].bro );			
		}
	}
}


function psGameStart(  )
{	
	ps_game_bg_x = 0;
	ps_game_bg_w = ps_img_layers[0].width;
	ps_game_bg_h = ps_img_layers[0].height;
							
	ps_game_cursor_x = 0;
	ps_game_cursor_y = 0;
	
	ps_game_state = PS_GAME_STATE_PLAY;	
	
	ps_game_time_limit = ps_game_duration * 1000;
	ps_game_timer = 0;

	ps_game_camera_flash = -1;
		
	psGameListenerAdd();
	
	psTargetStart();
	psIconGameStart();
	psHelpStart();
	psHomeStart();
	
	ps_game_native_count  = psShootRandomInt( PS_GAME_NATIVE_MIN, PS_GAME_NATIVE_MAX );
	ps_game_native_chosen = -1;
	
	ps_game_kratt_time = ps_game_time_limit / 2;
	
	psGameAdjust();
	
	psShootStateTransition( psGameProcess );
	psShootAdjustFunction ( psGameAdjust  );
	
	ps_game_instructions_delay = 60;
}


function psGameEnd()
{
	psGameListenerRemove();
	psShootStateTransition( psMapStart );
}


function psGameLoad( )
{
	switch( ps_game_zone )
	{
		case PS_AUSTRALIA:
			ps_game_targets  = ps_australia_targets;
			ps_game_layers   = ps_australia_layers;
			ps_game_names    = ps_australia_names;
			ps_game_duration = ps_australia_game_time;
			break;
			
		case PS_AFRICA:	
			ps_game_targets  = ps_africa_targets;
			ps_game_layers   = ps_africa_layers;
			ps_game_names    = ps_africa_names;
			ps_game_duration = ps_africa_game_time;			
			break;		
			
		case PS_INDONESIA:	
			ps_game_targets  = ps_indonesia_targets;
			ps_game_layers   = ps_indonesia_layers;
			ps_game_names    = ps_indonesia_names;
			ps_game_duration = ps_indonesia_game_time;			
			break;			
			
		case PS_NORTH_AMERICA:	
			ps_game_targets  = ps_northamerica_targets;
			ps_game_layers   = ps_northamerica_layers;
			ps_game_names    = ps_northamerica_names;
			ps_game_duration = ps_northamerica_game_time;			
			break;				
			
		case PS_SONORAN_DESERT:	
			ps_game_targets  = ps_sonoran_targets;
			ps_game_layers   = ps_sonoran_layers;
			ps_game_names    = ps_sonoran_names;
			ps_game_duration = ps_sonoran_game_time;			
			break;											
			
		case PS_SOUTH_AMERICA:	
			ps_game_targets  = ps_southamerica_targets;
			ps_game_layers   = ps_southamerica_layers;
			ps_game_names    = ps_southamerica_names;
			ps_game_duration = ps_southamerica_game_time;			
			break;														
	}
	psAssetGameLoad( );
}