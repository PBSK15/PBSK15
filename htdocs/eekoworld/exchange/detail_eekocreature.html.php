<?php

if (!isset($_GET['Start'])) {
	die($twig->render("eekoworld/exchange/detail_eekocreature.html.twig"));
}
die($twig->render("eekoworld/exchange/detail_eekocreature/" . $_GET['Start'] . ".html.twig"));