// Effects for use on Video, Printables and Games index pages:
// 2008-08-06 mitch_smith@wgbh.org
// Copyright (c) WGBH Educational Foundation
/*

*** REQUIRES MOOTOOLS V. 1.1  ***
    (These may interact badly with some native js methods (eg getElementById() )
    
*/

Fx.Properties = Fx.Styles.extend({	
			increase: function(){for (	var p in this.now) this.element[p] = this.now[p];	}	
		});



Fx.FlyingScroller = Fx.Properties.extend({
	initialize: function(el, options){
		this.parent(el, options);
		this.options = Object.extend(this.options || {}, Object.extend({
			paddingLeft: 0,
			paddingTop: 0
		}, options || {}));
	},
	toElement: function(el, paddingLeft, paddingTop){
		this.goTo(el.offsetLeft - (paddingLeft || this.options.paddingLeft || 0), el.offsetTop - (paddingTop || this.options.paddingTop || 0));
	},
	goTo: function(x, y){
		this.start({
			'scrollLeft': [this.element.scrollLeft, x],
			'scrollTop': [this.element.scrollTop, y]
		})
	}
});

var CGFx =
{
	start: function()
	{
		
		var main_nav = new Fx.FlyingScroller($('uno-vid'), {
				transition: Fx.Transitions.Quad.easeInOut,
				duration: 700,
				paddingLeft: 0,
				paddingTop: 0
				
			});

		var panes = $$('div.pane_wrapper');
		main_nav.clearTimer().toElement(panes[0]);
		//return false;
		
		var here = 0;
		if (document.location.hash) {
			here = document.location.hash.replace(/#/,'') - 1;
		}
		var back_button = $('prev_page_paddle').getElements('a')[0];
		var next_button = $('next_page_paddle').getElements('a')[0];
		var pn = $('foot_pane').getElements('img')[0];

		back_button.onclick = function() {		
			var next = (Math.abs(here + panes.length - 1) % panes.length);
			if (next == panes.length -1) {
				return false;
			} else { 
				main_nav.clearTimer().toElement(panes[next]);
				back_button.style.display = "inline";
				next_button.style.display = "inline";
				var p = here;
				var pn_image = "./img/" + p + '.gif';
				pn.src = pn_image;
				here = next;
				document.location.hash = '#' + p;
				if (next - 1 < 0) {
					back_button.style.display = "none";
				}
			}
			return false;
		};
		
		next_button.onclick = function() {		
			var next = (Math.abs(here + panes.length + 1) % panes.length);
			if (next == 0 ) {
				return false;
			} else { 
				main_nav.clearTimer().toElement(panes[next]);
				back_button.style.display = "inline";
				next_button.style.display = "inline";
				var p = next + 1;
				var pn_image = "./img/" + p + '.gif';
				pn.src = pn_image;
				here = next;
				document.location.hash = '#' + p;
				if (next + 1 == panes.length) {
					next_button.style.display = "none";
				}
			}
			return false;
		};
		
		if (here != 0) {
			var next = (Math.abs(here + panes.length) % panes.length);
			if (next == 0 ) {
				return false;
			} else { 
				main_nav.clearTimer().toElement(panes[next]);
				back_button.style.display = "inline";
				next_button.style.display = "inline";
				var p = next + 1;
				var pn_image = "./img/" + p + '.gif';
				pn.src = pn_image;
				here = next;
				document.location.hash = '#' + p;
				if (next + 1 == panes.length) {
					next_button.style.display = "none";
				}
			}
		} else {
			back_button.style.display = "none";
			document.location.hash = '#1'
		}
	}
};


window.addEvent('domready', CGFx.start);
