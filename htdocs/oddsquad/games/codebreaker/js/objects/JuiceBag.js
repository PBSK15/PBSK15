JuiceBag.COLLECT_SPEED = 300;
JuiceBag.JUICE_SPACING_X = 20;
JuiceBag.JUICE_SPACING_Y = 7;
JuiceBag.JUICE_ANGLE = 12;

/**
 * The JuiceBag class
 */
function JuiceBag( juiceData, initCollection ) {

	"use strict";

	var _this = new createjs.Container();
	var _bagFrontImg;
	var _bagBackImg;
	var _bagContainSpace;

	var _juiceList = [];
	var _juiceListInit = [];

	// return the newly constructed canvas element container
	function _Construct () {

		_bagContainSpace = new createjs.Container();
		_bagFrontImg = CreateJSAssetManager.getSprite("Backpack_Front");
		_bagBackImg = CreateJSAssetManager.getSprite("Backpack_Back");

		_bagBackImg.regY = _bagBackImg.height;
		_bagFrontImg.regY = _bagFrontImg.height;
		_bagFrontImg.regX = 26;
		_bagContainSpace.x = 34;
		_bagContainSpace.y = -20;
		_bagContainSpace.name = "JuiceBag";

		_this.width = (_bagBackImg.width > _bagFrontImg.width) ? _bagBackImg.width : _bagFrontImg.width;
		_this.height = (_bagBackImg.height > _bagFrontImg.height) ? _bagBackImg.height : _bagFrontImg.height;

		_this.addChild(_bagBackImg);
		_this.addChild(_bagContainSpace);
		_this.addChild(_bagFrontImg);

//		_bagFrontImg.alpha = 0.6;
//		_bagBackImg.alpha = 0.6;

		_LoadJuices( juiceData );

		return _this;
	}


	function _LoadJuices( juiceData ) {

		if (juiceData == null) {
			return;
		}

		var iCollected = 0;
		$.each(juiceData, function( i, iData ) {
			
			if (initCollection.indexOf(iData.id) >= 0) {

				// create a juice box
				var juiceBox = new JuiceBox(iData.id, false);
				juiceBox.x = iCollected * JuiceBag.JUICE_SPACING_X;
				juiceBox.y = iCollected * JuiceBag.JUICE_SPACING_Y;
				juiceBox.rotation = ((iCollected++) - 1) * JuiceBag.JUICE_ANGLE;

				// add to allocated collection location
				_bagContainSpace.addChild(juiceBox);
				_juiceList.push(juiceBox);
				_juiceListInit.push(juiceBox);
			}
		} );

	}

	// Collect juice from grid
	_this.AddItem = function( jBox ) {

		jBox.Hover(false);
		var oldPosGlob = jBox.localToGlobal(0, 0);
		var bagPosGlob = _this.localToGlobal(0, 0);
		
		jBox.origin = jBox.parent;
		_bagContainSpace.addChild(jBox);
		jBox.x = oldPosGlob.x - bagPosGlob.x - _bagContainSpace.x;
		jBox.y = oldPosGlob.y - bagPosGlob.y - _bagContainSpace.y;
		
		var zoomX = 0;//- bagPosGlob.x + 512;
		var zoomY = 0;//- bagPosGlob.y + (768 / 2);

		var xLoc = _juiceList.length * JuiceBag.JUICE_SPACING_X;
		var yLoc = _juiceList.length * JuiceBag.JUICE_SPACING_Y + jBox.regY;
		var rot = (_juiceList.length - 1) * JuiceBag.JUICE_ANGLE;
		
		createjs.Tween.get(jBox)
			.to({scaleX:3, scaleY:3, x:zoomX, y:zoomY}, 1000, createjs.Ease.quadOut)
			.to({scaleX:1, scaleY:1, x:xLoc, y:yLoc, rotation:rot}, JuiceBag.COLLECT_SPEED);
		_juiceList.push(jBox);
	}


	// return a string of collected juiceboxes
	_this.GetCollected = function () {
		var collectionString = "";
		$.each(_juiceList, function( jIdx, jBox ) {
			collectionString += jBox.getID();
		});
		return collectionString;
	}


	// move all juice boxes that was collected during this run back to original parent
	_this.Reset = function () {

		$.each(_juiceList, function( jIdx, jBox ) {
			if (jBox.origin) {
				jBox.origin.addChild(jBox);
				jBox.origin.juice = jBox;
				jBox.rotation = 0;
				jBox.Hover(true);
				jBox.x = 0;
			}
		});

		_juiceList = _juiceListInit.slice(0);
	}


	return _Construct();

}


//.to({y:-JuiceBox.BOUNCE_HEIGHT}, JuiceBox.BOUNCE_TIME, createjs.Ease.quadIn )
//.to({y:0}, JuiceBox.BOUNCE_TIME / 2, createjs.Ease.quadIn);

//.to({y:-JuiceBox.BOUNCE_HEIGHT}, JuiceBox.BOUNCE_TIME, createjs.Ease.circOut )
//.to({y:0}, JuiceBox.BOUNCE_TIME / 2, createjs.Ease.circIn);