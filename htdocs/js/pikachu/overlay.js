(function( require, define, factory ){
  if( typeof define === "function" && define.amd ){
    //PBS.KIDS AMD support for requireJS
    define('super-vision-overlay', ['hbars!/js/pikachu/templates/play-timer-overlay', 'Handlebars'], factory);
  }
  else {
    return;//"explicity do nothing" - Sam Deng
  }
}( PBS.KIDS.require, PBS.KIDS.define, function(play_timer_template) {
    var pikachu_overlay = function(play_timer_template, option) {
        // Initialize options
        var video = null;

        if (typeof(options) != 'undefined') {
            if (typeof(options.video) != 'undefined') {
                video = options.video;
            }
        }

        // Play timer CSS injection
        var play_timer_css = document.createElement('link');
        play_timer_css.type = 'text/css';
        play_timer_css.rel = 'stylesheet';
        play_timer_css.href = '/js/pikachu/styles/companion.css';
        document.getElementsByTagName('head')[0].appendChild(play_timer_css);

        // Play timer markup injection
        var body = document.getElementsByTagName('body')[0];
        var play_timer_html = play_timer_template();

        var detached_container = document.createElement('div');
        detached_container.innerHTML = play_timer_html;

        while (detached_container.children.length > 0) {
            body.appendChild(detached_container.children[0]);
        }
    };

    return pikachu_overlay(play_timer_template);

}));