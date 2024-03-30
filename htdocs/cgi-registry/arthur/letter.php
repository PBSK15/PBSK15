<?php




	function lettersToHeader($characterVal) {
		
		switch($characterVal) {
			case 'Send to Arthur':
			return "<img src='../../arthur/i/games/lettersto/arthur/arthur_header.gif' alt='Letters to Arthur' style='display:block;' width='637' height='133' border='0'>";
			case 'Send to The Brain':
			return "<img src='../../arthur/i/games/lettersto/brain/brain_header.gif' alt='Letters to The Brain' style='display:block;' width='637' height='133' border='0'>";
			case 'Send to Sue Ellen':
			return "<img src='../../arthur/i/games/lettersto/sueellen/sue_ellen_header.gif' alt='Letters to Sue Ellen' style='display:block;' width='637' height='133' border='0'>";
			case 'Send to Francine':
			return "<img src='../../arthur/i/games/lettersto/francine/francine_header.gif' alt='Letters to Francine' style='display:block;' width='637' height='133' border='0'>";
		}
		
	}
	
	function lettersToFooter($characterVal) {

		switch($characterVal) {
			case 'Send to Arthur':
			return "<img src='../../arthur/i/games/lettersto/arthur/arthur_bottom.gif' alt='Letters to Arthur' style='display:block;' width='637' height='121' border='0'>";
			case 'Send to The Brain':
			return "<img src='../../arthur/i/games/lettersto/brain/brain_bottom.gif' alt='Letters to The Brain' style='display:block;' width='637' height='121' border='0'>";
			case 'Send to Sue Ellen':
			return "<img src='../../arthur/i/games/lettersto/sueellen/sue_ellen_bottom.gif' alt='Letters to Sue Ellen' style='display:block;' width='637' height='121' border='0'>";
			case 'Send to Francine':
			return "<img src='../../arthur/i/games/lettersto/francine/francine_bottom.gif' alt='Letters to Francine' style='display:block;' width='637' height='121' border='0'>";
		}
		
	}
		
	
	
	/************************
		GET READY FOR HELL
	************************/
	
	function buildLetter() {
		
		$sendTo = $_POST['Send'];
		$closing = $_POST['end'] ?? $_POST['ps'] ?? $_POST['closing'];
		
		$finalLetter = "";
		
		
		
		
		
		
		
		
		if ($sendTo === 'Send to Arthur') {
			
			
			$featurePath = "../../i/games/lettersto/arthur/arthur_";
			
			
			
			
			$greeting = $_POST['greeting'];
			
			$showOpinion = $_POST['showisso'];
			$idRather = $_POST['wantto'];
			$oneOf = $_POST['oneof'];
			$showsWasWhen = $_POST['showswaswhen'];
			$imMostLike = $_POST['immostlike'];
			$imMostLikeBecause = $_POST['because'];
			$byTheWay = $_POST['btw'];
			$ps = $_POST['ps'];
			$from = $_POST['from'] ? $_POST['from'] : "friend";
			
			
			switch($greeting) {
				case 'Hey':
				$arthurResponse = "Hi there, $from";
				break;
				case "Whatsup";
				$arthurResponse = "Dear $from";
				break;
				case "Dear";
				$arthurResponse = "Hi $from";
				break;
				case "Earthto";
				$arthurResponse = "Earth to $from";
				break;
				case "Yo";
				$arthurResponse = "Hey there, $from";
				break;
			}
			
			
			
			switch(rand(0,3)) {
				case 0:
				$arthurOpening = "D.W. is bugging me to use the computer, so I have to keep this short.";
				break;
				case 1:
				$arthurOpening = "I have to go in a second because my mom keeps telling me to practice the piano.";
				break;
				case 2:
				$arthurOpening = "Pal is begging me to take him for a walk, so this will be short.";
				break;
				case 3:
				$arthurOpening = "Hi! Thanks for the message.";
				break;
			}
			
			
			
			
			

			if ($showOpinion === 'funny') {
				$funnyNum = rand(0,2);
				
				if ($funnyNum === 0) {
					$showOpinionResponse = "Thanks for your nice letter. If you think the show is funny, you should watch D.W.'s face when she sees a plate of spinach.";
				} elseif ($funnyNum === 1) {
					$showOpinionResponse = "I'm glad you love the show. If you really want to laugh, you should see Buster when he sits down in front of a hot fudge sundae.";
				} else {
					$showOpinionResponse = "I love getting fan mail. If you think the show is funny, you should see Binky chase butterflies down the street.";
				}
				
			} elseif ($showOpinion === 'boring') {
				$boringNum = rand(0,3);
				
				if ($boringNum === 0) {
					$showOpinionResponse = "Boring, huh? Well, if you think the show is boring, you should try sitting through one episode of Mary Moo Cow with D.W.";
				} elseif ($boringNum === 1) {
					$showOpinionResponse = "Wow, you are hard to please! If you think the show is boring, try reading D.W. that book about the frog ten times in a row.";
				} elseif ($boringNum === 2) {
					$showOpinionResponse = "Sorry that you don't love the show. If you think the show is boring, you've never heard Mr. Ratburn explain the history of the sewing machine.";
				} elseif ($boringNum == 3) {
					$showOpinionResponse = "I'm glad you wrote to me, even though you don't like the show. But have you ever tried to watch Mary Moo Cow? Now THAT'S boring.";
				}
				
			} else {
				$strangeNum = rand(0,2);
				
				if ($strangeNum === 0) {
					$showOpinionResponse = "Sometimes life is strange. I mean, what if Mr. Rogers or Mr. Ratburn moved in with YOU for a week?";
				} elseif ($strangeNum === 1) {
					$showOpinionResponse = "Strange, huh? If you think the show is strange sometimes, try playing hide and seek in your house with a king snake!";
				} elseif ($strangeNum === 2) {
					$showOpinionResponse = "If you think ARTHUR is strange, you should watch Love Ducks sometime. THERE'S a strange show.";
				}
				
			}
			
			
			
			
			if ($oneOf === 'thefunniest') {
				
				if ($showsWasWhen === 'yougotPal') {
					$episodeOpinionResponse = "It's funny that Pal chewed everything in the living room, but it was not funny at the time.";
				} elseif ($showsWasWhen === 'youandBustermademusicvideos') {
					$episodeOpinionResponse = "Buster is really good at making rap noises with his mouth. I like to call him Buster Jam.";
				} elseif ($showsWasWhen === 'youhadtogetglasses') {
					$episodeOpinionResponse = "I'm glad you liked the show when I had to get glasses. I hated it when everyone called me Four Eyes, but life got much better when I could see again!";
				} elseif ($showsWasWhen === 'everyonegotlice') {
					$episodeOpinionResponse = "You liked the head lice show?! Having lice is no fun. But it was pretty funny when Pal kept licking the mayo out of my hair.";
				}
				
			} elseif ($oneOf === 'thestrangest') {
				
				if ($showsWasWhen === 'yougotPal') {
					$episodeOpinionResponse = "I love having a dog. It was strange when Pal chewed on everything in the living room, but I guess that's what puppies do.";
				} elseif ($showsWasWhen === 'youandBustermademusicvideos') {
					$episodeOpinionResponse = "Making music videos with Buster is great!";
				} elseif ($showsWasWhen === 'youhadtogetglasses') {
					$episodeOpinionResponse = "Boy, did I need glasses. One day, I went into the girls' bathroom by mistake because I couldn't read the sign. Boy was that embarrassing!";
				} elseif ($showsWasWhen === 'everyonegotlice') {
					$episodeOpinionResponse = "Getting lice wasn't fun. It makes me itch just to think about it! Do not wear anybody else's coat, scarf or hat!";
				}
				
			} elseif ($oneOf === 'myfavorite') {
				
				if ($showsWasWhen === 'yougotPal') {
					$episodeOpinionResponse = "Pal is the best dog in the whole world.";
				} elseif ($showsWasWhen === 'youandBustermademusicvideos') {
					$episodeOpinionResponse = "I just love making videos. My favorite was that one about library cards. The dance moves were really fun.";
				} elseif ($showsWasWhen === 'youhadtogetglasses') {
					$episodeOpinionResponse = "A lot of kids like that show. Wasn't it great when I made that slam dunk after I got my glasses?";
				} elseif ($showsWasWhen === 'everyonegotlice') {
					$episodeOpinionResponse = "Have you ever had lice? Lice really makes your head itch. But it was funny when Francine and Muffy got short haircuts and surprised Binky in the boys bathroom.";
				}
				
			} elseif ($oneOf === 'myleastfavorite') {
				
				if ($showsWasWhen === 'yougotPal') {
					$episodeOpinionResponse = "Hmmm... I wonder why you didn't like it when I got Pal. Maybe you like cats, like Francine.";
				} elseif ($showsWasWhen === 'youandBustermademusicvideos') {
					$episodeOpinionResponse = "Didn't you like that song about library cards? The dance moves were hard to learn, but fun.";
				} elseif ($showsWasWhen === 'youhadtogetglasses') {
					$episodeOpinionResponse = "Sorry you didn't really like that show when I had to get glasses. But sitting through that show is not as bad as being called Four Eyes!";
				} elseif ($showsWasWhen === 'everyonegotlice') {
					$episodeOpinionResponse = "Sorry the lice grossed you out. Is it because you don't like lice? I'd baby sit D.W. and the Tibbles all day if it meant that I didn't have to get lice again.";
				}
				
			}
			
			
			
			if ($byTheWay === 'whensyourbirthday') {
				$arthurByTheWay = "My birthday is May 25th. Prunella says that makes me a Gemini, whatever that is.";
			} elseif ($byTheWay === 'whatkindofanimalareyouanyway') {
				$arthurByTheWay = "I'm an aardvark. And in 				case you were wondering, Francine and Muffy are monkeys, Buster is a rabbit, The Brain is a bear, Sue Ellen is a cat, Binky is a bulldog, Prunella is a rat, Fern is a dog, and the Tibble twins are bear cubs.";
			} elseif ($byTheWay === 'whatsyourfavoritebook') {
				
				$favoriteBookNum = rand(0,1);
				
				if ($favoriteBookNum === 0) {
					$arthurByTheWay = 'My favorite book? Hmm. Have you read "Three Tales of My Father\'s Dragon" by Ruth Stiles Gannett? The pictures are as good as the story.';
				} else {
					$arthurByTheWay = "It's hard to decide what my favorite book is. Right now I like \"Just So Stories\" by Rudyard Kipling. Read it if you want to know how the camel got its hump.";
				}
				
			}
			
			$closingNum = rand(0,4);
			
			switch($closingNum) {
				case 0:
				$arthurClosing = "Mom is bugging me to clean my room. Gotta go.";
				break;
				case 1:
				$arthurClosing = "I have to go practice the piano if I want to watch Dunce Patrol.";
				break;
				case 2:
				$arthurClosing = "Oops, gotta go. I have to go play Virtual Goose!";
				break;
				case 3:
				$arthurClosing = "Francine's at the door. We're going to try out her new bike. See ya!";
				break;
				case 4:
				$arthurClosing = "Buster just came over with the new Bionic Bunny comic -- Bionic Bunny and the Giant Guppy. Write back!";
				break;
			}
			
			
			if ($ps === 'WhosDewey') {
				$psResponse = "P.S. Sue Ellen says that Melvil Dewey was one of the greatest librarians of all time!";
			} elseif ($ps === 'Whatsahawksfavoritedessert') {
				$psResponse = "P.S. What's a hawk's favorite dessert? Mice Cream!";
			} elseif ($ps === 'Whathappenstofrogswhoareillegallyparked') {
				$psResponse = "P.S. What happens to frogs who are illegally parked? They get toad away!";
			} elseif ($ps === 'Whatdoyougetwhenyoucrossahitchhikerwithpoisonivy') {
				$psResponse = "P.S. What do you get when you cross a hitch-hiker with poison ivy? An ITCH hiker!";
			}
			
			
			
			
			$finalLetter = "
			<p>$greeting</p>
			<p>$arthurOpening</p>
			<p>$showOpinionResponse</p>
			<p>$episodeOpinionResponse</p>
			<p>$arthurByTheWay</p>
			<p>$arthurClosing</p>
			<p>$psResponse</p>
			<p>&nbsp;</p>";
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
		} elseif ($sendTo === 'Send to Francine') {
			
			$featurePath = "../../i/games/lettersto/francine/francine_";
			
			$greeting = $_POST['greeting'];
			
			$bandType = $_POST['band_type'];
			$question = $_POST['question_01'];
			$songType = $_POST['song_type'];
			$bandName = $_POST['band_name'];
			$from = $_POST['from'] ? $_POST['from'] : "Fellow Musician";
			
			switch($greeting) {
				case 'Hey':
				$francineGreeting = "Dear $from";
				break;
				case 'Yoyoyo':
				$francineGreeting = "Hey, hey, hey, $from";
				break;
				case 'Whatsup';
				$francineGreeting = "What's up, $from";
				break;
				case 'Hiya':
				$francineGreeting = "Howdy, $from";
				break;
			}
			
			switch($bandType) {
				case 'rock':
				$francineBandStart = 'I was in a rock band called U Stink!  You may remember our hit, "Nothing But the Music."  We sang it with the Backstreet Boys.';
				break;
				case 'rap':
				$francineBandStart = "I used to be known as DJ Frensker! Okay, it was just me rapping in front of the mirror. But I was funky like a monkey!";
				break;
				case 'country':
				$francineBandStart = "I was in a country band for a week. But my cowboy hat kept slipping down over my eyes, and I'd fall off the stage, so I had to quit.";
				break;
				case 'blues':
				$francineBandStart = "I was in a blues band for about an hour.  But while I was playing, I thought of a joke that made me laugh. Then they said that since I didn't really have the blues, I had to leave.";
				break;
			}
			
			switch($songType) {
				case 'schoolchee':
				$francineSongType = 'school cheer';
				break;
				case 'kidssong':
				$francineSongType = 'kids song';
				break;
				case 'socialacti';
				$francineSongType = 'social action song';
				break;
				case 'commercial':
				$francineSongType = 'commercial jingle';
				break;
			}
			
			switch($question) {
				case 'whatsyouro':
				$francineBandAdvice = "yodeling sounds best if you're wearing lederhosen. The bad news is, it's hard to find lederhosen this time of year.";
				break;
				case 'howlongsho':
				$francineBandAdvice = "as a drummer, I feel you should  solo right up until your bandmates begin to leave the stage.";
				break;
				case 'doesakazoo';
				$francineBandAdvice = "a kazoo can be used to great effect... although when I'm the one using it, the effect is usually that the audience runs away.";
				break;
				case 'howmanypeo':
				$francineBandAdvice = "your band should be as big as possible. That pretty much guarantees that SOMEBODY will bring snacks.";
				break;
			}
			
			
			
			
			
			
			
			if ($songType === 'schoolchee') {
				
				$francineSongType = 'school cheer';
				
				switch($bandType) {
					case "rock":
						$francineSong = "Struttin' my stuff<br />To a rockin' beat<br />With thumpin' drums<br />And a rumblin' bass<br />We're gonna win this game<br />With style and grace. <br />Whoo!";
						break;
					case "rap":
						$francineSong = "My mind on the game<br />And my sneakers on my feet<br />Comin' at you like a whirlwind<br />Oh, yeah, you know we're cruisin'<br />'Cause we're so fast<br />We're gonna catch your goalie snoozin'. <br />Whoo!";
						break;
					case "country":
						$francineSong = "Whoopin' \"yee-haw\"<br />To all the folks I meet<br />'Cause we're like a buckin' bronco<br />Comin' outta the gate<br />So you better watch out<br />Hey, we're gonna be great! <br />Whoo!";
						break;
					case "blues":
						$francineSong = "I said, oh, yeah<br />I was walking down the street<br />And I'm feelin' so low<br />I'm sure that we'll be beat.<br />(Sigh...)";
						break;
				}
				
				
			} elseif ($songType === 'kidssong') {
				
				$francineSongType = 'kids song';
				
				if ($bandType === 'rock') {
					$francineSong = "Learning to spell<br />Hey, kids, it's really neat<br />R-O-C-K spells rock<br /> R-O-L-L is roll<br />Gettin' real smart<br />Is our rock 'n' roll goal!";
				} elseif ($bandType === 'rap') {
					$francineSong = "Suddenly the teacher said<br />Line up, and make it neat!<br />If you're thinkin' 'bout yellin'<br />Hey, don't even try it<br />When the teacher says line up<br />It's time to be quiet.";
				} elseif ($bandType === 'country') {
					$francineSong = "My hat on my head<br />And my boots on my feet<br />And in between<br />Are all my clothes<br />And that's just how<br />This dressing song goes.";
				} elseif ($bandType === 'blues') {
					$francineSong = "I said, oh, yeah<br />I was walking down the street<br />And I got the B-L-U-E<br />And the S makes it complete.";
				}
				
			} elseif ($songType === 'socialacti') {
				
				$francineSongType = 'social action song';
				
				if ($bandType === 'rock') {
					$francineSong = "Got to figure out<br />How to make the air smell sweet<br />This smoke makes me choke<br />We gotta end this pollution<br />So let's start ourselves<br />A rock 'n' rollin' revolution!";
				} elseif ($bandType === 'rap') {
					$francineSong = "Writin' down stuff<br />On my \"Things to Change\" sheet<br />'Cause the way things are<br />Are not as good as they could be<br />Get together, my friends<br />To make things how they SHOULD be.";
				} elseif ($bandType === 'country') {
					$francineSong = "Carryin' bags of garbage<br />Hey, it's quite a feat<br />'Cause these folks didn't recycle<br />So the bags weigh a ton<br />Come on, let's keep our hometown green<br />It's good to do and it's fun.";
				} elseif ($bandType === 'blues') {
					$francineSong = "I said, oh, yeah<br />I was walking down the street<br />Got to stop this global warming<br />'Cause I can't stand the heat.";
				}
				
			} elseif ($songType === 'commercial') {
				
				$francineSongType = 'commercial jingle';
				
				if ($bandType === 'rock') {
					$francineSong = "Tryin' to cool off<br />Tryin' to beat the heat<br />So drink one right now<br />Or you ain't rockin' it out<br />It's this great new cola<br />That I'm talkin' about!";
				} elseif ($bandType === 'rap') {
					$francineSong = "Eatin' this delicious<br />Sweet and salty treat<br />So run like a bunny<br />With a wolf two feet behind it<br />Gotta floor it to the store<br />Where you know you're gonna find it!";
				} elseif ($bandType === 'country') {
					$francineSong = "Without my horse<br />'Cause I need a better seat!<br />I'll buy it down at Joe's<br />The best, of course<br />A brand-new saddle<br />Custom-fit for my horse!";
				} elseif ($bandType === 'blues') {
					$francineSong = "I said, oh, yeah<br />I was walking down the street<br />And I got the blues bad<br />But my new guitar from Sidney's down on 34th and Elm for the low, low price of $259.95 (and they threw in the 				case for free!) is really neat!";
				}
				
			}
			
			
			
			switch(rand(0,3)) {
				case 0:
				$francineSelfIndulgence = "best";
				break;
				case 1:
				$francineSelfIndulgence = "coolest";
				break;
				case 2:
				$francineSelfIndulgence = "weirdest";
				break;
				case 3:
				$francineSelfIndulgence = "goofiest";
				break;
			}
			
			
			
			
			switch($bandName) {
				case 'aardvark':
				$francineBandNameSuggestion = "Another Aardvark.";
				break;
				case "breakfast";
				$francineBandNameSuggestion = "Breakfast of Gruel.";
				break;
				case "chilly";
				$francineBandNameSuggestion = "Cha-Cha Chiolly and the Hot Enchiladas.";
				break;
				case "dingo";
				$francineBandNameSuggestion = "Winged Dingo.";
				break;
				case "electric";
				$francineBandNameSuggestion = "The Electric Doorstop";
				break;
				case "fungus";
				$francineBandNameSuggestion = "Humongous Fungus.";
				break;
				case "grapes";
				$francineBandNameSuggestion = "The Four-Door Grapes.";
				break;
				case "hooray";
				$francineBandNameSuggestion = "Hooray for Lint.";
				break;
				case "igloo";
				$francineBandNameSuggestion = "Five-Story Igloo.";
				break;
				case "jelly";
				$francineBandNameSuggestion = "Jolly Jelly and the Jammers.";
				break;
				case "knees";
				$francineBandNameSuggestion = "Knancy and the Knervous Knees.";
				break;
				case "leprechaun";
				$francineBandNameSuggestion = "The Jolly Leprechaun Experience.";
				break;
				case "muffin";
				$francineBandNameSuggestion = "Crusty and the Muffin Tops.";
				break;
				case "necktie";
				$francineBandNameSuggestion = "Hot Necktie Stew.";
				break;
				case "Otis";
				$francineBandNameSuggestion = "Otis Goes to Elwood.";
				break;
				case "plump";
				$francineBandNameSuggestion = "The Plump Dumplings";
				break;
				case "quickly";
				$francineBandNameSuggestion = "Running Quickly in Place.";
				break;
				case "river";
				$francineBandNameSuggestion = "River of Pudding.";
				break;
				case "sneeze";
				$francineBandNameSuggestion = "Sneeze Guard Dog.";
				break;
				case "trousers";
				$francineBandNameSuggestion = "The Trousers of Doom.";
				break;
				case "unusual";
				$francineBandNameSuggestion = "Unusual Snack.";
				break;
				case "vitamins";
				$francineBandNameSuggestion = "The Eight Essential Vitamins.";
				break;
				case "wafer";
				$francineBandNameSuggestion = "Willie Wafer and the Creme Filling.";
				break;
				case "xylophone";
				$francineBandNameSuggestion = "Tiny Xylophone.";
				break;
				case "yummy";
				$francineBandNameSuggestion = "Yummy Cotton.";
				break;
				case "zoo";
				$francineBandNameSuggestion = "ooZe Zoo.";
				break;
			}
			
			
			
			switch($closing) {
				case 'Tunefullyy':
				$francineClosing = "Hope this helps,";
				break;
				case 'Peaceout':
				$francineClosing = "Stay hip, young, and free,";
				break;
				case 'Staycool':
				$francineClosing = "Keep chillin',";
				break;
				case 'Yourfellow':
				$francineClosing = "Your partner in rhyme,";
				break;
			}
			
			
			
			$finalLetter = "
			<p>$francineGreeting</p>
			<p>$francineBandStart</p>
			<p>But let's get to your questions. First of all, $francineBandAdvice</p>
			<p>As for your $francineSongType, you're off to a great start! How about something like this:</p>
			<blockquote style='margin-left: 40px;'>$francineSong</blockquote>
			<p>I think those are some of the $francineSelfIndulgence lyrics I've ever written!</p>
			<p>Oh, and if you ask me, you should call your group $francineBandNameSuggestion You can't go wrong with a name like that!</p>
			<p>Good luck with your $bandType group. I know you'll be great!</p>
			<p>$francineClosing</p>
			<p>Francine</p>
			<p>&nbsp;</p>";
			
			
			
			
			
			
			
			
			
		} elseif ($sendTo === 'Send to Sue Ellen') {
			
			$featurePath = "../../i/games/lettersto/sueellen/sue_ellen_";
			
			$vacaSpot = $_POST['vaca_spot'];
			$letMeKnow = $_POST['let_me_know'];
			$experience = $_POST['know_about'];
			$from = $_POST['from'] ? $_POST['from'] : "Fellow Traveler";
			
			$sueEllenInitialGreeting = "Dear $from,";
			
			
			switch(rand(0,3)) {
				case 0:
				$sueEllenGreeting = "I'd love to help!";
				break;
				case 1:
				$sueEllenGreeting = "Thanks for writing!";
				break;
				case 2:
				$sueEllenGreeting = "Great to hear from you!";
				break;
				case 3:
				$sueEllenGreeting = "Yay! I love getting mail!";
				break;
			}
			
			
			switch($vacaSpot) {
				case 'hot':
				$sueEllenSpotRecommendation = "Death Valley, California. But go in the spring or fall, when it \"only\" gets into the 90's.";
				$sueEllenSpot = "Death Valley, California";
				break;
				case 'cold':
				$sueEllenSpotRecommendation = "Alaska. Just don't go in the winter or early spring, because it gets REALLY cold.";
				$sueEllenSpot = "Alaska";
				break;
				case 'nearby':
				$sueEllenSpotRecommendation = "your local museums and parks! My mom and I once took a  \"vacation\" right in Elwood City. It was great!";
				$sueEllenSpot = "Elwood City";
				break;
				case 'faraway':
				$sueEllenSpotRecommendation = "New Zealand. It's near Australia, and it's far away. (Well, it's pretty far from  Elwood City!)";
				$sueEllenSpot = "New Zealand";
				break;
			}
			
			
			if ($letMeKnow === 'whatIshouldp') {
				
				
				if ($vacaSpot === 'hot') {
					$sueEllenRecommendation = "bring a wide-brimmed hat and shirts with long sleeves to protect your skin from the sun. (And don't forget to drink LOTS of water there!)";
				} elseif ($vacaSpot === 'cold') {
					$sueEllenRecommendation = "bring lots of warm clothing! If you dress right, the cold isn't too bad.";
				} elseif ($vacaSpot === 'nearby') {
					$sueEllenRecommendation = "skip the packing. You don't need anything! That's the beauty of it!";
				} elseif ($vacaSpot === 'faraway') {
					$sueEllenRecommendation = "pack light clothes if it's between December and February. That's their summer!";
				}
				
				
			} elseif ($letMeKnow === 'whatIshouldd') {
				
				
				if ($vacaSpot === 'hot') {
					$sueEllenRecommendation = "visit the Devil's Golf Course. It's a field full of  tiny hills of hardened salt. It  looks like you're on Mars!";
				} elseif ($vacaSpot === 'cold') {
					$sueEllenRecommendation = "hike in Denali National Park. The views of Denali, the tallest mountain in North America, are spectacular!";
				} elseif ($vacaSpot === 'nearby') {
					$sueEllenRecommendation = "do all the stuff you never stop to do!  Talk to people who grew up in your town to find out more about it.";
				} elseif ($vacaSpot === 'faraway') {
					$sueEllenRecommendation = "check out the volcanoes, the beaches, and the glaciers. Totally cool!";
				}
				
				
				
			} elseif ($letMeKnow === 'whatsouvenir') {
				
				
				if ($vacaSpot === 'hot') {
					$sueEllenRecommendation = "bring back photos of Scotty's Castle. It's a mansion in the middle of the desert.";
				} elseif ($vacaSpot === 'cold') {
					$sueEllenRecommendation = "buy some cool Eskimo art, like a beaded necklace or a ring. It's beautiful.";
				} elseif ($vacaSpot === 'nearby') {
					$sueEllenRecommendation = "find something with your town's name on it, and keep it in your room. I have an Elwood City map on my wall.";
				} elseif ($vacaSpot === 'faraway') {
					$sueEllenRecommendation = "buy yourself a Buzzy Bee&trade; pull-toy. They're very popular there, and they're so cute!";
				}
				
				
			} elseif ($letMeKnow === 'whatpostcard') {
				
				
				if ($vacaSpot === 'hot') {
					$sueEllenRecommendation = "send a postcard of the nearby ghost town that only existed from 1904 to 1916. It's kind of spooky.";
				} elseif ($vacaSpot === 'cold') {
					$sueEllenRecommendation = "send a postcard of animals from this region, like grizzly bears or wolves. They're beautiful creatures.";
				} elseif ($vacaSpot === 'nearby') {
					$sueEllenRecommendation = "send a funny postcard to your best friend that says, \"Wish you were here. Oh, wait. You ARE here.\"";
				} elseif ($vacaSpot === 'faraway') {
					$sueEllenRecommendation = "send a postcard showing Maori culture. The Maori people have lived in New Zealand for thousands of years.";
				}
				
				
			}
			
			
			
			
			
			
			if ($experience === 'mostembarras') {
				
				$sueEllenExperienceStarter = "I actually had a very embarrassing moment";
				
				if ($vacaSpot === 'hot') {
					$sueEllenExperience = "My mom and I thought we were alone, and we were singing \"Hound Dog\" by Elvis. When we turned around, people were clapping! I turned beet red.";
				} elseif ($vacaSpot === 'cold') {
					$sueEllenExperience = "We were hiking. I saw something move and yelled, \"Aaah! Giant horse!\" People turned and said, \"That's a moose.\" If I could have climbed into my backpack, I would have.";
				} elseif ($vacaSpot === 'nearby') {
					$sueEllenExperience = "I gave the postman an Elwood City postcard to mail. I told him I was vacationing here, even though I live here. I think he thinks I'm a little weird.";
				} elseif ($vacaSpot === 'faraway') {
					$sueEllenExperience = "I asked for a kiwi at a fruit stand... then added that I wanted the fruit, not the bird. The grocer said, \"Yes, I had figured that out.\" I was SO embarrassed.";
				}
				
				
			} elseif ($experience === 'bestthingtha') {
				
				
				if ($vacaSpot === 'hot') {
					$sueEllenExperience = "I saw a wonderful sunset on Golden Canyon. The light really changes the color of the rock walls.";
				} elseif ($vacaSpot === 'cold') {
					$sueEllenExperience = "I actually saw the Northern Lights, those shimmering colored lights in the sky. They looked so magical!";
				} elseif ($vacaSpot === 'nearby') {
					$sueEllenExperience = "I learned that even though I love to travel, Elwood City is my favorite place to be.";
				} elseif ($vacaSpot === 'faraway') {
					$sueEllenExperience = "I was lucky enough to see a kakapo, a flightless parrot that lives only in New Zealand. These birds are so endangered, there are only about 100 left. I hope there are more soon!";
				}
				
				
			} elseif ($experience === 'funniestthin') {
				
				
				if ($vacaSpot === 'hot') {
					$sueEllenExperience = "My mom was pretending to swim in this big field of salt where water used to be. I took a picture of her. I still laugh when I look at it!";
				} elseif ($vacaSpot === 'cold') {
					$sueEllenExperience = "My mom had about ten layers on to stay warm. Whenever we passed anybody, she had to turn sideways to keep from knocking them over. It was really funny!";
				} elseif ($vacaSpot === 'nearby') {
					$sueEllenExperience = "My mom and I went to the Sugar Bowl and tried the weird flavors we never eat. You should have seen Mom's face after she tasted the Broccoli Fudge Crunch. Hilarious!";
				} elseif ($vacaSpot === 'faraway') {
					$sueEllenExperience = "This bird started eating our windshield wipers! It's called a kea, and it will eat all the rubber off your car! We got the giggles, and couldn't stop!";
				}
				
				
				
			} elseif ($experience === 'bestfoodyoue') {
				
				
				if ($vacaSpot === 'hot') {
					$sueEllenExperience = "My mom and I sat together on this dry, flat land and ate plain old peanut butter sandwiches. But somehow they were the best sandwiches ever!";
				} elseif ($vacaSpot === 'cold') {
					$sueEllenExperience = "Fish and seafood are popular there, so I tried grilled salmon with crab cakes. It was delicious!";
				} elseif ($vacaSpot === 'nearby') {
					$sueEllenExperience = "I sat on the edge of Bear Lake on a really hot day and ate lemon Italian ice. It was the perfect sweet treat to beat the heat!";
				} elseif ($vacaSpot === 'faraway') {
					$sueEllenExperience = "It was this delicious pastry called Pavlova. It's made with meringue (sweetened egg whites), cream, and kiwifruit. Yum!";
				}
				
				
			}
			
			
			
			
			switch($closing) {
				case 'Yourstruly':
				$sueEllenClosing = "Have a safe trip!";
				break;
				case 'Sincerely':
				$sueEllenClosing = "Enjoy the sights and sounds!";
				break;
				case 'Yoursintrave':
				$sueEllenClosing = "Have a great journey!";
				break;
				case 'Warmly':
				$sueEllenCrossing = "Bon voyage!";
				break;
			}
			
			switch(rand(0,9)) {
				case 0:
				$sueEllenPlaceDesired = "Chicken, Alaska";
				break;
				case 1:
				$sueEllenPlaceDesired = "Ding Dong, Texas";
				break;
				case 2:
				$sueEllenPlaceDesired = "Dry Prong, Louisiana";
				break;
				case 3:
				$sueEllenPlaceDesired = "Hot Coffee, Mississippi";
				break;
				case 4:
				$sueEllenPlaceDesired = "Knockemstiff, Ohio";
				break;
				case 5:
				$sueEllenPlaceDesired = "Monkey's Eyebrow, Kentucky";
				break;
				case 6:
				$sueEllenPlaceDesired = "Mud Lick, Kentucky";
				break;
				case 7:
				$sueEllenPlaceDesired = "Smackover, Arkansas";
				break;
				case 8:
				$sueEllenPlaceDesired = "Two Egg, Florida";
				break;
				case 9:
				$sueEllenPlaceDesired = "Yeehaw Junction, Florida";
				break;
			}
			
			
			
			$finalLetter = "
			<p>$sueEllenInitialGreeting</p>
			<p>$sueEllenGreeting</p>
			<p>I know just the place for your vacation: $sueEllenSpotRecommendation</p>
			<p>If you go, you should $sueEllenRecommendation</p>
			<p>I actually had a very embarrassing moment on MY trip to $sueEllenSpot. $sueEllenExperience</p>
			<p>$sueEllenClosing</p>
			<p>P.S. Have you ever heard of $sueEllenPlaceDesired? I've always wanted to go there!</p>
			<p>&nbsp;</p>";
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
		} elseif ($sendTo === 'Send to The Brain') {
			
			$featurePath = "../../i/games/lettersto/brain/brain_";
			
			
			
			$estoy = $_POST['i_am'];
			$necesito = $_POST['i_need'];
			$questionTopic = $_POST['my_question'];
			$mustSay = $_POST['must_say'];
			$mightAsWell = $_POST['might_as_well'];
			$from = $_POST['from'] ? $_POST['from'] : "friend";
			
			$brainGreeting = "Dear $from,";
			
			
			switch($mustSay) {
				case 'first_person':
				$brainSelfIndulgence = "I'm honored I'm the first person you thought of.";
				break;
				case 'secret':
				$brainSelfIndulgence = "I certainly won't tell anyone about your plans.";
				break;
				case 'last_hope':
				$brainSelfIndulgence = "I'm your last hope? You should have written sooner!";
				break;
				case 'sweater':
				$brainSelfIndulgence = "I'm glad you like my sweater. It helps me think.";
				break;
			}
			
			switch($necesito) {
				case 'expert_advice':
				$brainSatisfaction = "If you need expert advice, you've come to the right place. They don't call me the Bran for nothing. Oops. I mean the The Brain.";
				break;
				case 'sneeze':
				$brainSatisfaction = "Did you know it's impossible to keep your eyes open when you sneeze? Weird.";
				break;
				case 'lemonade':
				$brainSatisfaction = "If you're really thirsty, water is much better than lemonade.";
				break;
				case 'dollars':
				$brainSatisfaction = "I don't happen to have $5 million, but if you return some cans and bottles, you could get three dollars maybe? Then you would only need $4,999,997 more.";
				break;
			}
			
			switch($mightAsWell) {
				case 'hiding_card':
				$brainMightAsWell = "hide your report card. I've been told that never works anyway.";
				break;
				case 'juggle':
				$brainMightAsWell = "join the circus. I do love the circus, though. There's so much physics going on!";
				break;
				case 'make_up':
				$brainMightAsWell = "make anything up. That's harder than doing the actual work!";
				break;
				case 'fingernails':
				$brainMightAsWell = "grow your fingernails long. Did you know the world record holder has a total of over 20 feet of nail on one hand? Whew!";
				break;
			}
			
			
			if ($estoy === 'working_project') {
				
				if ($questionTopic === 'volcano') {
					$brainAdvice = "Make it big enough to be impressive, but not so big you can't carry it. It's very difficult to send a volcano in the mail.";
				} elseif ($questionTopic === 'monkeys') {
					$brainAdvice = "I don't know about the monkeys, but I DO know your science teacher is going to be surprised by your project. Have you considered a diorama instead?";
				} elseif ($questionTopic === 'cumulonimnbus') {
					$brainAdvice === 'Your project must be about clouds! A cumulonimbus is a type of rain cloud, and is not rude - unless you say it loudly at the movie theater.';
				} elseif ($qusetionTopic === 'wood_or_cheese') {
					$brainAdvice === "Use the cheese. It's a fact that science projects made with cheese just taste better.";
				}
				
			} elseif ($estoy === 'surprise_friend') {
				
				if ($questionTopic === 'volcano') {
					$brainAdvice = 'I think a four-foot tall volcano is enough to surprise anyone except a volcano scientist. Is your friend a volcano scientist?';
				} elseif ($questionTopic === 'monkeys') {
					$brainAdvice = 'I think that monkeys might not be the best surprise. But did you know that monkeys eat many more things than just bananas? Now you do.';
				} elseif ($questionTopic === 'cumulonimbus') {
					$brainAdvice = "A cumulonimbus is just a type of rain cloud. So if you want to surprise your friend by saying a long scientific word, you'll offend no one.";
				} elseif ($questionTopic === 'wood_or_cheese') {
					$brainAdvice = "It depends. If your friend expects cheese, I suggest wood. But if your friend thinks you're bringing wood, I recommend cheese to maximize the SBF (Surprise Bigness Factor).";
				}
				
				
			} elseif ($estoy === 'learn_clouds') {
				
				if ($questionTopic === 'volcano') {
					$brainAdvice = "If you're learning about clouds, I recommend a small volcano. The 1991 eruption of Mt. Pinatubo changed weather worldwide with its giant cloud of ash. If your volcano did that, I don't think your neighbors would be very happy.";
				} elseif ($questionTopic === 'monkeys') {
					$brainAdvice = "Ah... You must be studying the cloud forests of South America. You'll find lots of Howler monkeys there! You'll find plenty of food, too. A fascinating creature, the Howler monkey. Its call can be heard up to three miles away!";
				} elseif ($questionTopic === 'cumulonimbus') {
					$brainAdvice = "A cumulonimbus is a type of cloud, so it's not rude. Other cloud types are stratus, cirrus, and plain cumulus. Some people see shapes in the clouds. I see long words!";
				} elseif ($questionTopic === 'wood_or_cheese') {
					$brainAdvice = "Use wood AND cheese. Step one, build a chair out of wood. Step two, put the cheese on a plate. Step three, invite a meteorologist over to sit down and explain things, then serve her cheese!";
				}
				
			} elseif ($estoy === 'build_boat') {
				
				if ($questionTopic === 'volcano') {
					$brainAdvice = "I don't recommend keeping a model volcano on board a sailing vessel. Lava and boating don't mix.";
				} elseif ($questionTopic === 'monkeys') {
					$brainAdvice = "Hmm... monkeys on a boat. I suppose the monkeys WOULD be good at climbing the masts. Just don't let them steer.";
				} elseif ($questionTopic === 'cumulonimbus') {
					$brainAdvice = "Rude to say cumulonimbus? Not at all. It's just a type of cloud. However, they always bring rain, so if you're out on your boat, grab your raincoat!";
				} elseif ($questionTopic === 'wood_or_cheese') {
					$brainAdvice = 'Ever since the cracker incident aboard the  "Cheddar Lady," boats have been made of wood.';
				}
				
			}
			
			
			
			switch($closing) {
				case 'sugar_bowl':
				$brainClosing = 'Cordially,<br>The The Brain</br>';
				break;
				case 'CUL8R':
				$brainClosing = 'Sincerely,<br>The The Brain</br>';
				break;
				case 'TTFN':
				$brainClosing = "Ever your humble servant,<br>The The Brain</br>";
				break;
				case 'science_fair':
				$brainClosing = "To the Science Fair!<br>The The Brain</br>";
				break;
			}
			
			
			switch(rand(0,12)) {
				case 0:
				$brainPS = "P.S. They say that you can't tell a book by its cover. But if the cover says \"The Complete Theories of Albert Einstein,\" I bet it's fascinating!";
				break;
				case 1:
				$brainPS = "P.S. They say that silence is golden, but actually, silence has no color, since it's just the absence of sound.";
				break;
				case 2:
				$brainPS = "P.S. They say that lightning never strikes twice in the same place. But actually, that's not true. Some tall buildings are struck all the time!";
				break;
				case 3:
				$brainPS = "P.S. They say that a man's home is his castle. But logically, that's only true if he lives in a castle.";
				break;
				case 4:
				$brainPS = "P.S. They say that birds of a feather flock together. Except for the Solitary Sandpiper, who travels alone when migrating.";
				break;
				case 5:
				$brainPS = "P.S. They say that you shouldn't count your chickens before they are hatched. This, of course, would be impossible to do anyway.";
				break;
				case 6:
				$brainPS = "P.S. They say that experience is the best teacher. I say that Mr. Ratburn is the best teacher.";
				break;
				case 7:
				$brainPS = "P.S. They say that great minds think alike. We do, don't we?";
				break;
				case 8:
				$brainPS = "P.S. They say that actions speak louder than words. Especially if the action is banging on a large gong. That's really loud!";
				break;
				case 9:
				$brainPS = "P.S. They say that all that glitters is not gold. They're right. For instance, glitter isn't gold.";
				break;
				case 10:
				$brainPS = "P.S. They say the first step is the hardest. This is especially true if you're at the top of a high dive looking down.";
				break;
				case 11:
				$brainPS = "P.S. They say the grass is always greener on the other side of the fence.<br>But the laws of probability state that it's more likely to be less green - or exactly as green - than it is to be greener.";
				break;
				case 12:
				$brainPS = "P.S. They say that you shouldn't put all your eggs in one basket. But really, how could you? That would be a HUGE basket!";
				break;
			}
			
			
			
			$finalLetter = "
			<p>$brainGreeting</p>
			<p>$brainSelfIndulgence$brainSatisfaction</p>
			<p>And don't worry. I won't let you down. So you won't have to $brainMightAsWell</p>
			<p>Regarding your question: $brainAdvice</p>
			<p>Hope this helps! Let me know how it all turns out.</p>
			<p>$brainClosing</p>
			<p>$brainPS</p>
			<p>&nbsp;</p>";
			
			
			
			
			
			
			
		}
		
		
		return $finalLetter;
		
		
		
		
	}
	
	
	
	
	
	
	$title = str_replace($_POST['Send'], 'Send to ', '');
	
	
	
	
	?>
	
	
	
	
	
	
	
	
	
	
	
	
	
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="https://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
	
	
	
