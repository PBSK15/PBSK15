var displayWidth = 0;
var indxDisplayWidth = 752;		//default width to animate on each click
var indxFdDisplayWidth = 880;
var endWidth;
var indxFullWidth;
var indxEndWidth;
var currentPos;
var anchor;
var currentPgIndx;
var currentDirectory;
var totalPages;

$(document).ready(function(){

//----------------- CALLOUT ROTATION FUNCTIONS -----------
	var locParts = window.location.toString().split('/');

	//get anchor after hash tag
	anchor = locParts[locParts.length-1].split('#')[1];
	currentDirectory = locParts[4];
	
	//for print and games index
	if(currentDirectory=="print" || currentDirectory=="games" || currentDirectory=="friends")
	{
		
		//$('.callout-images').css('display','none');
		if(currentDirectory!="friends")
		{
			//get current date
			var d = new Date();
			var day = d.getDate();
			//day = 1;
			
			var xmlURL = "/arthur/xml/homepage/mainHL"+day+".xml";
	
			//load xml
			$.ajax({
				type: "GET",
				url: xmlURL,
				dataType: "xml",
				success: function(xmlDoc, status){
					parseMinor(xmlDoc);
				},
				complete: function( xhr, status )
				{
				  if( status == 'parsererror' )
				  {
					xmlDoc = null;
	
					if( window.DOMParser )
					{
					  parser=new DOMParser();
					  xmlDoc=parser.parseFromString( xhr.responseText,"text/xml" ) ;
					}
					else // Internet Explorer
					{
					  xmlDoc=new ActiveXObject( "Microsoft.XMLDOM" ) ;
					  xmlDoc.async = "false" ;
					  xmlDoc.loadXML( xhr.responseText ) ;
					}
			
					parseMinor( xmlDoc ) ;
				  }
				}
			});	
			if($('#callout div').hasClass('callout-images'))
			{
				//index callout-wrapper exists
				$(".callout-images").hide();
			}	
		
		}
		
		//if anchor doesn't exist - default to first item in list
		if(anchor==undefined)
		{
			anchor=1;
			currentPgIndx=0;
			window.location.hash = anchor;
		}else{
			currentPgIndx=anchor-1;
		}
		//setup callout minor highlight for print/games index
		var fullWidth = 0;
		var lastWidth = 0;
		
				
		
		//total number of pages
		totalPages = $('#sliderIcons').children().length;	
		
		if($('#sliderWrapper').parent().attr('id')=='flashcontent')
		{
			//we're in friends page - change display width to 880 instead of 752
			indxDisplayWidth=indxFdDisplayWidth;	
		}
		
		indxFullWidth = (indxDisplayWidth * totalPages);
		indxEndWidth = indxFullWidth - indxDisplayWidth;
		
		$('#sliderIcons').css('width', indxFullWidth).css('overflow','hidden');	
		
		$('#sliderWrapper .prev').addClass('disabled');
		
		var num = 0;
		//create circle nav based on number of pages
		$('ul#sliderIcons ul').each(function(){
			var lastItem="";
			if(num==totalPages-1)
			{
				lastItem=" last";
			}
			$('#circleNav').append('<span class="button'+lastItem+'">'+num+'</span>');
			num++;
		});
		
		$('#circleNav span:first').addClass('selected');
		
		//double check page number to make sure it's within range
		if(totalPages!=0)
		{
			if(currentPgIndx>=totalPages)
			{
				currentPgIndx=totalPages-1;
			}else if(currentPgIndx<0)
			{
				currentPgIndx=0;
			}
		}else{
			currentPgIndx=0;
		}
		updateURL();
		moveIt(currentPgIndx,false, "sliderIcons");
	
	}else if(currentDirectory=="clubs")
	{
		currentPgIndx=0;
		totalPages = $('.callout-images ul').children().length;
		var width=175*totalPages;
		$('.clubs-rc-wrapper ul').css('width',width);
	}
	
	
	// left and right arrow funtion - animate sliding
	$('.next, .prev').click(function(){
		if($(this).hasClass('next')){
			if(currentDirectory=="clubs")
			{
				moveIt(true, 'next');
			}else{
				if(currentPgIndx<totalPages)
				{
					currentPgIndx++;
				}
				moveIt(false, 'next', $(this).parent().attr('id'));
			}
		}
		else{
			if(currentDirectory=="clubs")
			{
				moveIt(true, 'prev');
			}else{
				if(currentPgIndx>0)
				{
					currentPgIndx--;				
				}
				moveIt(false, 'prev', $(this).parent().attr('id'));
			}
		}
		return false;
	});
	
	//circle nav function - animate sliding
	$('#circleNav .button').click(function(){
		var clickPoint = parseInt($(this).html());
		currentPgIndx=clickPoint;
		updateURL();
		moveIt(clickPoint, false, "sliderIcons");
		
		return false;
	});

	
	
	//make left and right arrows appear as buttons to IE with hover state 
	$('.next, .prev, .center, .center2, .button').hover(function(){
		$(this).addClass('on');
	},function(){
		$(this).removeClass('on');
	});
		
}); //--- END PAGE READY FUNCTION

