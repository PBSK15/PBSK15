<!DOCTYPE html>


<html class="no-js">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

    <title>PBS KIDS</title>
    <meta name="description" content="Educational games and videos from Curious George, Wild Kratts and other PBS KIDS shows!">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="google-site-verification" content="NjyRvQmxQXVdCCR6hO1ZwwonXUcUjfVMQTGmBZIIpxg">
    <meta name="google-site-verification" content="j5A5uSuPjPPFzFGKFvwbTqYNd3u8FjENJCNJvidRPIA" />

    <link rel="stylesheet" href="/shell/styles/css/home.css">

     <link rel="stylesheet" href="https://pbskids.org/shell/themes/polaroid/styles/theme.css">


    <!--[if lte IE 8]>
    <link rel="stylesheet" href="https://pbskids.org/shell/styles/css/ie_7-8.css">
    <![endif]-->

	<script type="text/javascript">
		// wheel fix
		window.GA_obj = {};
		window.GA_obj.trackEvent = function() {};
	</script>

    <script type="text/javascript" src="https://pbskids.org/shell/js/core/PBS.KIDS.playnice.js"></script>
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="https://pbskids.org/shell/images/content/apple-icon-57x57-precomposed.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://pbskids.org/shell/images/content/apple-icon-72x72-precomposed.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://pbskids.org/shell/images/content/apple-icon-114x114-precomposed.png" />

  </head>
  <body class="home
    polaroid-theme seafoam
  ">
    
       

<?php
	echo($twig->render("template_includes/home_headband_include.html"));