<?php
	require '../../vendor/autoload.php';
	use Twig\Environment;
	use Twig\Loader\FilesystemLoader;

	$loader = new FilesystemLoader('../../');
	$twig = new Environment($loader);
	
	echo $twig->render('arthur/includes/head.twig', [
		'additionalTitle' => " . Games . $title",
		'desc' => 'Francine displays four words. Pick the one that doesnt belong with the others. Get a hint if needed!',
		'keywds' => 'matching, belong, words, read, critical thinking',
		'specialInclude' => '<link rel="stylesheet" type="text/css" href="/arthur/c/games.css" media="screen" />',
		'noSitewide' => true
		]
	);
	echo "<body>";
	echo $twig->render('template_includes/legacy_headband_include.html');
	echo $twig->render('template_includes/legacy_pbsk_js.html');
	

	
	
	
	?>
	





<div id="coastline">
		<?php
			echo $twig->render('arthur/includes/nav.twig', [
				'selectedNav' => 'games'
			]
			);
		?>
<!-- end bbinclude -->
		<div id="content" class="bg-9ff">
		<div class="ruler"></div>
			<div class="print-instr">
			<a href="../lettersto/index.html"><h4 id="letterstoSmHeader">Letters To...</h4></a>
			<ul id="printSideNav">
			<li><a href="index.html" class="selected"><span>Arthur</span></a></li>
			<li><a href="/arthur/games/heyfrancine/index.html"><span>Francine</span></a></li>
			<li><a href="/arthur/games/traveltales/index.html"><span>Sue Ellen</span></a></li>
			<li><a href="/arthur/games/askbrain/index.html"><span>The Brain</span></a></li>
			</ul></div>
			<div id="printableArea">			
