<?php
	$from = $_POST['from'] == '' ? 'friend' : $_POST['from'];
	?>
	
	
	
	
	
	
	
	
	
	
	
	
	
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
	
<?php
	require '../../vendor/autoload.php';
	use Twig\Environment;
	use Twig\Loader\FilesystemLoader;

	$loader = new FilesystemLoader('../../');
	$twig = new Environment($loader);
	
	echo $twig->render('arthur/includes/head.twig', [
		'additionalTitle' => " . Games . Baby Kate Stickers",
		'desc' => 'Thanks for sending Baby Kate stickers! This is your thank you card from Baby Kate and Mrs. Read (Baby Kates mommy). See Baby Kates handprints?',
		'keywds' => 'Baby Kate, stickers, card, letter, game',
		'specialInclude' => '<link rel="stylesheet" type="text/css" href="/arthur/c/games.css" media="screen" />',
		'noSitewide' => true
		]
	);
	echo "<body>";
	echo $twig->render('template_includes/legacy_headband_include.html');
	echo $twig->render('template_includes/legacy_pbsk_js.html');
	

	
	
	
	?>


<div id="coastline">
		<?php
			echo $twig->render('arthur/includes/nav.twig', [
				'selectedNav' => 'games'
			]
			);
		?>
<!-- end bbinclude -->
<div id="content" class="bg-fff">
<div class="ruler"></div>
			<div id="mainFeature" class="fo_header">
				<table id="sticker_table" width="601" cellspacing="0" cellpadding="0" border="0">
					<tbody><tr>
						<td valign="top" bgcolor="#ffffff" align="center">
							<img src="../../arthur/games/stickers/images/stickers_header.gif" alt="Baby Kate Stickers" width="601" height="82">
						</td>
					</tr>
					<tr>
					<td>
						<table width="601" height="345" cellspacing="0" cellpadding="0" border="0">
						<tbody><tr>
							<td width="316" height="345">
								<table width="316" height="345" cellspacing="0" cellpadding="0" border="0" align="left">
								<tbody><tr>
									<td width="316" valign="top" height="256" bgcolor="#FF99CC"><img src="../../arthur/games/stickers/images/from_kate_image<?php echo(rand(1,9)); ?>.jpg" alt="" width="316" height="256"></td>
								</tr>
								<tr>
									<td width="316" valign="top" height="89"><img src="../../arthur/games/stickers/images/from_kate_bottom.gif" alt="" width="316" height="89"></td>
								</tr>
								</tbody></table>
							</td>
							<td width="285" height="345">
								<table cellspacing="0" cellpadding="0" border="0">
								<tbody><tr>
									<td width="285" valign="top" height="20" bgcolor="#FF99CC"><img src="../../arthur/games/stickers/images/from_kate_top.gif" alt="" width="285" height="20"></td>
								</tr>
								<tr>
									<td width="285" valign="top" height="28" bgcolor="#FF99CC"><h2>Dear <?php echo($from); ?>,</h2></td>
								</tr>
								<tr>
									<td width="285" valign="top" height="297"><a href="../../arthur/index.html"><img src="../../arthur/games/stickers/images/from_kate_more.gif" alt="Thanks for the stickers! Baby Kate (and Mrs. Read) More" width="285" height="297" border="0"></a></td>
								</tr>
								</tbody></table>
							</td>
						</tr>
						</tbody></table>
					</td>
					</tr>
				</tbody></table>
			</div>
			 <div id="relatedContent">
  <ul>
   <li><a href="/arthur/friends/baby_kate/index.html" id="rcKate">Baby Kate</a></li>
   <li><a href="/arthur/friends/brain/index.html" id="rcBrain">The Brain</a></li>
   <li><a href="/arthur/games/marthursticker/index.html" id="rcStickerBook">Marthur Stickerbook Mashup</a></li>
  </ul>
 </div>
		</div>
<!-- #bbinclude "footer.pl" -->
		<div id="footer">
			<div class="ruler"></div>
			<div id="footerContainer">
				<ul id="footerMainNav"><li><a href="/arthur/index.html">Home</a></li>
				<li><a href="/arthur/friends/index.html">Friends</a></li>
				<li><a href="/arthur/games/index.html">Games</a></li>
				<li><a href="/arthur/video/index.html">Video</a></li>
				<li><a href="/arthur/print/index.html">Print</a></li>
				<li><a href="/arthur/clubs/index.html">Clubs</a></li>
				<li><a href="/arthur/find/index.html">Find</a></li></ul>
				
				<ul id="footerSubNav"><li><a href="/arthur/parentsteachers/index.html">Parents &amp; Teachers</a></li>
				<li><a href="/arthur/parentsteachers/help/index.html">Need Help?</a></li>
				<li><a href="/buster/index.html"><div class="wrap">Visit POSTCARDS FROM BUSTER</div></a></li>
				<li><a href="http://sgptv.org/programs/program/arthur/">Program Sponsorship</a></li>
				<li><a href="/arthur/parentsteachers/site/song_credits.html">Song and Music Credits</a></li></ul>
				<img src="/arthur/i/footer/footer_rule.gif" alt="" class="footer_separator" width="3" height="174" border="">
				<p>All characters and underlying materials (including artwork) © Marc Brown.<br>
				"Arthur" and "D.W." and all of the ARTHUR characters are trademarks of Marc Brown.<br><a href="/arthur/parentsteachers/site/copyright.html">© 2015 WGBH</a></p>
				<img src="/arthur/i/footer/footer_rule.gif" alt="" class="footer_separator" width="3" height="174" border="">
			</div>
		</div>
