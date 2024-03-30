/*
** Asset
**
** Manages all the loading and unloading of assets for all parts
** of the game.
*/

var ps_asset_count;
var ps_asset_total;

/*
** Game
*/

function psAssetLoaded( )
{	
	this.removeEventListener( 'load', psAssetLoaded, false );
	
	ps_asset_count++;	
	
	if( ps_asset_count == ps_asset_total )
		psShootStateTransition( psGameStart );	
	else
		psLoadProgress( ps_asset_count, ps_asset_total );
}

function psAssetGameSoundLoadComplete()
{
	if( ps_asset_count == ps_asset_total )
		psShootStateTransition( psGameStart );	
	else
		psLoadProgress( ps_asset_count, ps_asset_total );
}

var ps_asset_game_sounds = 
[
	{group:"fx" ,name:'fx_camera',   	path:'fx_camera'},
	{group:"fx" ,name:'fx_beep',     	path:'fx_click'  },	
	{group:"vo" ,name:'c_instructions', path:'c_instructions'},	
	{group:"vo" ,name:'c_playagain', 	path:'c_playagain'},	
];

function psAssetGameSoundsCount()
{
	return ps_asset_game_sounds.length + ps_game_targets.length
}

function psAssetGameSoundsLoad()
{
	var sounds = [];
	
	for( var sn=0; sn<ps_asset_game_sounds.length; sn++ )
		sounds.push( ps_asset_game_sounds[sn] );
	
	for( var tg=0; tg<ps_game_targets.length; tg++ )
		sounds.push( {group:"vo", name:ps_game_targets[tg].sound, path:ps_game_targets[tg].sound} );
	
    for( var j=0; j<sounds.length; j++ )
    {
    	audioManager.loadSound( sounds[j].name, 
    							sounds[j].path, 1, psAssetGameSoundLoadComplete, 
    							sounds[j].group );
    }	
}

function psAssetGameLoad( )
{
	ps_asset_count = 0;			
	ps_asset_total = 0;
	
	ps_asset_total += psAssetLayerCount();
	ps_asset_total += psAssetTargetCount();
	ps_asset_total += psAssetCursorCount();
	ps_asset_total += psAssetIconCount();
	ps_asset_total += psAssetFlashCount();
	ps_asset_total += psAssetHelpCount();
	ps_asset_total += psAssetHomeCount();
	ps_asset_total += psAssetInfoCount();
	ps_asset_total += psAssetEndCount();
	ps_asset_total += psAssetTalkCount();
	//ps_asset_total += psAssetGameSoundsCount();
		
	psAssetLayerLoad();
	psAssetTargetLoad();
	psAssetCursorLoad();
	psAssetIconLoad();
	psAssetFlashLoad();
	psAssetHelpLoad();
	psAssetHomeLoad();
	psAssetInfoLoad();
	psAssetEndLoad();
	psAssetTalkLoad();
	psAssetGameSoundsLoad();
	
	psShootStateTransition( null );
}

/*
** Load targets.
** Targets are all of the possible animals as well as intruders.
** It relies on the existence of the global variable ps_game_targets, which
** gets assigned when the game is initialized.
*/
var ps_img_targets = [];

function psAssetTargetCount( )
{
	return ps_game_targets.length;
}

function psAssetTargetLoad(  )
{
	for( var t=0; t<ps_game_targets.length; t++ )
	{
		ps_img_targets[t] = new Image();
		ps_img_targets[t].addEventListener('load', psAssetLoaded , false);
		ps_img_targets[t].src = "assets/img/" + ps_habitat_names[ps_game_targets[t].zone] + "/animals/" + ps_animal_names[ps_game_targets[t].type] + ".png";		
	}
}

/*
** Load layers
** Layers are the different habitat background layers.
** There is normally a background layer, and three foreground layers.
*/
var ps_img_layers = [];

function psAssetLayerCount()
{
	return ps_game_layers.length + 1;
}
function psAssetLayerLoad(  )
{	
	ps_img_layers[0] = new Image();
	ps_img_layers[0].addEventListener('load', psAssetLoaded , false);
	ps_img_layers[0].src = "assets/img/" + ps_habitat_names[ps_game_zone] + "/habitat/bg.png";		
	
	for( lay=0; lay<ps_game_layers.length; lay++ )
	{
		ps_img_layers[1+lay] = new Image();
		ps_img_layers[1+lay].addEventListener('load', psAssetLoaded , false);
		ps_img_layers[1+lay].src = "assets/img/" + ps_habitat_names[ps_game_zone] + "/habitat/" + ps_game_layers[lay] + ".png";				
	}
} 

