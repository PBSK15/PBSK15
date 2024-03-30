<?php

// TODO: resize script
// TODO: print button
// TODO: notifyStatus

require 'backend_db/DbLoad.php';
require 'backend_db/account_db/AccDbManager.php';


$username = $_POST['username'];
$password = $_POST['password'];

$animalCode = $_POST['animal_code'];
$foodCode = $_POST['food_code'];
$colorCode = $_POST['color_code'];


$accDbManager = new AccDbManager($db);

if ($accDbManager->getAccByUsername($username) == null) {
    $accDbManager->createAcc($username, password_hash($password, PASSWORD_DEFAULT), "trophy", implode(",", array($animalCode, $foodCode, $colorCode)), "", "");
}

?>


<html>
    <head>
        <?php
            echo($twig->render("go/includes/auth/static/head.html"));
        ?>
    </head>
    <body>
        
    <div id="go-auth">
 <h1 class="sprite youdid">You did it!</h1>
 <p class="sprite writethis">Write this down or print it out, then keep it in a safe place.</p>
 <form method="POST" action="/go/apps/auth/login/1" autocomplete="off">    

<dl class="printout">
<dt>
username:
  </dt>
<dd><?php echo($username); ?>
</dd><dt>
password:
  </dt>
<dd>
<?php echo($password); ?>
  </dd>
<dt>
‍
  </dt>
<dd>
‍
  </dd>
 </dl>



<div class="button done right" style="margin-top: 15px;">
<div class="inner">
<p>
<a>
<input value="Done" style="display: none;" type="submit">
</a>
  </p>
  </div>
</div>

<input type="hidden" name="username" value="<?php echo($username); ?>">
<input type="hidden" name="password" value="<?php echo($password); ?>">
<input type="hidden" name="new" value="true">

</form>
 <script type="text/javascript" src="http://pbskids.org/pbs-kids-headband/js/PBS.KIDS.jquery-1.8.3.js"></script>
 <script type="text/javascript" src="http://pbskids.org/pbs-kids-headband/js/auth/PBS.KIDS.auth.min.js"></script> <!--[if lt IE 9]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js">
<![endif]-->
 <script type="text/javascript">
if( PBS && PBS.KIDS && PBS.KIDS.$_auth ){
(function($){
$(document).ready(function() {
$('body').trigger('init.go');
});
})(PBS.KIDS.$_auth);
}
</script> <!-- Page-specific js goes here -->
 <script type="text/javascript">
try{
if(typeof parent.GA_obj != 'undefined'){
parent.GA_obj.trackPageview('/auth/signup/username/' + parent.location.pathname.replace(/^\//,''));
}
}
catch(err){
}
(function($){
// Notify Parent Window of current status
notifyStatus("signup","created-account");
// Execute on initialization
$('body').bind('init.go', function() {
registrationFinishFuncs();
// Do not play VO if this screen is being reloaded to display an error
if($('.errorlist').length < 1) {
usernameVO();
}
$(this).unbind('init.go');
});
// Voiceover
function usernameVO() {
try{
if( window.top.org && window.top.org.pbskids && window.top.org.pbskids.login ){
window.top.org.pbskids.login.playAudio("make-up-a-name-thats-easy-to-remember");
}	}	catch(err){	}}
// Functions to run post-init
function registrationFinishFuncs() {

    var doneButtonRoot = $("div.button.done > div");
    doneButtonRoot.gobutton();
    var doneButton = doneButtonRoot.data("gobutton");
    doneButtonRoot.on('click', function() {
      document.querySelector("form").submit();
    });

}



})(PBS.KIDS.$_auth);
</script>
</div>


<script type="text/javascript">

try{
// Resize ColorBox iFrame
if( parent !== window &&
(PBS && PBS.KIDS && PBS.KIDS.$_auth) &&
(parent.PBS && parent.PBS.KIDS && parent.PBS.KIDS.$_auth && parent.PBS.KIDS.$_auth.colorbox)
) {
(function($){
$(document).ready( function(){
var height = 0;
// Prevent under reported modal height when page is cached while still
// allowing form errors to expand modal height appropriately.
if (height < 293) {
height = 293;
}
height = Math.max( $('body').outerHeight(true), height );
parent.PBS.KIDS.$_auth.colorbox.resize({ innerHeight: height });
});
})(PBS.KIDS.$_auth);
}//end if
}
catch(err){
}
</script>