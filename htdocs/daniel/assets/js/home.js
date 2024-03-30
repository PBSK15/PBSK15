var screen_state, old_screen_state, queue, featuredGames, friends_canvas, friends_canvas_sizes, daniel_canvas, daniel_canvas_sizes, daniel_animation_info;
var _stage = {};

function setScreenState() {
  if (screen_state) {
    old_screen_state = screen_state;
  }

  var bg_image_url = $('#home').css("background-image");
  var url_split = bg_image_url.split('/');
  var bg_image = url_split[url_split.length - 1].split('.')[0];


  if (bg_image == "bg-home") {
    screen_state = "largest";
  }
  else if (bg_image == "bg-home-small") {
    screen_state = "large";
  }
  else if (bg_image == "bg-home-beach-large") {
    screen_state = "medium";
  }
  else if (bg_image == "bg-home-beach-medium") {
    screen_state = "small";
  }
  else {
    screen_state = "smallest";
  }
}

document.addEventListener("touchstart", function(){}, true);

function setBackgroundPosition () {

  // ----------------------------------
  // Get Background Position for CSS
  // ----------------------------------
  var screen_percentage;
  var magic_number;
  var canvas_width_daniel = 670;
  var canvas_height_daniel = 790;

  if(screen_state == "medium" || screen_state == "small" || screen_state == "smallest") {
    magic_number = 0;
  } else if(screen_state == "large") {

    screen_percentage = window.innerWidth * 0.4015;
    magic_number = Math.ceil((590 - screen_percentage) * -1);
    canvas_width_daniel = canvas_width_daniel / 2;
    canvas_height_daniel = canvas_height_daniel / 2;

  } else { // (largest)
    screen_percentage = window.innerWidth * 0.6742;
    magic_number = Math.ceil((1178 - screen_percentage) * -1);
  }

  $("#home").css("background-position", magic_number + "px 0px");
}

function fadeFinished() {
  createjs.Sound.play("landing_ambient", {loop: -1});  

  // Note: checks for sceen_state inside, so will run twice on largest (because of trolley animation), but only hit an if once. Refactor.
  if (screen_state != "largest")
  {
    addFeaturedGames();
  } 
  else if (screen_state == "largest" && $.browser.msie) {
    addFeaturedGames();
    _stage.daniel.children[0].getArmature().animation.gotoAndPlay("DIALOG1");
    createjs.Sound.play("landing_daniel_dialogue_001");
  }

  // ------------------
  // On Window Resize
  // ------------------

  $(window).resize(function(){
    setScreenState();
    setBackgroundPosition();    

    // IE9 and 10 need this
    if (friends_canvas) friends_canvas.height(friends_canvas_sizes[screen_state]);    
    if (daniel_canvas) daniel_canvas.height(daniel_canvas_sizes[screen_state]);

    afterResize();
  });

  function afterResize() {
    if (screen_state != "smallest" && screen_state != "small") {
      if (featuredGames && featuredGames.children() && featuredGames.children().size() == 0) {
        addFeaturedGames();
      }
    }

    // if we've gone from not-smallest to smallest, we need to hide the daniel canvas
    if (old_screen_state != "smallest" && screen_state == "smallest") {
      if (daniel_canvas) {
        $(daniel_canvas).hide();
      }
    }
    // if we're going from smallest to not-smallest
    else if (old_screen_state == "smallest" && screen_state != "smallest") {
      if (daniel_canvas) {
        $(daniel_canvas).show();
      }
    }

    // handle friends not appearing if you go from smallest or small to something higher
    if ((old_screen_state == "smallest" || old_screen_state == "small" || old_screen_state == "medium") && (screen_state != "smallest" || screen_state != "small")) {
      // check if the animated friends are there. Add static friends if they're not.
      if (!_stage.friends) {
        $('.friends').addClass('static-friends');
      }
    }
  }

} // end fadeFinished()

// returns a function to be used on update calls (keeps last loop in a safe scope)
function getUpdateFunction() {
  var lastLoop = new Date;
  
  return function() {
    var thisLoop = new Date;
    var fps = Math.round(1000 / (thisLoop - lastLoop));
    lastLoop = thisLoop;
    dragonBones.animation.WorldClock.clock.advanceTime(1/fps);
    for(var prop in _stage) {
      _stage[prop].update();
    }
  }
}

