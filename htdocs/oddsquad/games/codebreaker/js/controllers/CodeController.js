

var CodeController = CodeController || new function () {

	"use strict";

	var _this = this;
	_this.isReady = false;

	var _isGridLocked;
	var _startTile;
	var _startTime;

	var _gameScene, _puzzle, _agent, _background, _hud;
	var _solBar;
	var _grid;




	_this.Setup = function(gs, pz, ag, bg, hd) {

		// setup variables
		_gameScene = gs;
		_puzzle = pz;
		_agent = ag;
		_background = bg;
		_hud = hd;

		_grid = _puzzle.getGrid();
		_startTile = _puzzle.getStartTile();
		_solBar = _hud.getSolutionBar();


		// start intro animations
		_hud.GetReady();
		_puzzle.GetReady();

		// spawn agent
		_agent.GetReady(_startTile);

		_this.LockControl(true);
		_this.isReady = true;

		_startTime = new Date().getTime() / 1000;
	}


	_this.Update = function (evt) {
		_solBar.UpdateBar(evt);
	}


	_this.isAgentOnTile = function ( tile ) {
		if ((tile.row == _agent.getCurrentTile().coord.row) || 
			(tile.col == _agent.getCurrentTile().coord.col)) {
			return true;
		}
		return false;
	}


	_this.AgentToTile = function (tile) {

		// lock the grid from additional input
		_this.LockControl(true);

		// check if its the correct number
		var isCorrect = _solBar.CheckSolution( tile.value );
		tile.gridCord = {x: _grid.x + tile.x, y: _grid.y + tile.y};
		
		// check if tiles available
		var hasMoreMoves = _grid.CheckAdjacent( tile );

		// check if laser is blocking the way
		if (tile.lasers instanceof Array) {
			$.each(tile.lasers, function( i, laser ) {
				if (laser.active) {
					isCorrect = false;
				}
			} );
		}

		// response to movement
		if (!isCorrect || !hasMoreMoves) {
			
			// close the door right away
			_background.CloseDoor();
			_background.getEndTile().visible = false;
			
			// move agent
			_agent.MoveTo( tile, _tileWrong);
		} else {

			// spawn particles
			var flashText = FxHelper.FlashNumber( _gameScene, tile, _solBar.GetNextCard(), 500 );

			// spawn sound effect
			AudioHelper.PlaySFX("SFX_Number_Collection");

			// move agent
			_agent.MoveTo( tile, _tileCorrect);
		}
	}


	_this.AgentToExit = function (x, y) {
		_this.LockControl(true);
		_agent.MoveToExit(x, y, _this.LevelEnd);
	}


	_this.KillAgent = function( isReset ) {
		if (_agent.enabled) {
			_agent.enabled = false;
			_this.LockControl(true);
			if (isReset) {
				_ResetBoard(true);
			} else {
				_tileWrong(_agent.getCurrentTile());
			}
		}
	}


	_this.ReplayLevel = function () {
		_ResetBoard(true);
	}


	_this.NextLevel = function() {
		var endTile = _background.getEndTile();
		var finalDest = {x:endTile.x, y:endTile.y};
		var exitDest = {x:_gameScene.width/2, y: 0};
		createjs.Tween.get(_agent).to(finalDest, 600).wait(500).to(exitDest, 1000).call(_levelEnd);
	}


	_this.LevelEnd = function () {
		_this.LockControl(true);
		_grid.RemoveEvents();

		// close the door
		_background.CloseDoor();
		_background.getEndTile().visible = false;

		// data saving, update the best score
		var bestScore = _hud.getBag().GetCollected();
		SaveHelper.SaveLevelData(_gameScene.lvlIndex, bestScore);

		// set max unlocked level
		SaveHelper.UnlockLevel(_gameScene.lvlIndex);

		// display best score, not current score
		_hud.GameWin(bestScore, _gameScene.lvlIndex);
		var gameDuration = (new Date().getTime() / 1000) - _startTime;
		ga ("send", "event", "CodeBreaker_Gameplay", "Juice_Rating", bestScore);
		ga ("send", "event", "CodeBreaker_Gameplay", "Level_Completed", _gameScene.lvlIndex);
		ga ("send", "event", "CodeBreaker_Gameplay", "Level_Complete_Time", _gameScene.lvlIndex, gameDuration);

	}

	_this.NextTileValue = function () {
		return _solBar.GetNextValue();
	}

	_this.IsBestChain = function () {
		return _solBar.IsBestChain();
	}

	_this.LockControl = function( isLocked ) {
		//console.log("Release grid lock: " + !isLocked);
		_grid.LockGrid(isLocked);
	}


	function _tileCorrect( tile ) {

		tile.SetState( TileButton.EnumState.VISITED );

		_solBar.UpdateSolution();
		//_solBar.x = _hud.width / 2 - _solBar.width / 2;

		_grid.UpdateAdjacent( tile.coord );

		// check exit
		if (tile.isExit) {
			_background.OpenDoor();
			_background.getEndTile().Enable(true);
		} else {
			_background.CloseDoor();
			_background.getEndTile().Enable(false);
		}

		// check juice
		if (tile.juice != null) {

			// put it in bag
			var myBag = _hud.getBag();
			myBag.AddItem(tile.juice);
			tile.juice = null;
		}

		// release the grid locking touch input
		_this.LockControl(false);
	}


	function _tileWrong( tile ) {

		tile.SetState( TileButton.EnumState.RED );

		_gameScene.tries++;
		ga ("send", "event", "CodeBreaker_Gameplay", "Level_Failed", _gameScene.lvlIndex);

		_hud.UpdateLives();
		_agent.Failed(_ResetBoard);

		// show specific hint
		if (_gameScene.tries >= 5) {
			_gameScene.tries = 0;
			_solBar.ShowDiff();
			AudioHelper.PlayVO(_gameScene.audioHintSpecific);
		}

		// show general hints
		if (_gameScene.tries >= 3) {
			var playChance = Math.random();
			if (playChance < 0.5) {
				AudioHelper.PlayRandomVO(_gameScene.audioHintGeneral);
			}
		}
	}



	function _ResetBoard( isFullReset ) {

		//createjs.Tween.removeAllTweens();	// this would also stop juicebox bounce


		// clear all solved cards when reset, otherwise just flip back
		if (isFullReset == true) {

			_solBar.InitBar();
			_gameScene.tries = 0;

		} else {

			// reset juice and solution bar
			_solBar.ResetSolution();
		}

		// close the door right away
		_background.CloseDoor();
		_background.getEndTile().visible = false;
		
		// reset juice bag
		_hud.getBag().Reset();

		// reset grid
		_grid.ClearGrid();
		_agent.Spawn(_puzzle.getStartTile());

		// release the grid locking touch input
		_this.LockControl(false);
	}



	return _this;
}