<table width="637" cellspacing="0" cellpadding="0" border="0">
				<tbody><tr>
					<td colspan="7"><a href="/arthur/games/askbrain/index.html"><?php echo(lettersToHeader($_POST['Send'])); ?></a></td>
				</tr>
				<tr>
					<td width="88"><img src="/arthur/i/1px.gif" alt="" width="88"></td>
					<td width="2" bgcolor="#000000"><img src="/arthur/i/1px.gif" alt="" width="2"></td>
					<td width="10" bgcolor="#9999FF"><img src="/arthur/i/1px.gif" alt="" width="10"></td>
					<td width="450" bgcolor="#9999FF">
						<img src="/arthur/i/1px.gif" alt="" width="450" height="1">
						<?php echo(buildLetter()) ?>
					</td>
					<td width="10" bgcolor="#9999FF"><img src="/arthur/i/1px.gif" alt="" width="10"></td>
					<td width="2" bgcolor="#000000"><img src="/arthur/i/1px.gif" alt="" width="2"></td>
					<td width="75"><img src="/arthur/i/1px.gif" alt="" width="75"></td>
				</tr>
				<tr>
					<td colspan="7"><a href="/arthur/games/askbrain/index.html"><?php echo(lettersToFooter($_POST['Send'])); ?></a></td>
				</tr>
				</tbody></table>
			</div>
			<div id="relatedContent">
				<ul>
				<li><a href="/arthur/friends/arthur/index.html" id="rcArthur">Arthur</a></li>
				<li><a href="/arthur/games/supermarket/index.html" id="rcSupermarket">Supermarket Adventure</a></li>
				<li><a href="/arthur/clubs/poetry/index.html" id="rcClubPoetry">Poetry Club</a></li>
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
				
				<ul id="footerSubNav"><li><a href="/arthur/parentsteachers/index.html">Parents &amp; Teachers</a></li>
				<li><a href="/arthur/parentsteachers/help/index.html">Need Help?</a></li>
				<li><a href="/buster/index.html"><div class="wrap">Visit POSTCARDS FROM BUSTER</div></a></li>
				<li><a href="https://sgptv.org/programs/program/arthur/">Program Sponsorship</a></li>
				<li><a href="/arthur/parentsteachers/site/song_credits.html">Song and Music Credits</a></li></ul>
				<img src="/arthur/i/footer/footer_rule.gif" alt="" class="footer_separator" width="3" height="174" border="">
				<p>All characters and underlying materials (including artwork) © Marc Brown.<br>
				"Arthur" and "D.W." and all of the ARTHUR characters are trademarks of Marc Brown.<br><a href="/arthur/parentsteachers/site/copyright.html">© 2015 WGBH</a></p>
				<img src="/arthur/i/footer/footer_rule.gif" alt="" class="footer_separator" width="3" height="174" border="">
			</div>
		</div>
