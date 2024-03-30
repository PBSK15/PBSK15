/**
 * @author Michele Andreoli <michi.andreoli[at]gmail.com>
 * @website http://jabprogramming.com
 * @name jquery.multirotation-1.0.0.js
 * @version 1.0.0 updated 03-10-2011
 * @license http://opensource.org/licenses/gpl-license-php GNU Public License
 * @package Multirotation
 *
 * USAGE:
 *  The element selected with $(selector) must have an ID:
 *  $(selector).rotate({
 *      angle: 90, //or negative degree
 *      direction: true, //or false (is the same as negative degree)
 *      speed: 0.5, //animation speed (not supported by IE5,6,7,8,9)
 *  });
 *
 *  To reset rotation:
 *  $(selector).clearRotation();
 *
 *
 * EXAMPLE:
 *  <img id='img_1' alt='the image' src='image_url'/>
 *
 *  $('#img_1').rotate({
 *     angle: 90
 *  });
 *
 *  $('#img_1').clearRotation();
 */
(function($){
    //global array to save the current rotation of the elements
    $.elems_rotation_history = [];

    $.fn.extend({
		_aprox: function(num) {
			return Math.round(num * 100) / 100;;
		},

        clearRotation: function() {
            return this.each(function() {
                //get the element's identifier
                var id = this.id;

                //remove element from array
                $.elems_rotation_history[id] = null;
            });
        },

        getCurrentDegrees: function() {
            var id = this.attr('id');
            if (!$.elems_rotation_history[id]) {
                return 0;
            }
			var degs = $.elems_rotation_history[id].rotation;

			return degs;
        },

        rotate: function(options) {
            //set the default values
            var defaults = {
                  angle: 0
                , direction: true
                , speed: 0
                , deg2radians: Math.PI * 2 / 360
            };

            //to access options values use this: options.option_name
            var options = $.extend(defaults, options);

            return this.each(function() {
                //get the element's identifier
                var id = this.id;

                //if there aren't elements and there isn't the element into the array, sets rotation to 0
                if ($.elems_rotation_history && !$.elems_rotation_history[id]) {
                    $.elems_rotation_history[id] = { rotation: 0 };
                }

                //sets the rotation direction
                if (!options.direction) {
                    options.angle = options.angle * (-1);
                }

                //increments angle rotation of the element
                $.elems_rotation_history[id].rotation = (parseInt($.elems_rotation_history[id].rotation) + options.angle) % 360;

				var degs = $.elems_rotation_history[id].rotation;

                jQuery.browser = {};
                (function () {
                    jQuery.browser.msie = false;
                    jQuery.browser.version = 0;
                    if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
                        jQuery.browser.msie = true;
                        jQuery.browser.version = RegExp.$1;
                    }else if (navigator.appName == 'Netscape')
                    {
                        //for IE 11
                        var ua = navigator.userAgent;
                        var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
                        if (re.exec(ua) != null)
                        {
                            jQuery.browser.msie = true;
                            jQuery.browser.version= RegExp.$1;
                        }
                    }
                })();
                /*console.log("user agent? "+navigator.userAgent);
                console.log("match? "+navigator.userAgent.match(/MSIE ([0-9]+)\./));
                console.log("is it IE? "+$.browser.msie);*/

				if ($.browser.msie) {
					//if the browser is IE9+

                   // console.log("broswer version: "+$.broswer.version)
					if (parseInt($.browser.version) >= 9 && document.documentMode >= 9) {
						$(this).css('-ms-transform', 'rotate(' + degs + 'deg)');
					}
					//if the browser is IE8-
					else {
						if ($(this).get(0).filters) {
							var rad = $.elems_rotation_history[id].rotation * options.deg2radians;
							var costheta = Math.cos(rad);
							var sintheta = Math.sin(rad);

							var prev_height = $(this).outerHeight();
							var prev_width = $(this).outerWidth();
							var prev_coords = { 'w': prev_width, 'h': prev_height };

							try {
								var x = $(this).get(0).filters.item('DXImageTransform.Microsoft.Matrix').enabled;
							}
							catch(e) {
								$(this).get(0).style.filter += 'progid:DXImageTransform.Microsoft.Matrix(sizingMethod="auto expand")';
							}

							var matrix = $(this).get(0).filters.item('DXImageTransform.Microsoft.Matrix');
							matrix.M11 = costheta;
							matrix.M21 = sintheta;
							matrix.M12 = -sintheta;
							matrix.M22 = costheta;
							matrix.enabled = true;

							//Fix for IE7,IE8
							var height = $(this).outerHeight();
							var width = $(this).outerWidth();
							var padding = {
								'x': $.fn._aprox(width - prev_coords.w) / 2,
								'y': $.fn._aprox(height - prev_coords.h) / 2
							}

							var left = $.fn._aprox($(this).position().left - padding.x);
							var top = $.fn._aprox($(this).position().top - padding.y);

							$(this).css('top', top + 'px');
							$(this).css('left', left + 'px');
						}
					}
                } else {
                    //animate rotation if speed > 0s
                    if (options.speed > 0) {
                        $(this).css('-moz-transition', 'all ' + options.speed + 's ease-in-out');
                        $(this).css('-webkit-transition', 'all ' + options.speed + 's ease-in-out');
                        $(this).css('-o-transition', 'all ' + options.speed + 's ease-in-out');
                    }
                    $(this).css('-moz-transform', 'rotate(' + degs + 'deg)');
                    $(this).css('-webkit-transform', 'rotate(' + degs + 'deg)');
                    $(this).css('-o-transform', 'rotate(' + degs + 'deg)');
                }
            });
        }
    });
})(jQuery)