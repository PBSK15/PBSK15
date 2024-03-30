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
            CellView.prototype.initialize.call(this);
        },

		animate: function () {
            this.layers[0].x = this.layers[0].x < this.layers[0].origin.x + 10 ? this.layers[0].x + 0.1 : this.layers[0].origin.x + 10;
            this.layers[1].x = this.layers[1].x < this.layers[1].origin.x + 20 ? this.layers[1].x + 0.3 : this.layers[1].origin.x + 20;
            this.layers[2].x = this.layers[2].x < this.layers[2].origin.x + 20 ? this.layers[2].x + 0.3 : this.layers[2].origin.x + 20;
            this.layers[3].x = this.layers[3].x > this.layers[3].origin.x - 50 ? this.layers[3].x - 0.5 : this.layers[3].origin.x - 50;
            this.layers[4].x = this.layers[4].x > this.layers[4].origin.x - 50 ? this.layers[4].x - 0.5 : this.layers[4].origin.x - 50;
		},
		
		freeze: function () {
            this.layers[0].x = this.layers[0].origin.x;
            this.layers[1].x = this.layers[1].origin.x;
            this.layers[2].x = this.layers[2].origin.x;
            this.layers[3].x = this.layers[3].origin.x;
            this.layers[4].x = this.layers[4].origin.x;
		}
    });

	return Frame;
});

