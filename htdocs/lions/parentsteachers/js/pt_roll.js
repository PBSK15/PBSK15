
	function init() 
	{
       // quit if this function has already been called
       if (arguments.callee.done) return;

       // flag this function so we don't do the same thing twice
       arguments.callee.done = true;

       init_page();
   };

   /* for Mozilla */
   if (document.addEventListener) {
       document.addEventListener("DOMContentLoaded", init, null);
   }


// for Internet Explorer (using conditional comments)
/*@cc_on @*/
/*@if (@_win32)
document.write("<script id=__ie_onload defer src=javascript:void(0)><\/script>");
var script = document.getElementById("__ie_onload");
script.onreadystatechange = function() {
    if (this.readyState == "complete") {
        init(); // call the onload handler
    }
};
/*@end @*/


   /* for other browsers */
   window.onload = init;


	function init_page()
	{
		init_rollovers();
	}




/** note this puts roll over on image, not href **/
function init_rollovers()
{
    //if we don't support getElementById then exit
	if (!document.getElementById) return;
	
	//yes it even does preload
	var aPreLoad = new Array();
	var aImages  = new Array();
	var sTempSrc;

    //lets do inputs
    var aImages = document.getElementsByTagName("img");


    //loop over inputs
	for (var i = 0; i < aImages.length; i++)
	{

	    //we use class name to find image
		if (aImages[i].className.match('img-roll'))
		{

		    //grab src
			var src = aImages[i].getAttribute('src');

			//grab extension (neato works for gif and jpg nd png if you so feel)
			var ftype = src.substring(src.lastIndexOf('.'), src.length);

			//create a new attribute for rollover (for fyi = '-over')
			var hsrc = src.replace(ftype, '_over'+ftype);
			aImages[i].setAttribute('hsrc', hsrc);
			aImages[i].setAttribute('nsrc', src);
			
			if (aImages[i].className.match('vnav'))
			{
				//add vnav src if exists
				var vindex = aImages[i].className.substring(aImages[i].className.lastIndexOf('vnav')+4, aImages[i].className.length);
				aImages[i].setAttribute('vindex', vindex);				
			}
			
			//PRELOAD !!
			aPreLoad[i] = new Image();
			aPreLoad[i].src = hsrc;

			//on mouseover grab hsrc
			aImages[i].onmouseover = function()
			{
				//sTempSrc = this.getAttribute('src');
				//this.setAttribute('src', this.getAttribute('hsrc'));
				try {				
					roll_this(this);
				} catch(e) { /* catch exceptions */ }
			}

			//on mouse out strip out "on"
			aImages[i].onmouseout = function()
			{
				//if (!sTempSrc) sTempSrc = this.getAttribute('src').replace('_on'+ftype, ftype);
				//this.setAttribute('src', sTempSrc);
				try {
					rollout_this(this);
				} catch(e) { /* catch exceptions */ }
			}
		}
	}
	
	
    //lets do inputs
    var aImages = document.getElementsByTagName("input");


    //loop over inputs
	for (var i = 0; i < aImages.length; i++)
	{

	    //we use class name to find image
		if (aImages[i].className.match('img-roll'))
		{

		    //grab src
			var src = aImages[i].getAttribute('src');

			//grab extension (neato works for gif and jpg nd png if you so feel)
			var ftype = src.substring(src.lastIndexOf('.'), src.length);

			//create a new attribute for rollover (for fyi = '-over')
			var hsrc = src.replace(ftype, '_over'+ftype);
			aImages[i].setAttribute('hsrc', hsrc);
			aImages[i].setAttribute('nsrc', src);
	
			//PRELOAD !!
			aPreLoad[i] = new Image();
			aPreLoad[i].src = hsrc;

			//on mouseover grab hsrc
			aImages[i].onmouseover = function()
			{
				//sTempSrc = this.getAttribute('src');
				//this.setAttribute('src', this.getAttribute('hsrc'));
				try {				
					roll_this(this);
				} catch(e) { /* catch exceptions */ }					
			}

			//on mouse out strip out "on"
			aImages[i].onmouseout = function()
			{
				//if (!sTempSrc) sTempSrc = this.getAttribute('src').replace('_on'+ftype, ftype);
				//this.setAttribute('src', sTempSrc);
				try {				
					rollout_this(this);
				} catch(e) { /* catch exceptions */ }					
			}
		}
	}
	
	
   //lets do dbl-roll on sidebars
	if (!document.getElementById('sidebar')) return;   
    var aHrefs = document.getElementById('sidebar').getElementsByTagName("a");


    //loop over inputs
	for (var i = 0; i < aHrefs.length; i++)
	{

	    //we use class name to find image
		if (aHrefs[i].className.match('href-roll'))
		{
			//on mouseover grab hsrc
			aHrefs[i].onmouseover = function()
			{
				try {				
					roll_href_this(this);
				} catch(e) { /* catch exceptions */ }					
			}

			//on mouse out strip out "on"
			aHrefs[i].onmouseout = function()
			{
				try {				
					rollout_href_this(this);
				} catch(e) { /* catch exceptions */ }					
			}
		}
	}	
}


function roll_href_this(thehref)
{    

    //if we don't support getElementById then exit
	if (!document.getElementById) return
	
	//grab images
	var intImages = thehref.getElementsByTagName("img");

    //loop over internal images to preload
    for (var j = 0; j < intImages.length; j++) 
    {	
        //match the ones with rollover states
        //you could skip this step is all othe are
        if (intImages[j].className.match('img-roll')) 
        {
            //alert(hrefID);
            intImages[j].setAttribute('src', intImages[j].getAttribute('hsrc'));
        }
    }
}

function rollout_href_this(thehref)
{    
    //if we don't support getElementById then exit
	if (!document.getElementById) return
	
	//grab images
	var intImages = thehref.getElementsByTagName("img");

    //loop over internal images to preload
    for (var j = 0; j < intImages.length; j++) 
    {	
        //match the ones with rollover states
        //you could skip this step is all othe are
        if (intImages[j].className.match('img-roll')) 
        {
            //alert(hrefID);
            intImages[j].setAttribute('src', intImages[j].getAttribute('nsrc'));
        }
    }
}

function roll_this(img_dom)
{
	img_dom.setAttribute('src', img_dom.getAttribute('hsrc'));
	
	//for multiple rollover (look for more genric solution)
	var the_id = img_dom.getAttribute('id');
	//alert(the_id);
	if(the_id && the_id == "dyk1")
	{
		var img_o = document.getElementById('dyk2');
		img_o.setAttribute('src', img_o.getAttribute('hsrc'));
	}
	else if(the_id && the_id == "dyk2")
	{
		var img_o = document.getElementById('dyk1');
		img_o.setAttribute('src', img_o.getAttribute('hsrc'));
	}
	else if (img_dom.className.match('vnav'))
	{
		//alert(img_dom.getAttribute('vindex'));
		video_roll_show(img_dom.getAttribute('vindex'));
	}	
}


function rollout_this(img_dom)
{
	img_dom.setAttribute('src', img_dom.getAttribute('nsrc'));
	
	//for multiple rollover (look for more genric solution)	
	var the_id = img_dom.getAttribute('id');	
	if(the_id && the_id == "dyk1")
	{
		var img_o = document.getElementById('dyk2');
		img_o.setAttribute('src', img_o.getAttribute('nsrc'));
	}
	else if(the_id && the_id == "dyk2")
	{
		var img_o = document.getElementById('dyk1');
		img_o.setAttribute('src', img_o.getAttribute('nsrc'));
	}
	else if (img_dom.className.match('vnav'))
	{
		video_roll_hide();
	}	
}