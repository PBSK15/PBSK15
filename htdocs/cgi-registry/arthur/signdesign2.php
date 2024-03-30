<?php

    function buildInstruction($fileName, $caption) {
		$fileName = str_replace("a ", "", $fileName);
        return ("<div class=\"sign-img\">
        <img src=\"/arthur/i/print/signdesign/signs/$fileName.gif\" alt=\"Sign for the word '$fileName'\" width=\"110\" height=\"133\" border=\"0\">
        <p class=\"sign-caption\">$caption</p>
    </div>");
    }

    function buildLetter($letter) {
        return ("<img src=\"/arthur/i/print/signdesign/letters/$letter.gif\" alt=\"Finger-spelled letter '$letter'\" width=\"71\" hspace=\"2\" height=\"91\">");
    }


	function buildVerbCaption($verb) {
		switch($verb) {
			case "like":
				$verbCaption = 'Put your thumb and middle finger on chest. Slide them together and off the chest.';
				break;
			case "want":
				$verbCaption = 'Arms extended, open palms upward, bring hands to chest as you cup your fingers.';
				break;
			case "have":
				$verbCaption = 'Thumbs up, palms open and toward your chest. Bring fingers to chest';
				break;
			case "play":
				$verbCaption = 'Extend thumbs and pinkies. Twist both wrists twice.';
				break;
		}
		return $verbCaption;
	}


	function buildNounCaption($noun) {
		switch($noun) {
			case "basketball":
				$nounCaption = "Pretend you're holding a ball. Move your wrists inward and outward twice.";
				break;
			case "soccer":
				$nounCaption = "One hand is palm down. Bring the other hand up quickly, palm inward, and strike the first hand twice with the edge of your hand.";
				break;
			case "milk":
				$nounCaption = 'Close and open your fist twice.';
				break;
			case "popcorn":
				$nounCaption = 'Take turns with each index finger flicking upward.';
				break;
			case "a hamburger":
				$nounCaption = "Cup both hands, clap, turn your hands over, clap again, as if you're making a hamburger patty.";
				break;
			case "hamburgers":
				$nounCaption = "Cup both hands, clap, turn your hands over, clap again, as if you're making a hamburger patty. Repeat once.";
				break;
			case "chicken":
				$nounCaption = "Open and close your thumb and finger twice near the mouth.";
				break;
			case "animals":
				$nounCaption = "Cup your hands, palms towards your body, fingertips on chest. Rock them twice up and down.";
				break;
			case "a cat":
				$nounCaption = "Thumbs and index fingers together, other fingers extended. Pretend you're stroking long cat whiskers.";
				break;
			case "cats":
				$nounCaption = "Thumbs and index fingers together, other fingers extended. Pretend you're stroking long cat whiskers twice.";
				break;
			case "a dog":
				$nounCaption = "Snap your middle finger with your thumb.";
				break;
			case "dogs":
				$nounCaption = "Snap your middle finger with your thumb twice.";
				break;
			case "games":
				$nounCaption = 'Make a "thumbs up" sign with both hands. Bring your knuckles together twice, palms inward.';
				break;
			case "sports":
				$nounCaption = "Closed fists with thumbs up, palms facing each other. Alternate movement toward and away from body twice.";
				break;
			case "TV shows":
				$nounCaption = "Finger spell \"TV.\" Then, with closed fists and thumbs extended, take turns brushing thumbs downward just inside your shoulders.";
				break;
			case "movies":
				$nounCaption = "Put the heels of your hands together, left hand pointing forward, right hand pointing up (fingers open). Move your right hand back and forth twice.";
				break;
			case "food":
				$nounCaption = "Close fingers and thumb, and touch your lips twice.";
				break;
			case "drink":
				$nounCaption = "As if you're drinking from a cup.";
				break;
		}
		return $nounCaption;
	}



	

    if (array_key_exists('myname', $_POST)) {

		$desc = 'Type in your name and Arthur will show you how to sign it!';
		$keywords = 'sign language, deaf, ASL, name';

        $myName = preg_replace("/[^a-z]/", '', strtolower($_POST['myname']));

        if ($myName == '') {
            header('HTTP/1.1 302 Moved Temporarily');
            header('Location: ' . "https://pbskids.org/arthur/print/signdesign/name.html");
            exit();
        }

        $letterArr = str_split($myName);
        $letterHtml = "";

        for ($i = 0, $o = count($letterArr); $i < $o; $i++) $letterHtml = $letterHtml . buildLetter($letterArr[$i]);


        $finalContent = ("<div id=\"signTmplContent\">
        <p>Your sentence in English is:</p>
        <p class=\"signHeader\">My Name is $myName. What's your name?</p>
        <p>In sign, your sentence is:</p>
        ".buildInstruction('my', 'Bring your open hand to your chest.')
         .buildInstruction('name', 'Tap two fingers from one hand twice on two fingers from the other hand.')

        . "<div id=\"signSpelled\">$letterHtml</div>"
         .buildInstruction('what', 'Palms up, move hands slightly toward and away from each other twice.')
         .buildInstruction('your', 'Stretch your palm out to the person you\'re talking to.')
         .buildInstruction('name', 'Tap two fingers from one hand twice on two fingers from the other hand.')."
        <img src=\"../../i/print/copyright.gif\" alt=\"\" class=\"copyright\" width=\"530\" height=\"35\" border=\"0\">
    </div>");





    } else if (array_key_exists('posneg', $_POST)) {

		$desc = "Choose a statement or a sentence that you would like to be able to sign to someone else.";
		$keywords = "sign language, deaf, ASL, statement";


		$self = explode(" ", $_POST['posneg']);
		$verb = $_POST['verb'];
		$noun = $_POST['noun'];


		$dont = "";
		$questionInstructs = "";
		$englishSentence = "";



		for ($i = 0, $o = count($self); $i < $o; $i++) {

			if ($self[$i] == 'I') {
				$questionInstructs .= buildInstruction('I', 'Point to yourself.');
				$englishSentence .= "I ";
			} elseif ($self[$i] == 'don\'t') {
				$dont = ' class="dont"';
				$questionInstructs .= buildInstruction('dont', 'Make a "thumbs up" sign, and flick thumb out from under your chin.');
				$englishSentence .= "don't ";
			}

		}


		//$verbCaption = "";
		//$nounCaption = "";
		$verbCaption = buildVerbCaption($verb);
		$nounCaption = buildNounCaption($noun);


		$questionInstructs .= buildInstruction($verb, $verbCaption);
		$questionInstructs .= buildInstruction($noun, $nounCaption);

		$englishSentence .= "$verb ";
		$englishSentence .= str_replace("+", " ", $noun).".";


		$finalContent = ("<div id=\"signTmplContent\">
		<p>Your sentence in English is:</p>
		<p class=\"signHeader\">$englishSentence</p>
		<p>In sign, your sentence is:</p>
		<div id=\"signStatementContent\"$dont>
			$questionInstructs
		</div>
		<img src=\"../../i/print/copyright.gif\" alt=\"\" class=\"copyright\" width=\"530\" height=\"35\" border=\"0\">
	</div>");







	} else {

		$desc = "Choose a question you would like to learn how to ask in sign language.";
		$keywords = "sign language, deaf, ASL, question";

		$noun = $_POST['noun'];
		$verb = $_POST['verb'];

		$englishSentence = "What ";
		$verbCaption = buildVerbCaption($verb);
		$nounCaption = buildNounCaption($noun);

		$englishSentence .= ($noun . " do you $verb?");

		$finalContent = ("<div id=\"signTmplContent\">
		<p>Your sentence in English is:</p>
		<p class=\"signHeader\">$englishSentence</p>
		<p>In sign, your sentence is:</p>
		<div id=\"signQuestionContent\">
			".buildInstruction('what', "Palms up, move hands slightly toward and away from each other twice.")
			 .buildInstruction($noun, $nounCaption)
			 .buildInstruction('you', 'Point at the person you are talking to.')
			 .buildInstruction($verb, $verbCaption)."
		</div>
		<p class=\"sign-msg\">A signing hint: when asking a question, have a questioning look on your face.</p>
		<img src=\"../../i/print/copyright.gif\" alt=\"\" class=\"copyright\" width=\"530\" height=\"35\" border=\"0\">
	</div>");

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
		'additionalTitle' => " . Print . Sign Design",
		'desc' => $desc,
		'keywds' => $keywords,
		'specialInclude' => '<link rel="stylesheet" type="text/css" href="/arthur/c/games.css" media="screen" />',
		'printableJs' => true,
		'selectedNav' => 'print',
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
				'selectedNav' => 'print'
			]
			);
		?>
<!-- end bbinclude -->
<div id="content" class="bg-9fc">
 <div class="ruler"></div>
 <div class="print-instr"><a href="index.html"><h4 id="signHeader">Sign Design</h4></a>
  <ul id="printSideNav">
   <li><a href="/arthur/print/signdesign/name.html" class="selected"><span>Practice Signing</span></a></li>
   <li><a href="/arthur/print/signdesign/finger-spelling.html"><span>Finger Spelling</span></a></li>
   <li><a href="/arthur/print/signdesign/more-info.html"><span>More Information</span></a></li>
  </ul>
 </div>
 <div id="printableArea">
 <div class="printable-content">					
						<div class="printable-nav">
							<div class="print-title-left"><h1>Practice Signing</h1></div>	
							<div class="print-btn-right"><span class="print-btn-one">Print This Page</span></div>
						</div>
						<?php echo($finalContent); ?>
						<div class="print-bg-top"></div>
						<div class="print-bg-btm"></div>
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
				<li><a href="https://sgptv.org/programs/program/arthur/">Program Sponsorship</a></li>
				<li><a href="/arthur/parentsteachers/site/song_credits.html">Song and Music Credits</a></li></ul>
				<img src="/arthur/i/footer/footer_rule.gif" alt="" class="footer_separator" width="3" height="174" border="">
				<p>All characters and underlying materials (including artwork) © Marc Brown.<br>
				"Arthur" and "D.W." and all of the ARTHUR characters are trademarks of Marc Brown.<br><a href="/arthur/parentsteachers/site/copyright.html">© 2015 WGBH</a></p>
				<img src="/arthur/i/footer/footer_rule.gif" alt="" class="footer_separator" width="3" height="174" border="">
			</div>
		</div>
<!-- end bbinclude -->
</div>

                    </body>
                    </html>