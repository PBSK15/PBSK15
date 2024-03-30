(function( require, define, factory ){
  if( typeof define === "function" && define.amd ){
    //PBS.KIDS AMD support for requireJS
    define("messages", ['jquery', 'pubsub', 'utils'], factory);
  }
  else {
    var _that = (typeof window === "object" && window) || this;
    factory(_that.jQuery, _that.PubSub);
  }
}( PBS.KIDS.require, PBS.KIDS.define, function($, PubSubJS) {
  var _DEBUG = window.location.hostname.match(/^((?!www(\-tc)?\.).+)pbskids\.org$/) ? true : false;
  var _APP_NAME = "Messages";
  var _APP_VERS = "1.8.0";
  var _DEBUG = (/^(((?!www(\-tc)?|cms(\-dev)?\.).+)pbskids\.org|tortuga\.dev)$/).test(window.location.hostname);

  var _log = function(message, args, type, force){
    if( _DEBUG === true || force === true ){
      if( typeof message === "string" || !!args ){
        message = _APP_NAME + " ver. " + _APP_VERS + " | " + message;
      }
      else{
        args = message;
        message = _APP_NAME + " ver. " + _APP_VERS + " | ";
      }

      if(args === undefined){
        args = "";
      }

      if(typeof console!=="undefined"){
        if(type === "error" && console.error){
          console.error(message,args);
        }
        else if(type === "error" && window.Error){
          throw new Error(message);
        }
        else if(type === "info" && console.info){
          console.info(message,args);
        }
        else if(type === "warn" && console.warn){
          console.warn(message,args);
        }
        else if(type === "debug" && console.debug){
          console.debug(message,args);
        }
        else if(console.log){
          console.log(message,args);
        }
        else if(typeof window.debug !== "undefined"){
          window.debug.log.apply(message,args);
        }
      }
    }
  };//end _log()

  var _firstRun = true;
  var _messages = {};//{ "pbskids.messages.site" : ["messag_0",..., "message_n"], "pbskids.messages.games" : ["message_0",..., "message_n"], .... "}
  var _globalJquery = (window.$ || $);
  var _DEFAULT_MESSAGES = 1;
  var _SHELL_PAGES = [
      {'number_of_messages' : 2, 'page' : /^\/?$/ },
      {'number_of_messages' : 2, 'page' : /^\/everything/},
      {'number_of_messages' : 2, 'page' : /^\/newslettter/},
      {'number_of_messages' : 1, 'page' : /^\/games/},
      {'number_of_messages' : 1, 'page' : /^\/video/}
  ];

  var _addGlobalListener = function(domObject, eventType, handler) {
    //THIS IS NEEDED FOR PRODUCER SITES WHICH DO NOT USUALLY USE THE LOADER SYSTEM
    if (typeof _globalJquery.fn.on == "function") { //for jQuery 1.7+
      _globalJquery(domObject).on(eventType, handler);
    }
    else if (typeof _globalJquery.fn.bind == "function" && typeof _globalJquery.fn.unbind == "function") { //for jQuery 1.0+
      _globalJquery(domObject).unbind(eventType, handler); //just in case to prevent redundant callbacks
      _globalJquery(domObject).bind(eventType, handler);
    }
  };

  var _get_messages = function() {
    var _url = {};
    for( var i in window.location ) _url[i] = window.location[i];
    if( window._location && typeof window._location === "object" ) for( var i in window.location ) _url[i] = window._location[i];

    var _path = _url.pathname;

    if (_path.match(/\/~/)) {
      //fix for sandbox instances
      _path = _path.substring(0, _path.indexOf("~")) + _path.substring(_path.indexOf("site") + 5);
    }

    // determine the number of messages to return based on url
    var _number_of_messages = _DEFAULT_MESSAGES;
    for (var i = 0; i < _SHELL_PAGES.length; i++) {
      if (_path.match(_SHELL_PAGES[i].page)) {
        _number_of_messages = _SHELL_PAGES[i].number_of_messages;
        _log("Found page: " + _SHELL_PAGES[i].page + " , has " + _number_of_messages + " message(s)" );
        break;
      }
    }

    var _escaped_url = encodeURIComponent('http://pbskids.org' + _path);
    if (_url.search) _escaped_url += encodeURIComponent(_url.search);
    if (_url.hash) _escaped_url += encodeURIComponent(_url.hash);

    $.ajax({
      'url': '/kidsactivity/messages/v2/messages.json?url=' + _escaped_url + '&n=' + _number_of_messages,
      'dataType': 'json',
      'complete': function(r) {
        if( r.status != 200 ){
          _log("Failed to load message", null, "warn");
          return;
        }

        if( !r.responseJSON || !r.responseJSON.content ){
          _log("Message loaded but with no content", null, "warn");
          return;
        }

        var response = r.responseJSON;
        var is_game = false;
        var types = response.content.type;

        if( !types ) {
          _log("Message content has no type", null, "warn");
          return;
        }

        for (var i = 0; i < types.length; i++) {
          if (types[i] == 'Game') {
            is_game = true;
            break;
          }
        }

        if (is_game) {
          var tip = response['messages'][0];
          var description = response.content.parents_description ? response.content.parents_description : response.content.site.short_description;
          var age_range   = response.content.age_range ? response.content.age_range : response.content.site.age_range;
          var curriculum  = response.content.curriculum ? response.content.curriculum : response.content.site.curriculum;

          var related_link = tip.content;
          if (tip.type.toLowerCase() == 'parents' && tip.subtype.toLowerCase() == 'tip') {
            related_link = tip.link;
          }

          var card = {
            'property': response.content.site.title,
            'title': response.content.title,
            'content_guid': response.content.guid,
            'guid': PBS.KIDS.utils.uuid(),
            'type': 'Game',
            'description': description,
            'image': response.content.thumbnail,
            'info_link': response.content.url,
            'related_tip': tip.short_description,
            'related_link': related_link,
            'age_range': age_range,
            'goals': response.content.curriculum,
            'subtype': tip.subtype,
            'series_description': response.content.site.short_description
          };

          _broadcastMessage('pbskids.messages.games', card);
        }

        _broadcastMessage('pbskids.messages.site', response['messages']);

      } //end complete()
    }); //end .ajax()
  }; //end _get_messages()


  var _broadcastMessage = function(type, message){
    PubSubJS.publish(type, message);
    _messages[type] ? _messages[type].push(message) : ( _messages[type] = [message] );
    _log("Broadcasting " + type);
    _log(_messages[type]);
  };

  var _get_video_messages = function() {
    var _cosi_version = {};

    var videoCallback = function(e) {
      _log('videoCallback() e:', e);
      if (!e.release) {
        e.release = e;
        e.release.series_nola = e.program.nola_root;
      }

      _cosi_version[e.release.series_nola] = ((_cosi_version[e.release.series_nola] || 0) + 1) % 20;

      $.ajax({
        'url': '/kidsactivity/messages/v2/messages.json?n=' + _DEFAULT_MESSAGES + '&nola=' + encodeURIComponent(e.release.series_nola) + '&v=' + _cosi_version[e.release.series_nola],
        'dataType': 'json',
        'complete': function(r) {
          if (r.status == 200) {
            var video_content = r.responseJSON['content'];
            var tip = r.responseJSON['messages'][0];
            var description = e.release.description ? e.release.description : video_content.short_description;

            var related_link = tip.content;
            if (tip.type.toLowerCase() == 'parents' && tip.subtype.toLowerCase() == 'tip') {
              related_link = tip.link;
            }

            var imageUrl;
            if (e.release.images && e.release.images.covestackcard_kids) {
              imageUrl = e.release.images.covestackcard_kids.url;
            }
            else {
              imageUrl = e.release.thumbnail;
            }

            var card = {
              'property': video_content.title,
              'title': e.release.title || e.release.name,
              'content_guid': e.release.guid || e.release.id || e.release.nola_episode,
              'guid': PBS.KIDS.utils.uuid(),
              'type': e.release.type,
              'duration': e.release.duration,
              'description': description,
              'image': imageUrl,
              'info_link': video_content.url,
              'related_tip': tip.short_description,
              'related_link': related_link,
              'age_range': video_content.age_range,
              'goals': video_content.curriculum,
              'subtype': tip.subtype,
              'series_description': video_content.short_description
            };

            if (video_content.title !== "PBS KIDS") {
              //For video messages in the parents bar, we don't care
              //about promo videos or bumps from the generic "PBS KIDS" property.
              //Only create series object for proper show titles. Headband
              //will check for existance of this series object before building or
              //updating video messages in the parents bar.
              card.series = {
                "title": video_content.title,
                "age_range": video_content.age_range,
                'url': video_content.url,

                'description': video_content.long_description ? video_content.long_description : video_content.short_description,
                'long_description': video_content.long_description,
                'short_description': video_content.short_description,

                'curriculum': video_content.curriculum, //[{ "description": "curriculum description", "name" : "curriculum name" }..]

                //Related Links
                "itunes_url": video_content.itunes_url,
                "shop_url": video_content.shop_url,
                "parents_url": video_content.parents_url
              };
            }

            _broadcastMessage('pbskids.messages.video', card);
          }
          else {
            _log("Error Building Video Message", "error");
          }
        } //end complete()
      }); //end .ajax()
    }; //end on VideoStart event-handler

    // Publish video message on each VideoStart event.
    // This is the legacy event that is still emitted by the producer player plugin via jQuery.
    _addGlobalListener(document, 'org_pbskids_video_VideoEvent_VideoStart', videoCallback);

    if (typeof window.PBSKidsPlayerEvents !== 'undefined') {
      _log("PBSKidsPlayerEvents FOUND!!");
      PBSKidsPlayerEvents.on(PBSKidsPlayerEvents.VOD_MEDIA_START, videoCallback);
      PBSKidsPlayerEvents.on(PBSKidsPlayerEvents.LIVESTREAM_MEDIA_START, videoCallback);
    }
    else {
      _log("PBSKidsPlayerEvents NOT FOUND!!");
    }

  }; //end _get_video_messages()

  var _sources = {
    'SITE': {
      'getter': _get_messages
    },
    'VIDEO': {
      'getter': _get_video_messages
    }
  };

  var _send = function() {
    _log("Messages :: _send()");
    for (var source in _sources) {
      _sources[source]['getter'].apply(this);
    }
  };//end send()

  var _init = function() {
    if( !_firstRun ){
      _log("Messages :: already called _init()");
      return;// init only once
    }
    _firstRun = false;

    _log("Messages :: _init()");
    var _updateUrlTimeout;
    var _onStateChange = function() {
      _log("Messages :: _onStateChange()");
      clearTimeout(_updateUrlTimeout); //cancel just in case onpopstate fired first
      _send();
    };

    //If available, listen for HTML5 History changes
    _log("\"onpopstate\" in window ? " + ("onpopstate" in window));
    if ("onpopstate" in window) {
      //Wait for the initial onpopstate (or 2 seconds) to start messages
      _updateUrlTimeout = setTimeout(_onStateChange, 2000); //Needed in case initial onpopstate is not captured.
      _addGlobalListener(window, "popstate", _onStateChange);
    }
    else {
      //If History API is not availalbe then start messages as normal
      _send();
    }

    //If available, update messages on hashchange event
    _log("\"onhashchange\" in window ? " + ("onhashchange" in window));
    if ("onhashchange" in window) {
      _addGlobalListener(window, "onhashchange", _onStateChange);
    }
  };//end init()

  var _subscribe = function(messageType, callback, getExistingMessages){
    /**
     * @messageType: the message type to listen for: "pbskids.messages.(video|games|site).
     * @callback: a callback function to handle broadcasts of the messages. Similar to an event-handler parameter in .addeventlister()
     * @getExistingMessages: Boolean, defaults to True. If messages of the subscribed type have broadcasted, then get those now.
     * usage: .subscribe('pbskids.messages.video', {Object}.myCallbackFunctionName);
     *
     * Returns undefined
     */
    var subscription_token = PubSubJS.subscribe(messageType, callback);

    getExistingMessages = !Boolean(getExistingMessages === false);//defaults to True

    if( getExistingMessages && _messages[messageType] && _messages[messageType].length > 0){
      for(var i in _messages[messageType]){
        callback(messageType, _messages[messageType][i]);
      }
    }

    return subscription_token;
  };//end _subscribe

  var _unsubscribe = function(subscription_token) {
      PubSubJS.unsubscribe(subscription_token);
  };

  return {
    "init": _init,
    "send": _send,
    "subscribe" : _subscribe,
    "unsubscribe" : _unsubscribe
  };

}));