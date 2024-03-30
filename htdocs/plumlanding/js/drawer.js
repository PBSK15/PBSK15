this.plum=this.plum || {};

(function($){

/* 
specify a container of images, each of which can open a panel for more information

may have to also specify some other things to get the scrolling working...

this function will merely open the drawer in the right place; populating the drawer contents should happen elsewhere?

*/

drawerset=function(container,detail) {
	this.container=container;
	// populate a list of the nodes in the container that are 
	this.list=[];
	
	
	
	var n=0;
	for (var l=0;l<container.childNodes.length;l++) {
		var thisnode=container.childNodes[l];
		if(thisnode.className && thisnode.className.indexOf("drwr-img")>-1) {
			thisnode.parent=this;
			thisnode.idnum=n;
			$(thisnode).off('click');
			$(thisnode).on('click',this.clickid);
			this.list.push(thisnode);
			n++;
		}
	}
	this.totalimages=n;
/*
	var myself=this;
	this.totalimages=this.list.length;
	for(var l=0;l<this.totalimages;l++) {
		this.list[l].idnum=l;
		$(this.list[l]).on('click',this.clickid);
		this.list[l].parent=this;
	}

*/

	this.startheight=this.container.offsetTop;

	if(detail) {
		this.detail=detail;
	} else {
		this.detail=plum.drawerdiv();
	}
	this.detail.setcontainer(this);
//	this.container.appendChild(this.detail.base); // don't bother to add it just to remove/hide it
	this.hidedetail();
}

var p=drawerset.prototype;
p.detail;
p.list;
p.totalimages;
p.container;
p.perline=4;
p.currentrow=0;
p.rowheight=232;
p.startheight=400;
p.currentid;
p.needscroll;



p.clickid=function(ev) {
	ev.preventDefault();
	//var idnum=parseInt(ev.currentTarget.id.split('_')[1]);
	var idnum=ev.currentTarget.idnum;
	var ur=ev.currentTarget.href;	
	this.parent.showdetail(idnum);
}


p.nextimage=function() {
	var nextid=this.currentid+1;
	this.showdetail(nextid);
}

p.previmage=function() {
	var nextid=this.currentid-1;
	this.showdetail(nextid);
}


p.showdetail=function(idnum) {

		this.detail.setcontainer(this);
		var myself=this;
		this.startheight=this.container.offsetTop;
		var inrow=idnum%this.perline;


		
	// requesting detail for a particular picture.
	
	// the detail view needs to have "forward" and "back" buttons for the prev/next picture, so need to encode those 
	
	// G images smooth-scrolls DOWN but not back up (if the window is big enough, may not even smooth-scroll DOWN
	// drawer is positioned so that it completely fills the window and any leftover space is devoted to showing the images above.
	var op=true;
	if(this.detail.base.parentNode) {
		// drawer is already open
		op=false;
		
		if(this.currentid==idnum) {
			this.closedrawer();		
			return;
		}
		
		this.detail.base.parentNode.removeChild(this.detail.base);
	}
	
	
	this.currentid=idnum;
	
//	var nextline=parseInt(idnum)+(2+this.perline-(inrow));
//	nextline*=2;
	var newrow=parseInt(idnum/this.perline) + 1;
	
	
	var nextspace=(newrow*this.perline); // two nodes for each div
	
	//var nextlinenode=this.container.childNodes[nextspace+2];
	var nextlinenode=this.list[nextspace];
	if(nextlinenode) {	
		this.container.insertBefore(this.detail.base,nextlinenode);
	} else {
		this.container.appendChild(this.detail.base);
	}
		$.event.trigger({
			"type": "drwrDetail",
			"idnum":idnum,
			"opener": myself,
			"detail":myself.detail,
			"clicked":myself.list[idnum],
			"inrow":inrow
		});


	// vertical position based on header space, window size, and which row
	//var vert=0*this.startheight+newrow*this.rowheight;
	
	if(op) {
		this.opendrawer();
	} else {
		if(newrow!=this.currentrow) {
			this.currentrow=newrow;
		}
		this.scroll();
	}

	this.currentrow=newrow;


	if(idnum>0) {
		$(this.detail.prevbtn).show();
	} else {
		$(this.detail.prevbtn).hide();
	}

	if(idnum<this.totalimages-1) {
		$(this.detail.nextbtn).show();
	} else {
		$(this.detail.nextbtn).hide();
	}
	

	

	this.detail.setpointer(inrow);
}


p.opendrawer=function(fromid) {
	var me=this;
	$(this.detail.base).slideDown(400,function() {me.scroll();});
}

function grow() {
}

p.scroll=function() {
return;
	var vert=this.startheight+(this.currentrow)*this.rowheight-this.rowheight*.75;
	this.startscroll(vert);
	//window.scrollTo(0,vert);
	
	
}

p.startscroll=function(vert) {
	if(this.needscroll==vert) {
		window.scrollTo(0,vert);
		return;
		
	}
	this.needscroll=vert;
	window.needscroll=this.needscroll;
	window.drawerscroll();
}

window.drawerscroll=function() {
	//this.setTimeout(this.scrollupdate,100);	
	this.scrollupdate();
}

window.scrollupdate=function() {
	this.scrollTo(0,this.needscroll);
}

p.closedrawer=function() {
	var self=this;
	
	$(this.detail.base).slideUp(200,function() {self.hidedetail();});
//	var rnd=Math.random() *500;
//	$detail.css('height',rnd + 'px');
//	return;
/*	if(drawer.parentNode==drawerlist) {
		drawerlist.removeChild(drawer);
		for(var i=0;i<perline;i++) {
			drawer.childNodes[i].innerHTML="&nbsp;";
		}
	}
	*/
}

p.hidedetail=function() {
	$(this.detail.base).hide();
//	drawerlist.removeChild(drawer);
	if(this.detail.base.parentNode) {
		this.detail.base.parentNode.removeChild(this.detail.base);
	}
}

function donothing(ev) {
	ev.preventDefault();
}



	plum.drawerset=drawerset;
})(jQuery);

