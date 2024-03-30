<?php

require 'backend_db/DbLoad.php';
require 'backend_db/account_db/AccDbManager.php';



$accDbManager = new AccDbManager($db);
var_dump($accDbManager->getAccById(1));
var_dump($accDbManager->getAccById(2));

echo "<br>";
var_dump($accDbManager->getAccByUsername(""));
echo "<br><br>";

var_dump($accDbManager->getAccById(5));
var_dump($accDbManager->getAccByUsername("DAMN"));

echo "<br><br><br>";