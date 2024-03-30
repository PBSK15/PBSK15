// helper for google analytics; closes overlay when pdf opens in new window
function forceClose() {
	$('#overlay-wrapper').hide();
	$('#overlay').find('#snapshot').attr('src', '');
}

// google analytics event tracking
function trackDownload(url) {
	var file = url.substr(url.lastIndexOf("/")+1);
	try { GA_obj.trackEvent('CG_Busy_Day', 'PDF_Download', file); } catch (err) {}
	setTimeout(forceClose, 500);
	return true;
}

// Helper for writing to firebug console if available
function logit(msg) {
    // if available, write to fb console
    if (window.console && window.console.firebug) {
        console.log('logit >> ' + msg);
    
    // otherwise write to browserÕs js console
    } else {
        setTimeout(function() {
            throw new Error("logit >> " + msg);
        }, 0);
    }
}

// Update the content of the overlay
function updateOverlay(name, curPdf, totPdf) {
	var overlay = $('#overlay');
	overlay.find('#snapshot').attr('src', 'img/pdf_screens/preview-' + name + '-' + curPdf + '.jpg');
	overlay.find('#download').attr('href','pdf/activity_' + name + '.pdf');
	overlay.find('#current').text(curPdf);
 	overlay.find('#total').text(totPdf);
}

// preleoad images
function preload(imageArray, base) {
    $(imageArray).each(function(){
        (new Image()).src = base + this;
    });
}

$(document).ready(function(){
	
	var wrapper = $('#overlay-wrapper'),		// pointer to overlay wrapper
		overlay = $('#overlay'),				// pointer to overlay
		snapshot = overlay.find('#snapshot'),	// pointer to pdf image
		pdfX = 0,								// used when deterimining which side mouse is over for show/hide of arrows 
		pdfMidpoint = 253,						// used when deterimining which side mouse is over for show/hide of arrows 
		curPdf = 1,								// tracks current pdf page being shown
		totPdf = 1,								// stores total number of page images available for this activity 
		name = '';								// stores basename of game

	// prepare overlay
	wrapper.height($('body').height());
	
	// preload images
	preload(['arrow_right.png','arrow_left.png'], 'img/');
	var baseNames = [];
	$('#pdf-list a').each(function(ind) {
		preload(['preview-' + $(this).attr('id') + '-' + $(this).data('pdfs') + '.jpg'], 'img/pdf_screens/');	
	});
	
	// open overlay
	$('#pdf-list').delegate('a', 'click', function(e) {		

		// update content in overlay before showing it

		// reset
		curPdf = 1;
		wrapper.removeClass('horizontal vertical');

		// get link id
		name = (this == e.target) ? e.target.id : $(e.target).parent().attr('id');
		totPdf = $('#' + name).data('pdfs'); 		

		// update content 
		updateOverlay(name, curPdf, totPdf);
		
		// show overlay
		wrapper.addClass($('#' + name).data('orient')).show();

		// get measurements for arrow functionality after image is visible
		pdfX = snapshot.offset().left;
			
		return false;
	});

	// show arrows on hover
	$('#snapshot, #arrows').mousemove(function(e) {
		if (totPdf > 1 && snapshot.height() > 100) { // 100 is aribtrary value to ensure the image has loaded - all images are over 100px tall.
			if (e.pageX < pdfX + pdfMidpoint) {
				$('#arrows #prev').show();
				$('#arrows #next').hide();
			} else {
				$('#arrows #prev').hide();
				$('#arrows #next').show();
			}
			$(this).css( 'cursor', 'pointer' );
		}
	});


	// hide arrows on mouseout
	$('#snapshot, #arrows').mouseleave(function() {
		$('#arrows a').hide();
	});
	

	// cycle through available images
	$('#snapshot, #arrows').click(function(e) {
		e.preventDefault();
		if (totPdf > 1) {
			if (e.pageX < pdfX + pdfMidpoint) {
				(curPdf == 1) ? curPdf = totPdf : curPdf--;		
				updateOverlay(name, curPdf, totPdf);
			} else {
				curPdf == totPdf ? curPdf = 1 : curPdf++;
				updateOverlay(name, curPdf, totPdf);
			}
		}
	});


	// close overlay
	$('body').delegate('#overlay-wrapper', 'click', function(e) {
		var targetId = e.target.id;
		if (targetId == 'overlay-wrapper' || targetId == 'close') {
			wrapper.hide();
			// clear the overlay image to avoid flicker on next opened overlay
			overlay.find('#snapshot').attr('src', '');
		}
	});
});