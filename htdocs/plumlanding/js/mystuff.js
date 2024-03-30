
	var worlds={
	'City Missions':'city',
	'Jungle Mission':'jungle',
	'Mangrove Mission':'mangrove',
	'Desert Mission':'desert',
	'Mountain Mission':'mountain'
	}


// sorting badges on "mystuff" page

var neworder =[19,20,13,14,1,2,3,4,21,22,15,16,5,6,7,8,23,24,17,18,9,10,11,12];


$("div[data-type]").each(function(){
  if ($(this).data('type') === "badge"){
    var old = $(this).data('bid');
    var reorder = jQuery.inArray( old, neworder );
    $(this).attr("data-reorder", reorder+1);
 }
});

// Wait until badges are sorted to do anything
setTimeout(function(){
  var divList = $("#d-badges > div");
  divList.sort(function(a, b){
      return $(a).data("reorder")-$(b).data("reorder")
  });
  $("#d-badges").html(divList);
    $("#d-badges> div").fadeIn();



	$(document).on('org_wgbh_plumlogin_loginchange',function(ev) {dologin(ev.payload);});

	function dologin(userinfo) {
		// Probably best just to reload the page, since so much of it changes.
		location.reload(true);
	}


	function showAvatar() {
		$('#ename').html(plum_u[0]);
		$('#epoints').html(plum_u[1]);
		var av=$('#eavatar');
		av.attr('src','../i/avatars/bubl_icon_' + plum_u[2] + '.png');
		av.attr('alt',plum_u[2]);
		av.removeClass();
		av.addClass("bbl"+worlds[plum_u[3]]);

		$('#avnav').attr('src','../i/avatars/bubl_icon_' + plum_u[2] + '.png');
		$('#avnav').attr('alt',plum_u[2]);

		$('#highlight').removeClass();



		$('#highlight').addClass(worlds[plum_u[3]]+"_p");


	}

function quickBreak(textin,charlength) {
	if(!textin) {
		return [];
	}
	var charl=charlength,
	visiblechar=0,
	breakpoints=[],
	lastspace=0,
	tl=textin.length,
	inbracket=false;


	for(var j=0;j<tl;j++) {
		if(textin.charAt(j)=="<") {
			inbracket=true;
		}
		if(textin.charAt(j)==" ") {
			lastspace=j;
		}
		if(inbracket) {
			visiblechar--;
		}

		if(visiblechar>=charl) {
			breakpoints.push(lastspace);
			charl=lastspace+charlength;
		}

		if(textin.charAt(j)=="\n") {
			console.log("a carriage return??");
			// here need to add what we have to a line and move on
			breakpoints.push(j);
			charl=j+charlength;
		}

		if(textin.charAt(j)==">") {
			inbracket=false;
		}
		visiblechar++;
	}
	console.log("breakpoints : " + breakpoints.length);


	var textarray=[];
	var lastbreak=0;
	for(var i=0;i<breakpoints.length;i++) {
		var nextpiece=textin.slice(lastbreak,breakpoints[i]);
//		newhtmltext+=nextpiece + "<br />";
		textarray.push(nextpiece);
		lastbreak=breakpoints[i];
	}
//	newhtmltext+=textin.slice(lastbreak,htmltext.length);
	var last=textin.slice(lastbreak,textin.length);
	if(last) {
		textarray.push(last);
	}
	return textarray;
}
	function printImage(sid) {
		var submission=imageset[sid];
		var title=submission['t'];
		var uname=submission['u'];
		var uav=submission['av'];
		var udesc=submission['d'];
		var mid=submission['mid'];

		var $img=$('#'+sid + " img");
		var ic=$img.get(0);

		ic1=document.getElementById('i_' + sid);

		if(ic==ic1) {
			//console.log("same!");
		}

//		ic.width=50;
//		ic.height=50;

		var savecanvas=document.createElement('canvas');
		savecanvas.width=568;
		savecanvas.height=768;
		var sc=savecanvas.getContext("2d");
		sc.fillStyle="#FFFFFF";
		sc.fillRect(0,0,savecanvas.width,savecanvas.height);
		var scaledwidth=scaledheight=568;//ic.width;


		sc.drawImage(ic,0,0,scaledwidth,scaledheight);

		sc.font="bold 12px sans-serif";

		var filename="Plum_Testing_somestuff";

		var printlines=quickBreak(udesc,80);//["a line of notes"];
		sc.fillStyle="#000000";
		var fontheight=15;
		var baseline=fontheight + scaledheight;

		for(var line in printlines) {
			linespace=line * fontheight;
			if(line!="") {
				sc.fillText(printlines[line],fontheight,baseline+linespace);
			}
		}


		var du2=savecanvas.toDataURL('image/png');
		var iform=document.createElement('form');
		iform.innerHTML='<input type="hidden" name="ifilename" value="'+filename+'" /><input type="hidden" name="idata" value="'+du2+'" /><input type="hidden" name="itype" value="PNG" />';
		$(iform).attr('method','POST');
		$(iform).attr('action','/plumlanding/p/yourimage.php');
	//	$(iform).attr('target','_new');
		$(iform).submit();

	}

	$(document).ready(function(){

		if(!plum_u[0]) {
			return;
		}

		showAvatar();


	// set up accordions
		var opn=document.getElementById('acc-city');
		var tgt=document.getElementById('d-acc-city');
		var chevron=opn.childNodes[3];
		var po=new plum.accordion(opn,tgt,chevron);

		var opn=document.getElementById('acc-mangrove');
		var tgt=document.getElementById('d-acc-mangrove');
		var chevron=opn.childNodes[3];
		var po1=new plum.accordion(opn,tgt,chevron);

		var opn=document.getElementById('acc-mountain');
		var tgt=document.getElementById('d-acc-mountain');
		var chevron=opn.childNodes[3];
		var po2=new plum.accordion(opn,tgt,chevron);

		var opn=document.getElementById('acc-desert');
		var tgt=document.getElementById('d-acc-desert');
		var chevron=opn.childNodes[3];
		var po3=new plum.accordion(opn,tgt,chevron);

		var opn=document.getElementById('acc-jungle');
		var tgt=document.getElementById('d-acc-jungle');
		var chevron=opn.childNodes[3];
		var po4=new plum.accordion(opn,tgt,chevron);

		var allacc=[po,po1,po2,po3,po4];

		$(document).on('accToggleStart',function(ev) {
			var chevron=ev.opener.childNodes[3]; // this is the chevron image, but it's a brittle pathway!
			if(ev.hidden) { // is now opening

				for(var acc in allacc) {
					var ac=allacc[acc];
					if(!ac.hidden) {
						ac.hide();
					}
				}

			}



		});



		// set up drawers
	var drawercontainer2=document.getElementById('d-acc-city');
	var dv=new plum.drawerdiv();
	var dr=new plum.drawerset(drawercontainer2,dv);

	var drawercontainer2=document.getElementById('d-acc-desert');
	// var dv=new plum.drawerdiv();
	var dr=new plum.drawerset(drawercontainer2,dv);

	var drawercontainer2=document.getElementById('d-acc-mountain');
	var dr=new plum.drawerset(drawercontainer2,dv);

	var drawercontainer2=document.getElementById('d-acc-mangrove');
	var dr=new plum.drawerset(drawercontainer2,dv);

	var drawercontainer2=document.getElementById('d-acc-jungle');
	var dr=new plum.drawerset(drawercontainer2,dv);

	var dv2=new plum.drawerdiv(true);
	var drawercontainer3=document.getElementById('d-userpix');
	var dr=new plum.drawerset(drawercontainer3,dv2);

	var dv3=new plum.drawerdiv(true);
	var drawercontainer4=document.getElementById('d-badges');
	var dr=new plum.drawerset(drawercontainer4,dv3);
	//var animalstats=null;


	var patt=/######([^<]+)(<br\s*\/>|\s)/g;

	var animal='';

	var zone;

	var openframe;

	$(document).on('drwrDetail',function(ev) {

		//


		var thisnode=ev.clicked;
		var $thisnode=$(thisnode);
		var dv=ev.detail;

		var dtype='sticker';

		if($thisnode.attr('data-type')=='pic') {
			dtype='pic';
		}

		var badgeid;

		if($thisnode.attr('data-type')=='badge') {

			badgeid=$thisnode.attr('data-bid');


			if(typeof $thisnode.attr('data-id')!='undefined') {
				dtype='pic';
			} else {
				dtype='nobadge';
			}
		}



		if(dtype=="pic") { // show an image

			$(dv.frame).show();
			$(dv.detail).removeClass("badgeinfo");

			var sid=$thisnode.attr('data-id');
			var submission=imageset[sid];

			dv.title.innerHTML=submission['t'];
			var uname=submission['u'];
			var uav=submission['av'];
			var getdesc=submission['d'];


			var udesc=getdesc.replace(patt,"</p><h6>$1</h6><p>");

			var mid=submission['mid'];

		//makehtml="<div class=\"d_add\">";

		var addhtml="";
		var badgeimg="";

		$(dv.frame).attr('src',$(thisnode.childNodes[1]).attr("href"));

		if(submission['typ']=='A') {
			addhtml="<a href=\"https://pbskids.org/apps/\" class=\"btn-emphasis\">Get the App</a>";
		}
		else if(submission['typ']=='O') {
			addhtml="<a href=\"/plumlanding/games/outdoor_adventures/adventure.html?m="+ mid +"\" class=\"btn-emphasis\">Add Another</a>";
			badgeid=submission['b'];
			var bf=badgeset[badgeid]['f'];
			badgeimg="<img class=\"d_badge\" src=\"/plumlanding/mystuff/badges/earned/badge_"+bf+".png\" width=\"85\" height=\"96\">";
		} else {
			addhtml="<a href=\"/plumlanding/games/nature_sketchpad/index.html?m="+ mid +"\" class=\"btn-emphasis\">Add Another</a> <a class=\"btn\" href=\"javascript:printImage("+sid+")\">Save to desktop</a>";
		}



		var makehtml="<div class=\"user-attr\"><div class=\"username\">by "+uname+"</div><div class=\"avatar\"><img src=\"../i/avatars/bubl_icon_"+uav+".png\" alt=\"\" ><img src=\"../i/common/bubble3_border.svg\" alt=\"\" class=\"bubbleshine\"></div></div><div class=\"d_desc\"><p class=\"\">"+udesc+"</p>"+badgeimg+"</div></div>";

		dv.info.innerHTML=makehtml;


		dv.add.innerHTML=addhtml;

		} else if (dtype=="nobadge") {
			$(dv.detail).addClass("badgeinfo");
			badge=badgeset[badgeid];
			var badgetitle=badge["t"];
			var missionid=badge['mid'];
			var badgelevel=badge["l"].toUpperCase();

			var badgeleft,badgeright;


			var badgeimage,badgeinfo;

			if($thisnode.attr('data-earned')=='true') {
				earnedbadge = "<img class=\"badgeicon evergreen\" src=\"/plumlanding/mystuff/badges/earned/badge_" + badge["f"] + ".png\" width=\"85\" height=\"96\">";

				badgeinfo="<div class=\"notenough\"><span>You earned a badge! Try this Outdoor Adventure again!</span><a href=\"/plumlanding/games/outdoor_adventures/adventure.html?m="+ missionid +"\" class=\"btn-small\">Get Started <span class=\"button-icon\"><img src=\"/plumlanding/i/common/btn_icon_arrow.svg\"></span></a></div>";

				badgeright = badgeinfo;
				badgeleft =  "<h4>" + earnedbadge + badgelevel + "</h4>";

			} else {
				badgeinfo="<div class=\"notenough\"><span>Take this Outdoor Adventure to earn its badge</span><a href=\"/plumlanding/games/outdoor_adventures/adventure.html?m="+ missionid +"\" class=\"btn-small\">Get Started <span class=\"button-icon\"><img src=\"/plumlanding/i/common/btn_icon_arrow.svg\"></span></a></div>";
				
				badgeimage = "<img class=\"badgeicon\" src=\"/plumlanding/games/outdoor_adventures/i/badging_index_icon_"+badgelevel.toLowerCase()+".png\" alt=\"\" width=\"30\" height=\"34\">";

				badgeleft = "<h4>" + badgeimage + badgelevel + "</h4>";

				badgeright = badgeinfo;
			}




			dv.title.innerHTML=badgetitle;
			//dv.info.innerHTML="<div class=\"white\"><div class=\"buyleft\">"+badgelevel+"<p><a href=\"/plumlanding/games/outdoor_adventures/adventure.html?m="+ mid +"\" class=\"btn-emphasis\" style=\"margin:0;padding:0;\">Get Started</a></p></div> <div class=\"buyright\"><div>"+badgeinfo+"</div></div></div>";

			dv.info.innerHTML="<div class=\"row-group\"><div class=\"badgeleft\">"  + badgeleft + "</div><div class=\"badgeright\">" + badgeright + "</div></div>";
			$(dv.frame).hide();

		} else { // sticker

		var thissticker=thisnode.childNodes[1];

		var have=($(thissticker).attr("src").indexOf("_sticker")>-1);

		dv.title.innerHTML=$(thissticker).attr("alt");

		animal=$(thissticker).attr("data-fname");
		zone=worlds[animalstats[animal].world];
		openframe=dv;
		if(have) {
			$(dv.frame).show();
//			var animal=$(thissticker).attr("data-animal");
			$(dv.frame).attr('src','stickers/' + zone  + '/anim/'+animal+'.html');

// animalstats is set by the include
			formatData(animalstats[animal],dv);
		} else {
			$(dv).addClass("buy");
		// if they need to buy it:
			mustBuy(ev,thissticker);
		}
		}

	});

	var mustBuy=function(ev,sticker) {
		// list how many points ya need
		$(dv.frame).hide();

		var canbuy;
		var userpoints=plum_u[1];
		var cost=animalstats[animal].cost

		if(userpoints >=cost) {
			canbuy="<a id=\"getsticker\" class=\"btn-emphasis btn-large clickable\" data-id=\""+animalstats[animal].id+"\">Buy It!</a>";
		} else {
			canbuy="<div class=\"notenough\"><span>You don't have enough points!<br />Play games to earn more points.</span><a href=\"/plumlanding/games/index.html\"class=\"btn-small\">Games <span class=\"button-icon\"><img src=\"/plumlanding/i/common/btn_icon_arrow.svg\"></span></a></div>";
		}

		ev.detail.info.innerHTML="<div id=\"animalinfo\" class=\"row-group\"><div id=\"animalbuy\"><div class=\"buyleft\"><span class=\"cost\">" +cost+ " POINTS</span><br /><span class=\"blurb-emphasis userhas\">You have "+plum_u[1] + "</span></div> <div class=\"buyright\">"+canbuy+"</div></div></div>";

		var $points1=$('#animalbuy .userhas');
		var $points2=$('#epoints');
		var $points3=$('#navpts');

		$("#getsticker").click(function(ev) {
				var id=$(ev.target).attr('data-id');


				if(1==0) {
						var st=$("#st_" + id);
						var src=st.attr('src').replace('_default','_sticker');
						st.attr('src',src);
						$(openframe.frame).attr('src','stickers/' + zone  + '/anim/'+animal+'.html');
						formatData(animalstats[animal],openframe);
				}


				$.post("/plumlanding/backend/stickers/buy/", {'sticker_id':id},function(data){

					if(data.status==true) {
						var st=$("#st_" + id);
						var src=st.attr('src').replace('_default','_sticker');
						st.attr('src',src);
						$(dv.frame).show();
						$(openframe.frame).attr('src','stickers/' + zone  + '/anim/'+animal+'.html');
						formatData(animalstats[animal],openframe);

						userpoints-=cost;
						plum_u[1]=userpoints;
						$points2.html(userpoints);
						$points3.html(userpoints);
					}

				});

		});
	}

	var formatData=function(dat,dt) {

//		ev.detail.info.innerHTML="hoola!";
		var st=dat.stats;


		dt.title.innerHTML=st['Name'];
		var ih="<div id=\"animalinfo\" class=\"row-group\"><div id=\"animalstats\" class=\"col-5\"><dl class=\"stat\">";

		for(sst in st) {
			ih+='<dt>'+sst+':</dt><dd>'+st[sst]+'</dd>';
		}
		ih+="</dl></div>";

		ih+="<div id=\"animaldesc\" class=\"col-7\">";
		st=dat.desc;
		for(var d in st) {
			ih+="<h5>"+st[d][0]+"</h5>";
			ih+="<div class=\"bodytext\">"+st[d][1]+"</div>";
		}
		ih+="</div>";

		var bbg="bbl"+worlds[animalstats[animal].world];


		ih+="</div><div id=\"animalmore\"><a id=\"makeprofile\" class=\"btn-emphasis clickable\" data-id=\""+dat.id+"\"><div class=\"avatar sticker\"><img src=\"../i/avatars/bubl_icon_"+animal+".png\" alt=\""+animalstats[animal].name + "\"><img src=\"../i/common/bubble3_border.svg\" alt=\"\" class=\"bubbleshine\"></div> Make this my profile picture!</a></div>";

		dt.info.innerHTML=ih;


		$("#makeprofile").show();

		$("#makeprofile").click(function(ev) {

			var zone=animalstats[animal].world;

			id=$(ev.target).attr('data-id');
			$.post("/plumlanding/backend/user/change_avatar/", {sticker_id:id,av:animal}, function(data) {
 				 if(data.status==true) {
 				 	plum_u[2]=animal;
 				 	plum_u[3]=zone;
 				 	showAvatar();
					}
				});

		/*
			$.post("../p/setavatar.php", {av:animal}, function(data) {

 				 if(1==1) {
 				 	plum_u[2]=animal;
 				 	plum_u[3]=zone;
 				 	showAvatar();
					}
				});
				*/

		});

	}


	});

		var domanim=new domanimation();

		var bb=new domanim.mover($('.bigbubble'));
		for(i=0;i<100;i++) {
				bb.path.push(0,(18+5*Math.sin(Math.PI*i/50)));
		}
		domanim.addmover(bb);
		domanim.startanimation();

 }, 100);
