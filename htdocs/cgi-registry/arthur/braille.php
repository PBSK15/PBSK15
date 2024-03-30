<?php



    function buildBraille($top, $middle, $bottom, $label) {
        $top = $top ? '' : 'un';
        $middle = $middle ? '' : 'un';
        $bottom = $bottom ? '' : 'un';

        return ("<td>
        <img src=\"/arthur/i/print/braille/" . $top . "filled_dot.gif\" alt=\"$label\" title=\"$label\">
        <br>
        <img src=\"/arthur/i/print/braille/" . $middle . "filled_dot.gif\" alt=\"$label\" title=\"$label\">
        <br>
        <img src=\"/arthur/i/print/braille/" . $bottom . "filled_dot.gif\" alt=\"$label\" title=\"$label\">
        <br>
      </td>");
    }
    

    function combineBraille($arr) {
      global $filler;
      return join($filler,$arr);
    }
    
    

    function smartQuotes($input) {
        return preg_replace('/"([^"]*)"/', '^$1*', $input);
    }
    
    define('MAX_CHARS', 13);






    $filler = '<td><img src="/arthur/i/1px.gif" alt="" width="16" height="16"><br></td>';
    $poundSign = buildBraille(false,false,true,'#').buildBraille(true,true,true,'#');



    $brailleDictionaryStandard = [
      'a' => buildBraille(true, false, false,'a').buildBraille(false,false,false,'a'),
      'b' => buildBraille(true, true, false,'b').buildBraille(false,false,false,'b'),
      'c' => buildBraille(true,false,false,'c').buildBraille(true,false,false,'c'),
      'd' => buildBraille(true,false,false,'d').buildBraille(true,true,false,'d'),
      'e' => buildBraille(true,false,false,'e').buildBraille(false,true,false,'e'),
      'f' => buildBraille(true,true,false,'f').buildBraille(true,false,false,'f'),
      'g' => buildBraille(true,true,false,'g').buildBraille(true,true,false,'g'),
      'h' => buildBraille(true,true,false,'h').buildBraille(false,true,false,'h'),
      'i' => buildBraille(false,true,false,'i').buildBraille(true,false,false,'i'),
      'j' => buildBraille(false,true,false,'j').buildBraille(true,true,false,'j'),
      'k' => buildBraille(true,false,true,'k').buildBraille(false,false,false,'k'),
      'l' => buildBraille(true,true,true,'l').buildBraille(false,false,false,'l'),
      'm' => buildBraille(true,false,true,'m').buildBraille(true,false,false,'m'),
      'n' => buildBraille(true,false,true,'n').buildBraille(true,true,false,'n'),
      'o' => buildBraille(true,false,true,'o').buildBraille(false,true,false,'o'),
      'p' => buildBraille(true,true,true,'p').buildBraille(true,false,false,'p'),
      'q' => buildBraille(true,true,true,'q').buildBraille(true,true,false,'q'),
      'r' => buildBraille(true,true,true,'r').buildBraille(false,true,false,'r'),
      's' => buildBraille(false,true,true,'s').buildBraille(true,false,false,'s'),
      't' => buildBraille(false,true,true,'t').buildBraille(true,true,false,'t'),
      'u' => buildBraille(true,false,true,'u').buildBraille(false,false,true,'u'),
      'v' => buildBraille(true,true,true,'v').buildBraille(false,false,true,'v'),
      'w' => buildBraille(false,true,false,'w').buildBraille(true,true,true,'w'),
      'x' => buildBraille(true,false,true,'x').buildBraille(true,false,true,'x'),
      'y' => buildBraille(true,false,true,'y').buildBraille(true,true,true,'y'),
      'z' => buildBraille(true,false,true,'z').buildBraille(false,true,true,'z')
    ];




    $brailleDictionaryEx = [
      ' ' => $filler . $filler,
      '-' => buildBraille(false,false,true,'-').buildBraille(false,false,true,'-'),
      '#' => buildBraille(false,false,true,'#').buildBraille(true,true,true,'#'),
      '1' => combineBraille(array($poundSign,$brailleDictionaryStandard['a'])),
      '2' => combineBraille(array($poundSign,$brailleDictionaryStandard['b'])),
      '3' => combineBraille(array($poundSign,$brailleDictionaryStandard['c'])),
      '4' => combineBraille(array($poundSign,$brailleDictionaryStandard['d'])),
      '5' => combineBraille(array($poundSign,$brailleDictionaryStandard['e'])),
      '6' => combineBraille(array($poundSign,$brailleDictionaryStandard['f'])),
      '7' => combineBraille(array($poundSign,$brailleDictionaryStandard['g'])),
      '8' => combineBraille(array($poundSign,$brailleDictionaryStandard['h'])),
      '9' => combineBraille(array($poundSign,$brailleDictionaryStandard['i'])),
      '0' => combineBraille(array($poundSign,$brailleDictionaryStandard['j'])),
      ',' => buildBraille(false,true,false,',').buildBraille(false,false,false,','),
      '.' => buildBraille(false,true,false,'.').buildBraille(false,true,true,'.'),
      "'" => buildBraille(false,false,true,'\'').buildBraille(false,false,false,"'"),
      '/' => buildBraille(false,false,true,'/').buildBraille(true,false,false,'/'),
      '!' => buildBraille(false,true,true,'!').buildBraille(false,true,false,'!'),
      '?' => buildBraille(false,true,true,'?').buildBraille(false,false,true,'?'),
      '$' => buildBraille(false,true,false,'$').buildBraille(false,true,true,'$'),
      ':' => buildBraille(false,true,false,':').buildBraille(false,true,false,':'),
      '(' => buildBraille(false,true,true,'(').buildBraille(false,true,true,'('),
      ')' => buildBraille(false,true,true,'(').buildBraille(false,true,true,'('),
      '^' => buildBraille(false,true,true,'“').buildBraille(false,false,true,'“'),
      '"' => buildBraille(false,true,true,'"').buildBraille(false,false,true,'"'),
      '*' => buildBraille(false,false,true,'”').buildBraille(false,true,true,'”')
    ];

    
    $brailleDictionary = array_merge($brailleDictionaryStandard, $brailleDictionaryEx);

    
    
    
    
    
    
    



    // test
    /*
     die(smartQuotes(
     '"Hey!" said my sister. "Hello!" said my brother. And they circled all about. But then my father said "". Of course, he did not say anything due to his reserved nature. But then my mother, who\'s a programmer, decided to test this false reality by exclaiming, "'
     ));
     */
    
    
    
    // uses asterisks and caret symbols as representations of open and close quotes due to encoding and charset weirdness
    $input = smartQuotes(str_replace(['^', '*'], '', $_POST['message']));
    $inputArr = explode("\\n", $input);
    
    $brailleOutputTables = [];

    
    
    $currBrailleOutputTable = 0;
    $contemporaryChars = 0;

    foreach($inputArr as $seg) {

      $chars = str_split($seg);
      foreach ($chars as $char) {
        

        // create a new table once the maximum amount of braille characters that can be displayed on one line has been met
        if ($contemporaryChars >= MAX_CHARS) {
          $currBrailleOutputTable++;
          $contemporaryChars = 0;
        }
        // create a new empty table if it doesn't exist yet
        if (!array_key_exists($currBrailleOutputTable, $brailleOutputTables)) {
          $brailleOutputTables[$currBrailleOutputTable] = "";
        }

        
        $brailleChar = array_key_exists($char, $brailleDictionary) ? $brailleDictionary[$char] : "";
        $brailleOutputTables[$currBrailleOutputTable] .= ($brailleChar . $filler);
        
        $contemporaryChars++;

      }

    }




    
    // write the separate braille output lines as actual tables
    $brailleOutput = "";
    foreach ($brailleOutputTables as $val) {
      $brailleOutput .= "<table><tbody><tr>$val</tr></tbody></table><br>";
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
		'additionalTitle' => " . Print . You've Got Braille",
		'desc' => 'Find out about Prunella blind friend and how braille can help blind people read! Enter a message into the braille translator.',
		'keywds' => 'braille, blind, reading, message, translation',
		'specialInclude' => '<script type="text/javascript" src="/arthur/js/printables.js"></script>',
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

<div id="content" class="bg-ffc">
		<div class="ruler"></div>
			<div class="print-instr">
			<a href="index.html"><h4 id="brailleHeader">You've Got Braille</h4></a>
			<ul id="printSideNav">
			<li><a href="https://pbskids.org/arthur/print/braille/index.html" class="selected"><span>You've Got Braille</span></a></li>
			<li><a href="https://pbskids.org/arthur/print/braille/braille_key.html"><span>Braille Key</span></a></li>
			<li><a href="https://pbskids.org/arthur/print/braille/braille_guide.html"><span>Guide To Braille</span></a></li>
			</ul></div>
			<div id="printableArea">			
					<div class="printable-content">					
						<div class="printable-nav" id="brailleTranslate">
							<div class="print-title-left"><h1>Braille Translator</h1><p>If you print this, you can put a tiny drop of glue on each "raised" dot to make your message feel kind of like real braille. Give it a try!</p></div>	
							<div class="print-btn-right"><span class="print-btn-one">Print This Page</span></div>
						</div>
						<div id="brailleMsg" class="page img">
							<p>Your Message in Braille</p>
              <table>
							<?php
                echo($brailleOutput);
                ?>
                </table>
							<img src="https://pbskids.org/arthur/i/print/copyright.gif" alt="" class="copyright" width="530" height="49" border="0">
						</div>
						<div class="print-bg-top"></div>
						<div class="print-bg-btm"></div>
					</div>
					
				
			</div>
			
		</div>
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
    </div>
    </body>
    </html>