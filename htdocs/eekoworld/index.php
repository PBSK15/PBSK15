<?php

if (!isset($_GET['load'])) {
    die($twig->render("eekoworld/index.html.twig"));
}

die($twig->render("eekoworld/" . $_GET['load'] . ".html.twig"));