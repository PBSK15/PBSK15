$(document).ready( function(){

    

    if(document.getElementById('ccGame')!=null)
    {
        console.log("HTML 5 Game!");
         
//var SimpleStickerbook = PBS.KIDS.StickerBook('arthur-comic-creator');
       SimpleStickerbook.init(); 
        $('#flashcontent').removeClass('comiccreator');
        $('#flashcontent').addClass('comiccreatorHTML5');
    }else{
       // console.log("NOT HTML 5 Game!");
    }

    if ($.browser.msie && $.browser.version < 9 ) {
    	
        $('#no-support').removeClass('inactive');
		$('#screen-overlay').removeClass('inactive');
    }
   /* var success_callback = function(r){ 
	var response = JSON.parse(r.responseText);
	alert("Your awesome sticker is here: " + response['sticker']) 
    }
    
        
    $('#submit-sticker').bind('click', function (){                                                                                                        
	SimpleStickerbook.submit(success_callback);  
	$('#submit-sticker').hide();
	setInterval(function(){$('#submit-sticker').fadeIn()},3000); 
    });*/
    
})