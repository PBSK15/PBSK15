/*
** Splash screen
*/

const PS_SPLASH_X = 0 
const PS_SPLASH_Y = 264;  

var ps_splash_bg   = {};
var ps_splash_play = {};

function psSplashAdjust()
{
	psShootAdjustObject( ps_splash_bg   );
	psShootAdjustObject( ps_splash_play );
				
	psSplashRender();
}

function psSplashRender()
{
	displayContext.fillStyle = "#FFFFFF";
	displayContext.fillRect( displayX, displayY, displayW, displayH );
	
	displayContext.drawImage( ps_splash_bg.img,   ps_splash_bg.l,   ps_splash_bg.t,   ps_splash_bg.w,   ps_splash_bg.h   );	
	displayContext.drawImage( ps_splash_play.img, ps_splash_play.l, ps_splash_play.t, ps_splash_play.w, ps_splash_play.h );			
}

function psSplashAction( cx, cy )
{
	audioManager.playSound( "choose" );
	psShootStateTransition( psSplashEnd );
}

function psSplashStart()
{
	ps_splash_bg.x = 0;
	ps_splash_bg.y = 0;
	ps_splash_bg.img = ps_img_splash;
	
	ps_splash_play.x = PS_SPLASH_X;
	ps_splash_play.y = PS_SPLASH_Y;
	ps_splash_play.img = ps_img_splash_play;
	
	psSplashAdjust();
		
	psShootAdjustFunction( psSplashAdjust );
	psSplashListenerAdd();
	psShootStateTransition( null );
}

function psSplashEnd()
{
	psShootAdjustFunction( null );
	psSplashListenerRemove();	
	psShootStateTransition( psMapStart );
}
