
//require.include("controllers/CodeController.js");

//require.include("views/BackdropView.js");
//require.include("views/PuzzleView.js");
//require.include("views/HudView.js");
//require.include("objects/Agent.js");


function GameScene ( parentCanvas ) {

	"use strict";

	var _this = new SceneContainer( parentCanvas );
	var _isReady = false;

	var _hudView;
	var _puzView;
	var _backView;

	var _agent;
	var _sequenceBar;
	var _puzzleGrid;

	var _puzLoader;
	var _puzzleMgr;

	var _controllLock;


	// return a canvas element container
	function _Construct () {
		_this.canvas = parentCanvas;
		return _this;
	}
	
	
	
	_this.Setup = function ( lvlData ) {

		_this.removeAllChildren();
		_controllLock = true;
		
		// start audio clean
	    ss.SoundManager.stopAllSounds();
		
		// setup the data
		_this.StartTile = lvlData.startTile;
		_this.BlankIdx = lvlData.blankIndex;
		_this.GivenIdx = lvlData.givenIndex;
		_this.Diff = lvlData.difference;
		_this.EndIdx = lvlData.endIndex;
		_this.TheSol = lvlData.sol;
		_this.ThePuz = lvlData.puz;
		_this.TheJuice = lvlData.juice;
		_this.Lasers = lvlData.lasers;
		_this.lvlIndex = lvlData.lvlIndex;
		_this.mapInfo = lvlData.mapInfo;
		_this.hint = lvlData.hint;
		_this.audioHintSpecific = lvlData.audioSpecific;
		_this.audioHintGeneral = lvlData.audioGeneral;


		_this.tries		= 0;
		_this.gameover 	= false;

		// setup the looks
		_backView = new BackdropView( _this );
		_puzView = new PuzzleView( _this );
		_agent = new Agent( _this );
		_hudView = new HudView( _this );

		// setup controller linkage
		CodeController.Setup(_this, _puzView, _agent, _backView, _hudView);

		// play initial audio
	    AudioHelper.PlayRandomVO(lvlData.audioStart, ss.SoundPriority.HIGH);
	}




	// Update the views
	_this.Update = function(evt) {

		if (CodeController.isReady) {
			CodeController.Update();
		}

	}


	_this.destroy = function() {
		if (_backView) {
			_backView.destroy();
		}
		if (_puzView) {
			_puzView.destroy();
		}
		if (_agent) {
			_agent.destroy();
		}
		if (_hudView) {
			_hudView.destroy();	
		}
	}


	return _Construct();

}