
//require.include("objects/TileGrid.js");
//require.include("objects/Laser.js");


var TOP_DOOR_PADDING = 320;
var SECTION_PADDING = {top: 100, side: 200};


var TILE_WRAPPER_CLASS = "tileWrapper";
var TILE_CLASS = "tileItem";


// Generate the lazer element based on given sequense
function PuzzleView( gameScene ) {

	var _this = new createjs.Container();


	var _startTile;
	
	var _tileList = new Array([]);
	var _sections = [];
	
	var _myGrid;
	

	_this.getGrid = function() {
		return _myGrid;
	}
	_this.getStartTile = function () {
		return _startTile;
	}

	_this.getSectionCount = function() {
		return _sections.length;
	}
	
	_this.getSectionAt = function ( secID ) {
		return _sections[ secID ];
	}
	
	
	// return a canvas element container
	function _Construct () {
		
		// construct the container
		gameScene.addChild(_this);
		_this.width = gameScene.width;
		_this.height = gameScene.height;
		_this.boundArea = {
			x: SECTION_PADDING.side,
			y: SECTION_PADDING.top,
			width: _this.width - SECTION_PADDING.side * 2,
			height: _this.height - SECTION_PADDING.top
		};


		// request the puzzle
		_myGrid = new TileGrid( gameScene );
		_myGrid.x = _this.width / 2 - _myGrid.width / 2;
		_myGrid.y = ((_this.height - TOP_DOOR_PADDING) / 2 + TOP_DOOR_PADDING) - (_myGrid.height / 2);
		_this.addChild(_myGrid);
		

		// create the start tile
		_startTile = new TileButton("", gameScene.StartTile, TileButton.EnumState.START, false);
		_startTile.x = _myGrid.x + (gameScene.StartTile.col * _startTile.width) + (_startTile.width / 2);
		_startTile.y = _myGrid.y + _myGrid.height;
		//_this.addChild(_startTile);
		//_startTile.alpha = 0.01;



		// TEST
		//_this.addChild(_ShowBox(_myGrid));

		
		return _this;
	}


	function _ShowBox ( bndArea ) {
		var shape = new createjs.Shape();
		shape.graphics.beginFill("#FF0000").drawRect(bndArea.x, bndArea.y, bndArea.width, bndArea.height);
		shape.alpha = 0.4;
		return shape;
	}

	_this.GetReady = function() {
		_myGrid.StartGrid();
	}


	_this.destroy = function() {
		_this.parent.removeChild(_this);
	}

	
	return _Construct();
};

