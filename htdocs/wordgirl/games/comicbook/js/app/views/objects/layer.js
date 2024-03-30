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
	
	var Vars = require('app/models/vars'),
        UserEvent = require('app/events/user-event'),
        AppEvent = require('app/events/app-event'),
        Layer,
        ASSET_URL = "assets/images/comp-assets/";

    Layer = function () {};

    Layer.prototype = {
        init: function (data) {

            this.loaded = false;
            this.src = ASSET_URL + data.name;
            this.origin = {x: data.bounds.left, y: data.bounds.top};
            this.rotation = 0;
            this.scale = 1;
            this.x = data.bounds.left;
            this.y = data.bounds.top;

            if (data.vectorMask) {
                this.vectorMask = data.vectorMask;
            }
        },

        load: function (callback) {
            this.callback = callback;
            this.img = new Image();
            this.img.src = this.src;
            this.img.addEventListener('load', this.loadComplete.bind(this));
        },

        loadComplete: function () {
            this.loaded = true;
            this.callback();
        },

        render: function (ctx) {
            var i,
                zoom = window.devicePixelRatio,
                globalX,
                globalY,
                globalScale;

            globalX = Vars.get('x') * zoom;
            globalY = Vars.get('y') * zoom;
            globalScale = Vars.get('scale') * zoom;

            if (this.loaded === true) {
	
                if (this.vectorMask) {
                    ctx.save();
                    ctx.beginPath();
                    
                    for (i = 0; i < this.vectorMask.length; i += 1) {
                        if (i === 0) {
                            ctx.moveTo(this.vectorMask[0].anchor.x, this.vectorMask[0].anchor.y);
                        } else {
                            ctx.lineTo(this.vectorMask[i].anchor.x, this.vectorMask[i].anchor.y);
                        }
                    }

                    ctx.closePath();
                    ctx.clip();
                }

                if (this.scale !== 1) {
                    ctx.save();
                    ctx.translate(this.x + (this.img.width / 2), this.y + (this.img.height / 2));
                    ctx.scale(this.scale, this.scale);
		            ctx.translate(-this.x - (this.img.width / 2), -this.y - (this.img.height / 2));
                }

                if (this.rotation !== 0) {
                    ctx.save();
                    ctx.translate(this.x + (this.img.width / 2), this.y + (this.img.height / 2));
                    ctx.rotate(this.rotation);
		            ctx.translate(-this.x - (this.img.width / 2), -this.y - (this.img.height / 2));
                }

		        ctx.drawImage(this.img, this.x, this.y);
                
                if (this.rotation !== 0) {
                    ctx.restore();
                }

                if (this.scale !== 1) {
                    ctx.restore();
                }

                if (this.vectorMask) {
                    ctx.restore();
                }
            }
        }
    };

	return Layer;
});