<!-- end bbinclude -->
</div>

<script type="text/javascript" id="">(function(){window.__piiRedact=window.__piiRedact||!1;var k=function(f){var c=[{name:"EMAIL",regex:/[^\/]{4}(@|%40)(?!example\.com)[^\/]{4}/gi,group:""},{name:"SELF-EMAIL",regex:/[^\/]{4}(@|%40)(?=example\.com)[^\/]{4}/gi,group:""},{name:"TEL",regex:/((tel=)|(telephone=)|(phone=)|(mobile=)|(mob=))[\d\+\s][^&\/\?]+/gi,group:"$1"},{name:"NAME",regex:/((firstname=)|(lastname=)|(surname=))[^&\/\?]+/gi,group:"$1"},{name:"PASSWORD",regex:/((password=)|(passwd=)|(pass=))[^&\/\?]+/gi,group:"$1"},{name:"ZIP",
regex:/((postcode=)|(zipcode=)|(zip=))[^&\/\?]+/gi,group:"$1"}],d=function(a){return(a||document.location.search).replace(/(^\?)/,"").split("\x26").map(function(b){return b=b.split("\x3d"),this[b[0]]=decodeURIComponent(b[1]),this}.bind({}))[0]},h=function(a){return Object.keys(a).map(function(b){return b+"\x3d"+encodeURIComponent(a[b])}).join("\x26")},e=d(f),g;for(g in e)c.forEach(function(a){e[g].match(a.regex)&&(e[g]=e[g].replace(a.regex,a.group+"[REDACTED "+a.name+"]"))});return h(e)};if(!window.__piiRedact){window.__piiRedact=
!0;try{var l=window.navigator.sendBeacon;window.navigator.sendBeacon=function(){if(arguments&&arguments[0].match(/google-analytics\.com.*v=2&/)){var f=arguments[0].split("?")[0],c=arguments[0].split("?")[1];c=k(c);var d=[];arguments[1]&&arguments[1].split("\r\n").forEach(function(h){d.push(k(h))});arguments[0]=[f,c].join("?");arguments[1]&&0<d.length&&d.join("\r\n")}return l.apply(this,arguments)}}catch(f){return l.apply(this,arguments)}}})();</script><script type="text/javascript" id="">function getIP(a){dataLayer.push({event:"ipEvent",ipAddress:a.ip})};</script>

<script type="text/javascript" id="" src="http://api.ipify.org?format=jsonp&amp;callback=getIP"></script><div style="display: none; visibility: hidden;">  <script>sessionStorage.setItem("my_ip",google_tag_manager["GTM-MR8JHB"].macro(29));</script></div><div id="break-time-overlay" class="companion-overlay full-overlay" style="display:none;">
    <img class="play-time-scene" alt="Time for a break!" src="/shell/images/present/companion/break-time-scene.svg">
    <h2>Come play again later!</h2>
</div><div id="bedtime-overlay" class="companion-overlay full-overlay" style="display:none;">
    <img class="play-time-scene" alt="Time for bed!" src="/shell/images/present/companion/bedtime-scene.svg">
    <h2>Come play again tomorrow!</h2>
</div><div id="dinner-time-overlay" class="companion-overlay full-overlay" style="display:none;">
    <img class="play-time-scene" alt="Time to eat!" src="/shell/images/present/companion/meal-time-scene.svg">
    <h2>Come play again later!</h2>
</div><div id="time-for-school-overlay" class="companion-overlay full-overlay" style="display:none;">
    <img class="play-time-scene" alt="Time for school!" src="/shell/images/present/companion/time-for-school-scene.svg">
    <h2>Come play again later!</h2>
</div><div id="cboxOverlay" style="display: none;"></div><div id="colorbox" class="" style="display: none;"><div id="cboxWrapper"><div><div id="cboxTopLeft" style="float: left;"></div><div id="cboxTopCenter" style="float: left;"></div><div id="cboxTopRight" style="float: left;"></div></div><div style="clear: left;"><div id="cboxMiddleLeft" style="float: left;"></div><div id="cboxContent" style="float: left;"><div id="cboxLoadedContent" style="width: 0px; height: 0px; overflow: hidden; float: left;"></div><div id="cboxTitle" style="float: left;"></div><div id="cboxCurrent" style="float: left;"></div><div id="cboxNext" style="float: left;"></div><div id="cboxPrevious" style="float: left;"></div><div id="cboxSlideshow" style="float: left;"></div><div id="cboxClose" style="float: left;"></div></div><div id="cboxMiddleRight" style="float: left;"></div></div><div style="clear: left;"><div id="cboxBottomLeft" style="float: left;"></div><div id="cboxBottomCenter" style="float: left;"></div><div id="cboxBottomRight" style="float: left;"></div></div></div><div style="position: absolute; width: 9999px; visibility: hidden; display: none;"></div></div><div id="sm2-container" class="movieContainer" style="position: absolute; width: 8px; height: 8px; top: -9999px; left: -9999px;"><embed name="sm2movie" id="sm2movie" src="/scripts/soundmanager2/swf/soundmanager2.swf" quality="high" allowscriptaccess="always" bgcolor="#ffffff" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" allowfullscreen="false" width="100%" height="100%"></div></body></html>