package com.wildkratts.creaturepedia.api
{
	import flash.net.URLVariables;
	import flash.utils.escapeMultiByte;
	
	public class CreaturepediaRequestArguments
		extends Object
	{
		public function CreaturepediaRequestArguments( action:RequestAction, arguments:Object = null )
		{
			super();
			_action = action;
			_arguments = arguments;
		}
		
		public function getUrlVariables() : URLVariables
		{
			var uv:URLVariables = new URLVariables();
			uv.action = _action;
			uv.platform = _platform;
			if( _pagingEnabled )
			{
				uv.pageIndex = _pageIndex;
				uv.pageSize = _pageSize;
			}
			
			if( _arguments != null )
			{
				for( var prop:String in _arguments )
				{
					uv[ prop ] = _arguments[ prop ];
				}
			}

			return uv;
		}
		
		public function get pagingEnabled() : Boolean { return _pagingEnabled; }
		public function set pagingEnabled( value:Boolean ) : void
		{
			_pagingEnabled = value;
			//super.setPropertyIsEnumerable( "pageIndex", value );
			//super.setPropertyIsEnumerable( "pageSize", value );
		}
		
		public function get action() : RequestAction { return _action; }
		public function get platform() : String { return _platform; }
		public function get arguments() : Object { return _arguments; }
		public function get pageIndex() : uint { return _pageIndex; }
		public function set pageIndex( value:uint ) : void { _pageIndex = value; }
		public function get pageSize() : uint { return _pageSize; }
		public function set pageSize( value:uint ) : void { _pageSize = value; }
		
		private var _action:RequestAction;
		private var _platform:String = "Web";
		private var _pageIndex:uint = 0;
		private var _pageSize:uint = 20;
		private var _pagingEnabled:Boolean = false;
		private var _arguments:Object;
	}
}