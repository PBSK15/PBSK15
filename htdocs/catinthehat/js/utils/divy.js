define(['jquery'], function($){ return {
	current: 0,
	str: '',
	add: function(level, className, idName){
		if(level <= this.current){
			for(var i = 0; i < this.current + 1 - level; i++) this.str += '</div>';
		}
		this.str += '<div'+(className? ' class='+className:'')+(idName? ' id='+idName:'' )+'>';
		this.current = level;
		return this;
	},
	a: function(c, i){ return this.add(0,c,i)},
	b: function(c, i){ return this.add(1,c,i)},
	c: function(c, i){ return this.add(2,c,i)},
	d: function(c, i){ return this.add(3,c,i)},
	e: function(c, i){ return this.add(4,c,i)},
	f: function(c, i){ return this.add(5,c,i)},
	g: function(c, i){ return this.add(6,c,i)},
	h: function(c, i){ return this.add(7,c,i)},
	html: function(str) {
		this.str += str;
		return this;
	},
	pop: function() {
		for(var i = 0; i < this.current + 1; i++) this.str += '</div>';
		var string = this.str;
		this.str = '';
		return $(string);
	},
	one: function(className, idName) {
		return $('<div '+(className? ' class='+className:'')+(idName? ' id='+idName:'' )+'>');
	},
	scaleBox: function(box, s){
		for(var param in box) box[param] = box[param] * s;
		return box;
	}
	
	
}});