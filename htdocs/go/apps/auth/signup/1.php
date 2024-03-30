<?php

// TODO: resize script
// TODO: prompt for when there's no username suggestion available
// TODO: notifyStatus


    require 'backend_db/DbLoad.php';
    require 'backend_db/account_db/AccDbManager.php';



    $charactersArr = ["arthur","buster","francine","muffy","dw","brain","binky","sueellen","fern","george","prunella","matt","inez","jackie","digit","hacker","buzz","delete","ruff","becky","tj","tim","sally","bob","huggyface","wordgirl","tobey","twobrains","scoops","chuck","butcher","violet","mrbig","twobrains","fizzy","freddy","avril","henry","mixie","corporal","sully","wilson","ditch","manny","francine","annie","danny","hector","jessica","lisa","keith","marcus","martin","chris","aviva","jimmy","koki","zach","gourmand","donita","dabio","helen","tyrone","mariella","alice","bernard","carolina","martha","daniel","ronald","skits","george","ted","hundley","charkie","allie","pisghetti","betsy","bill","steve","oscar","otto","olive","mso","oren","olaf","octavia","todd","shapeshifter","noisemaker","evensteven","tinydancer","flatam","circlesue"];


    $username = $_POST['username'];
    $accDbManager = new AccDbManager($db);
    $goAuth = "";


    if ($username === "") {
        http_response_code(302);
        header('Location: http://pbskids.org/go/apps/auth/signup');
        die();
    }



    function generateUsernameChoice(string $username) : string {
        return "<li>
        <div class=\"button text\" onclick=\"submitForm('$username');\">
        <div class=\"inner\">
        <p>
        <span>
        $username
          </span>
          </p></div>
        
          </div>
          </li>";
    }




    if ($accDbManager->getAccByUsername($username) == null) {

        $passwordSuggestion = $charactersArr[array_rand($charactersArr)] . str_pad(rand(0,99), 2, '0', STR_PAD_LEFT);
        $goAuth = '
        
        <div id="go-auth">
    <h1 class="sprite thisis">This is your password</h1>
    <p class="sprite youcan volatile">You can change it if you like.</p>
   <p class="sprite typeyour collapsible" style="display: none;">Type your new password twice.</p>
    <form method="POST" action="/go/apps/auth/signup/2" autocomplete="off">
    <label for="id_password" style="display: none;">Password</label> 
    <label for="id_password_valid" style="display: none;">Retype password</label>
    <input type="hidden" name="username" value="' . $username . '">
    <input id="id_password" value="' . $passwordSuggestion . '" name="password" style="margin-bottom: 10px;" maxlength="12" class="active" type="text"><br>
   <input id="id_password_valid" value="' . $passwordSuggestion . '" name="password_validation" maxlength="12" style="display: none; margin-bottom: 20px; margin: auto;" class="active collapsible" type="text"> 
   <input name="destination" id="id_destination" type="hidden"> 
   <input name="refresh" value="1" id="id_refresh" type="hidden"> 
   <br>
   <div style="font-size:12px; margin:12px 0; color:#FFF; text-align:center; display: none;" class="collapsible">
   Your password must be at least six characters long.
   </div>
   <div class="button ok right">
   <div class="inner" style="left: 7px; top: 7px; opacity: 0.5;">
   <p><input value="OK" type="submit"></p>
   </div>
   </div>
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
   notifyStatus("signup","create-password");
   // Execute on initialization
   $(\'body\').bind(\'init.go\', function() {
   passwordFuncs();
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
   function passwordFuncs() {
   // Page-specific behaviors

   $(\'#id_password\').label({ useLabel: false });
   $(\'#id_password_valid\').label({ useLabel: false });

   var password = $(\'#id_password\').data(\'label\');
   var passwordLabel = password.$elem.data(\'labelText\');
   var passwordValid = $(\'#id_password_valid\').data(\'label\');
   var passwordValidLabel = passwordValid.$elem.data(\'labelText\');


   var okButtonRoot = $(\'#go-auth .button > div\');
   okButtonRoot.gobutton();
   var okButton = okButtonRoot.data(\'gobutton\');
   okButton.enable();
   okButton.release();
   // hack for greyed out ok button
   okButtonRoot.css("opacity", "1");

   var needsValid = false;
   var begunValid = false;

   password.$elem.keypress(function() {

        if (needsValid && password.value === passwordValid.value) {
            okButton.enable();
            needsValid = false;
            return;
        }
        if (begunValid) {
            return;
        }


        parent.PBS.KIDS.$_auth.colorbox.resize({ innerHeight: (Math.max( $(\'body\').outerHeight(true), 245) + 30) });
        okButton.disable(true);

        const collapsibleElems = document.querySelectorAll(".collapsible");
        const volatileElems = document.querySelectorAll(".volatile");
        volatileElems.forEach(elem => {
            elem.style.display = "none";
        });
        collapsibleElems.forEach((elem) => {
            elem.style.display = "block";
        });
        begunValid = true;
        needsValid = true;
        // console.log(okButton.enable);
        
   });
   passwordValid.$elem.keypress(function() {
        if (passwordValid.value !== document.getElementById("id_password").value) {
            return;
        }
        okButton.enable();
        needsValid = false;
   })
   }
   })(PBS.KIDS.$_auth);

   </script>

   
   </div>';









    } else {






$suggestions = [];
for ($i = 0; $i < 3; $i++) {


    $tempSuggestions = [];
    for ($o = 0; $o < 10; $o++) {
        $tempSuggestions[$o] = $username . str_pad(rand(0,999), 3, '0', STR_PAD_LEFT);
    }

    foreach ($tempSuggestions as &$sugg) {
        if ($accDbManager->getAccByUsername($sugg) == null) continue;
        unset($tempSuggestions[array_search($sugg,$tempSuggestions)]);
    }
    
    $suggestions = array_merge($suggestions, $tempSuggestions);
    
    if (count($suggestions) >= 3) {
        $suggestions = array_slice($suggestions, 0, 3);
        break;
    }


}

$suggestionsHtml = "";
foreach ($suggestions as &$suggestion) {
    $suggestionsHtml .= generateUsernameChoice($suggestion);
}



// using single quotes because php mistakes $_auth in the inline scripts as a variable
$goAuth = '<div id="go-auth">
        <h1 class="sprite thatname">That name is taken by someone else</h1>
        <p class="sprite howabout">How about one of these?</p>
        <form method="POST" action="/go/apps/auth/signup/1"><ul class="buttons">
       
         ' . $suggestionsHtml . '
         
         </ul><p class="sprite trya"><a href="http://pbskids.org/go/apps/auth/signup/">Try a new one</a></p></form>
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
       </script> 
       
       
       
       
       <!-- Page-specific js goes here -->
        <script type="text/javascript">
    
    (function($) {
        // Notify Parent Window of current status
        notifyStatus("signup", "choose-username");
        // Execute on initialization
        $(\'body\').bind(\'init.go\', function() {
            choicesFunc();
            // Do not play VO if this screen is being reloaded to display an error
            if ($(\'.errorlist\').length < 1) {
                usernameVO();
            }
            $(this).unbind(\'init.go\');
        });
    
    
        // Voiceover
        function usernameVO() {
            try {
                if (window.top.org && window.top.org.pbskids && window.top.org.pbskids.login) {
                    window.top.org.pbskids.login.playAudio("make-up-a-name-thats-easy-to-remember");
                }
            } catch (err) {}
        }
    
    
        // Functions to run post-init
        function choicesFunc() {
    
            $(\'#id_username\').label({
                useLabel: false
            });
            // var choices = document.querySelectorAll(\'div.button.text\');
            // choices.forEach(elem => {
                // elem.gobutton();
            // });
            // $(\'#go-auth .button > div\').gobutton();
            $(\'div.button.text > div\').gobutton();
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
if (height < 275) {
height = 275;
}
height = Math.max( $(\'body\').outerHeight(true), height ) + 20;
parent.PBS.KIDS.$_auth.colorbox.resize({ innerHeight: height });
});
})(PBS.KIDS.$_auth);
}//end if
}
catch(err){
}
</script>




<script type="text/javascript">
   // hacky as hell workaround for the confusing button code
   window.submitForm = function(str) {
        document.querySelector("form").insertAdjacentHTML(\'beforeend\', `<input name="username" type="hidden" value=${str}>`);
        document.querySelector("form").submit();
   }
   </script>
       
       
       
       
       
       
       
       
       
       
       ';




}



    ?>



<html>
    <head>
        <?php
            echo $twig->render("go/includes/auth/static/head.html");
        ?>
    </head>
    <body>
        <?php
            echo $goAuth;
        ?>
    </body>
</html>


