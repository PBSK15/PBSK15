package com.wildkratts.creaturepedia.api
{
	public class RequestAction
		extends Object
	{
		public static const GET_RANDOM_CREATURES:RequestAction = new RequestAction( "getRandomCreatures" );
		public static const GET_FEATURED_CREATURE:RequestAction = new RequestAction( "getFeaturedCreature" );
		public static const GET_CREATURE_BY_ID:RequestAction = new RequestAction( "getCreatureById" );
		public static const GET_CREATURES_FOR_REGION:RequestAction = new RequestAction( "getCreaturesForRegion" );
		public static const GET_CREATURES_FOR_HABITAT:RequestAction = new RequestAction( "getCreaturesForHabitat" );
		public static const GET_CREATURES_FOR_ANIMAL_FAMILY:RequestAction = new RequestAction( "getCreaturesForAnimalFamily" );
		public static const GET_REGIONS:RequestAction = new RequestAction( "getRegions" );
		public static const GET_HABITATS:RequestAction = new RequestAction( "getHabitats" );
		public static const GET_ANIMAL_FAMILIES:RequestAction = new RequestAction( "getAnimalFamilies" );
		public static const SEARCH:RequestAction = new RequestAction( "search" );
		
		public function RequestAction( name:String )
		{
			_name = name;
			
			if( _actions == null )
			{
				_actions = new Array();
			}
			_actions.push( this );
		}
		
		public static function fromString( value:String ) : RequestAction
		{
			var loweredValue:String = value.toLowerCase();
			for( var i:uint=0; i<_actions.length; i++ )
			{
				var a:RequestAction = _actions[ i ] as RequestAction;
				if( a.name.toLowerCase() == loweredValue )
				{
					return a;
				}
			}
			
			return null;
		}
		
		public function get name() : String { return _name; }
		public function toString() : String { return _name; }
		
		private static var _actions:Array;
		private var _name:String;
	}
}