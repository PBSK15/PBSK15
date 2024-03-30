// start on the first page, but this variable will as the user pages; required to maintain page after printing on the coloring page
var current_page = 1;
var first_run = true;

function setupDirectory(opts) {  
  if (opts && opts.reset_page) {
    current_page = 1;
  }

  // ------------------------------------------------------
  // Directory
  // ------------------------------------------------------
  // Used for games, stories, and coloring pages

  var $directory = $(".directory");
  var $directory_item = $(".directory__item");

  // Get the total number of items
  var total_items = $directory_item.length;

  // Initialize variables
  var items_per_page;
  var start;
  var end;

  // Display appropriate # of games on page load
  getItemsPerPage();

  // Find how many pages are needed
  var total_pages = Math.ceil(total_items/items_per_page);

  // Find start and end points of the slice
  var end = current_page * items_per_page;
  var start = end - items_per_page;

  displayItems(start, end);
  showControls();

  // only bind event listeners the first time this method is run
  if (first_run) {
    var rtime = new Date(1, 1, 2000, 12,00,00);
    var timeout = false;
    var delta = 200;
    $(window).resize(function() {
        rtime = new Date();
        if (timeout === false) {
            timeout = true;
            setTimeout(resizeend, delta);
        }
    });

    function resizeend() {
        if (new Date() - rtime < delta) {
            setTimeout(resizeend, delta);
        } else {
            timeout = false;
            setupDirectory({reset_page: true}); // the thing we actually want to do
        }               
    }

    $(".directory__control.next").click(function() {
      if(current_page < total_pages) {
        current_page = current_page + 1;
        showControls();
        // Get start and end points for slice
        var end = current_page * items_per_page;
        var start = end - items_per_page;

        displayItems(start, end);
      }
    });

    $(".directory__control.prev").click(function() {
      if(current_page != 1) {
        current_page = current_page - 1;
        showControls();

        var end = current_page * items_per_page;
        var start = end - items_per_page;

        displayItems(start, end);
      }
    });

    first_run = false;
  }


  // Decides how many games per page based on responsive state
  function getItemsPerPage() {
    if ( $("#printables").length > 0 ) {
      items_per_page = 12;
    }
    else if(parseInt($directory.css("max-width")) >= 760) {
      items_per_page = 8;
    } 
    else if ( $directory.css("background-color") == "rgba(0, 0, 0, 0)" || ($.browser.mozilla && $(".directory").css("background-color") == "transparent")) {
      items_per_page = 6;
    } 
    else if ( $directory_item.css("margin-left") == "5px") {
      items_per_page = 4;
    } 
    else {
      items_per_page = 3;
    }
  };

  // Shows only as many pages as will fit on the page
  function displayItems(start, end) {
    // Hide all games / reset
    $directory_item.hide();

    if(items_per_page == 3) {
      // Use display: block; for stacked state
      $directory_item.slice(start,end).css("display", "block");
    } else {
      $directory_item.slice(start,end).css("display", "inline-block");
    }
  }

  function showControls() {
    // Hide controls / reset
    $(".directory__control").hide();

    // Show controls if multiple pages
    if(total_pages > 1) {
      if(current_page == 1) {
        $(".directory__control.next").show();
      } else if (current_page < total_pages) {
        $(".directory__control").show();
      } else if (current_page == total_pages) {
        $(".directory__control.prev").show();
      }
    }
  } 
}