// Builds a Dragonbones character using some assumptions.
// id: if a string, the queue id and dragonbones id will be the same; pass in as an object {queueId: 'foo', dbcId: 'bar'} if they are not the same
function buildCharacter(id, armatureName, display) {
  if (typeof(id) == "string") {
    id = {
      queueId: id,
      dbcId: id
    };
  }

  var location = {
    texture: queue.getResult(id.queueId + "-texture"),
    textureData: queue.getResult(id.queueId + "-texture-data"),
    skeletonData: queue.getResult(id.queueId + "-skeleton-data")
  };
  var dbChar = new DBCharacterCJS(id.dbcId, location, armatureName, function(character) {
    dragonBones.animation.WorldClock.clock.add(character.getArmature());
    
    character_display = character.getArmature().getDisplay();
    character_display.x = display.x;
    character_display.y = display.y;
    character_display.scaleX = character_display.scaleY = display.scale;

    character.getArmature().animation.gotoAndPlay("IDLE");
  });

  return dbChar;
}

// add featured games either when everything else has loaded, or when the trolley animation is completed
function addFeaturedGames(trigger, callback) {
  featuredGames = $('.featured');

  var featured = []; // games and stories collection
  var allGames = gamesXmlDoc.getElementsByTagName("game");
  var hasFlash = !$('html').hasClass('no-flash');  
  for (var i = 0; i < allGames.length; i++) {
    var game = allGames.item(i);
    var isHtml5 = game.getElementsByTagName("html5")[0].childNodes[0].nodeValue == "true";    

    if (hasFlash || isHtml5) {
      featured.push({type: "game", xml: game});
    }
  }

  // need to also randomly pull from the storytelling items
  var allStories = storiesXmlDoc.getElementsByTagName("story");
  for (var i = 0; i < allStories.length; i++) {
    var story = allStories.item(i);
    featured.push({type: "story", xml: story});
  }

  // need to also pull from activities
  var allActivities = activitiesXmlDoc.getElementsByTagName("activity");
  for (var i = 0; i < allActivities.length; i++) {
    var activity = allActivities.item(i);
    featured.push({type: "activity", xml: activity});
  }

  var totalItems = featured.length;

  // ## Uncomment when you want random items back in
  
  // var random_item_1 = Math.floor(Math.random() * totalItems);
  // var random_item_2 = Math.floor(Math.random() * totalItems);

  // while(random_item_1 == random_item_2) {
  //   random_item_2 = Math.floor(Math.random() * totalItems);
  // }


  // ## Hard codes the featured items based on their position
  // ## Comment out when you want it to be random again
  random_item_1 = 12;
  //random_item_2 = 11;

  var random_item_2 = Math.floor(Math.random() * totalItems);

  while(random_item_1 == random_item_2) {
    random_item_2 = Math.floor(Math.random() * totalItems);
  }


  function setFeaturedItem(item) {
    var xml = featured[item].xml;
    var type = featured[item].type;

    var href = xml.getElementsByTagName("link")[0].childNodes[0].nodeValue;    
    var filename = xml.getElementsByTagName("featurethumb")[0].childNodes[0].nodeValue;

    var name;
    var imageSrc;
    if (type == "game") {
      name = xml.getElementsByTagName("name")[0].childNodes[0].nodeValue;
      imageSrc = "assets/img/games/featured/" + filename;
    }
    else if (type == "story") {
      name = xml.getElementsByTagName("title")[0].childNodes[0].nodeValue;
      imageSrc = "assets/img/stories/featured/" + filename;
    }
    else if (type == "activity") {
      name = xml.getElementsByTagName("name")[0].childNodes[0].nodeValue;
      imageSrc = "assets/img/activities/featured/" + filename;
    }
	if(type == "game"){
		if(screen_state == "medium" || screen_state == "large" || screen_state == "largest") {
		  featuredGames.append("<a href='/daniel/games/" + href + "' class='featured--game' alt='" + name + "'><img src='" + imageSrc + "'/></a>");      
		}	
	}
	else if(type == "story"){
		if(screen_state == "medium" || screen_state == "large" || screen_state == "largest") {
		  featuredGames.append("<a href='/daniel" + href + "' class='featured--game' alt='" + name + "'><img src='" + imageSrc + "'/></a>");      
		}	
	}
  else if(type == "activity"){
    if(screen_state == "medium" || screen_state == "large" || screen_state == "largest") {
      featuredGames.append("<a href='/daniel" + href + "' class='featured--game' alt='" + name + "'><img src='" + imageSrc + "'/></a>");      
    } 
  }

  }
  
  if(screen_state == "largest" && trigger == "go" && !$.browser.msie && !$.browser.mozilla) {
    featuredGames.hide();
    
    setTimeout(function() {          
      setFeaturedItem(random_item_1);
      setFeaturedItem(random_item_2);

      featuredGames.fadeIn();

      if (callback) {
        callback();
      }
    }, 1000);
  } else {
    featuredGames.hide();

    setFeaturedItem(random_item_1);
    setFeaturedItem(random_item_2);

    featuredGames.fadeIn();
  };
}

