package com.wildkratts.creaturepedia.api.events
{
	import flash.events.Event;
	
	public class CreaturepediaEvent
		extends Event
	{
		public static const REQUEST_COMPLETE:String = "requestComplete";
		public static const REQUEST_ERROR:String = 'requestError';
		public static const REQUEST_GAVE_UP:String = 'requestGaveUp';
		
		public function CreaturepediaEvent( type:String, bubbles:Boolean=false, cancelable:Boolean=false )
		{
			super( type, bubbles, cancelable );
		}
		
		public override function clone():Event
		{
			return new CreaturepediaEvent(type);
		}
	}
}