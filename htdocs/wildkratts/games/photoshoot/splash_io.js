/*
** Splash ( PC )
** Implement functionality for PC versions of app.
** This file is only included when the app is running on a PC based browser.
*/

function psSplashOnMouseDown( event )
{
	var cx = event.pageX;
	var cy = event.pageY;
	
	psSplashAction( cx, cy );
}

function psSplashOnMouseMove( event )
{
	var x = event.pageX;
	var y = event.pageY;
		
	if( ps_splash_play.l <= x && 
		ps_splash_play.t <= y && 
		ps_splash_play.r >  x &&
		ps_splash_play.b >  y )				
	{
		displayCanvas.style.cursor = "pointer";
		return;		
	}	
	
	displayCanvas.style.cursor = "auto";	
}

function psSplashOnTouchStart( event )
{
	var cx = event.touches[0].pageX;
	var cy = event.touches[0].pageY;

	psSplashAction( cx, cy );
}

function psSplashListenerAdd()
{
	if( browserInfo.touch )
	{
		displayCanvas.addEventListener( 'touchstart', psSplashOnTouchStart, false );
	}
	else
	{
		displayCanvas.addEventListener( 'mousedown',  psSplashOnMouseDown,  false );	
		displayCanvas.addEventListener( 'mousemove',  psSplashOnMouseMove,  false );	
	}
}

function psSplashListenerRemove()
{
	if( browserInfo.touch )
	{
		displayCanvas.removeEventListener( 'touchstart', psSplashOnTouchStart, false );				
	}
	else
	{
		displayCanvas.removeEventListener( 'mousedown',  psSplashOnMouseDown,  false );	
		displayCanvas.removeEventListener( 'mousemove',  psSplashOnMouseMove,  false );	
	}
}



