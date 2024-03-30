	$(function(){


		$("#row1").after('<ul id="row2" />').next().html($("#row1").html());
		$("#row1 li:odd").remove();
		$("#row2 li:even").remove();

		$("#row1").carouFredSel({
			synchronise	: ["#row2", true,true,0],
			prev: '#prev2',
			next: '#next2',

			circular: false,
			infinite: false,
			pagination: "#pager2",
			auto: false
		});

		$("#row2").carouFredSel({
			circular: false,
			infinite: false,
			auto: false
		});


	  $("#marthaseeks").jBlitter({
	    'resource':'../i/gamesindex/gameBtn_marthaseeks.png',
	    'speed':10,
	    'frameWidth':364/2,
	    'frameHeight':126,
	    'reverse':false,
	    'loop':false
	  });



	  $("#marthassteaks").jBlitter({
	    'resource':'../i/gamesindex/gameBtn_marthassteaks.png',
	    'speed':10,
	    'frameWidth':364/2,
	    'frameHeight':126,
	    'reverse':false,
	    'loop':false
	  });


	  $("#towncrier").jBlitter({
	    'resource':'../i/gamesindex/gameBtn_towncrier.png',
	    'speed':10,
	    'frameWidth':364/2,
	    'frameHeight':126,
	    'reverse':false,
	    'loop':false
	  });

	  $("#skitspark").jBlitter({
	    'resource':'../i/gamesindex/gameBtn_skitspark.png',
	    'speed':10,
	    'frameWidth':364/2,
	    'frameHeight':126,
	    'reverse':false,
	    'loop':false
	  });

	  $("#puptalk").jBlitter({
	    'resource':'../i/gamesindex/gameBtn_puptalk.png',
	    'speed':10,
	    'frameWidth':364/2,
	    'frameHeight':126,
	    'reverse':false,
	    'loop':false
	  });

	$("#circus").jBlitter({
	    'resource':'../i/gamesindex/gameBtn_circus.png',
	    'speed':10,
	    'frameWidth':364/2,
	    'frameHeight':126,
	    'reverse':false,
	    'loop':false
	  });


	  $("#game_puppals").jBlitter({
	    'resource':'../i/gamesindex/gameBtn_puppals.png',
	    'speed':10,
	    'frameWidth':364/2,
	    'frameHeight':126,
	    'reverse':false,
	    'loop':false
	  });

	  $("#catch").jBlitter({
	    'resource':'../i/gamesindex/gameBtn_catch.png',
	    'speed':10,
	    'frameWidth':364/2,
	    'frameHeight':126,
	    'reverse':false,
	    'loop':false
	  });


	  $("#crazyvehicle").jBlitter({
	    'resource':'../i/gamesindex/gameBtn_crazyvehicle.png',
	    'speed':10,
	    'frameWidth':364/2,
	    'frameHeight':126,
	    'reverse':false,
	    'loop':false
	  });

	  $("#dogsonice").jBlitter({
	    'resource':'../i/gamesindex/gameBtn_dogsonice.png',
	    'speed':10,
	    'frameWidth':364/2,
	    'frameHeight':126,
	    'reverse':false,
	    'loop':false
	  });


	  $("#dogtags").jBlitter({
	    'resource':'../i/gamesindex/gameBtn_dogtags.png',
	    'speed':10,
	    'frameWidth':364/2,
	    'frameHeight':126,
	    'reverse':false,
	    'loop':false
	  });

	  $("#funnyphotos").jBlitter({
	    'resource':'../i/gamesindex/gameBtn_funnyphotos.png',
	    'speed':10,
	    'frameWidth':364/2,
	    'frameHeight':126,
	    'reverse':false,
	    'loop':false
	  });

	  $("#maketheband").jBlitter({
	    'resource':'../i/gamesindex/gameBtn_maketheband.png',
	    'speed':10,
	    'frameWidth':364/2,
	    'frameHeight':126,
	    'reverse':false,
	    'loop':false
	  });

	  $("#radiomartha").jBlitter({
	    'resource':'../i/gamesindex/gameBtn_radiomartha.png',
	    'speed':10,
	    'frameWidth':364/2,
	    'frameHeight':126,
	    'reverse':false,
	    'loop':false
	  });


	  $("#rhymetime").jBlitter({
	    'resource':'../i/gamesindex/gameBtn_rhymetime.png',
	    'speed':10,
	    'frameWidth':364/2,
	    'frameHeight':126,
	    'reverse':false,
	    'loop':false
	  });
	  $("#scrapbook").jBlitter({
	    'resource':'../i/gamesindex/gameBtn_scrapbook.png',
	    'speed':10,
	    'frameWidth':364/2,
	    'frameHeight':126,
	    'reverse':false,
	    'loop':false
	  });
	  $("#scrubapup").jBlitter({
	    'resource':'../i/gamesindex/gameBtn_scrubapup.png',
	    'speed':10,
	    'frameWidth':364/2,
	    'frameHeight':126,
	    'reverse':false,
	    'loop':false
	  });
	  $("#skitscooks").jBlitter({
	    'resource':'../i/gamesindex/gameBtn_skitscooks.png',
	    'speed':10,
	    'frameWidth':364/2,
	    'frameHeight':126,
	    'reverse':false,
	    'loop':false
	  });
	  $("#skitstricks").jBlitter({
	    'resource':'../i/gamesindex/gameBtn_skitstricks.png',
	    'speed':10,
	    'frameWidth':364/2,
	    'frameHeight':126,
	    'reverse':false,
	    'loop':false
	  });
	  $("#socksinspace").jBlitter({
	    'resource':'../i/gamesindex/gameBtn_socksinspace.png',
	    'speed':10,
	    'frameWidth':364/2,
	    'frameHeight':126,
	    'reverse':false,
	    'loop':false
	  });
	  $("#stickerbook").jBlitter({
	    'resource':'../i/gamesindex/gameBtn_stickerbook.png',
	    'speed':10,
	    'frameWidth':364/2,
	    'frameHeight':126,
	    'reverse':false,
	    'loop':false
	  });
	  $("#switcheroo").jBlitter({
	    'resource':'../i/gamesindex/gameBtn_switcheroo.png',
	    'speed':10,
	    'frameWidth':364/2,
	    'frameHeight':126,
	    'reverse':false,
	    'loop':false
	  });
	  $("#wordplay").jBlitter({
	    'resource':'../i/gamesindex/gameBtn_wordplay.png',
	    'speed':10,
	    'frameWidth':364/2,
	    'frameHeight':126,
	    'reverse':false,
	    'loop':false
	  });


	});