<?php

$arrContextOptions=array(
    "ssl"=>array(
        "verify_peer"=>false,
        "verify_peer_name"=>false,
    ),
);

die(file_get_contents("https://pbskids.org/cgi-registry/eekoworld/mapcreatures/ew_mapcreature.cgi&UserID=" . $_GET['UserID'] . "&Map=" . $_GET['Map'] . "&cachebuster=", false, stream_context_create($arrContextOptions)));