(function($) {

	drawerdiv=function(isimage) {
		var nd=document.createElement('div');
		var contentframe="<iframe id=\""+Math.random()+"\" class=\"d_ifra\" onload=\"setIframeHeight(this)\"></iframe>";

		// but if it's just an image? maybe make it an image instead of iframe so that it's scalable.
		
		var imageframe="<img id=\""+Math.random()+"\" class=\"d_img\" />";

		if(isimage) {
			contentframe=imageframe;
		}

		nd.innerHTML="<div class=\"d_pointer col-3\"><img src=\"../i/common/icon_caret.svg\"/></div>\n<div>\n<div class=\"d_header blur-header-short\"><a class=\"d_close clickable\"><img src=\"../i/common/icon_close.svg\" /></a> <h3 class=\"d_title\"></h3>\n<div class=\"d_pn\"><a href=\"\" class=\"d_prev btn-alt\"><img src=\"../i/common/icon_leftarrow.svg\" alt=\"previous picture\" /></a><a href=\"\" class=\"d_next btn-alt\"><img src=\"../i/common/icon_rightarrow.svg\" alt=\"next picture\" /></a></div></div>\n<div class=\"d_detail\"><div class=\"blur-purple-sm\"></div>" + contentframe + "<div class=\"d_info\"></div><div class=\"d_add\"></div></div></div>";
		
		nd.className="d_drawer col-12";
	//	document.body.appendChild(nd);
	//	$(nd).hide();
		this.base=nd;
		this.pointer=nd.childNodes[0];
		
		this.closebtn=nd.childNodes[2].childNodes[1].childNodes[0];
		this.prevbtn=nd.childNodes[2].childNodes[1].childNodes[4].childNodes[0];
		this.nextbtn=nd.childNodes[2].childNodes[1].childNodes[4].childNodes[1];
		
		
		this.title=nd.childNodes[2].childNodes[1].childNodes[2];
		this.detail=nd.childNodes[2].childNodes[3];
		this.info=this.detail.childNodes[2];
		this.frame=this.detail.childNodes[1];
		this.add=this.detail.childNodes[3];
		this.closebtn.target=this.parent;

		return this;
	}
	
	var p=drawerdiv.prototype;
	
	p.closebtn;
	p.prevbtn;
	p.nextbtn;
	p.image;
	p.info;
	p.title;
	p.frame;
	p.parent;
	
	p.setcontainer=function(container) {
		var me=this;
		if(me.parent) {
			$(this.closebtn).off('click');
			$(this.nextbtn).off('click');
			$(this.prevbtn).off('click');
		}		
		
		this.parent=container;
		$(this.closebtn).on('click',function(ev) {ev.preventDefault();me.parent.closedrawer()});
		
		$(this.nextbtn).on('click',function(ev)
		{ev.preventDefault();me.parent.nextimage()});
		
		$(this.prevbtn).on('click',function(ev)
		{ev.preventDefault();me.parent.previmage()});

	}
	
	p.setpointer=function(column) {
//		$(this.pointer).css("margin-left",(((23.015873 + (2*0.99206349)) * column)+(23.015873 * .5)) +  "%");
		
		$(this.pointer).css("margin-left",(((23.015873 + (2*1.2586957)) * column) + "%")); // a bit of extra for margins
		
	}
	
	plum.drawerdiv=drawerdiv;
})(jQuery);

function getDocHeight(doc) {
    doc = doc || document;
    // stackoverflow.com/questions/...
    var body = doc.body, html = doc.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight, 
        html.clientHeight, html.scrollHeight, html.offsetHeight );

    return height;

}

function setIframeHeight(id) {
   // var ifrm = document.getElementById(id);
	return;
    var ifrm=id;
    var doc = ifrm.contentDocument? ifrm.contentDocument: 
        ifrm.contentWindow.document;
    ifrm.style.visibility = 'hidden';
    ifrm.style.height = "10px"; // reset to minimal height ...
    // IE opt. for bing/msn needs a bit added or scrollbar appears
    ifrm.style.height = getDocHeight( doc ) + 4 + "px";
    ifrm.style.visibility = 'visible';
   $(this).slideDown(400);
}