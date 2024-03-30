/*
** Help
*/

var ps_help_is_visible;
var ps_help_action;

var ps_help_btn = {};
var ps_help_bg  = {};
	
	
function psHelpIsActive( cx, cy )
{
	if( ps_help_is_visible == 0 && ps_game_state == PS_GAME_STATE_PLAY )
	{
		if( cx >= ps_help_btn.l && cx < ps_help_btn.r &&
			cy >= ps_help_btn.t && cy < ps_help_btn.b )
		{
			return 1;
		}		
	}
	return 0;
}
	
function psHelpIsPressed( action, cx, cy )
{
	var active = psHelpIsActive( cx, cy );
	
	if( ps_help_is_visible == 0 )
	{
		if( active == 1 )
		{
			ps_help_action = action;
			audioManager.playSound( "fx_beep" );
		}		
	}
	else
	{
		active = 1;
	}
	if( action == 0 )
	{
		ps_help_action = 0;
		return active;
	}
	return 0;
}

function psHelpShow()
{
	ps_help_is_visible = 1;
}

function psHelpHide()
{
	ps_help_is_visible = 0;
}
	
function psHelpRender()
{
    displayContext.drawImage( ps_img_help_button[ps_help_action], 
    						  ps_help_btn.l, ps_help_btn.t, 
    						  ps_help_btn.w, ps_help_btn.h );    
    
    if( ps_help_is_visible )
    {
	    displayContext.drawImage( ps_help_bg.img, 
	    						  ps_help_bg.l, ps_help_bg.t, 
	    						  ps_help_bg.w, ps_help_bg.h );    	
	}
}

function psHelpAdjust()
{
	psShootAdjustObject( ps_help_bg  );
	psShootAdjustObject( ps_help_btn );
}

function psHelpStart()
{
	ps_help_bg.x    = 0;
	ps_help_bg.y    = 0;
	ps_help_bg.img  = ps_img_help;	
	
	ps_help_btn.x   = 435;
	ps_help_btn.y   = -280;
	ps_help_btn.img = ps_img_help_button[0];
	
	psHelpAdjust();
			
	ps_help_is_visible = 0;
	ps_help_action = 0;	
}


