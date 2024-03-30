/*global require*/
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
require.config({
    shim: {
    },

    paths: {
        jquery: 'vendor/jquery/jquery',
        underscore: 'vendor/underscore-amd/underscore',
	    backbone: 'vendor/backbone-amd/backbone',
        raf: 'vendor/RequestAnimationFrame',
        snap: 'vendor/Snap.svg/dist/snap.svg',
        sound: 'vendor/createjs/soundjs-0.5.2.min'
    }
});

require(['jquery', 'underscore', 'app']);
