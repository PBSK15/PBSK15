var galleryObj;
var currentIndx=0;
var url;
var anchor;
$(document).ready(
    function(){
        $.getJSON(
            '/arthur/games/artgallery/gallery.php',
            function(data){
            	galleryObj=data;
            	url = galleryObj.length-1;
            	var loc = window.location.toString();
				//get anchor after hash tag
				anchor = loc.split('#')[1];
				if(anchor != undefined ) 
				{
					currentIndx=url-anchor;
					url=anchor;			
				}
					updateURL();
            }
        );
        
        
        $('.nextImg').click(function(){
			updateURL();
			return false;
		});
    }
);

function showImg()
{	
	var content = '<h2>"';
	content += galleryObj[currentIndx].title;
	content += '"</h2><h5 class="name">';
	content += galleryObj[currentIndx].name;
	content += ' '+galleryObj[currentIndx].age;
	content += '</h5><p>';
	content += galleryObj[currentIndx].comment;
	content += '</p>';
	$('div.art_info').html(content);
	content = '<img src="';
	content += galleryObj[currentIndx].url;
	content += '" width="399" height="354" border="0" alt="a picture of '+galleryObj[currentIndx].title+'" />';
	if(galleryObj[currentIndx].frame=="wide")
	{
	content+='<img src="../../i/games/artgallery/frame_wide.gif" width="399" height="354" border="0" alt="art frame" class="art_frame"/>';
	}else{
	content+='<img src="../../i/games/artgallery/frame_narrow.gif" width="399" height="354" border="0" alt="art frame" class="art_frame"/>';
	}
	$('div.gallery_container').html(content);
	if(currentIndx<galleryObj.length-1)
	{
		currentIndx++;
		url--;
	}else{
		$('.nextImg').addClass('hide');
		//currentIndx=0;
	}
}


//update the url 
function updateURL()
{
	anchor = url;
	window.location.hash = anchor;
	showImg();
}
