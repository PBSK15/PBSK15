//jQuery.noConflict();
(function($) {
	$(document).on("ready", function() {
		var curQuest, numCor, choice, corAns, curText, asking;
		var posFdbk = ["You're correct!", "That's right!", "You got it!", "Good job!"];

		function resetQuiz() { curQuest = numCor = 0; }

		function showQuestion() {
			choice = -1;
			asking = true;
			curText = quizConfig.questions[curQuest];
			$("#quizImg").attr("src", "../img/" + quizConfig.topic + "_quiz.png");
			$("#quizImg").attr("alt", quizConfig.alts[0]);
			$("#quest").html(curText[0])
			$("#ans0 a > span").html(curText[1]);
			$("#ans1 a > span").html(curText[2]);
			$("#ans2 a > span").html(curText[3]);
			corAns = curText[4];
			$(".pgnum span").html((curQuest+1)+" of 10");
			$(".quiz li a").css("cursor", "pointer");
			var preload = new Image();
			preload.src = "../img/" + quizConfig.topic + "_quiz_" + (curQuest+1) + (quizConfig.isPNG[curQuest+1]?".png":".jpg");
		}

		$(".quiz li a").on("click", function() {
			if (!asking) { return false; }
			if (choice == -1) { $("#check").show(); }
			if (!$(this).parent().hasClass("chosen")) { $(this).parent().addClass("chosen"); }
			$(this).parent().siblings().removeClass("chosen");
			choice = $(this).parent().index();
			return false;
		});

		$("#check").on("click", function() {
			asking = false;
			$("#quizImg").attr("src", "../img/" + quizConfig.topic + "_quiz_" + (curQuest+1) + (quizConfig.isPNG[curQuest+1]?".png":".jpg"));
			$("#quizImg").attr("alt", quizConfig.alts[curQuest+1]);

			if (choice == corAns) { $("#fdbk").text(posFdbk[++numCor%4]); } else { $("#fdbk").text("That's not right."); }

			$("#quest").text("The correct answer is:");

			$("#fdbk").show();
			if (corAns != 0) { $("#ans0").hide(); }
			if (corAns != 1) { $("#ans1").hide(); }
			if (corAns != 2) { $("#ans2").hide(); }

			$("#ans0").removeClass("chosen");
			$("#ans1").removeClass("chosen");
			$("#ans2").removeClass("chosen");

			$(".quiz li a").css("cursor", "default");

			$(this).hide();
			$("#next").show();
			$(".quiz p.tip").html(curText[5]);
			$(".quiz p.tip").show();

			if (curQuest == 9) {
				var preload = new Image();
				preload.src = "../img/" + quizConfig.topic + "_quiz_" +(numCor>4?"good":"fair")+ ".png";
			}
			return false;
		});

		$("#again").on("click", function() {
			$(this).hide();
			$(".quiz p.tip").hide();
			$("#fdbk").hide();
			$("#ans0").show();
			$("#ans1").show();
			$("#ans2").show();
			resetQuiz();
			showQuestion();
			return false;
		});

		$("#next").on("click", function() {
			$(this).hide();
			$(".quiz p.tip").hide();

			if (curQuest < 9) {
				$("#fdbk").hide();
				$("#ans0").show();
				$("#ans1").show();
				$("#ans2").show();
				curQuest++;
				showQuestion();
			} else {
				$("#quizImg").attr("src", "../img/" + quizConfig.topic + "_quiz_" +(numCor<7?"fair":"good")+ ".png");
				$("#quizImg").attr("alt", quizConfig.alts[(numCor<7)?11:12]);
				$("#ans"+corAns).hide();
				$("#fdbk").text("You scored " + numCor + " out of 10" + (numCor<7?".":"!"));
				if (numCor<7) { $("#quest").html(quizConfig.endfeedbk[0]); }
				else          { $("#quest").html(quizConfig.endfeedbk[1]); }
				$("#again").show();
			}
			return false;
		});

		resetQuiz();
		showQuestion();
	});
})(jQuery);