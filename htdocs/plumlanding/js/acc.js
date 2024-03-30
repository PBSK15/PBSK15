
this.plum=this.plum || {};

(function($){

/* make an accordion: 
	is passed a div element for the opener (the link that toggles the accordion)
	passed another div element for the content that gets toggled
	a third parameter, optional boolean, keeps the accordions open when the page is loaded; otherwise, they're closed
	
	Sends an event when clicked and another callback when open
*/
	accordion=function(opener,target,togglechevron,startopen) {
		this.opener=opener;
		this.target=target;
		this.target.parent=this;
		this.activate();
		this.hidden=false;
		
		
		if(togglechevron) {
				var src=togglechevron.src;
				var preload=new Image();
				preload.src=src.replace('_close','_open');
				preload.onload=function() {
					this.onload=null;
					this.src=src.replace('_open','_close');
				}
				this.toggleindicator=[togglechevron,src.replace('_close','_open'),src.replace('_open','_close')]; // this is a little chevron showing whether open or closed
				
				
		}
//		startopen=true;

		this.toggleindicator[0].src=this.toggleindicator[1];

		if(!startopen) {
			if(this.toggleindicator) {
				this.toggleindicator[0].src=this.toggleindicator[2];
			}
			this.hide();
		}
	};
	
	var p=accordion.prototype;
	p.hidden;
	p.opener;
	p.target;
	p.toggleindicator;
	
	p.didopen=function() {
		// 'this' is the this.target
		var myself=this;
		$.event.trigger({
			"type": "accToggleEnd",
			"opener": myself.parent.opener,
			"target": myself,
			"hidden": myself.parent.hidden
		});
	}	
	
	
	p.toggle=function(howlong) {
	
	
		var opentime=(howlong)?howlong:300;
		var myself=this;
		$.event.trigger({
			"type": "accToggleStart",
			"opener": myself.opener,
			"target": myself.target,
			"hidden": myself.hidden
		});
		this.hidden=!this.hidden; // set hidden AFTER sending the event

		if(this.toggleindicator) {
		this.toggleindicator[0].src=this.toggleindicator[1];
			this.toggleindicator[0].src=(this.hidden)?this.toggleindicator[2]:this.toggleindicator[1];
		}
		
		$(this.target).slideToggle(opentime,p.didopen);
	}
	
	p.close=function() {
		// close without sending an event
		this.hidden=true;
		if(this.toggleindicator) {
				this.toggleindicator[0].src=(this.hidden)?this.toggleindicator[2]:this.toggleindicator[1];
		}
		$(this.target).slideToggle(300,p.didopen);

	}
	
	p.show=function() {
		this.hidden=false;
		if(this.toggleindicator) {
				this.toggleindicator[0].src=(this.hidden)?this.toggleindicator[2]:this.toggleindicator[1];
		}
		$(this.target).show();
	}

	p.hide=function() {
		this.hidden=true;
		if(this.toggleindicator) {
			this.toggleindicator[0].src=(this.hidden)?this.toggleindicator[2]:this.toggleindicator[1];
		}
		
		$(this.target).hide();
	}
	
	p.activate=function() {
		var me=this;
		$(this.opener).on('click',function() {me.toggle();});
	}
	
	p.deactivate=function() {
		$(this.opener).off('click',function() {me.toggle();});
	}

/*	
	function openacc(ev) {
		var toopen=ev.currentTarget.id;
		$('#d-' + toopen).slideToggle(300);
	}
*/	

	

	plum.accordion=accordion;
	
	var accarray;
	
	plum.allaccordions=function() {
		accarray=[];
		$(".acc").each(function() {
			// first (block-level) child is the accordion; its sibling is the thing to open.. or how about "acc-toggle" class and "acc-open" class
			var control=$(this).find(".acc-toggle")[0];
			var toopen=$(this).find(".acc-open")[0];
			var $chevron=$(this).find(".acc-chevron"); // find chevron toggle
			if($chevron[0]) {
				accarray.push(new plum.accordion(control,toopen,$chevron[0]));
			} else {
				accarray.push(new plum.accordion(control,toopen));
			}
		});
		return accarray;
	}
	
	/*
	plum.openallaccordions=function(arr) {
		$(accarray).each(function() {
			this.show();
		});
	
	}*/
})(jQuery);
