(function(require, define, factory) {
    if (typeof define == 'function' && define.amd) {
        define(['jquery', 'uuid'], factory);
    } else {
        factory(window.jQuery, window.UUID);
    }
} (PBS.KIDS.require, PBS.KIDS.define, function($, UUID) {
    PBS.KIDS.utils = {
        /*************************************************************************/
        /*
         /* Takes: null
         /* Returns: UUID
         /*
         /*Functions to generate unique GUID, based on UUID.js
         /*
         /*************************************************************************/
        uuid: function() {
            return UUID.genV4().hexString + UUID.genV4().hexString;
        },

        /***************************************************************/
        // Set a cookie with name and value which expires in specified milliseconds
        // name: cookie name
        // value: cookie value
        // expireInMilliSeconds: cookie expire time in milliseconds
        // Returns: null
        /***************************************************************/
        setCookie: function(name, value, expireInMilliSeconds) {
            if (expireInMilliSeconds) {
                var date = new Date();
                date.setTime(date.getTime() + expireInMilliSeconds);
                var expires = '; expires=' + date.toGMTString();
            } else {
                var expires = '';
            }
            document.cookie = name + '=' + value + expires + '; path=/';
        },

        /***************************************************************/
        // deletes the cookie
        // name: cookie name
        // Returns: null
        /***************************************************************/
        deleteCookie: function(name) {
            PBS.KIDS.utils.setCookie(name, '', -1);
            PBS.KIDS.utils.log("cookie deleted",name);
        },

        /***************************************************************/
        //Get cookie value for the specified name
        // name: cookie name
        // Returns: cookie value if cookie exists else 'null'
        /***************************************************************/
        getCookie: function(name) {
            var cookies = document.cookie.split(";");
            for(var i=0;i<cookies.length;i++) {
                var keyValue = cookies[i].split("=");
                if($.trim(keyValue[0]) === $.trim(name))
                    return keyValue[1];
            }
            return null;
        },

        /***************************************************************/
        //Logger class
        /***************************************************************/
        log: function() {
            var PBS_kids_debug = false;

            if(PBS_kids_debug){
                if(window.console){
                    if (window.console.log.apply === undefined){ // For IE
                        var str='';
                        for(var i=0; i<arguments.length; i++){
                            str += arguments[i] + " ";
                        }
                        window.console.log(str);
                    }
                    else // For chrome, FF and Safari
                        window.console.log.apply(window.console, arguments);
                }
                else if (window.debug){ // For older version of IE
                    window.debug.log.apply(debug, arguments);
                }
            }
        },
        platformIdentify :  {
            init: function () {
                this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
                this.version = this.searchVersion(navigator.userAgent)
                    || this.searchVersion(navigator.appVersion)
                    || "an unknown version";
                this.OS = this.searchString(this.dataOS) || "an unknown OS";
            },
            searchString: function (data) {
                for (var i=0;i<data.length;i++) {
                    var dataString = data[i].string;
                    var dataProp = data[i].prop;
                    this.versionSearchString = data[i].versionSearch || data[i].identity;
                    if (dataString) {
                        if (dataString.indexOf(data[i].subString) != -1)
                            return data[i].identity;
                    }
                    else if (dataProp)
                        return data[i].identity;
                }
            },
            searchVersion: function (dataString) {
                var index = dataString.indexOf(this.versionSearchString);
                if (index == -1) return;
                return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
            },
            dataBrowser: [
                {
                    string: navigator.userAgent,
                    subString: "Chrome",
                    identity: "Chrome"
                },
                {   string: navigator.userAgent,
                    subString: "OmniWeb",
                    versionSearch: "OmniWeb/",
                    identity: "OmniWeb"
                },
                {
                    string: navigator.vendor,
                    subString: "Apple",
                    identity: "Safari",
                    versionSearch: "Version"
                },
                {
                    prop: window.opera,
                    identity: "Opera",
                    versionSearch: "Version"
                },
                {
                    string: navigator.vendor,
                    subString: "iCab",
                    identity: "iCab"
                },
                {
                    string: navigator.vendor,
                    subString: "KDE",
                    identity: "Konqueror"
                },
                {
                    string: navigator.userAgent,
                    subString: "Firefox",
                    identity: "Firefox"
                },
                {
                    string: navigator.vendor,
                    subString: "Camino",
                    identity: "Camino"
                },
                {       // for newer Netscapes (6+)
                    string: navigator.userAgent,
                    subString: "Netscape",
                    identity: "Netscape"
                },
                {
                    string: navigator.userAgent,
                    subString: "MSIE",
                    identity: "Explorer",
                    versionSearch: "MSIE"
                },
                {
                    string: navigator.userAgent,
                    subString: "Gecko",
                    identity: "Mozilla",
                    versionSearch: "rv"
                },
                {       // for older Netscapes (4-)
                    string: navigator.userAgent,
                    subString: "Mozilla",
                    identity: "Netscape",
                    versionSearch: "Mozilla"
                }
            ],
            dataOS : [
                {
                    string: navigator.platform,
                    subString: "Win",
                    identity: "WindowsPC"
                },
                {
                    string: navigator.platform,
                    subString: "Mac",
                    identity: "Mac"
                },
                {
                    string: navigator.userAgent,
                    subString: "iPhone",
                    identity: "iPhone/iPod"
                },
                {
                    string: navigator.userAgent,
                    subString: "iPad",
                    identity: "iPad"
                },
                {
                    string:navigator.userAgent,
                    subString: "Android",
                    identity: "Android"
                },
                {
                    string: navigator.platform,
                    subString: "Linux",
                    identity: "LinuxPC"
                }
            ]

        }
    };

    (function(){
        PBS.KIDS.utils.platformIdentify.init();
    })();

    return PBS.KIDS.utils;
    
}));
