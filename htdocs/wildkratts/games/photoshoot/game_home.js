/*
** Home
*/

var ps_home_is_visible;

var ps_home_btn   = {};

var ps_home       = {};
var ps_home_x_btn = {};
var ps_home_y_btn = {};


function psHomeIsActive( cx, cy )
{
	if( ps_home_is_visible == 0 )
	{
		if( ps_game_state == PS_GAME_STATE_PLAY )
		{
			if( cx >= ps_home_btn.l && cx < ps_home_btn.r &&
				cy >= ps_home_btn.t && cy < ps_home_btn.b )
			{
				return 1;
			}		
		}
	}
	else
	{
		if( cx >= ps_home_x_btn.l && cx < ps_home_x_btn.r &&
			cy >= ps_home_x_btn.t && cy < ps_home_x_btn.b )
		{
			return 1;
		}			
		if( cx >= ps_home_y_btn.l && cx < ps_home_y_btn.r &&
			cy >= ps_home_y_btn.t && cy < ps_home_y_btn.b )
		{
			return 2;
		}					
	}
	return 0;
}
	
function psHomeIsPressed( action, cx, cy )
{
	var active = psHomeIsActive( cx, cy );
	
	if( ps_home_is_visible == 0 )
	{
		if( active == 1 )
		{
			ps_home_btn.action = action;
			audioManager.playSound( "fx_beep" );
		}		
	}
	else
	{
		if( active == 1 )
		{
			ps_home_x_btn.action = action;
			audioManager.playSound( "fx_beep" );
		}			
		if( active == 2 )
		{
			ps_home_y_btn.action = action;
			audioManager.playSound( "fx_beep" );
		}					
	}
	
	if( action == 0 )
	{
		ps_home_btn.action   = 0;
		ps_home_y_btn.action = 0;
		ps_home_x_btn.action = 0;
		
		return active;
	}
	
	return 0;
}

function psHomeShow()
{
	ps_home_is_visible = 1;
}

function psHomeHide()
{
	ps_home_is_visible = 0;
}
	
function psHomeRender()
{
    displayContext.drawImage( ps_img_home_button[ps_home_btn.action], ps_home_btn.l, ps_home_btn.t, ps_home_btn.w, ps_home_btn.h );    
    
    if( ps_home_is_visible )
    {
	    displayContext.drawImage( ps_img_home, ps_home.l, ps_home.t, ps_home.w, ps_home.h );    	
	    displayContext.drawImage( ps_img_home_x[ps_home_x_btn.action], ps_home_x_btn.l, ps_home_x_btn.t, ps_home_x_btn.w, ps_home_x_btn.h );
	    displayContext.drawImage( ps_img_home_y[ps_home_y_btn.action], ps_home_y_btn.l, ps_home_y_btn.t, ps_home_y_btn.w, ps_home_y_btn.h );	    
	}
}

function psHomeAdjust()
{
	psShootAdjustObject( ps_home_btn );
	psShootAdjustObject( ps_home );
	psShootAdjustObject( ps_home_x_btn );
	psShootAdjustObject( ps_home_y_btn );
}

function psHomeStart()
{
	ps_home_btn.x     = 435;
	ps_home_btn.y     = 280;
	ps_home_btn.img   = ps_img_home_button[0];
	
	ps_home.x         = 0;
	ps_home.y         = 0;
	ps_home.img       = ps_img_home;
	
	ps_home_x_btn.x   = 156;
	ps_home_x_btn.y   = 55;
	ps_home_x_btn.img = ps_img_home_x[0];
	
	ps_home_y_btn.x   = -156;
	ps_home_y_btn.y   = 55;
	ps_home_y_btn.img = ps_img_home_y[0];	
	
	psHomeAdjust();
	
	ps_home_x_btn.action = 0;	
	ps_home_y_btn.action = 0;	
	ps_home_btn.action   = 0;	
		
	ps_home_is_visible = 0;
}