/*
** Load icons
*/
var ps_img_icons   = [];
var ps_img_icons_s = [];
var ps_img_icon;
var ps_img_icon_stars = [];

function psAssetIconCount( )
{
	return( 2 + 5 + (ps_game_names.length * 2) );
}

function psAssetIconLoad( )
{
	for( t=0; t<ps_game_names.length; t++ )
	{
		ps_img_icons[t] = new Image();
		ps_img_icons[t].addEventListener('load', psAssetLoaded , false);
		ps_img_icons[t].src = "assets/img/" + ps_habitat_names[ps_game_zone] + "/icons/" + ps_animal_names[ps_game_names[t]] + "_i.png";		
		
		ps_img_icons_s[t] = new Image();
		ps_img_icons_s[t].addEventListener('load', psAssetLoaded , false);
		ps_img_icons_s[t].src = "assets/img/" + ps_habitat_names[ps_game_zone] + "/icons/" + ps_animal_names[ps_game_names[t]] + "_s.png";		
	}	
	ps_img_icon = new Image();
	ps_img_icon.addEventListener('load', psAssetLoaded , false);
	ps_img_icon.src = "assets/img/game_polaroid.png";				
	
	for( t=0; t<=5; t++ )
	{
		ps_img_icon_stars[t] = new Image();
		ps_img_icon_stars[t].addEventListener('load', psAssetLoaded , false);
		ps_img_icon_stars[t].src = "assets/img/end_star_" + t + ".png";			
	}
	ps_img_icon_stars[6] = new Image();
	ps_img_icon_stars[6].addEventListener('load', psAssetLoaded , false);
	ps_img_icon_stars[6].src = "assets/img/end_bonus.png";				
}

/*
** Cursor
** Single image showing camera used only on PC versions.
** Camera moves to follow the mouse.
*/
var ps_img_cursor;

function psAssetCursorCount( )
{
	return 1;
}
function psAssetCursorLoad( )
{
	ps_img_cursor = new Image();
	ps_img_cursor.addEventListener('load', psAssetLoaded , false);
	ps_img_cursor.src = "assets/img/game_cursor.png";			
}

/*
** Camera flash
** Camera flash has three images.
** Flash animation plays as follows..
**
** 1 : Image one at actual size.
** 2 : Image one at 3x size.
** 3 : Image two
** 4 : Image three
*/
var ps_img_camera_flash = [];

function psAssetFlashCount( )
{
	return 3;
}
function psAssetFlashLoad( )
{
	for( var frm=0; frm<3; frm++ )
	{
		ps_img_camera_flash[frm] = new Image();
		ps_img_camera_flash[frm].addEventListener('load', psAssetLoaded , false);
		ps_img_camera_flash[frm].src = "assets/img/game_flash" + frm + ".png";			
	}
}

/*
** Help
*/
var ps_img_help;
var ps_img_help_button = [];

function psAssetHelpCount()
{
	return 3;
}
function psAssetHelpLoad( )
{
	ps_img_help = new Image();
	ps_img_help.addEventListener('load', psAssetLoaded , false);
	ps_img_help.src = "assets/img/help.png";			
	
	ps_img_help_button[0] = new Image();
	ps_img_help_button[0].addEventListener('load', psAssetLoaded , false);
	ps_img_help_button[0].src = "assets/img/help_button_0.png";				
	
	ps_img_help_button[1] = new Image();
	ps_img_help_button[1].addEventListener('load', psAssetLoaded , false);
	ps_img_help_button[1].src = "assets/img/help_button_1.png";					
}

/*
** Home
*/
var ps_img_home;
var ps_img_home_button = [];
var ps_img_home_x = [];
var ps_img_home_y = [];

