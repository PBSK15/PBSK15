<?php

require_once 'backend/osVerification.php';

$kidId = $kidsAcc["kid_id"];
$oddSquadAcc = $osDbManager->getAccByPBSId($kidId);


$allAchievements = explode("|", $oddSquadAcc["achievements"]);
$unlockedAchievements = array_unique(array_filter(explode("/", $allAchievements[0])));
$viewedAchievements = array_unique(array_filter(explode("/", $allAchievements[1])));
$currAchievement = $_POST['achievement'];


$type = isset($_POST['type']) ? $_POST['type'] : "unlocked";
switch($type) {

    case "unlocked":
        array_push($unlockedAchievements, $currAchievement);
        break;
    case "viewed":
        array_push($viewedAchievements, $currAchievement);
        break;

}


$finalAchievements = implode("/", $unlockedAchievements) . "|" . implode("/", $viewedAchievements);
$osDbManager->updateAccByPBSId($kidId, ["achievements" => $finalAchievements]);