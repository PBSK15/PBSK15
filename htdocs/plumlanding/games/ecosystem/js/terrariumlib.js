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

(lib.gametext = function(str,style,tclr) {

	if(style==".game-blurb-sm") {
		return new cjs.Text(str,'500 24px "Dosis"','#311C79');	
	}
	
	if(style==".game-blurb") {
		return new cjs.Text(str,'500 30px "Dosis"','#311C79');	
	}
	
	if(style==".game-blurb-caption") {
		return new cjs.Text(str,'500 18px "Dosis"','#311C79');	
	}
	
	if(style==".game-blurb-caption-bold") {
		return new cjs.Text(str,'600 18px "Dosis"','#311C79');	
	}
	
	if(style==".game-blurb-number") {
		return new cjs.Text(str,'600 16px "Dosis"','#FFFFFF');	
	}
	
	if(style==".projection-head") {
		return new cjs.Text(str,'700 30px "Dosis"','#ffffff');
	}

	if(style=="h1") {
		return new cjs.Text(str,'700 62px "Dosis"','#311C79');
	}
	
	if(style=="h3") {
		return new cjs.Text(str,'700 37px "Dosis"','#ffffff');
	}
	
	if(style=="h7") {
		return new cjs.Text(str,'700 18px "Dosis"','#ffffff');
	}
	
	if(style==".picture") {
		return new cjs.Text(str,'500 20px "Dosis"','#ffffff');
	}

	if(style==".scoretitle") {
		return new cjs.Text(str,'500 22px "Dosis"','#311C79'); // was #352C74
	}
	
	if(style==".btn") {
		return new cjs.Text(str,'700 19px "Dosis"','#ffffff'); 
	}

	if(style==".pt_hdr") {
		return new cjs.Text(str,'500 12px "Dosis"',tclr); 
	}
	
	if(style==".pt_num") {
		return new cjs.Text(str,'600 22px "Dosis"',tclr);
	}
	
	if(style==".projection-subhead") {
		return new cjs.Text(str,'700 30px "Dosis"',tclr);
	}
	
	if(style==".bilby_score") {
		return new cjs.Text(str,'500 62px "Dosis"','#ffffff');
	}
	
});

(lib.shinylight = function(color,width,height) {
	this.initialize();
	this.width=width;
	this.height=height;
	this.setcolor(color);
}).prototype=p=new cjs.Shape();

darken=function(hexcolor) {
	// color is a css color string that looks like '#ffffff'
	//console.log(color + "," + cjs.Graphics.getRGB(color,1));
		var colorarr=[];
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
		var change=0.8;
		colorarr[0]*=change;
		colorarr[1]*=change;
		colorarr[2]*=change;
	// send hex color back
	
		newhex=doublehex(colorarr[0]) +doublehex(colorarr[1])+doublehex(colorarr[2]);
//		console.log(hexcolor + "->" + newhex);
		return newhex;
};

doublehex=function(number) {
	return zeropad(parseInt(number).toString(16));
};

zeropad=function(string,places) {
	if(string.length<2) {
		return "0"+string;
	} else {
		return string;
	}
};

p.setcolor=function(color) {
	this.graphics.clear();
	var darkcolor=darken(color);
	this.graphics.s('#ffffff').ss(2).drawEllipse(0,0,this.width,this.height);
	this.graphics.s('#999999').ss(1).f(darkcolor).drawEllipse(1,1,this.width-2,this.height-2);
	this.graphics.s().f(color).drawEllipse(this.width*0.05,this.height*0.03,this.width*0.9,this.height*0.8);
	this.graphics.s().f(cjs.Graphics.getRGB(0xffffff,0.8)).drawEllipse(this.width*0.35,this.height*0.1,parseInt(this.width*0.3),parseInt(this.height*0.2));
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
		this.graphics.f(cjs.Graphics.getRGB(0xe1e0df,0.75)).drawRect(0,0,width,height);
	};
	
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
	};	
	
	
	this.setcolor=function(color) {
		this.color=color;
		this.redraw();
	};

	this.setcolor(this.color);
	return this;
}).prototype=p=new cjs.Shape();
p.nominalBounds=new cjs.Rectangle(1,5,57.3,57);



