package com.wildkratts.creaturepedia.api
{
	import com.wildkratts.creaturepedia.api.events.CreaturepediaEvent;
	import com.wildkratts.shell.api.WKShellAPI;
	
	import flash.events.Event;
	import flash.events.EventDispatcher;
	import flash.events.IOErrorEvent;
	import flash.events.ProgressEvent;
	import flash.net.URLLoader;
	import flash.net.URLLoaderDataFormat;
	import flash.net.URLRequest;
	import flash.net.URLRequestMethod;
	import flash.net.URLVariables;

	public class Request
		extends EventDispatcher
	{
		protected static const MAX_ATTEMPTS:int = 5;
		
		
		
		public function Request( arguments:CreaturepediaRequestArguments )
		{
			_arguments = arguments;
		}
		
		public static function getRandomCreaturesRequest( count:uint ): Request
		{
			var props:Object = { count: count };
			var args:CreaturepediaRequestArguments = new CreaturepediaRequestArguments( RequestAction.GET_RANDOM_CREATURES, props );
			var request:Request = new Request( args );
			
			return request;
		}
		
		public static function getFeaturedCreatureRequest() : Request
		{
			var args:CreaturepediaRequestArguments = new CreaturepediaRequestArguments( RequestAction.GET_FEATURED_CREATURE );
			var request:Request = new Request( args );
			return request;
		}
		
		public static function getCreatureByIdRequest( creatureId:uint, relatedIds:Array ) : Request
		{
			var props:Object = { id: creatureId, related: relatedIds.join(',') };
			var args:CreaturepediaRequestArguments = new CreaturepediaRequestArguments( RequestAction.GET_CREATURE_BY_ID, props );
			var request:Request = new Request( args );
			
			return request;
		}
		
		public static function getAnimalFamiliesRequest() : Request
		{
			var args:CreaturepediaRequestArguments = new CreaturepediaRequestArguments( RequestAction.GET_ANIMAL_FAMILIES );
			var request:Request = new Request( args );
			return request;
		}
		
		public static function getHabitatsRequest() : Request
		{
			var args:CreaturepediaRequestArguments = new CreaturepediaRequestArguments( RequestAction.GET_HABITATS );
			var request:Request = new Request( args );
			return request;
		}
		
		public static function getRegionsRequest() : Request
		{
			var args:CreaturepediaRequestArguments = new CreaturepediaRequestArguments( RequestAction.GET_REGIONS );
			var request:Request = new Request( args );
			return request;
		}
		
		public static function getCreaturesForHabitatRequest( habitatId:uint ) : Request
		{
			var props:Object = { id: habitatId };
			var args:CreaturepediaRequestArguments = new CreaturepediaRequestArguments( RequestAction.GET_CREATURES_FOR_HABITAT, props );
			var request:Request = new Request( args );
			return request;
		}
		
		public static function getCreaturesForAnimalFamilyRequest( animalFamilyId:uint ) : Request
		{
			var props:Object = { id: animalFamilyId };
			var args:CreaturepediaRequestArguments = new CreaturepediaRequestArguments( RequestAction.GET_CREATURES_FOR_ANIMAL_FAMILY, props );
			var request:Request = new Request( args );
			return request;
		}
		
		public static function getCreaturesForRegionRequest( regionId:uint ) : Request
		{
			var props:Object = { id: regionId };
			var args:CreaturepediaRequestArguments = new CreaturepediaRequestArguments( RequestAction.GET_CREATURES_FOR_REGION, props );
			var request:Request = new Request( args );
			return request;
		}
		
		public static function getSearchRequest( searchQuery:String ) : Request
		{
			var props:Object = { q: searchQuery };
			var args:CreaturepediaRequestArguments = new CreaturepediaRequestArguments( RequestAction.SEARCH, props );
			var request:Request = new Request( args );
			return request;
		}
		
		public function get hasData() : Boolean { return _data != null; }
		public function get data() : XML { return _data; }
		public function get arguments() : CreaturepediaRequestArguments { return _arguments; }
		
		public function load() : Boolean
		{
			if( _loader != null )
			{
				// means we're already in the middle of a request, so bug out
				return false;
			}
			
			if( _arguments == null )
			{
				throw new Error( "Arguments must not be null [see Request.@ctor]." );
			}
			
			_data = null;
			_loader = new URLLoader();
			
			var url:String = Configuration.API_ROOT + Configuration.API_PATH; 
			
			if ( url.substr(0, 7) != 'http://' )
			{
				url = WKShellAPI.instance.urlRoot + url;
			}
			
			var request:URLRequest = new URLRequest( url );
			request.method = URLRequestMethod.GET;
			request.data = _arguments.getUrlVariables();
			
			_loader.dataFormat = URLLoaderDataFormat.TEXT;
			
			_loader.addEventListener( Event.COMPLETE, loader_loaded, false, 0, true );
			_loader.addEventListener( IOErrorEvent.IO_ERROR, loader_ioError, false, 0, true );
			
			
			_loader.load( request );
			return true;
		}
		
		public function dispose() : void
		{
			if( _loader != null )
			{
				try
				{
					_loader.close();
				}
				catch( e:Error )
				{
					/* swallow the error (only happens if the loader isn't loading something */
				}
				_loader = null;
				_data = null;
				_arguments = null;
			}
		}
		
		private var _loader:URLLoader;
		private var _arguments:CreaturepediaRequestArguments;
		private var _data:XML;
		private var _attempts:int = 0;
		
		
		private function loader_loaded( evt:Event ) : void
		{
			var data:* = _loader.data;
			
			_loader = null;
			
			try
			{
				_data = new XML( data );
				dispatchEvent( new CreaturepediaEvent( CreaturepediaEvent.REQUEST_COMPLETE ) );
			}
			catch ( e:Error )
			{
				handleError('Data not valid XML: ' + data);
			}
		}
		
		
		private function loader_ioError( evt:IOErrorEvent ) : void
		{
			_loader = null;
			
			dispatchEvent( new CreaturepediaEvent( CreaturepediaEvent.REQUEST_ERROR ) );
			
			handleError(evt.toString());
			
		}
		
		private function handleError(message:String):void
		{
			_attempts++;
			
			if ( _attempts < MAX_ATTEMPTS )
			{
				load();	
			}
			else
			{
				dispatchEvent( new CreaturepediaEvent( CreaturepediaEvent.REQUEST_GAVE_UP ) );
				
				// throw a tantrum
				//throw new Error('A Creaturepedia request encountered an unrecoverable error while loading. ' + message);
			}
		}
	}
}