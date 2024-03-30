<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="https://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
<!-- #bbinclude "meta.pl" -->
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="description" content="CURIOUS GEORGE is an animated series based on the popular books by Margret and H.A. Rey and airs daily on PBS KIDS. Aimed at preschool viewers (ages three to five), the goal of the series is to inspire children to explore science, engineering, and math in the world around them. And what better guide is there for this kind of exploration than the world's most curious monkey?" />
	<meta name="keywords" content="Curious George, PBS KIDS, Kids tv programs, kids ages 3 to 5; kids ages three to five, science for kids, engineering for kids, kids games, kids activities, math for kids, Margret and H.A. Rey, kids development, preschool activities" />
	<meta http-equiv="imagetoolbar" content="no" />
<!-- end bbinclude -->

<!-- #bbinclude "title.incl" #section#="On the Job"-->
	<title>Curious George . On the Job | PBS KIDS</title>
<!-- end bbinclude -->

<!-- #bbinclude "css-js.pl" -->
	<script src="/curiousgeorge/js/rollover.js" type="text/javascript" language="Javascript1.1"></script>
	<script src="/curiousgeorge/js/core.js" type="text/javascript" language="Javascript1.1"></script>
	<script type="text/javascript" id="headband-overrides" _src="/curiousgeorge/games/on_the_job/headband/games-config.js"></script>
		
	
		

	<link rel="stylesheet" type="text/css" href="/curiousgeorge/css/main.css" media="screen" />
	<link rel="stylesheet" type="text/css" href="/curiousgeorge/css/print.css" media="print" />
	
	<style type="text/css">
	body #cgi-game{
	position: relative;
	top: -12px;
	}
	body #ftr-games{ 
	position: relative;
	top: 54px;
	}
	</style>
	
	
<!-- end bbinclude -->

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
<script type="text/javascript" src="https://www-tc.pbskids.org/includes/javascript/bridge.urls.js"></script>
<script type="text/javascript" src="https://www-tc.pbskids.org/includes/javascript/bridge.js"></script>
</head>
<body>
<script src="https://pbskids.org/pbs-kids-headband/js/headband.js" type="text/javascript" ></script>	
<!-- DO NOT PUT PBS Global Kids include on this page! -->

<!-- #bbinclude "nav_top.pl" -->
	<div id="nav">
		<div id="nav-container">
	<a href="https://pbskids.org/"><img src="/curiousgeorge/img/nav_logo_pbskids.gif" height="91" width="71" alt="PBS KIDS" id="logo-pbskids" /></a>
	<a href="/curiousgeorge/"><img src="/curiousgeorge/img/nav_logo_cg.gif" height="91" width="222" alt="Curious George" id="logo-cg" /></a>
	<a href="/curiousgeorge/games/"><img src="/curiousgeorge/img/nav_games_ovr.gif" height="91" width="114" alt="Games" id="games" /></a>
	<a href="/curiousgeorge/printables/"><img src="/curiousgeorge/img/nav_printables.gif" height="91" width="117" alt="Printables" id="printables" class="ovr" /></a>
	<a href="/curiousgeorge/video/"><img src="/curiousgeorge/img/nav_video.gif" height="91" width="117" alt="Video" id="video" class="ovr" /></a>
	<a href="/curiousgeorge/busyday/"><img src="/curiousgeorge/img/nav_busyday.gif" height="91" width="117" alt="Busy Day" id="busyday" class="ovr" /></a>
		</div>
	</div>
<!-- end bbinclude -->

