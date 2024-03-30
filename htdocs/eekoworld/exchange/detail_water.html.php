<?php

if (!isset($_GET['Start'])) {
	die($twig->render("eekoworld/exchange/detail_water.html.twig"));
}
die($twig->render("eekoworld/exchange/detail_water/" . $_GET['Start'] . ".html.twig"));