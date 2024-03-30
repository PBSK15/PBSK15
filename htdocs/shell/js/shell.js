(function( require, define, factory ){
  //AMD support for requireJS
  if( typeof define === "function" && define.amd ){
    define( ["jquery"], factory );
  }
  else{
    //Assume jQuery is directly loaded via <script/>
    factory( jQuery );
  }
}( PBS.KIDS.require, PBS.KIDS.define, function( $ ){

  $(document).ready(function() {
    var DEBUG = true;
    var host = window.location.href.split('/')[2];

    if ((host == 'pbskids.org') || (host == 'www-tc.pbskid.sorg')) {
      DEBUG = false;
    }

    // Content Fallbacks
    if (!Modernizr.svg) {
      $("img").each(function() {
        var png_fallback = $(this).attr("data-fallback");
        $(this).attr("src", png_fallback);
      });
    }


    // Shuffle DOM Elements Plugin
    $.fn.shuffle = function() {

      var allElems = this.get(),
      getRandom = function(max) {
        return Math.floor(Math.random() * max);
      },

      shuffled = $.map(allElems, function(){
        var random = getRandom(allElems.length),
        randEl = $(allElems[random]).clone(true)[0];
        allElems.splice(random, 1);
        return randEl;
      });

      this.each(function(i){
        $(this).replaceWith($(shuffled[i]));
      });

      return $(shuffled);
    };//end $.fn.shuffle()
    


    // Add special classes on scroll to disable animations and sounds
    var scroll_timeout;
    $(document).on('scroll', function(){
      clearTimeout(scroll_timeout);
      $('body').addClass('quiet-a-sec');
      $('body').addClass('sit-still-please');
      scroll_timeout = setTimeout( refresh , 150 );
    });

    var refresh = function () {
      $('body').removeClass('quiet-a-sec');
      $('body').removeClass('sit-still-please');
    };
    


    // Touch Party: A jquery plugin to add fast clicks on touch and CSS interaction hooks on user input - by Mig
    $.fn.touch_party = function(type) {
      var $wrapper = this;
      var $target = this;
      var moved = false;

      $wrapper.on('touchstart mousedown mouseover',function(e) {
        $target = $(e.target);
        moved = false;

        $wrapper.on('touchmove',function(e) {
          moved = true;
          $target.removeClass('tapped');
        });

        if (type == 'link' && $target.not('a[href]')) {
          $target = $($target.closest('a[href]'));
          the_link = $target.attr('href');
        }
        
        if (type == 'bubble') {
          $target = $(this).find('a[href]');
        }

        if (type == 'button' && $target.not('button')) {
          $target = $($target.closest('button'));
        }


        if (e.type == 'touchstart' && moved == false){
          $target.addClass('tapped');
        }

        if (e.type == 'mousedown'){
          $target.addClass('clicked');
        }

        if (e.type == 'mouseover'){
          $target.addClass('hovered');
        }

        $wrapper.on('touchend mouseup mouseout',function(e) {
          $wrapper.unbind('touchmove');
          $wrapper.unbind('mouseup touchend');

          $target.removeClass('hovered clicked');

          if(Modernizr.touch == true && moved == false) {
            $target.removeClass('tapped');

            if (type == 'link') {
              window.parent.location = the_link;
            } else {
              $target.trigger('click');
            }
          }
        });
      });
      
      $('body').trigger('touch-party.ready');

      return $wrapper;

    };//$.fn.touch_party()
    

    // Add special clicks to elements and set type
    $('.home .nav-buttons .phat-button').touch_party('link');
    $('a.promo-graphic').touch_party('link');
    $('.phat-button.show-all').touch_party('link');
  
  });//.ready()
  
  // Debounce and Smartresize Plugin from John Hann and Paul Irish
  (function($,sr){
    var debounce = function (func, threshold, execAsap) {
      var timeout;
    
      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };
    
          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);
    
          timeout = setTimeout(delayed, threshold || 100);
      };
    }
    // smartresize 
    $.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };
    
  })($,'smartresize');

  return( "Shell.js is ready" );

}));