?>



    
    <div role="main" class="wrapper-block">

      <section id="dynamic-theme-container" class="scroll-panel top theme-section eighty">
        <div class="max-wrapper">
          <header role="banner" class="brand ui-audio">
            <hgroup>
              <h1>PBS KIDS</h1>
            </hgroup>
            <a><img data-fallback="https://pbskids.org/shell/images/content/pbs-kids-logo.png" src="/shell/images/content/pbs-kids-logo.svg" /></a>
          </header>

          <nav class="nav-buttons">
            <a class="phat-button tall games right ui-audio" href="games/" target="_top"><em><i class="icon"></i>Games</em></a>
            <a class="phat-button tall videos left ui-audio" href="video/" target="_top"> <em><span class="icon"></span>Videos</em> </a>
          </nav>
          <article id="the-wheel-canvas" class="open">
            <div id="wheel-ui">
              <h2 class="bubble-title"></h2>

              <ul id="wheel-fallback" class="handpicked-shows">
                <!-- Fallback HTML show-bubbles go here -->
              </ul>
            </div>
            
            <svg id="wheel-event-detector" xmlns="https://www.w3.org/2000/svg" version="1.1">
			  <circle class="tap-event-tigger" style="pointer-events:auto;" cx="451" cy="344" r="300" fill="red" fill-opacity="0"></circle>
			</svg>
			
			<span id="the-wheel-stage"><!-- Init Canvas Wheel Here --></span>
          </article>
        </div>
        
        <div id="theme-stage">
            <!-- Render Theme Content -->

            <div id="polaroid-theme-stage" class="theme-big-active">
    <div class="snap-stage">
		<svg version="1.1" id="flash-svg" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 290 290">
		    <radialGradient id="flash_gradient" cx="145.0046" cy="145.0046" r="145.0046" gradientUnits="userSpaceOnUse">
			    <stop offset="0" style="stop-color:#FFFFFF"></stop>
			    <stop offset="0" class="slider" style="stop-color:#FFFFFF;stop-opacity:0.8741"></stop>
			    <stop offset="1" style="stop-color:#FFFFFF;stop-opacity:0"></stop>
		    </radialGradient>
		    <circle fill="url(#flash_gradient)" cx="145" cy="145" r="145"></circle>
		</svg>
		<svg id="camera-svg" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" x="0px" y="0px"
		 width="85px" height="132px" viewBox="0 0 85 132">
		 	<polygon id="camera-arrow" fill="#FFFFFF" points="48.682,24.93 48.363,2.064 35.229,2.064 36.078,24.87 23.167,24.81 42.218,44.018 63.236,24.998 "></polygon>
		 	
			<g id="camera-button" data-action="photo-trigger">
				<rect x="8.107" y="53.707" fill="#1A3139" width="13.514" height="12.182"></rect>
				<line fill="none" stroke="#3D575E" stroke-width="2" stroke-miterlimit="10" x1="12.151" y1="55.375" x2="12.151" y2="62.132"></line>
				<line fill="none" stroke="#3D575E" stroke-width="2" stroke-miterlimit="10" x1="16.891" y1="55.375" x2="16.891" y2="62.132"></line>
				<path fill="#3D575E" d="M8.107,53.707h13.514C21.621,53.707,15.529,60.773,8.107,53.707z"></path>
				<rect x="65.959" y="53.515" fill="#1A3139" width="10.642" height="13.705"></rect>
				<rect y="62.132" fill="#CFD5D8" width="84.455" height="54.747"></rect>
				<polygon fill="#CFD5D8" points="59.456,65.037 24.998,65.037 31.654,50.849 52.802,50.849"></polygon>
				<rect y="71.273" fill="#1A3139" width="84.455" height="35.133"></rect>
				<rect x="36.137" y="57.402" fill="#1A3139" width="12.837" height="7.432"></rect>
				<circle fill="#293F44" cx="5.743" cy="78.368" r="2.534"></circle>
				<circle fill="#293F44" cx="15.06" cy="78.368" r="2.534"></circle>
				<circle fill="#293F44" cx="5.743" cy="91.677" r="2.534"></circle>
				<circle fill="#293F44" cx="10.135" cy="84.955" r="2.533"></circle>
				<circle fill="#293F44" cx="10.135" cy="98.13" r="2.533"></circle>
				<circle fill="#293F44" cx="15.06" cy="91.677" r="2.534"></circle>
				<circle fill="#293F44" cx="69.084" cy="78.368" r="2.534"></circle>
				<circle fill="#293F44" cx="78.401" cy="78.368" r="2.534"></circle>
				<circle fill="#293F44" cx="69.084" cy="91.677" r="2.534"></circle>
				<circle fill="#293F44" cx="73.476" cy="84.955" r="2.534"></circle>
				<circle fill="#293F44" cx="73.476" cy="98.13" r="2.534"></circle>
				<circle fill="#293F44" cx="78.401" cy="91.677" r="2.534"></circle>
				<circle fill="#3D575E" cx="42.832" cy="91.164" r="21.727"></circle>
				<circle fill="#1BE8CF" cx="42.833" cy="91.164" r="13.522"></circle>
		
				<ellipse transform="matrix(0.7071 0.7071 -0.7071 0.7071 72.2723 -1.6654)" fill="#FFFFFF" cx="38.146" cy="86.408" rx="3.381" ry="5.071"></ellipse>
				<path fill="#3D575E" d="M65.959,53.515h10.642C76.601,53.515,71.926,60.217,65.959,53.515z"></path>
			</g>
		</svg>
	</div>
	
	<div class="theme-fallback">
	   
		<nav id="fallback-headshots">
			<ul>
				<li id="headshot-one" class="headshot">
					<a href="" class="show-link">	
						<em class="show-title"></em>
						<img class="show-graphic" src="" />
					</a>
				</li>
				
				<li id="headshot-two" class="headshot">
					<a href="" class="show-link">	
						<em class="show-title"></em>
						<img class="show-graphic" src="" />
					</a>
				</li>
				
				<li id="headshot-three" class="headshot">
					<a href="" class="show-link">	
						<em class="show-title"></em>
						<img class="show-graphic" src="" />
					</a>
				</li>
			</ul>
        </nav>
	</div>
    
</div>

<div class="max-wrapper theme-mini-wrapper">
    <img class="theme-mini-static" src='/shell/themes/polaroid/images/polaroid-mini.svg' />
</div>

 <!-- Get Savage and Theme Content JS -->

