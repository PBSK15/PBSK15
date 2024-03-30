<?php

require_once 'backend/osVerification.php';

$kidId = $kidsAcc["kid_id"];
$oddSquadAcc = $osDbManager->getAccByPBSId($kidId);


$allLockerItems = explode("|", $oddSquadAcc["locker_items"]);
$unlockedItems = array_unique(array_filter(explode("/", $allLockerItems[0])));
$viewedItems = array_unique(array_filter(explode("/", $allLockerItems[1])));
$currItem = $_POST['locker'];


$type = isset($_POST['type']) ? $_POST['type'] : "unlocked";
switch($type) {

    case "unlocked":
        array_push($unlockedItems, $currItem);
        break;
    case "viewed":
        array_push($viewedItems, $currItem);
        break;

}


$finalLockerItems = implode("/", $unlockedItems) . "|" . implode("/", $viewedItems);
$osDbManager->updateAccByPBSId($kidId, ["achievements" => $finalLockerItems]);