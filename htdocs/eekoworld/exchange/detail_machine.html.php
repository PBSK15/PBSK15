<?php

if (!isset($_GET['Start'])) {
	die($twig->render("eekoworld/exchange/detail_machine.html.twig"));
}
die($twig->render("eekoworld/exchange/detail_machine/" . $_GET['Start'] . ".html.twig"));