if (Modernizr.touch) {   
    //alert('Touch Screen'); 
    $("body").addClass("mytouchscreen"); 
} else {
    //alert('No Touch Screen');  
} 


if(!FlashDetect.installed){
  var iAmMobile = true;
  var iAmTablet = true;
} else {
	var iAmDesktop = true;
}


if (iAmMobile || iAmTablet) {
  $('.nf').hide();
  $( "body" ).addClass( "bmobtab" );
}

if (iAmDesktop){
  $('.creaturepedia-mobile-message').hide();
} else {
  $('.creaturepedia-desktop').hide();
}


$(".forparents").click(function(){
	$("footer").toggleClass("footer-expanded");
});


  var pxa;
  var sndCtrl = null;
  // Call this on page load
  function initAudio()
  {

    if( pxa )
      return;  // already init'ed

    // Initialize the PxAudio object.
    // Force a minimum 250ms delay between sounds played - this
    // is so we don't overload crappy old Android devices.
    pxa = PxAudio.getInstance({minDelay:250});
    if( !pxa )
    {
      //setStatusMsg('failed to init PxAudio');
      return;  // failed to init
    }
    // Start loading sounds.
    // Script execution will resume in onLoaded()...
    if (iAmDesktop) {
      pxa.loadSounds({a_sound:"/wildkratts/audio/au_games", 
            b_sound:"/wildkratts/audio/au_habitats", 
            c_sound:"/wildkratts/audio/au_videos", 
            d_sound:"/wildkratts/audio/au_creaturepedia", 
            e_sound:"/wildkratts/audio/au_youroom"}, onLoaded, onLoadErr);
    }
  }

  // Callback function invoked after all sounds loaded ok.
  function onLoaded()
  {

    //  Everything initialized & loaded.
    //  Attach sound players to buttons, enable them
    var b1 = document.getElementById('btn1'),
      b2 = document.getElementById('btn2'),
      b3 = document.getElementById('btn3'),
      b4 = document.getElementById('btn4'),
      b5 = document.getElementById('btn5'),
      b6 = document.getElementById('btn6'),
      b7 = document.getElementById('btn7'),
      b8 = document.getElementById('btn8'),
      b9 = document.getElementById('btn9'),
      b10 = document.getElementById('btn10'),
      b11 = document.getElementById('btn11'),
      b12 = document.getElementById('btn12');

      //sndCtrl = pxa.playSound('a_sound');

    b1.onmouseover = function() {
      if(sndCtrl) 
        sndCtrl.stop(); 
      sndCtrl = pxa.playSound('a_sound');
    }

    b2.onmouseover = function() {
      if(sndCtrl) 
        sndCtrl.stop(); 
      sndCtrl = pxa.playSound('b_sound');
    }

      b3.onmouseover = function() {
      if(sndCtrl) 
        sndCtrl.stop(); 
      sndCtrl = pxa.playSound('c_sound');
    }

    b4.onmouseover = function() {
      if(sndCtrl) 
        sndCtrl.stop(); 
      sndCtrl = pxa.playSound('d_sound');
    }

      b5.onmouseover = function() {
      if(sndCtrl) 
        sndCtrl.stop(); 
      sndCtrl = pxa.playSound('e_sound');
    }

  }

function onLoadErr( err )
{
  //setStatusMsg("Failed to load sounds: "+err);
}

// Function to display simple text msgs in page
function setStatusMsg( s )
{
  //document.getElementById('status').innerHTML = s;
}


  initAudio();





function showVideo () {

		var key="hummingbirdgame";
	
	if ( typeof video_keyword != 'undefined')
		key = video_keyword;
		
	//$.colorbox({href:"/wildkratts/videoplayer/?keyword="+encodeURIComponent(key)});
	PKG.overlay("/wildkratts/videoplayer/?keyword="+encodeURIComponent(key));
	
	//PBS.KIDS.$_auth.colorbox.resize({width: '555px', height: '425px'});
	PBS.KIDS.$_auth.colorbox.resize({width: '555', height: '425'});

}


