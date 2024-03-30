<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">


<?php
echo $twig->render('curiousgeorge/includes/head.twig', ['specialInclude' => '<link rel="stylesheet" type="text/css" href="/curiousgeorge/css/home.css" media="screen" />
<script type="text/javascript" src="https://pbskids.org/includes/flash/swfobject.js"></script>', 'pageTitle' => 'Home']);
?>
<body id="hm">


	<?php
		echo $twig->render('template_includes/modern_headband_include.html');
		echo $twig->render('template_includes/modern_pbsk_js.html');
		echo $twig->render('curiousgeorge/includes/nav.twig', ['spanishGaming' => '<a href="/curiousgeorge/games/spanish.html"><img src="/curiousgeorge/img/nav_spanishgames.gif" height="91" width="117" alt="Games in Spanish" id="juegos" class="ovr" /></a>']);
	?>

<?php

	$currMonth = (int) strval(date("m"));
	$currDay = (int) strval(date("d"));

	$season;
	$hlDelay;
	$nonFlashImageCaption = "";
	
	
	class HLData {
		
		public $swf_label;
		public $url;
		
		public function __construct($num) {
			
			switch ($num) {
			    case 0:
			        $this->swf_label = "animalscrapbook";
			        $this->url = "games/animal_scrapbook/";
			        break;
			    case 1:
			        $this->swf_label = "animalscrapbook2";
			        $this->url = "games/animal_scrapbook/";
			        break;
			    case 2:
			        $this->swf_label = "banana411";
			        $this->url = "games/banana_411/";
			        break;
			    case 3:
			        $this->swf_label = "bigpicture";
			        $this->url = "games/big_picture";
			        break;
			    case 4:
			        $this->swf_label = "bringit";
			        $this->url = "games/bring_it";
			        break;
			    case 5:
			        $this->swf_label = "buildabot";
			        $this->url = "games/build_a_bot";
			        break;
			    case 6:
			        $this->swf_label = "buildabot2";
			        $this->url = "games/build_a_bot";
			        break;
			    case 7:
			        $this->swf_label = "cg_movie_2015";
			        $this->url = "";
			        break;
			    case 8:
			        $this->swf_label = "chockablock_zoo";
			        $this->url = "games/chockablock_zoo";
			        break;
			    case 9:
			        $this->swf_label = "countyourchickens";
			        $this->url = "games/count_your_chickens/";
			        break;
			    case 10:
			        $this->swf_label = "cowsdontquack";
			        $this->url = "games/cows_dont_quack";
			        break;
			    case 11:
			        $this->swf_label = "dayatthebeach";
			        $this->url = "games/day_at_beach";
			        break;
			    case 12:
			        $this->swf_label = "dayatthebeach2";
			        $this->url = "games/day_at_beach";
			        break;
			    case 13:
			        $this->swf_label = "everythingmustgo";
			        $this->url = "games/everything_must_go";
			        break;
			    case 14:
			        $this->swf_label = "feedgnocchi";
			        $this->url = "games/feed_gnocchi";
			        break;
			    case 15:
			        $this->swf_label = "georgebringsspring";
			        $this->url = "games/george_brings_spring";
			        break;
			    case 16:
			        $this->swf_label = "georgebringsspring2";
			        $this->url = "games/george_brings_spring";
			        break;
			    case 17:
			        $this->swf_label = "glasspalace";
			        $this->url = "games/glass_palace";
			        break;
			    case 18:
			        $this->swf_label = "halloween_spec_2014";
			        $this->url = "";
			        break;
			    case 19:
			        $this->swf_label = "halloween_special";
			        $this->url = "";
			        break;
			    case 20:
			        $this->swf_label = "heartsandcrafts";
			        $this->url = "games/hearts_and_crafts";
			        break;
			    case 21:
			        $this->swf_label = "heartsandcrafts2";
			        $this->url = "games/hearts_and_crafts";
			        break;
			    case 22:
			        $this->swf_label = "howtall";
			        $this->url = "games/how_tall";
			        break;
			    case 23:
			        $this->swf_label = "iloveshapes";
			        $this->url = "games/i_love_shapes";
			        break;
			    case 24:
			        $this->swf_label = "jugglinggeorge";
			        $this->url = "games/juggling_george";
			        break;
			    case 25:
			        $this->swf_label = "mixandpaint";
			        $this->url = "games/mix_and_paint";
			        break;
			    case 26:
			        $this->swf_label = "monkeyfaces";
			        $this->url = "games/monkey_faces";
			        break;
			    case 27:
			        $this->swf_label = "monkeymoves";
			        $this->url = "games/monkey_moves";
			        break;
			    case 28:
			        $this->swf_label = "onthejob";
			        $this->url = "games/on_the_job";
			        break;
			    case 29:
			        $this->swf_label = "pinataparty";
			        $this->url = "games/pinata_party";
			        break;
			    case 30:
			        $this->swf_label = "pinataparty2";
			        $this->url = "games/pinata_party";
			        break;
			    case 31:
			        $this->swf_label = "pogogogo";
			        $this->url = "games/pogo_gogo";
			        break;
			    case 32:
			        $this->swf_label = "presenttime";
			        $this->url = "games/present_time";
			        break;
			    case 33:
			        $this->swf_label = "presenttime2";
			        $this->url = "games/present_time";
			        break;
			    case 34:
			        $this->swf_label = "printables";
			        $this->url = "printables/";
			        break;
			    case 35:
			        $this->swf_label = "pumpkin_boo";
			        $this->url = "games/pumpkin_boo";
			        break;
			    case 36:
			        $this->swf_label = "pumpkin_boo2";
			        $this->url = "games/pumpkin_boo";
			        break;
			    case 37:
			        $this->swf_label = "rollermonkey";
			        $this->url = "games/roller_monkey";
			        break;
			    case 38:
			        $this->swf_label = "season7promo";
			        $this->url = "";
			        break;
			    case 39:
			        $this->swf_label = "secretagentgeorge";
			        $this->url = "games/secret_agent_george";
			        break;
			    case 40:
			        $this->swf_label = "secretagentgeorge2";
			        $this->url = "games/secret_agent_george";
			        break;
			    case 41:
			        $this->swf_label = "shelter_pets";
			        $this->url = "";
			        break;
			    case 42:
			        $this->swf_label = "snapshot";
			        $this->url = "games/snapshot";
			        break;
			    case 43:
			        $this->swf_label = "spanishgames";
			        $this->url = "games/spanish.html";
			        break;
			    case 44:
			        $this->swf_label = "splatsymphony";
			        $this->url = "games/splat_symmphony";
			        break;
			    case 45:
			        $this->swf_label = "spring_2015";
			        $this->url = "";
			        break;
			    case 46:
			        $this->swf_label = "springapr22";
			        $this->url = "";
			        break;
			    case 47:
			        $this->swf_label = "superbouncy";
			        $this->url = "games/super_bouncy";
			        break;
			    case 48:
			        $this->swf_label = "valentines_2015.swf";
			        $this->url = "";
			        break;
			    case 49:
			        $this->swf_label = "videoclips";
			        $this->url = "video/";
			        break;
			    case 50:
			        $this->swf_label = "zoomazing";
			        $this->url = "games/zoomazing";
			        break;

			}
			
			
		}
		
		
		
	}
	
	

	switch ($currMonth) {
	    case 1:
	        $season = $currDay > 5 ? "winter" : "newyears";
	        break;
	    case 2:
			$season = (currDay >= 2 && $currDay <= 14) ? "valentines" : "winter";
	        break;
	    case 3:
	        $season = $currDay < 23 ? "winter" : "spring";
	        break;
	    case 4:
	        $season = "spring";
	        break;
		case 5:
			$season = "spring";
			break;
	    case 6:
	        $season = $currDay < 27 ? "summer" : "independence";
	        break;
	    case 7:
	        $season = $currDay > 5 ? "summer" : "independence";
	        break;
	    case 8:
	        $season = "summer";
	        break;
	    case 9:
	        $season = "fall";
	        break;
	    case 10:
	        $season = $currDay < 16 ? "fall" : "halloween";
	        break;
	    case 11:
	        if ($currDay < 11) {
	            $season = "fall";
	        } else {
				$season = ($currDay >= 11 && $currDay <= 28) ? "thanksgiving" : "winter";
			}
	        break;
	    case 12:
	        $season = "winter";
	        break;


	}


	switch ($season) {
	    case "winter":
	        $hlDelay = "6.5";
			$nonFlashImageCaption = "Winter scene";
	        break;
		case "independence":
			$hlDelay = "6.5";
			$nonFlashImageCaption = "George watching a fireworks display";
			break;
	    case "newyears":
	        $hlDelay = "8.5";
			$nonFlashImageCaption = "Happy New Year!";
	        break;
	    case "valentines":
	        $hlDelay = "18";
			$nonFlashImageCaption = "Happy Valentine's Day!";
	        break;
	    case "spring":
	        $hlDelay = "8.75";
			$nonFlashImageCaption = "It's spring!";
	        break;
	    case "summer":
	        $hlDelay = "12";
			$nonFlashImageCaption = "George flying a kite on the beach";
	        break;
	    case "fall":
	        $hlDelay = "5.5";
			$nonFlashImageCaption = "Fall scene";
	        break;
	    case "halloween":
	        $hlDelay = "5.75";
			$nonFlashImageCaption = "Halloween scene";
	        break;
	    case "thanksgiving":
	        $hlDelay = "6.8";
			$nonFlashImageCaption = "Thanksgiving scene";
	        break;
	}
	
	
	
	
	$number1 = rand(0,50);
	$number2 = rand(0,50);
	
	if ($number2 === $number1) {
		if ($number2 === 50) {
			$number2--;
		} else {
			$number2++;
		}
	}
	
	
	$hlData1 = new HLData($number1);
	$hlData2 = new HLData($number2);
	
	$hl1btn = $hlData1->swf_label;
	$hl1url = $hlData1->url;
	$hl2btn = $hlData2->swf_label;
	$hl2url = $hlData2->url;
	
	if ($hl1url === '') {
		$hl1url = "https://pbskids.org/curiousgeorge/$hl1url/";
	}
	if ($hl2url === '') {
		$hl2url = "https://pbskids.org/curiousgeorge/$hl2url/";
	}
	
	?>
	
<div id="hm-marquee">
	<div id="flashcontent" style="position:relative;top:-16px;left:53px;"><img src="/curiousgeorge/swf/<?php echo($season)?>.jpg" alt="<?php echo($nonFlashImageCaption)?>" title="" width="762" height="430" /></div>
</div>

<script type="text/javascript">
var so = new SWFObject("https://pbskids.org/curiousgeorge/index.swf", "index", "762", "430", "9", "#ffd703");
so.addVariable("season",<?php echo("'$season'")?>);
so.addVariable("hl1btn",<?php echo("'$hl1btn'")?>);
so.addVariable("hl2btn",<?php echo("'$hl2btn'")?>);
so.addVariable("hl1url",<?php echo("'$hl1url'")?>);
so.addVariable("hl2url",<?php echo("'$hl2url'")?>);
so.addVariable("hlDelay",<?php echo("'$hlDelay'")?>);
so.addParam("quality","best");
so.addParam("menu","false");
so.addParam("loop","false");
// Setting wmode param to opaque to approprately stack swf obj in IE -- 4/27/2015 INye
so.addParam("wmode","opaque");
so.addParam("allowScriptAccess","always");
//PBS_enable_cdn(so);
so.write("flashcontent");
</script>

<div style="width:736px;text-align:center;padding-left:15px;">

	<div id="hm-station-txt">
	
		<p>Find out when Curious George is on <a href="/tvschedules/localizer.html?dest=/curiousgeorge/index.html&amp;nola=CUGE">in your town.</a></p>
	
	</div>

	<div id="ftr">
		<div id="ftr-hm">
	<!-- #NOINCLUDE "ftr_txt.pl" -->
	<a href="/curiousgeorge/games/">Games</a> |
	<a href="/curiousgeorge/printables/">Printables</a> |
	<a href="/curiousgeorge/video/">Video Clips</a> |
	<a href="/curiousgeorge/busyday/">Busy Day</a> |
	<a href="http://www.pbs.org/parents/curiousgeorge/">Parents</a> |
	<a href="http://www.pbs.org/teachers/curiousgeorge/">Teachers</a> |
	<a href="http://sgptv.org/programs/program/curious-george/" title="SGPTV">Program Sponsorship</a><br />
	<a href="http://www.pbs.org/parents/curiousgeorge/site/terms_of_use.html">&reg; &amp; &copy; 2015 Universal Studios and/or HMH. ALL RIGHTS RESERVED.</a> |
	<a href="/privacy/">PBS KIDS Privacy Policy</a>
<!-- end NOINCLUDE -->
		</div>

		<map name="hm_play_Map">
			<area shape="rect" alt="PBS Play" coords="550,22,715,70" href="http://www.pbskidsplay.org/playnow/?CPLAYLG&amp;btn=1" />
			<area shape="rect" alt="PBS Play" coords="0,13,162,71" href="http://www.pbskidsplay.org/playnow/?CPLAYLG&amp;btn=1" />
		</map>
		<div id="ftr_play" style="padding-left:15px;"><img alt="" border="0" src="img/pbs_play_banner.gif" width="736" height="88" usemap="#hm_play_Map" /></div>

		<a href="http://www.curiousgeorge.com/" class="cg-overlay-trigger not-bridge"><img src="img/hmh_banner.gif" alt="" width="721" height="52" border="0" alt="Curious George books and more games" title="" /></a>

		<div id="hm-funders">
			<img src="img/hm_logos_2015.png" usemap="#hm_logos_Map" width="756" height="72" alt="" />
			<map name="hm_logos_Map">
				<area shape="rect" alt="Imagine Entertainment" coords="65,21,157,61" href="http://www.imagine-entertainment.com/" title="Imagine Entertainment" />
				<area shape="rect" alt="WGBH Educational Foundation" coords="166,21,244,61" href="http://www.wgbh.org/" title="WGBH Educational Foundation" />
				<area shape="rect" alt="Universal Studios" coords="249,8,328,65" href="http://curiousgeorge.com/" title="Universal 1440 Entertainment" />
				<area shape="rect" alt="ABCmouse.com" coords="393,23,478,71" href="http://www.abcmouse.com/landing/dis:curiousgeorge" title="ABCmouse.com" />
				<area shape="rect" alt="Department of Education" coords="550,11,611,69" href="http://www.ed.gov/" title="the Department of Education" />
				<area shape="rect" alt="Corporation for Public Broadcasting" coords="622,10,677,70" href="http://www.cpb.org/" title="the Corporation for Public Broadcasting" />
			</map>
		</div>

		<div id="hm-copy">
			<p>Curious George is a production of Imagine, WGBH and Universal. Curious George and related characters, created by Margret and H.A. Rey, are copyrighted and trademarked by Houghton Mifflin Harcourt and used under license. Licensed by Universal Studios Licensing LLC. Television Series: &copy;2015 Universal Studios. All Rights Reserved. The PBS KIDS logo is a registered mark of PBS and is used with permission. Proud sponsor of Curious George&reg; on PBS KIDS&reg; is ABCmouse.com.</p>
			<p>The contents of George's Busy Day online features were developed under a grant from the Department of Education.<br />However, those contents do not necessarily represent the policy of the Department of Education, and you should not assume endorsement by the Federal Government. </p>
			<p>The project is funded by a Ready To Learn grant (PR/AWARD No. U295A100025, CFDA No. 84.295A) provided by the Department of Education to the Corporation for Public Broadcasting.</p>
		</div>
	</div>
</div>

<?php
	echo $twig->render('curiousgeorge/includes/cg_site_link.html');
?>

</body>
</html>