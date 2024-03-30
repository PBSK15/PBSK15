this.plum=this.plum || {};

(function($){

allcarousels=function() {
	$('.carousel').each(function() {
		$(this).removeClass('static');
		var imagecount=0;
		$(this).data('ch',$(this).children('img'));
		var parent=this;
		this.imageset=[];
		$(this).children('img').each(function() {
			parent.imageset.push(this);
			$(this).hide();
			$(this).data("p",parent);
			imagecount++;
		});
		
		$(this).children('.c_prev').each(function() {
			$(this).on('click',function(){parent.prev()});
		});
		
		$(this).children('.c_next').each(function() {
			$(this).on('click',function(){parent.next()});
		});
		this.currentimage=this.imageset[0];
		$(this.currentimage).show();
		this.imagenum=1;
		this.cimages=imagecount;
		
		this.next=function() {
			this.imagenum++;
			$(this.currentimage).hide();
			if(this.imagenum > this.cimages) {
				this.imagenum=1;
			}
			var newimage=this.imageset[this.imagenum-1];
			$(newimage).show();
			this.currentimage=newimage;
		}
			
		this.prev=function() {
			this.imagenum--;
			$(this.currentimage).hide();
			if(this.imagenum < 1) {
				this.imagenum=this.cimages;
			}
			var newimage=this.imageset[this.imagenum-1];
			$(newimage).show();
			
			this.currentimage=newimage;
		}
	

		
	});
	}
	
	plum.allcarousels=allcarousels;

})(jQuery);
	
	