<!-- end bbinclude -->
</div>

<script type="text/javascript" id="">(function(){window.__piiRedact=window.__piiRedact||!1;var k=function(f){var c=[{name:"EMAIL",regex:/[^\/]{4}(@|%40)(?!example\.com)[^\/]{4}/gi,group:""},{name:"SELF-EMAIL",regex:/[^\/]{4}(@|%40)(?=example\.com)[^\/]{4}/gi,group:""},{name:"TEL",regex:/((tel=)|(telephone=)|(phone=)|(mobile=)|(mob=))[\d\+\s][^&\/\?]+/gi,group:"$1"},{name:"NAME",regex:/((firstname=)|(lastname=)|(surname=))[^&\/\?]+/gi,group:"$1"},{name:"PASSWORD",regex:/((password=)|(passwd=)|(pass=))[^&\/\?]+/gi,group:"$1"},{name:"ZIP",
regex:/((postcode=)|(zipcode=)|(zip=))[^&\/\?]+/gi,group:"$1"}],d=function(a){return(a||document.location.search).replace(/(^\?)/,"").split("\x26").map(function(b){return b=b.split("\x3d"),this[b[0]]=decodeURIComponent(b[1]),this}.bind({}))[0]},h=function(a){return Object.keys(a).map(function(b){return b+"\x3d"+encodeURIComponent(a[b])}).join("\x26")},e=d(f),g;for(g in e)c.forEach(function(a){e[g].match(a.regex)&&(e[g]=e[g].replace(a.regex,a.group+"[REDACTED "+a.name+"]"))});return h(e)};if(!window.__piiRedact){window.__piiRedact=
!0;try{var l=window.navigator.sendBeacon;window.navigator.sendBeacon=function(){if(arguments&&arguments[0].match(/google-analytics\.com.*v=2&/)){var f=arguments[0].split("?")[0],c=arguments[0].split("?")[1];c=k(c);var d=[];arguments[1]&&arguments[1].split("\r\n").forEach(function(h){d.push(k(h))});arguments[0]=[f,c].join("?");arguments[1]&&0<d.length&&d.join("\r\n")}return l.apply(this,arguments)}}catch(f){return l.apply(this,arguments)}}})();</script><script type="text/javascript" id="">function getIP(a){dataLayer.push({event:"ipEvent",ipAddress:a.ip})};</script>

