/******************************************************************************

PBS KIDS JS Namespace.

This namespacing arrangement is designed to guard against PBS KIDS JS
accidentally clobbering producer, station or 3rd party JS that pre-exists a
deployment.

It's also designed not to clobber a pre-existing top-level PBS node. If such
a node exists, we simply add our KIDS node to it.

1] Don't do anything until init is called.
2] Only bring in what is needed.
3] Give callers a way to register a callback that will run after everything
    else here is done.

******************************************************************************/

if (typeof(this.PBS) === "undefined") {
    var PBS = {};
}
if (typeof(this.PBS.KIDS) === "undefined") {
    PBS.KIDS = {};
}

// At this point, we're sure PBS.KIDS exists.
// So, gracefuly put the following attributes inside of PBS.KIDS
(function() {
    var loader_attributes = {
        // The current version of this JS include.
        version: "2.0",

        debug: false,

        _deployment_uri: 'http://pbskids.org',

        // base represents the url to the current host, without site segment.
        base: undefined, // Set at run time.

        // cdn_host represents the host of our CDN.
        // cdn_host: "www-tc.pbskids.org",
		cdn_host: "pbskids.org",
        mobile_host: "m.pbskids.org",

        // cdn_base represents the base url to the CDN.
        cdn_base: undefined, // Set at run time.
        mobile_base: undefined,

        // Compute CDN base url based on host.
        _getBase: function () {
            this.protocol = window.location.protocol;
            this.host = window.location.host;
            this.base = this.protocol + "//" + this.host;
        },

        // Compute CDN base url based on host.
        _getCDNBase: function () {

            if (this.host.match(/.*ernie.*/)) {
                this.cdn_host = "ernie-tc.pbskids.org";
            }
            if (this.host.match(/.*soup.*/)) {
                this.cdn_host = "soup-tc.pbskids.org";
            }

            this.cdn_base = this.protocol + "//" + this.cdn_host;
        },

        _getMobileBase: function () {

            if (this.host.match(/.*ernie.*/)) {
                this.mobile_host = "m-dev.pbskids.org";
            }
            if (this.host.match(/.*soup.*/)) {
                this.mobile_host = "m-dev.pbskids.org";
            }

            this.mobile_base = this.protocol + "//" + this.mobile_host;
        },

        _possible_dependencies: undefined,

        _initPossibleDependencies: function () {
            var possible_dependencies = [
                {
            'name': 'pk-sponsor-css', 
            'type': 'css', 
            'src': this.cdn_base +  '/includes/pk-sponsor/styles/pk-sponsor-styles.css',
            'callback': function () {
                
            }
                },

                {
            'name': 'pk-footer-css', 
            'type': 'css', 
            'src': this.cdn_base +  '/includes/footer/pk-footer.css',
            'callback': function () {
                
            }
                },

                {
            'name': 'fancybox-css', 
            'type': 'css', 
            'src': this.cdn_base +  '/survey/2011/js/fancybox/jquery.fancybox-1.3.4.css',
            'callback': function () {
                
            }
                },

                { 
                    'name': 'jQuery-1.6.2-noconflict', 
                    'type': 'js', 
                    'src': 'http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js',
                    'callback': function () {
                        // relinquish control of jQuery top level symbols.
                        if (this.debug) {
                            console.log('jQuery-1.6.2 loaded');
                        }
                        // SCOPE
                        PBS.KIDS.$ = window.jQuery.noConflict(true);
                    }
                },

                { 
                    'name': 'jQuery-1.4.2', 
                    'type': 'js', 
                    'src': 'http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js',
                    'callback': function () {
                    }
                },

                { 
                    'name': 'jQuery-1.4.4', 
                    'type': 'js', 
                    'src': 'http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js',
                    'callback': function () {
                    }
                },
            
                { 
            'name': 'jQuery-1.4.1', 
            'type': 'js', 
            'src': this.cdn_base +  '/includes/javascript/jquery/jquery-1.4.1.min.js',
            'callback': function () {
                
            }
                },

                {
            'name': 'jquery.cookie-survey', 
            'type': 'js', 
            'src': this.cdn_base +  '/survey/2011/js/pbskids.jquery.cookie.js',
            'callback': function () {
                
            }
                },

                {
            'name': 'jquery.cookie', 
            'type': 'js', 
            'src': this.cdn_base +  '/includes/javascript/jquery.cookie.js',
            'callback': function () {
                
            }
                },

            {
            'name': 'mobile-redirect',
            'type': 'js',
            'src': this.cdn_base +  '/includes/javascript/mobile-redirection.js',
            'callback': function(){
            }		
            },


            {
            'name': 'jquery.flash',
            'wait': false, 
            'type': 'js',
            'src': this.cdn_base +  '/includes/javascript/jquery.flash.min.js',
            'callback': function(){
                
            }		
            },

            {
            'name': 'soundmanager',
            'type': 'js',
            'src': this.cdn_base +  '/scripts/soundmanager2/script/soundmanager2-nodebug-jsmin.js',
            'callback': function(){
                
            }		
            },

            {
            'name': 'jquery.colorbox',
            'type': 'js',
            'src': this.cdn_base +  '/scripts/colorbox/jquery.colorbox.js',
            'callback': function(){
            }		
            },

            {
            'name': 'iscroll',
            'type': 'js',
            'src': this.cdn_base +  '/mobile/js/iscroll.js',
            'callback': function(){
            }		
            },		

            {
            'name': 'swfobject-2.2',
            'type': 'js',
            'src': 'http://ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject_src.js',
            'callback': function(){
            }		
            },

            {
            'name': 'auth',
            'type': 'js',
            'src': this.cdn_base +  '/includes/auth/auth.js',
            'callback': function(){
            }		
            },

            {
            'name': 'games',
            'type': 'js',
            'src': this.cdn_base +  '/games/js/global.js',
            'callback': function(){
            }		
            },

            {
            'name': 'textresize',
            'wait': false, 
            'type': 'js',
            'src': this.cdn_base +  '/includes/javascript/textresizedetector.min.js',
            'callback': function(){
                
            }		
            },
            
            {
            'name': 'homepage.size',
            'wait': false, 
            'type': 'js',
            'src': this.cdn_base +  '/includes/javascript/homepage-size.min.js',
            'callback': function(){
                
            }		
            },
            
            {
            'name': 'jquery.tablesorter',
            'type': 'js',
            'src': this.cdn_base +  '/whiteboard/scripts/jquery.tablesorter.min.js',
            'callback': function(){}		
            },		

            {
            'name': 'pk-footer',
            'wait': false, 
            'type': 'js',
            'src': this.cdn_base +  '/includes/footer/pk-footer.js',
            'callback': function(){
                
            }		
            },
            
            {
            'name': 'homepage-desert',
            'wait': false, 
            'type': 'js',
            'src': this.cdn_base +  '/includes/javascript/homepage-desert.js',
            'callback': function(){
                
            }		
            },

            {
            'name': 'webonauts',
            'type': 'js',
            'src': this.cdn_base +  '/webonauts/webonauts.js',
            'callback': function(){
            }		
            },

                {
            'name': 'campaigns',
            'type': 'js',
            'src': this.cdn_base +  '/includes/pk-sponsor/campaigns.js',
            'callback': function(){
                var re = /preview\/home\/([^\/]*)\//.exec(window.location.pathname);
                    if(re){
                var campaign_slug = re[1];
                $.ajax({'url': '/kidshomepage/sponsorship/campaign/' + campaign_slug + '.json',
                    'async': false,
                    'dataType': 'json',
                    'success': function(data) {PBS.KIDS.campaigns = [] ; PBS.KIDS.campaigns[0] = data}			
                       })
                    }
            }		
                },

            {
            'name': 'campaign-sampler',
            'type': 'js',
            'src': this.cdn_base +  '/includes/pk-sponsor/campaign-sampler.js',
            'callback': function(){
                
            }		
            },

            {
            'name': 'pk-sponsor',
            'type': 'js',
            'src': this.cdn_base +  '/includes/pk-sponsor/pk-sponsor-scripts.js',
            'callback': function(){
                
            }		
            },

            {
            'name': 'bridge.urls',
            'type': 'js',
            'src': this.cdn_base +  '/includes/javascript/bridge.urls.js',
            'callback': function(){
                
            }		
            },
            
            {
            'name': 'bridge',
            'type': 'js',
            'src': this.cdn_base +  '/includes/javascript/bridge.js',
            'callback': function(){
                
            }		
            },	

            {
            'name': 'smartboard',
            'type': 'js',
            'src': this.cdn_base +  '/whiteboard/scripts/smartboard.js',
            'callback': function(){}		
            },
            
                {
                    'name': 'json2', 
                    'type': 'js', 
                    'src': this.cdn_base + '/json2.js',
                    'callback': function () {
                        // relinquish control of JSON top level symbols.
                        if (this.debug) {
                            console.log('json2 loaded');
                        }
                        //PBS.KIDS.JSON = window.JSON;
                        //PBS.KIDS.JSON = PBS.KIDS.$.extend(true, {}, window.JSON);
                        //window.JSON = undefined;
                    }
                },

            {
            'name': 'mobile-scripts',
            'type': 'js',
            'src': this.cdn_base +  '/mobile/js/scripts.js',
            'callback': function(){
            }		
            },

                {
                    'name': 'progress-0.1', 
                    'type': 'js', 
                    'src': this.cdn_base + '/progress-0.1.js',
                    'callback': function () {
                        if (this.debug) {
                            console.log('progress-0.1 loaded');
                        }
                    }
                },
            ];
            this._possible_dependencies = possible_dependencies;
        },

        _config_dependencies: {
            'debug': [],
            'progress': [
                'jQuery-1.6.2',
                'json2',
                'progress-0.1'
            ],
            'survey': [
                'jQuery-1.6.2'
            ],

        'footer': [
            'jQuery-1.4.4',
            'pk-footer'
        ],

        'homepage': [
            'campaigns',
                'campaign-sampler',
                'pk-sponsor',
            'bridge.urls',
                    'bridge',
            'pk-footer'
        ],

        'gamespage': [
            'games',
            'mobile-redirect'
        ],

        'whiteboard': [
                    'jQuery-1.4.4',
                    'jquery.tablesorter',
            'smartboard'
            ],

        'webonauts': [
                    'jQuery-1.4.2',
            'swfobject-2.2',
            'webonauts'
            ],

        'bridge': [
            'jQuery-1.4.4',
            'bridge.urls',
            'bridge'
        ],
        
        'sponsorship': [
            'jquery.cookie',	
            'campaigns',
            'campaign-sampler',
            'pk-sponsor'
        ],

        'go-login': [
            'jQuery-1.6.2',
            'soundmanager',
            'jquery.colorbox',
            'auth'
        ],

        'bridge+login':[
            'jQuery-1.4.2',
            'soundmanager',
            'jquery.colorbox',
            'auth',
                'bridge.urls',
                'bridge'
        ],

        'mobile': [
            'jQuery-1.4.4',
            'iscroll',
            'mobile-scripts'
        ],

        'island': [
            'bridge.urls',
            'bridge',
            'campaigns',
            'campaign-sampler',
            'pk-sponsor'
        ]
        },

        _queued_dependencies: {},
        
        addPossibleDependency: function (dependency) {
            this._possible_dependencies.push(dependency);
        },
        
        addDependency: function (dependency_index) {
            this._dependencies[dependency_index] = this._possible_dependencies[dependency_index];
        },
        
        getDependency: function (key) {
            for (var i=0; i<this._possible_dependencies.length; i++) {
                var dependency = this._possible_dependencies[i];
                if (key == dependency['name'])
                return i;
            }
        },

        queueDependencies: function (config_key) {
            var dependency_keys = this._config_dependencies[config_key];
            for (var i=0; i<dependency_keys.length; i++) {
                var dependency_key = dependency_keys[i];
                if (!(dependency_key in this._queued_dependencies)) {
                    this._queued_dependencies[dependency_key] = true;
                    var dependency_index = this.getDependency(dependency_key);
                    this.addDependency(dependency_index);
                }
            }

        
        },
        
        _dependencies: [],

        //wait_jobs: [],

        // This is a generic class that manages a 'wait' job: an arbitrary job that runs
        // after an arbitrary condition becomes true.
        // The job itself and the condition that needs to be true for the job to run are
        // both passed into the constructor as arbitrary functions.
        // The 'ms' attribute is the periodicity that the wait job waits between checks
        // as to whether or not the condition has yet become true.
        _waitUntil: function (name, condition, func, ms) {
        // TODO Allow a max run time to be specified in the constructor.

            // Build the job from args passed to the constructor.
            this.job = {
                'name': name,
                'function': func,
                'condition': condition,
                'ms': ms
            };
            var self;

            // Start the wait job running.
            this.go = function () {
                // We need to make an explicit reference to this inside self to keep
                // control over our place in the scope chain.
                // ( setInterval will run check with window in this, and we don't want
                // that. We want this in this ;) )
                self = this;
                // Start periodic checking.
                var interval = window.setInterval(check, this.job['ms']);
                this.job['interval'] = interval;
            };

            // Determine if the supplied condition has become true.
            function check() {
                if (self.job['condition']()) {
                    // If it has, clear the periodic checks, run the job, and clear our
                    // reference to this.
                    self.clear();
                    self.job['function']();
                    self = undefined;
                }
            };

            this.clear = function () {
                window.clearInterval(self.job['interval']);
            }

        },

        _loadJS: function (src, callback) {
            var head = document.getElementsByTagName('head')[0];
            var js = document.createElement('script');
            js.setAttribute('type', 'text/javascript');
            js.setAttribute('src', src);
            head.appendChild(js);

            // IE
            js.onreadystatechange = function () {
                if (js.readyState == 'loaded' || js.readyState == 'complete') {
                    if (callback) {
                        callback();
                    }
                }
            }

            // FF, Safari
            js.onload = function () {
                callback();
            }
        },

        _loadCSS: function (src, callback) {
            var head = document.getElementsByTagName('head')[0];
            var css = document.createElement('link');
            css.setAttribute('type', 'text/css');
            css.setAttribute('href', src);
            css.setAttribute('media', 'screen');
            css.setAttribute('rel', 'stylesheet');

            head.appendChild(css);

            var html = document.getElementsByTagName('html')[0];
            var img = document.createElement('img');
            img.onerror = function () {
                if (callback) {
                    callback();
                }
                html.removeChild(img);
            }

            html.appendChild(img);
            img.src = src;
        },

        //Compact sparse dependencies array
        _shrink_dependencies: function () {
        var temp_dependencies = [];
        var dependencies = this._dependencies;
        for (var i = 0; i < dependencies.length; i++) {
            if (typeof(dependencies[i]) != "undefined"){
            temp_dependencies.push(dependencies[i])
            }
        }
        this._dependencies = temp_dependencies;
        },


        // Determine dependencies.
        _determineDependencies: function () {
            for (key in this.config) {
                this.queueDependencies(key);
            }
        this._shrink_dependencies();
            this._loadDependencies();
        },

        // Load dependencies.
        _loadDependency: function () {
            // grab the first
            var dependency = this._dependencies.shift();

            var name = dependency['name'];
            var type = dependency['type'];
            var src = dependency['src'];
            var lib_callback = dependency['callback'];

            var callback = function () {
                lib_callback();
                // Call this explicitly so it will run in intended scope
                // independent of caller scope.
                PBS.KIDS._loadDependencies();
            }

            if (type == 'js') {
                this._loadJS(src, callback);
            } else if (type == 'css') {
                this._loadCSS(src, callback);
            }
        },

        _loadDependencies: function () {
            if (this._dependencies.length) {
                this._loadDependency();
            } else {
                this.initCallback();
            }
        },

        _initDebug: function () {
            if (('debug' in this.config) && (this.config['debug'] == true)) {
                this.debug = true;
            }
        },

        // Initialization driver.
        init: function (config) {
            this.config = config;
            this._getBase();
            this._getCDNBase();
            this._getMobileBase();
            this._initDebug();
            this._initPossibleDependencies();
            this._determineDependencies();
        },

        initCallback: function () {
        }
    }

    for (var attribute in loader_attributes) {
        PBS.KIDS[attribute] = loader_attributes[attribute];
    }
})();


PBS.KIDS.init(config);
