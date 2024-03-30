<?php


// TODO: resize script
// TODO: secret question support thing
// TODO: notifyStatus


$username = $_POST['username'];
$password = $_POST['password'];


$goAuth = '<div id="go-auth">
<h1 class="sprite makeyour">Make your secret code</h1>
<p class="sprite pickyour">Pick your favorites</p>

<form method="POST" action="/go/apps/auth/signup/3" autocomplete="off">

<ul class="fields">
<li>
<label id="login-cat">
<span class="button">
</span></label>
</li>
<li>
<label id="login-dog">
<span class="button">
</span></label>
</li>
<li>
<label id="login-turtle">
<span class="button">
</span></label>
</li>
<li>
<label id="login-fish">
<span class="button">
</span></label>
</li>
<li>
<label id="login-bird">
<span class="button">
</span></label>
</li>
</ul>






<ul class="fields">
<li>
<label id="login-taco">
<span class="button">
</span></label>
</li>
<li>
<label id="login-pizza">
<span class="button">
</span></label>
</li>
<li>
<label id="login-apple">
<span class="button">
</span></label>
</li>
<li>
<label id="login-hamburger">
<span class="button">
</span></label>
</li>
<li>
<label id="login-spaghetti">
<span class="button">
</span></label>
</li>
</ul>


<ul class="fields">
<li>
<label id="login-red">
<span class="button">
</span></label>
</li>
<li>
<label id="login-blue">
<span class="button">
</span></label>
</li>
<li>
<label id="login-orange">
<span class="button">
</span></label>
</li>
<li>
<label id="login-purple">
<span class="button">
</span></label>
</li>
<li>
<label id="login-green">
<span class="button">
</span></label>
</li>
<div class="button ok right">
<div class="inner">
<p><input value="OK" type="submit"></p>
</div>
</div>
</ul>



<p class="sprite thiswill">This will help you get your password if you forget it.</p>
<p class="sprite usesecretquestion"></p>

<input id="animal_code" type="hidden" name="animal_code" value="">
<input id="food_code" type="hidden" name="food_code" value="">
<input id="color_code" type="hidden" name="color_code" value="">

<input type="hidden" name="username" value="' . $username . '">
<input type="hidden" name="password" value="' . $password . '">

</form>
<script type="text/javascript" src="http://pbskids.org/pbs-kids-headband/js/PBS.KIDS.jquery-1.8.3.js"></script>
<script type="text/javascript" src="http://pbskids.org/pbs-kids-headband/js/auth/PBS.KIDS.auth.min.js"></script> <!--[if lt IE 9]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js">
<![endif]-->
<script type="text/javascript">
if( PBS && PBS.KIDS && PBS.KIDS.$_auth ){
(function($){
$(document).ready(function() {
$(\'body\').trigger(\'init.go\');
});
})(PBS.KIDS.$_auth);
}
</script> <!-- Page-specific js goes here -->
<script type="text/javascript">



(function($){
// Notify Parent Window of current status
notifyStatus("signup","create-secret-code");
// Execute on initialization
$(\'body\').bind(\'init.go\', function() {
secretCodeFuncs();
// Do not play VO if this screen is being reloaded to display an error
if($(\'.errorlist\').length < 1) {
usernameVO();
}
$(this).unbind(\'init.go\');
});
// Voiceover
function usernameVO() {
try{
if( window.top.org && window.top.org.pbskids && window.top.org.pbskids.login ){
window.top.org.pbskids.login.playAudio("make-up-a-name-thats-easy-to-remember");
}	}	catch(err){	}


}
// Functions to run post-init
// Page-specific behaviors
function secretCodeFuncs() {





$(\'.button.ok > div\').gobutton();
var okButton = $(\'.button.ok > div\').data(\'gobutton\');
okButton.disable();





function elemInArr(index, elem, arr, inputName) {
    var btn = $(elem).find("label").eq(0);
    btn.gobutton();
    btn.attr("data-input", inputName);
    arr[index] = [btn, btn.data("gobutton")];
}






function clickFunctionality(arr, selectedFlagIndex) {
    arr.forEach((elem, index) => {
        elem[0].on("click", () => {



            arr.forEach((childElem, childIndex) => {
    
                if (childIndex === index) {
                    return;
                }
                childElem[0].removeClass("selected");
                childElem[1].release();
                childElem[0].css("opacity", "0.5");
    
            });



            elem[0].addClass("selected");
            elem[0].css("opacity", "1");
            document.getElementById(elem[0].attr("data-input")).value = elem[0].attr("id").replace("login-", "");




            selectedFlags[selectedFlagIndex] = true;

            let unselected = false;
            Object.values(selectedFlags).forEach(elem => {
                if (!elem) unselected = true;
            });

            if (!unselected) {
                okButton.enable();
            }




        });
    });
}



var animalFields = [];
var foodFields = [];
var colorFields = [];


// animalSelected, foodSelected, colorSelected
var selectedFlags = [false, false, false];



$("ul.fields").eq(0).find("li").each((index, elem) => {
    elemInArr(index, elem, animalFields, "animal_code");
});
$("ul.fields").eq(1).find("li").each((index, elem) => {
    elemInArr(index, elem, foodFields, "food_code");
});
$("ul.fields").eq(2).find("li").each((index, elem) => {
    elemInArr(index, elem, colorFields, "color_code");
});

clickFunctionality(animalFields, 0);
clickFunctionality(foodFields, 1);
clickFunctionality(colorFields, 2);




}
})(PBS.KIDS.$_auth);

</script>


</div>';




$resizeScript = '       <script type="text/javascript">

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
if (height < 265) {
height = 265;
}
height = Math.max( $(\'body\').outerHeight(true), height );
parent.PBS.KIDS.$_auth.colorbox.resize({ innerHeight: height });
});
})(PBS.KIDS.$_auth);
}//end if
}
catch(err){
}
</script>';



?>


<html>
    <head>
        <?php
            echo($twig->render("go/includes/auth/static/head.html"));
        ?>
    </head>
    <body>
        <?php
            echo($goAuth);
            echo($resizeScript);
        ?>
    </body>
</html>