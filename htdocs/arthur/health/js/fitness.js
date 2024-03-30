jQuery.noConflict();
(function($) {

	//shuffle array
	Array.prototype.shuffle = function() {
	  var i = this.length, j, temp;
	  if ( i == 0 ) return this;
	  while ( --i ) {
	     j = Math.floor( Math.random() * ( i + 1 ) );
	     temp = this[i];
	     this[i] = this[j];
	     this[j] = temp;
	  }
	  return this;
	}

	//all exercises [title, description]
	var exercisesArr = [
		["Stretch Up High","Reach your fingers as high up as you can!","1"],
		["Touch Your Toes","Bend only at your waist and reach down.","2"],
		["Stretch to the Left","Stretch your arms out, up, then down on your left side.","3"],
		["Stretch to the Right","Stretch your arms out, up, then down on your right side.","4"],
		["Arm Circles Forward","Stretch arms to the sides and roll them forward.","5"],
		["Arm Circles Backward","Stretch arms to the sides and roll them backward.","6"],
		["Head Rolls","Slowly roll your head from one side and forward to the other side.","7"],
		["Forward Lunges","Step out with one foot and bend that knee. Then stand. Repeat.","8"],
		["Wiggle Your Fingers","Loosen your hands by moving your fingers all around!","9"],
		["Jumping Jacks","Jump and make an \"X\" with your arms and legs.","10"],
		["Twist to the Side","Twist to the left and to the right.","11"],
		["Freestyle Dancing","Express yourself and dance!","12"],
		["Walk in Place","Move your legs like you're walking, but don't go anywhere.","14"],
		["Jump Up and Down","Try to jump higher each time!","15"],
		["Jump Side to Side","Imagine a line on the ground and jump to and from each side.","16"],
		["Run in Place","Move your legs like you're running, but don't go anywhere.","17"],
		["Wiggle Your Ears","Try to see if you can!","18"],
		["Wave Arms","Go wild with your arms in the air!","19"],
		["Crawl","Crawl around on your hands and knees!","20"],
		["Tippy Toes","Go up on your tiptoes, then back down. Keep repeating!","21"],
		["Hula Hoop","Shake your hips around as if you were hula hooping.","22"],
		["Arms Up, Arms Down","Put both arms up, then both arms down--quickly!","23"],
		["Forward Kicks","Get that foot high in front of you!","24"],
		["Helicopter","Hold arms straight out to each side and twist at your waist.","25"],
		["Shake Whole Body","Go crazy and shake!","26"],
		["Do the Disco","Point your finger up to the side, then down across your body.","27"]];

	//congratulation messages for end of 30 seconds
	var congratsArr = [
		"Well done!",
		"Great work!",
		"Super job!",
		"Excellent!",
		"Fantastic!",
		"Nice work!",
		"Terrific!",
		"Wonderful!",
		"Awesome!",
		"Outstanding!"
	];

	/*//tick sound for counting down
	var soundTICK = new Howl({
		urls:['../sound/tick.mp3','../sound/tick.ogg'],
		autoplay:false
	});

	//tada sound for success!
	var soundTADA = new Howl({
		urls:['../sound/tada.mp3','../sound/tada.ogg'],
		autoplay:false
	});*/

var soundTADA;
var soundTICK;

	$(document).on("ready", function() {

		var countDown = 0;										//count down num
		var timer;												//timer obj
		var isRunning=false;									//timer running = false
		var countdownInterval = 1000;							//count down interval: 1 sec
		var totalTime = 30000;									//total time: 30 sec
		var numCount = totalTime / countdownInterval;			//total num of tick based on total time and interval
		var currentCongrats = 0;								//current congrats msg index
		var currentExercise = 0;								//current exercise index
		var animHand = document.getElementById('second');		//second hand

		//shuffle the arrays
		congratsArr = congratsArr.shuffle();
		exercisesArr = exercisesArr.shuffle();

		/*buzz.defaults.formats = ['ogg','mp3'];
		//buzz.defaults.preload = 'metadata';

		soundTADA = new buzz.sound("../sound/tada");
		soundTICK = new buzz.sound("../sound/tick");

		soundSFX = new buzz.sound("../sound/fitness");*/


		var soundSFX;
		var assetsPath = "../sound/";
        var src = assetsPath+"fitness.ogg";
        var sndReady = false;
        // NOTE the "|" character is used by Sound to separate source into distinct files, which allows you to provide multiple extensions for wider browser support

		createjs.Sound.alternateExtensions = ["mp3"];	// add other extensions to try loading if the src file extension is not supported
        //createjs.Sound.onLoadComplete = playSound;  // add a callback for when load is completed
        createjs.Sound.addEventListener("fileload", soundIsReady); // add an event listener for when load is completed
        createjs.Sound.registerSound(src,"sfx");  // register sound, which preloads by default


        //displayStatus.innerHTML = "Waiting for load to complete.";  // letting the user know what's happening
    

       /* function playSound(event) {
			soundSFX = createjs.Sound.play(event.src);  // start playing the sound we just loaded, storing the playing instance
			//displayStatus.innerHTML = "Playing source: " + event.src;  // let the user know what we are playing
        }*/


		showSkipButton();

		$(window).resize(function() {
			showSkipButton();
		});

		function showSkipButton(){
			//console.log("SHOW SKIP BUTTON!");
			if($(window).width() <900)
			{
				$('#skipButton').removeClass('hidden');
				$('#skipButton1').addClass('hidden');
			}else{
				$('#skipButton').addClass('hidden');
				$('#skipButton1').removeClass('hidden');
			}
		}



		showExercise();

		//skip button clicked, go to next exercise
		$('#skipButton, #skipButton1').on('click',function(){
			if(currentExercise<exercisesArr.length-1)
			{
				currentExercise++;
			}else{
				currentExercise=0;
				exercisesArr = exercisesArr.shuffle();
			}
			resetClock();
			showExercise();
		});

		//start button clicked, start timer/countdown
		$('#startButton').on('click', function(){
			if(!isRunning)
			{
				//console.log("run the clock.")
				resetClock();
				isRunning=true;
				$('#startButton').attr('disabled','disabled').addClass('disabled');
				$('#skipButton, #skipButton1').attr('disabled','disabled').addClass('disabled');

				timer = setTimeout(moveClock,0);
			}
		});

		function soundIsReady(event)
		{
			//console.log("ready!!");
			sndReady=true;
			soundSFX = createjs.Sound.createInstance("sfx");
		}


		function moveClock(){
			//console.log("move it?")
			var timeLeft = ((totalTime/1000) - countDown);
			$("#timerSeconds").html(timeLeft +" seconds");
			countDown++;

			if(countDown<=numCount)
			{
				//console.log("current degree: "+$('#second').getCurrentDegrees())
				$('#second').rotate({angle:12});
				
				if(sndReady) 
				{
					soundSFX.stop();
					soundSFX.play({offset:0});
				}
				//cssSandpaper.setTransform(animHand, "rotate("+countDown*12+"deg)");
				//soundSFX.setTime(0).play();
				//soundTICK.play();
			}
			//var buffered = soundSFX.getNetworkStateMessage();
			//console.info("MSG: "+buffered);


			if(countDown==numCount+1)
			{
				//console.log("stop the clock")
				//cssSandpaper.setTransform(animHand,"rotate(0deg)")
				$('#second').rotate({angle:0})
				countDown=0;
				clearTimeout(timer);
				soundSFX.stop();
				soundSFX.play({offset:1900})
				//soundSFX.stop().setTime(1.9).play();
				//soundTICK.stop();
				//soundTADA.play();


				isRunning=false;
				//re-enable buttons and hide second hand
				$('#startButton').removeAttr('disabled').removeClass('disabled');
				$('#skipButton, #skipButton1').removeAttr('disabled').removeClass('disabled');
				$('#second').addClass('hidden');

				//show congrats msg
				$('#timerSeconds').html(congratsArr[currentCongrats]);
				$('.timerClock').addClass('hidden');
				//$('.congratsMsg').html(congratsArr[currentCongrats]).removeClass('hidden');
				if(currentCongrats<congratsArr.length-1)
				{
					currentCongrats++;
				}else{
					currentCongrats=0;
					congratsArr = congratsArr.shuffle();
				}

			}else{
				timer = setTimeout(moveClock,countdownInterval)
			}
		}

		function showExercise() {
			$('#exerciseTitle').html(exercisesArr[currentExercise][0]);
			$('#exerciseDescription').html(exercisesArr[currentExercise][1]);
			$('#0currentExercise').attr("src",'../img/fitness/fitness_exercise_'+exercisesArr[currentExercise][2]+'.png');
			//console.log('change source to '+exercisesArr[currentExercise][2])
		}

		function resetClock() {
			$("#timerSeconds").html("30 seconds");
			$('.timerClock').removeClass('hidden');
			$('#second').removeClass('hidden');
		}


	});
})(jQuery);