var anchor;
var currentIndx=0;
var totalLength;
var pageID;
var loc;
$(document).ready(function(){
	//get current url
	loc = window.location.toString();
	//get anchor after hash tag
	anchor = loc.split('#')[1];
	//if anchor doesn't exist - default to first item in list
	if(anchor==undefined)
	{
		pageID = $('.print-pages li:nth-child('+1+')').attr('id');
		anchor='pg-'+pageID;
	}else{
		pageID=anchor.split('-')[1];
		
	}
	//get total length of printable pages
	totalLength = $('.print-pages').children().length;
	//find the current index of the current bookmark
	if(currentIndx==0)
	{
		currentIndx=$('.print-pages li#'+pageID).prevAll('li').length+1;
	}
	
	
	//check if this is for PLAY MAKER - COSTUMES
	if($('#pmCostumesIcons').length > 0)
	{
		$('#pmCostumesIcons a').removeClass('selected');
		$('#'+pageID+'PM a').addClass('selected');
	}
	displayImage();
	
	
	//next btn - find next image in line, display it and update url
	$('.next').click(function(){
		updateURL("next");	
		return false;
			
	});
	
	//previous btn - find previous image in line, display it and update url
	$('.prev').click(function(){
		updateURL("prev");
		return false;
			
	});
	
	$('.print-btn-one, .print-btn-one-sm').click(function(){
		try{
			GA_obj.trackEvent("Print","Print One", loc);
		//	console.log("print one")
		}catch(err){
		//	console.log("error print one")
			//return false;
		}
		window.print();
		
		return false;
	});
	
	$('.print-btn-all, .print-btn-all-sm').click(function(){
		try{
			GA_obj.trackEvent("Print","Print All", loc);
		//	console.log("print all")
		}catch(err){
		//	console.log("error print all");
			//return false;
		}
		$('body').addClass('printall');
		window.print();
		$('body').removeClass('printall');
		
		return false;
	});
	
	//for TOWER OF COW how to link under header graphic
	$('#a-howto').click(function(){
		anchor="pg-howto";
		currentIndx=totalLength;
		window.location.hash=anchor;
		pageID=anchor.split('-')[1];
		displayImage();
		
		return false;
	});
	
	//make left and right arrows appear as buttons to IE with hover state 
	$('.prev, .next, .print-btn-one, .print-btn-all, .print-btn-one-sm, .print-btn-all-sm').hover(function(){
		$(this).addClass('on');
	},function(){
		$(this).removeClass('on');
	});
	
	$('#letter dl.below dt, #envelope dt, #email dt, #greeting dt, #postcard dt').hover(function() {
		//console.log($(this).next())
		$(this).next().addClass('show');
	}, function(){
		//console.log($(this).prev());
		$(this).next().removeClass('show');
	});
	
	//button nav for Play Maker - Costumes
	$('#pmCostumesIcons a').click(function(){
		$('#pmCostumesIcons a').removeClass('selected');
		$(this).addClass('selected');
		pageID = $(this).parent().attr('id').split('PM')[0];
		anchor = 'pg-'+pageID;
		window.location.hash = anchor;
		displayImage();
		return false;
	});
	
	
});

//update the url 
function updateURL(dir)
{
	if(dir=="next")
	{
		currentIndx = $('.print-pages li#'+pageID).prevAll('li').length+1;
		if(currentIndx < totalLength)
		{
			currentIndx++;
		}
	}else{
		currentIndx = $('.print-pages li#'+pageID).prevAll('li').length+1;
		if(currentIndx > 1)
		{
			currentIndx--;
		}
	}
	pageID = $('.print-pages li:nth-child('+currentIndx+')').attr('id');
	anchor = 'pg-'+pageID;
	window.location.hash = anchor;
	displayImage();
}

//display the current list item
function displayImage()
{
	var title;
	var img;
	//show current bookmark
	$('.print-pages li').addClass('hide');
	$('.print-pages li#'+pageID).removeClass('hide');
	$('.print-pages li ol li').removeClass('hide');
	//figure out the curren title
	if(pageID=="howto")
	{
		$('.print-title-left h1').html("How To Play");
	}else if($('.print-pages').attr('id') == 'printCosmic')
	{
		$('.print-title-left h1').html("Alien "+currentIndx);
	}else if($('.print-pages').attr('id') == 'printColoring')
	{
		img = $('.print-pages li#'+pageID).find('img')[0];
		if(img!=undefined)
		{
			title = $(img).attr('title');
			$('.print-title-left h1').html(title);
		}
	}else if($('.print-pages').attr('id') != 'printElwingo' && $('.print-pages').attr('id')!='printGroove' && $('.print-pages').attr('id')!='printLetsdraw' && $('.print-pages').attr('id')!='printFire')
	{
		//find title from image alt tag if current page is not Masks, Elwingo, Groove It, and Let's Draw Arthur
		img = $('.print-pages li#'+pageID).find('img')[0];
		
		if(img!=undefined)
		{
			title = $(img).attr('alt');
			$('.print-title-left h1').html(title);
		}
		
		if($('.print-pages').attr('id')=="printCows")
		{
			var subtext="You'll need 4 copies of the Cow Cards page.";
			if(pageID!="cowcards")
			{
				subtext="";
			}
			$('.print-title-left p').html(subtext);
		}
	}
	if(totalLength>1)
	{
		//update number of pages	
		$('.pagination-nav p').html(currentIndx+' of '+totalLength+' pages');
	}else{
		$('.pagination-nav').hide();
	}
	if(currentIndx==1)
	{
		$('.next').removeClass('disabled');
		$('.prev').addClass('disabled');
	}else if(currentIndx==totalLength)
	{
		$('.next').addClass('disabled');
		$('.prev').removeClass('disabled');
	}else{
		$('.next').removeClass('disabled');
		$('.prev').removeClass('disabled');
	}	
	
}