function psAssetHomeCount()
{
	return 7;
}
function psAssetHomeLoad( )
{
	ps_img_home = new Image();
	ps_img_home.addEventListener('load', psAssetLoaded , false);
	ps_img_home.src = "assets/img/home_bg.png";			
	
	ps_img_home_button[0] = new Image();
	ps_img_home_button[0].addEventListener('load', psAssetLoaded , false);
	ps_img_home_button[0].src = "assets/img/home_button_0.png";				
	
	ps_img_home_button[1] = new Image();
	ps_img_home_button[1].addEventListener('load', psAssetLoaded , false);
	ps_img_home_button[1].src = "assets/img/home_button_1.png";					
	
	ps_img_home_x[0] = new Image();
	ps_img_home_x[0].addEventListener('load', psAssetLoaded , false);
	ps_img_home_x[0].src = "assets/img/home_x_0.png";				
	
	ps_img_home_x[1] = new Image();
	ps_img_home_x[1].addEventListener('load', psAssetLoaded , false);
	ps_img_home_x[1].src = "assets/img/home_x_1.png";						
	
	ps_img_home_y[0] = new Image();
	ps_img_home_y[0].addEventListener('load', psAssetLoaded , false);
	ps_img_home_y[0].src = "assets/img/home_y_0.png";				
	
	ps_img_home_y[1] = new Image();
	ps_img_home_y[1].addEventListener('load', psAssetLoaded , false);
	ps_img_home_y[1].src = "assets/img/home_y_1.png";							
}

/*
** Info
*/
var ps_img_info = [];

function psAssetInfoCount()
{
	return ps_game_names.length;
}

function psAssetInfoLoad()
{
	for( t=0; t<ps_game_names.length; t++ )
	{
		ps_img_info[t] = new Image();
		ps_img_info[t].addEventListener('load', psAssetLoaded , false);
		ps_img_info[t].src = "assets/img/" + ps_habitat_names[ps_game_zone] + "/info/" + ps_animal_names[ps_game_names[t]] + ".png";		
	}	
}

/*
** End of game
*/
var ps_img_end_btn_mm = [];
var ps_img_end_btn_pa = [];

var ps_img_end_caption_a;
var ps_img_end_caption_b;
var ps_img_end_caption_c;

var ps_img_end_numbers = [];

function psAssetEndCount()
{
	return 17;
}

function psAssetEndLoad()
{
	ps_img_end_btn_mm[0] = new Image();
	ps_img_end_btn_mm[0].addEventListener('load', psAssetLoaded , false);
	ps_img_end_btn_mm[0].src = "assets/img/end_btn_mm_0.png";			
	
	ps_img_end_btn_mm[1] = new Image();
	ps_img_end_btn_mm[1].addEventListener('load', psAssetLoaded , false);
	ps_img_end_btn_mm[1].src = "assets/img/end_btn_mm_1.png";				
	
	ps_img_end_btn_pa[0] = new Image();
	ps_img_end_btn_pa[0].addEventListener('load', psAssetLoaded , false);
	ps_img_end_btn_pa[0].src = "assets/img/end_btn_pa_0.png";			
	
	ps_img_end_btn_pa[1] = new Image();
	ps_img_end_btn_pa[1].addEventListener('load', psAssetLoaded , false);
	ps_img_end_btn_pa[1].src = "assets/img/end_btn_pa_1.png";					
	
	ps_img_end_caption_a = new Image();
	ps_img_end_caption_a.addEventListener('load', psAssetLoaded , false);
	ps_img_end_caption_a.src = "assets/img/end_ta.png";						
	
	ps_img_end_caption_b = new Image();
	ps_img_end_caption_b.addEventListener('load', psAssetLoaded , false);
	ps_img_end_caption_b.src = "assets/img/end_tb.png";							
	
	ps_img_end_caption_c = new Image();
	ps_img_end_caption_c.addEventListener('load', psAssetLoaded , false);
	ps_img_end_caption_c.src = "assets/img/end_tc.png";							
	
	for( t=0; t<10; t++ )
	{
		ps_img_end_numbers[t] = new Image();
		ps_img_end_numbers[t].addEventListener('load', psAssetLoaded , false);
		ps_img_end_numbers[t].src = "assets/img/end_n" + t + ".png";		
	}		
}

/*
** Talking heads
*/
var ps_img_talk_c = [];
var ps_img_talk_m = [];

function psAssetTalkCount()
{
	return 30;
}

function psAssetTalkLoad()
{
	for( t=0; t<15; t++ )
	{
		ps_img_talk_c[t] = new Image();
		ps_img_talk_c[t].addEventListener('load', psAssetLoaded , false);
		ps_img_talk_c[t].src = "assets/img/c_talk_" + (t+1) + ".png";		
		
		ps_img_talk_m[t] = new Image();
		ps_img_talk_m[t].addEventListener('load', psAssetLoaded , false);
		ps_img_talk_m[t].src = "assets/img/m_talk_" + (t+1) + ".png";				
	}	
}


