 /*!
  * jBlitter: Rich animated HTML5 canvas buttons, now with more jQuery
  *   http://glowfilter.com/blog/jblitter-animated-html5-canvas-buttons/
  *
  * Copyright (c) 2010 John Kakoulides (http://glowfilter.com)
  * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
  * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
  * 
  *
  * Built on top of the jQuery library
  *   http://jquery.com
  *
  */


(function($){
  
  /**
   * The jBlitter object.
   *
   * @constructor
   * @class jBlitter
   * @param options {Object} A set of key/value pairs to set as configuration properties.
   */
   
  $.fn.jBlitter = function(options){
    var settings = {
      'resource':'test.png',
      'speed':33,
      'frameWidth':100,
      'frameHeight':100,
      'reverse':true,
      'loop':false,
      'callback':null
    };
    
    return this.each(function(){
      var opts = $.extend(settings,options);
      var canvas = this;
      var $canvas = $(this);
      var link = $canvas.find("a").first().attr("href");
      var context = canvas.getContext('2d');
      var curCol = 1;
      var curRow = 1;
      var curFrame = 1;	
      var numCols = 0;
      var numRows = 0;
      var totalFrames = 0;
      var interval = 0;
      
      var resource = new Image();
      
      resource.onload = function(){
          numRows =   Math.ceil(resource.height/opts.frameHeight);
          numCols = Math.ceil(resource.width/opts.frameWidth);
          totalFrames = numRows * numCols;
          
          var updateCanvas = function(){
            curRow = Math.ceil(curFrame/numCols);

            var xGrid = (curCol-1)*opts.frameWidth;
            var yGrid = (curRow-1)*opts.frameHeight;
            context.clearRect(0,0,opts.frameWidth,opts.frameHeight);
            context.drawImage(resource,xGrid,yGrid,opts.frameWidth,opts.frameHeight,0,0,opts.frameWidth,opts.frameHeight);            
          };
          
          var drawNextFrame = function(){
            curFrame += 1;
            curCol += 1;
            if(curFrame >= totalFrames){
              if(opts.loop){
                curFrame = 1;
                curCol = 1;
              }else{
                clearInterval(interval);
              }
            }

            if (curCol > numCols){
              curCol = 1;
            }
            updateCanvas();
          };
          
          var drawPrevFrame = function(){
            curFrame -= 1;
            curCol -= 1;

            if (curCol <= 0){
              curCol = numCols;
            }
            
            if(curFrame <= 1){
              curFrame = 1;
              curCol = 1;
              clearInterval(interval);
            }
            updateCanvas();           
          };

          $(canvas).bind("mouseover",function(){
            curFrame = 0;
            curCol = 0;
            clearInterval(interval);
            interval = setInterval(drawNextFrame,opts.speed);
          });

          $(canvas).bind("mouseout",function(){
            clearInterval(interval);
            
            if(opts.reverse == true){
              interval = setInterval(drawPrevFrame,opts.speed);
            }else{
              curFrame = 0;
              curCol = 0;
              drawNextFrame();
            }
          });
          
          $(canvas).bind("click",function(){
            if(opts.callback){
              opts.callback();
            }
            
            if(link){
              window.location.href = link; 
            }
          });            
            updateCanvas();
      };
      resource.src = opts.resource;
    });
    
  };
})(jQuery);