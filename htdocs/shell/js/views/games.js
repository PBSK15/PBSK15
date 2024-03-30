(function (require, define, factory) {
    //PBS AMD support for PBS.KIDS.requireJS
    if (typeof define === "function" && define.amd) {
        define(["jquery", "jquery-easing", "jquery-mobile", "images-loaded", "carson"], factory);
    } else {
        factory(jQuery);
    }
}(PBS.KIDS.require, PBS.KIDS.define, function ($) {
    // Page Random Color Switcher
    var colors = ['green', 'seafoam', 'blue', 'yellow']; //add as many classes as u want
    var randomnumber = Math.floor(Math.random() * colors.length);

    // Add random color scheme to topics page
    $('body.topics-page').removeClass('green seafoam blue yellow');
    $('body.topics-page').addClass(colors[randomnumber]);

    $(document).ready(function () {

        var parentsMessage;

        // Topics List sizing and alignment
        var topics_list = $('.games .topics-block.tall-list');
        var featured_game = $('.mega-feature');

        function align_topics_list() {
            var topics_block_height = $('.topics-block').height() + 18;
            var topics_panel_width = $('#topics-panel').width();
            var topics_row_width = $('.topics-block').width() * 3 + 40;

            if ($('body').hasClass('topics-page')) {
                topics_list.height(topics_block_height * 2 + 3);
            } else {
                topics_list.height(topics_block_height - 18);
            }
        }

        function align_game_feature() {
            var hard_games_width = $('.hard-game.grid-item').width() * 4 + 60;
            var hard_games_width_skinny = $('.hard-game.grid-item').width() * 3 + 40;
            var topics_games_width = $('.topics-game.grid-item').width() * 4 + 60;
            var topics_games_width_skinny = $('.topics-game.grid-item').width() * 3 + 40;
            var topics_games_width_micro = $('.topics-game.grid-item').width() * 2 + 20;

            if ($('body').hasClass('topics-page')) {
                if ($(window).width() <= 799 && $(window).width() > 510) {
                    featured_game.width(topics_games_width_skinny);
                    $('#hard-games-panel .section-head').width(topics_games_width_skinny);
                } else if ($(window).width() <= 510) {
                    featured_game.width(topics_games_width_micro);
                    $('#hard-games-panel .section-head').width(topics_games_width_micro);
                } else {
                    featured_game.width(topics_games_width);
                    $('#hard-games-panel .section-head').width(topics_games_width);
                }
            } else {
                if ($(window).width() <= 767) {
                    featured_game.width(hard_games_width_skinny);
                    $('#hard-games-panel .section-head').width(hard_games_width_skinny);
                } else {
                    featured_game.width(hard_games_width);
                    $('#hard-games-panel .section-head').width(hard_games_width);
                }
            }
        }

        // Topis List dynamic counter
        function topics_list_count() {
            var topic_list_item = topics_list.find('.topic-list-item');
            var list_item_height = topic_list_item.height();
            var topic_list_header = topics_list.children('.topics-head');
            var topic_list_link = topics_list.children('.more-link');
            var topics_list_view = topics_list.height() - topic_list_header.height() - topic_list_link.height();
            var link_colors = ['blue', 'orange', 'magenta', 'green'];
            var link_color_index = 0;

            setTimeout(function () {
                topic_list_item.each(function () {
                    var item_position = $(this).position();

                    if (link_color_index >= link_colors.length) {
                        link_color_index = 0;
                    }

                    $(this).find('.topic').addClass(link_colors[link_color_index]);

                    link_color_index = link_color_index + 1;


                    if (item_position.top >= topics_list_view - (list_item_height - 2)) {
                        $(this).addClass('invisible');
                    } else {
                        $(this).removeClass('invisible');
                    }

                });

                // set more topics count of those not shown
                topic_list_link.find('.count').text($('.topic-list-item.invisible').length);

                // Grammar fix for when there is only one
                if ($('.topic-list-item.invisible').length <= 1) {
                    topic_list_link.find('em').text('Topic');
                } else {
                    topic_list_link.find('em').text('Topics');
                }

                // Show topics list				
                $('.topics-block.tall-list').removeClass('invisible');
            }, 300);

        }

        if (typeof PBS !== "undefined" && PBS.KIDS && PBS.KIDS.carson) {
            //do this check in case carson fires the carson.load method
            //prior to this script setting up the listener for it
            PBS.KIDS.carson.init(); //this will be the case 99% of the time
        } else { //this should be the case only if AMD is not used
            $('body').on('carson.load', function (event) {
                PBS.KIDS.carson.init();
            });
        }

        $('body').on('carson.done', function (event) {
            align_topics_list();
            align_game_feature();
            $('.topic-list .topic-list-item').shuffle();
            $('.topic-list .topic-list-item').removeClass('invisible');
            topics_list_count();

            // Topic Page
            $('.topics-game-grid .grid-item').shuffle();
            $('.topics-game-grid .grid-item:nth-child(4n+4)').addClass('last');
            $('.topics-game-grid .grid-item').removeClass('invisible');
        });

        $(window).resize(function () {
            align_topics_list();
            align_game_feature();
            topics_list_count();
        });

        // Games Feature Rotator
        
        $(".games-feature-group").each(function(i) {
            $(this).attr('id', "feature-group" + (i + 1));
        });
            
        function init_feature_rotator() {
            var feature_rotator = $('#games-feature-rotator');
            var feature_panel = feature_rotator.find('.games-feature-group');
            var active_feature_panel = feature_rotator.find('.games-feature-group.active');

            var feature_controls = feature_rotator.siblings('.games-feature-nav');
            var control_button = feature_controls.find('button');

            var feature_rotator_width = $(window).width() * feature_panel.length;

            // Set up Rotator width and center (only works for three at this time)
            feature_rotator.width(feature_rotator_width);
            feature_rotator.css('marginLeft', -$(window).width());

            // Center panel in view
            var center_feature_panel = function () {
                $(feature_panel).css('marginLeft', function () {
                    return ($(window).width() - $('.games-feature-group').width() - 20) / 2;
                });
                $(feature_panel).css('marginRight', function () {
                    return ($(window).width() - $('.games-feature-group').width() - 20) / 2;
                });
            };

            center_feature_panel();
            feature_rotator.show();

            setTimeout(function () {
                control_button.addClass('show');
            }, 2000);

            $(window).resize(function () {
                feature_rotator_width = $(window).width() * feature_panel.length;
                feature_rotator.width(feature_rotator_width);
                feature_rotator.css('marginLeft', -$(window).width());
                center_feature_panel();
            });

            var animate_panel = function (direction) {
                active_feature_panel = feature_rotator.find('.games-feature-group.active');
                var active_panel_title = active_feature_panel.find('.games-feature-head');

                $(active_panel_title).animate({
                    top: '-=200'
                }, 500, 'easeInBack', function () {
                    feature_panel.removeClass('invisible');

                    if (direction === 'left') {

                        $(feature_panel).animate({
                            left: '-=' + $(window).width() + ''
                        }, 1000, 'easeInOutBack', function () {

                            active_panel_title.css('top', '16px');

                            active_feature_panel.next().addClass('active');

                            active_feature_panel.prev().appendTo(feature_rotator);
                            active_feature_panel.removeClass('active');

                            feature_panel.css('left', '0px');

                            feature_panel.not('.active').addClass('invisible');
                            control_button.removeClass('wait');

                        });

                    } else if (direction === 'right') {
                        $(feature_panel).animate({
                            left: '+=' + $(window).width() + ''
                        }, 1000, 'easeInOutBack', function () {

                            active_panel_title.css('top', '16px');

                            active_feature_panel.prev().addClass('active');

                            active_feature_panel.next().prependTo(feature_rotator);
                            active_feature_panel.removeClass('active');

                            feature_panel.css('left', '0px');

                            feature_panel.not('.active').addClass('invisible');
                            control_button.removeClass('wait');

                        });
                    }
                });
            };

            control_button.on('mousedown touchend', function (evt) {
                if ($(this).hasClass('wait')) {
                    return false;
                }

                if ($(this).data('action') === 'prev-panel') {
                    animate_panel('left');
                } else if ($(this).data('action') === 'next-panel') {
                    animate_panel('right');
                }

                control_button.addClass('wait');
            });
            
        }
        init_feature_rotator();
        


        function fade_games_toggle() {
            if ($('#games-feature-rotator').hasClass('faded')) {
                $('.games-feature-nav').animate({
                        opacity: '1'
                    },
                    1000,
                    function () {
                        $(this).removeClass('faded');
                    }
                );
                $('#games-feature-rotator').animate({
                        opacity: '1'
                    },
                    1000,
                    function () {
                        $(this).removeClass('faded');
                    }
                );

                $('.no-flash .games-feature-simple').animate({
                        opacity: '1'
                    },
                    1000,
                    function () {
                        $(this).removeClass('faded');
                    }
                );

            } else {
                $('.games-feature-nav').animate({
                        opacity: '0.4'
                    },
                    1000,
                    function () {
                        $(this).addClass('faded');
                    }
                );
                $('#games-feature-rotator').animate({
                        opacity: '0.4'
                    },
                    1000,
                    function () {
                        $(this).addClass('faded');
                    }
                );
                $('.no-flash .games-feature-simple').animate({
                        opacity: '0.4'
                    },
                    1000,
                    function () {
                        $(this).addClass('faded');
                    }
                );
            }
        }

        // Google Analytics click tracking

        $('#games-feature-rotator .promo-grid .grid-item .promo-graphic').on('click', function (e) {
            var games_feature_link = $(this).attr('href');
            var game_view_port = $(window).width() + "x" + $(window).height();
            var feature_game_graphic_index = $(this).parents('.grid-item').index() + 1;
            var selected_game_name = $('#games-feature-rotator > article.games-feature-group.active > ul > li:nth-child(' + feature_game_graphic_index + ') > a > div > h3').text();
            var topic_games_article_index = $(this).parents('#games-feature-rotator > article.games-feature-group').attr('id');

            e.preventDefault();

            GA_obj.trackEvent("Promo Grid", "Game Selected", games_feature_link + " | " + selected_game_name + " | " + game_view_port + " | Position: " + feature_game_graphic_index);

            setTimeout(function () {
                window.location.href = games_feature_link;
            }, 100);
        });
        
        $('.right').on('click', function (e) {
            var right_view_port = $(window).width() + "x" + $(window).height();
            var right_arrow_name = $('.right').text();

            e.preventDefault();

            GA_obj.trackEvent("Game Feature Rotator", "Right Arrow Selected", right_arrow_name + " | " + right_view_port);

        });

        $('.left').on('click', function (e) {
            var left_view_port = $(window).width() + "x" + $(window).height();
            var left_arrow_name = $('.left').text();

            e.preventDefault();

            GA_obj.trackEvent("Game Feature Rotator", "Left Arrow Selected", left_arrow_name + " | " + left_view_port);
        });

        $('#topics-panel > div > article:nth-child(n) > h2 > a').on('click', function (e) {
            var topics_header_link = $(this).attr('href');
            var topics_header_view_port = $(window).width() + "x" + $(window).height();
            var topics_header_index = $(this).parents('.topics-block').index() + 1;
            var topics_header_name = $(this).find('em').text();

            e.preventDefault();

            GA_obj.trackEvent("Topics Heads", "Topics Selected", topics_header_link + " | " + topics_header_name + " | " + topics_header_view_port + " | Position: " + topics_header_index);

            setTimeout(function () {
                window.location.href = topics_header_link;
            }, 100);
        });

        $('#topics-panel .topics-block .mini-grid .mini-grid-item .promo-graphic').on('click', function (e) {
            var topics_games_link = $(this).attr('href');
            var topic_games_view_port = $(window).width() + "x" + $(window).height();
            var topic_games_index = $(this).parents('.mini-grid-item').index() + 1;
            var topic_games_name = $(this).find('.show-title').text();
            var topic_games_article_index = $(this).parents('article').index() + 1;
            var topics_header_of_game_name = $('#topics-panel > div > article:nth-child(' + topic_games_article_index + ') > h2 > a > em').text();

            e.preventDefault();

            GA_obj.trackEvent("Topics Games", "Game Selected", topics_games_link + " | " + topics_header_of_game_name + " | " + topic_games_name + " | " + topic_games_view_port + " | Position: " + topic_games_index);

            setTimeout(function () {
                window.location.href = topics_games_link;
            }, 100);
        });

        $('#topics-panel > div > article.topics-block.tall-list.last.no-push > ul > li:nth-child(n) > a').on('click', function (e) {
            var topics_list_link = $(this).attr('href');
            var topics_list_view_port = $(window).width() + "x" + $(window).height();
            var topics_list_index = $(this).parents('.topic-list-item').index() + 1;
            var topics_list_name = $(this).find('em').text();

            e.preventDefault();

            GA_obj.trackEvent("Topics List", "Topics List Selected", topics_list_link + " | " + topics_list_name + " | " + topics_list_view_port + " | Position: " + topics_list_index);

            setTimeout(function () {
                window.location.href = topics_list_link;
            }, 100);
        });

        $('#hard-games-panel > div > figure.hard-game.mega-feature a').on('click', function (e) {
            var hard_mega_games_link = $(this).attr('href');
            var hard_mega_games_view_port = $(window).width() + "x" + $(window).height();
            var hard_mega_games_name = $('figure.hard-game.mega-feature > figcaption > a > h3').text();

            e.preventDefault();

            GA_obj.trackEvent("Mega Promo", "Promo Selected", hard_mega_games_link + " | " + hard_mega_games_view_port + " | " + hard_mega_games_name);

            setTimeout(function () {
                window.location.href = hard_mega_games_link;
            }, 100);
        });

        $('#hard-games-panel > div > figure:nth-child(n) > a').on('click', function (e) {
            var hard_games_link = $(this).attr('href');
            var hard_games_view_port = $(window).width() + "x" + $(window).height();
            var hard_games_index = $(this).parents('.grid-item').index() + 1;
            var hard_games_name = $('#hard-games-panel > div > figure:nth-child(' + hard_games_index + ') > figcaption > a > h3').text();

            e.preventDefault();

            GA_obj.trackEvent("Hard Games", "Game Selected", hard_games_link + " | " + hard_games_name + " | " + hard_games_view_port + " | Position: " + hard_games_index);

            setTimeout(function () {
                window.location.href = hard_games_link;
            }, 100);
        });



        var IsDuplicateScrollEvent = 0;

        $(document).ready(function () {
            SetupGoogleAnalyticsTrackEvents();
        });

        function SetupGoogleAnalyticsTrackEvents() {
            TrackEventsForMinimumPageScroll();
        }

        function TrackEventsForMinimumPageScroll() {
            $(window).scroll(function () {
                var scrollPercent = GetScrollPercent();
                if (scrollPercent > 90) {
                    if (IsDuplicateScrollEvent == 0) {
                        IsDuplicateScrollEvent = 1;
                        TrackEvent("Content Engagement", "Scrolled To 90%", document.location.href);
                    }
                }
            });
        }

        function GetScrollPercent() {
            var bottom = $(window).height() + $(window).scrollTop();
            var height = $(document).height();
            return Math.round(100 * bottom / height);
        }

        function TrackEvent(Category, Action, Label) {
            GA_obj.trackEvent(Category, Action, Label);
        }
        
        
        function init() {
            if (!createjs.Sound.initializeDefaultPlugins()) {
                document.getElementById("content").style.display = "none";
                return;
            }
            var assetsPath = "../../orange-peanut/site/audio/SoundClips/Games/";
            var sounds = [
                {src: "games.mp3", id: "games"},
                {src: "pbsKids.mp3", id: "pbsKids"},
                {src: "next.mp3", id: "next"},
                {src: "previous.mp3", id: "previous"},
                
                
                
                {src: "adventure.mp3", id: "adventure"},
                
                {src: "hardGames.mp3", id: "hardGames"},
                {src: "healthyHabbits.mp3", id: "healthyHabbits"},
                {src: "moreTopics.mp3", id: "moreTopics"},
                {src: "newGames.mp3", id: "newGames"},
                
                
                {src: "popularGames.mp3", id: "popularGames"},
                {src: "reading.mp3", id: "reading"}
            ];
            createjs.Sound.alternateExtensions = ["mp3"];
            createjs.Sound.addEventListener("fileload", createjs.proxy(soundLoaded, this)); 
            createjs.Sound.registerSounds(sounds, assetsPath);
        }
             
        function soundLoaded(event) {
        }

        init();
        
        var mouseOverTimer = null;
        var $sounds = $('[data-audio-type]'); 
        
        $sounds.on('touchstart', function(){
            var audio_id = $(this).attr('data-audio-type');
            createjs.Sound.play(audio_id);
            
            var audio_link = $(this).attr('href');
            
            setTimeout(function() { 
              window.location = audio_link;       
                }, 2000);
            return false;
        });

        $sounds.on('mouseenter', function(){
            var audio_id = $(this).attr('data-audio-type');
            mouseOverTimer = setTimeout(function() {
                createjs.Sound.play(audio_id);
                createjs.Sound.setVolume(1);
            }, 300);
            $sounds.on('mouseleave', function() {
                var audio_id = $(this).attr('data-audio-type');
                createjs.Sound.setVolume(0.50);
                clearTimeout(mouseOverTimer);
            });
        });      
        
        
        

    });

}));