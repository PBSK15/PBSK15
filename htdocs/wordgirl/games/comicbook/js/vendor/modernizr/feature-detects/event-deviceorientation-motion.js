//By Shi Chuan
//Part of Device Access aspect of HTML5, same category as geolocation
//W3C Editor's Draft at https://dev.w3.org/geo/api/spec-source-orientation.html
//Implementation by iOS Safari at https://goo.gl/fhce3 and https://goo.gl/rLKz8


//test for Device Motion Event support, returns boolean value true/false
Modernizr.addTest('devicemotion', ('DeviceMotionEvent' in window) );

//test for Device Orientation Event support, returns boolean value true/false
Modernizr.addTest('deviceorientation', ('DeviceOrientationEvent' in window) );
