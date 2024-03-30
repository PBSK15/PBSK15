
(function($) {



	function scrolling(){
		var newsc=$(document).scrollTop();
		$hee.css({backgroundPosition:"50% " + newsc*-.1 + "px"});
		$pl.css({top:newsc*+.8+"px"});
		$tl.css({top:newsc*.5+"px"});
		$pbs.css({top:newsc*.5+"px"});

		for(var i in bbs) {
			var t=bbs[i];
			var len=t.path.length;
			var offset=(newsc-sc)*.7;
			for(p=0;p<len;p+=2) {
				t.path[p+1]=t.path[p+1]+offset;
			}

			var ttop=parseInt($(t.dom).css("top"));
			$(t.dom).css("top",ttop+offset+"px");
		}

		sc=newsc;

		/*$spl.css({top:newsc*-1+"px"});*/
	}

var bbs;
var sc;

//wantanimation();
$(document).ready(function(){
	sc=0;
	$hee=$(".scroll");
	$pl=$("#plumlogo");
	$pbs=$("#pbslogo");
	$tl=$("#tagline");
	$spl=$("#flow");

	$t1=$("#rightkids");
	$t2=$("#leftkids");


	$(window).on("scroll",scrolling);

	domanim=new domanimation();
	bbs=[];
	$('.bubblebounce').each(function() {
			var bb=new domanim.mover(this);
			bb.path=[];
			var widths=$(this).css("left");
			var heights=parseInt($(this).css("top"));

			var cycle=50 + parseInt(Math.random()*20);
			var cycle2=cycle*2;
			for(i=0;i<cycle2;i++) {
				bb.path.push(widths,(7*Math.sin(Math.PI*i/cycle)+heights));
			}

			bb.loop=true;
			bb.next=2*parseInt(Math.random()*bb.path.length/2);
			$(this).css("left",widths);
			$(this).css("top",heights+"px");
			bbs.push(bb);
			domanim.addmover(bb);

		});

	domanim.startanimation();

	var bgs=["h_desert","h_jungle","h_mangrove","h_mountain","h_space","h_city"];

	$("#highlight").addClass(bgs[parseInt(Math.random() * bgs.length)]);

	});


})(jQuery);

