// Using jQuery from headband that is bound to PBS.KIDS.$_auth, not $

jQuery(document).ready(function() {

    // Set height of overlay to match page height
    jQuery(window).resize(function() {
        var page_height = jQuery(document).height();
        var page_width = jQuery(document).width();

        jQuery('#cg-overlay .cg-fade').height(page_height + 41).width(page_width);
    });

    jQuery('.cg-overlay-trigger').click(function (e){
	jQuery('#cg-overlay').fadeIn();
	GA_obj.trackEvent("curiousgeorge.com bridge", "Open");
	e.preventDefault();
    });

    jQuery('.advanceToDestination').click(function(e){
	GA_obj.trackEvent("curiousgeorge.com bridge", "Follow link");
    });

    jQuery('#cg-overlay .cg-overlay-close').click(function (e){
	jQuery('#cg-overlay').fadeOut();
	GA_obj.trackEvent("curiousgeorge.com bridge", jQuery(e.target).attr('title'));
	e.preventDefault();
    });

});