//update url with current hash number
function updateURL() {
	anchor=currentPgIndx+1;
	window.location.hash = anchor;
}	

//parse minor highlights : games/prints	
function parseMinor(xml)
{
	//console.log("get this: "+currentDirectory);
	var currentXML = $(xml).find('section[type="'+currentDirectory+'"]');
	var xmlLength = currentXML.children().length;

	var hlItem=$(currentXML).find('highlight').eq(0);
	imgSrc = hlItem.find('imgurl').text();
	imgAlt = hlItem.find('title').text();
	imgHref = hlItem.find('href').text();

	var currentImg = $('.callout-images').find('img').attr('src', imgSrc).attr('alt', imgAlt);
	$('.callout-images').find('a').attr('href', imgHref);
	$('.callout-images').delay(2000).show();
}

//move the slider of icons
function moveIt(point, direction, parent) {
	var img;
	var groupWidth;
	var endW;
	var t=500;
	if(point && direction)
	{
		img=$('.callout-images ul');
		groupWidth=174;
		if(currentDirectory=="clubs")
		{
			endW=groupWidth*(totalPages-1);
		}else{
			endW=groupWidth*2;
		}
		currentPos=parseInt(img.css('left'));
		if(direction=="next")
		{
			if(currentPos!= -endW)
			{
				img.css('left', currentPos-groupWidth);
			}else{
				img.css('left',0);
			}
		}else{
			if(currentPos!=0)
			{
				img.css('left', currentPos+groupWidth);
			}else{
				img.css('left', -endW);
			}
		}
	}else{

		img = $('#sliderIcons');
		groupWidth=indxDisplayWidth;
		endW=indxEndWidth;
		$('#sliderWrapper .prev, #sliderWrapper .next').addClass('disabled')
		
		currentPos = parseInt(img.css('left'));
		if(direction){
			if(direction=="next"){
				if (!img.is(':animated')) {
					if(currentPos > -endW)
					{			
						img.animate({
							left: '-='+groupWidth
						}, t, function(parent){
							setupNav(parent);
						});
					}else{
	
						setupNav(parent);				
					}
				}
			} else{
				if (!img.is(':animated')) {
					if(currentPos<0)
					{				
						img.animate({
							left: '+='+groupWidth
						}, t, function(parent){
							setupNav(parent);
						});
					}else{
						setupNav(parent);					
					}
				}
			}
		}
		else{
			var groupWidth = groupWidth * point;
			if (!img.is(':animated')) {
				img.animate({
					left: -groupWidth
				 }, t, function() {
					setupNav('sliderIcons');
				 });
			 }
		}
	}
}

function setupNav(parent)
{

	currentPos = parseInt($('#sliderIcons').css('left'));
	var num=0;
	var numPg=currentPos / indxDisplayWidth;
	$('#circleNav span').each(function(){
		if(num==numPg)
		{
			$(this).addClass('selected');
		}else{
			$(this).removeClass('selected');
		}
		num--;
	});
	if(numPg==0)
	{
		$('#sliderWrapper .next').removeClass('disabled');
	}else if(currentPos==-indxEndWidth)
	{
		$('#sliderWrapper .prev').removeClass('disabled');
	}else{
		$('#sliderWrapper .next').removeClass('disabled');
		$('#sliderWrapper .prev').removeClass('disabled');
		
	}
	currentPgIndx=-numPg;
	if(currentDirectory!="clubs")
	{
		updateURL();
	}
}