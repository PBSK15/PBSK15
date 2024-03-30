package com.wildkratts.creaturepedia.api
{
	public class MediaItem
	{
		public function MediaItem()
		{
		}
		
		public static function fromXml( value:XML ) : MediaItem
		{
			trace( "MediaItem::fromXml()" );
			trace( value );
			var mi:MediaItem = new MediaItem();
			
			// todo: initialize media item from xml
			
			return mi;
		}
	}
}