<script src='https://code.createjs.com/soundjs-0.5.2.min.js'></script>
<script src='/shell/js/lib/snap.svg-min.js'></script>
<script src='/shell/themes/polaroid/js/vendor/pixi.js'></script>
<script type="text/javascript">
var _themeJS = '/shell/themes/polaroid/js/theme';
</script>

<!-- End: Savage and Theme Content JS -->	 

            <!-- End: Render Theme Content -->
        </div>
      </section>

      <section id="6-to-8" class="scroll-panel sub magenta">
        <div class="max-wrapper">
          <button class="scroll-arrow down phat-button">
            Next Frame
          </button>

          <article class="content-col grid-tabs wide">

            <!-- Render New Games Panel -->

            
            <h2 class="panel-head toggle-flag active" data-sibling-panel="new-list">New Games</h2>

<ul id="new-list" class="promo-grid tabbed active">
        	
	<li class="grid-item new small-view  ">
		<a class="promo-graphic" href="https://pbskids.org/wildkratts/games/capture-the-fishmobiles/">
			<img data-carson-src="/pbskids/shell/images/content/games/wild-kratts-capture-the-fishmobiles.jpg" data-carson-size="medium" />
		</a>
	</li>
		
	<li class="grid-item new small-view  ">
		<a class="promo-graphic" href="https://pbskids.org/lunchlab/games/food-truck">
			<img data-carson-src="/pbskids/shell/images/content/games/fizzys-lunch-lab-fizzys-food-truck.jpg" data-carson-size="medium" />
		</a>
	</li>
		
	<li class="grid-item new small-view last ">
		<a class="promo-graphic" href="https://pbskids.org/plumlanding/games/break_it_down/">
			<img data-carson-src="/pbskids/shell/images/content/games/plum-landing-break-it-down.jpg" data-carson-size="medium" />
		</a>
	</li>
		
	<li class="grid-item new small-view  ">
		<a class="promo-graphic" href="https://pbskids.org/curiousgeorge/games/secret_agent/">
			<img data-carson-src="/pbskids/shell/images/content/games/curious-george-secret-agent-george.jpg" data-carson-size="medium" />
		</a>
	</li>
		
	<li class="grid-item new   ">
		<a class="promo-graphic" href="https://pbskids.org/sesame/games/abbys-sandbox-search/">
			<img data-carson-src="/pbskids/shell/images/content/games/sesame-street-abbys-sandbox-search.jpg" data-carson-size="medium" />
		</a>
	</li>
		
	<li class="grid-item new  last ">
		<a class="promo-graphic" href="https://www.pbskids.org/sesame/games/oscars-rotten-ride/">
			<img data-carson-src="/pbskids/shell/images/content/games/sesame-street-oscars-rotten-ride_1.jpg" data-carson-size="medium" />
		</a>
	</li>
		
	<li class="grid-item new   ">
		<a class="promo-graphic" href="https://pbskids.org/plumlanding/games/seed_racer/">
			<img data-carson-src="/pbskids/shell/images/content/games/plum-landing-seed-racer.jpg" data-carson-size="medium" />
		</a>
	</li>
		
	<li class="grid-item new   ">
		<a class="promo-graphic" href="https://pbskids.org/peg/games/highlight-zone">
			<img data-carson-src="/pbskids/shell/images/content/games/peg-cat-highlight-zone.jpg" data-carson-size="medium" />
		</a>
	</li>
		
	<li class="grid-item new  last ">
		<a class="promo-graphic" href="https://pbskids.org/kartkingdom/">
			<img data-carson-src="/pbskids/shell/images/content/games/kart-kingdom-kart-kingdom.jpg" data-carson-size="medium" />
		</a>
	</li>
	
</ul>

            

            <!-- End: New Popular Games Panel -->

            <!-- Render Popular Games Panel -->

            
            <h2 class="panel-head toggle-flag" data-sibling-panel="popular-list">Popular Games</h2>

