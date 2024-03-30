
function psBrowserDetect() 
{
	var uagent   = navigator.userAgent.toLowerCase();
	var supports = 
	{
		canvas:      false,
		touch:       !!('ontouchstart' in window),

		iPod:      (uagent.search('ipod')    > -1),
		iPhone:    (uagent.search('iphone')  > -1),
		iPad:      (uagent.search('ipad')    > -1),
		safari:    (uagent.search('safari')  > -1),
		ie:        (uagent.search('msie')    > -1),
		firefox:   (uagent.search('firefox') > -1),
		android:   (uagent.search('android') > -1),
		chrome:    (uagent.search('chrome')  > -1),
		silk:      (uagent.search('silk')    > -1),
		iOS:       false,
		mobile:    false,
		desktop:   false,
		
		ogg:       true,
		m4a:       true,
		mp3:       true,
        webAudio:  false
    };
    
	supports.iOS     = supports.iPod || supports.iPhone  || supports.iPad;
	supports.mobile  = supports.iOS  || supports.android || supports.silk;
	supports.desktop = !supports.mobile;
		
    var myAudio = document.createElement('audio');
    
	if( (myAudio.canPlayType) && !(!!myAudio.canPlayType && "" != myAudio.canPlayType('audio/ogg; codecs="vorbis"')))
	{
	    supports.ogg = false;
	    if( supports.ie || !(!!myAudio.canPlayType && "" != myAudio.canPlayType('audio/mp4')))
	    {
	    	supports.m4a = false;
	    }
	}
    delete myAudio;

    try 
    {
    	console.log( "AudioContext : " + window.AudioContext );
    	console.log( "Webkit : " + window.webkitAudioContext );
    	
        var webaudioapi = (window.AudioContext != undefined) ?  new AudioContext() : new window.webkitAudioContext();        
        
        console.log( "webaudioapi : " + webaudioapi );
        
        webaudioapi.createBufferSource();
        delete webaudioapi;
        supports.webAudio = true;
    } 
    catch (e) 
    {
        console.log( "No support for HTML5 Web Audio API, use Audio tag instead." )
    }

	var canvas = document.createElement('canvas');
	try	
	{
		supports.canvas = !!(canvas.getContext('2d'));
	} 
	catch(e) 
	{
		supports.canvas = !!(canvas.getContext);
	}
	delete canvas;

	return supports;
}