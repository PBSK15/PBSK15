(function(win)
{
	var sbe = 
	{
		device : null,

		// we don't like cache
		nocache : document.location.href.match(/\?nocache/) ? '?' + Date.now() : '',

		// alias of getElementById OR getElementsByTagName
		$ : function(selector) { return selector.charAt(0) == '#' ? document.getElementById(selector.substr(1)) : document.getElementsByTagName(selector); },

		// creates an element
		$new : function(name) { return document.createElement(name); },

		// copies an object
		copy : function(object) 
		{
			var i, l, c;
			
			if ( !object || typeof object != 'object' || object instanceof HTMLElement || object instanceof sbe.Class )
				return object;

			else if ( object instanceof Array ) 
			{
				i = 0;
				l = object.length;
				c = [];

				for ( ; i < l; i++ )
					c[i] = sbe.copy(object[i]);

				return c;
			}

			else 
			{
				c = {};

				for ( i in object )
					c[i] = sbe.copy(object[i]);

				return c;
			}
		},
		
		// merges two objects
		merge : function(original, extended) 
		{
			for ( var key in extended ) 
			{
				var ext = extended[key];

				if ( typeof ext != 'object' || ext instanceof HTMLElement || ext instanceof sbe.Class || ext === null )
					original[key] = ext;
				else 
				{
					if ( !original[key] || typeof original[key] != 'object' )
						original[key] = (ext instanceof Array) ? [] : {};

					sbe.merge(original[key], ext);
				}
			}

			return original;
		},

		bootDevice : function()
		{
			var dev = {};
			var ua = navigator.userAgent;

			dev.pixelRatio = win.devicePixelRatio || 1;
			dev.screen = { width : win.screen.availWidth * dev.pixelRatio, height : win.screen.availHeight * dev.pixelRatio };
			
			// ios
			dev.iPod = /ipod/i.test(ua);
			dev.iPhone = /iphone/i.test(ua);
			dev.iPad = /ipad/i.test(ua);
			dev.iOS = dev.iPhone || dev.iPad || dev.iPod;
			dev.iOSVersion = dev.iOS ? parseFloat(((ua.match(/os (\d+_\d+)?/i) || ['', ''])[1] + '').replace('_', '.')) : -1;

			// android/silk
			dev.kindle = /silk/i.test(ua);
			dev.android = /android/i.test(ua);
			dev.androidPhone = /(?=.*\bandroid\b)(?=.*\bmobile\b)/i.test(ua);
			dev.androidTablet = (!dev.androidPhone && /Android/i.test(ua)) || dev.kindle;
			dev.android = dev.androidPhone || dev.androidTablet;
			dev.androidVersion = parseFloat(ua.slice(ua.indexOf('Android') + 8));
			if ( isNaN(dev.androidVersion) )
				dev.androidVersion = 99;

			// win
			dev.winPhone = /(iemobile|windows phone)/i.test(ua);
			dev.winTablet = /(?=.*\bwindows\b)(?=.*\\btouch\b)/i.test(ua);

			// browser
			dev.chrome = ua.toLowerCase().indexOf('chrome') > -1;
			dev.safari = ua.toLowerCase().indexOf('safari') > -1;

			// misc
			dev.mobile = dev.iOS || dev.android || dev.winPhone || /mobile/i.test(ua);
			dev.tablet = dev.iPad || dev.androidTablet || dev.winTablet;
			dev.touchDevice = (('ontouchstart' in win) || (win.navigator.msMaxTouchPoints));
			dev.crosswalk = /crosswalk/i.test(ua);
			dev.cocoonJS = !!navigator.isCocoonJS;
			dev.ejecta = /ejecta/i.test(ua);

			// // add the meta viewport tag if not available
			var metaTags = sbe.$('meta');

			for ( var i = 0, viewportFound = false, metaTag; i < metaTags.length; i++ )
			{
				metaTag = metaTags[i];

				if ( metaTag.name == 'viewport' )
					viewportFound = true;
			}

			if ( !viewportFound )
			{
				var viewport = sbe.$new('meta');
				viewport.name = 'viewport';
				viewport.content = 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no';

				if ( dev.iOSVersion == 7.1 ) 
					viewport.content += ', minimal-ui';

				sbe.$('head')[0].appendChild(viewport);
			}

			// set it to sbe.device, finally
			sbe.device = dev;
		},

		bootNative : function()
		{
			Math.rand = function(min, max)
			{
				if ( min.isInt() && max.isInt() )
					return ~~(Math.random() * (max - min + 1)) + min;
				else 
					return (Math.random() * (max - min)) + min;
			};

			Math.distance = function(x1, y1, x2, y2, sqrt)
			{
				var x = x2 - x1, 
					y = y2 - y1,
					d = x * x + y * y;
				return !!sqrt ? Math.sqrt(d) : d;
			};

			Math.angle = function(x1, y1, x2, y2, deg)
			{
				var r = Math.atan2(y1 - y2, x1 - x2);
				return !!deg ? r.toDeg() : r;
			};

			Math.limit = function(n, min, max)
			{
				return n > max ? max : n < min ? min : n;
			};

			Math.lerp = function(current, target, time) { return current + time * (target - current); };

			Number.prototype.lerp = function(target, time) { return Math.lerp(this, target, time); };

			Number.prototype.limit = function(min, max) 
			{ 
				var n = this;
				if ( n < min ) n = min;
				if ( n > max ) n = max;
				return n;
			};

			Number.prototype.isInt = function() { return this % 1 === 0; };

			Number.prototype.toInt = function() { return (this | 0); };

			Number.prototype.toRad = function() { return (this / 180) * Math.PI; };

			Number.prototype.toDeg = function() { return (this * 180) / Math.PI; };

			String.prototype.trim = function() { return this.replace(/^\s+|\s+$/g, ''); };

			Object.defineProperty(Array.prototype, 'erase', 
			{ 
				value : function(item)
				{
					var index = this.indexOf(item);
					if ( index > -1 ) 
						this.splice(index, 1);
					return this;
				}
			});

			Object.defineProperty(Array.prototype, 'random',
			{
				value : function()
				{
					return this[Math.rand(0, this.length - 1)];
				}
			});

			Object.defineProperty(Array.prototype, 'shuffle',
			{
				value : function()
				{
					for ( var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x );
					return this;
				}
			});

			Object.defineProperty(Array.prototype, 'clone',
			{
				value : function()
				{
					return this.slice(0);
				}
			});

			Function.prototype.bind = Function.prototype.bind || function(object)
			{
				var t = this;
				return function() { return t.apply(object, arguments); };
			};
		},

		boot : function()
		{
			this.bootDevice();
			this.bootNative();
		},

		info : function()
		{
			console.log('CreateJS Build Date', createjs.EaselJS.buildDate);
			console.log('EaselJS', createjs.EaselJS.version, 'SoundJS', createjs.SoundJS.version, 'TweenJS', createjs.TweenJS.version, 'PreloadJS', createjs.PreloadJS.version);
		},

		init : function(bookClass, bookData)
		{
			// shorthand
			if ( !window.cjs )
				window.cjs = createjs;

			// setup VO
			sbe.vo = new sbe.VO();

			// setup the loader
			sbe.loader = new sbe.Loader(bookData.assetBasePath || '');

			// setup the system
			sbe.system = new sbe.System(bookClass, bookData);

			// start the input
			sbe.input = new sbe.Input(sbe.system.stage);
			sbe.input.bind(sbe.KEY.MOUSE1);
		}
	};

	// prep Class
	var initializing = false,
		fnTest = /xyz/.test(function(){}) ? /\bparent\b/ : /.*/,
		inject = function(prop) 
		{
			var proto = this.prototype,
				parent = {},
				name,
				ftn = function(propFtn, parFtn)
				{
					return function()
					{
						var tmp = this.parent;
						this.parent = parFtn;
						var ret = propFtn.apply(this, arguments);
						this.parent = tmp;
						return ret;
					};
				};

			for ( name in prop ) 
			{
				if ( typeof prop[name] == 'function' && typeof proto[name] == 'function' && fnTest.test(prop[name]) ) 
				{
					parent[name] = proto[name]; // save original function
					proto[name] = ftn(prop[name], parent[name]);
				}
				else
					proto[name] = prop[name];
			}
		};

	// The base Class implementation (does nothing)
	sbe.Class = function() {};

	// Create a new Class that inherits from this class
	sbe.Class.extend = function(prop)
	{
		var parent = this.prototype;

		// Instantiate a base class (but only create the instance,
		// don't run the init constructor)
		initializing = true;
		var prototype = new this();
		initializing = false;

		var ftn = function(propFtn, parFtn)
		{
			return function()
			{
				var tmp = this.parent;

				// Add a new .parent() method that is the same method
				// but on the super-class
				this.parent = parFtn;

				// The method only need to be bound temporarily, so we
				// remove it when we're done executing
				var ret = propFtn.apply(this, arguments);
				this.parent = tmp;

				return ret;
			};
		};

		// Copy the properties over onto the new prototype
		for ( var name in prop )
		{
			// Check if we're overwriting an existing function
			prototype[name] = typeof prop[name] == 'function' && typeof parent[name] == 'function' && fnTest.test(prop[name]) ? ftn(prop[name], parent[name]) : prop[name];
		}

		// The dummy class constructor
		function Class()
		{
			// All construction is actually done in the init method
			if ( !initializing )
			{
				// If this class has a staticInit method, invoke it
				// and check if we got something back. If not, the normal
				// constructor (init) is called.
				if ( this.staticInit ) 
				{
					var obj = this.staticInit.apply(this, arguments);
					if ( obj )
						return obj;
				}

				this.set = this.set || function(props)
				{
					for ( var p in props )
						this[p] = props[p];
					
					return this;
				};

				for ( var p in this ) 
					if ( typeof(this[p]) == 'object' )
						this[p] = sbe.copy(this[p]); // deep copy!

				if ( this.init )
					this.init.apply(this, arguments);
			}

			return this;
		}

		// Populate our constructed prototype object
		Class.prototype = prototype;

		// Enforce the constructor to be what we expect
		Class.prototype.constructor = Class;

		// And make this class extendable
		Class.extend = sbe.Class.extend;
		
		// allow injections
		Class.inject = inject;

		return Class;
	};

	// hopefully this var doesn't exist!
	if ( !win.sbe )
	{
		win.sbe = sbe;
		sbe.boot();
	}
	else
		throw 'Another var "sbe" exists in the global space?';

})(window);