<script type="text/javascript" id="" src="https://api.ipify.org?format=jsonp&amp;callback=getIP"></script><div style="display: none; visibility: hidden;">  <script>sessionStorage.setItem("my_ip",google_tag_manager["GTM-MR8JHB"].macro(29));</script></div><div id="break-time-overlay" class="companion-overlay full-overlay" style="display:none;">
    <img class="play-time-scene" alt="Time for a break!" src="/shell/images/present/companion/break-time-scene.svg">
    <h2>Come play again later!</h2>
</div><div id="bedtime-overlay" class="companion-overlay full-overlay" style="display:none;">
    <img class="play-time-scene" alt="Time for bed!" src="/shell/images/present/companion/bedtime-scene.svg">
    <h2>Come play again tomorrow!</h2>
</div><div id="dinner-time-overlay" class="companion-overlay full-overlay" style="display:none;">
    <img class="play-time-scene" alt="Time to eat!" src="/shell/images/present/companion/meal-time-scene.svg">
    <h2>Come play again later!</h2>
</div><div id="time-for-school-overlay" class="companion-overlay full-overlay" style="display:none;">
    <img class="play-time-scene" alt="Time for school!" src="/shell/images/present/companion/time-for-school-scene.svg">
    <h2>Come play again later!</h2>
