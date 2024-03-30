<?php

if (!function_exists("unauthorizedErr")) {
    function unauthorizedErr() {
        http_response_code(401);
        die("-1");
    }
}


if (!isset($_COOKIE['PBSKIDS_AUTH'])) {
    unauthorizedErr();
}



require __DIR__ . '/../../../backend_db/DbLoad.php';
require __DIR__ . '/../../../backend_db/account_db/AccDbManager.php';
require __DIR__ . '/../../../backend_db/microsite_db/OddSquadDbManager.php';

$accDbManager = new AccDbManager($db);
$osDbManager = new OddSquadDbManager($db);



$kidsAcc = $accDbManager->getAccByAuthToken($_COOKIE['PBSKIDS_AUTH']);
if ($kidsAcc == null) {
    unauthorizedErr();
}