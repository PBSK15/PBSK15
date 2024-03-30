


/** Tile state **/
TileButton.EnumState = {
	OFF: 0,
	FADED: 1,
	ENABLED: 2,
	HINT: 3,
	VISITED: 4,
	RED: 5, 
	START: 6
}

TileButton.WIDTH = 100;
TileButton.HEIGHT = 91;

TileButton.FONT_HINT_COLOR = "#E8FEDF";
TileButton.FONT_BASE_COLOR = "#E8FEDF"; // 2C3742
TileButton.FONT_BORDER_BASE = "#888888";
TileButton.FONT_BORDER_VISITED = "#9029AA";
TileButton.FONT_BORDER_HIGHLIGHT = "#F6E584";
TileButton.FONT_BORDER_ACTIVE = "#006D42";
TileButton.FONT_BORDER_WRONG = "#FF6D42";

TileButton.BG_HIDE = "Tile_Empty";
TileButton.BG_SHOW = "Tile_Button";
TileButton.BG_SHOW_DOWN = "Tile_Button_Down";
TileButton.BG_GOOD = "Tile_Completed";
TileButton.BG_BAD = "Tile_Wrong";


/**
 * The TileButton class, create a tile object with different tile states
 * @param val:string - the value to display on top of the button
 * @param locIndex:{row:iY, col:iX} - the location of the button on the grid
 * @param startState:TileButton.EnumState - the initial state of the button
 * @param isExit:Boolean - is this button an exit on the grid
 */
