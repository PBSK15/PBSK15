<?php

$servername = "localhost:3306";
$username = "root";
$password = "";

$db = new mysqli($servername, $username, $password);
if ($db->connect_error) {
  die("Connection failed: " . $db->connect_error);
}


//$db->close();

?>