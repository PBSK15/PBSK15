<?php
	
	class prunellaPredictions {
		
		public $prediction;
		public $imageFile;
		
		public function __construct($num) {
			
			switch($num) {
				case 0:
				$this->prediction = "Today Pal will let Arthur know what he really thinks of that slop Arthur feeds him.";
				$this->imageFile = "predict_arthur_01.gif";
				break;
				case 1:
				$this->prediction = "Arthur should bring a jacket to wear around his waist today. (He's going to rip his pants.)";
				$this->imageFile = "predict_arthur_02.gif";
				break;
				case 2:
				$this->prediction = "Arthur will practice his scales until his fingers are weak.";
				$this->imageFile = "predict_arthur_03.gif";
				break;
				case 3:
				$this->prediction = "Arthur will star in his own show on PBS.";
				$this->imageFile = "predict_arthur_04.gif";
				break;
				case 4:
				$this->prediction = "Arthur should beware of grandmothers who are really good at marbles.";
				$this->imageFile = "predict_arthur_05.gif";
				break;
				case 5:
				$this->prediction = "Arthur's dad will make something icky for dinner tonight.  (Be nice, Arthur.)";
				$this->imageFile = "predict_arthur_06.gif";
				break;
				case 6:
				$this->prediction = "If Arthur skips practicing, his piano teacher will fire him.";
				$this->imageFile = "predict_arthur_07.gif";
				break;
				case 7:
				$this->prediction = "When playing with his yo-yo today, Binky will finally Walk the Dog.";
				$this->imageFile = "predict_binky_01.gif";
				break;
				case 8:
				$this->prediction = "Binky should beware of an angry rabbit who wants his King Tut joke back.";
				$this->imageFile = "predict_binky_02.gif";
				break;
				case 9:
				$this->prediction = "Binky will play the part of a very sturdy wall in the next school play.";
				$this->imageFile = "predict_binky_03.gif";
				break;
				case 10:
				$this->prediction = "Binky will become the best poet in Elwood City.";
				$this->imageFile = "predict_binky_04.gif";
				break;
				case 11:
				$this->prediction = "Binky will have trouble finding a word that rhymes with \"Arthur.\"";
				$this->imageFile = "predict_binky_05.gif";
				break;
				case 12:
				$this->prediction = "The Brain will answer a question incorrectly today.  (Brace yourself, The Brain.)";
				$this->imageFile = "predict_brain_01.gif";
				break;
				case 13:
				$this->prediction = "I see a new bow tie in The Brain's future.";
				$this->imageFile = "predict_brain_02.gif";
				break;
				case 14:
				$this->prediction = "The Brain's mom will name an ice cream after him: The Brainforest Crunch.";
				$this->imageFile = "predict_brain_03.gif";
				break;
				case 15:
				$this->prediction = "If The Brain connects the green and red wires, his mechanical cat will moo instead of meow.";
				$this->imageFile = "predict_brain_04.gif";
				break;
				case 16:
				$this->prediction = "The Brain will probably read Henry Skreever and the Cabbage of Mayhem in one day.";
				$this->imageFile = "predict_brain_05.gif";
				break;
				case 17:
				$this->prediction = "It won't be long before Buster's next snack.";
				$this->imageFile = "predict_buster_01.gif";
				break;
				case 18:
				$this->prediction = "Someone will pay Buster 73 cents and a sticker to write a joke.";
				$this->imageFile = "predict_buster_02.gif";
				break;
				case 19:
				$this->prediction = "Buster will make a very smart trade at lunch today: tuna fish for cherry cobbler.";
				$this->imageFile = "predict_buster_03.gif";
				break;
				case 20:
				$this->prediction = "Buster should buckle down and write that report now, or he'll regret it!";
				$this->imageFile = "predict_buster_04.gif";
				break;
				case 21:
				$this->prediction = "Buster's future is filled with bad jokes.";
				$this->imageFile = "predict_buster_05.gif";
				break;
				case 22:
				$this->prediction = "Buster will eat more ice cream than anyone else.";
				$this->imageFile = "predict_buster_06.gif";
				break;
				case 23:
				$this->prediction = "With hard work and a few mysteries, Buster could open his own detective agency.";
				$this->imageFile = "predict_buster_07.gif";
				break;
				case 24:
				$this->prediction = "When in doubt, Buster should always consult his inner alien.";
				$this->imageFile = "predict_buster_08.gif";
				break;
				case 25:
				$this->prediction = "Mr. Read will get a great deal on a garlic press today.";
				$this->imageFile = "predict_dad_01.gif";
				break;
				case 26:
				$this->prediction = "Mr. Read should remember that the brownies are not done until the toothpick comes out clean.";
				$this->imageFile = "predict_dad_03.gif";
				break;
				case 27:
				$this->prediction = "Mr. Read will forget where he put his brown shoes.  (They're under the bed.)";
				$this->imageFile = "predict_dad_04.gif";
				break;
				case 28:
				$this->prediction = "Mr. Read will try to mold chopped liver into a muscle man lifting barbells.";
				$this->imageFile = "predict_dad_05.gif";
				break;
				case 29:
				$this->prediction = "D.W. will be chased around the playground three times today by the initials T.T.";
				$this->imageFile = "predict_dw_01.gif";
				break;
				case 30:
				$this->prediction = "D.W. might lose at Confuse the Goose today.";
				$this->imageFile = "predict_dw_02.gif";
				break;
				case 31:
				$this->prediction = "D.W. will be loud today.  But not louder than the Tibbles.";
				$this->imageFile = "predict_dw_03.gif";
				break;
				case 32:
				$this->prediction = "D.W. will sing the Crazy Bus song 30 times in a row, just to annoy Arthur.";
				$this->imageFile = "predict_dw_04.gif";
				break;
				case 33:
				$this->prediction = "Disaster awaits D.W. if she touches Arthur's model airplane.";
				$this->imageFile = "predict_dw_05.gif";
				break;
				case 34:
				$this->prediction = "If D.W. is good, she may get a normal cake for her birthday this year.";
				$this->imageFile = "predict_dw_06.gif";
				break;
				case 35:
				$this->prediction = "D.W.'s piece of cake will be a little bigger than Arthur's.";
				$this->imageFile = "predict_dw_07.gif";
				break;
				case 36:
				$this->prediction = "A raise in allowance could be in D.W.'s future.";
				$this->imageFile = "predict_dw_08.gif";
				break;
				case 37:
				$this->prediction = "Arthur is about to tell D.W. that it's his turn to use the computer.";
				$this->imageFile = "predict_dw_10.gif";
				break;
				case 38:
				$this->prediction = "Francine should never play drums and sing at the same time.";
				$this->imageFile = "predict_fran_01.gif";
				break;
				case 39:
				$this->prediction = "Catherine will try to put a dress on Francine's cat today.  (Get home quick, Francine!)";
				$this->imageFile = "predict_fran_03.gif";
				break;
				case 40:
				$this->prediction = "Francine will learn the hard way how to be a good sport.";
				$this->imageFile = "predict_fran_05.gif";
				break;
				case 41:
				$this->prediction = "Francine will find that figure skating is harder than it looks.";
				$this->imageFile = "predict_fran_06.gif";
				break;
				case 42:
				$this->prediction = "Francine will score a goal in her next soccer game.";
				$this->imageFile = "predict_fran_07.gif";
				break;
				case 43:
				$this->prediction = "Kate will get sand in her bathing suit today.";
				$this->imageFile = "predict_kate_01.gif";
				break;
				case 44:
				$this->prediction = "D.W. will hug Kate too tightly.  Then Kate will cry, and D.W. will blame Arthur.";
				$this->imageFile = "predict_kate_02.gif";
				break;
				case 45:
				$this->prediction = "Those feetsy pajamas are really going to get on Kate's nerves today.";
				$this->imageFile = "predict_kate_03.gif";
				break;
				case 46:
				$this->prediction = "Oatmeal lies in Kate's future.";
				$this->imageFile = "predict_kate_04.gif";
				break;
				case 47:
				$this->prediction = "Kate will not find the secret exit out of the playpen.";
				$this->imageFile = "predict_kate_05.gif";
				break;
				case 48:
				$this->prediction = "I see a diaper change for Kate in the very near future.";
				$this->imageFile = "predict_kate_06.gif";
				break;
				case 49:
				$this->prediction = "Muffy's flashpants are giving everyone a headache.";
				$this->imageFile = "predict_muffy_01.gif";
				break;
				case 50:
				$this->prediction = "Muffy's dad may refuse to give her what she wants today.";
				$this->imageFile = "predict_muffy_02.gif";
				break;
				case 51:
				$this->prediction = "Muffy's chauffeur will call in sick.  She'll have to walk to school.";
				$this->imageFile = "predict_muffy_03.gif";
				break;
				case 52:
				$this->prediction = "When she's not looking, Buster will finish Muffy's sundae.";
				$this->imageFile = "predict_muffy_04.gif";
				break;
				case 53:
				$this->prediction = "Mr. Crosswire's pet name for Muffy will become public.";
				$this->imageFile = "predict_muffy_05.gif";
				break;
				case 54:
				$this->prediction = "The baby is about to eat. Pal should get in position under the highchair.";
				$this->imageFile = "predict_pal_01.gif";
				break;
				case 55:
				$this->prediction = "Dogs may one day be able to run for president.";
				$this->imageFile = "predict_pal_02.gif";
				break;
				case 56:
				$this->prediction = "Francine's cat Nemo is looking for a good game of Chase Pal.";
				$this->imageFile = "predict_pal_03.gif";
				break;
				case 57:
				$this->prediction = "The joy of bacon awaits Pal.";
				$this->imageFile = "predict_pal_04.gif";
				break;
				case 58:
				$this->prediction = "Pal should remember that tuna-roni comes to those who wait.";
				$this->imageFile = "predict_pal_05.gif";
				break;
				case 59:
				$this->prediction = "I see a nap in Pal's very near future.  ";
				$this->imageFile = "predict_pal_06.gif";
				break;
				case 60:
				$this->prediction = "Arthur doesn't need that shoe.  Pal should feel free to bury it.";
				$this->imageFile = "predict_pal_07.gif";
				break;
				case 61:
				$this->prediction = "Bath alert! Bath alert!  Pal should hide under the coffee table!";
				$this->imageFile = "predict_pal_08.gif";
				break;
				case 62:
				$this->prediction = "I see a large piece of chocolate cake with Mr. Ratburn's name on it.";
				$this->imageFile = "predict_ratburn_01.gif";
				break;
				case 63:
				$this->prediction = "In class today, someone will ask Mr. Ratburn a question that he won't be able to answer.";
				$this->imageFile = "predict_ratburn_02.gif";
				break;
				case 64:
				$this->prediction = "In a strange turn of events, Mr. Ratburn's students will give HIM a test today.";
				$this->imageFile = "predict_ratburn_03.gif";
				break;
				case 65:
				$this->prediction = "Mr. Ratburn's future is filled with puppet shows.";
				$this->imageFile = "predict_ratburn_04.gif";
				break;
				case 66:
				$this->prediction = "The Tibbles will be loud today. Very, very loud.";
				$this->imageFile = "predict_tibbles_01.gif";
				break;
				case 67:
				$this->prediction = "The Tibbles should remember that coloring outside the lines is not a crime.";
				$this->imageFile = "predict_tibbles_02.gif";
				break;
				case 68:
				$this->prediction = "It looks like the Tibbles may never save up enough allowance to buy their own space shuttle.";
				$this->imageFile = "predict_tibbles_03.gif";
				break;
				case 69:
				$this->prediction = "A Tibble Tip: The best way to get rid of a babysitter is to scream for no reason. ";
				$this->imageFile = "predict_tibbles_04.gif";
				break;
				case 70:
				$this->prediction = "If the Tibbles play Airplane in the house, they're going to break something.";
				$this->imageFile = "predict_tibbles_05.gif";
				break;
			}
			
		}
		
		
	}
	?>
	
	
	
	<?php
	
		$predictionNum = rand(0,70);
		$predictionData = new prunellaPredictions($predictionNum);
		
		$imageFileName = $predictionData->imageFile;
		$prunellaPrediction = $predictionData->prediction;
		
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
		'additionalTitle' => " . Games . Ask Prunella",
		'desc' => 'Francine displays four words. Pick the one that doesnt belong with the others. Get a hint if needed!',
		'keywds' => 'matching, belong, words, read, critical thinking',
		'specialInclude' => '<link rel="stylesheet" type="text/css" href="/arthur/c/games.css" media="screen" />',
		'selectedNav' => 'games',
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

		<div id="content" class="bg-ccf">