<ul id="popular-list" class="promo-grid tabbed">
        	
	<li class="grid-item popular small-view  ">
		<a class="promo-graphic" href="https://pbskids.org/oddsquad/games/catchthecentigurps/">
			<img data-carson-src="/pbskids/shell/images/content/games/odd-squad-catch-the-centigurps.jpg" data-carson-size="medium" />
		</a>
	</li>
		
	<li class="grid-item popular small-view  ">
		<a class="promo-graphic" href="https://www.pbskids.org/plumlanding/games/mangroovin/index.html">
			<img data-carson-src="/pbskids/shell/images/content/games/plum-landing-mangroovin.jpg" data-carson-size="medium" />
		</a>
	</li>
		
	<li class="grid-item popular small-view last ">
		<a class="promo-graphic" href="https://pbskids.org/curiousgeorge/games/george_brings_spring/george_brings_spring.html">
			<img data-carson-src="/pbskids/shell/images/content/games/curious-george-george-brings-spring.jpg" data-carson-size="medium" />
		</a>
	</li>
		
	<li class="grid-item popular small-view  ">
		<a class="promo-graphic" href="https://pbskids.org/peg/adventures/chicken-space">
			<img data-carson-src="/pbskids/shell/images/content/games/peg-cat-chickens-in-space_1.jpg" data-carson-size="medium" />
		</a>
	</li>
		
	<li class="grid-item popular   ">
		<a class="promo-graphic" href="https://pbskids.org/cyberchase/math-games/rescue-ecotopia/">
			<img data-carson-src="/pbskids/shell/images/content/games/cyberchase-rescue-ecotopia.jpg" data-carson-size="medium" />
		</a>
	</li>
		
	<li class="grid-item popular  last ">
		<a class="promo-graphic" href="https://pbskids.org/designsquad/build/">
			<img data-carson-src="/pbskids/shell/images/content/games/design-squad-stuff-spinner.jpg" data-carson-size="medium" />
		</a>
	</li>
		
	<li class="grid-item popular   ">
		<a class="promo-graphic" href="https://pbskids.org/wildkratts/games/animal-match/">
			<img data-carson-src="/pbskids/shell/images/content/games/wild-kratts-animal-match.jpg" data-carson-size="medium" />
		</a>
	</li>
		
	<li class="grid-item popular   ">
		<a class="promo-graphic" href="https://www.pbskids.org/sesame/games/dress-time">
			<img data-carson-src="/pbskids/shell/images/content/games/sesame-street-elmo-and-abbys-dress-up-time_6.jpg" data-carson-size="medium" />
		</a>
	</li>
		
	<li class="grid-item popular  last ">
		<a class="promo-graphic" href="https://www.pbskids.org/plumlanding/games/ecosystem/mountain_scramble.html">
			<img data-carson-src="/pbskids/shell/images/content/games/plum-landing-mountain-scramble.jpg" data-carson-size="medium" />
		</a>
	</li>
	
</ul>

            

            <!-- End: Render Popular Games Panel -->

            <!-- Render Hard Games Panel -->

            
            <h2 class="panel-head toggle-flag" data-sibling-panel="hard-list">Hard Games</h2>

