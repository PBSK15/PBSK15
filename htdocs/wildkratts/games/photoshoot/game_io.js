
var ps_game_cursor_is_active = 0;
var ps_game_cursor_shake_index;
var ps_game_cursor_shake_flag;

var ps_game_cursor_shake_ox = [ -8, -4, 0, 4, 8,  4,  0, -8, 4, -4];
var ps_game_cursor_shake_oy = [  4, -4, 8, 0, 4, -8, -4,  4, 0,  4];
 
function psGameCursorShake()
{
	ps_game_cursor_shake_index = 0;
	ps_game_cursor_shake_flag  = 1;
}

function psGameCursorRender()
{
	if( ps_game_cursor_is_active == 0 )
		return;
		
	if( ps_game_cursor_shake_flag == 1 )
	{
		var cx = ps_game_cursor_x - ((148 + ps_game_cursor_shake_ox[ps_game_cursor_shake_index]) * displayScale);
		var cy = ps_game_cursor_y - ((52  + ps_game_cursor_shake_oy[ps_game_cursor_shake_index]) * displayScale);
			
		displayContext.drawImage( ps_img_cursor, 
								  cx, cy, 
								  ps_img_cursor.width  * displayScale,
								  ps_img_cursor.height * displayScale
								  ); 				
								  
		ps_game_cursor_shake_index++;
		
		if( ps_game_cursor_shake_index >= 10 )
			ps_game_cursor_shake_flag = 0;
	}
	else
	{	
		var cx = ps_game_cursor_x - (148 * displayScale);
		var cy = ps_game_cursor_y - (52  * displayScale);
		
		displayContext.drawImage( ps_img_cursor, 
								  cx, cy, 
								  ps_img_cursor.width  * displayScale,
								  ps_img_cursor.height * displayScale								  
								  ); 			
	}
}

function psGameOnMove( event )
{
	ps_game_cursor_is_active = 1;
	
	ps_game_cursor_x = event.pageX;
	ps_game_cursor_y = event.pageY;
	
	if( ps_game_state == PS_GAME_STATE_END )
	{
		if( psIconIsPressed(ps_game_cursor_x, ps_game_cursor_y) != -1 )
		{
			displayCanvas.style.cursor = "pointer";
			return;
		}		
		
		if( psEndIsActive(ps_game_cursor_x, ps_game_cursor_y) != 0 )
		{
			displayCanvas.style.cursor = "pointer";
			return;
		}				
	}
	
	if( psHelpIsActive(ps_game_cursor_x, ps_game_cursor_y) )
	{
		displayCanvas.style.cursor = "pointer";
		return;
	}
	
	if( psHomeIsActive(ps_game_cursor_x, ps_game_cursor_y) )
	{
		displayCanvas.style.cursor = "pointer";
		return;
	}
		
	displayCanvas.style.cursor = "auto";		
}

function psGameOnDown( event )
{
	var cx = event.pageX;
	var cy = event.pageY;
	
	psGameAction( 1, cx, cy );
}

function psGameOnUp( event )
{
	var cx = event.pageX;
	var cy = event.pageY;
	
	psGameAction( 0, cx, cy );
}

function psGameOnTouchDown( event )
{
	var cx = event.touches[0].pageX;
	var cy = event.touches[0].pageY;
		
	psGameAction( 1, cx, cy );
}

function psGameOnTouchUp( event )
{
	var cx = event.changedTouches[0].pageX;
	var cy = event.changedTouches[0].pageY;
		
	psGameAction( 0, cx, cy );
}

function psGameListenerAdd()
{
	if( browserInfo.touch )
	{
		displayCanvas.addEventListener( 'touchstart', psGameOnTouchDown, false );
		displayCanvas.addEventListener( 'touchend',   psGameOnTouchUp,   false );	
	}
	else
	{
		displayCanvas.addEventListener( 'mousemove', psGameOnMove, false );
		displayCanvas.addEventListener( 'mousedown', psGameOnDown, false );			
		displayCanvas.addEventListener( 'mouseup',   psGameOnUp,   false );		
	}
}

function psGameListenerRemove()
{
	if( browserInfo.touch )
	{
		displayCanvas.removeEventListener( 'touchstart', psGameOnTouchDown, false );
		displayCanvas.removeEventListener( 'touchend',   psGameOnTouchUp,   false );			
	}
	else
	{
		displayCanvas.removeEventListener( 'mousemove', psGameOnMove,  false );
		displayCanvas.removeEventListener( 'mousedown', psGameOnDown,  false );			
		displayCanvas.removeEventListener( 'mouseup',   psGameOnUp,    false );		
	}
}

