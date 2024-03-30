<?php

require 'backend_db/DbLoad.php';
require 'backend_db/account_db/AccDbManager.php';

// TODO: successful login screen
// TODO: notifyStatus
// TODO: auth token expiration


// expire in 31 days
$expires = time() + 2678400;
$isNew = isset($_POST['new']) ? filter_var($_POST['new'], FILTER_VALIDATE_BOOLEAN) : false;

$accDbManager = new AccDbManager($db);
$accInQuestion = $accDbManager->getAccByUsername($_POST['username']);


if (!password_verify($_POST['password'], $accInQuestion['password'])) {
    http_response_code(302);
    header('Location: http://pbskids.org/go/apps/auth/login/');
    die();
}



$username = $_POST['username'];
$avatar = $accInQuestion['avatar'] == null ? "trophy" : $accInQuestion['avatar'];
$authToken = $accDbManager->createAccSess($accInQuestion['kid_id']);


setcookie('pbskids.username', '', 1, '/');
setcookie('pbskids.userid', '', 1, '/');
setcookie('pbskids.returning', '', 1, '/');
setcookie('pbskids.avatar', '', 1, '/');
setcookie('PBSKIDS_AUTH', '', 1, '/');


setcookie("pbskids.username", $_POST['username'], $expires, '/');
setcookie("pbskids.userid", $accInQuestion['kid_id'], $expires, '/');
setcookie("pbskids.returning", ($isNew ? 0 : 1), $expires, '/');
setcookie("pbskids.avatar", $avatar, $expires, '/');
setcookie("PBSKIDS_AUTH", $authToken, $expires, '/');


?>


<html>
    <head>
        <?php
            echo($twig->render('go/includes/auth/static/head.html'));
        ?>
    </head>
    <body>
        

<div id="go-auth">

Welcome, <?php echo($username); ?>!
 
 
 
 
</div>


<script type="text/javascript">

notifyStatus("login","logged-in");
try{
// Resize ColorBox iFrame
if( parent !== window &&
(parent.PBS && parent.PBS.KIDS && parent.PBS.KIDS.$_auth && parent.PBS.KIDS.$_auth.colorbox)
) {
    setTimeout(parent.PBS.KIDS.$_auth.colorbox.close, 1900);
}
}
catch(err){
}
</script>



</body>
</html>