
var ps_talk = {};

function psTalkComplete()
{
	ps_talk.inprogress = 0;
}

function psTalkAdjust()
{
	if( ps_talk.img != null )
		psShootAdjustObject( ps_talk );
}

function psTalk( snd, bro )
{
	if( bro == 1 )
		ps_talk.images = ps_img_talk_c;
	else
		ps_talk.images = ps_img_talk_m;
		
	ps_talk.x   = 0;
	ps_talk.y   = 260
	ps_talk.img = ps_talk.images[0];
		
	psTalkAdjust();
	
	ps_talk.frame 		  = 0;
	ps_talk.frame_counter = 0;	
	ps_talk.inprogress 	  = 1;	
	ps_talk.sound 		  = snd;
	
	audioManager.playSound( snd, 0, psTalkComplete );
}

function psTalkStop()
{
	if( ps_talk.inprogress )
	{
		audioManager.stopSound( ps_talk.sound );
		ps_talk.inprogress = 0;
	}
}

function psTalkRender()
{	
	if( ps_talk.inprogress == 1 )
	{
	    displayContext.drawImage( ps_talk.images[ ps_talk.frame], ps_talk.l, ps_talk.t, ps_talk.w, ps_talk.h );    					
	    
		ps_talk.frame_counter = (ps_talk.frame_counter + 1) % 3;
		if( ps_talk.frame_counter == 0 )
		    ps_talk.frame = (ps_talk.frame + 1) % 15;
	}
}