$(document).ready( function() {
if($("#slider").length){
  if(jQuery.support.touch){

    $('#slider').nivoSlider({
        prevText: '', // Prev directionNav text
        nextText: '',  // Next directionNav text
        pauseTime: 6000,
        animSpeed: 400,
        effect: 'slideInFromRight'
    });

    // add mouseover events to the previous- and next-buttons of the slideshow
    // to define a specific animation to each of them
    jQuery('#slider .nivo-nextNav').mouseover( function() {
        jQuery('#slider img').attr("data-transition","slideInFromRight");
    });
    jQuery('#slider .nivo-prevNav').mouseover( function() {
        jQuery('#slider img').attr("data-transition","slideInFromLeft");
    });
    // remove the data-transition attribute on mouseout
    jQuery('#slider .nivo-prevNav, #slider .nivo-nextNav').mouseout( function() {
        jQuery('#slider img').attr("data-transition", "");
    });

    //Then Finish Up swipeleft and swiperight
    $('#slider').bind( 'swipeleft', function( e ) {
        $('#slider img').attr("data-transition","slideInFromRight");
        $('a.nivo-nextNav').trigger('click');
        e.stopImmediatePropagation();
        return false; }
    );

    $('#slider').bind( 'swiperight', function( e ) {
        $('#slider img').attr("data-transition","slideInFromLeft");
        $('a.nivo-prevNav').trigger('click');
        e.stopImmediatePropagation();
        return false; }
    );
  
  } else {
  // initiate the nivo slideshow
    $('#slider').nivoSlider({
        prevText: '', // Prev directionNav text
        nextText: '',  // Next directionNav text
        pauseTime: 6000,
        animSpeed: 300,
        effect: 'slideInFromRight'
    });

    // add mouseover events to the previous- and next-buttons of the slideshow
    // to define a specific animation to each of them
    jQuery('#slider .nivo-nextNav').mouseover( function() {
    jQuery('#slider img').attr("data-transition","slideInFromRight");
    });
    jQuery('#slider .nivo-prevNav').mouseover( function() {
    jQuery('#slider img').attr("data-transition","slideInFromLeft");
    });
    // remove the data-transition attribute on mouseout
    jQuery('#slider .nivo-prevNav, #slider .nivo-nextNav').mouseout( function() {
    jQuery('#slider img').attr("data-transition", "");
    });

  }
}
});


