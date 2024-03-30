function sendPageView(pageURL) {
	
	var sendURL = "WORDQUEST_" + pageURL;

	//alert("sendPageView, " + sendURL);
	//console.log("sendPageView, " + sendURL);
	GA_obj.trackPageview(sendURL);
}

function sendEvent(category, action, opt_label, opt_value) {

	var sendCategory = "WORDQUEST_" + category;
	
	if (opt_value == "" || opt_value == undefined) {
		GA_obj.trackEvent(sendCategory, action, opt_label);
	}
	else {
		
		var value = Number(opt_value);
		
		GA_obj.trackEvent(sendCategory, action, opt_label, value);
	}
	
	//console.log("sendEvent, " + sendCategory + ", " + action + ", " + opt_label + ", " + opt_value);
	//alert("sendEvent, " + sendCategory + ", " + action + ", " + opt_label + ", " + opt_value);
}