<ul id="hard-list" class="promo-grid tabbed">
        	
	<li class="grid-item hard small-view  ">
		<a class="promo-graphic" href="https://pbskids.org/kartkingdom/">
			<img data-carson-src="/pbskids/shell/images/content/games/kart-kingdom-kart-kingdom.jpg" data-carson-size="medium" />
		</a>
	</li>
		
	<li class="grid-item hard small-view  ">
		<a class="promo-graphic" href="https://pbskids.org/zoom/games/3puckchuck/">
			<img data-carson-src="/pbskids/shell/images/content/games/zoom-3-puck-chuck.jpg" data-carson-size="medium" />
		</a>
	</li>
		
	<li class="grid-item hard small-view last ">
		<a class="promo-graphic" href="https://pbskids.org/wildkratts/games/ride-on-remora/">
			<img data-carson-src="/pbskids/shell/images/content/games/wild-kratts-ride-on-remora.jpg" data-carson-size="medium" />
		</a>
	</li>
		
	<li class="grid-item hard small-view  ">
		<a class="promo-graphic" href="https://pbskids.org/catinthehat/games/gravity.html">
			<img data-carson-src="/pbskids/shell/images/content/games/the-cat-in-the-hat-gravity-a-boing-boing_1.jpg" data-carson-size="medium" />
		</a>
	</li>
		
	<li class="grid-item hard   ">
		<a class="promo-graphic" href="https://pbskids.org/fetch/games/minigolf/index.html">
			<img data-carson-src="/pbskids/shell/images/content/games/fetch-with-ruff-ruffman-monumental-mini-golf.jpg" data-carson-size="medium" />
		</a>
	</li>
		
	<li class="grid-item hard  last ">
		<a class="promo-graphic" href="https://pbskids.org/electriccompany/pranksterplanet/part2/">
			<img data-carson-src="/pbskids/shell/images/content/games/the-electric-company-prankster-planet-reverse-a-ball.jpg" data-carson-size="medium" />
		</a>
	</li>
		
	<li class="grid-item hard   ">
		<a class="promo-graphic" href="https://www.pbskids.org/oddsquad/games/codebreaker/">
			<img data-carson-src="/pbskids/shell/images/content/games/odd-squad-code-breaker.jpg" data-carson-size="medium" />
		</a>
	</li>
		
	<li class="grid-item hard   ">
		<a class="promo-graphic" href="https://pbskids.org/chuck/roadtrip.html">
			<img data-carson-src="/pbskids/shell/images/content/games/chuck-vanderchuck-road-trip.jpg" data-carson-size="medium" />
		</a>
	</li>
		
	<li class="grid-item hard  last ">
		<a class="promo-graphic" href="https://pbskids.org/designsquad/games/fidgit_factory/">
			<img data-carson-src="/pbskids/shell/images/content/games/design-squad-fidgit-factory.jpg" data-carson-size="medium" />
		</a>
	</li>
	
</ul>

            

            <!-- End: Render Hard Games Panel -->

            <div class="html-fun">
              
              <h2 class="panel-head toggle-flag static">Games</h2>

<ul id="no-flash-list" class="promo-grid">
        	
	<li class="grid-item small-view  ">
		<a class="promo-graphic" href="https://pbskids.org/plumlanding/games/break_it_down/">
			<img data-carson-src="/pbskids/shell/images/content/games/plum-landing-break-it-down.jpg"  data-carson-size="medium" />
		</a>
	</li>
		
	<li class="grid-item small-view  ">
		<a class="promo-graphic" href="https://pbskids.org/peg/games/highlight-zone">
			<img data-carson-src="/pbskids/shell/images/content/games/peg-cat-highlight-zone.jpg"  data-carson-size="medium" />
		</a>
	</li>
		
	<li class="grid-item small-view last ">
		<a class="promo-graphic" href="https://pbskids.org/daniel/stories/neighborhood-clean-up/">
			<img data-carson-src="/pbskids/shell/images/content/games/daniel-tigers-neighborhood-neighborhood-clean-up.jpg"  data-carson-size="medium" />
		</a>
	</li>
		
	<li class="grid-item small-view  ">
		<a class="promo-graphic" href="https://www.pbskids.org/thomasandfriends/games/track-repair/">
			<img data-carson-src="/pbskids/shell/images/content/games/thomas-friends-track-repair.jpg"  data-carson-size="medium" />
		</a>
	</li>
		
	<li class="grid-item   ">
		<a class="promo-graphic" href="https://www.pbskids.org/sesame/games/oscars-rotten-ride/">
			<img data-carson-src="/pbskids/shell/images/content/games/sesame-street-oscars-rotten-ride_1.jpg"  data-carson-size="medium" />
		</a>
	</li>
		
	<li class="grid-item  last ">
		<a class="promo-graphic" href="https://pbskids.org/kartkingdom/">
			<img data-carson-src="/pbskids/shell/images/content/games/kart-kingdom-kart-kingdom.jpg"  data-carson-size="medium" />
		</a>
	</li>
	
