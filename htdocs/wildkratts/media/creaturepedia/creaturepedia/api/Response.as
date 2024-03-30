package com.wildkratts.creaturepedia.api
{
	public class Response extends Object
	{
		public function Response( request:Request )
		{
			super();
		}
		
		private var _pageIndex:uint;
		private var _pageSize:uint;
		private var _pageCount:uint = 0;
		private var _requestAction:RequestAction;
		private var _data:XML;
	}
}