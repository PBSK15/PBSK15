<?php

if (!isset($_GET['Start'])) {
	die($twig->render("eekoworld/exchange/detail_trash.html.twig"));
}
die($twig->render("eekoworld/exchange/detail_trash/" . $_GET['Start'] . ".html.twig"));