define(["soundjs"],function(createjs){

	var PBS
	if (!PBS){
		PBS = {};
		PBS.KIDS = {};
		PBS.KIDS.cdn_base = "";
		}
	var audPath = PBS.KIDS.cdn_base+'/catinthehat/assets/audio/';
	if(true){//if (createjs.WebAudioPlugin.isSupported()){
		audPath = '/catinthehat/assets/audio/';
	}
	
	// return{
		// images:'/catinthehat/assets/graphics/',
		// audio:'/catinthehat/assets/audio/',
		// canvasImages:'/catinthehat/assets/graphics/'
	// }
	 return{
		 canvasImages: (navigator.userAgent.match(/MSIE|IEMobile/i) ? '' : PBS.KIDS.cdn_base)+ '/catinthehat/assets/graphics/',
		 images:  PBS.KIDS.cdn_base+'/catinthehat/assets/graphics/',
		 audio:  audPath
	 }
});