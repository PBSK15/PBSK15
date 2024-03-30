<?php

if (!function_exists("unauthorizedErr")) {


    function unauthorizedErr() {

        // i dont want to hear it
        global $wkDbManager;
        /*
        http_response_code(401);
        die("-1");
        */
        //http_response_code(401);
        $emptyXml = "";
        foreach ($wkDbManager->getOwnTable() as $xmlField) {
            $emptyXml .= "<$xmlField[0]></$xmlField[0]>";
        }
        die("<getUserDataResult success='1'>
            $emptyXml
            </getUserDataResult>");

    }


}



require __DIR__ . '/../../../../backend_db/DbLoad.php';
require __DIR__ . '/../../../../backend_db/account_db/AccDbManager.php';
require __DIR__ . '/../../../../backend_db/microsite_db/WildKrattsDbManager.php';

$accDbManager = new AccDbManager($db);
$wkDbManager = new WildKrattsDbManager($db);


if (!isset($_COOKIE['PBSKIDS_AUTH'])) {
    unauthorizedErr();
}


$kidsAcc = $accDbManager->getAccByAuthToken($_COOKIE['PBSKIDS_AUTH']);
if ($kidsAcc == null) {
    unauthorizedErr();
}


if (is_null($wkDbManager->getAccByPBSId($kidsAcc["kid_id"]))) {
    $wkAcc = $wkDbManager->createAcc($kidsAcc["kid_id"], "", "<games></games>", "<cps></cps>", "<vistas></vistas>");
}