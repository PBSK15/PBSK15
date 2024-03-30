var tk;

function uploadImage() {
	logthis("uploading image");

	$spinner.show();
	// poll the server until it returns either "null" or the URL of the uploaded image. HTML5 can do a direct file transfer, but earlier browsers can't do it.
	status=setTimeout(tryLoc,3000);
}



function tryLoc() {
	clearTimeout(status);
	
	var uploadloc="/plumlanding/latest.txt"; // for uploading files
	
	logthis("checking for location at " + uploadloc);
	
	$.getJSON(uploadloc, function(data) {
		$loc=data;
		logthis("got it.");
		if($loc['u']=='0') {
			// try again in a few seconds
			status=setTimeout(tryLoc,3000);
			logthis("try again");
		} else {
			if($loc['u']=='e') {
				logthis("THERE WAS A PROBLEM!");
			} else {
				loadbackgroundimage($loc['u']);
			}
		}
	});
}

function imageObject(url) {
	var im=document.createElement("Image");
	im.onload = function() {
		logthis("got the image data!");
		
	}
	im.src=url;
}

function loadbackgroundimage(url) {
	
	logthis("loading image at " + url);
//	im=document.getElementById("showthing");
//url="/loop/drawing/images/2013/04/1366657272_2746_517588f8437e6_u.gif";
//url="i/drawtoolbuttons.png";
//url="/loop/drawing/images/2013/04/1366657599_7455_51758a3fb6697_u.png";

	$spinner.hide();
	

}


logthis=function(msg) {
	if(console) {
	console.log(msg);
	}
}