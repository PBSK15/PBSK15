package com.wildkratts.creaturepedia.api
{
	public class CreatureSummary
	{
		public function CreatureSummary()
		{
		}
		
		public static function fromXml( value:XML ) : CreatureSummary
		{
			var cs:CreatureSummary = new CreatureSummary();
			
			cs._id = value.@id;
			cs._name = value.name.text();
			cs._thumbnailUri = value.@thumbnail;
			cs._gameUri = value.gameInfo.@hasGame ? value.gameInfo.@gameUri : "";
			
			var heroImages:Array = [];
			for each( var heroImage:XML in value.heroImages )
			{
				var img:MediaItem = MediaItem.fromXml( heroImage );
				heroImages.push( img );	
			}
			cs._heroImages = heroImages;
			
			return cs;
		}
		
		public function get id() : uint { return _id; }
		public function get name() : String { return _name; }
		public function get hasGame() : Boolean { return _gameUri != null && _gameUri != ""; }
		public function get gameUri() : String { return _gameUri; }
		public function get thumbnailUri() : String { return _thumbnailUri; }
		public function get heroImages() : Array { return _heroImages; }
		
		private var _id:uint;
		private var _name:String;
		private var _gameUri:String;
		private var _thumbnailUri:String;
		private var _heroImages:Array;
	}
}