$( window ).load(function() {

  //$("#mrsloth").attr("src","img/home/mister_sloth.gif");
  //$("#rhino").attr("src","img/home/mister_rhino.gif");
  //$("#koki").attr("src","img/home/koki1.gif");
  //$("#jimmy").attr("src","img/home/jimmy.gif");
  //$("#raccoon").attr("src","img/home/mister_raccoon.gif");

  if($("#bird").length){
    var requestAnimFrame = (function(){
        return  window.requestAnimationFrame       ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame    ||
                window.oRequestAnimationFrame      ||
                window.msRequestAnimationFrame     ||
                function(callback, element){
                  window.setTimeout(callback, 1000 / 60);
                };
      })();


    function SpriteSheet(path, frameWidth, frameHeight) {
      this.image = new Image();
      this.frameWidth = frameWidth;
      this.frameHeight = frameHeight;
     
      // calculate the number of frames in a row after the image loads
      var self = this;
      this.image.onload = function() {
        self.framesPerRow = Math.floor(self.image.width / self.frameWidth);
      };
     
      this.image.src = path;
    }

    function Animation(spritesheet, frameSpeed, startFrame, endFrame) {
     
      var animationSequence = [];  // array holding the order of the animation
      var currentFrame = 0;        // the current frame to draw
      var counter = 0;             // keep track of frame rate
     
     animationSequence = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,3,2,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,1,1,1,1,1,1,2,2,2,2,2,2,2];
      

      // Update the animation
      this.update = function() {
     
        // update to the next frame if it is time
        if (counter == (frameSpeed - 1))
          currentFrame = (currentFrame + 1) % animationSequence.length;
     
        // update the counter
        counter = (counter + 1) % frameSpeed;
      };
     
      // draw the current frame
      this.draw = function(x, y) {
        // get the row and col of the frame
        var row = Math.floor(animationSequence[currentFrame] / spritesheet.framesPerRow);
        var col = Math.floor(animationSequence[currentFrame] % spritesheet.framesPerRow);
     
        ctx.drawImage(
          spritesheet.image,
          col * spritesheet.frameWidth, row * spritesheet.frameHeight,
          spritesheet.frameWidth, spritesheet.frameHeight,
          x, y,
          spritesheet.frameWidth, spritesheet.frameHeight);
      };
    }

    function Animation1(spritesheet1, frameSpeed, startFrame, endFrame) {
     
      var animationSequence = [];  // array holding the order of the animation
      var currentFrame = 0;        // the current frame to draw
      var counter = 0;             // keep track of frame rate
     
    /********************** Mr Bird ************************/ 
     animationSequence = [4,4,4,4,4,4,4,4,4,4,1,1,1,1,1,1,1,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,3,2,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4];
      

      // Update the animation
      this.update = function() {
     
        // update to the next frame if it is time
        if (counter == (frameSpeed - 1))
          currentFrame = (currentFrame + 1) % animationSequence.length;
     
        // update the counter
        counter = (counter + 1) % frameSpeed;
      };
     
      // draw the current frame
      this.draw = function(x, y) {
        // get the row and col of the frame
        var row = Math.floor(animationSequence[currentFrame] / spritesheet1.framesPerRow);
        var col = Math.floor(animationSequence[currentFrame] % spritesheet1.framesPerRow);
     
        ctx1.drawImage(
          spritesheet1.image,
          col * spritesheet1.frameWidth, row * spritesheet1.frameHeight,
          spritesheet1.frameWidth, spritesheet1.frameHeight,
          x, y,
          spritesheet1.frameWidth, spritesheet1.frameHeight);
      };
    }

    function Animation2(spritesheet2, frameSpeed, startFrame, endFrame) {
     
      var animationSequence = [];  // array holding the order of the animation
      var currentFrame = 0;        // the current frame to draw
      var counter = 0;             // keep track of frame rate
     
    //animationSequence = [4,4,4,4,4,4,4,4,4,4,1,1,1,1,1,1,1,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,3,2,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4];
    
    /********************** Chris ************************/
    animationSequence = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0];       

      // Update the animation
      this.update = function() {
     
        // update to the next frame if it is time
        if (counter == (frameSpeed - 1))
          currentFrame = (currentFrame + 1) % animationSequence.length;
     
        // update the counter
        counter = (counter + 1) % frameSpeed;
      };
     
      // draw the current frame
      this.draw = function(x, y) {
        // get the row and col of the frame
        var row = Math.floor(animationSequence[currentFrame] / spritesheet2.framesPerRow);
        var col = Math.floor(animationSequence[currentFrame] % spritesheet2.framesPerRow);
     
        ctx2.drawImage(
          spritesheet2.image,
          col * spritesheet2.frameWidth, row * spritesheet2.frameHeight,
          spritesheet2.frameWidth, spritesheet2.frameHeight,
          x, y,
          spritesheet2.frameWidth, spritesheet2.frameHeight);
      };
    }

    function Animation3(spritesheet3, frameSpeed, startFrame, endFrame) {
     
      var animationSequence = [];  // array holding the order of the animation
      var currentFrame = 0;        // the current frame to draw
      var counter = 0;             // keep track of frame rate
     
    //animationSequence = [4,4,4,4,4,4,4,4,4,4,1,1,1,1,1,1,1,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,3,2,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4];
    
    /********************** Martin ************************/
    animationSequence = [0,0,1,1,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0];       

      // Update the animation
      this.update = function() {
     
        // update to the next frame if it is time
        if (counter == (frameSpeed - 1))
          currentFrame = (currentFrame + 1) % animationSequence.length;
     
        // update the counter
        counter = (counter + 1) % frameSpeed;
      };
     
      // draw the current frame
      this.draw = function(x, y) {
        // get the row and col of the frame
        var row = Math.floor(animationSequence[currentFrame] / spritesheet3.framesPerRow);
        var col = Math.floor(animationSequence[currentFrame] % spritesheet3.framesPerRow);
     
        ctx3.drawImage(
          spritesheet3.image,
          col * spritesheet3.frameWidth, row * spritesheet3.frameHeight,
          spritesheet3.frameWidth, spritesheet3.frameHeight,
          x, y,
          spritesheet3.frameWidth, spritesheet3.frameHeight);
      };
    }

    function Animation4(spritesheet4, frameSpeed, startFrame, endFrame) {
     
      var animationSequence = [];  // array holding the order of the animation
      var currentFrame = 0;        // the current frame to draw
      var counter = 0;             // keep track of frame rate
     
     //animationSequence = [4,4,4,4,4,4,4,4,4,4,1,1,1,1,1,1,1,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,3,2,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4];

    /********************** Aviva ************************/    
    animationSequence = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,0];      

      // Update the animation
      this.update = function() {
     
        // update to the next frame if it is time
        if (counter == (frameSpeed - 1))
          currentFrame = (currentFrame + 1) % animationSequence.length;
     
        // update the counter
        counter = (counter + 1) % frameSpeed;
      };
     
      // draw the current frame
      this.draw = function(x, y) {
        // get the row and col of the frame
        var row = Math.floor(animationSequence[currentFrame] / spritesheet4.framesPerRow);
        var col = Math.floor(animationSequence[currentFrame] % spritesheet4.framesPerRow);
     
        ctx4.drawImage(
          spritesheet4.image,
          col * spritesheet4.frameWidth, row * spritesheet4.frameHeight,
          spritesheet4.frameWidth, spritesheet4.frameHeight,
          x, y,
          spritesheet4.frameWidth, spritesheet4.frameHeight);
      };
    }

     
    spritesheet = new SpriteSheet('/wildkratts/img/home/mr_bird.png', 82, 78);
    walk = new Animation(spritesheet, 7, 0, 4);  // speed is second in bracket
  
    spritesheet2 = new SpriteSheet('/wildkratts/img/home/chriskratt.png', 159, 405);
    walk2 = new Animation2(spritesheet2, 7, 0, 4);  // speed is second in bracket  
    spritesheet3 = new SpriteSheet('/wildkratts/img/home/martinkratt.png', 186, 405);
    walk3 = new Animation3(spritesheet3, 7, 0, 4);  // speed is second in bracket  
    spritesheet4 = new SpriteSheet('/wildkratts/img/home/aviva.png', 101, 298);
    walk4 = new Animation4(spritesheet4, 7, 0, 4);  // speed is second in bracket  


    function animate() {
       requestAnimFrame( animate );
       ctx.clearRect(0, 0, 82, 78);

       ctx2.clearRect(0, 0, 159, 405);
       ctx3.clearRect(0, 0, 188, 405);
       ctx4.clearRect(0, 0, 101, 298);
       walk.update();     
       walk.draw(0, 0);
  
       walk2.update();     
       walk2.draw(0, 0);        
       walk3.update();     
       walk3.draw(0, 0);        
       walk4.update();     
       walk4.draw(0, 0);    
     }  


    var canvas = document.getElementById('bird');
    var ctx = canvas.getContext('2d');


    var canvas2 = document.getElementById('chris');
    var ctx2 = canvas2.getContext('2d');

    var canvas3 = document.getElementById('martin');
    var ctx3 = canvas3.getContext('2d');

    var canvas4 = document.getElementById('aviva');
    var ctx4 = canvas4.getContext('2d');
    animate();
}
});