<div class="ruler"></div>
			<div id="mainFeature" class="fo_header">
				<table id="tableAK">
					<tr><td colspan="3"><img src="/arthur/i/games/askprunella/prunella_top.gif" width="622" height="15" border="0" alt="" /></td></tr>
					<tr><td colspan="3"><img src="/arthur/i/games/askprunella/prunella_title.gif" width="387" height="152" border="0" alt="" class="float-left"/><img src="/arthur/i/games/askprunella/prunella_tophead.gif" width="251" height="152"  border="0" alt=""/></td></tr>
					<tr><td><img src="/arthur/i/games/askprunella/prunella_leftcurtain.gif" width="151" height="340" border="0" alt="" /></td>
					<td>
					<table>
						<tr><td colspan="3"><img src="/arthur/i/games/askprunella/prunella_twinkle_top.gif" width="305" height="68" border="0" alt="" /></td></tr>
						<tr><td><img src="/arthur/i/games/askprunella/prunella_twinkle_left.gif" width="44" height="157" border="0" alt="" /></td>
						<td><form action="/cgi-registry/arthur/askprunella.php" method="post" id="predict_form">
							<input type="image" src="/arthur/i/games/askprunella/<?php echo($imageFileName)?>" name="next" width="217" height="157" hspace="0" vspace="0" border="0" align="left" alt="<?php echo($prunellaPrediction)?>" name="first">
							<input type="hidden" name="done" value="9">
							<input type="hidden" name="featurepath" value="/arthur/games/askprunella/">
							<input type="hidden" name="fortunecount" value="71">
						</form></td>
						<td><img src="/arthur/i/games/askprunella/prunella_twinkle_right.gif" width="44" height="157" border="0" alt="" /></td></tr>
						<tr><td colspan="3"><img src="/arthur/i/games/askprunella/prunella_crystallbottom.gif" width="305" height="115" align="left" alt="" /></td></tr>
					</table>
					</td>
					<td><img src="/arthur/i/games/askprunella/prunella_rightcurtain.gif" width="182" height="340"border="0" alt=""></td></tr>
				</table>
			</div>
			<div id="relatedContent">
				<ul>
				<li><a href="/arthur/friends/prunella/index.html" id="rcPrunella">Prunella</a></li>
				<li><a href="/arthur/games/askbrain/index.html" id="rcAskBrain">Ask The Brain</a></li>
				<li><a href="/arthur/print/grooveit/index.html" id="rcGrooveIt">Groove It!</a></li>
				</ul>
			</div>
		</div>
