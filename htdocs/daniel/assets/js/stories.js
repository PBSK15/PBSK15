var queue, screen_state, _stage, daniel;

function speakOnHover(className, audioId) {
  $("." + className).bind("mouseenter", function() {
    createjs.Sound.stop();
    createjs.Sound.play(audioId);
    daniel.getArmature().animation.gotoAndPlay("TALK");
  });
}

function addStories() {
  var x = storiesXmlDoc.getElementsByTagName("story"); //set variable to parent node
  for (i = 0; i < x.length; i++) {
    var title = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
    var imagesrc = x[i].getElementsByTagName("thumb")[0].childNodes[0].nodeValue;
    var href = x[i].getElementsByTagName("link")[0].childNodes[0].nodeValue;
    var audioId = x[i].getElementsByTagName("audio")[0].childNodes[0].nodeValue;
    var className = title.replace(/ /g, "-").replace(/\'/, "").toLowerCase();

    title = title.replace(/'/, "&#39;").replace(/"/, "&quot;");

    $('.directory__list').append(
        "<li class='directory__item " + className + "'>"
      +   "<a href='/daniel" + href + "'>"
      +     "<img class='thumbnail' src='/daniel/assets/img/stories/"+imagesrc+"' alt='" + title + "' />"
      +   "</a>"
      + "</li>"
      );

    if ((screen_state == "largest" || screen_state == "large") && !$.browser.mozilla) {
      speakOnHover(className, audioId);
    }
  };

  setupDirectory();
}

function preLoadFinished() {

  if($("html").hasClass("static")) {
    addStories();
    
    // set up the paging list of games, defined in core.js
    setupDirectory();

    // clear the loader
    $(".loader").fadeOut(1000, function() {
      $("#stories").fadeIn(1000);
    });

    return;
  }



  // ----------------------------
  // Dragonbones Character Init
  // ----------------------------

  _stage = new createjs.Stage("canvas--stories");
  
  function onCharacterReady(character){
    _stage.addChild(character);
    dragonBones.animation.WorldClock.clock.add(character.getArmature());
    character.scaleX = character.scaleY = .99;
    character.x = -170;
    character.y = -20;
    character.getArmature().animation.gotoAndPlay("IDLE");
    character.getArmature().addEventListener(dragonBones.events.AnimationEvent.COMPLETE, resume);

    function resume() {
      character.getArmature().animation.gotoAndPlay("IDLE");
    }
  }

  if (screen_state == "largest" || screen_state == "large") {
    var danielLocationData = {
      texture:    queue.getResult("daniel-texture"),
      textureData:  queue.getResult("daniel-texture-data"),
      skeletonData:   queue.getResult("daniel-skeleton-data")
    };
    daniel = new DBCharacterCJS("daniel", danielLocationData, "Storybook_DANIEL", onCharacterReady);

    createjs.Ticker.setFPS(30);
    createjs.Ticker.addEventListener("tick",update);
  }



  var lastLoop = new Date;

  function update(){
    var thisLoop = new Date;
    var fps = Math.round(1000 / (thisLoop - lastLoop));
    lastLoop = thisLoop;
    _stage.update();
    dragonBones.animation.WorldClock.clock.advanceTime(1/fps);
  }

  // Stories - bring in xml data
  // ------------------------------------------------------ 
  addStories();
  
  // clear the loader
  $(".loader").fadeOut(1000, function() {
    $("#stories").fadeIn(1000);
  });
}

$( document ).ready(function() {
  var width = $('#stories').width();
  
  if (width >= 1350) {
    screen_state = "largest";
  }
  else if (width >= 760) {
    screen_state = "large";
  }
  else {
    screen_state = "small";
  }

  if ($.browser.mozilla) {
    $(".loader").remove();
    $("#stories").show();
    $('html').addClass('static');

    addStories();

    return;
  }

  $.getJSON('/daniel/data/preload-stories.json', function(result) {
    var preLoadManifest = {
      manifest: []
    };

    for (var i in result.manifest) {
      var item = result.manifest[i];
      var sizes = null;
      
      if (item.sizes) {
        sizes = item.sizes.split(' ');
      }

      if (!sizes || sizes.indexOf(screen_state) > -1) {        
        preLoadManifest.manifest.push(item);
      }
    }

    queue = new createjs.LoadQueue();
    queue.installPlugin(createjs.Sound);
    createjs.Sound.alternateExtensions = ["mp3", "ogg"];
    queue.on("complete", preLoadFinished, this);
    queue.loadManifest(preLoadManifest);
  });

  if ($.browser.platform == "ipad" && $.browser.safari) {
    window.onscroll = function() {
      if (daniel) {
        daniel.getArmature().animation.stop(); // it still thinks it's playing at this point
        setTimeout(function() {
          daniel.getArmature().animation.gotoAndPlay("IDLE");
        }, 500);
      }
    }
  }
});