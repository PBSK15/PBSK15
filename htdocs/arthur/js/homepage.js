//var sectionsArr=["games", "print", "videos"];
//var fullWidth = 0;
var displayWidth = 174;
//var lastWidth = 0;
var sectionsArr = [{type:"games", fullWidth:0, lastWidth:0}, {type:"print", fullWidth:0, lastWidth:0}, {type:"videos", fullWidth:0, lastWidth:0}];
var xmlURL;
var day;
var img;
var imgSrc;
var imgAlt;
var imgHref;

$(document).ready(function(){

	//get current date
	var d = new Date();
	day = d.getDate();
	//day = 2;
	
	//hide hilight image
	$('#main-hilight').hide();
	$('#main-char-hilight').hide();

	xmlURL = "xml/homepage/mainHL"+day+".xml";

	$.ajax({
		type: "GET",
		url: "xml/hptoy.xml",
		dataType: "xml",
		success: parseXmlToy
	});
	
	$.ajax({
		type: "GET",
		url: xmlURL,
		dataType: "xml",
		success: parseMinor
	});
	

//---------------     NO FLASH ALTERNATE CONTENT -------  
	//parse toy xml
	function parseXmlToy(xml)
	{		
		var len = $(xml).children().children().length;
		var ran=Math.round(Math.random()*(len-1));
		img = $(xml).find('characterhighlight highlight').eq(ran);
		imgSrc = img.children('imgurl').text();		
		$('#main-char-hilight').attr('src', imgSrc);
			$('#main-char-hilight').show();
	}
	
	
//-----------------------------------------------------------

//----------------- MINOR HIGHLIGHT ROTATION FUNCTIONS -----------
	$('#minor-hilights ul').hide();


//click to slide images to the left	
	$('.next').click(function(){

		moveIt('next', $(this).parent().attr('id'));
		return false;
	});

//click to slide images to the right
	$('.prev').click(function(){

		moveIt('prev', $(this).parent().attr('id'));
		return false;
	});
	
	//make left and right arrows appear as buttons to IE with hover state 
	$('.next, .prev').hover(function(){
		$(this).addClass('on');
	},function(){
		$(this).removeClass('on');
	});
  
});

//get random number
jQuery.jQueryRandom = 0;
jQuery.extend(jQuery.expr[":"],
{
  random: function(a, i, m, r) {
    if (i == 0) {
      jQuery.jQueryRandom = Math.floor(Math.random() * r.length);
    };
    return i == jQuery.jQueryRandom;
  }
});





//parse minor highlights : games/prints/clubs	
function parseMinor(xml)
{
	var xmlLength = $(xml).find('section').length;
	var path="/arthur/i/alt/";
	for(var i=0; i<xmlLength; i++)
	{
		var currentXML = $(xml).find('section').eq(i);
		var type = currentXML.attr('type');
		if(type=="main")
		{
			var len = $(currentXML).children().length;
			var ran=Math.round(Math.random()*(len-1));
			//get random hilight
			img = $(currentXML).find('highlight').eq(ran);
			//get text for img url
			imgSrc = img.children('imgurl').text();
			//get text for title
			imgAlt = img.children('title').text();
			//get text for href
			imgHref = img.children('href').text();
			//update img src, alt, and a href
			$('#main-hilight').attr('src', path+imgSrc).attr('alt', imgAlt).parent('a').attr('href', imgHref);
			$('#main-hilight').show();
			/*//show hilight image after 1/10 second to get rid of flicker when switching img src
			$("#coastline").animate({
				opacity: '1'
				},100, function() {
				$('#main-hilight').show();
			});*/
		}else{
			var hl = currentXML.find('highlight');
			var listLength = hl.length;
			var hlItem;
			var content="";
			//create li item for each image
			for(var j=0; j<listLength; j++)
			{
				hlItem=$(currentXML).find('highlight').eq(j);
				imgSrc = hlItem.find('imgurl').text();
				imgAlt = hlItem.find('title').text();
				imgHref = hlItem.find('href').text();
	
				content+='<li><a href="'+imgHref+'"><img src="'+imgSrc+'" width="174" height="264" alt="'+imgAlt+'" border="0" /></a></li>\n';
			}
			//find width based on current number of highlight for current section
			var k=0;
			for( k=0; k<sectionsArr.length; k++)
			{
				if(sectionsArr[k].type==type)		
				{
					for(var l=0; l<listLength; l++)
					{
						sectionsArr[k].fullWidth+=174;
					}
					sectionsArr[k].lastWidth=sectionsArr[k].fullWidth-displayWidth;	
					$('#callouts-'+sectionsArr[k].type+' ul').css('width', sectionsArr[k].fullWidth).css('overflow','auto');
					break;
				}
			}

			$('#callouts-'+type+' ul').html(content);
			$('#callouts-'+type+' ul').show();
		}
	}
}

function moveIt(direction, parent){
	var t=1;
	img = $('#'+parent+' ul');
	var position = img.css('left');
	position=parseInt(position);
	var i=0;
	var width;
	
	//find end width for current section
	for(i=0; i<sectionsArr.length; i++)
	{
		if("callouts-"+sectionsArr[i].type==parent)
		{
			width=sectionsArr[i].lastWidth;
		}
	}
	
	//if not animating, animate next/prev image
	if( img.is(':not(animated)')) {
		if(direction=='next')
		{
			if(position==-width){
				img.animate({
					left: '0'
				  }, t);
			} else{
				img.animate({
					left: '-='+displayWidth
				  }, t);
			}
		}else{
			if(position==0){
				img.animate({
					left: -width
				  }, t);
			} else{
				img.animate({
					left: '+='+displayWidth
				  }, t);
			}
		}
	}
}