</ul>
              
            </div>

            <ul class="promo-grid precious-felt-box">
              <li class="grid-item empty"><img data-fallback='/shell/images/present/felt-slot.png' src='/shell/images/present/felt-slot.svg' />
              </li>
              <li class="grid-item empty"><img data-fallback='/shell/images/present/felt-slot.png' src='/shell/images/present/felt-slot.svg' />
              </li>
              <li class="grid-item empty last"><img data-fallback='/shell/images/present/felt-slot.png' src='/shell/images/present/felt-slot.svg' />
              </li>
              <li class="grid-item empty"><img data-fallback='/shell/images/present/felt-slot.png' src='/shell/images/present/felt-slot.svg' />
              </li>
              <li class="grid-item empty"><img data-fallback='/shell/images/present/felt-slot.png' src='/shell/images/present/felt-slot.svg' />
              </li>
              <li class="grid-item empty last"><img data-fallback='/shell/images/present/felt-slot.png' src='/shell/images/present/felt-slot.svg' />
              </li>
              <li class="grid-item empty"><img data-fallback='/shell/images/present/felt-slot.png' src='/shell/images/present/felt-slot.svg' />
              </li>
              <li class="grid-item empty"><img data-fallback='/shell/images/present/felt-slot.png' src='/shell/images/present/felt-slot.svg' />
              </li>
              <li class="grid-item empty last"><img data-fallback='/shell/images/present/felt-slot.png' src='/shell/images/present/felt-slot.svg' />
              </li>
            </ul>

            <span class="the-pusher"></span>

            <a class="phat-button show-all games" href="games/"><em><i class="icon"></i> <span>All Games</span></em></a>

            
            <ul class="timely-badges">

              <li class="badge bar-orange">
	          <a href="https://pbskids.org/writerscontest/"> <em>Writers Contest 2013</em> <img data-fallback="/shell/images/content/badges/badge_writers-contest-2013.png" src="/shell/images/content/badges/badge_writers-contest-2013.svg"> </a>
	      </li>

              <li class="badge bar-blue">
	          <a href="https://pbskids.org/hooper/"> <em>Hooper</em> <img data-fallback="/shell/images/content/badges/badge_hooper.png" src="/shell/images/content/badges/badge_hooper.svg"> </a>
	      </li>

              <li class="badge bar-green">
	          <a href="https://pbskids.org/go/studio/"> <em>Cartoon Studio</em> <img data-fallback="/shell/images/content/badges/badge_cartoon-studio.png" src="/shell/images/content/badges/badge_cartoon-studio.svg"> </a>
	      </li>

              <li class="badge bar-orange">
	          <a href="https://pbskids.org/fetch/ruff/"> <em>Ruffman</em> <img data-fallback="/shell/images/content/badges/badge_ruffman.png" src="/shell/images/content/badges/badge_ruffman.svg"> </a>
	      </li>

  <li class="badge empty">
    <img data-fallback="https://pbskids.org/shell/images/present/timely-circle.png" src="https://pbskids.org/shell/images/present/timely-circle.svg">
  </li>
</ul>
            

          </article>

          <article id="mega-promo" class="content-col pancake-feature">
            <a class="standard-version" href="https://pbskids.org/outdoors/">                                                                                                                     
                <img class="feature-poster" data-carson-src="/pbskids/shell/images/content/mega-promos/megapromo_explore.jpg" data-carson-rule="retina-optimized" />
            </a>
            <a class="no-flash-version" href="https://pbskids.org/outdoors/">
                <img class="feature-poster" data-carson-src="/pbskids/shell/images/content/mega-promos/megapromo_explore.jpg" data-carson-rule="retina-optimized" />
            </a>
          </article>

        </div>
      </section>

    </div>
    <!-- role = Main -->

    <div data-build="scripts" class="hidden">
      <script type='text/javascript' src='/js/loader/lib/PBS.KIDS.require.js' data-main='/js/loader/loaders/home.require.config.js' ></script>
    </div>
	
	
	



	<?php
		echo($twig->render("template_includes/user_logged_in_script.html"));
	?>






	




    
    

    
  </body>
</html>