<div id="footer">
			<div class="ruler"></div>
			<div id="footerContainer">
				<ul id="footerMainNav"><li><a href="/arthur/index.html">Home</a></li>
				<li><a href="/arthur/games/index.html">Games</a></li>
				<li><a href="/arthur/friends/index.html">Friends</a></li>
				<li><a href="/arthur/video/index.html">Video</a></li>
				<li><a href="/arthur/print/index.html">Print</a></li>
				<li><a href="/arthur/health/index.html">Health</a></li></ul>
				
				<ul id="footerSubNav"><li><a href="/arthur/parentsteachers/index.html">Parents & Teachers</a></li>
				<li><a href="https://pbskids.org/tvschedules/localizer.html?dest=/cgi-registry/arthur/askprunella.pl&nola=ARUR">TV Times</a></li>
				<li><a href="/arthur/find/index.html">Find</a></li>
				<li><a href="/buster/index.html">Postcards From Buster</a></li>
				<li><a href="https://sgptv.org/programs/PBS-KIDS-arthur/">Program Sponsorship</a></li>
				<li><a href="https://pbskids.org/privacy/">PBS KIDS Privacy Policy</a></li></ul>

				<p class="footer-copyright wide">
					All characters and underlying materials (including artwork) &copy; Marc Brown. "Arthur" and "D.W." and all of the ARTHUR characters are trademarks of Marc Brown.<br />

					<a href="/arthur/parentsteachers/site/copyright.html">&copy; 2015 WGBH Educational Foundation.</a></p>
				
				<p  class="footer-copyright"></p>
			</div>
		</div>
</div>
</body>
</html>