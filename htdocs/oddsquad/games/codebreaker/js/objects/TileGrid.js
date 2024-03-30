
//require.include("objects/TileButton.js");
//require.include("objects/JuiceBox.js");
//require.include("objects/HintPing.js");


function TileGrid( gameScene ) {

	"use strict";

	var _this = new createjs.Container();
	
	var _puzzle = gameScene.ThePuz;
	var _solution = gameScene.TheSol;
	var _hints = gameScene.GivenIdx;

	var _startTile = gameScene.StartTile;

	var _grid = new Array();
	var _locked = true;


	// return the newly constructed canvas element container
	function _Construct () {

		_this.width = 0;
		_this.height = 0;
		_AddCarpet();

		for (var iY = 0; iY < _puzzle.length; iY++) {

			_grid[iY] = new Array();

			for (var iX = 0; iX < _puzzle[iY].length; iX++) {

				var startTileType = TileButton.EnumState.OFF; //(iY == (_puzzle[iY].length - 1) && iX < 3) ? true : false;
				var isExitTile = (iY == 0) ? true : false;
				var tileCord = {row:iY, col:iX};

				var sqrBlock = new TileButton(_puzzle[iY][iX], tileCord, startTileType, isExitTile);
				sqrBlock.addClickEvent(_TouchEvent);
				sqrBlock.x = (iX * sqrBlock.width) + (sqrBlock.width / 2);
				sqrBlock.y = iY * sqrBlock.height;
				_grid[iY][iX] = sqrBlock;
				_this.addChild(sqrBlock);

				// add a juice box if exist
				//_AddJuice(sqrBlock);
					
				// increment the grid width
				if ((sqrBlock.x + sqrBlock.width / 2) > _this.width) {
					_this.width = sqrBlock.x + sqrBlock.width / 2;
				}
			}

			// increment the grid height
			_this.height += sqrBlock.height;
		}


		_AddLasers(gameScene.Lasers);
		_AddJuices(gameScene.TheJuice);

		_this.LockGrid(false);
		return _this;
	}


	function _AddCarpet() {

		var carpetSize = {
			w: (_puzzle[0].length + 1) * TileButton.WIDTH,
			h: (_puzzle.length + 1) * TileButton.HEIGHT,
		};
		var halfCarpetWidth = Math.floor(carpetSize.w / 2);
		var halfCarpetHeight = Math.floor(carpetSize.h/ 2);

		var carpetImgTL = CreateJSAssetManager.getBitmap( "GameGroundCarpet");
		var carpetImgTR = CreateJSAssetManager.getBitmap( "GameGroundCarpet");
		var carpetImgBL = CreateJSAssetManager.getBitmap( "GameGroundCarpet");
		var carpetImgBR = CreateJSAssetManager.getBitmap( "GameGroundCarpet");

		carpetImgTL.x = carpetImgBL.x = -TileButton.WIDTH / 2;
		carpetImgTL.y = carpetImgTR.y = -80;
		carpetImgTR.x = carpetImgBR.x = carpetImgTL.x - carpetImgTL.width + carpetSize.w;
		carpetImgBL.y = carpetImgBR.y = -80 - carpetImgTL.height + (halfCarpetHeight * 2);
		//console.log(carpetImgBL.y + " || " + carpetSize.h);

		carpetImgTL.cache(0, 0, halfCarpetWidth, halfCarpetHeight);
		carpetImgTR.cache(carpetImgTL.width - halfCarpetWidth, 0, halfCarpetWidth, halfCarpetHeight);
		carpetImgBL.cache(0, carpetImgTL.height - halfCarpetHeight, halfCarpetWidth, halfCarpetHeight);
		carpetImgBR.cache(carpetImgTL.width - halfCarpetWidth, carpetImgTL.height - halfCarpetHeight, halfCarpetWidth, halfCarpetHeight);
		
		_this.addChild(carpetImgTL);
		_this.addChild(carpetImgTR);
		_this.addChild(carpetImgBL);
		_this.addChild(carpetImgBR);
		
		/* another method by tiling, not finished though
		var carpetImg = CreateJSAssetManager.getBitmap( "GameGroundCarpet");

		var carpetTopLeft = new createjs.Shape();
		var carpetTopRight = new createjs.Shape();
		carpetTopLeft.graphics.beginBitmapFill(carpetImg.image);
		carpetTopLeft.graphics.drawRect( 0, 0, carpetSize.w / 2, carpetSize.h);
		carpetTopRight.graphics.beginBitmapFill(carpetImg.image);
		carpetTopRight.graphics.drawRect(carpetImg.width - carpetSize.w / 2, 0, carpetSize.w / 2, carpetSize.h);
		
		carpetTopLeft.x = -50;
		carpetTopLeft.y = -60;
		carpetTopRight.x = 0; //carpetTopLeft.x + carpetSize.w / 2;
		carpetTopRight.y = -60;

		_this.addChild(carpetTopLeft);
		_this.addChild(carpetTopRight);
		*/
	}


	function _TouchEvent( evt ) {
		
		var touchTile = evt.currentTarget.parent;
		
		// check if section is locked or button disabled
		if (!_locked && touchTile.clickable && touchTile.isOn) {
			CodeController.AgentToTile(touchTile);
		}
	}


	function _TurnTileOn( row, col ) {
		if (row >= 0 && row < _grid.length) {
			if (col >= 0 && col < _grid[0].length) {

				// if the tile is green don't make it clickable
				if (_grid[row][col].getState() != TileButton.EnumState.VISITED) {
					
					// check if is hint or normal make it clickable
					if (_this.IsHintTile(_grid[row][col])) {
						_grid[row][col].SetState( TileButton.EnumState.HINT );
					} else {
						_grid[row][col].SetState( TileButton.EnumState.ENABLED );
					}
					return true;
				}

			}
		}
		return false;
	}


	function _IsAvailableTile( row, col ) {
		if (row >= 0 && row < _grid.length) {
			if (col >= 0 && col < _grid[0].length) {
				if (_grid[row][col].getState() != TileButton.EnumState.VISITED) {
					return true;
				}
			}
		}
		return false;
	}


	function _AddJuices( juiceData ) {

		if (juiceData == null) {
			return;
		}
		
		// get the current saved juice boxes
		var currentJuices = SaveHelper.GetLevelData(gameScene.lvlIndex);

		// use the juice data from level data
		$.each(juiceData, function( idx, iData ) {
			
			// make sure only spawn into grid the not collected juice boxes
			if (currentJuices.indexOf(iData.id) < 0) {

				// create a juice box
				var juiceBox = new JuiceBox(iData.id, true);
				juiceBox.regY = 16;

				// add to tile if not collected
				_grid[iData.row][iData.col].juice = juiceBox;
				_grid[iData.row][iData.col].addChild(juiceBox);
			}
		} );

	}


	function _AddLasers( laserData ) {

		// check for laser data
		if (laserData == null) {
			return;
		}

		// create the lasers
		$.each(laserData, function( i, iData ) {
			var newLaser = new Laser(iData, _grid);
			_this.addChild(newLaser);
		} );
	}



	_this.StartGrid = function () {
		_this.UpdateAdjacent( _startTile );
	}


	// highlight the adjacent tile for touchable
	_this.UpdateAdjacent = function ( cord ) {
		
		// turn on tiles dim
		for (var i = 0; i < _grid.length; i++) {
			for (var j = 0; j < _grid[i].length; j++) {

				// make old clickable tiles just visible
				if ((_grid[i][j].getState() == TileButton.EnumState.ENABLED) || 
					(_grid[i][j].getState() == TileButton.EnumState.HINT)) {
					//console.log(i + " - " + j + " || " + _grid[i][j].value);
					_grid[i][j].SetState( TileButton.EnumState.FADED );
				}
			}
		}

		// turn adjacent tile on
		var hasEnabledTiles = false; // var at_least_one_enabled_tile
		_TurnTileOn(cord.row - 1, cord.col - 1);
		_TurnTileOn(cord.row - 1, cord.col + 1);
		_TurnTileOn(cord.row - 1, cord.col);
		_TurnTileOn(cord.row, cord.col - 1);
		_TurnTileOn(cord.row, cord.col + 1);
		_TurnTileOn(cord.row + 1, cord.col - 1);
		_TurnTileOn(cord.row + 1, cord.col + 1);
		_TurnTileOn(cord.row + 1, cord.col);
	}


	// return true if there are no more enabled adjacent tiles
	_this.CheckAdjacent = function ( tile ) {

		var cord = tile.coord;

		if (tile.isExit) {
			return true;
		}
		
		// turn adjacent tiles
		if (tile.coord !== undefined) {
			if (_IsAvailableTile(cord.row - 1, cord.col - 1) ||
				_IsAvailableTile(cord.row - 1, cord.col + 1) ||
				_IsAvailableTile(cord.row - 1, cord.col) ||
				_IsAvailableTile(cord.row, cord.col - 1) ||
				_IsAvailableTile(cord.row, cord.col + 1) ||
				_IsAvailableTile(cord.row + 1, cord.col - 1) ||
				_IsAvailableTile(cord.row + 1, cord.col + 1) ||
				_IsAvailableTile(cord.row + 1, cord.col)) {
				return true;
			}
		}
		return false;
	}


	_this.IsHintTile = function( tile ) {
		if (_hints != null) {

			for (var i = 0; i < _hints.length; i++) {

				// if its in the hint list, and also is the next tile, then it is hint tile
				if ((CodeController.NextTileValue() == tile.value) && ((_solution[_hints[i]] == tile.value) || !CodeController.IsBestChain())) {
					return true;
				}
			}
		}
		return false;
	}


	_this.ClearGrid = function( resetJuiceBox ) {

		// make all explored tiles FADED
		for (var i = 0; i < _grid.length; i++) {
			for (var j = 0; j < _grid[i].length; j++) {

				var tileToClear = _grid[i][j];

				if (tileToClear.getState() != TileButton.EnumState.OFF) {
					tileToClear.SetState( TileButton.EnumState.FADED );
				}

				// reset juiceboxes (deprecated)
				if (false && resetJuiceBox && tileToClear.juice != null) {
					tileToClear.juice.x = 0;
					tileToClear.juice.y = 0;
				}
				
			}
		}

		// make initial starting tiles clickable
		_this.UpdateAdjacent(_startTile);
	}



	// lock the grid so no tile can be clicked on
	_this.LockGrid = function ( lock ) {
		_locked = lock;
		return _locked;
	}


	_this.RemoveEvents = function () {
		//RemoveEvents
	}

	return _Construct();
}