(lib.plinkscreen = function(bgimage) {
	this.initialize();
	this.frame=new cjs.Shape();
	// color is #6A51C2, or 106,81,194
	this.curve="EAnhAB2QABEogjC4QgzEOiRC/QlwHlwdBBQvvA+yOhBQlrgUlRgeIkIgaQhDj2hClEQiFqFgDmAQgBk9AbiwQAskfCIjJQFkoLQpgyQPvgvS5BhQJdAwGTA6IBlIzQBnJ/ACF/g";

	this.masky=new cjs.Shape();
	this.masky.graphics.f('#ffffff').p(this.curve);


	this.width=500;
	this.height=340;
	
	var my=this;

	this.redraw=function(size) {
	//	this.frame.graphics.f('#ffffff').p(this.curve);
		my.frame.graphics.f().s(cjs.Graphics.getRGB(0x6A51C2,0.2)).ss(11,1,1).p(my.curve);
		my.frame.graphics.f().s(cjs.Graphics.getRGB(0x6A51C2,0.35)).ss(8,1,1).p(my.curve);
		my.frame.graphics.f().s(cjs.Graphics.getRGB(0x6A51C2,0.5)).ss(5,1,1).p(my.curve);
		my.frame.graphics.f().s(cjs.Graphics.getRGB(0x6A51C2)).ss(2,1,1).p(my.curve);
	};
	

	this.setbgimage=function(image) {
		this.background=new cjs.Bitmap(bgimage);
		this.background.x=this.left - 2;
		this.background.y=this.top;
	};
	
	this.setbgcolor=function(color) {
		this.background=new cjs.Shape();
		this.background.graphics.f(color).p(this.curve);
	};
	
	this.setheader=function(color) {
		if(color!==null) {
			this.header.setcolor(color);
		}
		this.header.visible=true;
	};
	
	this.hideheader=function() {
		this.header.visible=false;
	};
	this.settitle=function(titlestring) {
		this.title.visible=true;
		this.title.text=titlestring;
	};
	this.gettitle=function(titlestring) {
		return this.title.text;
	};


	this.top=this.height*-0.5;
	this.left=this.width*-0.5;
	
	this.redraw();
	if(bgimage) {
		this.setbgimage(bgimage);
	} else {
		this.setbgcolor('#ffffff');
	}
	
	
	
	this.background.mask=this.masky;
	this.addChild(this.background);
	this.header=new lib.topbar(this.width,70,2,0x9E89E6);
	this.header.x=this.width*-0.5;
	this.header.y=this.height*-0.5;
	this.header.mask=this.masky;
	
	this.title=new lib.gametext('YOUR MISSION','.projection-head');
	this.title.textAlign="center";
	this.title.textBaseline = 'middle';
	this.title.y=this.height*-0.5 + 42;
	this.title.x=0;//this.width*-.5;	
	
	this.addChild(this.header);
	this.addChild(this.title);
	this.title.visible=false;
	this.addChild(this.frame);

	//return this;
}).prototype=p=new cjs.Container();

