<!DOCTYPE html>
<!-- #bbinclude "header.pl" #metaDescription#="Make a comic! Drag characters, backgrounds, props, and speech bubbles into boxes, then type your own story. Or modify an existing comic with the Story Starter." #metaKeywords#="comic book, graphic novel, Sue Ellen, Neil Gaiman, write, compose, game" #section#="games" #pagetitle#="Comic Creator" -->
<head>
	<title>Arthur . Games . Comic Creator | PBS Kids</title>

	<meta name="description" content="Make a comic! Drag characters, backgrounds, props, and speech bubbles into boxes, then type your own story. Or modify an existing comic with the Story Starter." />
		
	<meta name="keywords" content="comic book, graphic novel, Sue Ellen, Neil Gaiman, write, compose, game" />
		
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<link rel="stylesheet" type="text/css" href="/arthur/c/sitewide.css" media="all"/>
	<link rel="stylesheet" type="text/css" href="/arthur/c/print.css" media="print" />
	<!--<script type="text/javascript" src="https://code.jquery.com/jquery-1.4.4.min.js"></script>-->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.18/jquery-ui.min.js"></script>
	<link href='https://fonts.googleapis.com/css?family=Chewy' rel='stylesheet' type='text/css' />	
	<link rel="stylesheet" type="text/css" href="/arthur/c/games.css" media="screen" />
		
	<script type="text/javascript" src="/includes/flash/swfobject.js"></script>

	<link type="text/css" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/south-street/ui.all.css" rel="stylesheet" />
	<link type="text/css" rel="stylesheet" href="/arthur/games/comiccreator/core/css/stickerbooks.css" />
	<link type="text/css" rel="stylesheet" href="skin.simple.css" />

	
	<script src="/arthur/games/comiccreator/core/js/kinetic-v3.10.5.min.js"></script> 
	<script src="/arthur/games/comiccreator/core/js/jquery.outside.js"></script> 
	<script src="/arthur/games/comiccreator/core/js/jquery.ui.touch-punch.min.js"></script>
	<script src="/arthur/games/comiccreator/core/js/stickerbooks.js"></script> 
	<script type="text/javascript">
	$(function(){
	    //$("#myTabs").tabs();
	   //$('#screen-overlay').hide();
	    $("#tabsbkg").addClass('hideTabContent');
	    $("#tabsprop").addClass('hideTabContent');
	    $("#tabstext").addClass('hideTabContent');
	    $('#nav-char button').addClass('active');
	});
	//console.log("HELLO?");


	var SimpleStickerbook = PBS.KIDS.StickerBook('arthur-comic-creator');
	</script>
	<!--LOGIN HANDLERS -->
	<script src="/arthur/games/comiccreator/core/js/startSticker.js"></script> 
		
	<!--[if lte IE 7]><link rel="stylesheet" type="text/css" href="/arthur/c/ie7.css" media="screen"/><![endif]-->
	<script type="text/javascript" src="https://pbskids.org/includes/javascript/bridge.urls.js"></script>
<script type="text/javascript" src="https://pbskids.org/includes/javascript/bridge.js"></script></head>
</head>

<body>
<!-- PBS Global Kids include -->


<!-- Google Tag Manager --> 
<noscript>
  <iframe src="//www.googletagmanager.com/ns.html?id=GTM-MR8JHB" height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript> 
<script>
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
   var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); 
})(window,document,'script','dataLayer','GTM-MR8JHB');
</script> 
<!-- End Google Tag Manager -->

<script type="text/javascript">
var GA_setvar;
(function() {
 var getCookie = function(c_name) {
     if (document.cookie.length>0) {
         c_start=document.cookie.indexOf(c_name + "=");
         if (c_start!=-1) {
             c_start=c_start + c_name.length+1;
             c_end=document.cookie.indexOf(";",c_start);
             if (c_end==-1) c_end=document.cookie.length;
             return unescape(document.cookie.substring(c_start,c_end));
         }
     }
     return "";
 };

 var pbskids_wested = getCookie('pbskids.wested');

 if(pbskids_wested){
     GA_setvar = {pbskids_wested: pbskids_wested};
 }

 //Determines if user is logged in
 var pbskids_username = getCookie('pbskids.username');
 //Determines if account is new
 var returning = getCookie('pbskids.returning');

 GA_customvar = {};

 var ua_codes = "UA-4005067-1,UA-4005001-1,UA-3966576-1,UA-3999950-1,ET-3999950-2"; 
 var ua_codes_list = ua_codes.split(',');

 var login_info;
 //Setup log in info custom variable string
 if (pbskids_username){
    login_info = "l=1";
    
    if(returning){
      login_info += "&r=1";
    }
    else{
      login_info += "&r=0";
    }
 }
 else{
    login_info = "l=0&r=0";
 } 

 for (i=0; i <  ua_codes_list.length; i++){
  var cv_array = [["GO login tracking", login_info, 2]];
  GA_customvar[ua_codes_list[i]] = cv_array;
 }

})();

