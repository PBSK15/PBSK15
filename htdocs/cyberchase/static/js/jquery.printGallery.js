$(document).ready(function() {
		
		$('.printable-preview').css({
			'visibility': 'visible'
		});
		$('#printable-images-holder img').hide();
		$('#printable-images-holder img').eq(0).show();
		
		var curr = 0;
		var prev = 0;
		var total = $('#printable-images-holder img').length;
		//centerVertical();
		if(total == 1) {
			$('#btn-print-prev').css('visibility', 'hidden');
			$('#btn-print-next').css('visibility', 'hidden');
		} else {
			//centerHorizontal();
			showPageNumber();
			$('#btn-print-prev').click(function(e) {
				e.preventDefault();
				prev = curr;
				if(curr === 0) {
					curr = total - 1;
				}else{
					curr--;	
				}
				$('#printable-images-holder img').eq(curr).show();
				$('#printable-images-holder img').eq(prev).hide();
				//centerVertical();
				showPageNumber();
				});
			
			$('#btn-print-next').click(function(e) {
				e.preventDefault();
				prev = curr;
				if(curr == total - 1) {
					curr = 0;
				}else{
					curr++;	
				}
				$('#printable-images-holder img').eq(curr).show();
				$('#printable-images-holder img').eq(prev).hide();
				//centerVertical();
				showPageNumber();
				});
		}
		
		/*function centerVertical() {
			$('.printable-images').eq(curr).css({ 'margin-top': (400 - $('.printable-images').eq(curr).height()) / 2 + 'px'	});
		}*/
		
		
		function showPageNumber() {
			$('#pageNumber').text("Page " + (curr+1) + " out of " + total);
		}
		
});