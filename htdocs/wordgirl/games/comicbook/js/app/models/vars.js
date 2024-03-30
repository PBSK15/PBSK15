/*global define*/

/*
 * Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.

 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * https://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

define([], 
	function (require) {
		
	var Backbone = require('backbone'),
		Vars;
		
	Vars = Backbone.Model.extend({
		initialize: function () {
			this.set('x', 0);
			this.set('y', 0);
            this.set('scale', 1);
            this.set('currentFrame', 0);
        }
	});
	
	return new Vars();
});
