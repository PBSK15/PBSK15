(function(require, define, factory) {
    if (typeof define == 'function' && define.amd) {
        define(['jquery', 'colorbox', 'utils', 'uuid'], factory);
    } else {
        factory(window.jQuery, PBS.KIDS.$_auth.colorbox, PBS.KIDS.utils, PBS.KIDS.utils.UUID);
    }
} (PBS.KIDS.require, PBS.KIDS.define, function($, cb, utils, UUID) {
    (function(ns) {
        var nameSpace = ['PBS' , 'KIDS' ,'identity'];
        var identityObj = ns;

        for(var i=0;i<nameSpace.length;i++){
            if(identityObj[nameSpace[i]] === undefined)
                identityObj = identityObj[nameSpace[i]] = {};
            else
                identityObj = identityObj[nameSpace[i]];
        }

        var anonymousUserID = utils.uuid();
        var loginWindow = null;

        //OAuth URL and related utility functions
        var serviceBaseURL = window.location.protocol + '//' + window.location.host;
        var authorizeURL = "/go/apps/oauth/authorize";
        var tokenValidateURL = "/go/apps/auth/v2/api/kid/{_username}.json?bearer_token={_accesstoken}";
        var logoutURL = "/go/apps/auth/logout";
        var signupURL = "/go/apps/auth/signup?destination=/includes/progresstracker/oauth2/signin-success.html";
        var promptURL = "/go/apps/auth/prompt?destination=/includes/progresstracker/oauth2/signin-success.html";
        var attributeTransferenceURL = "/progresstracker/api/v1/attribute-transference.json?anonymous_user_id={_anonymous_user_id}&user_id={_user_id}";

        var queryStringParameters = [
            ['response_type' ,'token'],
            ['client_id' ,'ca65d552d8b716e21cf05588afdf2e'],
            ['state', 'PBS.KIDS.identity.sdkLoginCallback'],
            ['redirect_uri' , function() {
                return serviceBaseURL + '/includes/progresstracker/oauth2/login-success.html';
            }]
        ];

        //Evaluate the value passed in, if function return the function returned value otherwise return value as it is
        function evaluate(val) {
            if(typeof(val) === "function")
                return val();
            else
                return val;
        }


        //Return OAuth authorization URL
        function getAuthorizationURL(){
            var params = [];
            for(var i=0;i<queryStringParameters.length;i++) {
                params.push(evaluate(queryStringParameters[i][0]) + "=" + evaluate(queryStringParameters[i][1]));
            }
            return serviceBaseURL + authorizeURL + "?" + params.join("&");
        }

        /***************************************************************/
        //Called when the logout is successfully executed on Identity server
        // and cookie is reset, it invokes the Logout callback method of the
        // Identity SDK consumer.
        // Returns: null
        /***************************************************************/
        var logoutSuccess = function(){
            utils.deleteCookie(pbskids_access_token);
            utils.deleteCookie(pbskids_access_token_expiry);
            anonymousUserID = utils.uuid();// reset the anonymous GUID once the user has logged out
            utils.log("user logged out");
            if(logoutCallback !== undefined && typeof(logoutCallback) === 'function'){
                logoutCallback();
            }
        }

        /***************************************************************/
        //Called when the access token is successfully validated
        //it invokes the validation callback method of the
        // Identity SDK consumer. provides the User object if validation is
        // successful.
        /***************************************************************/
        var onAccessTokesValidationSuccess = function(data){
            utils.log("Access token validated successfully");
            var user = {
                username: data.username,
                status: data.status,
                consents: data.consents
            }
            if(accessTokenValidationCallback !== undefined && typeof(accessTokenValidationCallback) === 'function'){
                accessTokenValidationCallback(true,user);
            }
        }
        /***************************************************************/
        //Called when the access token is invalid
        //it invokes the validation callback method of the
        // Identity SDK consumer. provides the error object if validation is
        // failed.
        /***************************************************************/
        var onAccessTokenValidationFailure = function(error){
            utils.log("Access token validation failed");
            var errorObject = {
                status: error.status
            };
            if(error.status === 401){
                errorObject.message = 'invalid access token';
            }
            else if(error.status === 403){
                errorObject.message = 'wrong access token';
            }
            if(accessTokenValidationCallback !== undefined && typeof(accessTokenValidationCallback) === 'function'){
                accessTokenValidationCallback(false,errorObject);
            }
        }

        function autoUpgradeToV2(){
            if(utils.getCookie(pbskids_userid) !== null){
                utils.log("Auto upgrading from V1 to V2 cookie");
                loginWindow = loginProcess.iframeWindow(getAuthorizationURL());
                loginWindow.hide();
            }
        }


        //Cookie keys
        var pbskids_auth = "PBSKIDS_AUTH";
        var pbskids_username = "pbskids.username";
        var pbskids_userid = "pbskids.userid";
        var pbskids_access_token = "pbskids.access.token";
        var pbskids_access_token_expiry = "pbskids.access.token.expiry";

        //Callback provided by consumer of the identity SDK when login function is called
        var clientCallback = function(token, expiry) {

        }

        //Callback provided by consumer of the identity SDK when acess token is validated
        var accessTokenValidationCallback = function(status,user){

        }

        //Callback provided by the consumer of the identity SDK when user logouts
        var logoutCallback = function(){

        }

        var attributeTransferenceError = function(anonymous_UserId){
            /* Temporarily disabling attribution transference, until DataStax servers are deployed to live environment.
             window.setTimeout(function(){
             attributeTransference(anonymous_UserId);
             },10000);
             */
        }

        //This method is responsible for attribute transference and will
        // be invoked after the user is successfully logged in or Successful
        // Signup
        var attributeTransference = function(anonymous_UserId){
            var userid = utils.getCookie(pbskids_userid);
            var url = attributeTransferenceURL.replace('{_anonymous_user_id}',anonymous_UserId).replace('{_user_id}',userid);
            $.ajax({
                url: serviceBaseURL+url,
                type: 'GET',
                error: function(){
                    // In case of N/w error or error code 400 or 500 from server,
                    //it will retry after 10 seconds
                    attributeTransferenceError(anonymous_UserId);
                }
            });
        }


        //Login process from popup window or iframe
        var loginProcess = {
            popupWindow : function(url) {
                var wnd = window.open(url);
                return {
                    close : function() {
                        wnd.close();
                    }
                }
            },

            iframeWindow : function(url){
                var self = this;
                PBS.KIDS.$_auth.colorbox({
                    width: '620px',
                    iframe: true,
                    fastIframe: false,
                    scrolling: false,
                    href: url,
                    onCleanup: function() {
                        soundManager.pauseAll();
                    },
                    onComplete: function() {
                        $('body').trigger('init.go');
                    },
                    overlayClose: false
                });

                return {
                    close : function(){
                        PBS.KIDS.$_auth.colorbox.close();
                    },
                    hide : function(){
                        $('#colorbox').css('display','none');
                        $('#cboxOverlay').css('display','none');
                    }
                }

            }
        }

        /***************************************************************/
        //Checks if the V1 cookie is present, then upgrades it to V2 cookie
        // callback: callback method which will be invoked once the V1 cookie
        //          is upgraded to V2
        // Returns: 'null'
        /***************************************************************/
        identityObj.init = function(callback){
            if (typeof(callback) !== undefined && typeof(callback) === 'function') {
                clientCallback = callback;
            }
            //check V1 Cookie
            if(utils.getCookie(pbskids_userid) !== null && utils.getCookie(pbskids_access_token) === null){
                utils.log("User logged in V1, now upgrading to V2");
                loginWindow = loginProcess.iframeWindow(getAuthorizationURL());
                loginWindow.hide();
            }
        }

        /***************************************************************/
        // Login the user, also check if V2 cookie is present invokes the callback
        // method
        // callback: callback method which will be invoked once the login is
        //          successful.
        // Returns: 'null'
        /***************************************************************/
        identityObj.signin = function(callback) {
            if (typeof(callback) !== undefined && typeof(callback) === 'function') {
                clientCallback = callback;
            }

            var currentUserID = utils.getCookie(pbskids_userid);
            var currentAuthToken = utils.getCookie(pbskids_access_token);
            if (currentUserID === null) // We don't have UserID and are therefor not logged in
            {
                utils.log("User not logged in");
                loginWindow = loginProcess.iframeWindow(getAuthorizationURL());
            } else if(currentAuthToken === null) // We are logged in but don't have oauth token (auto-upgrade should occur)
            {
                utils.log("User not logged in V2");
                loginWindow = loginProcess.iframeWindow(getAuthorizationURL());
            } else {  // We are logged in and have oauth token and hence call the callback
                utils.log("User already logged in cookie2: ", currentAuthToken);
                if(loginWindow !== undefined && loginWindow !== null && loginWindow.close!== undefined) {
                    loginWindow.close();
                }
                clientCallback(utils.getCookie(pbskids_access_token),utils.getCookie(pbskids_access_token_expiry));
            }
        }

        /***************************************************************/
        // Logout the user, reset the server oAuth token and invokes the logout
        // callback method.
        // callback: callback method which will be invoked once the logout is
        //          successful.
        // Returns: 'null'
        /***************************************************************/
        identityObj.signout = function(clientCallback){

            logoutCallback = clientCallback;
            $.ajax({
                url: serviceBaseURL+logoutURL,
                type: 'GET',
                success: logoutSuccess
            });
        }

        /***************************************************************/
        // Signup the user for creating a new account.
        // callback: callback method which will be invoked once the login is
        //          successful.
        // Returns: false
        /***************************************************************/
        identityObj.signup = function(callback) {
            if (typeof(callback) !== undefined && typeof(callback) === 'function') {
                clientCallback = callback;
            }
            utils.log("New User creating by Signup");
            loginWindow = loginProcess.iframeWindow(serviceBaseURL+signupURL);
            return false;
        }

        /***************************************************************/
        // Prompt the user for creating a new account.
        // callback: callback method which will be invoked once the login is
        //          successful.
        // Returns: false
        /***************************************************************/
        identityObj.prompt = function(callback) {
            if (typeof(callback) !== undefined && typeof(callback) === 'function') {
                clientCallback = callback;
            }
            utils.log("Prompt window opened");
            loginWindow = loginProcess.iframeWindow(serviceBaseURL+promptURL);
            return false;
        }

        /***************************************************************/
        // This method is invoked by iFrame or Pop up page after the successful
        // login is done, and this method invokes the callback method of idenity
        // SDK consumer.
        // token: oAuth token received from the oAuth redirect URI page.
        // expiry: expiry of the oAuth token.
        // Returns: 'null'
        /***************************************************************/
        identityObj.sdkLoginCallback = function(token, expiry){
            //this function will be called from redirect URL to pass the token and expiry values
            if(loginWindow !== null)
                loginWindow.close();
            utils.setCookie(pbskids_access_token, token);
            //To execute the auto upgrade of V1 to V2 cookie to get new cookie, since
            // oAuth token will expire on the server, refreshing 60 seconds before expiry
            if(parseInt(expiry)){
                window.setInterval(autoUpgradeToV2,(parseInt(expiry)-60)*1000);
            }

            //attributeTransference(anonymousUserID);

            if(clientCallback !== undefined && typeof(clientCallback) === 'function'){
                clientCallback(token,expiry);
            }
        }

        /***************************************************************/
        // This method is invoked by iFrame or Pop up page after the successful
        // signin/signup is done from the prompt page, and this method invokes the
        // callback method of idenity SDK consumer. This is an internal method not
        // to be used.
        // Returns: 'null'
        /***************************************************************/
        identityObj.sdkSigninCallback = function(){
            identityObj.signin(clientCallback);
        }

        /***************************************************************/
        // This method verifies if the user is anonymous
        // Returns: user object if user is logged in else 'null'
        /***************************************************************/
        identityObj.isAnonymousUser = function(){
            return utils.getCookie(pbskids_userid) === null;
        }

        /***************************************************************/
        // This method validates the oAuth access token.
        // validationCallback: callback method invoked when the access token
        //                      is validated.
        // Returns: 'null'
        /***************************************************************/
        identityObj.validateAccessToken = function(validationCallback){
            accessTokenValidationCallback = validationCallback;
            var username = utils.getCookie(pbskids_username);
            var accesstoken = utils.getCookie(pbskids_access_token);
            if(username !== null && accesstoken !== null){
                var url = tokenValidateURL.replace('{_username}',username).replace('{_accesstoken}',accesstoken);
                $.ajax({
                    url: serviceBaseURL + url,
                    type: 'GET',
                    success: onAccessTokesValidationSuccess,
                    error: onAccessTokenValidationFailure
                });
            }
            else{
                var errorObject = {status:401};
                onAccessTokenValidationFailure(errorObject);
            }
        }

        /***************************************************************/
        // This method returns the array of logged in or anonymous users
        //
        // Returns: array of user object containing logged in or anonymous
        //          users.
        /***************************************************************/
        identityObj.getCurrentUsers = function(){
            var userid = utils.getCookie(pbskids_userid);
            var is_logged_in = true;
            if(userid === null){
                userid = anonymousUserID;
                is_logged_in = false;
            }

            var username = utils.getCookie(pbskids_username);

            var accesstoken = utils.getCookie(pbskids_access_token);

            return [{
                userid : userid,
                username : username,
                accesstoken : accesstoken,
                isloggedin: is_logged_in,
                anonymousGuid: anonymousUserID
            }];
        }

        //This is a test method for enabling QA to test Auto upgrade of V1 to V2 cookie
        identityObj.clearV2Cookie = function(){
            logoutSuccess();
        }
        //This is a test method for enabling QA to test Auto upgrade of V1 to V2 cookie
        identityObj.upgradeToV2Cookie = function(loginCallback){
            if (typeof loginCallback === 'undefined') {
                loginCallback = clientCallback;
            }
            identityObj.init(loginCallback);
        }
    })(window);

    $(document).ready(function() {
        // Activated by Headband's dependency loader when PBS.KIDS.identity.loaded
        // is true. When used independent of Headband, PBS.KIDS.identity.init is
        // called manually.
        //PBS.KIDS.identity.init();
        PBS.KIDS.identity.loaded = true;
    });


    return PBS.KIDS.identity;

}));
