<?php

setcookie('pbskids.username', '', 1, '/');
setcookie('pbskids.userid', '', 1, '/');
setcookie('pbskids.returning', '', 1, '/');
setcookie('pbskids.avatar', '', 1, '/');
setcookie('PBSKIDS_AUTH', '', 1, '/');


http_response_code(302);
header("Location: " . $_GET['destination']);
exit();