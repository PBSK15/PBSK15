/*
** Shoot
** Included in all versions of the game.
*/

/*
** Browser
*/
var browserInfo;

/*
** Audio
*/
var audioManager;

/*
** Display
*/
const PS_DISPLAY_REFRESH_RATE   = 33;
const PS_DISPLAY_SCROLL_SPEED  	= 1.33;

var displayCanvas;
var displayContext;
var displayX;
var displayY;
var displayW;
var displayH;
	/*
	** HTML5 Canvas variables.
	*/


/*
** Habitats
*/
const PS_AFRICA    				= 0;
const PS_AUSTRALIA 				= 1;
const PS_INDONESIA      		= 2;
const PS_NORTH_AMERICA  		= 3;
const PS_SOUTH_AMERICA  		= 4;
const PS_SONORAN_DESERT 		= 5;

var ps_habitat_names = [
	"africa",
	"australia",
	"indonesia",
	"northamerica",
	"southamerica",	
	"sonoran"
];

/*
** Animals
** Animals are arranged in groups according to the
** zone they belong, however, they all have a unique identifier
** and are completely defined by their type and zone.
*/
const PS_BAT_EARED_FOX			= 0;
const PS_CHEETAH				= 1;
const PS_GAZELLE				= 2;
const PS_GIRAFFE				= 3;
const PS_HONEY_BADGER			= 4;
const PS_LION					= 5;
const PS_WARTHOG				= 6;

const PS_DINGO					= 7;
const PS_KANGAROO				= 8;
const PS_WEDGE_TAILED_EAGLE		= 9;
const PS_THORNY_DEVIL			= 10;
const PS_KOOKABURRA				= 11;

const PS_BASILISK				= 12;
const PS_EYELASH_VIPER			= 13;
const PS_HARPY_EAGLE			= 14;
const PS_JAGUAR					= 15;
const PS_KINKAJOU				= 16;
const PS_SLOTH					= 17;
const PS_SPIDER_MONKEY			= 18;

const PS_BROWN_TREE_SNAKE		= 19;
const PS_CLOUDED_LEOPARD     	= 20;
const PS_COCKATOO				= 21;
const PS_TARSIER				= 22;
const PS_DRACO_LIZARD			= 23;
const PS_MOON_RAT				= 24;
const PS_ORANGUTAN				= 25;
const PS_PROBOSCUS_MONKEY		= 26;

const PS_BEAVER					= 27;
const PS_GREY_SQUIRREL			= 28;
const PS_GREY_WOLF				= 29;
const PS_MOOSE					= 30;

const PS_BLACK_BEETLE			= 31;
const PS_COLLARED_LIZARD		= 32;
const PS_ELF_OWL				= 33;
const PS_GILA_MONSTER			= 34;
const PS_GROUND_SQUIRREL		= 35;
const PS_SCORPION				= 36;

const PS_KRATT                  = 37;

var ps_animal_names = [
	"bat_eared_fox",
	"cheetah",
	"gazelle",
	"giraffe",
	"honey_badger",
	"lion",
	"warthog",
	
	"dingo",
	"kangaroo",
	"wedge_tailed_eagle",
	"thorny_devil",
	"kookaburra",
	
	"basilisk",
	"eyelash_viper",
	"harpy_eagle",
	"jaguar",
	"kinkajou",
	"sloth",
	"spider_monkey",
	
	"brown_tree_snake",
	"clouded_leopard",
	"cockatoo",
	"tarsier",
	"draco_lizard",
	"moon_rat",
	"orangutan",
	"proboscus_monkey",
	
	"beaver",
	"grey_squirrel",
	"grey_wolf",
	"moose",
	
	"black_beetle",
	"collared_lizard",
	"elf_owl",
	"gila_monster",
	"ground_squirrel",
	"scorpion",
	
	"kratt"
];

/*
** Game states
*/
var ps_shoot_state_function  = null;
var ps_shoot_adjust_function = null;

function psShootProcess()
{
	if( ps_shoot_state_function )
		ps_shoot_state_function();	
}

function psShootAdjust()
{
	if( ps_shoot_adjust_function )
		ps_shoot_adjust_function();
}
	
function psShootStateTransition( newFunction ) 
{
	ps_shoot_state_function = newFunction;
}

function psShootAdjustFunction( newFunction )
{
	ps_shoot_adjust_function = newFunction;
}

/*
** Utility functions
*/
function psShootRandomInt(min, max) 
{	
	var num = Math.floor( Math.random() * (max - min) ) + min;
	
	if( num >= max )
		num = num - 1;
		
	return num;
}

function psShootGetTouchPos( evt ) 
{
	var rect = displayCanvas.getBoundingClientRect();
	return {
		x: evt.clientX - rect.left,
	  	y: evt.clientY - rect.top
	};
}

function psShootAdjustObject( ob )
{
	if( ob.img != null )
	{
		ob.w = ob.img.width  * displayScale;
		ob.h = ob.img.height * displayScale;
	}
	else
	{
		ob.w = ob.sw * displayScale;
		ob.h = ob.sh * displayScale;
	}
	ob.l = displayX + (displayCX + (ob.x * displayScale) - (ob.w * 0.5));
	ob.t = displayY + (displayCY + (ob.y * displayScale) - (ob.h * 0.5));
	ob.r = ob.l + ob.w;
	ob.b = ob.t + ob.h;
}

function psShootAdjustObjectWithScale( ob, scl )
{
	if( ob.img != null )
	{
		ob.w = ob.img.width  * displayScale * scl;
		ob.h = ob.img.height * displayScale * scl;
	}
	else
	{
		ob.w = ob.sw * displayScale * scl;
		ob.h = ob.sh * displayScale * scl;
	}
	ob.l = displayX + (displayCX + (ob.x * displayScale) - (ob.w * 0.5));
	ob.t = displayY + (displayCY + (ob.y * displayScale) - (ob.h * 0.5));
	ob.r = ob.l + ob.w;
	ob.b = ob.t + ob.h;
}


/*
** Start up functions
*/
function psShootCanvasSupported () 
{
  	return Modernizr.canvas;
}

function psShootStart()
{
	if( ! psShootCanvasSupported() )  
	{
		alert( "Canvas not supported!" );
		return;
  	}
  	else
  	{
		browserInfo    = psBrowserDetect();
		audioManager   = psAudioInit();  	
		
        displayCanvas  = document.getElementById('shootCanvas');
	    displayContext = displayCanvas.getContext('2d');
	    
		psShootResize();	    
		psAssetMenuLoad();	    
		
		setInterval( psShootProcess, PS_DISPLAY_REFRESH_RATE );		
	}
}



 
