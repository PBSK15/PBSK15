
// Generate the lazer element based on given sequense
function SceneContainer( parentCanvas ) {

	var _this = new createjs.Container();

	function _Construct () {
		_this.width = parentCanvas.canvas.width;
		_this.height = parentCanvas.canvas.height;
		return _this;
	}

	_this.Enable = function() {

		// use this at the start
		//parentCanvas.removeAllChildren();
		if (!parentCanvas.contains(_this)) {
			parentCanvas.addChild(_this);
		}
		_this.visible = true;
	}


	_this.Destroy = function() {
		parentCanvas.removeChild(_this);
		_this = null;
	}


	return _Construct();
}