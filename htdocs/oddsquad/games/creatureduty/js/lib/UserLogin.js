/*
require.include("weblib/external/createjs.min.js");
require.include("weblib/core/Util");
require.include("oddlib/OddSquadNamespace");
*/

/*
* Class UserLogin
*	Singleton utility to work with the user login system in Odd Squad projects
* @event ss.oddsquad.USER_LOGIN_LOADED - Dispatched when user login info has been loaded
*/

ss.oddsquad.USER_LOGIN_LOADED = "USER_LOGIN_LOADED";
ss.oddsquad.USER_LOGIN_FAILED = "USER_LOGIN_FAILED";

/*
* Get or create the singleton instance of this class
*/
ss.oddsquad.UserLogin = ss.oddsquad.UserLogin || new function(){
	
	//Inherit from EventDispatcher
	_UserLogin.prototype = new createjs.EventDispatcher();
	_UserLogin.prototype.constructor = _UserLogin;

	//Create and return the singleton instance
	return new _UserLogin();

	/*
	* Function used to construct the singleton instance of the UserLogin class
	*	NOTE: This is intended to be internal 
	*/
	function _UserLogin(){

		//Call base class constructor
		createjs.EventDispatcher.call(this);

		var _this = this;

		//[Boolean] - Whether user login loading has already started
		var _loadingStarted = false;

		//[Boolean] - Whether login info has been loaded yet
		var _loginInfoLoaded = false;

		//[Boolean] - Whether the user currently has a PBS login
		var _hasPbsLogin = false;

		//[Boolean] - Whether the user currently has an agent created
		var _hasAgent = false;

		//[Object] - Object containing data for the agent on the site
		var _agentData = null;

		/*
		* Initialize this object
		*/
		function _construct(){
			return _this;
		}

		/*
		* Start attempting to load user login info.
		*/
		_this.loadUserLogin = function(){
			//Don't start loading if already loading
			if(_loadingStarted){
				console.warn("UserLogin: A call was made to load user login, but login info is already loading or loaded!");
				return;
			}

			//Can't initialize without an agent object
			_log("Agent object:");
			console.dir(typeof(agent));
			if(typeof(agent) === 'undefined'){
				console.warn("No global 'agent' object was found - UserLogin cannot be initialized!");

				//Dispatch a failure event
				_this.dispatchEvent(new createjs.Event(ss.oddsquad.USER_LOGIN_FAILED));

				return;
			}

			_loadingStarted = true;

			//Wait for the user login info to be loaded
			agent.loggedIn(_handleLoginInfo);
		}

		/*
		* Check if user login information has been loaded already
		* @return:[Boolean] - True if user login information has been loaded already, false otherwise
		*/
		_this.loginLoaded = function(){
			return _loginInfoLoaded;
		}

		/*
		* Check whether the player is currently logged into a PBS kids account
		* @return:[Boolean] - True if the player is currently logged into a PBS kids account, false otherwise
		*/
		_this.hasPbsLogin = function(){
			return _hasPbsLogin;
		}

		/*
		* Check whether the player has a created agent
		* @return:[Boolean] - True if the player has an agent created, false otherwise
		*/
		_this.hasAgent = function(){
			return _hasAgent;
		}	

		/*
		* Get data pertaining to the logged in agent
		* @return:[Object] - Object containing data pertaining to the logged in agent, or null if no agent exists
		*/
		_this.getAgentData = function(){
			return _agentData;
		}

		/*
		* Check whether the player is logged into a PBS kids account and has an agent
		* @return:[Boolean] - True if the player is logged into a PBS kids account and has an agent, false otherwise
		*/
		_this.hasPbsLoginAndAgent = function(){
			//_log("UserLoging: HasLogin: " + _this.hasPbsLogin() + ", HasAgent: " + _this.hasAgent());
			return _this.hasPbsLogin() && _this.hasAgent();
		}

		/*
		* Handle a callback that user info has been loaded
		* @param isPbsLoggedIn:[Boolean] - Whether the user is currently logged in to a PBS kids account
		*/
		function _handleLoginInfo(isPbsLoggedIn){
			_log("UserLogin: Handle login info");

			//Set flag for whether user is logged in
			//_hasPbsLogin = Boolean(agent.name);
			_hasPbsLogin = Boolean(userLogin[0].isloggedin);

			/*
			//If user is logged in, try to get agent data as well
			if(_hasPbsLogin){
				_log("we have a PBS login and we're trying to load the agent data");
				_loadAgentData();	
			//Otherwise, loading is completed
			}else{
				_log("no PBS login, let's just go ahead")
				_loginInfoLoaded = true;
				_this.dispatchEvent(new createjs.Event(ss.oddsquad.USER_LOGIN_LOADED));
			}
			*/
			_loginInfoLoaded = true;
			_this.dispatchEvent(new createjs.Event(ss.oddsquad.USER_LOGIN_LOADED));
		}

		/*
		* Attempt to load data for the user's agent
		*/
		function _loadAgentData(){
			
			//Show a warning if no flag for agent loading 
			if(typeof(agentInfoLoaded) === 'undefined'){
				console.warn("UserLogin: No agentInfoLoaded flag could be found - Agent info will not be loaded!");
				
				//Dispatch an event to inform others of login info loading
				_loginInfoLoaded = true;
				_this.dispatchEvent(new createjs.Event(ss.oddsquad.USER_LOGIN_LOADED));
			}

			//If agent data is already loaded, proceed right away
			if(agentInfoLoaded){
				_handleAgentDataLoaded();
			//Otherwise, set a timer to check for completion
			}else{
				createjs.Tween.get(_this).wait(200).call(_loadAgentData);
			}
		}

		/*
		* Handle the agent data being loaded by the site
		*/
		function _handleAgentDataLoaded(){
			//TESTING
			//_log("Agent Name: '" + agent.name + "'");

			//Look for an agent name to confirm one has been set up
			if(isEmpty(agent.name) || agent.name.length <= 0){
				_hasAgent = false;
			}else{
				_hasAgent = true;
				_agentData = {name:agent.name, code:agent.code, avatar:agent.avatar, background:agent.background};
			}

			_loginInfoLoaded = true;

			//Dispatch an event to inform others of login info loading
			_this.dispatchEvent(new createjs.Event(ss.oddsquad.USER_LOGIN_LOADED));
		}

		return _construct();
	}
}