<?php

if (!isset($_GET['Start'])) {
	die($twig->render("eekoworld/exchange/detail_eekohouse.html.twig"));
}
die($twig->render("eekoworld/exchange/detail_eekohouse/" . $_GET['Start'] . ".html.twig"));