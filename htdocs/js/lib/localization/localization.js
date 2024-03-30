/**
 * PBS KIDS Localization
 *
 * @author Renzo Olguin
 * @email rmolguin@pbs.org
 */
(function() {
  "use strict";
  var require, define;

  if (
    typeof PBS !== "undefined" &&
    PBS.KIDS &&
    PBS.KIDS.require &&
    PBS.KIDS.define
  ) {
    require = PBS.KIDS.require;
    define = PBS.KIDS.define;
  } else {
    require = window.require;
    define = window.define;
  }

  /* DEBUGGING UTILS
  ################################################*/
  //only debug on subdomains of pbskids.org, e.g. dev.pbskids.org,
  //except NOT on help.pbskids.org.
  var _APP_NAME = "PBS KIDS Localization";
  var _APP_VERS = "1.3.0";
  var _STAGING_SUBDOMAINS = /(^((?!(www|cms)(\-tc|\-dev)?\.).+)pbskids\.org$|localhost)/;
  var _DEBUG = _STAGING_SUBDOMAINS.test(window.location.hostname)
    ? true
    : false;
  var _log = function(message, args, type, force) {
    if (_DEBUG === true || force === true) {
      if (typeof message === "string" || !!args) {
        message = _APP_NAME + " ver. " + _APP_VERS + " | " + message;
      } else {
        args = message;
        message = _APP_NAME + " ver. " + _APP_VERS + " | ";
      }

      if (typeof console !== "undefined") {
        if (type === "error" && console.error) {
          console.error(message, args);
        } else if (type === "error" && window.Error) {
          throw new Error(message);
        } else if (type === "info" && console.info) {
          console.info(message, args);
        } else if (type === "warn" && console.warn) {
          console.warn(message, args);
        } else if (console.log) {
          console.log(message, args);
        } else if (typeof window.debug !== "undefined") {
          window.debug.log.apply(message, args);
        }
      }
    }
  };

  var _getCookie = function(c_name) {
    if (document.cookie.length > 0) {
      var c_end,
        c_start = document.cookie.indexOf(c_name + "=");
      if (c_start !== -1) {
        c_start = c_start + c_name.length + 1;
        c_end = document.cookie.indexOf(";", c_start);
        if (c_end === -1) {
          c_end = document.cookie.length;
        }
        return decodeURI(document.cookie.substring(c_start, c_end));
      }
    }
    return "";
  };

  var _setCookie = function(c_name, value, exdays, path, domain) {
    var c_value = encodeURI(value);
    var exdate;

    if (exdays !== null) {
      exdate = new Date();
      exdate.setDate(exdate.getDate() + exdays);
      c_value += "; expires=" + exdate.toUTCString();
    }

    if (path !== null) {
      c_value += "; path=" + path;
    }

    if (domain !== null) {
      c_value += "; domain=" + domain;
    }

    document.cookie = c_name + "=" + c_value;
  };

  /* Start Building
  ################################################*/
  (function(require, define, factory) {
    if (typeof define === "function" && define.amd) {
      //Global AMD for requireJS
      define("localization", ["jquery"], factory);
    } else {
      //Assume jQuery is directly loaded via <script/>
      factory(jQuery);
    }
  })(require, define, function($) {
    var _STATION_SERVICES =
      "https://station.services.pbs.org/api/public/v1/stations/";
    var _LOCALIZATION_SERVICE =
      "https://localization.services.pbs.org/localize/";
    var _autoLocalize = false;
    var _cdn = _DEBUG ? "" : "https://pbskids.org";

    var dom = typeof exports !== "undefined" ? exports : window;
    dom.org = dom.org || {};
    dom.org.pbskids = dom.org.pbskids || {};

    if (dom.org.pbskids.localization) return dom.org.pbskids.localization;
    var _localization = (dom.org.pbskids.localization = {
      localized: false,
      autoLocalized: false
    });

    _localization.LocalizationEvent =
      _localization.LocalizationEvent ||
      (function() {
        /* Private Properties
      **************************/
        var _EVENT_CLASS = "org_pbskids_localization_LocalizationEvent";

        return {
          /* Public Properties
        **************************/
          /* Event Types */
          ZIPCODE_CHANGE: _EVENT_CLASS + "_ZipcodeChange",
          STATION_CHANGE: _EVENT_CLASS + "_StationChange",
          STATION_LIST_CHANGE: _EVENT_CLASS + "_StationListChange",
          LOCALIZATION_READY: _EVENT_CLASS + "_LocalizationReady",

          /* Public Methods
        **************************/
          dispatchEvent: function(o) {
            var e,
              d = {};
            o.eventType = (o.eventType || "").replace(/\./g, "_");

            switch (o.eventType) {
              case this.ZIPCODE_CHANGE:
                d.zipcode = o.zipcode;
                break;

              case this.STATION_CHANGE:
                d.station = o.station;
                break;

              case this.STATION_LIST_CHANGE:
                d.stations = o.stations;
                break;

              case this.LOCALIZATION_READY:
                //No additional data
                break;

              default:
                return;
            } //end switch

            e = $.Event(o.eventType); // build custom event object
            for (var i in d) e[i] = d[i]; //add custom data to event object
            _log("LocalizationEvent.dispatchEvent", e);
            $(o.caller || document).trigger(e); //fire/dispatch/trigger custom event

            if (
              window.$ &&
              window.$ != $ &&
              window.$.fn &&
              window.$.fn.jquery
            ) {
              //This is to dispatch the event if a producer is using a global
              //version of jQuery which is not the same version used by this class.
              if (typeof window.$(o.caller || document).trigger == "function") {
                window.$(o.caller || document).trigger(e);
              }
            } else if (window.jQuery && window.jQuery != $) {
              if (
                typeof window.jQuery(o.caller || document).trigger == "function"
              ) {
                window.jQuery(o.caller || document).trigger(e);
              }
            }

            if (window.PBSKidsPlayerEvents) {
              PBSKidsPlayerEvents.emit(e.type, e);
            }
          } //dispatchEvent()
        }; //return
      })(); //LocalizationEvent();

    function init() {
      // Add event listeners
      $(document).on(
        _localization.LocalizationEvent.ZIPCODE_CHANGE,
        onZipChange
      );
      $(document).on(
        _localization.LocalizationEvent.STATION_LIST_CHANGE,
        onStationListChange
      );

      //Get root directory
      var __getQuery = (function(a) {
        var i,
          p,
          b = {};
        if (a !== "") {
          for (i = 0; i < a.length; i++) {
            p = a[i].split("=");
            if (p.length > 0)
              b[p[0]] = p[1]
                ? decodeURIComponent(p[1].replace(/\+/g, " "))
                : "";
          }
        }
        return b;
      })(window.location.search.substr(1).split("&"));
      var __href =
        window.top != window ? document.referrer : window.location.href;

      _log(
        "Cookie :: pbskids.autolocalized =",
        _getCookie("pbskids.autolocalized")
      );
      _log("Cookie :: pbs.station =", _getCookie("pbs.station"));
      _log("Cookie :: pbskids.station =", _getCookie("pbskids.station"));

      //Localize to station by the following order of importance:
      // 1) "station" GET var
      // 2) "pbskids.station" COOKIE
      // 3) "pbs.station" COOKIE -- treated as confirmed by user
      // 4) auto-localize based on zip-code (obtained via ip-address)

      //try localizing via GET var.
      if (!_localization.updateStation(__getQuery["station"])) {
        //not localized via GET var, see if station was confirmed before on pbskids.org.
        if (_getCookie("pbskids.autolocalized") == "false") {
          //station has been user confirmed on PBS KIDS, get pbskids.station cookie.
          if (!_localization.updateStation(_getCookie("pbskids.station"))) {
            //actually didn't have pbskids.station cookie, try pbs.station cookie.
            if (!_localization.updateStation(_getCookie("pbs.station"))) {
              //pbs.station cookie does not exist, autolocalize.
              _autoLocalize = true;
            }
          }
        } else {
          //station has not been user confirmed before on pbskids.org, see if confirmed on pbs.org
          if (!_localization.updateStation(_getCookie("pbs.station"))) {
            //pbs.station cookie does not exist, autolocalize.
            _autoLocalize = true;
          }
        }
      }

      _log("Private Var :: _autoLocalize =", _autoLocalize);

      //get zip from cookie if available
      var __zip = _getCookie("pbskids.zipcode");
      if (__zip) {
        updateZip(__zip);
      } else {
        $.ajax({
          // Autolocalize
          url: _LOCALIZATION_SERVICE + "auto/",
          cache: false,
          success: function(data) {
            _log("Auto Localized", data);
            if (data && data.zipcode) {
              updateZip(data.zipcode);
            }
          }
        });
      } //end if _zip

      //let the dom know that this module is ready
      _localization.LocalizationEvent.dispatchEvent({
        eventType: _localization.LocalizationEvent.LOCALIZATION_READY
      });
    } //init()

    function updateZip(zip) {
      zip = zip + "";
      if (!zip.match(/^[0-9]{5}$/)) return;

      _localization.zip = _localization.zipcode = zip;
      _setCookie("pbskids.zipcode", zip, 2 * 365, "/", ".pbskids.org");

      _localization.LocalizationEvent.dispatchEvent({
        eventType: _localization.LocalizationEvent.ZIPCODE_CHANGE,
        zipcode: zip
      });

      _log("Fetch stations for zipcode, " + zip);
      $.ajax({
        url: _LOCALIZATION_SERVICE + "zipcode/" + zip + "/",
        cache: true,
        jsonpCallback: "pbskids_localization_get_callsigns_by_zip",
        success: onStationListLoaded
      });
    }

    /* Event Handlers
    **************************/
    function onStationListLoaded(data) {
      var __flagship_stations = {};
      var __stations = [];

      for (var i = 0; i < data.stations.length; i++) {
        var __commonname = data.stations[i]["common_name"];
        var __flagship = data.stations[i]["flagship"];
        var __station = data.stations[i]["callsign"];

        __flagship_stations[__flagship] = __flagship_stations[__flagship] || {
          callLetters: __flagship,
          commonName: __commonname
        };
        __flagship_stations[__flagship]["stations"] =
          (__flagship_stations[__flagship]["stations"]
            ? __flagship_stations[__flagship]["stations"] + ", "
            : "") + __station;
      }

      var k = 0;
      for (var j in __flagship_stations) {
        __stations[k] = __flagship_stations[j];
        k++;
      }

      _localization.stations = __stations;
      _localization.LocalizationEvent.dispatchEvent({
        eventType: _localization.LocalizationEvent.STATION_LIST_CHANGE,
        stations: __stations
      });

      if (_autoLocalize === true && __stations[0]) {
        _localization.updateStation(__stations[0].callLetters, true);
        _autoLocalize = false;
      }
    }

    function onStationLoaded(response, autoLocalized, userInitiated) {
      if (response.data.length == 0 || !response.data[0].attributes) {
        return;
      }

      _localization.station = response.data[0].attributes;

      for (var i = 0; i < response.data[0].attributes.images.length; i++) {
        _localization.station[response.data[0].attributes.images[i].profile] =
          response.data[0].attributes.images[i].url;
      }

      // The following should be removed in
      // version 2.0 of this localization util.
      var __backwardsCompatibleData = {
        callLetters: response.data[0].attributes.call_sign,
        commonName: response.data[0].attributes.full_common_name,
        kidsSite:
          response.data[0].attributes.station_kids_url ||
          response.data[0].attributes.website_url,
        autoLocalized: Boolean(autoLocalized === true),

        //Default Image
        logoURL:
          "https://www-tc.pbs.org/images/stations/standard/" +
          response.data[0].attributes.call_sign +
          ".gif",

        //PBS GA currated images
        // 2.29:1 (78 x 34 px)
        main:
          "https://www-tc.pbs.org/images/stations/main/" +
          response.data[0].attributes.call_sign +
          ".png",
        viralplayer:
          "https://www-tc.pbs.org/images/stations/viralplayer/" +
          response.data[0].attributes.call_sign +
          ".png",

        // 2.79:1 (78 x 28 px)
        smallbw:
          "https://www-tc.pbs.org/images/stations/smallbw/" +
          response.data[0].attributes.call_sign +
          ".gif",

        // 1:1 (75 x 75 px)
        apps:
          "https://www-tc.pbs.org/images/stations/apps/" +
          response.data[0].attributes.call_sign +
          ".png",
        findersml:
          "https://www-tc.pbs.org/images/stations/findersml/" +
          response.data[0].attributes.call_sign +
          ".gif",
        donate:
          "https://www-tc.pbs.org/images/stations/station-logos/donate-button/" +
          response.data[0].attributes.call_sign +
          ".gif",
        pbsmain:
          "https://www-tc.pbs.org/images/stations/station-logos/pbs.org/" +
          response.data[0].attributes.call_sign +
          ".gif",

        //PBS KIDS currated images
        // 57 x 47px
        standard:
          "https://www-tc.pbs.org/images/stations/standard/" +
          response.data[0].attributes.call_sign +
          ".gif",

        // 150 x 77px
        ipadLogoURL:
          "https://www-tc.pbs.org/images/stations/ipad/" +
          response.data[0].attributes.call_sign +
          ".png"
      };

      // Backfill backwards compatible data.
      for (var j in __backwardsCompatibleData) {
        _localization.station[j] = __backwardsCompatibleData[j];
      }

      _setCookie(
        "pbskids.station",
        response.data[0].attributes.call_sign,
        2 * 365,
        "/",
        ".pbskids.org"
      );
      _setCookie(
        "pbskids.autolocalized",
        Boolean(autoLocalized === true),
        2 * 365,
        "/",
        ".pbskids.org"
      );

      $("body").addClass("localized");
      $("body").toggleClass("autolocalized", autoLocalized === true);

      _localization.localized = true;
      _localization.autoLocalized = autoLocalized;
      _localization.LocalizationEvent.dispatchEvent({
        eventType: _localization.LocalizationEvent.STATION_CHANGE,
        station: _localization.station
      });

      if (userInitiated === true && window.GA_obj && window.GA_obj.trackEvent) {
        window.GA_obj.trackEvent(
          "Links",
          "Station Localization",
          response.data[0].attributes.call_sign
        );
      }

      _log("Localized: ", _localization);
    }

    /* Update HTML Methods
    **************************/
    function onZipChange(e) {
      $(".pbskids-station-picker form.pbskids-get-zipcode .input-zipcode").val(
        e.zipcode
      );
      $(".pbskids-station-picker form.pbskids-get-zipcode").hide();
      $(".pbskids-station-picker footer .current-zipcode").html(e.zipcode);
      $(".pbskids-station-picker article").css("display", "");
    }

    function onStationListChange(e) {
      $(".pbskids-station-picker ul.pbskids-station-list li").off();
      $(".pbskids-station-picker ul.pbskids-station-list").empty();

      var __lim = Math.min(5, e.stations.length);
      for (var i = 0; i < __lim; i++) {
        $(".pbskids-station-picker ul.pbskids-station-list").append(
          "<li onclick='org.pbskids.localization.updateStation(\"" +
            e.stations[i].callLetters +
            "\")'><img src='https://www-tc.pbs.org/images/stations/standard/" +
            e.stations[i].callLetters +
            ".gif' alt='" +
            e.stations[i].callLetters +
            " station logo' />" +
            e.stations[i].commonName +
            "</li>"
        );
      }
    }

    /* Public Methods
    **************************/
    _localization.updateZip = function(zip_code) {
      /**
      * @zip_code (Optional): (Int) or (String) of the updated zipcode
      * returns the current zip code or "(none)"
      */
      if (zip_code === "fromPicker") {
        return _localization.updateZip(
          $(".pbskids-station-picker .pbskids-get-zipcode .input-zipcode").val()
        );
      }

      if (zip_code) {
        zip_code = zip_code + "";
        if (!zip_code.match(/^[0-9]{5}$/)) {
          return "(not a valid zipcode)";
        }
        updateZip(zip_code);
      }
      return zip_code;
    };

    _localization.showZipCodePicker = function() {
      $(".pbskids-station-picker .pbskids-get-zipcode").css("display", "");
      $(".pbskids-station-picker article").css("display", "none");
    };

    _localization.updateStation = function(
      station_call_letters,
      autoLocalized,
      userInitiated
    ) {
      /**
      * @station_call_letters (Optional): the call-letters of the station to update to, e.g. WETA and WNET.
      * returns Boolean, true or false if the call to fetchStation is made.
      */
      if (
        typeof station_call_letters == "string" &&
        station_call_letters.length == 4
      ) {
        $.ajax({
          url: _STATION_SERVICES,
          dataType: "json",
          data: {
            call_sign: station_call_letters
          },
          success: function(response) {
            onStationLoaded(response, autoLocalized, userInitiated);
          }
        });
        return true;
      }
      return false;
    };

    _localization.getStationPickerHTML = function(containerTagType) {
      containerTagType = containerTagType || "aside";
      var __stationPickerHTML =
        "<" +
        containerTagType +
        ' style="position:relative;" class="pbskids-station-picker"><article class="pbskids-station-list-container" style="' +
        (!_localization.zip ? " display:none;" : "") +
        '"><header><h1>Select your local station</h1></header><p><ul class="pbskids-station-list">';

      if (_localization.stations) {
        var __lim = Math.min(5, _localization.stations.length);
        for (var i = 0; i < __lim; i++) {
          __stationPickerHTML +=
            "<li onclick='org.pbskids.localization.updateStation(\"" +
            _localization.stations[i].callLetters +
            "\", false, true);'><img src='https://www-tc.pbs.org/images/stations/standard/" +
            _localization.stations[i].callLetters +
            ".gif' alt='" +
            _localization.stations[i].callLetters +
            " station logo'/>" +
            _localization.stations[i].commonName +
            "</li>";
        }
      }

      __stationPickerHTML +=
        '</ul></p><footer>Results for <span class="current-zipcode">' +
        (_localization.zip || "") +
        '</span>. <a class="change-zipcode" onclick="org.pbskids.localization.showZipCodePicker();">Try another zip code.</a></footer></article><form name="pbskids-get-zipcode" class="pbskids-get-zipcode" action="javascript:void(0);" onsubmit="org.pbskids.localization.updateZip(\'fromPicker\');" style="background:#FFF; text-align:center; padding:20px 0; ' +
        (_localization.zip ? " display:none;" : "") +
        '"><label for="station-picker-zipcode-input" style="display: block;">What is your zip code?</label><span style="display:block">PBS KIDS uses your zip code to find our stations in your area.</span><input id="station-picker-zipcode-input" name="zipcode" class="input-zipcode" type="text" maxlength="5" placeholder="zip code" value="' +
        (_localization.zip || "") +
        '" style="text-align:center;"/><input type="submit" value="Go"/></form></' +
        containerTagType +
        ">";

      return __stationPickerHTML;
    };

    _localization.StationPicker = function(stationFieldID) {
      _log("StationPicker");

      var __openStationFinder = function(e) {
        _log("__openStationFinder()");
        $("#pbskids-station-picker").addClass("show-station-finder");
      };

      var __closeStationFinder = function(e) {
        _log("__closeStationFinder()");
        $("#pbskids-station-picker").removeClass("show-station-finder");
        return false;
      };

      var __onStationSelected = function(e) {
        _log("__onStationSelected()");
        $("#" + stationFieldID).val(e.station.callLetters);
        $("#pbskids-station-picker .current-station-logo").html(
          '<img src="https://www-tc.pbs.org/images/stations/standard/' +
            e.station.callLetters +
            '.gif" alt=" ' +
            e.station.callLetters +
            ' station logo" />' +
            e.station.commonName
        );
        $("#pbskids-station-picker .find-station-button").html(
          "Not your station? Select another."
        );
        __closeStationFinder();
      };

      // Configure station input field
      $("#" + stationFieldID)
        .prop("type", "hidden")
        .val(_localization.station ? _localization.station.callLetters : "")
        .parent()
        .append(
          '<aside id="pbskids-station-picker" >' +
            '<p class="station-group">' +
            '<span class="current-station-logo">' +
            (_localization.station
              ? '<img src="https://www-tc.pbs.org/images/stations/standard/' +
                _localization.station.callLetters +
                '.gif" alt="' +
                _localization.station.callLetters +
                ' station logo"/>' +
                _localization.station.commonName
              : "") +
            "</span>" +
            '<a class="find-station-button">' +
            (_localization.station
              ? "Not your station? Select another."
              : "Find your local station") +
            "</a>" +
            "</p>" +
            _localization.getStationPickerHTML(/*"article"*/) +
            '<button class="exit-station-finder">Back</button>' +
            "</aside>"
        );

      // Add css
      $("head").append(
        '<link rel="stylesheet" type="text/css" href="' +
          _cdn +
          '/js/lib/localization/station-picker.css">'
      );

      // Add event-listeners
      $(document).on(
        _localization.LocalizationEvent.STATION_CHANGE,
        __onStationSelected
      );
      $("#pbskids-station-picker .exit-station-finder").click(
        __closeStationFinder
      );
      $("#pbskids-station-picker .find-station-button").click(
        __openStationFinder
      );
    };

    //Complete and return the Global Localization Object, (window|exports).org.pbskids.localization
    init();
    return _localization;
  });
})();