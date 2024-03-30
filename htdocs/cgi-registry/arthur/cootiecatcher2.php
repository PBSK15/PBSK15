<?php

    $greenArr = [
        0 => 'muffy',
        1 => 'binky',
        2 => 'pal'
    ];
    $blueArr = [
        0 => 'arthur',
        1 => 'fern',
        2 => 'dw',
    ];
    $redArr = [
        0 => 'brain',
        1 => 'emily',
        2 => 'tibbles'
    ];
    $yellowArr = [
        0 => 'prunella',
        1 => 'buster',
        2 => 'francine'
    ];

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {


        $printSideNav = ("  <ul id=\"printSideNav\">
        <li><a href=\"/arthur/print/cootiecatcher/step1.html\" class=\"selected\"><span>Make your own</span></a></li>
        <li><a href=\"/cgi-registry/arthur/cootiecatcher2.php\"><span>Get a random one</span></a></li>
        <li><a href=\"/arthur/print/cootiecatcher/directions.html\"><span>Directions</span></a></li>
       </ul>");


        $step2 = false;
        $payload = array_keys($_POST);


        foreach($payload as $dataItem) {
            if (!str_contains($dataItem, "_x")) {
                continue;
            }
            $step2 = true;
            break;
        }



        $greenChoice = $_POST['green_num'] ?? '0';
        $blueChoice = $_POST['blue_num'] ?? '0';
        $redChoice = $_POST['red_num'] ?? '0';
        $yellowChoice = $_POST['yellow_num'] ?? '0';



        if ($step2) {

            $finalContent = ("
			    <div id=\"printableArea\">			
					    <div class=\"printable-content\">					
				    		<div class=\"printable-nav\">
					    		<div class=\"print-title-left\"><h1>Step 2</h1><p>Into each box type a fortune (\"You will find $10\"), a saying (\"Haste makes waste\") or another message. Then click BUILD.</p></div>							
				    		</div>
						<div id=\"ccWrapper\">
				    			<img src=\"../../arthur/i/print/cootiecatcher/step2_prunella.gif\" alt=\"\" id=\"ccStep1Img\" width=\"151\" height=\"332\" border=\"0\">
				    			<form action=\"/cgi-registry/arthur/cootiecatcher2.php\" method=\"post\" name=\"cc\" id=\"ccForm\">
				    				<ul>
	    			    					<li>
		    		    						<textarea name=\"fortune1\" rows=\"3\" cols=\"38\" wrap=\"\"></textarea>
			    		    				</li>								
				    		    			<li>
					    		    			<textarea name=\"fortune2\" rows=\"3\" cols=\"38\" wrap=\"\"></textarea>
						    		    	</li>
							    		    <li>
								    		    <textarea name=\"fortune3\" rows=\"3\" cols=\"38\" wrap=\"\"></textarea>
									    </li>   
									<li>    
	    									<textarea name=\"fortune4\" rows=\"3\" cols=\"38\" wrap=\"\"></textarea>
		    							</li>   
			    					</ul>   
				    				<button type=\"submit\" id=\"buildBtn\">Build</button>
					    			<input type=\"hidden\" name=\"green_num\" value=\"$greenChoice\">
						    		<input type=\"hidden\" name=\"blue_num\" value=\"$blueChoice\">
							    	<input type=\"hidden\" name=\"red_num\" value=\"$redChoice\">
							    	<input type=\"hidden\" name=\"yellow_num\" value=\"$yellowChoice\">
	    						</form>
		    				</div>
			    			<div class=\"print-bg-top\"></div>
						<div class=\"print-bg-btm\"></div>
				    	</div>
            
				
		    	</div>");

        } else {
        
            $fortune1 = $_POST['fortune1'];
            $fortune2 = $_POST['fortune2'];
            $fortune3 = $_POST['fortune3'];
            $fortune4 = $_POST['fortune4'];

            $character1 = $greenArr[$greenChoice];
            $character2 = $blueArr[$blueChoice];
            $character3 = $redArr[$blueChoice];
            $character4 = $yellowArr[$yellowChoice];

            $character1Alt = ucwords($character1);
            $character3Alt = ucwords($character3);

            if ($character1 == 'dw') {
                $character1Alt = "D.W.";
            }
            if ($character3 == 'tibbles') {
                $character3Alt = "The Tibbles";
            }

            $finalContent = ("<div id=\"printableArea\">			
            <div class=\"printable-content\">					
                <div class=\"printable-nav\">
                    <div class=\"print-title-left\"><p>Print this page, then follow the <a href=\"/arthur/print/cootiecatcher/directions.html\">Cootie Catcher directions</a> to learn how to fold it and how to use it.</p></div>
                       <div class=\"print-btn-right\"><span class=\"print-btn-one\">Print This Page</span></div>
               </div>
                <div id=\"ccWrapper\"><div class=\"page\">
                    <table width=\"571\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" id=\"customCatcher\">
                        <tr>
                            <td colspan=\"9\"><img src=\"/arthur/i/print/cootiecatcher/scissor_top.gif\" width=\"35\" height=\"21\" alt=\"scissors icon\" border=\"0\" class=\"scissor\"/><img src=\"/arthur/i/print/cootiecatcher/dot_line_top.gif\" alt=\"dashed outline\" width=\"571\" height=\"2\" border=\"0\" class=\"cc-top\"/>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan=\"7\">
                            <img src=\"/arthur/i/print/cootiecatcher/dot_line_side.gif\" alt=\"dashed outline\" width=\"2\" height=\"566\" border=\"0\" class=\"cc-side\"/></td>
                            <td rowspan=\"2\" colspan=\"2\"><img src=\"/arthur/i/print/cootiecatcher/red_$character3.gif\" alt=\"$character3Alt in a red circle\" width=\"143\" height=\"143\" border=\"0\" class=\"cc-char\"/>
                            </td>
                            <td><img src=\"/arthur/i/print/cootiecatcher/3.gif\" alt=\"3\" width=\"71\" height=\"71\" border=\"0\" class=\"cc-num\"/></td>
                            <td><img src=\"/arthur/i/1px.gif\" width=\"139\" height=\"71\" alt=\"\" border=\"0\" class=\"cc-mid-spacer\"/></td>
                            <td><img src=\"/arthur/i/print/cootiecatcher/4.gif\" width=\"71\" height=\"71\" alt=\"4\" class=\"cc-num\" /></td>
                            <td rowspan=\"2\" colspan=\"2\" border=\"0\" /><img src=\"/arthur/i/print/cootiecatcher/yellow_$character4.gif\" alt=\"" . ucwords($character4) . " in a yellow circle\" width=\"143\" height=\"143\" border=\"0\" class=\"cc-char\"/></td>
                            <td rowspan=\"7\"><img src=\"/arthur/i/print/cootiecatcher/dot_line_side.gif\" alt=\"dashed outline\" width=\"2\" height=\"566\" border=\"0\" class=\"cc-side\"/></td>
                        </tr>
                        <tr>
                            <td><img src=\"/arthur/i/1px.gif\" width=\"71\" height=\"72\" alt=\"\" border=\"0\" /></td>
                            <td rowspan=\"2\" valign=\"middle\"><p class=\"fortune\">$fortune1</p></td>
                            <td><img src=\"/arthur/i/1px.gif\" width=\"71\" height=\"72\" alt=\"\" border=\"0\" /></td>
                        </tr>
                                <tr>
                            <td><img src=\"/arthur/i/print/cootiecatcher/2.gif\" alt=\"2\" width=\"71\" height=\"71\" border=\"0\" class=\"cc-num\"/></td>
                            <td><img src=\"/arthur/i/1px.gif\" width=\"72\" height=\"71\" alt=\"\" border=\"0\" /></td>
                            <td><img src=\"/arthur/i/1px.gif\" width=\"71\" height=\"71\" alt=\"\" border=\"0\" /></td>
                            <td><img src=\"/arthur/i/1px.gif\" width=\"71\" height=\"71\" alt=\"\" border=\"0\" /></td>
                            <td><img src=\"/arthur/i/1px.gif\" width=\"72\" height=\"71\" alt=\"\" border=\"0\" /></td>
                            <td><img src=\"/arthur/i/print/cootiecatcher/5.gif\" alt=\"5\" width=\"71\" height=\"71\" border=\"0\" class=\"cc-num\" /></td>
                        </tr>
                        <tr>
                            <td><img src=\"/arthur/i/1px.gif\" width=\"71\" height=\"134\" alt=\"\" border=\"0\" class=\"cc-side-spacer\"/></td>
                                <td colspan=\"2\" valign=\"middle\"><p class=\"fortune\">$fortune4</p></td>
                            <td><img src=\"/arthur/i/1px.gif\" width=\"139\" height=\"134\" alt=\"\" border=\"0\" class=\"cc-center-spacer\" /></td>
                            <td colspan=\"2\" valign=\"middle\"><p class=\"fortune\" >$fortune2</p></td>
                            <td><img src=\"/arthur/i/1px.gif\" width=\"71\" height=\"134\" alt=\"\" class=\"cc-side-spacer\"></td>
                        </tr>
                    <tr>
                            <td><img src=\"/arthur/i/print/cootiecatcher/1.gif\" alt=\"1\" width=\"71\" height=\"71\" border=\"0\" class=\"cc-num\" /></td>
                            <td><img src=\"/arthur/i/1px.gif\" width=\"72\" height=\"71\" alt=\"\" border=\"0\" /></td>
                            <td><img src=\"/arthur/i/1px.gif\" width=\"71\" height=\"71\" alt=\"\" border=\"0\" /></td>
                            <td rowspan=\"2\" valign=\"middle\"><p class=\"fortune\">$fortune3</p></td>
                        <td><img src=\"/arthur/i/1px.gif\" width=\"71\" height=\"71\" alt=\"\" border=\"0\" /></td>
                            <td><img src=\"/arthur/i/1px.gif\" width=\"72\" height=\"71\" alt=\"\" border=\"0\" /></td>
                            <td><img src=\"/arthur/i/print/cootiecatcher/6.gif\" alt=\"6\" width=\"71\" height=\"71\" border=\"0\" class=\"cc-num\" /></td>
                        </tr>
                        <tr>
                            <td rowspan=\"2\" colspan=\"2\"><img src=\"/arthur/i/print/cootiecatcher/blue_$character2.gif\" alt=\"" . ucwords($character2) . " in a blue circle\" width=\"143\" height=\"143\" border=\"0\" class=\"cc-char\"/></td>
                            <td><img src=\"/arthur/i/1px.gif\" width=\"71\" height=\"72\" alt=\"\" border=\"0\" /></td>
                            <td><img src=\"/arthur/i/1px.gif\" width=\"71\" height=\"72\" alt=\"\" border=\"0\" /></td>
                            <td rowspan=\"2\" colspan=\"2\"><img src=\"/arthur/i/print/cootiecatcher/green_$character1.gif\" alt=\"$character1Alt in a green circle\" width=\"143\" height=\"143\" border=\"0\" class=\"cc-char\"/></td>
                        </tr>
                        <tr>
                            <td><img src=\"/arthur/i/print/cootiecatcher/8.gif\" width=\"71\" height=\"71\" alt=\"8\" border=\"0\" class=\"cc-num\" /></td>
                            <td><img src=\"/arthur/i/1px.gif\" width=\"139\" height=\"71\" alt=\"\" border=\"0\" /></td>
                            <td><img src=\"/arthur/i/print/cootiecatcher/7.gif\" alt=\"7\" width=\"71\" height=\"71\" border=\"0\" class=\"cc-num\" /></td>
                    </tr>
                    <tr>
                        <td colspan=\"9\" align=\"center\" valign=\"top\"><img src=\"/arthur/i/print/cootiecatcher/dot_line_top.gif\" alt=\"dashed outline\" width=\"571\" height=\"2\" border=\"0\" class=\"cc-top\"/><img src=\"/arthur/i/print/cootiecatcher/scissor_bottom.gif\" alt=\"scissors icon\" width=\"35\" height=\"21\" border=\"0\" class=\"scissor\"/></td>
                    </tr>
                </table>
                <img src=\"/arthur/i/print/copyright.gif\" width=\"530\" height=\"49\" alt=\"\" border=\"0\" class=\"copyright\" />
                </div>							
            </div>
            <div class=\"print-bg-top\"></div>
            <div class=\"print-bg-btm\"></div>
        </div>
        
    
</div>"
            );

        }










    } else {

        $printSideNav = (" <ul id=\"printSideNav\">
        <li><a href=\"/arthur/print/cootiecatcher/step1.html\"><span>Make your own</span></a></li>
        <li><a href=\"/cgi-registry/arthur/cootiecatcher2.php\" class=\"selected\"><span>Get a random one</span></a></li>
        <li><a href=\"/arthur/print/cootiecatcher/directions.html\"><span>Directions</span></a></li>
       </ul>");

        $fortunesArr = array("A ventriloquist's dummy can get kind of heavy.",
        "A yellow sweater goes great with brown glasses.",
        "Be careful not to get into Tibble Twin Trouble!",
        "Just like Arthur, you will soon get hooked on an embarrassing show.",
        "Later this week you will almost break a world record.",
        "Later today you will give someone advice, just like Muffy.",
        "Like Sue Ellen, you may soon become obsessed with a computer game.",
        "Much like Binky and The Brain, you will soon wait a long time for someone.",
        "Much like Bionic Bunny, you will soon swoop in for the rescue!",
        "Next week you will see a house as big as Muffy's.",
        "Next week you'll have a real tough time / Getting everything to rhyme.",
        "On Friday you will figure out where all those missing socks went.",
        "One of your favorite TV shows may soon be cancelled, just like \"Mary Moo Cow.\"",
        "Soon you will try to be in two places at once, much like Francine.",
        "Soon, like Buster, you will attempt to live simply.",
        "Today you will know the correct answer, just like The Brain!",
        "Tomorrow you will prove that you have P.A.N.T.S.",
        "Tomorrow's lunch will be as tasty as a Sugar Bowl sundae.",
        "Tomorrow, much like Pal, you will chase after a ball.",
        "You may soon enter the secret world of dogs and babies.",
        "You might soon have some odd dreams, much like Arthur did after overeating sweets.",
        "You will be pestered by a younger person, just like Arthur is.",
        "You will soon have new neighbors, just like Arthur.",
        "You will soon learn to be a good sport, just like Francine did.",
        "You will soon meet a teacher tougher than Mr. Ratburn.",
        "You will soon meet someone who likes farming as much as Grandpa Dave.",
        "You will soon score a goal, just like Francine.",
        "You will soon try your hand at comedy, just like The Brain.",
        "Your future will be as sweet as Binky's clarinet playing.",
        "Your luck will return, just like D.W.'s snowball.");

        

        $randomFortunes = array_rand($fortunesArr, 4);

        $fortune1 = $fortunesArr[$randomFortunes[0]];
        $fortune2 = $fortunesArr[$randomFortunes[1]];
        $fortune3 = $fortunesArr[$randomFortunes[2]];
        $fortune4 = $fortunesArr[$randomFortunes[3]];

        $character1 = $greenArr[array_rand($greenArr, 1)];
        $character2 = $blueArr[array_rand($blueArr, 1)];
        $character3 = $redArr[array_rand($redArr, 1)];
        $character4 = $yellowArr[array_rand($yellowArr, 1)];
        
        $character1Alt = ucwords($character1);
        $character3Alt = ucwords($character3);

        if ($character1 == 'dw') {
            $character1Alt = "D.W.";
        }
        if ($character3 == 'tibbles') {
            $character3Alt = "The Tibbles";
        }


        $finalContent = ("<div id=\"printableArea\">			
        <div class=\"printable-content\">					
            <div class=\"printable-nav\">
                <div class=\"print-title-left\"><p>Print this page, then follow the <a href=\"/arthur/print/cootiecatcher/directions.html\">Cootie Catcher directions</a> to learn how to fold it and how to use it.</p></div>
                   <div class=\"print-btn-right\"><span class=\"print-btn-one\">Print This Page</span></div>
           </div>
            <div id=\"ccWrapper\"><div class=\"page\">
                <table width=\"571\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" id=\"customCatcher\">
                    <tr>
                        <td colspan=\"9\"><img src=\"/arthur/i/print/cootiecatcher/scissor_top.gif\" width=\"35\" height=\"21\" alt=\"scissors icon\" border=\"0\" class=\"scissor\"/><img src=\"/arthur/i/print/cootiecatcher/dot_line_top.gif\" alt=\"dashed outline\" width=\"571\" height=\"2\" border=\"0\" class=\"cc-top\"/>
                        </td>
                    </tr>
                    <tr>
                        <td rowspan=\"7\">
                        <img src=\"/arthur/i/print/cootiecatcher/dot_line_side.gif\" alt=\"dashed outline\" width=\"2\" height=\"566\" border=\"0\" class=\"cc-side\"/></td>
                        <td rowspan=\"2\" colspan=\"2\"><img src=\"/arthur/i/print/cootiecatcher/red_$character3.gif\" alt=\"$character3Alt in a red circle\" width=\"143\" height=\"143\" border=\"0\" class=\"cc-char\"/>
                        </td>
                        <td><img src=\"/arthur/i/print/cootiecatcher/3.gif\" alt=\"3\" width=\"71\" height=\"71\" border=\"0\" class=\"cc-num\"/></td>
                        <td><img src=\"/arthur/i/1px.gif\" width=\"139\" height=\"71\" alt=\"\" border=\"0\" class=\"cc-mid-spacer\"/></td>
                        <td><img src=\"/arthur/i/print/cootiecatcher/4.gif\" width=\"71\" height=\"71\" alt=\"4\" class=\"cc-num\" /></td>
                        <td rowspan=\"2\" colspan=\"2\" border=\"0\" /><img src=\"/arthur/i/print/cootiecatcher/yellow_$character4.gif\" alt=\"" . ucwords($character4) . " in a yellow circle\" width=\"143\" height=\"143\" border=\"0\" class=\"cc-char\"/></td>
                        <td rowspan=\"7\"><img src=\"/arthur/i/print/cootiecatcher/dot_line_side.gif\" alt=\"dashed outline\" width=\"2\" height=\"566\" border=\"0\" class=\"cc-side\"/></td>
                    </tr>
                    <tr>
                        <td><img src=\"/arthur/i/1px.gif\" width=\"71\" height=\"72\" alt=\"\" border=\"0\" /></td>
                        <td rowspan=\"2\" valign=\"middle\"><p class=\"fortune\">$fortune1</p></td>
                        <td><img src=\"/arthur/i/1px.gif\" width=\"71\" height=\"72\" alt=\"\" border=\"0\" /></td>
                    </tr>
                            <tr>
                        <td><img src=\"/arthur/i/print/cootiecatcher/2.gif\" alt=\"2\" width=\"71\" height=\"71\" border=\"0\" class=\"cc-num\"/></td>
                        <td><img src=\"/arthur/i/1px.gif\" width=\"72\" height=\"71\" alt=\"\" border=\"0\" /></td>
                        <td><img src=\"/arthur/i/1px.gif\" width=\"71\" height=\"71\" alt=\"\" border=\"0\" /></td>
                        <td><img src=\"/arthur/i/1px.gif\" width=\"71\" height=\"71\" alt=\"\" border=\"0\" /></td>
                        <td><img src=\"/arthur/i/1px.gif\" width=\"72\" height=\"71\" alt=\"\" border=\"0\" /></td>
                        <td><img src=\"/arthur/i/print/cootiecatcher/5.gif\" alt=\"5\" width=\"71\" height=\"71\" border=\"0\" class=\"cc-num\" /></td>
                    </tr>
                    <tr>
                        <td><img src=\"/arthur/i/1px.gif\" width=\"71\" height=\"134\" alt=\"\" border=\"0\" class=\"cc-side-spacer\"/></td>
                            <td colspan=\"2\" valign=\"middle\"><p class=\"fortune\">$fortune4</p></td>
                        <td><img src=\"/arthur/i/1px.gif\" width=\"139\" height=\"134\" alt=\"\" border=\"0\" class=\"cc-center-spacer\" /></td>
                        <td colspan=\"2\" valign=\"middle\"><p class=\"fortune\" >$fortune2</p></td>
                        <td><img src=\"/arthur/i/1px.gif\" width=\"71\" height=\"134\" alt=\"\" class=\"cc-side-spacer\"></td>
                    </tr>
                <tr>
                        <td><img src=\"/arthur/i/print/cootiecatcher/1.gif\" alt=\"1\" width=\"71\" height=\"71\" border=\"0\" class=\"cc-num\" /></td>
                        <td><img src=\"/arthur/i/1px.gif\" width=\"72\" height=\"71\" alt=\"\" border=\"0\" /></td>
                        <td><img src=\"/arthur/i/1px.gif\" width=\"71\" height=\"71\" alt=\"\" border=\"0\" /></td>
                        <td rowspan=\"2\" valign=\"middle\"><p class=\"fortune\">$fortune3</p></td>
                    <td><img src=\"/arthur/i/1px.gif\" width=\"71\" height=\"71\" alt=\"\" border=\"0\" /></td>
                        <td><img src=\"/arthur/i/1px.gif\" width=\"72\" height=\"71\" alt=\"\" border=\"0\" /></td>
                        <td><img src=\"/arthur/i/print/cootiecatcher/6.gif\" alt=\"6\" width=\"71\" height=\"71\" border=\"0\" class=\"cc-num\" /></td>
                    </tr>
                    <tr>
                        <td rowspan=\"2\" colspan=\"2\"><img src=\"/arthur/i/print/cootiecatcher/blue_$character2.gif\" alt=\"" . ucwords($character2) . " in a blue circle\" width=\"143\" height=\"143\" border=\"0\" class=\"cc-char\"/></td>
                        <td><img src=\"/arthur/i/1px.gif\" width=\"71\" height=\"72\" alt=\"\" border=\"0\" /></td>
                        <td><img src=\"/arthur/i/1px.gif\" width=\"71\" height=\"72\" alt=\"\" border=\"0\" /></td>
                        <td rowspan=\"2\" colspan=\"2\"><img src=\"/arthur/i/print/cootiecatcher/green_$character1.gif\" alt=\"$character1Alt in a green circle\" width=\"143\" height=\"143\" border=\"0\" class=\"cc-char\"/></td>
                    </tr>
                    <tr>
                        <td><img src=\"/arthur/i/print/cootiecatcher/8.gif\" width=\"71\" height=\"71\" alt=\"8\" border=\"0\" class=\"cc-num\" /></td>
                        <td><img src=\"/arthur/i/1px.gif\" width=\"139\" height=\"71\" alt=\"\" border=\"0\" /></td>
                        <td><img src=\"/arthur/i/print/cootiecatcher/7.gif\" alt=\"7\" width=\"71\" height=\"71\" border=\"0\" class=\"cc-num\" /></td>
                </tr>
                <tr>
                    <td colspan=\"9\" align=\"center\" valign=\"top\"><img src=\"/arthur/i/print/cootiecatcher/dot_line_top.gif\" alt=\"dashed outline\" width=\"571\" height=\"2\" border=\"0\" class=\"cc-top\"/><img src=\"/arthur/i/print/cootiecatcher/scissor_bottom.gif\" alt=\"scissors icon\" width=\"35\" height=\"21\" border=\"0\" class=\"scissor\"/></td>
                </tr>
            </table>
            <img src=\"/arthur/i/print/copyright.gif\" width=\"530\" height=\"49\" alt=\"\" border=\"0\" class=\"copyright\" />
            </div>							
        </div>
        <div class=\"print-bg-top\"></div>
        <div class=\"print-bg-btm\"></div>
    </div>
    

</div>"
        );



    }

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
		'additionalTitle' => " . Print . Cootie Catcher",
		'desc' => 'To make your own Cootie Catcher, first select the ARTHUR characters that you would like to appear on your Cooti Catcher.',
		'keywds' => 'Cootie Catcher, oragami, fortune, Prunella, print',
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
		
		<!-- end bbinclude -->
		<div id="content" class="bg-9cc">
 <div class="ruler"></div>
 <div class="print-instr"><a href="index.html"><h4 id="cootieHeader">Prunella's Cootie Catcher</h4></a>
  <?php echo($printSideNav); ?>
 </div>
 <?php echo($finalContent); ?>
 <div id="relatedContent">
  <ul>
   <li><a href="/arthur/friends/prunella/index.html" id="rcPrunella">Prunella</a></li>
   <li><a href="/arthur/games/askprunella/index.html" id="rcAskPrunella">Ask Prunella</a></li>
   <li><a href="/arthur/games/yougottobekidding/index.html" id="rcKidding">You've Got To be Kidding</a></li>
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
				
				<ul id="footerSubNav"><li><a href="/arthur/parentsteachers/index.html">Parents & Teachers</a></li>
				<li><a href="/arthur/parentsteachers/help/index.html">Need Help?</a></li>
				<li><a href="/buster/index.html"><div class="wrap">Visit POSTCARDS FROM BUSTER</div></a></li>
				<li><a href="https://sgptv.org/programs/program/arthur/">Program Sponsorship</a></li>
				<li><a href="/arthur/parentsteachers/site/song_credits.html">Song and Music Credits</a></li></ul>
				<img src="/arthur/i/footer/footer_rule.gif" width="3" height="174" alt="" border="" class="footer_separator"/>
				<p>All characters and underlying materials (including artwork) &copy; Marc Brown.<br />
				"Arthur" and "D.W." and all of the ARTHUR characters are trademarks of Marc Brown.<br /><a href="/arthur/parentsteachers/site/copyright.html">&copy; 2015 WGBH</a></p>
				<img src="/arthur/i/footer/footer_rule.gif" width="3" height="174" alt="" border="" class="footer_separator"/>
			</div>
		</div>
<!-- end bbinclude -->
</div>

</body>