function preLoadComplete() {
  console.log('preLoadComplete');
  // Games - bring in xml data
  // ------------------------------------------------------

  var x = xmlDoc.getElementsByTagName("page"); //set variable to parent node

  for (i = 0; i < x.length; i++) {
    var name = x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
    var imagesrc = x[i].getElementsByTagName("thumb")[0].childNodes[0].nodeValue;
    var href = x[i].getElementsByTagName("fullsize")[0].childNodes[0].nodeValue;
    var hrefPath = "/daniel/assets/img/coloring/" + href;

    $('.directory__list').append(
        "<li class='directory__item summoner' data-fullsize='" + hrefPath + "'>"
      +     "<img class='thumbnail' src='/daniel/assets/img/coloring/thumbs/"+imagesrc+"' alt='" + name + "' />"
      + "</li>"
      );
  };

  setupDirectory();
  
  // clear the loader
  $(".loader").fadeOut(1000, function() {
    $("#coloring").fadeIn(1000);
  });
}


$( document ).ready(function() {  
  var screen_state;  
  var width = $('#coloring').width();

  if (width >= 760) {
    screen_state = "not-small";
  }
  else {
    screen_state = "small";
  }

  $.getJSON('/daniel/data/preload-coloring.json', function(result) {
    var preLoadManifest = {manifest: []};

    for (var i in result.manifest) {
      var item = result.manifest[i];

      if (!item.size || item.size.indexOf(screen_state) > -1) {
        preLoadManifest.manifest.push(item);
      }
    }

    var queue = new createjs.LoadQueue();
    queue.on("complete", preLoadComplete, this);
    queue.loadManifest(preLoadManifest);
  });

  var activeWindow = $('.dialog#dialog');

  $('.directory__list').delegate('.summoner', 'click', function() {
    reset();
    
    var fullsizeSrc = $(this).data('fullsize');
    
    // ios safari has a hard limit on total images allowed, so we need to shrink the print-quality images down otherwise they won't open
    if (navigator.userAgent.indexOf("iPad") > -1 || navigator.userAgent.indexOf("iPhone") > -1) {
      console.log("is ipad or iphone");
      fullsizeSrc = fullsizeSrc.replace(/img\/coloring\//, "img/coloring/display/");
    }

    console.log(fullsizeSrc);

    activeWindow.find('img').attr('src', fullsizeSrc);

    activeWindow.css('opacity', '0')
      .css('display', 'block')
      .fadeTo(500, 1);


    blind();     
  });

  $('.dialog-close').click(function(e){ 
    e.preventDefault();
    $('.printable').attr('src', '');
    reset();
  });

  $('.dialog-print').click(function() {
    if (window.print) {
      window.print();

      if ($.browser.platform != "ipad" && $.browser.platform != "iphone") {
        setupDirectory();
      }
    }
    else {
      alert("Printing is not supported on this device!");
    }
  });


  function reset() {
    $('.dialog').css('display', 'none');
    $('#blind').remove();
  };

  function blind() {
    $('body')
      .append('<div id="blind" />')
      .find('#blind')
      .css('opacity', '0')
      .fadeTo(500, 0.6);
  };
});