(lib.pointbubble=function(clr, alp) {
	this.initialize();
	this.shape = new cjs.Shape();
	this.border = new cjs.Shape();
	this.shape1 = new cjs.Shape();
	this.middle;
	this.type; // used in terrarium game to switch between regular and grayed icons
	if(clr === undefined) {
		clr = "#5DBE3F";
	}
	
	var bshape="QhyhLASivQARisBqhhQBphiCRgBIADAAQCPgBBrBlQBrBlAICTQAHCWhgBVQheBTixAMQgWABgZAAQiPAAhfg9g";
	
// shadow behind
	this.shape.graphics.f("rgba(0,0,0,0.149)").s().p("AjRFX"+bshape);

// bubble BG
	this.shape.graphics.f(clr).p("AkREX"+bshape);
	if (alp !== undefined) {
		this.shape.alpha = alp;
	}
		
	this.border.graphics.s("#FFFFFF").ss(2).p("AkREX"+bshape);
	if (alp !== undefined) {
		this.shape.alpha = alp;
	}
		
// highlight
	this.shape1.graphics.f("rgba(255,255,255,0.5)").s().p("ABAkiQC0ArA9D0QhKiqinh1g");
	
// foreground shadow
	this.shape1.graphics.f("rgba(0,0,0,0.25)").s().p("AlAgkQANCqDDCYQkAguAwkUg");
	this.addChild(this.shape);
	this.addChild(this.border);
	this.addChild(this.shape1);
}).prototype=p=new cjs.Container();

p.bubblecontains=function(cjsdisplayobject) {
	this.middle=cjsdisplayobject;
	this.removeChild(this.shape);
	this.removeChild(this.border);
	this.removeChild(this.middle);
	this.removeChild(this.shape1);
	
	this.addChild(this.shape);
	this.addChild(this.border);
	this.addChild(this.middle);
	this.addChild(this.shape1);
};

(lib.bigbonusbubble=function(amount,message) {
	this.initialize();
	
	this.nm=new cjs.Text("+" + amount,'700 40px "Dosis"','#fff');
	this.nm.textAlign="center";
	this.nm.textBaseline = 'middle';
	this.nm.x=40;
	this.nm.y=70;
	
	this.pb=new lib.pointbubble();
	this.pb.x=40;
	this.pb.y=70;
	
	this.addChild(this.pb);
	
	if(message) {
		this.msg=new cjs.Text(message,'700 24px "Dosis"','#fff');
		this.msg.textAlign="center";
		this.msg.x=40;	
	}
	
	this.addChild(this.msg);
	this.addChild(this.nm);

}).prototype=p=new cjs.Container();

(lib.scorebubble=function(clr,amount) {
	this.initialize();
	
	this.snm=new cjs.Text("+" + amount,'700 40px "Dosis"','#fff');
	this.snm.textAlign="center";
	this.snm.textBaseline = 'middle';
	this.snm.x=40;
	this.snm.y=70;
	
	this.spb=new lib.pointbubble(clr);
	this.spb.x=40;
	this.spb.y=70;
	
	this.addChild(this.spb);
	
	this.addChild(this.snm);

	this.setNewAmount=function(amt) {
		if(amt > 99) {
			//  in terrarium game, making text smaller for 3-digit scores
			this.snm.font = '700 34px "Dosis"';
		}
		else {
			this.snm.font = '700 40px "Dosis"';
		}
		this.snm.text = "+" + amt;
	};

}).prototype=p=new cjs.Container();

(lib.buttonarrow=function() {
	this.initialize();
	this.graphics.f("rgba(0,0,0,0.3)").drawCircle(0,0,11);
	this.graphics.f("#FFFFFF").s().p("AgCA+QgCgFABgHIAAgUIgkACQgVAAgIgIQgHgHAAgRQAAgQAJgGQAIgGAVAAIAiABQAAgVABgJQABgGADgCQAEgDAGACQAMAEAqAuQAJAMABAEQACAHgGAFQg1AxgIAFQgEACgEAAQgDAAgCgGg");

}).prototype=p=new cjs.Shape();

