/*
** End of game
*/

const PS_END_BTN_MM_CX = -280;
const PS_END_BTN_MM_CY = 250;

const PS_END_BTN_PA_CX = 280;
const PS_END_BTN_PA_CY = 250;

var ps_end_btn_mm = {};	
var ps_end_btn_pa = {};

var ps_end_cap_a = {};
var ps_end_num_0 = {};
var ps_end_cap_b = {};
var ps_end_num_1 = {};	
var ps_end_cap_c = {};

var ps_end_total_count;
var ps_end_total_num;
	
	
function psEndIsActive( cx, cy )
{
	if( cx >= ps_end_btn_mm.l && cx < ps_end_btn_mm.r &&
		cy >= ps_end_btn_mm.t && cy < ps_end_btn_mm.b )
	{
		return 1;
	}
				
	if( cx >= ps_end_btn_pa.l && cx < ps_end_btn_pa.r &&
		cy >= ps_end_btn_pa.t && cy < ps_end_btn_pa.b )
	{
		return 2;
	}				
		
	return 0;
}
	
function psEndIsPressed( action, cx, cy )
{
	var active = psEndIsActive( cx, cy );
	
	if( active == 1 )
		ps_end_btn_mm.action = action;

	if( active == 2 )
		ps_end_btn_pa.action = action;	
	
	if( active > 0 && action == 1 )
		audioManager.playSound( "fx_beep" );		
	
	if( action == 0 )
	{
		ps_end_btn_pa.action = 0;
		ps_end_btn_mm.action = 0;
		
		return active;
	}
	
	return 0;
}

function psEndRender()
{
    displayContext.drawImage( ps_img_end_btn_mm[ps_end_btn_mm.action], ps_end_btn_mm.l, ps_end_btn_mm.t, ps_end_btn_mm.w, ps_end_btn_mm.h );    
    displayContext.drawImage( ps_img_end_btn_pa[ps_end_btn_pa.action], ps_end_btn_pa.l, ps_end_btn_pa.t, ps_end_btn_pa.w, ps_end_btn_pa.h );    
    
    displayContext.drawImage( ps_img_end_caption_a, ps_end_cap_a.l, ps_end_cap_a.t, ps_end_cap_a.w, ps_end_cap_a.h );
    displayContext.drawImage( ps_img_end_caption_b, ps_end_cap_b.l, ps_end_cap_b.t, ps_end_cap_b.w, ps_end_cap_b.h );
    displayContext.drawImage( ps_img_end_caption_c, ps_end_cap_c.l, ps_end_cap_c.t, ps_end_cap_c.w, ps_end_cap_c.h );        
    
    displayContext.drawImage( ps_img_end_numbers[ps_end_total_num],   ps_end_num_0.l, ps_end_num_0.t, ps_end_num_0.w, ps_end_num_0.h );
    displayContext.drawImage( ps_img_end_numbers[ps_end_total_count], ps_end_num_1.l, ps_end_num_1.t, ps_end_num_1.w, ps_end_num_1.h );    
}

function psEndAdjust()
{
	psShootAdjustObject( ps_end_btn_mm );
	psShootAdjustObject( ps_end_btn_pa );
	
	psShootAdjustObject( ps_end_cap_a );
	psShootAdjustObject( ps_end_cap_b );
	psShootAdjustObject( ps_end_cap_c );
	
	psShootAdjustObject( ps_end_num_0 );
	psShootAdjustObject( ps_end_num_1 );
	
	psEndRender();
}

function psEndStart()
{
	ps_end_total_count = ps_icons.length;
	ps_end_total_num   = 0;
	
	for( var ico=0; ico<ps_icons.length; ico++ )
	{
		if( ps_icons[ico].collected > 0 )
			ps_end_total_num++;
	}		
	
	ps_end_btn_mm.x   = PS_END_BTN_MM_CX;
	ps_end_btn_mm.y   = PS_END_BTN_MM_CY;
	ps_end_btn_mm.img = ps_img_end_btn_mm[0];
	
	ps_end_btn_pa.x   = PS_END_BTN_PA_CX;
	ps_end_btn_pa.y   = PS_END_BTN_PA_CY;
	ps_end_btn_pa.img = ps_img_end_btn_pa[0];
	
	ps_end_btn_mm.action = 0;		
	ps_end_btn_pa.action = 0;			
	
	var cap_w = ps_img_end_caption_a.width  + 
				ps_img_end_caption_b.width  + 
				ps_img_end_caption_c.width  + 
				ps_img_end_numbers[0].width + 
				ps_img_end_numbers[0].width;
				
	var cap_x = (ps_img_end_caption_a.width / 2) - (cap_w / 2);
		
	ps_end_cap_a.x   = cap_x; cap_x = cap_x + (ps_img_end_caption_a.width/2) + (ps_img_end_numbers[0].width/2);
	ps_end_cap_a.y   = 150;
	ps_end_cap_a.img = ps_img_end_caption_a;
	
	ps_end_num_0.x   = cap_x; cap_x = cap_x + (ps_img_end_caption_b.width/2) + (ps_img_end_numbers[0].width/2);
	ps_end_num_0.y   = 150;	
	ps_end_num_0.img = ps_img_end_numbers[0];
	
	ps_end_cap_b.x   = cap_x; cap_x = cap_x + (ps_img_end_caption_b.width/2) + (ps_img_end_numbers[0].width/2);
	ps_end_cap_b.y   = 150;	
	ps_end_cap_b.img = ps_img_end_caption_b;
	
	ps_end_num_1.x   = cap_x; cap_x = cap_x + (ps_img_end_caption_c.width/2) + (ps_img_end_numbers[0].width/2);
	ps_end_num_1.y   = 150;	
	ps_end_num_1.img = ps_img_end_numbers[0];
	
	ps_end_cap_c.x   = cap_x;
	ps_end_cap_c.y   = 150;	
	ps_end_cap_c.img = ps_img_end_caption_c;
		
	psEndAdjust();
}
