SolutionCard.USED_BASE_COLOR = "#FFFFFF";
SolutionCard.USED_BORDER_COLOR = "#9029AA";
SolutionCard.HINT_BORDER_COLOR = "#888888";
SolutionCard.ACTIVE_BORDER_COLOR = "#006D42";


/**
 * The SolutionCard class, create a card object
 */
function SolutionCard( cardValue, cardIndex ) {

	"use strict";

	var _this = new createjs.Container();
	var cardFilled;
	var cardActive;
	var cardEmpty;
	var cardText;
	var cardPing;

	// return the newly constructed canvas element container
	function _Construct () {

		cardEmpty = CreateJSAssetManager.getSprite("Panel_Empty", false, false, false, true);
		cardActive = CreateJSAssetManager.getSprite("Panel_Active", false, false, false, true);
		cardFilled = CreateJSAssetManager.getSprite("Panel_Completed", false, false, false, true);

		// create value container
		_this.width = cardEmpty.width;
		_this.height = cardEmpty.height;
		_this.halfW = _this.width / 2;
		_this.halfH = _this.height / 2;
		_this.value = cardValue;


		// create the card background
		_this.addChild(cardEmpty);
		_this.addChild(cardFilled);
		_this.addChild(cardActive);

		// ping add behind text
		var pingImg = CreateJSAssetManager.getSprite("CardEfx", false, false, false, true);
		cardPing = new HintPing(pingImg);
		cardPing.Enable(false);
		_this.addChild(cardPing);


		// create the value
		cardText = FxHelper.CreateFansyText(cardValue, 36, 20, 4, SolutionCard.USED_BASE_COLOR, SolutionCard.USED_BORDER_COLOR);
		//cardText = new createjs.Text( cardValue, "bold 28px " + GameManager.FONT, "#FFFFFF");
		_this.addChild(cardText);

		// setup and return the value object
		cardEmpty.visible = cardFilled.visible = cardText.visible = false;
		_this.idx = cardIndex;


		// start none visible
		return _this;
	}


	_this.Solved = function () {
		cardActive.visible = false;
		cardEmpty.visible = false;
		cardFilled.visible = true;
		cardText.visible = true;
		cardText.SetOutlineColor(SolutionCard.USED_BORDER_COLOR);
		cardPing.Enable(false);
	}

	_this.Hinted = function () {
		cardActive.visible = false;
		cardFilled.visible = false;
		cardEmpty.visible = true;
		cardText.visible = true;
		cardText.SetOutlineColor(SolutionCard.HINT_BORDER_COLOR);
		cardPing.Enable(false);
	}

	_this.Empty = function () {
		cardActive.visible = false;
		cardEmpty.visible = true;
		cardFilled.visible = false;
		cardText.visible = false;
		cardPing.Enable(false);
	}

	_this.Active = function () {
		cardActive.visible = true;
		cardEmpty.visible = false;
		cardFilled.visible = false;
		cardText.SetOutlineColor(SolutionCard.ACTIVE_BORDER_COLOR);
		cardPing.Enable(true);
	}

	_this.Return = function () {
		cardActive.visible = false;
		cardEmpty.visible = true;
		cardFilled.visible = false;
		cardText.SetOutlineColor(SolutionCard.HINT_BORDER_COLOR);
		cardPing.Enable(false);
	}


	// only moving from left to right
	_this.MoveRightUpdate = function ( xVal, slidePixelPerFrame ) {

		if (_this.x + slidePixelPerFrame < xVal) {
			_this.x += slidePixelPerFrame;
			return true;
		}

		_this.x = xVal;
		return false;
	}



	_this.FlipCard = function ( callback, delay, flipSpeed ) {

		var fSpd = (flipSpeed) ? flipSpeed : SolutionBar.FLIP_SPEED;

		createjs.Tween.get(_this, {override:true})
			.wait(delay)
			.to({scaleX:0}, fSpd).call(callback)
			.to({scaleX:1}, fSpd);
	}



	return _Construct();
}