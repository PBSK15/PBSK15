<?php
/*
	header('Content-Type: application/json');
	
	$urlParameter = $_GET['url'];
	$n = $_GET['n'];
	
	die(curl_exec(curl_init("https://pbskids.org/api/messages/v3/messages.json?url=$urlParameter&n=$n")));
	
	?>*/

header('Content-Type: application/json');


function renderHardcodedMsgs(string $filename) : void {
	include "hardcoded/$filename";
	die();
}


$urlParameter = $_GET['url'];
$n = $_GET['n'];


// dead website messages support
if (str_contains($urlParameter, "lunchlab")) {
	die(renderHardcodedMsgs("lunchlab.json"));
}
if (str_contains($urlParameter, "plumlanding")) {
	die(renderHardcodedMsgs("plumlanding.json"));
}



$curl = curl_init("https://www.pbskids.org/api/messages/v3/messages.json?url=$urlParameter&n=$n");
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
die(curl_exec($curl));