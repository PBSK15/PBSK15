
//var wilkrattsWrapper = (function(){


            // detect domain
            var domain = window.location.hostname.toLowerCase();
            var subdomain = domain.indexOf('.') >= 0 ? domain.substring(0, domain.indexOf('.')) : '';
            var ispbs = domain.indexOf('pbskids') >= 0;

            var mediaDomain = domain;
            if ( ispbs ) 
            {
                if (subdomain != 'soup' && subdomain != 'ernie')
                    mediaDomain = 'pbskids.org';
                else
                    mediaDomain = domain;
            }

            // config
            var urlRoot = 'http://' + domain + '/wildkratts/';
            var mediaUrlRoot = 'http://' + mediaDomain + '/wildkratts/';

            // SWFOBJECTIFICATION
            var flashVars = {
                tvoMode: false,
                urlRoot: urlRoot,
                mediaUrlRoot: mediaUrlRoot,
                contentPath: mediaUrlRoot+swfContentPath,
                autostart: false,
                controlbar: "over"
            };

            if ( typeof swfLoaderPath != 'undefined' && window.location.search.indexOf('loader=false')==-1 )
                flashVars.loaderPath = mediaUrlRoot+swfLoaderPath;
                
            if ( typeof videoFlashVars != 'undefined' )
                for (attrname in videoFlashVars) { flashVars[attrname] = videoFlashVars[attrname]; }
                
            if ( typeof disableHomeLink != 'undefined' && disableHomeLink == true )
                flashVars.disableHomeLink = true;
                                
            if ( typeof roundUpMode != 'undefined' && roundUpMode == true )
                flashVars.roundUpMode = true;
            else
                flashVars.roundUpMode = false;
                
            var params = {
                allowScriptAccess: 'always',
                allowFullScreen: 'true',
                wmode: 'opaque'
            };

            var swf = window.location.search.indexOf('shell=false')==-1 ? mediaUrlRoot+"swf/WKShell.swf" : mediaUrlRoot+swfContentPath;

            swfobject.embedSWF(
                swf,
                'flashcontent',
                '850', '610',
                '11.7.0',
                'expressInstall.swf',
                flashVars,
                params,
                { // attributes
                    name: "flashcontent",
                    id: "flashcontent"
                },
                function(e) {
                    if(!e.success) { // no Flash
                        document.getElementById('noflash-message').innerHTML="You must have Flash Player 10 installed in order to view this site.";
                        document.getElementById('noflash-link').innerHTML='<a href="http://www.adobe.com/go/getflashplayer" target="_blank"><img src="/wildkratts/img/installFlash.jpg" alt="Get Adobe Flash Player"/></a>';
                    }
                    else {
                        var f = swfobject.getObjectById('flashcontent');    
                        if (f) { 
                            onkeydown = f.focus();
                            f.tabIndex = 0; f.focus(); 
                        }   
                    }
                }
            );




//}());



function getCookie(name) 
{
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;    
}

function createCookie(name,value,days) 
{
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function eraseCookie(name) 
{
    createCookie(name,"",-1);
}




