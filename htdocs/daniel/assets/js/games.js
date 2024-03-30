var queue, screen_state, _stage, daniel;

function speakOnHover(className, audioId) {
	$("." + className).bind("mouseenter", function() {
		createjs.Sound.stop();
		createjs.Sound.play(audioId);
		daniel.getArmature().animation.gotoAndPlay("TALK");
	});
}

function addGames() {
	var gameCollection; // games collection
	if ($('html').hasClass('no-flash')) {
		var allGames = gamesXmlDoc.getElementsByTagName("game");
		gameCollection = [];
		for (var i = 0; i < allGames.length; i++) {
		  var game = allGames.item(i);
		  var isHtml5 = game.getElementsByTagName("html5")[0].childNodes[0].nodeValue == "true";
		  if (isHtml5) { 
		    gameCollection.push(game); 
		  }
		}
	} else {
		gameCollection = gamesXmlDoc.getElementsByTagName("game"); //set variable to parent node
	}

	for (i = 0; i < gameCollection.length; i++) {
		var href = gameCollection[i].getElementsByTagName("link")[0].childNodes[0].nodeValue;
		var gamename = gameCollection[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
		var imagesrc = gameCollection[i].getElementsByTagName("thumb")[0].childNodes[0].nodeValue;		
		var className = gamename.replace(/ /g, "-").toLowerCase();
		var audioId = gameCollection[i].getElementsByTagName("audio")[0].childNodes[0].nodeValue;

		$('.directory__list').append(
			 "<li class='directory__item " + className + "'>"
			+	"<a href='/daniel/games/" + href + "'>"
			+		"<img class='thumbnail' src='/daniel/assets/img/games/thumbs/"+imagesrc+"' alt='" + gamename + "' />"
			+	"</a>"
			+"</li>"
		);		

		if ((screen_state == "largest" || screen_state == "large") && !$.browser.mozilla) {
			speakOnHover(className, audioId);
		}
	};

	// set up the paging list of games, defined in core.js
	setupDirectory();
}

function preLoadFinished() {

	if($("html").hasClass("static")) {
		addGames();
		// set up the paging list of games, defined in core.js
		setupDirectory();

		// clear the loader
		$(".loader").fadeOut(1000, function() {
			$("#games").fadeIn(1000);
		});

		return;
	}

	// ----------------------------
	// Dragonbones Character Init
	// ----------------------------	

	_stage = new createjs.Stage("canvas--games");	

	function characterInit(){
		var danielLocationData = {
			texture: 		queue.getResult("daniel-texture"),
			textureData: 	queue.getResult("daniel-texture-data"),
			skeletonData: 	queue.getResult("daniel-skeleton-data")
		};
		daniel = new DBCharacterCJS("daniel", danielLocationData, "Games_DANIEL", onCharacterReady);

		createjs.Ticker.setFPS(30);
		createjs.Ticker.addEventListener("tick",update);
	}

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

	var lastLoop = new Date;

	function update(){
		var thisLoop = new Date;
		var fps = Math.round(1000 / (thisLoop - lastLoop));
		lastLoop = thisLoop;
		_stage.update();
		dragonBones.animation.WorldClock.clock.advanceTime(1/fps);
	}

	if (screen_state == "largest" || screen_state == "large") {
		characterInit();
	}

	// Bring in xml data
	// ------------------------------------------------------	

	addGames();	

	// clear the loader
	$(".loader").fadeOut(1000, function() {
		$("#games").fadeIn(1000);
	});
}

$( document ).ready(function() {  	
	var width = $('#games').width();	
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
		$("#games").show();
		$('html').addClass('static');

		addGames();

		return;
	}

	$.getJSON("/daniel/data/preload-games.json", function(result) {
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