</div><div id="cboxOverlay" style="display: none;"></div><div id="colorbox" class="" style="display: none;"><div id="cboxWrapper"><div><div id="cboxTopLeft" style="float: left;"></div><div id="cboxTopCenter" style="float: left;"></div><div id="cboxTopRight" style="float: left;"></div></div><div style="clear: left;"><div id="cboxMiddleLeft" style="float: left;"></div><div id="cboxContent" style="float: left;"><div id="cboxLoadedContent" style="width: 0px; height: 0px; overflow: hidden; float: left;"></div><div id="cboxTitle" style="float: left;"></div><div id="cboxCurrent" style="float: left;"></div><div id="cboxNext" style="float: left;"></div><div id="cboxPrevious" style="float: left;"></div><div id="cboxSlideshow" style="float: left;"></div><div id="cboxClose" style="float: left;"></div></div><div id="cboxMiddleRight" style="float: left;"></div></div><div style="clear: left;"><div id="cboxBottomLeft" style="float: left;"></div><div id="cboxBottomCenter" style="float: left;"></div><div id="cboxBottomRight" style="float: left;"></div></div></div><div style="position: absolute; width: 9999px; visibility: hidden; display: none;"></div></div><div id="sm2-container" class="movieContainer" style="position: absolute; width: 8px; height: 8px; top: -9999px; left: -9999px;"><embed name="sm2movie" id="sm2movie" src="/scripts/soundmanager2/swf/soundmanager2.swf" quality="high" allowscriptaccess="always" bgcolor="#ffffff" pluginspage="https://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" allowfullscreen="false" width="100%" height="100%"></div></body></html>