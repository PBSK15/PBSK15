<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<?php
echo $twig->render('curiousgeorge/includes/head.twig', ['pageTitle' => 'Present Time']);
echo '<body>';
echo $twig->render('template_includes/modern_headband_include.html');
echo $twig->render('template_includes/modern_pbsk_js.html');
echo $twig->render('curiousgeorge/includes/nav.twig', ['selectedNav' => 'games']);
echo $twig->render('template_includes/flash_embed.html');

$currMonth = (int) strval(date("m"));

$swfName = $currMonth == 12 ? "xmas" : "neut";
	

?>

<div id="flash-game">
	<div id="flashcontent">
		<p>&nbsp;</p>
		<h2>This game requires Flash version 8</h2>
		<h2>You can <a href="http://pbskids.org/cgi-registry/kidsbridge.cgi?context=curiousgeorge_flash_player">download the latest version of Flash</a> for FREE.</h2>
		<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		 codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0"
		 width="724" height="338" id="present_time_<?php echo("$swfName"); ?>" align="">
		 <param name="movie" value="present_time_<?php echo("$swfName"); ?>.swf" />
		 <param name="quality" value="best" />
		 <param name="bgcolor" value="#aadddb" />
			 <embed
				src="present_time_<?php echo("$swfName"); ?>.swf"
				quality="best"
				bgcolor="#aadddb"
				width="724"
				height="338"
				name="present_time_<?php echo("$swfName"); ?>"
				type="application/x-shockwave-flash"
				pluginspage="http://www.macromedia.com/go/getflashplayer">
			  </embed>
		</object>

	</div>

	<div id="nametag">
		<img src="/curiousgeorge/games/img/nt_present_time.gif" alt="Present Time" height="51" width="438" />
		<p>Parents & Teachers! <a href="http://www.pbs.org/parents/curiousgeorge/site/site_features.html#present_time">Learn more about Present Time</a>.</p>
	</div>

	<p>&nbsp;</p>

</div>

<script type="text/javascript">
    var so = new PBS_SWFObject("present_time_<?php echo("$swfName"); ?>.swf", "present_time_<?php echo("$swfName"); ?>", "724", "338", "8", "#aadddb");
    so.setAttribute('redirectUrl', '/curiousgeorge/games/noflash.html');
    so.addParam("quality", "best");
    so.write("flashcontent");
</script>
<!-- end noinclude -->

<?php
	echo $twig->render('curiousgeorge/includes/ftr.html', ['ftrAttributes' => 'id="ftr-games"']);
?>

</body>
</html>
