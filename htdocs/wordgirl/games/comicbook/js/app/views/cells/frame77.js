/*global define $ requestAnimationFrame*/
/**
 *
 * Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
define(function (require) {
	
	var Backbone = require('backbone'),
        Vars = require('app/models/vars'),
        UserEvent = require('app/events/user-event'),
        AppEvent = require('app/events/app-event'),
        CellView = require('app/views/cells/cell-view'),
        Frame;

    Frame = CellView.extend({
        initialize: function () {
			this.ios = (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false);
			this.ipad = (navigator.userAgent.match(/iPad/g) ? true : false);
			this.iphone = (navigator.userAgent.match(/(iPhone|iPod)/g) ? true : false);
			
            this.holder = document.getElementById('video-holder');
            this.video = document.getElementById('video');
            this.ui = document.getElementById('video-ui');
            this.playBtn = document.getElementById('video-play-btn');
            this.playBtnSVG = document.getElementById('video-play-btn-svg');
            this.closeBtn = document.getElementById('video-close-btn');

			this.videoVisible = false;
			this.videoLoaded = false;
			this.videoPlaying = false;
			this.firstCall = false;

            this.ui.addEventListener('touchstart', this.handle_ui_TOUCHSTART.bind(this));
            this.playBtn.addEventListener('touchstart', this.handle_play_CLICK.bind(this));
            this.closeBtn.addEventListener('touchstart', this.handle_close_CLICK.bind(this));

            AppEvent.bind('domupdate', this.animationComplete.bind(this));

            if (this.iphone !== false) {
                this.ui.style.display = 'none';
            }

            CellView.prototype.initialize.call(this);
        },
		
		handle_CANPLAYTHROUGH: function (e) {
			console.log('playthrough');
			this.videoLoaded = true;
		},
		
		handle_LOADEDDATA: function (e) {
			console.log('loadeddata');
		},
		
		handle_EXITFULLSCREEN: function () {
			console.log('exitfullscreen');
			this.holder.className = "";
			this.video.pause();
			this.videoPlaying = false;
            this.videoVisible = false;
		},

        handle_ui_TOUCHSTART: function (e) {
            e.preventDefault();
            e.stopPropagation();
        },

        handle_play_CLICK: function (e) {
            if (this.videoPlaying !== true) {
                this.playBtnSVG.className = 'pause';
                this.video.play();
                this.videoPlaying = true;
            } else {
                this.playBtnSVG.className = '';
                this.video.pause();
                this.videoPlaying = false;
                this.video.webkitExitFullscreen();
            }
        },

        handle_close_CLICK: function (e) {
            this.stop();
        },

        handle_ENDED: function (e) {
            this.stop();
            this.video.webkitExitFullscreen();
            $('.navigation-bar').show();
			this.video.currentTime = 0;
        },
		
		load: function (callback) {
			
			this.video.addEventListener('canplaythrough', this.handle_CANPLAYTHROUGH.bind(this));
			this.video.addEventListener('loadeddata', this.handle_LOADEDDATA.bind(this));
			this.video.addEventListener('webkitendfullscreen', this.handle_EXITFULLSCREEN.bind(this));
			this.video.addEventListener('ended', this.handle_ENDED.bind(this));
			
			if (this.ios === true) {
				
				this.video.src = "assets/videos/final.m4v";
				
			} else if (this.video.canPlayType) {
				
				if (this.video.canPlayType('video/mp4; codecs="mp4v.20.8"') || this.video.canPlayType('video/mp4; codecs="avc1.42E01E"')) {
					this.video.src = "assets/videos/final.mp4";
				} else if (this.video.canPlayType('video/ogg; codecs="theora"')) {
					this.video.src = "assets/videos/final.ogg";
				} else {
					this.video.src = "assets/videos/final.mov"; //safari
				}
				
			} else {
				alert('there was a problem detecting the correct video format');
			}
			
			CellView.prototype.load.call(this, callback);
		},

		play: function () {
			this.video.play();
			this.videoPlaying = true;
		},
		
		stop: function () {
			this.holder.className = "";
			this.video.pause();
			this.videoVisible = false;
			this.videoPlaying = false;

			console.log('stop');
			AppEvent.trigger('next');
			$('.navigation-bar').show();
		},

        animationComplete: function () {
            var currentFrame = this.options.num == Vars.get('currentFrame');
            
            if (currentFrame) {

                if (this.ios === true && 
                    this.videoVisible !== true) 
                {
                    this.holder.className = "in";
                    this.videoVisible = true;
                    $('.navigation-bar').hide();
                }

                if (this.iphone === true) {	                    
                    this.video.webkitRequestFullscreen();
                    $('.navigation-bar').hide();
                }

                if (this.ios !== true && 
                    this.videoLoaded !== false && 
                    this.videoPlaying !== true) 
                {
					this.play();
				}

            }
        },

        render: function (ctx) {
            var currentFrame = this.options.num == Vars.get('currentFrame');

            CellView.prototype.render.call(this, ctx);
				
            if (currentFrame) {

				if (this.ios !== true && this.videoLoaded !== false) {
					ctx.drawImage(this.video, this.cell.get('x'), this.cell.get('y'));
				}
				
            } else {
				if (this.videoPlaying !== false) {
					this.stop();
				}
			}
        }
    });

	return Frame;
});

