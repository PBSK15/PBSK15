window.sg = {
  "error": function(e) {
    var errorMessage = window.sg.errorMessage;

    if(typeof e.responseText === "string") {
      try {
        var response = jQuery.parseJSON(e.responseText);

        if(typeof response.error === "string") {
          errorMessage = response.error;
        }
      } catch(e) {}
    }

    alert(errorMessage);
  },
  "errorMessage": "An error occurred, please refresh and try again."
};

if (!jQuery.support.transition) {
  jQuery.fn.transition = jQuery.fn.animate;
}
window.$ = window.jQuery;

jQuery(document).ready(function() {
  jQuery('input, textarea').placeholder();
});
;
