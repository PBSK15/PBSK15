// note about shape encodings:
// 64-bit encoding is A-Za-z0-9+/
// for two-digit path pieces, positive values are A-Za-g; neg are g-z0-9+/ in .1 pixel increments. AA=0; AB=1; gA=0, gB=-1
// path starting position is usually digits 2&3 for x, 4&5 for y
// "moveto" is either an A (000000) or E (000100);
// "lineto" is either an I (001000) or M (001100);
// "quadcurveto" is either a Q (010000) or U (010100);
// "beziercurveto" is either a Y (011000) or c (011100);
// "close path" is either a g (100000) or k (100100); 
// so a 'gA' often signals a new path

(function (lib, img, cjs) {

var p; // shortcut to reference prototypes



(lib.gametext = function(str,style) {
	//	this.title=new cjs.Text('YOUR MISSION','30px Dosis-Bold','#FFF');
	var text;
	if(style==".game-blurb-sm") {
		text=new cjs.Text(str,'500 24px "Dosis"','#311C79');	
	}
	
	if(style==".game-blurb") {
		text=new cjs.Text(str,'500 30px "Dosis"','#311C79');	
	}
	
	if(style==".projection-head") {
		text=new cjs.Text(str,'700 30px "Dosis"','#ffffff');
	}

	if(style=="h1") {
		text=new cjs.Text(str,'700 62px "Dosis"','#311C79');
	}
	
	if(style=="h3") {
		text=new cjs.Text(str,'700 37px "Dosis"','#ffffff');
	}
	
	if(style==".picture") {
		text=new cjs.Text(str,'500 20px "Dosis"','#ffffff');
	}

	if(style==".scoretitle") {
		text=new cjs.Text(str,'500 22px "Dosis"','#311C79'); // was #352C74
	}
	
	if(style==".btn") {
		text=new cjs.Text(str,'700 19px "Dosis"','#ffffff'); 
	}
	text.textBaseline='middle';
	return text;

});

(lib.invisiBtn = function(width,height) {
	this.initialize();
	var taparea=new cjs.Shape();
	taparea.graphics.f('#000000').drawRect(0,0,width,height);
	this.hitArea=taparea;
	//this.graphics.f('#00ffff').drawRect(0,0,width,height);
}).prototype=p=new cjs.Shape();


(lib.shinylight = function(color,width,height,noshine) {
	this.initialize();
	this.width=width;
	if(noshine) {
		this.doshine=false;
	} else {
		this.doshine=true;
	}
	this.height=height;
	this.setcolor(color);
}).prototype=p=new cjs.Shape();

darken=function(hexcolor) {
	// color is a css color string that looks like '#ffffff'
		var colorarr=new Array;
		var newcolor;
		if(hexcolor.indexOf('#')>-1) {
			newcolor=hexcolor.substr(1,hexcolor.length-1);
		} else {
			newcolor=hexcolor;
		}

		colorarr[0]=parseInt(newcolor.substr(0,2),16);
		colorarr[1]=parseInt(newcolor.substr(2,2),16);
		colorarr[2]=parseInt(newcolor.substr(4,2),16);

	// reduce everything by some amount.
		var change=.8;
		colorarr[0]*=change;
		colorarr[1]*=change;
		colorarr[2]*=change;
	// send hex color back
	
		newhex=doublehex(colorarr[0]) +doublehex(colorarr[1])+doublehex(colorarr[2]) 
		return "#"+newhex;
};

doublehex=function(number) {
	return zeropad(parseInt(number).toString(16));
}

zeropad=function(string,places) {
	if(string.length<2) {
		return "0"+string;
	} else {
		return string;
	}
}

p.setcolor=function(color) {
	this.graphics.clear();
	var darkcolor=darken(color);
	this.graphics.s('#ffffff').ss(2).drawEllipse(0,0,this.width,this.height);
	this.graphics.s('#999999').ss(1).f(darkcolor).drawEllipse(1,1,this.width-2,this.height-2);
	this.graphics.s().f(color).drawEllipse(this.width*.05,this.height*.03,this.width*.9,this.height*.8);
	if(this.doshine) {
		this.graphics.s().f(cjs.Graphics.getRGB(0xffffff,0.8)).drawEllipse(this.width*.35,this.height*.1,parseInt(this.width*.3),parseInt(this.height*.2));
	}
};

(lib.fuzzycircle = function(radius,outline,color) {
	this.initialize();
	this.radius=radius;
	this.outline=outline;
	if(!color) {
		this.color=0xFFFFFF;
	} else {
		this.color=color;
	}

//		this.graphics.f(cjs.Graphics.getRGB(this.color,0.498)).s().drawCircle(0,0,this.radius+(2*this.outline));
//		this.graphics.f(cjs.Graphics.getRGB(this.color,0.749)).s().drawCircle(0,0,this.radius+this.outline);
//		this.graphics.f(cjs.Graphics.getRGB(this.color)).s().drawCircle(0,0,this.radius);
	// Layer 1
/*
	this.redrawl=function() {
		this.graphics.clear();
		this.graphics.f(cjs.Graphics.getRGB(this.color,0.498)).s().drawCircle(0,0,this.radius+(2*this.outline));
		this.graphics.f(cjs.Graphics.getRGB(this.color,0.749)).s().drawCircle(0,0,this.radius+this.outline);
		this.graphics.f(cjs.Graphics.getRGB(this.color)).s().drawCircle(0,0,this.radius);
		this.nominalBounds = new cjs.Rectangle(0,0,this.radius*2,this.radius*2);
	}
	
*/	

	this.redraw();
	
}).prototype = p = new cjs.Shape();

p.redraw=function() {
		this.graphics.clear();
		this.graphics.f(cjs.Graphics.getRGB(this.color,0.25)).s().drawCircle(0,0,this.radius+(2*this.outline));
		this.graphics.f(cjs.Graphics.getRGB(this.color,0.50)).s().drawCircle(0,0,this.radius+this.outline);
		this.graphics.f(cjs.Graphics.getRGB(this.color)).s().drawCircle(0,0,this.radius);
		this.nominalBounds = new cjs.Rectangle(0,0,this.radius*2,this.radius*2);
}
;

p.setColor=function(color) {
		this.color=color;
		this.redraw();
	}
;

(lib.toucharrow=function() {
	this.initialize();
	
	
	this.graphics.f("#EF4F11").drawRoundRect(-20,-20,40,40,5);
	
	this.graphics.f("#FFFFFF").s().p("AgNCSQgEgJABgUQABgGgBgpQgzAEgcAAQgxAAgSgSQgRgQAAgoQAAgnAUgOQATgNAzAAIBIACQABg2ADgRQADgLAIgIQAGgHALAAIAMABQAdALBiBrIALAOQAMAPACALQAEATgPAPQh7BygUALQgLAFgJAAQgNAAgFgQg");


}).prototype=p=new cjs.Shape();


(lib.tpanel=function(width,height) {	
	//this.graphics.f(cjs.Graphics.getRGB(0xffffff,.75)).drawRect(0,0,width,height);
	this.initialize();
	this.setsize=function(width,height) {
		this.graphics.clear();
		this.width=width;
		this.height=height;
		this.graphics.f(cjs.Graphics.getRGB(0xe1e0df,.75)).drawRect(0,0,width,height);
	}
	
	this.setsize(width,height);
}).prototype=p=new cjs.Shape();

(lib.topbar = function(width,height,outline,color) {
// creates a purple bar with faded bottom
	this.initialize();
	if(!outline) {
		outline=2;
	}
	if(!width) {
		width=1024;
	}
	if(!height) {
		height=60;
	}
	if(!color) {
		this.color=0x6A51C2; // the purple is #6A51C2, or 106,81,194
		//color=0xff0000;
	} else {
		this.color=color;
	}

	this.redraw=function() {
		this.graphics.clear();	
		this.graphics.f(cjs.Graphics.getRGB(this.color,0.498)).s().drawRect(0,0,width,height+outline*2);
		this.graphics.f(cjs.Graphics.getRGB(this.color,0.749)).s().drawRect(0,0,width,height+outline);
		this.graphics.f(cjs.Graphics.getRGB(this.color)).s().drawRect(0,0,width,height);
	}	
	
	
	this.setcolor=function(color) {
		this.color=color;
		this.redraw();
	}

	this.setcolor(this.color);
	return this;
}).prototype=p=new cjs.Shape();
p.nominalBounds=new cjs.Rectangle(1,5,57.3,57);



(lib.plinkscreen = function(bgimage,content) {
	this.initialize();
	this.frame=new cjs.Shape();
	// color is #6A51C2, or 106,81,194
//	this.curve="AaOpyQBHG7ACEJQABDMgZCAQgjC7hkCEQj/FPrZAtQq5ArsngsQmTgWkIgfQguirgujfQhdnAgBkJQgCjbATh6QAfjHBeiKQD2lrLhgiQK5ghNFBDQGjAiEXAoQAjCoAjDdg";
	this.curve="EAnhAB2QABEogjC4QgzEOiRC/QlwHlwdBBQvvA+yOhBQlrgUlRgeIkIgaQhDj2hClEQiFqFgDmAQgBk9AbiwQAskfCIjJQFkoLQpgyQPvgvS5BhQJdAwGTA6IBlIzQBnJ/ACF/g";
/*	this.frame.graphics.f().s("rgba(106,81,194,0.2)").ss(11,1,1).p(this.curve);
	this.frame.graphics.f().s("rgba(106,81,194,0.35)").ss(8,1,1).p(this.curve);
	this.frame.graphics.f().s("rgba(106,81,194,0.5)").ss(5,1,1).p(this.curve);
	this.frame.graphics.f().s("rgba(106,81,194,1)").ss(2,1,1).p(this.curve);
*/	

	this.masky=new cjs.Shape();
	this.masky.graphics.f('#ffffff').p(this.curve);


	this.width=500;
	this.height=340;
	
	var my=this;

	this.redraw=function(size) {
	//	this.frame.graphics.f('#ffffff').p(this.curve);
		my.frame.graphics.f().s(cjs.Graphics.getRGB(0x6A51C2,.2)).ss(11,1,1).p(my.curve);
		my.frame.graphics.f().s(cjs.Graphics.getRGB(0x6A51C2,0.35)).ss(8,1,1).p(my.curve);
		my.frame.graphics.f().s(cjs.Graphics.getRGB(0x6A51C2,0.5)).ss(5,1,1).p(my.curve);
		my.frame.graphics.f().s(cjs.Graphics.getRGB(0x6A51C2)).ss(2,1,1).p(my.curve);
	}
	

	this.setbgimage=function(imagein) {
		var ind=this.getChildIndex(this.background);
		var bit=new cjs.Bitmap(imagein);
		if(ind >=0) {
			this.removeChild(this.background);
		}
		this.background=bit;
		this.background.x=this.left;
		this.background.y=this.top;
		if(ind >=0) {
			this.addChildAt(this.background,ind);
		} else {
			this.addChild(this.background);
		}
		this.background.mask=this.masky;
	}
	
	this.setbgcolor=function(color) {
		var ind=this.getChildIndex(this.background);
		var bit=new cjs.Shape();
		bit.graphics.f(color).p(this.curve);
		if(ind >=0) {
			this.removeChild(this.background);
		}
		this.background=bit;
		if(ind >=0) {
			this.addChildAt(this.background,ind);
		} else {
			this.addChild(this.background);
		}
		this.background.mask=this.masky;
	}
	
	this.setheader=function(color) {
		if(color!=null) {
			this.header.setcolor(color);
		}
		this.header.visible=true;
	}
	
	this.hideheader=function() {
		this.header.visible=false;
	}
	
	this.settitle=function(titlestring) {
		this.title.visible=true;
		this.title.text=titlestring;
	}

	this.top=this.height*-.5;
	this.left=this.width*-.5;
	
	this.redraw();
	if(bgimage) {
		this.setbgimage(bgimage);
	} else {
		this.setbgcolor('#ffffff');
	}
	
	
	this.open=function(scalefrom,scaleto,callback) {
		this.scaleX=this.scaleY=scalefrom;
		cjs.Tween.get(this).to({scaleX:scaleto,scaleY:scaleto},500,createjs.Ease.backOut).call(callback);
	}
	
	
	this.setcontent=function(newcontent) {
		if(!newcontent) {			
			this.content=new cjs.Container();
		} else {
		var ind=this.getChildIndex(this.content);
		if(ind >= 0) {
			// need to swap content
			this.content.mask=null;
			this.removeChild(this.content);
			this.content=newcontent;
			this.addChildAt(this.content,ind);
		} else {
			// content hasn't been added yet, so this is init
			this.content=newcontent;
		}
		}
		this.content.mask=this.masky;
	}
	
	
	if(content) {
		this.setcontent(content);
	} else {
		this.setcontent();
	}
	
	//this.background.mask=this.masky;
	//this.addChild(this.background);
	this.header=new lib.topbar(this.width,70,2,0x9E89E6);
	this.header.x=this.width*-.5;
	this.header.y=this.height*-.5;
	this.header.mask=this.masky;
	
//	this.title=new cjs.Text('YOUR MISSION','30px Dosis-Bold','#FFF');
	this.title=new lib.gametext('YOUR MISSION','.projection-head');
	this.title.textAlign="center";
	this.title.y=this.height*-.5 + 42;
	this.title.x=0;//this.width*-.5;	
	
	this.content.mask=this.masky;
	this.addChild(this.content);
	
	this.addChild(this.header);
	this.addChild(this.title);
	
	this.title.visible=false;
	this.addChild(this.frame);
	//return this;
}).prototype=p=new cjs.Container();
//p.background=new cjs.Bitmap('i/screen.png');




(lib.keyarrow=function() {
	this.initialize();
	this.graphics.clear();
//	this.graphics.s(2).moveTo(0,0).lineTo(40,0).drawCircle(40,0,3);

	this.graphics.f("#15898D").s().p("AhvCQQgOAAgKgKQgKgKAAgOIAAjaQAAgOAKgLQAKgKAOAAIDfAAQAOAAAKAKQAKALAAAOIAADaQAAAOgKAKQgKAKgOAAg");
	
	this.graphics.f("#FFFFFF").s().p("AgxgmIBjAmIhjAng");


}).prototype=p=new cjs.Shape();



(lib.tvsnow=function(width,height) {
	this.initialize();
	this.frames=new Array;
	this.width=width;
	this.height=height;
	var color=cjs.Graphics.getRGB(0xFFFFFF,.5);
	this.framenum=0;
	this.cframe;
	var top=-.5*this.height;
	var left=-.5*this.width;
	var rn=Math.random;
	
	var spacing=this.height/5;
	
	
	for(var c=0;c<5;c++) {
		var frame=new cjs.Shape();
		frame.x=left;
		frame.y=top;
		frame.graphics.clear();
		var vn=5;
		var last=rn() * spacing;	
		// horizontals
		for(var gi=0;gi<vn;gi++) {
			
			var pos=last + rn() * spacing;
			var height=10+rn() * spacing*.4;
			frame.graphics.f(color).s().drawRect(0,last,1000,height);
			last=pos+height;
			

		}
		// lightning bolts
		var baseleft=c*30;
	
		for(var i=0;i<vn;i++) {
			var vert=spacing/2;
			var dleft=i*this.width/vn + baseleft;
			var bottom=this.height;
			frame.graphics.beginFill(color); 
			frame.graphics.moveTo(dleft+0,0);	
			for(var l=1;l<=10;l++) {
				var lr=l%2;
				frame.graphics.lineTo(dleft + spacing*lr,l*vert);
			}
			frame.graphics.lineTo(dleft+spacing,bottom);
			
			for(var l=0;l<10;l++) {
				var lr=l%2;
				var width=-10-rn()*40;
				frame.graphics.lineTo(width+dleft + spacing*lr,bottom-((l)*vert));
			}
			
			frame.graphics.lineTo(dleft+0,0);
			frame.graphics.endFill();

		}
		
		this.frames.push(frame);
		this.addChild(frame);
		this.cframe=frame;
	}


	this.update=function() {
			//return;
			this.cframe.visible=false;
//			this.removeChild(this.cframe);
			this.framenum=(this.framenum+1<this.frames.length) ? this.framenum+1:0;

			this.cframe=this.frames[this.framenum];
//			this.addChild(this.cframe);
			this.cframe.visible=true;
		}

}).prototype=p=new cjs.Container();



(lib.checkmark = function() {
		this.initialize();
		this.graphics.f("#5DBE3F").s().p("AjcDXQhLhPgNgdQgag8AlglQAPgNAXAAQAfAAAkAZIA2AwIAxAtQAVggAvhCQAvhFAWgcIAIgLQBsiMAfgdQAagZASgLQARgLAQAAQAMAAANAHQAXAOgBAcQgBAXgTAtQgRAlgjA+QgnBEgjAzIgVAgQhFBsgrAzQhJBZg1AAQgtAAhZhdg");
		
		this.graphics.f("#FFFFFF").s().p("AjiDfQhNhQgOggQgdhCAqgqQASgQAbAAQAjAAAmAbQASAOAkAjIApAlIBFhjIA+hXIAJgLQBriMAggeQAcgbATgMQATgLASAAQAPAAAPAJQAeARgCAkQgCAYgUAtQgRAlgkA/QgmBEgjAzIgVAgQhNB5gwA2QhEBOg2AAQgwAAhchfgAkiARQggAhAYA1QAMAbBKBOQBWBaAoAAQA3AABThtQAVgbBciMQAigxAmhDQAkg/ARglQAUguAAgWQgBgTgRgKQgKgGgKAAQgZAAgtAsQgVAUgrA1IhSBqQgYAgg3BPQg3BPgIAPIhBg7QgkgigLgIQgggZgdAAQgTAAgMAMg");
}).prototype=p=new cjs.Shape();

(lib.xmark=function() {
	this.initialize();

	this.graphics.f("#CA000C").s().p("ACZD/QgWgPhahZIgpgqIgoAqQhaBZgXAPQggAZgcAAQgUAAgPgNQgngfAxhKQAVgiBHhQIArgwIgrgvQhHhRgVghQgxhKAngfQAPgNAUAAQAbAAAiAYQAUAPBcBbIAoAqIApgqQBYhYAZgSQAhgYAbAAQAUAAAQANQAmAegwBLQgUAfhIBSIgsAwIArAwQBFBNAYAlQAwBKgmAfQgQANgUAAQgbAAgigZg");
	this.graphics.f("#FFFFFF").s().p("ACUEIQgXgQhbhaIgigjIghAjQhdBbgVAOQgjAbgfAAQgXAAgTgPQguglA2hRQAVghBIhSIAmgqIgmgpQhFhOgYgkQg2hTAugkQASgPAYAAQAfAAAjAaQAZASBZBZIAhAiIAigiQBahaAYgRQAjgaAfAAQAYAAASAPQAuAlg2BSQgXAjhGBPIgmApIAmAqQBHBRAWAhQA2BSguAlQgTAPgXAAQgfAAgjgagAAwCPQBYBYAXAQQAfAXAYAAQARAAAMgLQAggZgshDQgVgghGhQIgxg3IAxg2QBEhNAXgjQAshDgggZQgMgLgRAAQgYAAgfAXQgVAPhaBZIgwAxIgvgxQhahZgVgPQgfgXgYAAQgQAAgNALQggAZAsBDQAVAgBGBQIAyA2IgxA3QhHBPgVAhQgsBDAgAZQANALAQAAQAYAAAfgXQAXgQBYhYIAvgxg");
}).prototype=p=new cjs.Shape();


(lib.pointbubble=function() {
	this.initialize();
	this.shape = new cjs.Shape();
	this.shape1 = new cjs.Shape();
	this.middle;
	
//this.shape.graphics.f("rgba(0,0,0,0.149)").s().p("AkMEOQhshHARipQARioBmhfQBnhfCNgBQCOgCBoBjQBoBjAICPQAHCRhcBRQhcBRitAMQgXABgYAAQiMAAhdg8g");
//this.shape.graphics.f("#FFFFFF").s().p("AkXEfQh2hNASi3QASivBshkQBshkCVgCIADAAQCUABBtBmQBtBpAJCWQAHCchjBXQhiBWizAMQgXABgZAAQiRAAhjg/gAjwjpQhmBfgRCnQgRCqBsBHQBdA8CMABIAvgCQCtgMBchRQBchRgHiSQgIiPhohiQhmhiiNAAIgDAAQiMABhoBgg");

	var bshape="QhyhLASivQARisBqhhQBphiCRgBIADAAQCPgBBrBlQBrBlAICTQAHCWhgBVQheBTixAMQgWABgZAAQiPAAhfg9g";
	
// shadow behind
	this.shape.graphics.f("rgba(0,0,0,0.149)").s().p("AjRFX"+bshape);

// bubble BG
	this.shape.graphics.f("#5DBE3F").s("#FFFFFF").ss(2).p("AkREX"+bshape);
		
	//this.shape.graphics.f("#9ED688").s().p("Ah4iPQC0ArA9D0QhKiqinh1g");
	
// highlight
	//this.shape1.graphics.f("#9ED688").s().p("ABAkiQC0ArA9D0QhKiqinh1g");
	this.shape1.graphics.f("rgba(255,255,255,0.5)").s().p("ABAkiQC0ArA9D0QhKiqinh1g");
	
	
	//this.shape.graphics.f("#009933").s().p("AhkihQANCqDDCYQkAguAwkUg");
// foreground shadow
	//this.shape1.graphics.f("#009933").s().p("AlAgkQANCqDDCYQkAguAwkUg");
	this.shape1.graphics.f("rgba(0,0,0,0.25)").s().p("AlAgkQANCqDDCYQkAguAwkUg");
	this.addChild(this.shape);
	this.addChild(this.shape1);
}).prototype=p=new cjs.Container();

p.bubblecontains=function(cjsdisplayobject) {
	this.middle=cjsdisplayobject;
	this.removeChild(this.shape);
	this.removeChild(this.middle);
	this.removeChild(this.shape1);
	
	this.addChild(this.shape);
	this.addChild(this.middle);
	this.addChild(this.shape1);
};


(lib.bigbonusbubble=function(amount,message) {
	this.initialize();
	
	this.nm=new cjs.Text("+" + amount,'700 40px "Dosis"','#fff');
	this.nm.textBaseline="middle";
	this.nm.x=40;
	this.nm.y=70;
	this.nm.textAlign="center";
	
	this.pb=new lib.pointbubble();
	this.pb.x=40;
	this.pb.y=70;
	
	this.addChild(this.pb);
	
	if(message) {
		this.msg=new cjs.Text(message,'700 24px "Dosis"','#fff');
		this.msg.textAlign="center";
		this.msg.x=40;	
		this.msg.y=18;	
		this.msg.textBaseline="middle";
	}
	this.addChild(this.msg);
	this.addChild(this.nm);

}).prototype=p=new cjs.Container();

(lib.buttonarrow=function() {
	this.initialize();
	this.graphics.f("rgba(0,0,0,0.3)").drawCircle(0,0,11);
	this.graphics.f("#FFFFFF").s().p("AgCA+QgCgFABgHIAAgUIgkACQgVAAgIgIQgHgHAAgRQAAgQAJgGQAIgGAVAAIAiABQAAgVABgJQABgGADgCQAEgDAGACQAMAEAqAuQAJAMABAEQACAHgGAFQg1AxgIAFQgEACgEAAQgDAAgCgGg");

}).prototype=p=new cjs.Shape();

(lib.buttonbg=function(labeltext,icon,width,height) {
	this.initialize();
	this.width=500;
	this.height=100;
	this.color='#33a1a5';
	this.bg=new cjs.Shape();
	
	this.wpadding=8;
	this.hpadding=10;
	this.rnd=10;
	
	// default bg color:#33a1a5 highlight bgcolor: #2dd0d6
		
	this.setsize=function(width,height) {
		this.width=width+2*this.wpadding;
		this.height=height+2*this.hpadding;
		this.bg.graphics.clear();
		this.bg.graphics.f("rgba(0,0,0,0.25)").drawRoundRect(0,5,this.width,this.height,this.rnd);
		this.bg.graphics.f(this.color).drawRoundRect(0,0,this.width,this.height,this.rnd);		
	}
	this.text=new lib.gametext(labeltext,'.btn');
	
	var bheight=this.text.getMeasuredHeight();
	this.text.x=this.wpadding;
	this.text.y=this.hpadding + bheight/2;
	this.addChild(this.bg);
	this.addChild(this.text);
	var bwidth=this.text.getMeasuredWidth();
	if(icon) {
		this.useArrow(true);
	} else {
		this.setsize(bwidth,bheight);
	}
	//this.hitArea=
}).prototype=p=new cjs.Container();

p.setcolor=function(color) {
	this.color=color;
	this.setsize();
}


p.setText=function(textin) {
	this.removeChild(this.text);
	this.text=new lib.gametext(textin,'.btn');
	var bheight=this.text.getMeasuredHeight();
	this.text.x=this.wpadding;
	this.text.y=this.hpadding+bheight/2;
	var bwidth=this.text.getMeasuredWidth();
	this.setsize(bwidth,bheight);
	this.addChild(this.text);
}

p.useArrow=function(yesno) {
	if(this.icon) {
		this.removeChild(this.icon);
	}

	var bwidth=this.text.getMeasuredWidth();
	var bheight=this.text.getMeasuredHeight();
	
	if(yesno) {
		this.icon=new lib.buttonarrow();
		this.icon.x=bwidth+2*this.wpadding+11;
		this.icon.y=this.text.y;
		this.addChild(this.icon);
		bwidth=this.icon.x+6;
		this.setsize(bwidth,bheight);
	} else {
		if(this.icon) {
			this.removeChild(this.icon);
			this.icon=null;
		}
		this.setsize(bwidth,bheight);
	}
}

var vt;
(lib.pietimer=function(radius,time,color) {
		if(!radius) {
			radius=10;
		}
		this.radius=radius;
		this.paused=true;
		this.color=(color)?color:0x59c135;
		this.init(this.radius,time,this.color);

		
}).prototype=vt=new cjs.Shape();

vt.init=function(radius,time) {
		this.initialize();
		this.totaltime=time;
		this.timeleft=time;
		this.graphics = new createjs.Graphics();
		this.arc(1);
			//this.ground = new createjs.Shape(g);

	}
	
	vt.radius;
	vt.straightup=Math.PI*1.5;
	vt.doublepi=Math.PI*2;
	vt.totaltime;
	vt.timeleft;
	vt.paused;
	
	vt.pause=function(yesorno) {
		this.paused=yesorno;
	}

	vt.settime=function(time) {
		this.totaltime=time;
	}
	
	vt.reset=function() {
		this.timeleft=this.totaltime;
		this.arc(1);
	}

	vt.tickdown=function() {
		if(this.paused) {return;}
		this.timeleft--;
		if(this.timeleft <=0) {
			// TIME IS UP!
			this.timeleft=0;
			this.arc(0);
			this.pause(true);
			$.event.trigger({
			type: "timerEnded"
		});
		} else {
			if(this.timeleft%20==0) {
			$.event.trigger({
				type: "timerTick"
			});
			}
			this.arc(this.timeleft/this.totaltime);
		}
	}
	
	vt.arc=function(size) {
		this.graphics.clear();
		//0x59c135
		if(size>0) {
			this.graphics.beginFill(createjs.Graphics.getRGB(this.color));
			this.graphics.moveTo(0,0);
			//this.graphics.lineTo(0,-1*this.radius);
			this.graphics.arc(0,0,this.radius,this.straightup,this.doublepi*size + this.straightup);
		//	this.graphics.lineTo(0,0);
			this.graphics.endFill();
		}
	}



})(plumlib = plumlib||{}, images = images||{}, createjs = createjs||{});
var plumlib, images, createjs;


