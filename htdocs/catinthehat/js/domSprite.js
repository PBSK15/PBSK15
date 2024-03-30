define(['jquery', 'utils/divy'], function($, Divy) {
	return function(config) {
		
		var _name = config.name;
		var _atlas = config.atlas;
		var _layers = [];
		
		var _sprite = this;
		var _div;
		
		this.make = function() {
			_div = Divy.one('spriteAnimation');
			for(var i = 0; i < _atlas.images.length; i++){
				_layers.push(Divy.one('spriteImage'));
				_div.append(_layers[i]);
			}
			_div.click(function() {
				if(_onClick) _onClick();
			});
		}
		
		this.div = function() { return _div }
		
		this.layout = function() {
			var shared = {
				width: _atlas.frames[0][2],
				height: _atlas.frames[0][3],
				position: 'relative',
				'-webkit-transform': 'translateZ(0px)',
			};
			_div.css(shared);
			for(var i = 0; i < _layers.length; i++){
				_layers[i].css(shared);
				_layers[i].css({
					'background-image': 'url('+ _atlas.images[i]+')',
					'position': 'absolute',
					'top': 0,
					'left': 0,
					
					'display': (i == 0 ? 'block':'none'),
				});
			}
			
		}
		
		var _interval;
		var _timeout;
		var _stopped = true;
		
		this.loop = function(times) {
			currentFrame = 0;
			if (_interval)
				window.clearInterval(_interval);
			if(_timeout)
				window.clearTimeout(_timeout);
			_stopped = false;
			_interval = window.setInterval(this.tick, 50);
			if(times != 0){
				_timeout = setTimeout(_sprite.stop, (times * _atlas.animations.all.frames.length +.5) * 50);
			}
		}
		
		var currentFrame = 0;
		this.tick = function() {
			if(!_stopped){
				if(currentFrame >= _atlas.animations.all.frames.length) currentFrame = 0;
				_sprite.setFrame(_atlas.animations.all.frames[currentFrame]);
				currentFrame++;
			}
		}
		
		this.stop = function() {
			_stopped = true;
			window.clearInterval(_interval);
			if(_onEnd) _onEnd();
			setTimeout(function() { _sprite.setFrame(0) }, 50);
		}
		
		var _onEnd;
		var _onClick
		
		this.gotoAndPlay = function() {
			this.loop(1);
		}
		
		this.gotoAndStop = function() {
			this.stop();
		}
		
		this.addEventListener = function(type, func){
			if(type == 'animationend') _onEnd = func;
			else if(type == 'click') _onClick = func;
		}
		
		this.setFrame = function(frameIndex) {
			var frame = _atlas.frames[frameIndex];
			for(var i = 0; i < _layers.length; i++){
				_layers[i].css({
					'display': (i == frame[4] ? 'block':'none'),
					'background-position': (-1 * frame[0]) + 'px '+ (-1 * frame[1]) + 'px'
				});
			}
		}
		
		this.make();
		this.layout();
		
		console.log("build domSprite")
		
	}
});