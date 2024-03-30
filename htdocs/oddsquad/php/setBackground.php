<?php

require_once 'backend/osVerification.php';
$osDbManager->updateAccData($kidsAcc["kid_id"], ["background" => $_POST['background']]);