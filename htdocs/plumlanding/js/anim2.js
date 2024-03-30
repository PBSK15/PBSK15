// try this anim bit again...

// requires jQuery
this.plum=this.plum || {};

(function($){

domanimation=function() {

this.startanimation=function() {
	if(!ticking) {
		me=this;
		window.animate(function(){me.tick()});
		ticking=true;
		for (var i=0;i<this.movercount;i++) {
			var t=this.movers[i];
			t.update();
		}
	}	
}


window.animate = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 30);
          };
})();

ticking=false;


this.movers=[];
this.movercount=this.movers.length;

this.addmover=function(mover) {
	this.movers.push(mover);
	this.movercount=this.movers.length;
}

this.flipper=function(DOMobj,DOMimg) {
	// flipper is a DIV that flips its inner IMG to different frames
	this.img=DOMimg;
	this.dom=DOMobj;
	
	this.rev=1;
	
	this.framewidth=parseInt($(DOMobj).css('width'));
	this.frameheight=parseInt($(DOMobj).css('height'));
	
	this.lastframe=parseInt(this.img.width/this.framewidth)-1;
	
	this.framerate=60;
	this.updatecount=0;
	this.currentframe=0;
}

var z=this.flipper.prototype;

z.update=function() {
		if(!this.playing) {
			return;
		}
		this.updatecount++;
		if(this.updatecount > this.framerate) {
			this.currentframe+=this.rev;
			
			if(this.rev>0) {
				if(this.currentframe>=this.lastframe) {
				// end of the road!
					if(this.loop) {
						this.currentframe=0;
					} else {
						this.currentframe=(this.detenteframe!==undefined)?this.detenteframe:this.lastframe;
						var myself=this;
						this.playing=false;
						$.event.trigger({
						"type": "flipDone",
						"mover": myself
						});
					}
			
				}
			}else {
			// going backward
				if(this.currentframe<0) {
				// end of the road!
					if(this.loop) {			
						this.currentframe=this.lastframe;
					} else {
						this.currentframe=(this.detenteframe)?this.detenteframe:0;
						var myself=this;
						this.playing=false;
						$.event.trigger({
						"type": "flipDone",
						"mover": myself
						});
					}
			
				}
			}
			$(this.img).css('left',this.framewidth*-1*this.currentframe + "px");
			this.updatecount=0;
		}
}

	z.play=function(fromframe) {
		this.rev=1;
		if(this.currentframe==this.lastframe) {
			this.currentframe=-1;
		}
		this.playing=true;
	}
	
	z.reverse=function(fromframe) {
		if(this.currentframe==0) {
			this.currentframe=this.lastframe+1;
		}
		this.rev=-1;
		this.playing=true;
	}
z.dom;
z.img;
z.loop;
z.playing;
z.rev;
z.updatecount;
z.framerate;
z.framewidth;
z.frameheight;
z.currentframe;
z.detenteframe;


this.mover=function(DOMobj) {
	// the mover is a DOM object that can move around.
	
	this.dom=DOMobj;
	this.pos={x:0,y:0};
	this.mv={x:1,y:1};
	this.path=[];
	this.next=0;
	this.basedim={w:parseInt($(DOMobj).css('width')),h:parseInt($(DOMobj).css('height'))};
	$(this.dom).css('width',this.basedim.w + "px");
	$(this.dom).css('height',this.basedim.h + "px");
	
	
}

z=this.mover.prototype;

z.dom;
z.basedim;
z.pos;
z.mv;
z.path;
z.loop;
//z.pathdone=function() {};
z.update=function() {
	//	$(this.dom).css('left',this.pos.x++  + "px");

		if(this.path.length<=0) {
			return;
		}
		
		this.pos.x=this.path[this.next]
		this.pos.y=this.path[this.next+1];

		
		this.next+=2;
		myself=this;
		if(this.next>=this.path.length) {
			if(this.loop) {
				this.next=0;
			} else {
			this.next=0;
		$.event.trigger({
			"type": "pathDone",
			"mover": myself
		});
		}
		}



		$(this.dom).css('left',this.pos.x  + "px");
		$(this.dom).css('top',this.pos.y  + "px");
				
		
	}

z.scale=function(x,y) {

	if(!y) {
		y=x;
	}
	/*
	$(this.dom).css('-webkit-transition','width 2s');
	$(this.dom).css('-webkit-transition','height 2s');
	$(this.dom).css('transition','width 2s');
	$(this.dom).css('transition','height 2s');*/
	var nw=parseInt(this.basedim.w*x);
	var nh=parseInt(this.basedim.h*y);
	
	$(this.dom).css('width',nw + "px");
	$(this.dom).css('height',nh + "px");
}


this.tick=function() {
	ticking=false;
	this.startanimation();
}

}





plum.domanimation=domanimation;
	

})(jQuery);