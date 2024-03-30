/*
** Target
*/
const PS_TARGET_SPEED      = 5;
const PS_TARGET_SCALE      = 0.83333;

const PS_TARGET_HIT_MIN    = 100;

const PS_TARGET_MIN_DELAY  = 30;
const PS_TARGET_MAX_DELAY  = 60;

const PS_TARGET_STATE_IDLE = 0;
const PS_TARGET_STATE_IN   = 1;
const PS_TARGET_STATE_SHOW = 2;
const PS_TARGET_STATE_OUT  = 3;

var ps_target = {};
var ps_target_list = [];


function psTargetSet( targ, inst )
{
	ps_target.image = ps_img_targets[ targ ];		
	ps_target.targ  = targ;
	ps_target.hit   = 0;
	ps_target.type  = ps_game_targets[targ].type	
	ps_target.zone  = ps_game_targets[targ].zone;	
	ps_target.layer = ps_game_targets[targ].layer[inst];
	ps_target.dir   = ps_game_targets[targ].dir[inst];
	ps_target.sx    = Math.floor( ps_game_targets[targ].sx[inst] * PS_TARGET_SCALE );
	ps_target.sy    = Math.floor( ps_game_targets[targ].sy[inst] * PS_TARGET_SCALE );
	ps_target.sw    = Math.floor( ps_game_targets[targ].sw[inst] * PS_TARGET_SCALE );
	ps_target.sh    = Math.floor( ps_game_targets[targ].sh[inst] * PS_TARGET_SCALE );		
	
	if( ps_target.sw > ps_target.image.width )
		ps_target.sw = ps_target.image.width;
	if( ps_target.sh > ps_target.image.height )
		ps_target.sh = ps_target.image.height;			
	
	ps_target.x     = Math.floor( ps_game_targets[targ].xs[inst] * PS_TARGET_SCALE );
	ps_target.y     = Math.floor( ps_game_targets[targ].ys[inst] * PS_TARGET_SCALE );				
	ps_target.w     = Math.floor( ps_game_targets[targ].scale[inst] * ps_target.sw );
	ps_target.h     = Math.floor( ps_game_targets[targ].scale[inst] * ps_target.sh );				
	ps_target.xi    = (ps_game_targets[targ].xe[inst] - ps_game_targets[targ].xs[inst]) / PS_TARGET_SPEED;
	ps_target.yi    = (ps_game_targets[targ].ye[inst] - ps_game_targets[targ].ys[inst]) / PS_TARGET_SPEED;								
	ps_target.xd    = Math.round( ps_target.xi * PS_TARGET_SCALE );
	ps_target.yd    = Math.round( ps_target.yi * PS_TARGET_SCALE );					
	ps_target.iter  = PS_TARGET_SPEED;
	ps_target.state = PS_TARGET_STATE_IN;
}


function psTargetCollect( trg )
{
	var xadd = 0;
	
	if( (ps_game_bg_x + 960) > ps_game_bg_w  )
	{
		xadd = ps_game_bg_w;
	}
	
	for( var inst=0; inst<ps_game_targets[trg].xe.length; inst++ )
	{
		var xe = Math.round( ps_game_targets[trg].xe[inst] * PS_TARGET_SCALE );
		var ed = Math.round( 150 * PS_TARGET_SCALE );
		
		if( (xe + xadd) >= (ps_game_bg_x + ed) && 
			(xe + xadd) <  (ps_game_bg_x + 960 - ed) )
		{
			ps_target_list.push( { target : trg, instance : inst } );
		}		
	}
}
function psTargetSpawnKratt(  )
{
	for( ani=0; ani<ps_game_targets.length; ani++ )
	{
		if( ps_game_targets[ani].zone == ps_game_zone && ps_game_targets[ani].type == PS_KRATT )
			psTargetCollect( ani );
	}
}
function psTargetSpawnNative(  )
{
	for( ani=0; ani<ps_game_targets.length; ani++ )
	{
		if( ps_game_targets[ani].zone == ps_game_zone && ps_game_targets[ani].type != PS_KRATT )
			psTargetCollect( ani );
	}
}
function psTargetSpawnIntruder(  )
{	
	for( ani=0; ani<ps_game_targets.length; ani++ )
	{
		if( ps_game_targets[ani].zone != ps_game_zone )
			psTargetCollect( ani );
	}
}

/*
** Select a random target from the list of collected targets
*/
function psTargetSelectAny( )
{
	if( ps_target_list.length > 0 )
	{		
		var targ = psShootRandomInt( 0, ps_target_list.length );
		
		psTargetSet( ps_target_list[targ].target, 
				     ps_target_list[targ].instance );
				     
		return ps_game_targets[ ps_target_list[targ].target ].type;
	}
	return -1;
}

/*
** Select a random target from the list of collected targets where the target type
** matches type type passed as an argument.
*/
function psTargetSelectMatching( kind )
{
	if( ps_target_list.length > 0 )
	{		
		var targ  = psShootRandomInt( 0, ps_target_list.length );
		var count = ps_target_list.length;
		
		while( count > 0 )
		{
			if( ps_game_targets[ ps_target_list[targ].target ].type == kind )
			{
				psTargetSet( ps_target_list[targ].target, ps_target_list[targ].instance );			
				return ps_game_targets[ ps_target_list[targ].target ].type;
			}
			targ = (targ + 1) % ps_target_list.length;
			count--;
		}
	}
	return -1;
}

