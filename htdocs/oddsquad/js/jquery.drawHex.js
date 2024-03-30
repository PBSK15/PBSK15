function calcHex() {
	$('.hex').remove();
	
	var hex = {
			size: 60,
			spacing: 4
		};
	
	$('.hexbg').each( function() {
		var	hexStage = {
				x: $(this).width(),
				y: $(this).height()	
		}
		
		hexStage.cols = Math.ceil((hexStage.x / (hex.size + (hex.spacing * 2))) + 2);
		hexStage.rows = Math.ceil((hexStage.y / (hex.size + (hex.spacing * 2))) * 2) + 2;
		
		var direction = $(this).attr('data-startFrom') || 'top';
		
		drawHexs(hexStage.rows, this, direction, hex.size, hexStage.cols);
		
	});
	
}

function isEven(value) {
	return (value%2 == 0);
}


function drawHexs(qty, elem, direction, size, cols) {
	for (var ri = 0; ri < qty; ri++) {
		
		var evenodd = isEven(ri) === true ? 'even' : 'odd';
		
		if(direction == 'top') {
			var hexOffset = ri * 31.5 - 30;
		} else {
			var hexOffset = ri * 31.5 + 30;
		}
		
		for (var i = 0; i < cols; i++) {
			$(elem).append('<span class="hex ' + evenodd + '" style="' + direction + ': ' + hexOffset + 'px; left: ' + (i * (size + (size / 2) + 20)) + 'px"><em></em></span>');
		}
		
		//'$(elem).prepend('<ul class="hexRow hexRow-' + i + ' " style="' + direction + ': ' + hexOffset + 'px" ></ul>');
	}
	
}