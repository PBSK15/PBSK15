<?php

if (!isset($_GET['Start'])) {
	die($twig->render("eekoworld/exchange/detail_freeform.html.twig"));
}
die($twig->render("eekoworld/exchange/detail_freeform/" . $_GET['Start'] . ".html.twig"));