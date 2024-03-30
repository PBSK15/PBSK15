|<?php

require_once 'backend/osVerification.php';
die($osDbManager->getAccByPBSId($kidsAcc["kid_id"])["locker_items"]);