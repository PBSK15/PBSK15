$(document).ready(function(){

	var count=1;
	var current=1;	
	var total= $("#cmtlist li").size();
	//console.log('total number of images in the list: '+total);
	displaycontent();
	
	/*		NEXT IMAGE		*/
	$('.next').click(function(){
		if(current<total){
			//alert(total + ' is the total and we are currently on '+current);
			current++;
		}/*else{
			current=1;
		}*/
		displaycontent();
		
		return false;
		
	});
	/*		PREV IMAGE		*/
	$('.prev').click(function(){
		if(current>1){
			current--;
			$('.next').removeClass('disabled');
		}/*else{
			current=total;
		}*/
		displaycontent();
		
		return false;
		
	});
	/*		GRAB NEW INFO AND DISPLAY		*/
	function displaycontent(){
		$('.next').removeClass('disabled');
		$('.prev').removeClass('disabled');
		if(current==1)
		{
			$('.prev').addClass('disabled');
		}else if(current==total)
		{
			$('.next').addClass('disabled');
		}
		var currentObj = $("#cmtlist li:nth-child("+current+") dl");
		var txt =currentObj.find("h3").html();
		var imgSrc = currentObj.find("#mainImg").attr("src");
		var imgAlt = currentObj.find("#mainImg").attr("alt");
		$('#mainImg').attr({src:imgSrc, alt:imgAlt});
		$('#photoWrapper h3').html(txt);
		txt=currentObj.find("h2").html();
		$('#cmtArea h2').html(txt);
		var content = currentObj.find(".cmtWrapper").html();
		$('#cmtTxtWrapper').html(content);
		//console.log(content);
		
		//var title = currentObj.find("h2").html();
		//$('#cmtArea h3').html(title);
		
		$('.next, .prev').hover(
		function(){
			$(this).addClass('on');
		},
		function(){
			$(this).removeClass('on');
		});
	}
	
	
	/*		rollover for photos page 		*/
	$('#cmtlist').css('display', "none");
});