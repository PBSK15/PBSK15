<?php
	if ($_SERVER['REQUEST_METHOD'] == 'POST') {
		include 'home.html';
		die();
	}
	die($twig->render("lunchlab/index.html.twig"));
	
	?>