/*
** Menu
*/

var psAssetMenuSounds = 
[
	{group:"vo" ,name:'choose', path:'c_map_choose'},
	{group:"vo" ,name:'m_map_af', path:'m_map_af'},	
	{group:"vo" ,name:'c_map_au', path:'c_map_au'},	
	{group:"vo" ,name:'c_map_so', path:'c_map_so'},	
	{group:"vo" ,name:'m_map_na', path:'m_map_na'},				
	{group:"vo" ,name:'m_map_ca', path:'m_map_ca'},		
	{group:"vo" ,name:'c_map_in', path:'c_map_in'},
	{group:"fx", name:'fx_beep',  path:'fx_click'}		
];

function psAssetMenuLoad()
{
	ps_asset_count = 0;
	ps_asset_count += psAssetSplashCount();
	ps_asset_count += psAssetMapCount();
	ps_asset_count += psAssetMenuSounds.length;
		 
	psAssetSplashLoad();
	psAssetMapLoad();
	
    for( var j = 0; j < psAssetMenuSounds.length; j++ )
    {
    	audioManager.loadSound( psAssetMenuSounds[j].name, 
    							psAssetMenuSounds[j].path, 1, psAssetMenuSoundLoadComplete, 
    							psAssetMenuSounds[j].group );
    }
	
	psShootStateTransition( null );
}

function psAssetMenuSoundLoadComplete()
{
	if( --ps_asset_count == 0 )
		psShootStateTransition( psSplashStart );	
}

function psAssetMenuLoadComplete( )
{	
	this.removeEventListener( 'load', psAssetMenuLoadComplete, false );
	
	if( --ps_asset_count == 0 )
		psShootStateTransition( psSplashStart );	
}

/*
** Splash screen
*/
var ps_img_splash;
var ps_img_splash_play;
var ps_img_splash_loading_bg;
var ps_img_splash_loading_fg;
var ps_img_splash_loading_tx;

function psAssetSplashCount()
{
	return 5;	
}

function psAssetSplashLoad( )
{	
	ps_img_splash = new Image();
	ps_img_splash.addEventListener('load', psAssetMenuLoadComplete , false);
	ps_img_splash.src = "assets/img/splash.png";	
		
	ps_img_splash_play = new Image();
	ps_img_splash_play.addEventListener('load', psAssetMenuLoadComplete , false);
	ps_img_splash_play.src = "assets/img/splash_play.png";		
	
	ps_img_splash_loading_bg = new Image();
	ps_img_splash_loading_bg.addEventListener('load', psAssetMenuLoadComplete , false);
	ps_img_splash_loading_bg.src = "assets/img/splash_lb_bg.png";		
	
	ps_img_splash_loading_fg = new Image();
	ps_img_splash_loading_fg.addEventListener('load', psAssetMenuLoadComplete , false);
	ps_img_splash_loading_fg.src = "assets/img/splash_lb_fg.png";			
	
	ps_img_splash_loading_tx = new Image();
	ps_img_splash_loading_tx.addEventListener('load', psAssetMenuLoadComplete , false);
	ps_img_splash_loading_tx.src = "assets/img/splash_lb_label.png";			
}

/*
** Map screen
*/
var ps_img_map_bg;
var ps_img_map_icons = [];
var ps_img_map_ro = [];

function psAssetMapCount()
{
	return( 1 + ps_map_icons.length );
}

function psAssetMapLoad( )
{	
	ps_img_map_bg = new Image();
	ps_img_map_bg.addEventListener('load', psAssetMenuLoadComplete , false);
	ps_img_map_bg.src = "assets/img/map.png";		
				
	for( icon=0; icon<ps_map_icons.length; icon++ )
	{
		ps_img_map_icons[icon] = new Image();
		ps_img_map_icons[icon].addEventListener('load', psAssetMenuLoadComplete , false);
		ps_img_map_icons[icon].src = ps_map_icons[icon].icon;			
		
		ps_img_map_ro[icon] = new Image();
		ps_img_map_ro[icon].addEventListener('load', psAssetMenuLoadComplete , false);
		ps_img_map_ro[icon].src = ps_map_icons[icon].ro;					
	}
}
