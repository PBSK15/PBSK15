(function($, Modernizr){
	
	/**
	*  Utilities for dealing with device support
	*  @class LunchLab.utils.SupportUtils
	*/
	var SupportUtils = {};

	/**
	*  Remove all content that doesn't run on this device
	*  @method filter
	*  @final
	*/
	SupportUtils.clean = function()
	{
		if (!Modernizr.flash)
		{
			$(".requires-flash ").remove();
		}
		if (!Modernizr.canvas || !Modernizr.audio)
		{
			$(".requires-html ").remove();
		}
		if (!Modernizr.webaudio)
		{
			$(".requires-webaudio ").remove();
		}
	};

	// Assign to the namesapce
	namespace('LunchLab.utils').SupportUtils = SupportUtils;

}($, Modernizr));