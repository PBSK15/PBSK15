<?php

if (!isset($_GET['Start'])) {
	die($twig->render("eekoworld/exchange/detail_recycleschool.html.twig"));
}
die($twig->render("eekoworld/exchange/detail_recycleschool/" . $_GET['Start'] . ".html.twig"));