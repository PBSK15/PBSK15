"undefined"==typeof console&&(console={log:function(){}});if("undefined"==typeof PBS)var PBS={KIDS:{}};else"undefined"==typeof PBS.KIDS&&(PBS.KIDS={});
PBS.KIDS.Stickers=function(m){var j=void 0,n=window.location.host,j=window.location.protocol+"//"+n;n.match(/.*ernie.*/);n.match(/.*soup.*/);n.match(/.*localhost.*/);var v=function(c){var e=j+"/stickerbooks/"+m+"/items.html";if("all"==c)return e;for(var c=c.split(","),d=[],a=0;a<c.length;a++)d.push("type="+encodeURIComponent(c[a]));return e+"?"+d.join("&")},t=function(c){return j+"/stickerbooks/media/assets/"+m+"/"+c+".png"},r={},u=function(c){var e=[],d;for(attr in c)if(d=c[attr],d instanceof Array)for(var a=
0;a<d.length;a++)e.push(encodeURIComponent(attr)+"="+encodeURIComponent(d[a]));else e.push(encodeURIComponent(attr)+"="+encodeURIComponent(c[attr]));return e.join("&")},s={},o;return{init:function(){$("body").bind("sticker-sheets-loaded",function(){var c=function(){k=new Kinetic.Group({x:mousePositionX,y:mousePositionY,width:sticker.width,height:sticker.height,name:sticker.name,id:sticker.type,draggable:!0});p=new Kinetic.Group({x:0,y:0,width:sticker.width,height:sticker.height,name:sticker.name,
id:sticker.type,draggable:!1});sticker.onload=function(){a=new Kinetic.Image({width:sticker.width,height:sticker.height,image:sticker,id:sticker.name,name:"sticker",scale:{x:1,y:1}});$("#submit-sticker").addClass("active");g=new Kinetic.Group({x:0,y:0,width:600,height:240,name:"default_background",id:sticker.type,draggable:!1});var b=new Image,i=$(".tool-buttons ul.sticker-assets li.default-background img").attr("name");b.src="/stickerbooks/media/assets/sticker-race/"+i+".png";h=new Kinetic.Image({width:600,
height:240,image:b,id:"default_background",name:"sticker",scale:{x:1,y:1}});a.threshold=0;"background"==currentAssetType?(f.add(p),p.add(a),g.remove(),p.moveToBottom()):(0==f.getChildren().length&&(f.add(g),g.add(h),g.moveToBottom(),f.draw(),$(".tool-buttons ul.sticker-assets li.default-background").addClass("ui-selected")),f.add(k),k.add(a));f.draw();p.on("mousedown touchstart",function(b){$("#sticker-canvas .sticker-ui-contols").hide();b.stopPropagation()});g.on("mousedown touchstart",function(b){$("#sticker-canvas .sticker-ui-contols").hide();
b.stopPropagation()});f.draw()};$("#sticker-canvas").bind("clickoutside",function(b){$("#sticker-canvas .sticker-ui-contols").hide();b.stopPropagation()});k.on("mousedown touchstart",function(){var b=this.get(".sticker"),i=this.getPosition(),a=b[0].getWidth(),c=b[0].getHeight();"text"==this.getId()?$("#flip-sticker-action").hide():$("#flip-sticker-action").show();var d=i.x+a/2,i=i.y+c/2;$("#sticker-canvas .sticker-ui-contols").css("top",i-40).css("left",d+20+a/2).show();this.moveToTop();b[0].setShadow({color:"black",
blur:0,offset:[4,4],alpha:0.3});-1==b[0].getScale().x?b[0].transitionTo({scale:{x:-1.1,y:1.1},duration:0.1,easing:"ease-in-out"}):b[0].transitionTo({scale:{x:1.1,y:1.1},duration:0.1,easing:"ease-in-out"});f.draw()});k.on("mouseup touchend",function(){var b=this.get(".sticker"),i=this.getPosition(),a=b[0].getWidth(),c=b[0].getHeight(),d=i.x+a/2,i=i.y+c/2;b[0].setShadow({color:"transparent",offset:[0,0],blur:0});-1.1==b[0].getScale().x?b[0].transitionTo({scale:{x:-1,y:1},duration:0.5,easing:"elastic-ease-out"}):
1.1==b[0].getScale().x&&b[0].transitionTo({scale:{x:1,y:1},duration:0.5,easing:"elastic-ease-out"});console.log(b[0].getScale());f.draw();i=this.getPosition();d=i.x+a/2;i=i.y+c/2;$("#sticker-canvas .sticker-ui-contols").css("top",i-40).css("left",d+20+a/2).fadeIn()});k.on("dragmove",function(){$("#sticker-canvas .sticker-ui-contols").fadeOut(100)});$(".sticker-ui-contols button.set-position").on("click",function(b){$("#sticker-canvas .sticker-ui-contols").hide();b.stopPropagation()})},d=function(){var b=
f.getChildren(),a=b[b.length-1].get(".sticker")[0],c=b[b.length-1].getPosition(),d=a.getWidth(),a=a.getHeight(),d=c.x+d/2,c=c.y+a/2,a=b[b.length-1].getId(),e=$("#sticker-canvas .sticker-poof"),g=e.width(),h=e.height();$(e).css("top",c-h/2).css("left",d-g/2).fadeIn(50,function(){$(this).delay(400).fadeOut(50)});b.pop();f.draw();console.log(f.getChildren().length);0==f.getChildren().length&&$("img.ui-draggable-disabled").draggable("enable").removeClass("done");console.log(a);"text"==a&&0<l&&(l--,$("#sheet-text-controls p.word-counter em").html(l+
" of "+q),$(".sticker-sheet.text-ui li img.ui-draggable-disabled").draggable("enable").removeClass("done"))};o=new Kinetic.Stage({container:"sticker-canvas",width:600,height:240});var a,k,h,g,p,f=new Kinetic.Layer;o.add(f);o.draw();$('.sticker-sheet.text-ui .sticker-assets img[category*="Big"]').parent();var j=$('.sticker-sheet.text-ui .sticker-assets img[category*="Medium"]').parent();$('.sticker-sheet.text-ui .sticker-assets img[category*="Small"]').parent();var m=$('.sticker-sheet.text-ui .sticker-assets img[category*="Words"]').parent(),
n=$('.sticker-sheet.text-ui .sticker-assets img[category*="White"]').parent();$(".sticker-sheet.text-ui .sticker-assets img").parent().hide();n.addClass("active-color");n.siblings(":not(.active-color)").addClass("not-active-color");j.addClass("active-size");j.siblings(":not(.active-size)").addClass("not-active-size");$(".sticker-sheet.text-ui .sticker-assets").prepend(m);$("button#medium-text").addClass("active");$(".sticker-sheet.text-ui .sticker-assets li.active-color.active-size").show();$("#sticker-canvas").prepend($("#sticker-ui-holder .sticker-ui-contols"));
$(".kineticjs-content").append($("#sticker-ui-holder .sticker-poof"));$(".tool-buttons ul.sticker-assets li img[category='default_background']").parent().addClass("default-background");$(".tool-buttons ul.sticker-assets").prepend($(".tool-buttons ul.sticker-assets li.default-background"));$(function(){var b,a,c,d;$("input[name='sticker-threshold']").change(function(){b=$(this);width=b.width();a=(b.val()-b.attr("min"))/(b.attr("max")-b.attr("min"));d=-2;0>a?c=0:1<a?c=width:(c=width*a+d,d-=a);b.next("output").css({left:c,
marginLeft:d+"%"}).text(b.val())}).trigger("change")});$(".sticker-ui-contols button.size-btn").unbind("click").live("click",function(){var b=f.getChildren(),b=b[b.length-1].get(".sticker")[0],a=b.getSize(),c=$("input[name='sticker-threshold']").attr("min"),d=$("input[name='sticker-threshold']").attr("max");b.threshold>=c&&b.threshold<=d&&($(this).hasClass("make-bigger")?4!=b.threshold&&(++b.threshold,b.setAttrs({width:1.1*a.width,height:1.1*a.height})):-4!=b.threshold&&(b.setAttrs({width:0.9*a.width,
height:0.9*a.height}),--b.threshold),console.log(b.threshold),f.draw());console.log(a)});var l=0,q=10;$(function(){$(".tool-buttons .sticker-assets.can-drag").removeClass("can-drag").addClass("can-select");var b=$(".sticker-assets.can-drag"),a=$(".sticker-assets.can-select");$("li img",b).draggable({revert:"invalid",containment:$("#sticker-ui").length?"#sticker-ui":"document",helper:"clone",cursor:"move",start:function(){$("#sticker-canvas .sticker-ui-contols").hide()}});$("#sticker-canvas").droppable({accept:".sticker-assets.can-drag > li > img",
activeClass:"ui-state-highlight",tolerance:"pointer",drop:function(b,a){currentAsset=a.draggable.attr("src");currentAssetType=a.draggable.attr("type");"text"==currentAssetType?$("#flip-sticker-action").hide():$("#flip-sticker-action").show();currentAssetName=a.draggable.attr("name");sticker=new Image;sticker.src=t(currentAssetName);sticker.name=currentAssetName;sticker.type=currentAssetType;canvasOffset=$("#sticker-canvas").offset();mousePosition=a.offset;mousePositionY=mousePosition.top-canvasOffset.top;
mousePositionX=mousePosition.left-canvasOffset.left;"text"==currentAssetType&&(l++,$("#sheet-text-controls p.word-counter em").html(l+" of "+q));l>=q&&$(".sticker-sheet.text-ui li img").draggable("disable").addClass("done");l<q&&$(".sticker-sheet.text-ui li img.ui-draggable-disabled.draggable").draggable("enable").removeClass("done");"background"==currentAssetType?(c(),a.draggable.draggable("disable").addClass("done")):c()}});$(a).selectable({filter:"li",selected:function(){var b=f.getChildren();
currentAsset=$(".ui-selected").find("img").attr("src");currentAssetType=$(".ui-selected").find("img").attr("type");currentAssetName=$(".ui-selected").find("img").attr("name");sticker=new Image;sticker.src=t(currentAssetName);sticker.name=currentAssetName;sticker.type=currentAssetType;console.log(sticker.type);canvasOffset=$("#sticker-canvas").offset();mousePosition=$(this).find("img").position();mousePositionY=mousePosition.top-canvasOffset.top;mousePositionX=mousePosition.left-canvasOffset.left;
b.shift();f.draw();c();$(".tool-buttons ul.sticker-assets").fadeOut()}})});$("#clear-all").bind("click",function(){f.removeChildren();f.draw();$("img.ui-draggable-disabled").draggable("enable").removeClass("done");l=0;$("#sheet-text-controls p.word-counter em").html(l+" of "+q);$(".sticker-sheet.text-ui li img.ui-draggable-disabled").draggable("enable").removeClass("done")});$("#background-trigger").bind("click",function(){$(".tool-buttons ul.sticker-assets").fadeToggle();$(this).parent().bind("clickoutside",
function(){$(".tool-buttons ul.sticker-assets").fadeOut()})});$("#delete-sticker-action").bind("click",function(){d();$("#sticker-canvas .sticker-ui-contols").hide()});$("#flip-sticker-action").bind("click",function(){var b=f.getChildren(),b=b[b.length-1].get(".sticker")[0],a=b.getWidth();1==b.getScale().x?(b.setScale(-1,1),b.setX(a)):(b.setScale(1,1),b.setX(0));console.log(b.getScale().x);f.draw()});$("#undo").bind("click",function(){d()})});var c=$(".sticker-sheet");$.each(c,function(c,d){var a=
$(d).attr("type")||"all";s[a]=!0});$.each(c,function(c,d){var a=$(d).attr("type")||"all";$.ajax({url:v(a),type:"GET",success:function(c){$(d).append(c);delete s[a];$.isEmptyObject(s)&&$("body").trigger("sticker-sheets-loaded")},dataType:"html"})})},get_canvas:function(){return o},add_properties:function(c){for(meta in c)"stickers"!=meta&&(r[meta]=c[meta])},submit:function(c,e){var d={},a;a=o.getChildren()[0].children;for(var k=[],h,g=0;g<a.length;g++)h={},h.name=a[g].attrs.name,h.z=g,h.x=a[g].attrs.x,
h.y=a[g].attrs.y,h.rotation=a[g].attrs.rotation,-1==a[g].children[0].attrs.scale.x&&(h["flip-left-right"]=!0),h.width=a[g].children[0].attrs.width,h.height=a[g].children[0].attrs.height,h.type=a[g].attrs.id,k.push(h);a=JSON.stringify(k);d.stickers=a;for(meta in r)d[meta]=r[meta];$.ajax({url:j+"/stickerbooks/"+m+"/stickers.json",dataType:"json",data:d,type:"POST",complete:function(a){if(!(500==a.status||400==a.status))if(401==a.status){if("undefined"!=typeof e)return e(a);PKG.prmpt("?refresh=0")}else if("undefined"!=
typeof c)return c(a)}})},vote:function(c,e){$.ajax({url:j+"/stickerbooks/"+m+"/vote/"+c+"/",type:"POST",complete:function(c){if("undefined"!=typeof e)return e(c)}})},get_stickers:function(c,e){var d=u(c);$.ajax({url:j+"/stickerbooks/"+m+"/stickers.json?"+d,type:"GET",success:function(a){e(a)},dataType:"json"})},get_sticker:function(c,e){$.ajax({url:j+"/stickerbooks/sticker/"+c+".json",type:"GET",success:function(c){e(c)},dataType:"json"})},get_user:function(c,e,d){e=u(e);$.ajax({url:j+"/stickerbooks/user/"+
c+".json?"+e,type:"GET",success:function(a){d(a)},dataType:"json"})}}};
