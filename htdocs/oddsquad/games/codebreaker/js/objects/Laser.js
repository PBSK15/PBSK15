Laser.MARGIN = 76;
Laser.BEAM_ADJ = 23;
Laser.ROW_ADJ = 20;
Laser.MAX_SPARKS = 4;
Laser.MIN_SPARKS = 3;

/**
 * The TileButton class, create a tile object with different tile states
 */
function Laser( laserData, grid ) {

	"use strict";

	var _this = new createjs.Container();
	_this.active = false;

	var _startWaitTimer;

	var laserBaseSpriteSheet;
	var laserBallImg1;
	var laserBallImg2;
	var laserBeamImg;
	var laserBeamSpark;
	var laserBeamShape;

	var laserBeam;
	var laserSparkContainer;
	var laserBaseAnim1;
	var laserBaseAnim2;
	

	//laserData.row;
	//laserData.delay;
	//laserData.pulse;

	// return the newly constructed canvas element container
	function _Construct () {

		// create laser animation
		//laserBaseSpriteSheet = new createjs.SpriteSheet(laserBaseAnimJson);
		laserBaseSpriteSheet = CreateJSAssetManager.getSpriteSheet("LaserAnim");
		laserBaseSpriteSheet.width = laserBaseSpriteSheet.getFrameBounds(0).width;
		laserBaseSpriteSheet.height = laserBaseSpriteSheet.getFrameBounds(0).height;

		laserBaseAnim1 = new createjs.Sprite(laserBaseSpriteSheet, "charge");
		laserBaseAnim2 = new createjs.Sprite(laserBaseSpriteSheet, "charge");
		laserBeamSpark = new createjs.Sprite(laserBaseSpriteSheet, "sparks");
		laserBeamSpark.regY = laserBeamSpark.getBounds().height / 2;
		laserBeamSpark.width = laserBeamSpark.getBounds().width;
		laserBeamSpark.alpha = 0.8;
		

		// calculate the frames per sec for the laser base off animation
		var baseFrameCount = laserBaseSpriteSheet.getNumFrames("charge");
		laserBaseAnim1.framerate = laserBaseAnim2.framerate = baseFrameCount / (laserData.off / 1000);// createjs.Ticker.getFPS() / laserBaseAnimJson.animations.charge.length; //laserData.off / 1000 * laserBaseAnimJson.animations.charge;
		laserBaseAnim1.regX = laserBaseAnim2.regX = laserBaseSpriteSheet.width / 2;
		laserBaseAnim1.regY = laserBaseAnim2.regY = laserBaseSpriteSheet.height / 2;

		// create bean object
		// CreateJSAssetManager.getSprite(gameTilesJson, TileButton.BG_HIDE, true);
		laserBallImg1 = CreateJSAssetManager.getBitmap( "GameLaserBall", false, false, false, true );
		laserBallImg2 = CreateJSAssetManager.getBitmap( "GameLaserBall", false, false, false, true );
		/*
		if (laserData.kill === undefined) {
			laserBeamImg = CreateJSAssetManager.getBitmap( "GameLaserBeamBlue", true );
		} else {
			laserBeamImg = CreateJSAssetManager.getBitmap( "GameLaserBeamRed", true );
		}
		*/
		laserBeamImg = CreateJSAssetManager.getBitmap( "GameLaserBeam", false, false, false, true );

		laserSparkContainer = new createjs.Container();
		laserBeamShape = new createjs.Shape();
		laserBeam = new createjs.Container();

		// position the laser based on horizontal or vertical
		if (laserData.row !== undefined) {

			var tilesInRow = grid[laserData.row];
			var startTile = tilesInRow[0];
			var endTile = tilesInRow[tilesInRow.length - 1];

			laserBaseAnim1.x = startTile.x - Laser.MARGIN;
			laserBaseAnim1.y = startTile.y;
			laserBaseAnim2.x = endTile.x + Laser.MARGIN;
			laserBaseAnim2.y = endTile.y;

			// calculate the length of the beam
			laserBeam.width = laserBaseAnim2.x - laserBaseAnim1.x;

			// minor adjustment for rows to match the tile center
			_this.y = Laser.ROW_ADJ;

		} else if (laserData.col !== undefined) {

			var startTile = grid[0][laserData.col];
			var endTile = grid[grid.length - 1][laserData.col];

			laserBaseAnim1.x = startTile.x;
			laserBaseAnim1.y = startTile.y - Laser.MARGIN;
			laserBaseAnim2.x = endTile.x;
			laserBaseAnim2.y = endTile.y + Laser.MARGIN;

			// calculate the length of the beam
			laserBeam.width = laserBaseAnim2.y - laserBaseAnim1.y;

			// rotate to vertical
			laserBeam.rotation = 90;


		} else {

			// invalid data from json file
			return;
		}

		// create the laser beam image
		laserBeamShape.graphics.beginBitmapFill(laserBeamImg.image);
		laserBeamShape.graphics.drawRect(0, 0, laserBeam.width, laserBeamImg.height);
		laserBeamShape.regY = laserBeamImg.height / 2;

		// put together the beam container
		laserBeam.addChild(laserBeamShape);
		laserBeam.addChild(laserBallImg1);
		laserBeam.addChild(laserBallImg2);
		laserBeam.addChild(laserSparkContainer);
		laserBallImg2.x = laserBeam.width;
		laserBeam.y = laserBaseAnim1.y - Laser.BEAM_ADJ;
		laserBeam.x = laserBaseAnim1.x;

		// link laser to tiles
		_LinkLaserTile();

		// create the emitters
		_this.addChild(laserBaseAnim1);
		_this.addChild(laserBaseAnim2);

		// create the beam
		_this.addChild(laserBeam);


		// start disabled
		_this.active = false;
		laserBeam.visible = false;
		laserBaseAnim1.stop();
		laserBaseAnim2.stop();

		// wait to start the laser
		var startDelay = (laserData.delay) ? laserData.delay : 0;
		_startWaitTimer = setTimeout(_StartLaser, startDelay);
		

		return _this;
	}


	function _StartLaser() {
		clearTimeout(_startWaitTimer);
		_DisableLaserBeam();
	}


	// add a few random sparks to the beam
	function _AddSparks() {

		createjs.Tween.removeTweens(laserSparkContainer);
		laserSparkContainer.removeAllChildren();

		//var numbSparks = Math.ceil(Math.random() * Laser.MAX_SPARKS);
		var numbSparks = Laser.MIN_SPARKS + Math.round(Math.random());
		for (var i = 0; i < numbSparks; i++) {
			var segmentWidth = laserBeam.width / numbSparks;
			var beamPosX = i * segmentWidth;
			var posVaryX = Math.random() * (segmentWidth - laserBeamSpark.width);
			laserBeamSpark.x = beamPosX + posVaryX;
			laserSparkContainer.addChild(laserBeamSpark.clone());	
		}

		createjs.Tween.get(laserSparkContainer, {loop:true, override:true}).wait(50).call(_RotateLaserBalls);
	}


	// increment the laser balls
	function _RotateLaserBalls() {
		laserBallImg1.rotation = Math.random() * 360;
		laserBallImg2.rotation = Math.random() * 360;
	}


	// Disable the laser, then fire event to enable it at the end of base animation.
	function _DisableLaserBeam() {
		_this.active = false;
		laserBeam.visible = false;
		laserBaseAnim1.gotoAndPlay("charge");
		laserBaseAnim2.gotoAndPlay("charge");
		laserBaseAnim1.addEventListener("animationend", _EnableLaserBeam);
	}


	// Enable the laser then start timer to disable laser
	function _EnableLaserBeam(evt) {
		evt.remove();

		if (!_CheckAgentOnTile()) {

			_AddSparks();
			_this.active = true;
			laserBeam.visible = true;

		} else {

			// laser will swtich on to kill agent
			if (laserData.kill !== undefined) {
				_KillAgentOnTile();
				_AddSparks();
				_this.active = true;
				laserBeam.visible = true;
			}
		}
		window.setTimeout(_DisableLaserBeam, laserData.on);
	}


	// disable laser if tiles has agent
	function _CheckAgentOnTile() {
		return CodeController.isAgentOnTile( laserData );
	}


	// kill agent if laser comes on the occupide tile
	function _KillAgentOnTile() {
		if (CodeController.isAgentOnTile( laserData )) {
			CodeController.KillAgent();
		}
	}


	// Mark all tiles along the laser line as traps
	function _LinkLaserTile() {

		if (laserData.row !== undefined) {

			for (var j = 0; j < grid[laserData.row].length; j++) {
				grid[laserData.row][j].lasers.push(_this);
			}

		} else if (laserData.col !== undefined) {

			for (var i = 0; i < grid.length; i++) {
				grid[i][laserData.col].lasers.push(_this);
			}

		}
	}


	return _Construct();

}