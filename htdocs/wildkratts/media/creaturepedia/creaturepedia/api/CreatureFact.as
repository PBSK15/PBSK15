package com.wildkratts.creaturepedia.api
{
	public class CreatureFact
	{
		public function CreatureFact()
		{
		}
		
		public static function fromXml( value:XML ) : CreatureFact
		{
			var cf:CreatureFact = new CreatureFact();
			cf._title = value..title.text();
			cf._text = value..text.text();
			return cf;
		}
		
		public function get title() : String { return _title; }
		public function get text() : String { return _text; }
		
		private var _title:String;
		private var _text:String;
	}
}