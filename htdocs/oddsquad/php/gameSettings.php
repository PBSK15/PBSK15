<?php

function unauthorizedErr() {
    die("{\"code\":\"-1\",\"message\":\"User not logged in\"}");
}

require_once 'backend/osVerification.php';



$kidId = $kidsAcc["kid_id"];
$oddSquadAcc = $osDbManager->getAccByPBSId($kidId);
$gameSettingsObj = json_decode($oddSquadAcc["game_settings"]);


$key = $_POST['key'];
$action = $_POST['a'];



if ($action == "set") {
    $gameSettingsObj->{$key} = $_POST['value'];
    $osDbManager->updateAccByPBSId($kidId, [
        "game_settings" => json_encode($gameSettingsObj)
    ]);
}


$value = property_exists($gameSettingsObj, $key) ? $gameSettingsObj->{$key} : null;
die(json_encode(
    [
        "code" => "1",
        "message" => "OK",
        "action" => $action,
        "key" => $key,
        "value" => $value,
        "collection" => null
    ]
));