<?php

	class QuizAnswers {
		
		public $correctAnswer;
		
		public function __construct($charName, $choiceSelected) {
			
			switch($charName) {
				case "astronaut":
				$this->correctAnswer = $choiceSelected === 'rocket';
				break;
				case "baker":
				$this->correctAnswer = $choiceSelected === 'cake';
				break;
				case "beekeeper":
				$this->correctAnswer = $choiceSelected === 'bee';
				break;
				case "chef":
				$this->correctAnswer = $choiceSelected === 'pizza';
				break;
				case "conductor":
				$this->correctAnswer = $choiceSelected === 'train';
				break;
				case "cop1":
				$this->correctAnswer = $choiceSelected === 'copcar';
				break;
				case "cop2":
				$this->correctAnswer = $choiceSelected === 'whistle';
				break;
				case "cop3":
				$this->correctAnswer = $choiceSelected === 'motorcycle';
				break;
				case "diver":
				$this->correctAnswer = $choiceSelected === 'mask';
				break;
				case "doctor":
				$this->correctAnswer = $choiceSelected === 'scope';
				break;
				case "doorman":
				$this->correctAnswer = $choiceSelected === 'dollar';
				break;
				case "fireman":
				$this->correctAnswer = $choiceSelected === 'firetruck';
				break;
				case "fisherman":
				$this->correctAnswer = $choiceSelected === 'fish';
				break;
				case "george":
				$this->correctAnswer = $choiceSelected === 'crutches';
				break;
				case "mailperson":
				$this->correctAnswer = $choiceSelected === 'mail';
				break;
				case "myh":
				$this->correctAnswer = $choiceSelected === 'hat';
				break;
				case "painter":
				$this->correctAnswer = $choiceSelected === 'brush';
				break;
				case "photographer":
				$this->correctAnswer = $choiceSelected === 'photo';
				break;
				case "pilot":
				$this->correctAnswer = $choiceSelected === 'plane';
				break;
				case "scientist":
				$this->correctAnswer = $choiceSelected === 'spacestation';
				break;
				case "skier":
				$this->correctAnswer = $choiceSelected === 'skipoles';
				break;
				case "spaceman":
				$this->correctAnswer = $choiceSelected === 'rocket';
				break;
				case "strongman":
				$this->correctAnswer = $choiceSelected === 'weight';
				break;
				case "ups":
				$this->correctAnswer = $choiceSelected === 'box';
				break;
				case "worker":
				$this->correctAnswer = $choiceSelected === 'hammer';
				break;
				case "worker2":
				$this->correctAnswer = $choiceSelected === 'shovel';
				break;
				case "worker3":
				$this->correctAnswer = $choiceSelected === 'toolbox';
				break;
			}
			
		}
		
		
	}
	
	
	
	
	
	
	
	
	
	
	//here we go again
	class CharData {
		
		public $character;
		public $choice1;
		public $choice2;
		public $choice3;
		public $characterAlt = '';
		
		public function __construct($num) {
			
			switch($num) {
				case 0:
				$this->character = "astronaut";
				$this->choice1 = 'brush';
				$this->choice2 = 'rocket';
				$this->choice3 = 'weight';
				break;
				case 1:
				$this->character = "baker";
				$this->choice1 = 'ball';
				$this->choice2 = 'cake';
				$this->choice3 = 'copcar';
				break;
				case 2:
				$this->character = "beekeeper";
				$this->choice1 = 'bee';
				$this->choice2 = 'peanuts';
				$this->choice3 = 'rocket';
				break;
				case 3:
				$this->character = "chef";
				$this->choice1 = 'mail';
				$this->choice2 = 'pizza';
				$this->choice3 = 'train';
				break;
				case 4:
				$this->character = 'conductor';
				$this->choice1 = 'fish';
				$this->choice2 = 'scope';
				$this->choice3 = 'train';
				break;
				case 5:
				$this->character = 'cop1';
				$this->characterAlt = 'Police officer';
				$this->choice1 = 'brush';
				$this->choice2 = 'copcar';
				$this->choice3 = 'mask';
				break;
				case 6:
				$this->character = 'cop2';
				$this->characterAlt = 'Police officer';
				$this->choice1 = 'box';
				$this->choice2 = 'skipoles';
				$this->choice3 = 'whistle';
				break;
				case 7:
				$this->character = 'cop3';
				$this->characterAlt = 'Police officer';
				$this->choice1 = 'fish';
				$this->choice2 = 'motorcycle';
				$this->choice3 = 'peanuts';
				break;
				case 8:
				$this->character = 'diver';
				$this->choice1 = 'bee';
				$this->choice2 = 'mask';
				$this->choice3 = 'shovel';
				$this->characterAlt = 'Bill';
				break;
				case 9:
				$this->character = 'doctor';
				$this->choice1 = 'hammer';
				$this->choice2 = 'mask';
				$this->choice3 = 'scope';
				break;
				case 10:
				$this->character = 'doorman';
				$this->choice1 = 'bee';
				$this->choice2 = 'copcar';
				$this->choice3 = 'dollar';
				break;
				case 11:
				$this->character = 'fireman';
				$this->choice1 = 'copcar';
				$this->choice2 = 'firetruck';
				$this->choice3 = 'truck';
				break;
				case 12:
				$this->character = 'fisherman';
				$this->choice1 = 'copcar';
				$this->choice2 = 'fish';
				$this->choice3 = 'pizza';
				break;
				case 13:
				$this->character = 'george';
				$this->choice1 = 'crutches';
				$this->choice2 = 'dollar';
				$this->choice3 = 'hat';
				break;
				case 14:
				$this->character = 'mailperson';
				$this->characterAlt = 'Mailman';
				$this->choice1 = 'hammer';
				$this->choice2 = 'mail';
				$this->choice3 = 'plane';
				break;
				case 15:
				$this->character = 'myh';
				$this->characterAlt = 'The man in the yellow hat';
				$this->choice1 = 'beehat';
				$this->choice2 = 'hat';
				$this->choice3 = 'piratehat';
				break;
				case 16:
				$this->character = 'painter';
				$this->choice1 = 'brush';
				$this->choice2 = 'fish';
				$this->choice3 = 'pizza';
				break;
				case 17:
				$this->character = 'photographer';
				$this->choice1 = 'box';
				$this->choice2 = 'photo';
				$this->choice3 = 'train';
				break;
				case 18:
				$this->character = 'pilot';
				$this->choice1 = 'mask';
				$this->choice2 = 'plane';
				$this->choice3 = 'skipoles';
				break;
				case 19:
				$this->character = 'scientist';
				$this->choice1 = 'hammer';
				$this->choice2 = 'mask';
				$this->choice3 = 'spacestation';
				break;
				case 20:
				$this->character = 'skier';
				$this->choice1 = 'crutches';
				$this->choice2 = 'shovel';
				$this->choice3 = 'skipoles';
				break;
				case 21:
				$this->character = 'spaceman';
				$this->choice1 = 'brush';
				$this->choice2 = 'rocket';
				$this->choice3 = 'weight';
				break;
				case 22:
				$this->character = 'strongman';
				$this->characterAlt = 'Athlete';
				$this->choice1 = 'bear';
				$this->choice2 = 'firetruck';
				$this->choice3 = 'weight';
				break;
				case 23:
				$this->character = 'ups';
				$this->characterAlt = 'UPS worker';
				$this->choice1 = 'ball';
				$this->choice2 = 'box';
				$this->choice3 = 'peanuts';
				break;
				case 24:
				$this->character = 'worker';
				$this->characterAlt = 'Construction worker';
				$this->choice1 = 'cake';
				$this->choice2 = 'hammer';
				$this->choice3 = 'rocket';
				break;
				case 25:
				$this->character = 'worker2';
				$this->characterAlt = 'Construction worker';
				$this->choice1 = 'fish';
				$this->choice2 = 'shovel';
				$this->choice3 = 'skipoles';
				break;
				case 26:
				$this->character = 'worker3';
				$this->characterAlt = 'Construction worker';
				$this->choice1 = 'bear';
				$this->choice2 = 'scope';
				$this->choice3 = 'toolbox';
				break;
			}
			
			
		}
		
		
	}
	
	
	
	
	
	function buildQuestion($number) {
		
		$questionData = new CharData($number);
		$character = $questionData->character;
		$choice1 = $questionData->choice1;
		$choice2 = $questionData->choice2;
		$choice3 = $questionData->choice3;
		$characterAlt = $questionData->characterAlt ? $questionData->characterAlt : ucfirst($character);
		
		return "<table border='0' width='663' cellspacing='0' cellpadding='0' id='cgi-game'>
<tr>
	<td rowspan='3'><img src='/curiousgeorge/games/on_the_job/img/left.gif' alt='' width='58' height='348' /></td>
	<td><img src='/curiousgeorge/games/on_the_job/img/top.gif' alt='' width='547' height='13' /></td>
	<td rowspan='3'><img src='/curiousgeorge/games/on_the_job/img/right.gif' alt='' width='58' height='348' /></td>
</tr><tr>
	<td bgcolor='#ffffff'><form action='/cgi-registry/curiousgeorge/on_the_job.php' method='post'>
		<div style='float:left;'><img src='/curiousgeorge/games/on_the_job/img/chars/$character.gif' width='359' height='321' alt='$characterAlt' title='$characterAlt'></div>
		<div style='float:right;'>
		<input type='image' src='/curiousgeorge/games/on_the_job/img/tools/$choice1.gif' width='188' height='107' border='0' alt='$choice1' title='' name='$choice1' value='$choice1' class='ovr' />
		<input type='image' src='/curiousgeorge/games/on_the_job/img/tools/$choice2.gif' width='188' height='107' border='0' alt='$choice2' title='' name='$choice2' value='$choice2' class='ovr' />
		<input type='image' src='/curiousgeorge/games/on_the_job/img/tools/$choice3.gif' width='188' height='107' border='0' alt='$choice3' title='' name='$choice3' value='$choice3' class='ovr' />
		</div>
		<input type='hidden' name='character' value='$character' />
		<input type='hidden' name='action' value='get_answer' />
		<input type='hidden' name='charId' value='$number' />
		<!--<input type='hidden' name='correct' value='' />-->
	</form></td>
</tr><tr>
	<td><img src='/curiousgeorge/games/on_the_job/img/bottom.gif' alt='' width='547' height='14' /></td>
</tr><tr>
	<td colspan='3' style='padding-left:116px;'><img src='/curiousgeorge/games/img/nt_on_the_job.gif' alt='On The Job' title='' width='438' height='51' /></td>
</tr>
</table>";

	}
	
	
	
	
	function buildAnswer($char, $choice) {
		
		$choice = str_replace("_x","",$choice);
		$answerData = new QuizAnswers($char, $choice);
		$choiceCorrect = $answerData->correctAnswer;
		$choiceOutcomeFilename = "$char-$choice";
		$number = $_POST['charId'];
		
		if ($choiceCorrect === true) {
			
			return "<table id='cgi-game' width='663' cellspacing='0' cellpadding='0' border='0'>
<tbody><tr>
	<td rowspan='3'><img src='https://pbskids.org/curiousgeorge/games/on_the_job/img/left.gif' alt='' width='58' height='348'></td>
	<td><img src='https://pbskids.org/curiousgeorge/games/on_the_job/img/top.gif' alt='' width='547' height='13'></td>
	<td rowspan='3'><img src='https://pbskids.org/curiousgeorge/games/on_the_job/img/right.gif' alt='' width='58' height='348'></td>
</tr><tr>
	<td bgcolor='#ffffff'><form action='https://pbskids.org/cgi-registry/curiousgeorge/on_the_job.php' method='post'>
		<div style='float:left;'><img src='https://pbskids.org/curiousgeorge/games/on_the_job/img/chars/$choiceOutcomeFilename.gif' title='' width='359' height='321'></div>
		<div style='float:right;'>
<img src='https://pbskids.org/curiousgeorge/games/on_the_job/img/yescorrect.gif' style='padding-top: 37px;' width='188' height='129'><input type='image' src='https://pbskids.org/curiousgeorge/games/on_the_job/img/more.gif' hsrc='https://pbskids.org/curiousgeorge/games/on_the_job/img/more_ovr.gif' alt='More' title='More' name='choice' value='$choice' class='ovr' style='padding-top: 17px;' width='183' height='103' border='0'>

		<!--<img src='https://pbskids.org/curiousgeorge/games/on_the_job/img/tryagain.gif' style='padding-top: 17px;' width='182' height='60'>-->
		
		
		</div>
		<input type='hidden' name='action' value='get_question'>
	</form></td>
</tr><tr>
	<td><img src='https://pbskids.org/curiousgeorge/games/on_the_job/img/bottom.gif' alt='' width='547' height='14'></td>
</tr><tr>
	<td colspan='3' style='padding-left:116px;'><img src='https://pbskids.org/curiousgeorge/games/img/nt_on_the_job.gif' alt='On The Job' title='' width='438' height='51'></td>
</tr>
</tbody></table>";
			
		} else {
			
			return "<table id='cgi-game' width='663' cellspacing='0' cellpadding='0' border='0'>
<tbody><tr>
	<td rowspan='3'><img src='https://pbskids.org/curiousgeorge/games/on_the_job/img/left.gif' alt='' width='58' height='348'></td>
	<td><img src='https://pbskids.org/curiousgeorge/games/on_the_job/img/top.gif' alt='' width='547' height='13'></td>
	<td rowspan='3'><img src='https://pbskids.org/curiousgeorge/games/on_the_job/img/right.gif' alt='' width='58' height='348'></td>
</tr><tr>
	<td bgcolor='#ffffff'><form action='https://pbskids.org/cgi-registry/curiousgeorge/on_the_job.php' method='post'>
		<div style='float:left;'><img src='https://pbskids.org/curiousgeorge/games/on_the_job/img/chars/$choiceOutcomeFilename.gif' title='' width='359' height='321'></div>
		<div style='float:right;'>
<img src='https://pbskids.org/curiousgeorge/games/on_the_job/img/uhoh.gif' style='padding-top: 37px;' width='188' height='129'><input type='image' src='https://pbskids.org/curiousgeorge/games/on_the_job/img/tryagain.gif' hsrc='https://pbskids.org/curiousgeorge/games/on_the_job/img/tryagain_ovr.gif' alt='Try again' title='Try again' name='choice' value='$choice' class='ovr' style='padding-top: 17px;' width='182' height='60' border='0'>

		<!--<img src='https://pbskids.org/curiousgeorge/games/on_the_job/img/tryagain.gif' style='padding-top: 17px;' width='182' height='60'>-->
		
		
		</div>
		<input type='hidden' name='char' value='$char'>
		<input type='hidden' name='action' value='try_again_loser'>
		<input type='hidden' name='charId', value='$number'>
	</form></td>
</tr><tr>
	<td><img src='https://pbskids.org/curiousgeorge/games/on_the_job/img/bottom.gif' alt='' width='547' height='14'></td>
</tr><tr>
	<td colspan='3' style='padding-left:116px;'><img src='https://pbskids.org/curiousgeorge/games/img/nt_on_the_job.gif' alt='On The Job' title='' width='438' height='51'></td>
</tr>
</tbody></table>";

		}
		
		
	}
	
	
	
	
	?>

