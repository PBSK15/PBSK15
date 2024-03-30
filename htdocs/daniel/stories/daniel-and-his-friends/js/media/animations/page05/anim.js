<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Whoops!</title>
    
    <link href="/whoops-page/css/whoops.css" rel="stylesheet" type="text/css">
    <!--[if IE]><link href="css/whoopsIE.css" rel="stylesheet" type="text/css"><![endif]-->
    
    <script type="text/javascript" src="//code.jquery.com/jquery-1.11.3.min.js"></script>
    <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
  </head>
  <body>
    
    <div id="wrapper">
    
      <div id="kidsLogo"><a href="http://pbskids.org/"><img width="100" border="0" height="100" alt="PBS kids logo." src="/whoops-page/images/kidsLogo.svg" data-audio-type="pbsKids"></a></div>
      
      <div id="clickyBoxes">
          
          <div id="fallingKidsbox">
              <div class="kidOne slideDown"></div>
              <div class="kidTwo slideDown2"></div>
              <div class="kidThree slideDown3"></div>
          </div>
          
          <h1 id="whoopsText">
              <span class="whoopsTextbig" data-audio-type="whoops">Whoops!<br></span>
              <span class="whoopsTextsmall">We can't seem to find that page. Check to see if that address is correct or pick one of the following options below:</span>
          </h1>
              
              <div class="boxButton" data-audio-type="pbsKids2"><a href="http://pbskids.org/"><img width="237" border="0" height="133" alt="PBS kids home button" src="/whoops-page/images/kidsHome.svg"></a></div>
              <div class="boxButton" data-audio-type="videos"><a href="http://pbskids.org/video/"><img width="237" border="0" height="133" alt="Videos" src="/whoops-page/images/videos.svg"></a></div>
              <div class="boxButtonend" data-audio-type="games"><a href="http://pbskids.org/games/"><img width="237" border="0" height="133" alt="Games" src="/whoops-page/images/games.svg"></a></div>
  
          
      </div>
      
      <div id="searchBox">
          <form method="get" action="http://pbskids.org/findit/search_results.html" id="find-it-box" class="search-box">
               <p class="input-group">
                  <label for="searchy-box">The best way to find more fun on pbskids.org is to explore!
                    <br>
                    To search, type a word or phrase into this box:</label>
                  <input id="searchy-box" type="text" name="q" value="" title="search pbs kids." placeholder="Search pbskids.org">
                  <input class="phat-button" type="submit" value="Find It!" data-audio-type="findIt">
              </p>
          </form>
      </div>
      
      
      </div> 
    
    <script type="text/javascript" src="/whoops-page/js/sound.js"></script>
    <script type="text/javascript" src="/whoops-page/js/whoops.js"></script>   
  </body>
</html>
