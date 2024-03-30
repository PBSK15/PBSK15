package com.wildkratts.creaturepedia.api
{
	public class Trait
	{
		public function Trait()
		{
		}
		
		public static function fromXml( value:XML ) : Trait
		{
			var t:Trait = new Trait();
			
			t._name = value..name.text();
			t._value = value..value.text();
			t._description = value..meta.traitDescription.text();
			t._id = value.@id;
			t._ordinal = value.@ordinal;
			
			return t;
		}
		
		public function get id() : uint { return _id; }
		public function get name() : String { return _name; }
		public function get value() : String { return _value; }
		public function get description() : String { return _description; }
		public function get ordinal() : uint { return _ordinal; }
		
		private var _name:String;
		private var _value:String;
		private var _description:String;
		private var _id:uint;
		private var _ordinal:uint;
	}
}