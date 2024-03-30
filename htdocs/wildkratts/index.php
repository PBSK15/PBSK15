<?php

$currMonth = (int) strval(date("m"));
$currDay = (int) strval(date("d"));

if ($currMonth < 11) {
    die($twig->render("wildkratts/index.html.twig"));
}
if ($currMonth == 11 && $currDay < 20) {
    die($twig->render("wildkratts/index.html.twig"));
}

die($twig->render("wildkratts/christmas.html.twig"));