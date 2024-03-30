define(['jquery'], function($){
	return {
		translateY: function(item, translate){
			this.prefix(item, 'transform', 'translate3d(0,'+translate+'px,0)');
		},
		translateX: function(item, translate){
			this.prefix(item, 'transform', 'translate3d('+translate+'px,0,0)');
		},
		transition: function(item, transition){
			var transform = transition.substring(0,9) == 'transform';
			this.prefix(item, 'transition', transition, transform);
			//this.prefix(item, 'transform', 'translateZ(0)');
		},
		prefix: function(item, a, b, prependB){
			var pres = ['-webkit-','-moz-','-ms','-o',''];
			for(var i = 0; i < pres.length; i++){
				if(!prependB) item.css(pres[i]+a, b);
				else item.css(pres[i]+a, pres[i]+b);
			}
		},
		translate2d: function(item,x,y){
			this.prefix(item, 'transform', 'translate3d('+x+'px,'+y+'px,0)');
		},
		translateAndScale: function(item, x, y, scale) {
			this.prefix(item, 'transform', 'matrix('+scale+',0,0,'+scale+','+x+','+y+')');
		}
		
	}
	
});