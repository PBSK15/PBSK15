package com.wildkratts.creaturepedia.api
{
	public class ContentSection
	{
		public function ContentSection()
		{
		}
		
		public static function fromXml( value:XML ) : ContentSection
		{
			trace( "ContentSection::fromXml()" );
			trace( value );
			var cs:ContentSection = new ContentSection();
			
			/*/
			<content id="5" iconUri="">
				<title><![CDATA[Livin' Creature Style]]></title>
				<navigationLabel><![CDATA[Livin' Tasmanian Devil Style!]]></navigationLabel>
				<summary><![CDATA[]]></summary>
				<text><![CDATA[<p>T devils are nocturnal.  That means they come out at night.  They wander around sniffing with their great sense of smell until their nose leads them to their favorite meal. – a stinky, rotten carcass.</p><p>Sometimes arguments break out between the T devils about who gets a certain “eating place” at the carcass.  But, it's looks and sounds worse than it is.  In the end, T devils are not very fierce and even a little bit clumsy.</p><p>T devils are marsupials like kangaroos and koalas.  That the mothers carry their babies around in a pouch.   From an early age, young T devils practice T devil table manners – like how to growl and tussle for a good spot at the carcass.</p><p>Young Tasmanian devils have the advantage of being able to climb trees to help smiff out carcasses and to get away from bigger T devils.</p>]]></text>
				<media/>
			</content>
			//*/
			
			cs._id = value.@id;
			cs._iconUri = value.@iconUri;
			cs._title = value.title.text();
			cs._navigationLabel = value.navigationLabel.text();
			cs._summary = value.summary.text();
			cs._text = value.text.text();
			
			var mediaList:XMLList = value.media;
			var media:Array = [];
			for each( var m:XML in mediaList..mediaItem )
			{
				var mi:MediaItem = MediaItem.fromXml( m );
				media.push( mi );
			}
			cs._media = media;
			
			return cs;
		}
		
		public function get id() : uint { return _id; }
		public function get iconUri() : String { return _iconUri; }
		public function get title() : String { return _title; }
		public function get navigationLabel() : String { return _navigationLabel; }
		public function get summary() : String { return _summary; }
		public function get text() : String { return _text; }
		public function get paragraphs() : Array
		{
			// todo: chunk text into paragraphs, by splitting on the <p> tags
			return [];
		}
		public function get media() : Array { return _media; }
		
		private var _id:uint;
		private var _iconUri:String;
		private var _title:String;
		private var _navigationLabel:String;
		private var _summary:String;
		private var _text:String;
		private var _media:Array;
	}
}