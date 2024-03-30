var vidPlayerRef;
(function($) {
	$(document).on("ready", function() {

		var isMed = false;
		var isSml = false;
		var caretDnPos = "-60px 8px";
		var caretUpPos = "-89px 7px";
		var caretDnRule = {"background-position":caretDnPos};
		var caretUpRule = {"background-position":caretUpPos};
		var cornRnd = {"border-radius":"12px", "-webkit-border-radius":"12px"};
		var cornSqr = {"border-radius":"12px 12px 0 0", "-webkit-border-radius":"12px 12px 0 0"};
		var touchclick = ("ontouchstart" in document.documentElement) ? "touchstart" : "click";
		var endclick = ("touchend" in document.documentElement) ? "touchend" : "mouseup";
		var isPhone = (/(iphone|ipod)/i.test(navigator.userAgent));

		function normalizeNavAreaTop() {
			$("#wrap-n-a-t").css("width", "212px");
			$("#nav-area-top").css({"height":"auto"});
			$("#nav-area-top li").css({"width":"auto", "height":"auto"});
			$("#nav-area-top div span").css("visibility", "visible");
		}

		function mobilizeNavAreaTop() {
			$("#nav-area-top, #nav-area-top li").css("height", "18px");
			$("#wrap-n-a-t").css({"width":"99px"});
			$("#nav-area-top div span").css("visibility", "hidden");
			$("#nav-area-top .caret-area").css("background-position", caretDnPos);
		}

		function normalizeTopicMenu() {
			$("#wrap-n-a-t").css("margin-right", "3px");
			$(".menu-topics ul").show();
			$(".menu-topics > li > div").off(touchclick);
			$(".menu-topics li.topic").css(cornSqr);
		}

		function mobilizeTopicMenu() {
			$("#wrap-n-a-t").css("margin-right", "-2px");
			$(".caret-menu").css(caretDnRule);
			$(".menu-topics li.topic").css(cornRnd);
			$(".menu-topics ul").hide();
			$(".menu-topics > li > div").on(touchclick, function() {
				var div = $(this);
				if (div.data("disab")) { return false; } else { div.data("disab", true); }
				var caret = $(div.children()[0]);
				var p = div.parent();
				$($(this).siblings()[0]).slideToggle(250, function() {
					div.data("disab", false);
					if (!div.data("open")) {
						div.data("open", true);
						caret.css(caretUpRule);
						p.css(cornSqr);
					} else {
						div.data("open", false);
						caret.css(caretDnRule);
						p.css(cornRnd);
					}

				});
				return false;
			});
		}

		var loc = window.location.href;
		var pg = loc.substring(loc.lastIndexOf("/")+1);
		if (pg == "" || pg == "index.html") {
			$("#nav-main h2 a").addClass("current");
			$("#nav-main h2 a").on(touchclick, function(){return false;});
		};
		$("#nav-area-top .nav-area a").each(function(idx) {
			if ($(this).attr("href") == pg) { $(this).parent().addClass("current"); return false; }
			else if ($(this).attr("href") == pg.replace(/\d+/,"1")) { $(this).parent().addClass("within"); return false; }
		});
		$("#nav-area-bot .nav-area a").each(function(idx) {
			if ($(this).attr("href") == pg.replace(/\d+/,1)) { $(this).parent().addClass("current"); return false; }
			else if ($(this).attr("href") == pg.replace(/\d+/,"1")) { $(this).parent().addClass("within"); return false; }
		});

		$("#nav-mobile ul").css("display", "block");
		$("#nav-mobile ul").hide();
		$("#nav-mobile > li > div").on(touchclick, function(evt) {
			var div = $(this);
			if (div.data("open") && $(evt.target).attr("href") != undefined) { return true; }
			if (div.data("disab")) { return false; } else { div.data("disab", true); }
			var caret = $($(this).children()[0]);
			$("#nav-mobile ul").slideToggle(250, function() {
				div.data("disab", false);
				if (!div.data("open")) {
					div.data("open", true);
					caret.css("background-position", caretUpPos);
				} else {
					div.data("open", false);
					caret.css("background-position", caretDnPos);
				}
			});
			return false;
		});

		$(".nav-area").css("display", "block");
		$(".nav-area").hide();
		$("#nav-area-top > li > div").on(touchclick, function() {
			var div = $(this);
			if (div.data("disab")) { return false; } else { div.data("disab", true); }
			var menu = $("#nav-area-top ul.nav-area");
			var caret = $("#nav-area-top .caret-area");
			if (!div.data("open")) {
				if (isPhone) { $("video").css("visibility", "hidden"); }
				if (isSml) { normalizeNavAreaTop(); }
				menu.slideToggle(250, function() {
					div.data("disab", false);
					div.data("open", true);
					caret.css("background-position", caretUpPos);
				});
			} else {
				menu.slideToggle(250, function() {
					div.data("disab", false);
					div.data("open", false);
					if (isSml) { mobilizeNavAreaTop(); } else { caret.css("background-position", caretDnPos); }
					if (isPhone) { $("video").css("visibility", "visible"); }
				});
			}
			return false;
		});

		$("#nav-area-bot > li > div").on(touchclick, function() {
			var div = $(this);
			if (div.data("disab")) { return false; } else { div.data("disab", true); }
			var menu = $("#nav-area-bot ul.nav-area");
			var caret = $("#nav-area-bot .caret-area");
			if (!div.data("open")) {
				menu.slideToggle(250, function() {
					div.data("disab", false);
					div.data("open", true);
					caret.css("background-position", caretUpPos);
				});
			} else {
				menu.slideToggle(250, function() {
					div.data("disab", false);
					div.data("open", false);
					caret.css("background-position", caretDnPos);
				});
			}
			return false;
		});

		$("#back-top").on(touchclick, function() { $("html, body").animate({scrollTop:0}, 250); return false; });

		$("#nav-area-top a").on(endclick, function() {
			$("#nav-area-top > li > div").data("open", false);
			$("#nav-area-top .nav-area").hide();
			if (isSml) { mobilizeNavAreaTop(); } else { $("#nav-area-top .caret-area").css("background-position", caretDnPos); }
			return true;
		});

		$("#nav-area-bot a").on(endclick, function() {
			$("#nav-area-bot > li > div").data("open", false);
			$("#nav-area-bot .nav-area").hide();
			$("#nav-area-bot .caret-area").css("background-position", caretDnPos);
			return true;
		});

		$(window).on(touchclick, function(evt) {
			var t = evt.target;
			var inMenu = false;

			if ($(t).attr("href") != undefined) { inMenu = true; }
			else {
				$(t).parents().each(function(i) {
					if ($(this).hasClass("nav-area") || $(this)==$("#nav-mobile") || $(this).hasClass("menu-topics")) { inMenu = true; return; }
				});
			}

			if (!inMenu) {
				if ($("#nav-area-top > li > div").data("open")) { $("#nav-area-top > li > div").trigger(touchclick); }
				if ($("#nav-area-bot > li > div").data("open")) { $("#nav-area-bot > li > div").trigger(touchclick); }
				if ($("#nav-mobile > li > div").data("open")) { $("#nav-mobile > li > div").trigger(touchclick); }
				$(".menu-topics > li > div").each(function(index) { if ($(this).data("open")) { $(this).trigger(touchclick); } });
			} else { evt.stopImmediatePropagation(); }
		});

		if ($(window).width() < 789) {
			isMed = true;
			mobilizeTopicMenu();
			if ($(window).width() < 561) {
				isSml = true;
				mobilizeNavAreaTop();
			}
		}

		$(window).on("resize", function() {
			var wid = $(window).width();
			if (pg == "" || pg == "index.html" || pg == "resources.html" || pg == "more-resources.html") {
				var stacked = ($(".menu-topics li.middle").css("float") == "none");
				if (stacked && !isMed) {
					isMed = true;
					mobilizeTopicMenu();
				} else if (!stacked && isMed) {
					isMed = false;
					normalizeTopicMenu();
				}
			}
			if (wid < 561 && !isSml) {
				isSml = true;
				if ($("#nav-area-top > li > div").data("open")) {
					$("#nav-area-top ul.nav-area").slideToggle(0, function() {
						$("#nav-area-top > li > div").data("open", false);
						$("#nav-area-top .caret-area").css("background-position", caretDnPos);
						mobilizeNavAreaTop();
					});
				} else { mobilizeNavAreaTop(); }
			} else if (wid >= 561 && isSml) {
				isSml = false;
				normalizeNavAreaTop();
			}
		});
	});
})(jQuery);
