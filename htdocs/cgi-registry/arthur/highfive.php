<?php

    $user_name = $_POST['user_name'];
    $border_num = $_POST['num_borders'];
    $highfivecategory = $_POST['ownhighfivecategory'] != '' ? $_POST['ownhighfivecategory'] : $_POST['highfivecategory'];

    $finalContent = ("			<div id=\"printableArea\">					
    <div class=\"printable-content\" id=\"highFive\">	
        <div class=\"printable-nav\">						
            <div class=\"print-btn-right\"><span class=\"print-btn-one\">Print This Page</span></div>								
        </div>
        <div class=\"page\">
            <div id=\"hfCert\">
                <img src=\"/arthur/i/print/highfive/left_$border_num.gif\" width=\"97\" height=\"675\" alt=\"\" border=\"\" id=\"highFiveLeft\"/>
                <div id=\"highFiveMiddle\">
                    <img src=\"/arthur/i/print/highfive/top_$border_num.gif\" width=\"318\" height=\"137\" alt=\"\" border=\"\" id=\"highFiveTop\"/>
                    <div id=\"msg\">				
                        <h5>$user_name</h5>
                        <p>for</p>
                        <h5>$highfivecategory</h5>
                    </div>
                    <img src=\"/arthur/i/print/highfive/bottom_$border_num.gif\" width=\"318\" height=\"321\" alt=\"\" border=\"\" id=\"highFiveBtm\"/>
                </div>
                <img src=\"/arthur/i/print/highfive/right_$border_num.gif\" width=\"97\" height=\"675\" alt=\"\" border=\"\" id=\"highFiveRight\"/>
            </div>
            <img src=\"../../arthur/i/print/copyright.gif\" width=\"530\" height=\"49\" alt=\"\" border=\"0\" class=\"copyright\" />
            <div class=\"print-bg-top\"></div>
            <div class=\"print-bg-btm\"></div>
        </div>
    </div>					
</div>");



?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="https://www.w3.org/1999/xhtml" lang="en" xml:lang="en">


<?php
	require '../../vendor/autoload.php';
	use Twig\Environment;
	use Twig\Loader\FilesystemLoader;

	$loader = new FilesystemLoader('../../');
	$twig = new Environment($loader);
	
	echo $twig->render('arthur/includes/head.twig', [
		'additionalTitle' => " . Print . Francine's High Five",
		'desc' => 'View the personalized award certificaet that you created for someone. Print it out, sign it, and present it to the winner!',
		'keywds' => 'award, certificate',
		'selectedNav' => 'print',
		'noSitewide' => true,
        'printableJs' => true
		]
	);
	echo "<body>";
	echo $twig->render('template_includes/legacy_headband_include.html');
	echo $twig->render('template_includes/legacy_pbsk_js.html');
	

	
	
	
	?>



<div id="coastline">
		<?php
			echo $twig->render('arthur/includes/nav.twig', [
				'selectedNav' => 'print'
			]
			);
		?>

<div id="content" class="bg-9cc">
 <div class="ruler"></div>
 <div class="print-instr">
			<a href="/arthur/print/highfive/index.html"><h4 id="fiveHeader">Francine's High Five</h4></a></div>
 <?php echo($finalContent); ?>
 <div id="relatedContent">
  <ul>
   <li><a href="/arthur/friends/francine/index.html" id="rcFrancine">Francine</a></li>
   <li><a href="/arthur/games/unmatching/index.html" id="rcUnmatching">Un-matching Game</a></li>
   <li><a href="/arthur/games/lettersto/index.html" id="rcLettersTo">Letters To...</a></li>
  </ul>
 </div>
</div><!-- #bbinclude "footer.pl" -->
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
				<li><a href="https://sgptv.org/programs/program/arthur/">Program Sponsorship</a></li>
				<li><a href="/arthur/parentsteachers/site/song_credits.html">Song and Music Credits</a></li></ul>
				<img src="/arthur/i/footer/footer_rule.gif" alt="" class="footer_separator" width="3" height="174" border="">
				<p>All characters and underlying materials (including artwork) © Marc Brown.<br>
				"Arthur" and "D.W." and all of the ARTHUR characters are trademarks of Marc Brown.<br><a href="/arthur/parentsteachers/site/copyright.html">© 2015 WGBH</a></p>
				<img src="/arthur/i/footer/footer_rule.gif" alt="" class="footer_separator" width="3" height="174" border="">
			</div>
		</div>
</body>
</html>