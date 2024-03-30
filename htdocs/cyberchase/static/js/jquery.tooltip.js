(function($) { 
	var methods = {
		init: function(options) {
			return this.each(function() {
				var settings = {
					'delay': 100,
					'offsetX': 0,
					'offsetY': 0
				};
				var $this = $(this);
				if ($this.attr('data-description')) {
					if (options) {
						$.extend(settings, options);
					} // If the plugin hasn't been initialized yet
					if (!$this.data('tooltip')) {
						$this.data('tooltip', {
							'tid': 0,
							'delay': settings.delay,
							'offsetX': settings.offsetX,
							'offsetY': settings.offsetY,
							'ttcontent': $this.attr('data-description'),
							'ttitle': $this.attr('title'),
							'z-index': 5
						});
					}
					$this.hoverIntent(function() {
						clearTimeout($this.data('tooltip').tid);
						if (!$this.data('tooltip').tooltip) {
							$this.data('tooltip').tid = setTimeout(function() {
								$this.tooltip('showTooltip')
							},$this.data('tooltip').delay);
						}
					}, function() {
						clearTimeout($this.data('tooltip').tid);
						$this.data('tooltip').tid = setTimeout(function() {
							$this.tooltip('hideTooltip')
						}, $this.data('tooltip').delay);
					});
				}
			});
		},
		createTooltip: function() {
			var tt = $('<div/>');
			tt.addClass('tooltip');
			tt.append('<div class="cap"/>');
			tt.append('<div class="tooltip-content"/>');
			tt.append('<div class="bottom"/>');
			return tt;
		},
		showTooltip: function() {
			tt = this.tooltip('createTooltip');
			var $this = this;
			$this.data('tooltip').tooltip = tt;
			$('.tooltip-content', tt).html('<div class="tooltip-title">' + $this.data('tooltip').ttitle + '</div>' + $this.data('tooltip').ttcontent);
			$('body').append(tt);
			diff = (tt.outerWidth() - $this.outerWidth()) / 2;
			tt.css({
				'top': $this.offset().top - tt.height() + $this.data('tooltip').offsetY + 20 + 'px',
				'left': $this.offset().left - diff + $this.data('tooltip').offsetX + 'px',
				'opacity': 0
			}).animate({
				'top': $this.offset().top - tt.height() + $this.data('tooltip').offsetY + 'px',
				'opacity': 1
			}, 'fast');
			tt.hover(function() {
				clearTimeout($this.data('tooltip').tid);
			}, function() {
				$this.data('tooltip').tid = setTimeout(function() {
					$this.tooltip('hideTooltip')
				}, $this.data('tooltip').delay);
			});
		},
		hideTooltip: function() {
			if (this.data('tooltip').tooltip) {
				this.data('tooltip').tooltip.remove();
				this.data('tooltip').tooltip = false;
			}
		}
	};
	$.fn.tooltip = function(method) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' + method + ' does not exist on jQuery.tooltip');
		}
	};
})(jQuery);
