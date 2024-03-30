
//require.include("objects/SolutionCard.js");

SolutionBar.CARD_START_POS = 129;

SolutionBar.FLIP_DELAY = 100;
SolutionBar.FLIP_SPEED = 50;
SolutionBar.FLIP_BACK_SPEED = 50;
SolutionBar.GLOW_SHIFT_SPEED = 250;
SolutionBar.CARD_SHIFT_PIXEL_PER_FRAME_SPEED = 36;

SolutionBar.HINT_BASE_COLOR = "#FFFFFF";
SolutionBar.HINT_BORDER_COLOR = "#9029AA";



function SolutionBar( solution, blankIdx, givenIdx, endIdx, solDiff ) {

	"use strict";

	var _this = new createjs.Container();
	var _solution = solution;
	var _solBlk = blankIdx;
	var _solGiv = givenIdx;
	var _solEnd = endIdx;
	var _solDiff = solDiff;
	var _solIdx;
	var _solBest;

	var _cardList = new Array();
	var _diffList = new Array();

	var _initUpdate = false;
	var _initCompleteTimer;

	_this.getSolution = function () {
		return _solution;
	}
	_this.getSolIdx = function () {
		return _solIdx;
	}
	_this.IsBestChain = function () {
		return _solIdx >= _solBest;
	}


	// return the newly constructed canvas element container
	function _Construct () {

		_this.width = 0;
		_this.height = 0;

		_CreateLaserRow();
		_CreateDiffs();

		return _this;
		
	}



	function _CreateLaserRow() {

		_this.width = 0;
		_this.removeAllChildren();

		// generate the solved solutions so far
		for (var i = 0; i < _solution.length; i++) {

			var newCard = SolutionCard(_solution[i], i);
			_cardList.push(newCard);
			_this.addChild(newCard);

			newCard.targetX = SolutionBar.CARD_START_POS + (newCard.width * i);
			newCard.x = 150; //(newCard.width * i) + (newCard.width / 2);
			newCard.y = 46;
			
		}
	}


	function _CreateDiffs() {

		_diffList = [];
		if (_solDiff) {

			// create the list of difference ballons
			for (var i = 0; i < _solDiff.length; i++) {
				var newhint = _makeBalloon(_solDiff[i], (250 * i), 5000);
				newhint.scaleX = newhint.scaleY = 0;
				newhint.x = _cardList[i].targetX + 28;
				newhint.y = 100;
				_diffList.push(newhint);
				_this.addChild(newhint);
			}
		}
	}


	_this.InitBar = function () {
		
		_solIdx = -1;
		_solBest = -1;
		_initUpdate = true;
		_cardList.forEach( function( cardObj ) {

			if ($.inArray( cardObj.idx, _solGiv ) >= 0) {
				cardObj.Hinted();
			} else {
				cardObj.Empty();
			}

			if (_solEnd !== undefined && cardObj.idx > _solEnd) {
				cardObj.visible = false;
				cardObj.x = cardObj.targetX;
			}

		});

	}


	_this.UpdateBar = function (evt) {

		if (_initUpdate) {

			var stillMoving = true;
			// slide out each card from left to right to their target location
			_cardList.forEach( function( cardObj ) {
				if (cardObj.visible) {
					stillMoving = cardObj.MoveRightUpdate( cardObj.targetX, SolutionBar.CARD_SHIFT_PIXEL_PER_FRAME_SPEED );
				}
			});
			
			// stop update bar
			if (!stillMoving) {

				// flip the cards
				var startIndex = 0;
				_cardList.forEach( function( cardObj, aryIdx ) {

					var cardIdxInSolutionAry = $.inArray( cardObj.idx, _solBlk );

					// solved cards, flip them to be visible
					if ( cardIdxInSolutionAry < 0) { //if ( cardIdxInSolutionAry <= _solIdx) {
						cardObj.FlipCard(cardObj.Solved, aryIdx * SolutionBar.FLIP_DELAY, SolutionBar.FLIP_SPEED, SolutionBar.FLIP_SPEED);
					}

					// first card to be solved, flip it to look different
					if ( cardIdxInSolutionAry == 0 ) {

						startIndex = aryIdx + 1;
						cardObj.FlipCard(cardObj.Active, aryIdx * SolutionBar.FLIP_DELAY, SolutionBar.FLIP_SPEED, SolutionBar.FLIP_SPEED);
						
						/*
						window.setTimeout( function () {
							_cardGLOW.visible = true;
							_cardGLOW.regX = _cardGLOW.image.width / 2;
							_cardGLOW.regY = _cardGLOW.image.height / 2;
							_cardGLOW.x = cardObj.x;
							_cardGLOW.y = cardObj.y;
							//FxHelper.Pulse(_cardGLOW);
						}, aryIdx * SolutionBar.FLIP_DELAY );
						*/
					}
				});

				_initUpdate = false;

				// calculate the time flipping completes, and dispatch event to unlock grid touch events.
				var flipCompleteTime = startIndex * SolutionBar.FLIP_DELAY;
				_initCompleteTimer = setTimeout(_UnlockGridEvent, flipCompleteTime);
			}

		}
	}

	function _UnlockGridEvent(evt) {
		clearTimeout(_initCompleteTimer);
		CodeController.LockControl(false);
	}


	_this.GetNextCard = function () {
		return _cardList[_solBlk[_solIdx + 1]];
	}


	_this.GetNextValue = function () {
		return _solution[_solBlk[_solIdx + 1]];
	}


	_this.CheckSolution = function ( val ) {
		return (val == _solution[_solBlk[_solIdx + 1]]);
	}


	_this.ResetSolution = function( keepHints ) {
		//_CreateLaser1Row();

		// flip the current card
		console.log(_solIdx + " < " + _solBlk.length)
		if (_solIdx + 1 < _solBlk.length) {
			var currentIdx = _solIdx + 1;
			var currentCard = _cardList[_solBlk[currentIdx]];
			currentCard.FlipCard(currentCard.Return, 0, SolutionBar.FLIP_BACK_SPEED);
		}

		// unroll previous cards
		for (var i = _solIdx; i > 0; i--) {
			var nextCard = _cardList[_solBlk[i]];
			var flipBackIdx = (_solIdx - i) + 1;
			nextCard.FlipCard(nextCard.Hinted, flipBackIdx * SolutionBar.FLIP_BACK_SPEED, SolutionBar.FLIP_BACK_SPEED);
		}

		// flip the original first blank card
		var cardFirst = _cardList[_solBlk[0]];
		cardFirst.FlipCard(cardFirst.Active, currentIdx * SolutionBar.FLIP_BACK_SPEED, SolutionBar.FLIP_BACK_SPEED);

		// reset solution index
		_solIdx = -1;
	}


	_this.UpdateSolution = function() {

		// unlock the next card in the list
		_solIdx++;
		if (_solBest < _solIdx) {
			_solBest = _solIdx;
		}

		// find the card that is solved
		var cardSolved = _cardList[_solBlk[_solIdx]];
		// find the next puzzle card, null if none.
		var cardNext = _cardList[_solBlk[_solIdx + 1]];

		
		// flip solved card
		cardSolved.alpha = 1.0;
		cardSolved.visible = true;
		cardSolved.FlipCard(cardSolved.Solved, 0, SolutionBar.FLIP_SPEED);
		

		// shift glow
		if (cardNext) {

			// show next card
			if ((cardNext.visible == false)) {
				cardNext.alpha = 0.0;
				cardNext.visible = true;

				var endAlpha = (_solEnd >= cardNext.idx) ? 1.0 : 0.0;
				createjs.Tween.get(cardNext).to({alpha:endAlpha}, SolutionBar.FLIP_SPEED);
			}


			// flip the next card to active state
			cardNext.FlipCard(cardNext.Active, SolutionBar.FLIP_DELAY, SolutionBar.FLIP_SPEED);

		}
	}


	_this.ShowHints = function() {

		_cardList.forEach( function( cardObj ) {

			if ($.inArray( cardObj.idx, _solGiv ) >= 0) {
				cardObj.Hinted();
			} else {
				cardObj.Empty();
			}

			if (_solEnd !== undefined && cardObj.idx > _solEnd) {
				cardObj.visible = false;
				cardObj.x = cardObj.targetX;
			}

		});
		
	}


	_this.ShowDiff = function() {

		for (var i = 0; i < _diffList.length; i++) {

			var ballonItem = _diffList[i];
			var startTimer = (250 * i);
			var waitTimer = 5000;

			ballonItem.scaleX = ballonItem.scaleY = 0;
			createjs.Tween
				.get(ballonItem, {loop:false, override:true}).wait(startTimer)
				.to({scaleX:1, scaleY:1}, 1000, createjs.Ease.quadIn).wait(waitTimer)
				.to({scaleX:0, scaleY:0}, 1000, createjs.Ease.quadIn);
		}
	}

	
	function _makeBalloon( value, startTimer, waitTimer ) {

		var hintContainer = new createjs.Container();

		var hintBackground = new createjs.Shape();
		hintBackground.graphics.beginFill("#FFFFFF").drawCircle(0, 0, 24);
		hintContainer.addChild(hintBackground);
		hintBackground.alpha = 0.8;

		var hintText = FxHelper.CreateFansyText(value, 36, 20, 1.5, SolutionBar.HINT_BASE_COLOR, SolutionBar.HINT_BORDER_COLOR);
		hintContainer.addChild(hintText);
		return hintContainer;
	}

	return _Construct();

}