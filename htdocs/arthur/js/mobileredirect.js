(function(window){
	//alert("window.location.href " = window.location.href);
	var useFullSite = getQueryStringParameter(window.location.href,"fullSite");
	//alert("fullSite = "  + useFullSite);
	//alert("window.mobilecheck = " + window.mobilecheck());

	var checkMobileCheck = window.mobilecheck();

	if(checkMobileCheck && (checkMobileCheck && useFullSite != "true") ) {
		//alert("Stay on Mobile Site");
		window.location.href = "/arthur/mobile/index.html";
	}else{
		//alert("Will go to Desktop Site");
		//window.location.href = "Http://pbs.org/arthur";
	}
}(window));