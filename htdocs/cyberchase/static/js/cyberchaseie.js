$(document).ready(function() {
	var $window = $(window),
			$body = $('body'),
		  ie6bgpos = 0,
		  centerBG = function() {
				ie6bgpos = ($window.width() - 1600) / 2;
				$body.css('backgroundPosition', ie6bgpos + 'px ' + '0px');
			};
			
	centerBG();
	$window.resize(function() {
		centerBG();
	});
	
	$('.promo, .result-item, .associated-item').live('click', function(e) {
		e.preventDefault();
		// IE block anchor fix
		window.location = $(this).attr('href');
	});

	$('#footer-main-nav ul, #footer-secondary-nav ul').each(function() {
		var t = $(this);
		var w = 0;
		t.contents().each(function() {
			w += $(this).width()
		})
		t.width(w);
	});
	
});