function TileButton( val, locIndex, startState, isExit ) {

	"use strict";

	var _this = new createjs.Container();
	var _currentState = TileButton.EnumState.OFF;

	var _tileContent;
	var _tilePing;

	var _tileClickArea;
	var _currentTileBG;
	var _tileHide;
	var _tileShow;
	var _tileDown;
	var _tileGood;
	var _tileBad;

	_this.isOn = false;
	_this.clickable = false;
	_this.isExit = isExit;
	_this.coord = locIndex;
	_this.juice = null;
	_this.lasers = [];


	_this.getState = function () {
		return _currentState;
	}


	// return the newly constructed canvas element container
	function _Construct () {

		// create assets
		//_tileHide = CreateJSAssetManager.getBitmap( "GameTileHide", true );
		//_tileShow = CreateJSAssetManager.getBitmap( "GameTileShow", true );
		//_tileDown = CreateJSAssetManager.getBitmap( "GameTileShowDown", true );
		//_tileGood = CreateJSAssetManager.getBitmap( "GameTileGood", true );
		//_tileBad = CreateJSAssetManager.getBitmap( "GameTileBad", true );

		_tileHide = CreateJSAssetManager.getSprite(TileButton.BG_HIDE, false, false, false, true);
		_tileShow = CreateJSAssetManager.getSprite(TileButton.BG_SHOW, false, false, false, true);
		_tileDown = CreateJSAssetManager.getSprite(TileButton.BG_SHOW_DOWN, false, false, false, true);
		_tileGood = CreateJSAssetManager.getSprite(TileButton.BG_GOOD, false, false, false, true);
		_tileBad = CreateJSAssetManager.getSprite(TileButton.BG_BAD, false, false, false, true);
		
		_currentTileBG = _tileHide;

		_tileClickArea = new createjs.Shape();
		_tileClickArea.graphics.beginFill("#546821", 0.3).drawCircle(0, 0, 42);
		_tileClickArea.alpha = 0.01;
		_this.addChild(_tileClickArea);
		_this.addChild( _tileClickArea );
		_this.addChild( _currentTileBG );

		//var solColor = isSolution ? "#33FF00" : "#332288";
		_tileContent = FxHelper.CreateFansyText( val, 60, 30, 4, TileButton.FONT_BASE_COLOR, TileButton.FONT_BORDER_BASE);
		_this.text = _tileContent;
		_this.addChild( _tileContent );
/*
		// ping for the hint tiles
		var pingObj = new createjs.Text( val,  "900 60px " + GameManager.FONT, TileButton.FONT_HINT_COLOR);
		pingObj.textBaseline = "middle";
		pingObj.textAlign = "center";

		_tilePing = new HintPing( pingObj ); //CreateJSAssetManager.getBitmap("GameArrow", true);
		_tilePing.visible = false;
		_this.addChild( _tilePing );
*/
		// create container params
		_this.name = "GameTile " + _this.coord.row + ":" + _this.coord.col;
		_this.width = TileButton.WIDTH;
		_this.height = TileButton.HEIGHT;
		_this.value = val;


		// attach display objects
		_this.SetState( startState );
		

				
		return _this;
	}


	_this.SetState = function( newState ) {

		_tileClickArea.cursor = "auto";
		_currentState = newState;

		switch (_currentState) {
			
			// show numbers but not clickable
			case TileButton.EnumState.FADED:
				_SwapTileBG(_tileHide, 0.4);
				_this.clickable = false;
				_this.isOn = false;
			break;

			// clickable tile
			case TileButton.EnumState.ENABLED:
				_tileClickArea.cursor = "pointer";
				_SwapTileBG(_tileShow, 1.0, TileButton.FONT_BORDER_ACTIVE);
				_this.clickable = true;
				_this.isOn = true;
			break;

			// hint tile
			case TileButton.EnumState.HINT:
				_tileClickArea.cursor = "pointer";
				_SwapTileBG(_tileShow, 1.0, TileButton.FONT_BORDER_ACTIVE);
				_this.clickable = true;
				_this.isOn = true;
			break;

			// correct tiles visited
			case TileButton.EnumState.VISITED:
				_SwapTileBG(_tileGood, 0.4, TileButton.FONT_BORDER_VISITED);
				_this.clickable = false;
			break;

			// wrong tile visited
			case TileButton.EnumState.RED:
				_SwapTileBG(_tileBad, 1.0, TileButton.FONT_BORDER_WRONG);
			break;


			// hidden tiles
			case TileButton.EnumState.START:
			case TileButton.EnumState.OFF:
			default:
				_SwapTileBG(_tileHide, 0.0);
				_this.clickable = false;
				_this.isOn = false;

				_this.alpha = 0.0;
				createjs.Tween.get(_this).wait(Math.random() * 500).to({alpha: 1.0}, 200);
			break;
		}

	}


	function _SwapTileBG( tileBG, textAlpha, borderColor ) {

		var bgIdx = _this.getChildIndex( _currentTileBG );
		_this.removeChild( _currentTileBG );

		// change border color
		if (borderColor == null) {
			_tileContent.SetOutlineColor(TileButton.FONT_BORDER_BASE);
		} else {
			_tileContent.SetOutlineColor(borderColor);
		}

		// change the tile background
		_currentTileBG = tileBG;
		_this.addChildAt( _currentTileBG, bgIdx );
		_tileContent.alpha = textAlpha;

		// adjust the text verticle position when button is enabled
		if ((tileBG == _tileShow) ||
			(tileBG == _tileDown)) {
			_tileContent.y = -2;
		} else {
			_tileContent.y = 2;
		}
	}

/*
	function _SwapTileBG( tileBG, textAlpha, borderColor ) {

		var bgIdx = _this.getChildIndex( _currentTileBG );
		_this.removeChild( _currentTileBG );

		// change border color
		if (borderColor == null) {
			_tileContent.SetOutlineColor(TileButton.FONT_BORDER_BASE);
		} else {
			_tileContent.SetOutlineColor(borderColor);
		}

		// change the tile background
		_currentTileBG = tileBG;
		_this.addChildAt( _currentTileBG, bgIdx );
		_tileContent.alpha = textAlpha;

		// adjust the text verticle position when button is enabled
		if ((tileBG == _tileShow) ||
			(tileBG == _tileDown)) {
			_tileContent.y = -2;
		} else {
			_tileContent.y = 2;
		}
	}
*/

	// display down state during clickable state
	function _DownState(evt) {
		if (_this.clickable) {
			AudioHelper.PlaySFX("SFX_Tile_Click");
			_SwapTileBG( _tileDown, 1.0, TileButton.FONT_BORDER_HIGHLIGHT);
			FxHelper.PulseBouncy(_this, 1, 100);
		}
	}

	// return to up state during clickable state
	function _UpState(evt) {
		if (_this.clickable) {
			_SwapTileBG( _tileShow, 1.0, TileButton.FONT_BORDER_ACTIVE );
		}
	}


	_this.addClickEvent = function ( callback ) {
		_tileClickArea.on('mousedown', _DownState);
		_tileClickArea.on('pressup', _UpState);
		_tileClickArea.on('click', callback);

		//_tileClickArea.on('mousedown', callback);
		/*
		if (!_tileBackground.hasEventListener("mousedown")) {
		_tileBackground.addEventListener("mousedown", callback);
		}
		*/
	}

	return _Construct();

}