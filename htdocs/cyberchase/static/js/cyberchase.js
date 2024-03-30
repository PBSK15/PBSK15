var cyberchase = {
	loadScripts: function() {
		var scripts = Array(
			STATIC_URL + 'js/jquery.tooltip.js',
			STATIC_URL + 'js/jquery.hoverIntent.js',
			STATIC_URL + 'js/jquery.printGallery.js'
		);
		var i = 0;
		function loadNext() {
			switch(i) {
				case scripts.length - 1:
					$.getScript(scripts[i], function() {
						cyberchase.init();
					});
					break;
				default:	
					$.getScript(scripts[i], function() {
						i++;
						loadNext();
					});

			}
		}
		loadNext();
	},
	init: function()
	{
		if($('#pbskidsgologinbar').length > 0)
		{
			$('body').css({
				'background-position': 'center 25px'
			});
			$('#homepage-swfobject').css({
				'margin-top': '25px'
			});
		}
		cyberchase.equalHeight('.result-item');
		if($('.character').length > 0)
		{
			$('.character').tooltip(
			{ 
				'offsetY': 20,
				'offsetX': 10,
				'delay': 500
			});
		}
		if($('.promo').length > 0)
		{
			$('.promo').tooltip(
			{
				'offsetX': 10,
				'delay': 500
			});
		}
		if($('.result-item').length > 0)
		{
			$('.result-item').tooltip().css({
				'visibility': 'visible'
			}).fadeIn(200);
		}
		$('.static-bg').mouseover(function()
		{
			$('img', this).animate({'opacity': 0.4}, 100).animate({'opacity': 1})
		});
		this.bindAnalytics();
	},
	equalHeight: function(e)
	{ //equal height columns where necessary
		if ($(e).length > 0)
		{
			var maxHeight = 0;
			$(e).each(function()
			{
				if ($(this).height() > maxHeight)
				{
					maxHeight = $(this).height();
				}
			});
			$(e).css('height', maxHeight + 'px');
		}
	},
	mbrecsAnim: function()
	{
		$('#motherboard-recommends').css({'top': '-400px'}).show().animate({'top': '0px'}, 500);
		cyberchase.equalHeight('.promo-title');
	},
	associatedContentAnim: function()
	{ //Associated content animation
		if ($('#associated-content').length > 0)
		{
			$('.associated-item').css({
				'visibility': 'visible'
			});
			$('.more-cool-stuff').css({'width': '0px', 'opacity': '0', 'display': 'block'}).delay(500).animate({'width': '249px', 'opacity': '1'}, 600);
		}
	},
	trackClick: function(e) {
		var params = $(this).attr('data-analytics').split('|')
		if (params.length > 3) {
			var val = parseInt(params.splice(3)[0]);
			if (!isNaN(val)) {
				params.push(val);
			}
		}
		GA_obj.trackEvent.apply(GA_obj, params)
	},
	bindAnalytics: function()
	{ // adds event tracking to links with class analytics-click
		var track = this.trackClick
		$('.analytics-click').unbind('click', track).bind('click', track);
	}
}

$(document).ready(function()
{
	cyberchase.loadScripts();
});