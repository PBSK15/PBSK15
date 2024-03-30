<?php

require_once 'backend/osVerification.php';
$osDbManager->updateAccByPBSId($kidsAcc["kid_id"], ["achievements" => ""]);