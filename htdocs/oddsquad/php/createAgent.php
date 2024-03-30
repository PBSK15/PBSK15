<?php


require_once 'backend/osVerification.php';

$pbsUsername = $_POST['username'];
if ($pbsUsername != $kidsAcc['username']) {
    unauthorizedErr();
}

$osDbManager->createAcc($kidsAcc['kid_id'], $pbsUsername, $_POST['agentName'], $_POST['avatar']);