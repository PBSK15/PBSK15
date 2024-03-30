
//require.include("helpers/FxHelper.js");
//require.include("helpers/SaveHelper.js");

var AudioHelper = AudioHelper || new function () {

	"use strict";

  	var _this = this;
  	var _ccContainer;

	function _Construct() {
		return _this;
	}

	_this.addCCBox = function( parentCanvas ) {

		if (_ccContainer == undefined) {
			_ccContainer = new createjs.Container();
			_ccContainer.width = parentCanvas.canvas.width;
			_ccContainer.height = parentCanvas.canvas.height;
			parentCanvas.addChild(_ccContainer);
		} else {
			parentCanvas.setChildIndex(_ccContainer, parentCanvas.getNumChildren() - 1);
		}
	}
	

	_this.PlayRandomVO = function( voList, priority ) {
		if (voList) {
			var voName = voList.split(",");
			var ranIdx = Math.floor(Math.random() * voName.length);
			var audioID = $.trim(voName[ranIdx]);
			AudioHelper.PlayVO( audioID, priority);
		}
	}


	_this.PlayVO = function (voID, priority) {


		// play the voiceover sound
		var voPriority = (priority) ? priority : ss.SoundPriority.HIGH;
		//ss.SoundManager.stopAllSounds(voPriority);
		ss.SoundManager.playSound(voID, voPriority);

		// clear old cc texts
		_ccContainer.removeAllChildren();

//		var sb = new createjs.Shape();
//		sb.graphics.beginFill("#FF0000").drawRect(0, 0, 200, 200);	
//		_ccContainer.addChild(sb);

		// check if CC is on
		var isCaptionOn = SaveHelper.GetCC();

		if (isCaptionOn) {

			// display the close caption texts
			var audioText = ss.SoundManager.getText(voID);
			var audioLength = ss.SoundManager.getDuration(voID);
			var voText = FxHelper.CreateFansyText(audioText, 32, 20, 1.5, SolutionBar.HINT_BASE_COLOR, SolutionBar.HINT_BORDER_COLOR);
			voText.x = _ccContainer.width / 2;
			voText.y = _ccContainer.height - 46;
			voText.alpha = 0;
			_ccContainer.addChild(voText);

			// fade in then destroy at the end
			createjs.Tween
				.get(voText, {loop:false, override:true})
				.to({alpha:1.0}, 500, createjs.Ease.quadIn)
				.wait(audioLength * 1000)
				.to({alpha:0.0}, 500, createjs.Ease.quadIn);


			console.log(audioText + " | " + voID + " | Priority: " + voPriority);
		}

	}	


	_this.PlaySFX = function (voID, priority) {
		ss.SoundManager.playSound(voID, priority);
	}


	_this.PlayBtnSound = function() {
		AudioHelper.PlaySFX("SFX_Button_Click");
	}
	
}