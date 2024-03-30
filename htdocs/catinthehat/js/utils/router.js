//router.js
define([],function() {
	
	return function(views, defaultView, parent, context){
		
		var _viewClasses;
		var _defaultView;
		var _views = {};
		var _parent;
		var _current;
		var _context; 
		var _freezePop = true;
		
		var _urls = {
			'home': '/catinthehat/',
			'characters': '/catinthehat/characters/',
			'videos': '/catinthehat/video/',
			'games': '/catinthehat/games/',
			'tips': '/catinthehat/tips/', 
			'about': '/catinthehat/about/',
			'followme': '/catinthehat/games/deepseafollowme',
			'hermit': '/catinthehat/games/hermitshellgame',
			'seahorse': '/catinthehat/games/doyouseemyseahorse'
		}
		
		function openView(name, nopush){
			console.log(_urls[name]);
			//if(!nopush && history.pushState) history.pushState({name: name}, null, _urls[name]);
			if(_current != null) _views[_current].div().detach();
			_current = name;
			if(_views[name] == null) {
				console.log(name);
				var func = _viewClasses[name];
				_views[name] = new func();
				if(_views[name].setRouterFunction) {
					_views[name].setRouterFunction(route);
				}
			}	
			_context.update();
			_views[name].layout(_context);
			if(_views[name].run) _views[name].run();
			_views[name].layout(_context);
		}
		
		function route(name) {
			console.log('routing name: '+name);
			console.log('window.location.pathname');
			window.location = _urls[name];
			openView(name);
		}
		
		this.current = function(){
			return _current;
		}
		
		this.setViews = function(viewClasses){
			_viewClasses = viewClasses;
		}
		
		this.setParentDiv = function(div){
			if(div) _parent = div;
		}
		
		this.setContext = function(context){
			if(context) _context = context;
		}
		
		this.setDefaultView = function(name){
			if(name) _defaultView = name;
		}
		
		this.layout = function(context) {
			_context = context;
			if(_current && _views[_current]) _views[_current].layout(context);
		}
		
		this.listenTo = function(dispatchers) {
			for(var i = 0; i < dispatchers.length; i++){
				dispatchers[i].setRouterFunction(route);
			}
		}
		
		this.start = function() {
			var correctURL = false;
			var url = window.location.pathname + window.location.search;
			console.log('location: '+url);
			for(var key in _urls){
				if( url== _urls[key]) {
					page = key;
					correctURL = true;
				}
			}
			if(!correctURL) page = 'home';
			if(!_viewClasses[page]) page = _defaultView;
			//if (history.replaceState)
			//history.replaceState({name: page}, null, _urls[page]);
			console.log('opening view from start: ' +page);
			openView(page, true);
			
			setTimeout(function() { _freezePop = false }, 7000);
			
		}
		
		this.setViews(views);
		this.setDefaultView(defaultView);
		this.setParentDiv(parent);
		this.setContext(context);
		
	}

});