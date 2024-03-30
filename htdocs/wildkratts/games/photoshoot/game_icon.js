/*
** Icons
*/
const PS_ICON_SCALE	  = 0.3;
const PS_ICON_SPACE_X = 4;
const PS_ICON_SPACE_Y = 4;

var ps_icons = [];
var ps_icon_ig = 0;
var ps_icon_scale;


function psIconAdjust( )
{
	for( var ico=0; ico<ps_game_names.length; ico++ )
	{
		psShootAdjustObjectWithScale( ps_icons[ico], ps_icon_scale );
	}
}

function psIconGameStart()
{
	ps_icons.length = 0;
	
	var iw = ps_img_icons[0].width  * PS_ICON_SCALE;
	var ih = ps_img_icons[0].height * PS_ICON_SCALE;
	
	var xs = -445;
	var ys = -275;
					
	for( var ico=0; ico<ps_game_names.length; ico++ )
	{
		ps_icons[ico] 			= {};
		ps_icons[ico].collected = 0;
		ps_icons[ico].type      = ps_game_names[ico];
		ps_icons[ico].img       = ps_img_icon;
		ps_icons[ico].stars     = ps_img_icon_stars[0];
		ps_icons[ico].x         = xs;
		ps_icons[ico].y         = ys;
				
		ys = ys + ih + PS_ICON_SPACE_Y;	
		
			
	}
	ps_icon_scale = PS_ICON_SCALE;
	psIconAdjust();
}

function psIconGameEnd( )
{
	var total = ps_icons.length;
	var rows  = 2;
	
	var col1  = Math.floor( total / rows );
	var col2  = Math.floor( total - col1 );
	
	var iw = ps_img_icons[0].width;
	var ih = ps_img_icons[0].height;	
			
	/*
	** First row
	*/
	var cw = (iw * col1) + (PS_ICON_SPACE_X * (col1-1));
		
	var xs = (iw / 2) - (cw / 2);
	var ys = 128 - 320;
		
	for( var ico=0; ico<col1; ico++ )
	{
		if( ps_icons[ico].collected == 0 )
			ps_icons[ico].img = ps_img_icons_s[ico];			
		else
			ps_icons[ico].img = ps_img_icons[ico];					
	
		ps_icons[ico].x  = xs;
		ps_icons[ico].y  = ys;
		
		xs = xs + iw + PS_ICON_SPACE_X;
	}	
	
	/*
	** Second row
	*/
	cw = (iw * col2) + (PS_ICON_SPACE_X * (col2-1));
	
	xs = (iw / 2) - (cw / 2);
	ys = 330 - 320;
	
	for( var ico=col1; ico<total; ico++ )
	{
		if( ps_icons[ico].collected == 0 )
			ps_icons[ico].img = ps_img_icons_s[ico];			
		else
			ps_icons[ico].img = ps_img_icons[ico];					
	
		ps_icons[ico].x  = xs;
		ps_icons[ico].y  = ys;
		
		xs = xs + iw + PS_ICON_SPACE_X;
	}
	ps_icon_scale = 1;		
	psIconAdjust();	
}

function psIconIsPressed( cx, cy )
{
	for( var ico=0; ico<ps_icons.length; ico++ )
	{
		if( ps_icons[ico].l <= cx && 
			ps_icons[ico].t <= cy && 
			ps_icons[ico].r >  cx &&
			ps_icons[ico].b >  cy )				
		{
			if( ps_icons[ico].collected == 0 )
				return -2;
			else
				return ico;
		}
	}
	return -1;
}

function psIconCollect( type )
{
	for( var ico=0; ico<ps_icons.length; ico++ )
	{
		if( ps_icons[ico].type == type )
		{
			if( ps_icons[ico].collected < 5 )
				ps_icons[ico].collected++;

			ps_icons[ico].img = ps_img_icons[ico];	
			
			if( type == PS_KRATT )	
				ps_icons[ico].stars = ps_img_icon_stars[6];
			else
				ps_icons[ico].stars = ps_img_icon_stars[ps_icons[ico].collected];
		}
	}	
}

function psIconRender( )
{	
	for( var ico=0; ico<ps_icons.length; ico++ )
	{
		displayContext.drawImage( ps_icons[ico].img,
								  0, 0,  
								  ps_icons[ico].img.width,
								  ps_icons[ico].img.height,
								  ps_icons[ico].l, 
								  ps_icons[ico].t,
								  ps_icons[ico].w,
								  ps_icons[ico].h								   
								  );		
								  
		displayContext.drawImage( ps_icons[ico].stars,
								  0, 0,  
								  ps_icons[ico].stars.width,
								  ps_icons[ico].stars.height,
								  ps_icons[ico].l, 
								  ps_icons[ico].t,
								  ps_icons[ico].w,
								  ps_icons[ico].h								   
								  );										
	}
}