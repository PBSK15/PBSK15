package com.wildkratts.creaturepedia.api.response
{
	import com.wildkratts.creaturepedia.api.Creature;
	import com.wildkratts.creaturepedia.api.Request;
	import com.wildkratts.creaturepedia.api.RequestAction;

	public class GetCreatureResponse
	{
		public function GetCreatureResponse( request:Request )
		{
			if( request.arguments.action != RequestAction.GET_CREATURE_BY_ID
					&& request.arguments.action != RequestAction.GET_FEATURED_CREATURE )
			{
				throw new Error( "Invalid action for this type of response (GetCreatureResponse)." );
			}
			
			_request = request;
		}
		
		public function get creature() : Creature
		{
			if( _creature == null && _request != null && _request.data != null )
			{
				var xml:XML = _request.data;
				_creature = Creature.fromXml( xml..creature[ 0 ] );
			}
			
			return _creature;
		}
		
		private var _request:Request;
		private var _data:XML;
		
		private var _creature:Creature;
		
		
	}
}