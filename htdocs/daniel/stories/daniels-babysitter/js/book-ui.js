$(document).ready(function () {
	if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
		$('html').addClass('is-iOS');
    } else {
	    $('html').addClass('not-iOS');
    }
    if ($.browser.msie) {
	    $('html').addClass('is-ie');
    }
});