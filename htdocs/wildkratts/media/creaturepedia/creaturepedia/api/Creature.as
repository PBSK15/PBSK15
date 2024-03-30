package com.wildkratts.creaturepedia.api
{
	import com.wildkratts.creaturepedia.api.AnimalFamily;
	import com.wildkratts.creaturepedia.api.CreatureFact;
	import com.wildkratts.creaturepedia.api.ContentSection;
	import com.wildkratts.creaturepedia.api.CreatureSummary;
	import com.wildkratts.creaturepedia.api.Habitat;
	import com.wildkratts.creaturepedia.api.MediaItem;
	import com.wildkratts.creaturepedia.api.Region;
	import com.wildkratts.creaturepedia.api.Trait;
	
	public class Creature
	{
		public function Creature()
		{
		}
		
		public static function fromXml( value:XML ) : Creature
		{
			trace( "Creature::fromXml()" );
			var c:Creature = new Creature();
			
			// SUMMARY
			var summary:CreatureSummary = CreatureSummary.fromXml( value..creatureSummary[ 0 ] );
			c._summary = summary;
			trace( "\tsummary.name =>", summary.name );
			
			// TRAITS
			var traitList:XMLList = value..traits;
			var traits:Array = [];
			for each( var t:XML in traitList )
			{
				var trait:Trait = Trait.fromXml( t );
				traits.push( trait );
			}
			c._traits = traits;
			
			// ANIMAL FAMILIES
			var animalFamilyList:XMLList = value..animalFamilies;
			var families:Array = [];
			for each( var af:XML in animalFamilyList )
			{
				var family:AnimalFamily = AnimalFamily.fromXml( af );
				families.push( family );
			}
			c._animalFamilies = families;
			
			// HABITATS
			var habitatList:XMLList = value..habitats;
			var habitats:Array = [];
			for each( var h:XML in habitatList )
			{
				var habitat:Habitat = Habitat.fromXml( h );
				habitats.push( habitat );
			}
			c._habitats = habitats;
			
			// REGIONS
			var regionList:XMLList = value..regions;
			var regions:Array = [];
			for each( var r:XML in regionList )
			{
				var region:Region = Region.fromXml( r );
				regions.push( region );
			}
			c._regions = regions;
			
			// CONTENT
			var contentList:XMLList = value.content;
			var contentSections:Array = [];
			for each( var contentData:XML in contentList..content )
			{
				var content:ContentSection = ContentSection.fromXml( contentData );
				contentSections.push( content );
			}
			c._content = contentSections;
			
			// MEDIA
			var mediaList:XMLList = value..media;
			var mediaItems:Array = []; 
			for each( var m:XML in mediaList..mediaItem )
			{
				var mi:MediaItem = MediaItem.fromXml( m );
				mediaItems.push( mi );
			}
			c._media = mediaItems;
			
			var factList:XMLList = value..facts;
			var facts:Array = [];
			for each( var f:XML in factList..creatureFact )
			{
				var cf:CreatureFact = CreatureFact.fromXml( f );
				facts.push( cf );
			}
			c._facts = facts;
			
			
			return c;
		}
		
		public function get id() : uint { return _summary.id; }
		public function get name() : String { return _summary.name; }
		public function get hasGame() : Boolean { return _summary.hasGame; }
		public function get gameUri() : String { return _summary.gameUri; }
		public function get heroImages() : Array { return _summary.heroImages; }
		public function get thumbnailUri() : String { return _summary.thumbnailUri; }
		
		public function get summary() : CreatureSummary { return _summary; }
		public function get regions() : Array { return _regions; }
		public function get habitats() : Array { return _habitats; }
		public function get animalFamilies() : Array { return _animalFamilies; }
		public function get traits() : Array { return _traits; }
		public function get content() : Array { return _content; }
		public function get media() : Array { return _media; }
		public function get facts() : Array { return _facts; }
		
		
		private var _summary:CreatureSummary;
		private var _regions:Array;
		private var _habitats:Array;
		private var _animalFamilies:Array;
		private var _traits:Array;
		private var _content:Array;
		private var _media:Array;
		private var _facts:Array;
	}
}