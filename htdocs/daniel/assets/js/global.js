document.addEventListener("touchstart", function(){}, true);

var screen_state;

function placeNav() {
  if (screen_state > 2) {
    $('.nav').insertAfter($('.site-header'));
  } else {
    $('.nav').insertAfter($('.page-content'));
  }
}

function setParentTip() {
  if ( typeof parentTipID != 'undefined' ) {
    $.getJSON('/daniel/data/parenttips.json', function(result) {
      var tips = result.tips;
      var text = "";

      for (i in tips) {
        if ( tips[i].id == parentTipID ) {
          text = tips[i].text;
        }
      }

          $('.parent-tip').text(text);
      });
  } else {
    $('.parent-tip').remove();
  }
}

function staticCheck() {
  if ( !$.browser.mozilla && screen_state > 1 ) {
    $('body').removeClass('static');
  }
}

var isMobile = {
  Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
}

function mobileCheck() {
  if ( isMobile.any() ) {
    $('body').addClass("mobile");
  } else {
    $('body').addClass("desktop");
  }
}

$(document).ready(function() {
  $('html').removeClass('no-js').addClass(typeof swfobject !== 'undefined' && swfobject.getFlashPlayerVersion().major !== 0 ? 'flash' : 'no-flash');
  screen_state = parseInt($('.state-indicator').css('z-index'));
  staticCheck();
  mobileCheck();
  placeNav();
});

$(window).resize(function() {
  screen_state = parseInt($('.state-indicator').css('z-index'));
  placeNav();
});