<?php
	
	$reqMethod = $_SERVER['REQUEST_METHOD'];
	
	if ($reqMethod === 'GET') {
		echo(buildQuestion(rand(0,26)));
	} else {
		
		switch($_POST['action']) {
			case "get_answer":
				echo(buildAnswer($_POST['character'], array_key_first($_POST)));
				break;
			case "try_again_loser":
				echo(buildQuestion($_POST['charId']));
				break;
			default:
				echo(buildQuestion(rand(0,26)));
				break;
		}
		
		
	}
	?>

<div id="ftr-games">
	<div id="ftr_play"><!--[if lt IE 7]><style>#ftr_play{margin-top:0;}</style><![endif]--><p>Part of:<br /><a href="https://www.pbskidsplay.org/playnow/?CPLAYSM&btn=1"><img width="146" height="49" border="0" alt="Part of PBS KIDS Play" src="/curiousgeorge/games/img/pbs-play-gm.gif" /></a></p></div>
<!-- #bbinclude "ftr_txt.pl" -->
	<a href="/curiousgeorge/">Home</a> | 
	<a href="/curiousgeorge/games/">Games</a> | 
	<a href="/curiousgeorge/printables/">Printables</a> | 
	<a href="/curiousgeorge/video/">Video Clips</a> | 
	<a href="/curiousgeorge/busyday/">Busy Day</a> | 
	<a href="https://www.pbs.org/parents/curiousgeorge/">Parents</a> | 
	<a href="https://www.pbs.org/teachers/curiousgeorge/">Teachers</a> | 
	<a href="/curiousgeorge/tv_schedule/">TV Schedule</a><br />
	<a href="https://www.pbs.org/parents/curiousgeorge/site/terms_of_use.html">&reg; &amp; &copy; 2015 Universal Studios and/or HMH. ALL RIGHTS RESERVED.</a> | 
	<a href="/privacy/">PBS KIDS Privacy Policy</a>
<!-- end bbinclude -->
	<br style="clear:both;" />
</div>

<div id="print-lgl">FOR PROMOTIONAL PURPOSES ONLY</div>

</body>
</html>
