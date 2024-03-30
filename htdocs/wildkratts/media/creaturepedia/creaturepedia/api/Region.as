package com.wildkratts.creaturepedia.api
{
	public class Region
	{
		public function Region()
		{
			
		}
		
		public static function fromXml( value:XML ) : Region
		{
			var a:Region = new Region();
			a._id = value.@id;
			a._name = value..name.text();
			a._description = value..description.text();
			return a;
		}
		
		public function get id() : uint { return _id; }
		public function get name() : String { return _name; }
		public function get description() : String { return _description; }
		
		private var _id:uint;
		private var _name:String;
		private var _description:String;
	}
}