// Specific code for setting up the trolley
function trolleyGo(daniel) {  

  var trolley = $(".trolley");
  var rideTrolleyHTML = "<div class='daniel--ride-trolley'>"
                      +    "<canvas id='canvas--daniel-ride-trolley' width='670' height='790' style='height: 396px;'></canvas>"
                      +  "</div>";

  // Hide standing daniel until trolley animation is done 
  if (screen_state == "largest" && !$.browser.msie) {
    daniel.getArmature().addEventListener(dragonBones.events.AnimationEvent.START, runTrolley);
    daniel.getArmature().addEventListener(dragonBones.events.FrameEvent.BONE_FRAME_EVENT, setTrolleyUnderlay);
    daniel.getArmature().addEventListener(dragonBones.events.AnimationEvent.COMPLETE, replaceDaniel);
    
    $(".daniel--home").hide();
    $(".trolley").append(rideTrolleyHTML);
    setTimeout(function() {
      _stage["daniel-ride-trolley"] = new createjs.Stage("canvas--daniel-ride-trolley");
      _stage["daniel-ride-trolley"].addChild(daniel);
      daniel.getArmature().animation.gotoAndPlay("TROLLEY");

    }, 2000);
  } else if ( screen_state != "smallest" && (screen_state != "largest" && !$.browser.msie)) {
    trolley.addClass("animate");
    setTimeout(function() {
      $('.friends').css({zIndex: 10});
    }, 5000);
  }
  
  function runTrolley() {
    var stop_trolley_at;
    if (daniel_animation_info.use_left_css) {
      stop_trolley_at = parseInt(daniel_animation_info.window_width - daniel_animation_info.position.left) - 400; // I DON'T KNOW WHAT THIS NUMBER MEANS. But it works.
    }
    else {
      stop_trolley_at = parseInt(daniel_animation_info.css_right) - 110; // magic number b/c we want daniel placed at the spot, not the edge of the trolley
    }
    
    trolley.css("right", stop_trolley_at);
    createjs.Sound.play("landing_trolley_enter");
  }

  function removeTrolley() {
    trolley.remove();
  };

  function replaceDaniel(e) {
    $(".daniel--home").show();
    $(".daniel--ride-trolley").remove();
    removeTrolleyUnderlay();
    
    // using jquery animation instead of css; css animation freezes when daniel's animation runs // trolley.css("right", "-100%");
    trolley.animate({
      right: "-100%"
    });    

    addFeaturedGames("go", removeTrolley);
    
    // // when Daniel's dialog animation finishes, we want him to go into his idle state
    daniel.getArmature().removeAllEventListeners();
    daniel.getArmature().addEventListener(dragonBones.events.AnimationEvent.COMPLETE, function() {
      daniel.getArmature().animation.gotoAndPlay("IDLE");
    });
    daniel.cursor = "pointer";
    
    // // add the non-trolley daniel to the stage
    _stage["daniel-ride-trolley"].removeAllChildren();
    _stage["daniel"].addChild(daniel);

    // // run dialog animation and sounds
    daniel.getArmature().animation.gotoAndPlay("DIALOG1");
    createjs.Sound.play("landing_daniel_dialogue_001");
  }

  // Moves Trolley underlay in front of Daniel so it looks like he goes behind it when he dismounts
  function setTrolleyUnderlay() {
    trolley.append("<div class='trolley-underlay'></div>");
    var computedStyle = trolley.css('right');
    trolley.css('right', computedStyle);
  }

  function removeTrolleyUnderlay() {
    $(".trolley-underlay").remove();
  }
} // end setUpTrolley()