(lib.buttonbg=function(labeltext,icon,btclr,width,height) {
	this.initialize();
	this.width=500;
	this.height=100;
	this.bg=new cjs.Shape();
	
	var wpadding=8;
	var hpadding=10;
	
	// adjust color
	if(btclr === undefined) {
		btclr = '#33a1a5';
	}
		
	this.setsize=function(width,height) {
		var rnd=10;
		this.width=width+2*wpadding;
		this.height=height+2*hpadding;
		this.bg.graphics.f("rgba(0,0,0,0.25)").drawRoundRect(0,5,this.width,this.height,rnd);
		this.bg.graphics.f(btclr).drawRoundRect(0,0,this.width,this.height,rnd);		
	};
	this.text=new lib.gametext(labeltext,'.btn');
	this.text.textBaseline = 'middle';
	this.text.x=wpadding;
	this.text.y=hpadding/2 + 14;
	this.addChild(this.bg);
	this.addChild(this.text);
	var bwidth=this.text.getMeasuredWidth();
	var bheight=this.text.getMeasuredHeight();
	if(icon) {
		this.icon=new lib.buttonarrow();
		this.icon.x=bwidth+2*wpadding+11;
		this.icon.y=this.text.y;
		this.addChild(this.icon);
		bwidth=this.icon.x+6;
	}
	this.setsize(bwidth,bheight);

}).prototype=p=new cjs.Container();

// ADDITIONAL FOR TERRARIUM ***************************************************

// squarish version of the start button

(lib.terr_startbutton=function(btclr) {
	this.initialize();
	this.width=50;
	this.height=44;
	this.bg=new cjs.Shape();
	
	var wpadding=8;
	var hpadding=4;
	
	// adjust color
	if(btclr === undefined) {
		btclr = '#33a1a5';
	}
		
	this.setdisplay=function(width,height) {
		var rnd=10;
		this.bg.graphics.f("rgba(0,0,0,0.25)").drawRoundRect(0,5,this.width,this.height,rnd);
		this.bg.graphics.f(btclr).drawRoundRect(0,0,this.width,this.height,rnd);		
	};
	this.top_text=new cjs.Text('Start','700 17px "Dosis"','#ffffff');
	this.btm_text=new cjs.Text('Over','700 17px "Dosis"','#ffffff');
	this.top_text.textBaseline = this.btm_text.textBaseline = 'middle';
	this.top_text.x=this.btm_text.x=wpadding;
	this.top_text.y=15;
	this.btm_text.y=31;
	this.addChild(this.bg);
	this.addChild(this.top_text);
	this.addChild(this.btm_text);
	// draw the pieces
	this.setdisplay();

}).prototype=p=new cjs.Container();

// put in life status container
(lib.LifeStatus = function(well_clr, starv_clr, none_clr) {
	var STATUS_WIDTH = 32,		// status icon width
		STATUS_HEIGHT = 22;		// status icon height
		
	var well_lite,				// icon for well
		hungry_lite,			// icon for hungry characters
		none_lite;				// icon for no characters
		
	this.initialize();
		
// 	build
	well_lite = new lib.shinylight(well_clr, STATUS_WIDTH, STATUS_HEIGHT);
	this.addChild(well_lite);
	
	hungry_lite = new lib.shinylight(starv_clr, STATUS_WIDTH, STATUS_HEIGHT);
	this.addChild(hungry_lite);
	
	none_lite = new lib.shinylight(none_clr, STATUS_WIDTH, STATUS_HEIGHT);
	this.addChild(none_lite);
	
// 	methods	
	this.displayLite = function(lt_type) {
		well_lite.visible = false;
		hungry_lite.visible = false;
		none_lite.visible = false;
		switch(lt_type){
			case "well":
				well_lite.visible = true;
				break;
			case "hungry":
				hungry_lite.visible = true;
				break;
			default:
				none_lite.visible = true;
				break;
		}
	};
	
}).prototype=p=new cjs.Container();

