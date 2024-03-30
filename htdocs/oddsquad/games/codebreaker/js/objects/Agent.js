Agent.MOVESPEED = 200;
Agent.EXITSPEED = 500;

// Generate the lazer element based on given sequense
function Agent( parentContainer ) {

	"use strict";

	var _this = new createjs.Container();
	var _myParent = parentContainer;

	var _myAgent;
	var _agentAnim;

	var _initPos = {x:0, y:0};
	var _currentTile;


	_this.getSectionCount = function() {
		return _sectionCount;
	}


	_this.getCurrentTile = function() {
		return _currentTile;
	}


	// return a canvas element container
	function _Construct () {
		
		// construct the container
		parentContainer.addChild(_this);

		// create an agent
		_CreateAgent();

		_this.width = _myAgent.width;
		_this.height = _myAgent.height;
		_this.enabled = true;

		_initPos.x = _myParent.width / 2;
		_initPos.y = _myParent.height - _this.height;
//		_this.Spawn(_initPos);
		
		return _this;
	}


	function _CreateAgent() {

		if (AgentJSON == null) {
			console.error("Avatar JSON not available!");
		}

		//_myAgent = CreateJSAssetManager.getBitmap( "GameAgent" );
		_myAgent = new createjs.SpriteSheet(AgentJSON);
		_myAgent.width = _myAgent.getFrameBounds(0).width;
		_myAgent.height = _myAgent.getFrameBounds(0).height;

		_agentAnim = new createjs.Sprite(_myAgent, "walk_up");
		_agentAnim.regX = -10;
		_agentAnim.regY = 36;
		
		//_agentAnim.alpha = 0.8;

		_this.addChild(_agentAnim);
	}




	_this.MoveTo = function( tile, callback ) {

		AudioHelper.PlaySFX("SFX_Agent_Move");
		
		if (_currentTile.coord.col > tile.coord.col) {

			// flip
			_this.scaleX = -1;

			if (_currentTile.coord.row > tile.coord.row) {
			_this.scaleX = 1;
				_agentAnim.gotoAndPlay("walk_upcorner");
			} else if (_currentTile.coord.row < tile.coord.row) {
				_agentAnim.gotoAndPlay("walk_downcorner");
			} else {
				_agentAnim.gotoAndPlay("walk_side");
			}

		} else if (_currentTile.coord.col < tile.coord.col) {

			_this.scaleX = 1;

			if (_currentTile.coord.row > tile.coord.row) {
			_this.scaleX = -1;
				_agentAnim.gotoAndPlay("walk_upcorner");
			} else if (_currentTile.coord.row < tile.coord.row) {
				_agentAnim.gotoAndPlay("walk_downcorner");
			} else {
				_agentAnim.gotoAndPlay("walk_side");
			}
			

		} else {
			
			// up & down
			if (_currentTile.coord.row > tile.coord.row) {
				_agentAnim.gotoAndPlay("walk_up");
			} else {
				_agentAnim.gotoAndPlay("walk_down");
			}
		}



		if (callback != null) {
			createjs.Tween.get(_this).to(tile.gridCord, Agent.MOVESPEED).call(callback, [tile]);
		} else {
			createjs.Tween.get(_this).to(tile.gridCord, Agent.MOVESPEED);
		}
		_currentTile = tile;
	}


	_this.MoveToExit = function( newX, newY, callback ) {
		_this.enabled = false;
		_agentAnim.gotoAndPlay("walk_up");
		if (callback != null) {
			createjs.Tween.get(_this).to({x:newX, y:newY, alpha:0}, Agent.EXITSPEED).call(callback);
		} else {
			createjs.Tween.get(_this).to({x:newX, y:newY, alpha:0}, Agent.EXITSPEED);
		}
	}

	_this.Failed = function ( callback ) {

		// play failed animation
		if( Math.random() < 0.5) {
			_agentAnim.gotoAndPlay("dead_frozen");	
		} else {
			_agentAnim.gotoAndPlay("dead_stone");	
		}
		_agentAnim.on("animationend", callback, null, true);
		//createjs.Tween.get(_this).wait(5500).call(callback);
	}


	_this.Spawn = function ( startTile ) {
		_agentAnim.gotoAndPlay("walk_up");
		_currentTile = startTile;
		_this.x = startTile.x;
		_this.y = startTile.y;
		_this.alpha = 1.0;
		_this.enabled = true;
	}


	_this.GetReady= function ( startTile ) {
		_this.Spawn(startTile);
	}

	_this.ExitDoor = function () {
		console.log("TODO: agent moving through the door");
	}


	_this.destroy = function() {
		_this.parent.removeChild(_this);
	}

	return _Construct();
}