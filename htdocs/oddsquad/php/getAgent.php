<?php


function unauthorizedErr() {
    die("~~");
}


require_once 'backend/osVerification.php';



function agentNameToNumber($inputString) {
    $inputString = strtoupper($inputString);
    $agentNum = 0;

    foreach(str_split($inputString) as &$char) {

        if (!ctype_alpha($char)) {
            continue;
        }
        $agentNum += intval(ord($char) - ord('A') + 1);

    }

    return $agentNum;
}



$agentDataArr = [];
$oddSquadAcc = $osDbManager->getAccByPBSId($kidsAcc["kid_id"]);
if ($oddSquadAcc == null) {
    unauthorizedErr();
}

array_push($agentDataArr, $oddSquadAcc["username"], agentNameToNumber($oddSquadAcc["username"]), $oddSquadAcc["avatar"], $oddSquadAcc["background"]);
die(implode("~~", $agentDataArr));