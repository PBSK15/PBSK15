/******************************************************************************

PBS KIDS JS Namespace.

This namespacing arrangement is designed to guard against PBS KIDS JS
accidentally clobbering producer, station or 3rd party JS that pre-exists a
deployment.

It's also designed not to clobber a pre-existing top-level PBS node. If such
a node exists, we simply add our KIDS node to it.

******************************************************************************/

if (!this.PBS) {
    var PBS = {};

    if ( typeof PBS.KIDS == 'undefined' ){
    PBS.KIDS = {}
    }
}

(function(){
    var loader_attributes = {
        // The current version of this JS include.
        version: "1.0",
        
        // base represents the url to the current host, without site segment.
        base: undefined, // Set at run time.
        
        // cdn_host represents the host of our CDN.
        //cdn_host: "www-tc.pbskids.org",
		cdn_host: "www.pbskids.org",
        
        // cdn_base represents the base url to the CDN.
        cdn_base: undefined, // Set at run time.
        
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
        
        init: function () {
            this._getBase();
            this._getCDNBase();
        }
    }

    for (var attribute in loader_attributes) {
       PBS.KIDS[attribute] = loader_attributes[attribute];
    }
})();

PBS.KIDS.init();

// Run any callbacks registered by a site.
if (this.siteLoad) {
    this.siteLoad();
}

//alert(PBS.KIDS.cdn_base);
//alert(PBS.KIDS.base);