// ----------------------------------
// Wave On Click
// ----------------------------------

function waveOnClick(character, soundId, animationId) {
  animationId = animationId || "DIALOG1";

  character.getArmature().getDisplay().addEventListener("mousedown", function(){
    character.getArmature().animation.gotoAndPlay(animationId);
    createjs.Sound.play(soundId);    
  });
}

// Set css to pointer on hover
function cursorOnHover(character) {
  character.getArmature().getDisplay().addEventListener("onmouseover", function() {
  });
}

function createFriends() {
  _stage["friends"] = new createjs.Stage("canvas--friends");
  _stage["friends"].enableMouseOver(20);

  // build the character using the preload data
  var o = buildCharacter("o", "Landing_O", {
    x: 120,
    y: 25,
    scale: 0.86
  });
  waveOnClick(o, "landing_o_dialogue");
  o.cursor = "pointer";
  _stage["friends"].addChild(o);

  var katerina = buildCharacter("katerina", "Landing_Katerina", {
    x: 395,
    y: 55,
    scale: 0.83
  });
  waveOnClick(katerina, "landing_katerina_dialogue");
  katerina.cursor = "pointer";
  _stage["friends"].addChild(katerina);

  var elaina = buildCharacter("elaina", "Landing_Elaina", {
    x: 0,
    y: 30,
    scale: 0.87
  });
  waveOnClick(elaina, "landing_elaina_dialogue");
  elaina.cursor = "pointer";
  _stage["friends"].addChild(elaina);
  
  var wednesday = buildCharacter("wednesday", "Landing_Wednesday", {
    x: 265,
    y: 55,
    scale: 1.03
  });
  waveOnClick(wednesday, "landing_wednesday_dialogue");
  wednesday.cursor = "pointer";
  _stage["friends"].addChild(wednesday);
}

// ****************************************************************************
// *** Build characters, place on the stage, then begin the animation cycle ***
// ****************************************************************************
function preLoadFinished() {  
  if (screen_state == "largest" || screen_state == "large") {
    createFriends();
  }

  // create and add daniel to the stage
  if (screen_state != "smallest") {
    var daniel = buildCharacter("daniel", "Landing_DANIEL", {
      x: -90,
      y: 0,
      scale: ($.browser.msie ? 1.99 : 0.99)
    });
    waveOnClick(daniel, "landing_daniel_dialogue_002", "DIALOG2");

    daniel_canvas = $("<canvas id='canvas--daniel' width='670' height='790'></canvas>");    
    $(".daniel--home").append(daniel_canvas);
    daniel_canvas_sizes = daniel_canvas.parent().data('canvas-sizes');
    daniel_canvas.height(daniel_canvas_sizes[screen_state]);

    _stage["daniel"] = new createjs.Stage("canvas--daniel");
    _stage["daniel"].enableMouseOver(20);

    if (screen_state != "largest" || $.browser.msie) {
      _stage["daniel"].addChild(daniel);
    }

    // set timing for the world
    createjs.Ticker.setFPS(30);
    createjs.Ticker.addEventListener("tick", getUpdateFunction());
  }      

  setBackgroundPosition();

  $(".loader").fadeOut(1000, function() {
    $("#home").fadeIn(1000, function() {
      fadeFinished();      
      if (daniel) {
        trolleyGo(daniel);
      }      
    });
  });
}

// ------------------
// On Document Ready
// ------------------

