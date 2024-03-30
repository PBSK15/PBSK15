// all.js

function hasClass(ele,cls) {
	return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}

function ro(el) {
	var prel = new Array()

//	el=el ? el : document.body;
//	if (typeof(el) == 'string') elem = document.getElementById(el);
//	if (el == null) return; 
 
 	imgList = document.getElementsByTagName('img'); 
	var regx=/(.*)(\.)([^\.]{3,4})$/;

    for (var i=0; imz = imgList[i]; i++) { 
    	if(!imz.roSet && hasClass(imz,'ro')) {
			mtchd = imz.src.match(regx);
			imz.offimg=imz.src;
			imz.overimg=mtchd[1] + '_ro.' + mtchd[3];
			if (imz.overimg) {preLoadImg(imz.overimg); imz.onmouseover = imgROver;} 
            if (imz.offimg) {preLoadImg(imz.offimg); imz.onmouseout = imgROut;} 
 			imz.roSet=true;
 		}
    }

    function preLoadImg(imgSrc) {
        prel[prel.length] = new Image(); prel[prel.length-1].src = imgSrc; 
    } 
}

function imgROver() {this.src=this.overimg;}
function imgROut() {this.src = this.offimg;}