/*
** Select a random target from the list of collected targets where the target type
** is NOT the type passed as an argument.
*/
function psTargetSelectExclusive( kind )
{
	if( ps_target_list.length > 0 )
	{		
		var targ  = psShootRandomInt( 0, ps_target_list.length );
		var count = ps_target_list.length;
		
		while( count > 0 )
		{
			if( ps_game_targets[ ps_target_list[targ].target ].type != kind )
			{
				psTargetSet( ps_target_list[targ].target, ps_target_list[targ].instance );			
				return ps_game_targets[ ps_target_list[targ].target ].type;
			}
			targ = (targ + 1) % ps_target_list.length;
			count--;
		}
	}
	return -1;
}

function psTargetProcess( )
{
	if( ps_target.iter > 0 )
	{
		ps_target.x = ps_target.x + ps_target.xd;
		ps_target.y = ps_target.y + ps_target.yd;
		ps_target.iter--;
	}
	else
	{
		/*
		** Update game state
		*/
		if( ps_target.state == PS_TARGET_STATE_IDLE )  
		{
			ps_target_list.length = 0;
			psGameSpawn( );
			return;		
		}
		if( ps_target.state == PS_TARGET_STATE_IN )
		{		
			console.log( "Target in : (" + ps_target.x + "," + ps_target.y + ")" );
			
			ps_target.xd    = 0;
			ps_target.yd    = 0;
			ps_target.iter  = 45;
			ps_target.state = PS_TARGET_STATE_SHOW;
			return;
		}
		if( ps_target.state == PS_TARGET_STATE_SHOW )
		{
			ps_target.xd    = Math.round( -1 * ps_target.xi * PS_TARGET_SCALE );
			ps_target.yd    = Math.round( -1 * ps_target.yi * PS_TARGET_SCALE );
			ps_target.iter  = PS_TARGET_SPEED;
			ps_target.state = PS_TARGET_STATE_OUT;
			return;		
		}
		if( ps_target.state == PS_TARGET_STATE_OUT )
		{
			ps_target.state = PS_TARGET_STATE_IDLE;
			ps_target.iter  = psShootRandomInt( PS_TARGET_MIN_DELAY, PS_TARGET_MAX_DELAY );				
			return;
		}		
	}
}

function psTargetRender( layer ) 
{
	if( ps_target.state == PS_TARGET_STATE_IDLE )
		return;
		
	if( layer != ps_target.layer )
		return;
			
	var xp = ps_target.x;
	
	/*
	** Position adjust if background is displayed in two pieces.
	** If the target x position is less than the current scroll position, the
	** target is on the right half. 
	*/
	if( xp < ps_game_bg_x )
		xp = (ps_game_bg_w - ps_game_bg_x) + xp;
	else
		xp = xp - ps_game_bg_x;
		
	/*
	** Horizontal flip if necessary
	*/
    var scale  = ps_target.dir ? -1 : 1,
        pos_x  = (scale < 0) ? ((xp + ps_target.w) * -1) : xp,
        pos_y  = ps_target.y;
         
    displayContext.save();
    displayContext.scale( scale, 1 );
            
    displayContext.drawImage( ps_target.image, 
    					      ps_target.sx, ps_target.sy,
    					      ps_target.sw, ps_target.sh, 
    					      displayX + (pos_x * displayScale), 
    					      displayY + (pos_y * displayScale), 
    					      ps_target.w * displayScale,  
    					      ps_target.h * displayScale 
    					      );
    displayContext.restore();
};

function psTargetIsTouched( cx, cy )
{
	if( ps_target.state == PS_TARGET_STATE_IDLE )
		return -1;
		
	var sx = ps_target.x;
	var sy = ps_target.y;
								
	/*
	** Convert the current target position to screen coordinates.
	** This means adjusting the x coordinate based on the current bg
	** position.
	*/
	if( sx < ps_game_bg_x )
		sx = (ps_game_bg_w - ps_game_bg_x) + sx;
	else
		sx = sx - ps_game_bg_x;	
		
	/*
	** Ensure that the target hit area is at least as big as the minimum
	** hit box size.
	*/
	var sw = ps_target.w;
	var sh = ps_target.h;
	
	if( sw < PS_TARGET_HIT_MIN )
		sw = PS_TARGET_HIT_MIN;
		
	if( sh < PS_TARGET_HIT_MIN )
		sh = PS_TARGET_HIT_MIN;
		
	sx = sx - Math.round((sw - ps_target.w) / 2);
	if( sx < 0 )
		sx = 0;
		
	sy = sy - Math.round((sh - ps_target.h) / 2);
	if( sy < 0 )
		sy = 0;		
		
	if( ps_target.hit == 1 )
		return -1;
		
	sx *= displayScale;
	sy *= displayScale;
	sw *= displayScale;
	sh *= displayScale;
	
	sx += displayX;
	sy += displayY;
	
	if( cx >= sx && cx < (sx+sw) && cy >= sy && cy < (sy+sh) )
	{
		ps_target.hit = 1;
		return ps_target.targ;		
	}	
	return -1;
}

function psTargetStart()
{
	ps_target.state = PS_TARGET_STATE_IDLE;	
	ps_target.iter  = psShootRandomInt( PS_TARGET_MIN_DELAY, PS_TARGET_MAX_DELAY );	
}

function psTargetIsIdle()
{
	return ps_target.state == PS_TARGET_STATE_IDLE;
}
