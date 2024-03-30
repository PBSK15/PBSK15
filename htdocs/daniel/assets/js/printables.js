var folderPath = "/daniel/assets/img/coloring/";

function slickInit() {
  $('.directory__list').slick({
    rows: 3,
    slidesPerRow: 1,
    lazyLoad: 'ondemand',
    fade: true,
    cssEase: 'linear',
    infinite: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 650,
        settings: {
          rows: 3,
          slidesPerRow: 2
        }
      },
      { 
        breakpoint: 900,
        settings: {
          rows: 3,
          slidesPerRow: 3
        }
      },
      { 
        breakpoint: 1024,
        settings: {
          rows: 3,
          slidesPerRow: 4
        }
      }
    ]
  });
}

function addPrintables() {
  var prints = xmlDoc.getElementsByTagName("page"); //set variable to parent node

  for (i = 0; i < prints.length; i++) {
    var name = prints[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
    var id = prints[i].getElementsByTagName("id")[0].childNodes[0].nodeValue;
    var origin = window.location.origin;
    var thumb = origin + folderPath + "thumbs/coloring-thumb_" + id + ".png";
    var display = origin + folderPath + "coloring_" + id + ".png";
    var pdf = origin + folderPath + "pdfs/coloring_" + id + ".pdf";
    var printjpg = origin + folderPath + "print-jpgs/coloring_" + id + ".jpg";

    var html = "<div class='directory__item summoner' data-display='" + display + "' data-print='" + printjpg + "''>"
             +     "<img class='thumbnail' src='"+thumb+"' alt='" + name + "' />"
             + "</div>";

    $('.directory__list').append(html);
  };
}

function launchDialog(src, printSrc) {
  $('.main').append('<div class="dialog"></div>');
  var dialog = $('.dialog');

  dialog.append('<span class="dialog-print">Print</span>');
  dialog.append('<span class="dialog-close">Close</span>');
  dialog.append('<img class="printable" src="' + src + '"/>');

  $('.printable').load(function() {
    blind();
    dialog.show().fadeTo(500,1);
  })

  $('.dialog-close').click(function(e){ 
    e.preventDefault();
    reset();
  });

  $('.dialog-print').click(function() {
    print(printSrc);
  });
}

function reset() {
  $('.dialog').remove();
  $('.blind').remove();
};

function blind() {
  $('body')
    .append('<div class="blind" /></div>')
    $('.blind').fadeTo(500, 0.6);
};

function print(url) {
  $('.dialog').append('<iframe name="printFrame" id="printFrame" class="hidden"></iframe>');
  var frame = window.frames["printFrame"];

  if ($.browser.msie) {
    frame.document.write('<body><script>function printDoc() { document.execCommand("print", false, null);}</script><img onLoad="printDoc();" style="width: 8.5in; height: 11in;" src="'+ url +'"/></body>');
  } else {
    frame.document.write('<body onload=window.print()><img style="width: 8.5in; height: 11in;" src="'+ url +'"/></body>');
  }

  frame.document.close();
}


$( document ).ready(function() {  
  addPrintables();
  slickInit();

  var activeWindow = $('.dialog#dialog');

  $('.directory__list').delegate('.summoner', 'click', function() {
    reset();
    var printSrc = $(this).data('print');
    var displaySrc = $(this).data('display');

    launchDialog(displaySrc,printSrc);

  });

});