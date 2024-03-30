<?php

// TODO: Finish

	

	function renderHardcoded(string $filename) : void {
		include "hardcoded/$filename";
		die();
	}

	function encodeURIComponent($str) {
		$revert = array('%21'=>'!', '%2A'=>'*', '%27'=>"'", '%28'=>'(', '%29'=>')');
		return strtr(rawurlencode($str), $revert);
	}

	$program = encodeURIComponent($_GET['program']);
	switch(true) {

		case str_contains($program, "wordgirl"):
			renderHardcoded("worg.json");
	}
	
	$producerProgramData = file_get_contents("http://producerplayer.services.pbskids.org/validate-player?program=$program");

	// $producerProgramData["programSite"] = "pbskids.org/wordgirl/";
	// $producerProgramData["defaultProgram"] = "WordGirl";
	// $producerProgramData["playern"]


	// /"programSite":"pbskids.org\/wordgirl\/","defaultProgram":"WordGirl","playerName":"KIDS Producer Player","destination":"producer","affiliateId":"WORG",
	
	if (isset($_GET['callback'])) {
		$producerProgramData = $_GET['callback'] . "($producerProgramData)";
	}

	echo($producerProgramData);
	
	
?>