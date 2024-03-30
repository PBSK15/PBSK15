(function($) {
	var methods = {
		init: function(options) {
			var settings = {
				'speed': 1000
			};
			return this.each(function() {
			
				if (options) {
					$.extend(settings, options);
				}
				
				var $this = $(this);
				
				// If the plugin hasn't been initialized yet
				if ( ! $this.data('gallery') ) {
					$this.data('gallery', {
						'curr': 0,
						'prev': 1,
						'tid': 0,
						'total': $('.images img', this).length,
						'speed': settings.speed
					});
				}
				
				//show first slide
				$this.gallery('show');
				$this.gallery('centerNav');
				
				$('.btn-next', $this).click(function(e) {
					e.preventDefault();
					clearInterval($this.data('gallery').tid);
					$this.data('gallery').prev = $this.data('gallery').curr;
					if($this.data('gallery').curr < $this.data('gallery').total - 1){
						$this.data('gallery').curr++;
					} else {
						$this.data('gallery').curr = 0;
					}
					$this.gallery('show');
				});
				
				$('.btn-prev', $this).click(function(e) {
					e.preventDefault();
					clearInterval($this.data('gallery').tid);
					$this.data('gallery').prev = $this.data('gallery').curr;
					if($this.data('gallery').curr > 0){
						$this.data('gallery').curr--;
					} else {
						$this.data('gallery').curr = $this.data('gallery').total - 1;
					}
					$this.gallery('show');
				});
				
				$('.gallery-nav-dot', $this).click(function(e) {
					e.preventDefault();
					clearInterval($this.data('gallery').tid);
					$this.data('gallery').prev = $this.data('gallery').curr;
					$this.data('gallery').curr = $('.gallery-nav-dot').index(e.target);
					$this.gallery('show');
				});
				
				$this.data('gallery').tid = setTimeout(function(){$this.gallery('nextSlide')}, settings.speed);
				
			});
		},
		nextSlide: function() {
			g = this;			
			g.data('gallery').prev = g.data('gallery').curr;
			if(g.data('gallery').curr < g.data('gallery').total - 1){
				g.data('gallery').curr++;
			} else {
				g.data('gallery').curr = 0;
			}
			g.gallery('show');
			g.data('gallery').tid = setTimeout(function(){g.gallery('nextSlide')}, g.data('gallery').speed);
			
		},
		show: function() {
			curr = this.data('gallery').curr;
			prev = this.data('gallery').prev;
			if(prev != curr) {
				$('.images img', this).eq(prev).animate({
					'opacity': 0
				}, function() { $(this).hide() });
				$('.gallery-description-container', this).eq(prev).hide();
				$('.images img', this).eq(curr).delay(800).show().css({
					'opacity': 0,
					'visibility': 'visible'
				}).animate({
					'opacity': 1
				});
				$('.gallery-description-container', this).eq(curr).show();
				$('.gallery-nav-dot', this).eq(prev).removeClass('active');
				$('.gallery-nav-dot', this).eq(curr).addClass('active');
			}
		},
		centerNav: function() {
			$('.gallery-nav', this).css({
				'margin-left': (this.width() / 2 - $('.gallery-nav', this).width() / 2) - 5
			});
		}
	};
	$.fn.gallery = function(method) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' + method + ' does not exist on jQuery.gallery');
		}
	};
})(jQuery);