nowDecodePath = function(str) {
		
		var instructions = ['moveTo', 'lineTo', 'quadraticCurveTo', 'curveTo', 'closePath'];
		var paramCount = [2, 2, 4, 6, 0];
		var i=0, l=str.length;
		var params = [];
		var x=0, y=0;
		var base64 = createjs.Graphics.BASE_64;
		
		while (i<l) {
			var info='';
			var lastfi;

			var c = str.charAt(i);
			var n = base64[c];
			var fi = n>>3; // highest order bits 1-3 code for operation.
			if(fi || fi==0) {
				lastfi=fi;
			}
			var f = instructions[fi];
			// check that we have a valid instruction & that the unused bits are empty:
			if (!f || (n&3)) { /*throw("bad path data (@"+i+"): "+c); */}
			var pl = paramCount[fi];
			if (!fi) { x=y=0; } 
			params.length = 0;
			i++;
			var charCount = (n>>2&1)+2;  // 4th header bit indicates number size for this operation.
			for (var p=0; p<pl; p++) {
				var num = base64[str.charAt(i)];
				info+=' ' + str.charAt(i);
				var sign = (num>>5) ? -1 : 1;
				num = ((num&31)<<6)|(base64[str.charAt(i+1)]);
				info+=str.charAt(i+1);
				if (charCount == 3) { num = (num<<6)|(base64[str.charAt(i+2)]);
				
				info+=str.charAt(i+2);
				
				}
				num = sign*num/10;
				if (p%2) { x = (num += x); 
				info+=" x:" + num; }
				else { y = (num += y);info+=" y:" + num; }
				params[p] = num;
				i += charCount;
			}
			//f.apply(this,params);
			if(lastfi==0) {
			}
		}
		//return this;
	}