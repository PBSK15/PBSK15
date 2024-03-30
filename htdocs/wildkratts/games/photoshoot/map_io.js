
/*
** Event handler when the mouse moves.
** We detect mouse rollover on any of the icon hot areas, and if entered,
** display a large version of the habitat icon.
*/
function psMapOnMove( event )
{
	var x = event.pageX;
	var y = event.pageY;
		
	if( ps_map_icon < 0 )
	{
		for( var icon=0; icon<ps_map_icons.length; icon++ )
		{
			if( ps_map_icons[icon].l <= x && ps_map_icons[icon].r > x &&
				ps_map_icons[icon].t <= y && ps_map_icons[icon].b > y )
			{
				ps_map_icon = icon;
				ps_map_icon_active.x   = ps_map_icons[icon].x;
				ps_map_icon_active.y   = ps_map_icons[icon].y;
				ps_map_icon_active.img = ps_img_map_ro[icon];				

				psMapAdjust();
				
				audioManager.playSound( ps_map_icons[icon].sound );
			
				displayCanvas.style.cursor = "pointer";
				return;				
			}	
		}
		
		if( x >= ps_map_btn_close.l && y >= ps_map_btn_close.t &&
		    x <  ps_map_btn_close.r && y <  ps_map_btn_close.b )
		{
			displayCanvas.style.cursor = "pointer";
			
			return;
		}		
		
		displayCanvas.style.cursor = "auto";		
	}
	else
	{
		if( ps_map_icons[ps_map_icon].l > x || ps_map_icons[ps_map_icon].r <= x ||
			ps_map_icons[ps_map_icon].t > y || ps_map_icons[ps_map_icon].b <= y )
		{
			ps_map_icon = -1;		
			psMapRender();
			
			displayCanvas.style.cursor = "auto";
			
			return;				
		}		
	}
}


/*
** Event handler for mouse clicks.
*/
function psMapOnClick( event )
{
	var x = event.pageX;
	var y = event.pageY;
		
	if( ps_map_icon >= 0 )
	{
		/*
		** When an icon is displayed, any click selects that habitat
		** and starts the game.
		*/
		audioManager.playSound( "fx_beep" );
		ps_game_zone = ps_map_icons[ps_map_icon].zone; 
		psShootStateTransition( psMapEnd );
		displayCanvas.style.cursor = "auto";		
	}
	else
	{	
		/*
		** If the close button is pressed, return to the
		** splash screen.
		*/
		if( x >= ps_map_btn_close.l && y >= ps_map_btn_close.t &&
		    x <  ps_map_btn_close.r && y <  ps_map_btn_close.b )
		{
			audioManager.playSound( "fx_beep" );
			psShootStateTransition( psMapExit );
			displayCanvas.style.cursor = "auto";					
		}
	}	
}


/*
** Event handler when touch is started
*/
function psMapOnTouch( event )
{
	var x = event.touches[0].pageX;
	var y = event.touches[0].pageY;
	
	if( ps_map_icon < 0 )
	{
		/*
		** No icon is being displayed now.
		** Go through the list of icons and check to see if any were touched.
		*/
		for( icon=0; icon<ps_map_icons.length; icon++ )
		{
			if( ps_map_icons[icon].l <= x && ps_map_icons[icon].r > x && 
			    ps_map_icons[icon].t <= y && ps_map_icons[icon].b > y )
			{
				ps_map_icon = icon;			
				
				ps_map_icon_active.x   = 0;
				ps_map_icon_active.y   = 0;
				ps_map_icon_active.img = ps_img_map_icons[icon];		
																													
				psMapAdjust();
				audioManager.playSound( "fx_beep" );				
				audioManager.playSound( ps_map_icons[icon].sound );
				return;
			}	
		}
		/*
		** If none of the icons were touched, check to see if the map
		** close button was touched.
		*/
		if( ps_map_icon < 0 )
		{
			if( ps_map_btn_close.l <= x && ps_map_btn_close.r > x && 
			    ps_map_btn_close.t <= y && ps_map_btn_close.b > y )	
			{
				psShootStateTransition( psMapExit );
				audioManager.playSound( "fx_beep" );
				return;
			}
		}
	}
	else
	{
		/*
		** The map icon is being displayed.
		** There are two possible touch points, the play button or the exit button.
		*/				
		if( x >= ps_map_icon_active_btn_play.l && x < ps_map_icon_active_btn_play.r &&
		    y >= ps_map_icon_active_btn_play.t && y < ps_map_icon_active_btn_play.b )
		{
			/*
			** Touched the play button.
			** Trigger the start of the selected game.
			*/
			ps_game_zone = ps_map_icons[ps_map_icon].zone; 
			psShootStateTransition( psMapEnd );	
			audioManager.playSound( "fx_beep" );
			return;		
		}		
				
		if( x >= ps_map_icon_active_btn_close.l && x < ps_map_icon_active_btn_close.r &&
		    y >= ps_map_icon_active_btn_close.t && y < ps_map_icon_active_btn_close.b )
		{
			/*
			** Touched the close button
			** Close the selected icon display
			*/
			ps_map_icon = -1;
			audioManager.playSound( "fx_beep" );
			psMapRender();
			return;
		}				
	}
}


function psMapListenerAdd()
{
	if( browserInfo.touch )
	{
		displayCanvas.addEventListener( 'touchstart', psMapOnTouch );
	}
	else
	{
		displayCanvas.addEventListener( 'mousedown',  psMapOnClick, false );
		displayCanvas.addEventListener( 'mousemove',  psMapOnMove,  false );
	}
}

function psMapListenerRemove()
{
	if( browserInfo.touch )
	{
		displayCanvas.removeEventListener( 'touchstart', psMapOnTouch );	
	}
	else
	{
		displayCanvas.removeEventListener( 'mousedown',  psMapOnClick, false );	
		displayCanvas.removeEventListener( 'mousemove',  psMapOnMove,  false );		
	}
}