</script>

<script id="pbskids-headband-script" type="text/javascript" src="/pbs-kids-headband/js/headband.js?v=16"></script>
<script type='text/javascript' src='https://pbskids.org/js/loader/lib/PBS.KIDS.require.js' data-main='/js/loader/loaders/producer-legacy.require.config.js'></script>

<script type="text/javascript">
var GA_env = { ua_list: "UA-4005067-1,UA-4005001-1,UA-3966576-1,UA-3999950-1,ET-3999950-2" };

GA_env.vars = { localized: 0 };

var GA_jshost = (("https:" == document.location.protocol) ? "https://ssl." : "https://www.");
document.write(unescape("%3Cscript src='" + GA_jshost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script src="/js/ga-4db5d466.js" type="text/javascript"></script>

<!-- Begin comScore Tag -->
<script>
  var _comscore = _comscore || [];
  _comscore.push({ c1: "2", c2: "3005420" });
  (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = (document.location.protocol == "https:" ? "https://sb" : "https://b") + ".scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
  })();
</script>
<noscript>
  <img src="https://b.scorecardresearch.com/p?c1=2&c2=3005420&cv=2.0&cj=1" />
</noscript>
<!-- End comScore Tag -->




<!-- end bbinclude -->

<div id="coastline">
		<div id="topNav">
		<!-- #bbinclude "nav.pl"  #section#="games"-->
			<a href="/pbskidsgo/" title="go to PBSKids Go" id="pbsLogo">PBS Kids Go!</a>
			<a href="/arthur/index.html" title="go to Arthur site" id="arthurLogo">Arthur</a>
	
			<ul>
				<li id="navFriends"><a href="/arthur/friends/index.html">Friends</a></li>
				<li id="navGames" class="selected"><a href="/arthur/games/index.html">Games</a></li>
				<li id="navVideos"><a href="/arthur/video/index.html">Video</a></li>
				<li id="navPrints"><a href="/arthur/print/index.html">Print</a></li>
				<li id="navClubs"><a href="/arthur/clubs/index.html">Clubs</a></li>
				<li id="navPT"><a href="/arthur/parentsteachers/index.html">Parents &amp; Teachers</a></li>
	
			</ul>

		</div>
<!-- end bbinclude -->
		<div id="content" class="comicbg">
<div class="ruler"></div>
			<div id="mainFeature">
				<img src="../../i/games/comic_header.gif" width="828" height="75" border="0" alt="Comic Creator" id="fo_header"/>
				<div id="swf_content">
					<div id="flashcontent" class="comiccreator">
						<div id="ccGame">
    <div id="sticker-ui">
       <!-- <div id="tracer"></div>-->
        <div id="screen-overlay" class="inactive">
            <div id="no-support" class="inactive"><b>Arthur's Comic Creator</b> requires technology that is only supported in modern browsers. If you would like to make a sticker, please use one of the following browsers: IE 9 and 10, Firefox, Chrome, Safari, Opera.</div>
            <div id="clear-all-prompt" class="inactive"><button class="prompt-btn btn-no" title="Don't Clear All">No</button><button class="prompt-btn btn-yes" title="Clear All">Yes</button></div>
        </div>

        <div id="canvas-mask"> <div id="sticker-canvas"></div></div>
        
        <div id="sticker-ui-holder">
            <!-- StickerSize Tooltip -->
           <ul class="sticker-ui-contols"> <!-- To have tools follow sticker add class follow -->
               <li class="change-size">
                    <button class="make-bigger size-btn" title="Make Sticker Bigger">Make Sticker Bigger</button>
                </li>
                <li class="change-size"><button class="make-smaller size-btn" title="Make Sticker Smaller">Make Sticker Smaller</button></li>
                <li class="change-rotate-right"><button class="rotate-right rotate-btn" title="Rotate Sticker Right">Rotate Sticker Right</button></li>
                <li class="change-rotate-left"><button class="rotate-left rotate-btn" title="Rotate Sticker Left">Rotate Sticker Left</button></li>
                <li class="flip-sticker"><button id="flip-sticker-action" title="Flip Sticker">Flip</button></li>
                <li class="delete-sticker"><button id="delete-sticker-action" title="Delete This Sticker">Delete</button></li>
            </ul>
            <!-- End StickerSize Tooltip -->
          <!--<span class="sticker-poof"></span>-->
        </div>

        
        <!--<button id="move-stage-right" title="Move Stage right"> move stage left</button>
        <button id="move-stage-left" title="Move Stage left"> move stage right</button>-->

        <div id="myTabs">
            <ul id="tabs-nav">
                <li id="nav-char"><button>Characters</button></li>
                <li id="nav-bkg"><button>Background</button></li>
                <li id="nav-prop"><button>Props</button></li>
                <li id="nav-text"><button>Text</button></li>
            </ul>
            <div id="tabschar" class="tab-content">
                <aside class="sheet-actions graphic-ui">
                    <button class="sheet-up-action">Prev</button>
                    <button class="sheet-down-action active">Next</button>
                 </aside>
                <div class="sticker-sheet graphic-ui wide" type="graphic" tags="character"></div>
            </div>
            <div id="tabsbkg" class="tab-content">
                 <div class="tool-buttons">
                    <aside class="sheet-actions graphic-ui">
                    <button class="sheet-up-action">Prev</button>
                    <button class="sheet-down-action active">Next</button>
                 </aside>
                <div class="sticker-sheet graphic-ui wide" type="background"></div>
                </div>
            </div>
            <div id="tabsprop" class="tab-content">
                <aside class="sheet-actions graphic-ui">
                    <button class="sheet-up-action">Prev</button>
                    <button class="sheet-down-action active">Next</button>
                 </aside>
                <div class="sticker-sheet graphic-ui wide" type="graphic" tags="prop"></div>
            </div>
            <div id="tabstext" class="tab-content">
                <aside class="sheet-actions graphic-ui">
                    <button class="sheet-up-action">Prev</button>
                    <button class="sheet-down-action active">Next</button>
                 </aside>
                <div class="sticker-sheet graphic-ui wide" type="text"></div>
            </div>
        </div>

        <div id="sticker-tools">
            <ul>
                <li class="tool-buttons pushy">
                    <button id="clear-all">Clear All</button>
                </li>
                
                					
					<li class="tool-buttons pushy right">   
                    <button id="print-sticker">Print Sticker</button>
					</li>
					<li class="tool-buttons pushy right">   
						<button id="save-sticker">Save Sticker (to desktop)</button>
					</li>
				                
               <!--<li class="tool-buttons pushy right">   
                    <button id="print-sticker">Print Sticker</button>
                </li>
                <li class="tool-buttons pushy right">   
                    <button id="save-sticker">Save Sticker (to desktop)</button>
                </li>-->
              <!--  <li class="tool-buttons tabby">   
                    <button id="background-trigger">Choose A Background</button>
		            <div class="sticker-sheet" type="background" ></div>
                </li>  -->  
           </ul>
        </div> 
         

    </div> <!-- End Sticker UI    -->
</div>
					</div>
					<script type="text/javascript">
				   alert('ATTENTION: The non-flash version of the Comic Creator is mostly broken. This is due to missing assets, which will likely be never recovered. Use at your own discretion, or use the Flash version instead.');
				   var fo = new SWFObject("comicloader.swf", "comiccreator", "800", "451", "9", "#ffffff");
				   fo.addParam("allowScriptAccess", "always");
				//  PBS_enable_cdn(fo);
				   fo.write("flashcontent");
					</script>
				</div>
			</div>
			<div id="relatedContent">
				<ul>
				<li><a href="/arthur/friends/sue_ellen/index.html" id="rcSueEllen">Sue Ellen</a></li>
				<li><a href="/arthur/video/index.html" id="rcVideo">Video</a></li>
				<li><a href="/arthur/games/moviemaker/index.html" id="rcMovieMaker">Movie Maker</a></li>
				</ul>
			</div>
		</div>
<!-- #bbinclude "footer.pl" -->
		<div id="footer">
			<div class="ruler"></div>
			<div id="footerContainer">
				<ul id="footerMainNav"><li><a href="/arthur/index.html">Home</a></li>
				<li><a href="/arthur/friends/index.html">Friends</a></li>
				<li><a href="/arthur/games/index.html">Games</a></li>
				<li><a href="/arthur/video/index.html">Video</a></li>
				<li><a href="/arthur/print/index.html">Print</a></li>
				<li><a href="/arthur/clubs/index.html">Clubs</a></li>
				<li><a href="/arthur/find/index.html">Find</a></li></ul>
				
				<ul id="footerSubNav"><li><a href="/arthur/parentsteachers/index.html">Parents & Teachers</a></li>
				<li><a href="/arthur/parentsteachers/help/index.html">Need Help?</a></li>
				<li><a href="/buster/index.html"><div class="wrap">Visit POSTCARDS FROM BUSTER</div></a></li>
				<li><a href="https://sgptv.org/programs/view/Arthur">Program Sponsorship</a></li>
				<li><a href="/arthur/parentsteachers/site/song_credits.html">Song and Music Credits</a></li></ul>
				<img src="/arthur/i/footer/footer_rule.gif" width="3" height="174" alt="" border="" class="footer_separator"/>
				<p>All characters and underlying materials (including artwork) &copy; Marc Brown.<br />
				"Arthur" and "D.W." and all of the ARTHUR characters are trademarks of Marc Brown.<br /><a href="/arthur/parentsteachers/site/copyright.html">&copy; 2015 WGBH</a></p>
				<img src="/arthur/i/footer/footer_rule.gif" width="3" height="174" alt="" border="" class="footer_separator"/>
			</div>
		</div>
<!-- end bbinclude -->
</div>
</body>
</html>
