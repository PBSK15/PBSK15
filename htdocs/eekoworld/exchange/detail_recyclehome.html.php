<?php

if (!isset($_GET['Start'])) {
	die($twig->render("eekoworld/exchange/detail_recyclehome.html.twig"));
}
die($twig->render("eekoworld/exchange/detail_recyclehome/" . $_GET['Start'] . ".html.twig"));