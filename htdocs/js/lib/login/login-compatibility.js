(function() {
  'use strict';
  (function( require, define, factory ) {
    if (typeof define === "function" && define.amd) {
      define("login-compatibility", ["jquery"], factory);
    }
    else{
      factory( jQuery );
    }
  }(PBS.KIDS.require, PBS.KIDS.define, function($) {

    function init() {
      retrofitEvents();
      retrofitMethods();
    }

    function retrofitEvents() {
      PBS.KIDS.$_auth = PBS.KIDS.$_auth || $;

      $(document).on('org_pbskids_login_LoginEvent_LoggedIn', function(event) {
        PBS.KIDS.$_auth('body').trigger('cbox_closed');
      });

      $(document).on('org_pbskids_login_LoginEvent_LoginClosed', function(event) {
        PBS.KIDS.$_auth('body').trigger('cbox_closed');
      });
    }

    function retrofitMethods() {
      // Legacy headband interfaces
      if (!PBS.KIDS.Headband) PBS.KIDS.Headband = {};
      PBS.KIDS.Headband.reload = function () {};

      // Legacy Flash interfaces
      if (!window.PKG) window.PKG = {};

      PKG.prmpt = function() {
        org.pbskids.login.displayLogin({refresh: 'true'});
      }

      PKG.login = function() {
        org.pbskids.login.displayLogin(null, '/go/apps/auth/login/');
      }
	  
	  PKG.overlay = function(arg) {
	    org.pbskids.login.displayLogin(null, arg);
	  }

      // Legacy identity interfaces
      if (!PBS.KIDS.identity) PBS.KIDS.identity = {};

      PBS.KIDS.identity.prompt = function() {
        org.pbskids.login.displayLogin();
      }

      PBS.KIDS.identity.singup = function() {
        org.pbskids.login.displayLogin(null, '/go/apps/auth/singup/');
      }

      PBS.KIDS.identity.signout = function() {
        org.pbskids.login.logout();
      }
      
      PBS.KIDS.identity.isAnonymousUser = function() {
        var userid = getCookie('pbskids.userid');
        return userid ? false: true;
      }

      PBS.KIDS.identity.getCurrentUsers = function() {
        var username = getCookie('pbskids.username');
        var userid = getCookie('pbskids.userid');
        var is_logged_in = userid ? true: false;
        var accesstoken = getCookie('pbskids.access.token');

        return [{
          username : username,
          userid : userid,
          accesstoken : accesstoken,
          isloggedin: is_logged_in,
          anonymousGuid: null
        }];
      }

      PBS.KIDS.identity.loaded = true;
    }

    function getCookie(name) {
      var cookies = document.cookie.split(";");
      for(var i=0; i<cookies.length; i++) {
        var keyValue = cookies[i].split("=");
        if ($.trim(keyValue[0]) === name) return keyValue[1];
      }
      return null;
    }

    $(document).on('org_pbskids_login_LoginEvent_LoginReady', function() {
        retrofitEvents();
        retrofitMethods();
    });
  }));
})();