$(document).ready(function() {
  // Get screen state based on css breakpoints
  setScreenState();

  // we need to calculate this now before it gets hidden and loses position information
  if (screen_state == "largest") {    
    var daniel_home = $('.daniel--home');
    daniel_animation_info = {
      position: daniel_home.position(),
      css_right: daniel_home.css('right'),
      css_left: daniel_home.css('left'),
      window_width: $(window).width()
    };

    daniel_animation_info.use_left_css = (daniel_animation_info.css_right == "auto");
  }

  // If you're on smallest size but then resize up, we're not going to build an animated daniel -- a static will have to do
  if (screen_state == "smallest") {
    $('.daniel--home').addClass('static-daniel');
  }

  if ($.browser.mozilla) {
    $(".loader").remove();
    $("#home").show();
    $('body').addClass('static');
    $('.trolley').remove();
    addFeaturedGames();
    return;
  }

  if ($("html").hasClass("static")) {
    setBackgroundPosition();
    fadeFinished();
    //need to get featured games to load in
    $(".loader").fadeOut();
    $("#home").fadeIn();
    return;
  }

  $.getJSON('/daniel/data/preload-home.json', function(result){
    // Edit this to add/remove images you want to preload for different sizes
    var preLoadMaster = result.manifest;

    // the actual images we want to preload for this screen state will be pushed into this array
    var preLoad = {manifest: []};

    // get height info from the friends canvas, needed for IE9 and 10 compatibility
    friends_canvas = $('#canvas--friends');
    friends_canvas_sizes = friends_canvas.data('heights');
    friends_canvas.height(friends_canvas_sizes[screen_state]);

    // Get just the images we want for the current size
    for (var i in preLoadMaster) {
      img = preLoadMaster[i];
      sizes = img.sizes.split(' ');
      
      if (sizes.indexOf(screen_state) > -1) {
        // set an id if it doesn't already have one (default is the filename)
        var splitPath = img.src.split('/');
        if (img.id == undefined) {
          img.id = splitPath[splitPath.length - 1];
        }

        preLoad.manifest.push(img);
      }
    }

    // load the dragonbones characters
    var dragonbones, daniel_src;

    if ($.browser.msie) {
      daniel_src = {
        id: "daniel",
        src: "/daniel/dragonbones/assets/daniel_half" // ought ot be daniel_landing_half
      }
    }
    else {
      daniel_src = {
        id: "daniel",
        src: "/daniel/dragonbones/assets/daniel_landing"
      }
    }

    if (screen_state == "largest" || screen_state == "large") {
      dragonbones = ["o", daniel_src, "katerina", "elaina", "wednesday"];
    }
    else if (screen_state != "smallest") {
      dragonbones = [daniel_src];
    }
    else {
      dragonbones = [];
    }

    for (var i in dragonbones) {
      var dbChar = dragonbones[i];
      var texture, textureData, skeletonData;

      if (typeof(dbChar) == "string") {
        texture = {id: dbChar + "-texture", src: "/daniel/dragonbones/assets/" + dbChar + "/texture.png"};
        textureData = {id: dbChar + "-texture-data", src: "/daniel/dragonbones/assets/" + dbChar + "/texture.json"};
        skeletonData = {id: dbChar + "-skeleton-data", src: "/daniel/dragonbones/assets/" + dbChar + "/skeleton.json"};
      }
      else if (typeof(dbChar) == "object") {
        texture = {id: dbChar.id + "-texture", src: dbChar.src + "/texture.png"};
        textureData = {id: dbChar.id + "-texture-data", src: dbChar.src + "/texture.json"};
        skeletonData = {id: dbChar.id + "-skeleton-data", src: dbChar.src + "/skeleton.json"};
      }

      preLoad.manifest.push(texture, textureData, skeletonData);
    }

    // Now actually preload the images
    queue = new createjs.LoadQueue();
    queue.installPlugin(createjs.Sound);
    createjs.Sound.alternateExtensions = ["mp3", "ogg"];
    queue.on("complete", preLoadFinished, this);
    queue.loadManifest(preLoad);
  });  
  

  // used by iOS Safari onscroll fix below
  function getResetCharacterAnimationFunc(character) {
    return function() {
      character.getArmature().animation.gotoAndPlay("IDLE");
    }    
  }

  // on iOS devices, oncroll will trigger after drag-scrolling is done; restart animation.
  if ($.browser.platform == "ipad" && $.browser.safari) {
    window.onscroll = function() {
      if (_stage) {
        if (_stage.daniel) {
          var daniel = _stage.daniel.children[0];
          daniel.getArmature().animation.stop(); // it still thinks it's playing at this point
          setTimeout(getResetCharacterAnimationFunc(daniel), 500);
        }

        if (_stage.friends && _stage.friends.children) {          
          for (var i in _stage.friends.children) {
            var character = _stage.friends.children[i];        
            character.getArmature().animation.stop();
            setTimeout(getResetCharacterAnimationFunc(character), 500);        
          }
        }
      }

    }
  }
});