(lib.plinkscreen_scaled = function(pl_scale, bgimage) {
	this.initialize();
	this.frame=new cjs.Shape();
	// color is #6A51C2, or 106,81,194
	this.curve="EAnhAB2QABEogjC4QgzEOiRC/QlwHlwdBBQvvA+yOhBQlrgUlRgeIkIgaQhDj2hClEQiFqFgDmAQgBk9AbiwQAskfCIjJQFkoLQpgyQPvgvS5BhQJdAwGTA6IBlIzQBnJ/ACF/g";

	this.masky=new cjs.Shape();
	this.masky.graphics.f('#ffffff').p(this.curve);
	this.masky.scaleX = this.masky.scaleY = pl_scale;


	this.width=500 * pl_scale;
	this.height=340 * pl_scale;
	
	var my=this;

	this.redraw=function(size) {
	//	this.frame.graphics.f('#ffffff').p(this.curve);
		my.frame.graphics.f().s(cjs.Graphics.getRGB(0x6A51C2,0.2)).ss(11,1,1).p(my.curve);
		my.frame.graphics.f().s(cjs.Graphics.getRGB(0x6A51C2,0.35)).ss(8,1,1).p(my.curve);
		my.frame.graphics.f().s(cjs.Graphics.getRGB(0x6A51C2,0.5)).ss(5,1,1).p(my.curve);
		my.frame.graphics.f().s(cjs.Graphics.getRGB(0x6A51C2)).ss(2,1,1).p(my.curve);
		
		my.frame.scaleX = my.frame.scaleY = pl_scale;
	};
	

	this.setbgimage=function(image) {
		this.background=new cjs.Bitmap(bgimage);
		this.background.x=this.left;
		this.background.y=this.top;
	};
	
	this.setbgcolor=function(color) {
		this.background=new cjs.Shape();
		this.background.graphics.f(color).p(this.curve);
		this.background.scaleX = this.background.scaleY = pl_scale;
	};
	
	this.setheader=function(color) {
		if(color!==null) {
			this.header.setcolor(color);
		}
		this.header.visible=true;
	};
	
	this.hideheader=function() {
		this.header.visible=false;
	};
	this.settitle=function(titlestring) {
		this.title.visible=true;
		this.title.text=titlestring;
	};

	this.top=this.height*-0.5;
	this.left=this.width*-0.5;
	
	this.redraw();
	if(bgimage) {
		this.setbgimage(bgimage);
	} else {
		this.setbgcolor('#ffffff');
	}
	
	this.background.mask=this.masky;
	this.addChild(this.background);
	this.header=new lib.topbar(this.width,70,2,0x9E89E6);
	this.header.x=this.width*-0.5;
	this.header.y=this.height*-0.5;
	this.header.mask=this.masky;
	
	this.title=new lib.gametext('YOUR MISSION','.projection-head');
	this.title.textAlign="center";
	this.title.textBaseline = 'middle';
	this.title.y=this.height*-0.5 + 42;
	this.title.x=0;//this.width*-0.5;	
	
	this.addChild(this.header);
	this.addChild(this.title);
	this.title.visible=false;
	this.addChild(this.frame);

	//return this;
}).prototype=p=new cjs.Container();

(lib.wordarrow=function() {
	this.initialize();	
	this.graphics.f("rgba(95,255,200,254)").p("AM0DwIk2jcIAAB4InqAAIAADSIHqAAIAAB4IE2jm").cp().ef().f("rgba(95,255,200,254)").p("AH+H0IgKgKYgKAAAAgKAAgKIAAhaInWAAYgKAAgKgKAAgUIAAjSYAAgUAKgKAKAAIHWAAIAAhaYAAgKAAgKAKAAYAKAAAKAAAKAAIEsDcYAKAKAAAKAAAAYAAAKAAAKgKAKIksDcYgKAAAAAKgKAA").cp().ef().f("rgba(95,255,200,254)").p("AAyFKIHMAAYAUAAAKAKAAAKIAABGIDmi0IjmiqIAABGYAAAKgKAKgUAAInMAAIAACq").cp().ef();

}).prototype=p=new cjs.Shape();

(lib.vwmessage=function(txtstr, ar_wid) {
	this.initialize();	
	this.font = '500 18px "Dosis"';
	this.color = '#311C79';
	this.text = txtstr;
	this.textBaseline = 'middle';
	this.lineWidth = ar_wid;
	this.lineHeight = 24;
}).prototype=p=new cjs.Text();

// *****************************************************************************


})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;


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
			if(fi || fi===0) {
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
			if(lastfi===0) {
//				console.log(info);
			}
		}
		return this;
	};