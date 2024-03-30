 ////////////////////////////////////////////////////////
	function openWin(URL,type,w,h) {
	
	var status = 'no';
	var reSize = 'no';
	var scroll = 'no';
	var toolbar = 'no';
	var location = 'no';
	var menubar = 'no';
	var directories = 'no';
	var ewindow;
	
	
	
	if (type == "vid") {
		if (!w) {
			w = 570;
		}
		if (!h) {
			h= 690;
		}
		reSize = 'no';		
	} 	

	if (type == "survey") {
		if (!w) {
			w = 570;
		}
		if (!h) {
			h= 690;
		}
		reSize = 'no';		
		scroll = 'yes';		
	} 	
	
	else {
		if (!w) {
			w = 350;
		}
		if (!h) {
			h= 360;
		}
		reSize = 'yes';		
	} 	
	
	var windowFeatures = 'width='+w+',height='+h+
									',toolbar='+toolbar+',status='+status+
									',scrollbars='+scroll+',resizable='+reSize+
									',menubar='+menubar+
									',location='+location+
									',directories='+directories+''
									
	ewindow = window.open(URL,type,windowFeatures);   
	ewindow.focus();
}
