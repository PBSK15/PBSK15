define({
	listen: function(item, func) {
		var clicking = false;
		item.bind('click', function(e) {
			if(!clicking){
				clicking = true;
				func();
				setTimeout(function(){ clicking = false }, 500);
			}
			e.preventDefault();
			return false;
		});
	}
});