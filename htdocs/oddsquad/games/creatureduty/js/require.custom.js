function isEmpty ( value ) {
	return ( typeof ( value ) == String ( undefined ) || value == null )
}

var require = require || new function () {

	var _this = this;
	var _requiredScriptSet;
	var _isLoadingSet;
	var _config;

	function _construct () {

		_requiredScriptSet = [];
		_isLoadingSet = [];
		_config = { "baseUrl" : "", "paths" : {}, "alias" : {}, "debug" : false };

			// auto assign the base url, last script that has it is used
		var baseUrl;
		$ ( "script[data-base-url]").each ( function ( index, item ) {
			var $this = $ ( this );
			_config.baseUrl = ( isEmpty ( $this.attr ( "data-base-url" ) ) ) ? "" : $this.attr ( "data-base-url" );
		} );
	}

	function _isScriptLoaded ( scriptName ) {

		var scriptFound = false;
		for ( var i = 0; i < _requiredScriptSet.length; i++ ) 
			if ( scriptName == _requiredScriptSet [ i ].name )
				scriptFound = true;
		
			// this help prevent curcular dependecies... Well somewhat
		if ( _isLoadingSet.indexOf ( scriptName ) > -1 )
			scriptFound = true;
		

		return scriptFound;
	}

	function _getBase () {
		var baseUrl = _config.baseUrl;
		return ( baseUrl.substr ( -1 ) == "/" || baseUrl == "" ) ? baseUrl : baseUrl + "/"; 
	}

	function _getAliases ( scriptName ) {
		
		
		var alias = _config.alias [ scriptName ];

			// there's no alias so send back the script's url
		if ( scriptName instanceof Array ) {
			alias = scriptName;
		} else if ( isEmpty ( alias ) ) {
			alias = [ scriptName ];
		} else if ( typeof ( alias ) == "string" ) {
			alias = [ alias ];
		}

		return alias;
	}

	function _getScripts ( scriptName ) {

			// extract an alias if one is available
		var scriptSet = _getAliases ( scriptName );

			// let get magical. If a array is passed in we include the array
		for ( var i = 0; i < scriptSet.length; i++ ) { 
			scriptSet [ i ] = ( scriptSet [ i ].match ( /(.+?\/)*.+?\..+/ ) ) ? scriptSet [ i ] : scriptSet [ i ] + ".js";
		}

		return scriptSet;
	}

	function _includeDependencies ( response ) {
			// find any include and include those files
		var preprocessRegExp = /(require.include|require.config)\s*\(([\S\s]+?)\)\s*\;?/gi
		var result;

		while ( !isEmpty ( result = preprocessRegExp.exec ( response ) ) )
			eval ( result [ 0 ] );

	} 

	function _processScriptResponse ( responseText, scriptName, scriptURL ) {

			// first include any dependencies. Note this function is recursive
		_includeDependencies ( responseText );

			// now add any processing, mostly debug stuff
		return { "response" : responseText, "name" : scriptName, "url" : scriptURL };
	}

	function _addLoadedScript ( responseText, scriptName, scriptURL ) {

			// the scripts are store as the response, name, url
		_requiredScriptSet.push ( _processScriptResponse ( responseText, scriptName, scriptURL ) );
	}

	function _include ( scriptName, callback ) {

			// basic error tracking and checking if the file isw loaded
		if ( _isScriptLoaded ( scriptName ) || isEmpty ( scriptName ) ) {
			//if ( typeof ( callback ) != String ( undefined ) ) callback ();
			return;
		}
			// prevent circular dependencies
		_isLoadingSet.push ( scriptName );

		var baseUrl = _getBase ();
		var scriptURLSet = _getScripts ( scriptName );

		for ( var i = 0; i < scriptURLSet.length; i++ ) {
			var request = new XMLHttpRequest ();

			var scriptURL = baseUrl + scriptURLSet [ i ];

			request.open ( 'GET', scriptURL, false );  // `false` makes the request synchronous
			request.send ( null );

			if ( request.status === 200 ) {

	  				// mark the script as loaded so we don't load again later
	  			_addLoadedScript ( request.responseText, scriptName, scriptURL );

	  				// done loading the script we can remove it
	  			_isLoadingSet.splice ( _isLoadingSet.indexOf ( scriptName ), 1 );

			} else if ( request.status === 404 ) {
				alert ( "requir.include ()  script not found: " + scriptURL );
			}
		}

			// callback after file has been loaded
		
		if ( typeof ( callback ) != String ( undefined ) )
			callback ( scriptName [ i ] );
			
	}

	/* function _writeScript ( scriptName, callback ) {

			// basic error tracking and checking if the file isw loaded
		if ( _isScriptLoaded ( scriptName ) || typeof ( scriptName ) === String ( undefined ) )
			return;
		
			// special work around to write the script and let the browser load them
		var baseUrl = _getBase ();
		var scriptURLSet = _getScripts ( scriptName );

		for ( var i = 0; i < scriptURLSet.length; i++ ) {
			var scriptURL = baseUrl + scriptURLSet [ i ];
			_addLoadedScript ( "", scriptName, scriptURL );
		}

			// callback after file has been loaded
		if ( typeof ( callback ) != String ( undefined ) )
			callback ( scriptName [ i ] );
	} */

	_this.include = function ( script, callback ) {
			// point of entry. A bit abstract but it works. Sweep it under the rug... Just sweep! :P
		if ( script instanceof Array ) {
			for ( var i = 0; i < script.length; i++ ) {
				_include ( script [ i ] );
					// launch callback
				if ( typeof ( callback ) != String ( undefined ) )
					callback ( script [ i ] );
				
			}
		} else {
			_include ( script, callback );
		}
	}

	this.config = function ( config ) {
	
			// just loop through and overwrite properties
		for ( var property in config ) {
			_config [ property ] = config [ property ];
		}
	}

	this.compile = function () {

		 	// compile the code;
		var output = "";
		if ( _config.debug ) {
			for ( var i = 0; i < _requiredScriptSet.length; i++ ) {
				output += "<script type='text/javascript' src='" + _requiredScriptSet [ i ].url + "'></script>\n";
			}
		} else {
			output = "<script id='require_compiled'>";
			for ( var i = 0; i < _requiredScriptSet.length; i++ ) {
				output += _requiredScriptSet [ i ].response + "\n";
			}
			output += "</script>";
		}

		return output;
	}

	return _construct ();
}


	// as a courtesy let's load the file included in the data-main
var $script = $ ( "script#require_script" ); 

if ( $script.length == 1 ) {
	require.include ( $script.attr ( "data-main" ) );
} else {
	alert ( "<script id='require_script'> Not defined or define multiple times" )
}

document.write ( require.compile () );