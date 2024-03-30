/**
 * ...
 * @author Matt Kucic
 */
var cdn_prefix = new String(PBS.KIDS.cdn_base+"/daniel");
var current_subdomain = new String((window.location.hostname).split(".",1)[0]);
var attribute_list = new Array("background","src","href","style");
var page_data = new Object();
var url = new String("");

window.onload = function(){
	var config_file = new String("http://"+window.location.hostname+"/daniel/assets/config/parenttips.json");
	$.getJSON(config_file, resultParse);	
};

function sg_trackEvent(args) { 
	GA_obj.trackEvent(args[0].toString(),args[1].toString(),args[2].toString());
}
function supports_canvas() {
  return !!document.createElement('canvas').getContext;
}

function path_replace(){
	if($.browser.msie)
	{
		if($.browser.version == 8 || $.browser.version == 7)
		{
			//alert("You're using IE 7 or 8, why? It makes me cry.");
			
			document.getElementById("bgradient").style.backgroundImage = document.getElementById("bgradient").style.backgroundImage.replace("%CDN_PATH%",cdn_prefix);
			document.getElementById("lower_content").style.backgroundImage = document.getElementById("lower_content").style.backgroundImage.replace("%CDN_PATH%",cdn_prefix);
			if(document.getElementById("video_window") != null)
			{
				document.getElementById("video_window").style.backgroundImage = document.getElementById("video_window").style.backgroundImage.replace("%CDN_PATH%",cdn_prefix);
			}
			if(document.getElementById("gamesButton") != null)
			{
				document.getElementById("gamesButton").style.backgroundImage = document.getElementById("gamesButton").style.backgroundImage.replace("%CDN_PATH%",cdn_prefix);
				document.getElementById("videosButton").style.backgroundImage = document.getElementById("videosButton").style.backgroundImage.replace("%CDN_PATH%",cdn_prefix);
				document.getElementById("printButton").style.backgroundImage = document.getElementById("printButton").style.backgroundImage.replace("%CDN_PATH%",cdn_prefix);
			}
			
			$("body.cdn").each(function()
			{
				if($(this).attr("background") != null && $(this).attr("background") != undefined)
				{
					url = $(this).attr("background").replace("%CDN_PATH%", cdn_prefix);
					$(this).attr("background", url);				
				}
			});
			
			$("link.cdn").each(function()
			{
				if($(this).attr("href") != null && $(this).attr("href") != undefined)
				{
					url = $(this).attr("href").replace("%CDN_PATH%", cdn_prefix);
					$(this).attr("href", url);				
				}
			});
			
			$("div.cdn").each(function()
			{
				if($(this).attr("style") != null && $(this).attr("style") != undefined)
				{
					url = $(this).attr("style").replace("%CDN_PATH%", cdn_prefix);
					$(this).attr("style", url);		
				}
				
			});
			
			$("img.cdn").each(function()
			{
				if($(this).attr("src") != null && $(this).attr("src") != undefined)
				{
					//repplace CDN path
					url = $(this).attr("src").replace("%CDN_PATH%", cdn_prefix);
					$(this).attr("src", url);
				}
			});
			
			$("a.cdn").each(function()
			{
				if($(this).attr("href") != null && $(this).attr("href") != undefined)
				{
					//replace Subdomain
					url = $(this).attr("href").replace("%SUBDOMAIN%", current_subdomain);
					$(this).attr("href", url);
				}
			});
			
			$("p.cdn").each(function()
			{
				if($(this).attr("href") != null && $(this).attr("href") != undefined)
				{
					//replace Subdomain
					url = $(this).attr("href").replace("%SUBDOMAIN%", current_subdomain);
					$(this).attr("href", url);
				}
			});
		}
		else
		{
			//IE 9 can use the sane method
			$(".cdn").each(function(){		
			for(var i=0;i<attribute_list.length;i++){
				if($(this).attr(attribute_list[i]) != null && $(this).attr(attribute_list[i]) != undefined){
					url = $(this).attr(attribute_list[i]).replace("%CDN_PATH%", cdn_prefix);
					$(this).attr(attribute_list[i], url);
					url = $(this).attr(attribute_list[i]).replace("%SUBDOMAIN%", current_subdomain);
					$(this).attr(attribute_list[i], url);
				}
			}
		});
		}
	}
	else
	{
		$(".cdn").each(function(){		
			for(var i=0;i<attribute_list.length;i++){
				if($(this).attr(attribute_list[i]) != null && $(this).attr(attribute_list[i]) != undefined){
					url = $(this).attr(attribute_list[i]).replace("%CDN_PATH%", cdn_prefix);
					$(this).attr(attribute_list[i], url);
					url = $(this).attr(attribute_list[i]).replace("%SUBDOMAIN%", current_subdomain);
					$(this).attr(attribute_list[i], url);
				}
			}
		});
	}
	
	
	/*
	$(".cdn").each(function(){		
		for(var i=0;i<attribute_list.length;i++){
			if($(this).attr(attribute_list[i]) != null && $(this).attr(attribute_list[i]) != undefined){
				url = $(this).attr(attribute_list[i]).replace("%CDN_PATH%", cdn_prefix);
				$(this).attr(attribute_list[i], url);
				url = $(this).attr(attribute_list[i]).replace("%SUBDOMAIN%", current_subdomain);
				$(this).attr(attribute_list[i], url);
			}
		}
	});
	*/
	var config_file = new String("http://"+window.location.hostname+"/daniel/assets/config/parenttips.json");
	$.getJSON(config_file, resultParse);	
}

function resultParse(data){
	page_data = data;
	setParentTip();
}

function setParentTip(){
	if(document.getElementById('parenttext') != null)
	{
		document.getElementById('parenttext').innerHTML = page_data[pageID][Math.floor(Math.random()*page_data[pageID].length)];
	}
	//document.getElementById('parenttext').innerHTML = page_data[pageID][Math.floor(Math.random()*page_data[pageID].length)];
}