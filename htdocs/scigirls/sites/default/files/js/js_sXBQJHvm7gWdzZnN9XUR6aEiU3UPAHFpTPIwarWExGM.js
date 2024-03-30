(function ($) {
	var Billboard = function(element) {
		this.element = element;
		this.carouselElement = this.element.find(".jcarousel");

		this.init();
	};

	/**
	 * Init
	 */
	Billboard.prototype.init = function() {
		var that = this;

		//Carousel
		this.carousel = this.carouselElement.jcarousel({
			wrap: "circular",
			animation: {
				duration: 700,
				easing: "easeOutExpo"
			},
			transitions: Modernizr.csstransitions ? {
      	transforms:   Modernizr.csstransforms,
      	transforms3d: Modernizr.csstransforms3d
    	} : false
		}).jcarouselAutoscroll({
			interval: 5000,
			target: "+=1",
			autostart: true
		}).data('jcarousel');

		//Hammer
		if(Modernizr.touch) {
			this.carouselElement.hammer().bind("swipeleft dragleft", function() {
				that.next();
			}).bind("swiperight dragright", function() {
				that.prev();
			});
		}

		//Events
		this.element.find(".next").click(function(e) {
			e.preventDefault();
			that.next();
		});

		this.element.find(".prev").click(function(e) {
			e.preventDefault();
			that.prev();
		});
	};

	/**
	 * Next
	 */
	Billboard.prototype.next = function() {
		this.carousel.scroll("+=1");
	};

	/**
	 * Prev
	 */
	Billboard.prototype.prev = function() {
		this.carousel.scroll("-=1");
	};

	window.sg.Billboard = Billboard;

	jQuery(document).ready(function() {
		window.billboard = new Billboard(jQuery("#home-billboard"));
	});
})(jQuery);;
(function($) {
  var Poll = function(element) {
    this.element = element;
    this.elements = {
      poll: element.find(".poll"),
      answers: element.find(".answer")
    };
    this.state = false;
    this.config = {};
    this.voting = false;

    this.init();
  };



  /**
   * Init
   */
  Poll.prototype.init = function() {
    var that = this;

    this.config = Drupal.settings.sg_poll;

    if(!jQuery.cookie("sg-poll-"+this.config.id)) {
      this.voteState();
      this.elements.poll.show();
    } else {
      this.result(function(result) {
        that.resultState(result);
        that.elements.poll.show();
      });
    }
  };

  /**
   * Vote state
   */
  Poll.prototype.voteState = function() {
    var that = this;
    this.state = "vote";

    //Add/remove classes
    this.elements.poll.addClass("vote").removeClass("result");

    //Bind vote click
    this.elements.answers.unbind("clickResult").bind("click.Vote", function(e) {
      e.preventDefault();

      that.vote(jQuery(this).attr("data-answer"), function(result) {
        that.resultState(result);
      });
    });
  };

  /**
   * Result state
   */
  Poll.prototype.resultState = function(result) {
    this.state = "result";

    //Add/remove classes
    this.elements.poll.addClass("result").removeClass("vote");

    //Unbind vote click
    this.elements.answers.unbind("click.Vote").bind("click.Result", function(e) {
      e.preventDefault();
    });

    //Show results
    var total = 0;
    var max = 0;
    for(var j=0; j<result.options.length; j++) {
      if(result.options[j] > max) {
        max = result.options[j];
      }
      total += result.options[j];
    }

    var option, element;
    var length = result.options.length;
    for(var i=0; i<length; i++) {
      option = result.options[i];
      element = this.elements.answers.eq(i);

      element.find("a").append(" ("+option+")");
      element.find(".bar").width(Math.round((option/total)*100)+"%");

      if(option === max) {
        element.addClass('lead');
      }
    }
  };

  /**
   * Vote
   */
  Poll.prototype.vote = function(answer, callback) {
    var that = this;

    if(this.voting) {
      return false;
    }
    this.voting = true;

    jQuery.ajax({
      url: Drupal.settings.basePath + "api/poll/vote/" + this.config.id + "/" + answer,
      type: 'POST',
      success: function(result) {
        if(typeof result === "object") {
          jQuery.cookie("sg-poll-" + that.config.id, answer, {expires: 365});

          if(typeof callback === "function") {
            callback(result);
          }
        } else {
          alert(window.sg.errorMessage);
        }
      },
      error: function(e) {
        window.sg.error(e);
      },
      complete: function() {
        that.voting = false;
      }
    });
  };

  /**
   * Result
   */
  Poll.prototype.result = function(callback) {
    var that = this;

    jQuery.ajax({
      url: Drupal.settings.basePath + "api/poll/result/" + this.config.id,
      success: function(result) {
        if(typeof result === "object") {
          if(typeof callback === "function") {
            callback(result);
          } else {
            that.element.remove();
          }
        }
      },
      error: function() {
        that.element.remove();
      }
    });
  };

  window.sg.Poll = Poll;

  jQuery(document).ready(function() {
    window.poll = new Poll(jQuery(".sg-poll"));
  });
})(jQuery);;
(function($) {
  jQuery(document).ready(function() {
    var signs = jQuery("#home-profile").find(".girl").children();
    
    jQuery(signs[Math.floor(Math.random()*signs.length)]).css("display", "block");
  });
})(jQuery);;
