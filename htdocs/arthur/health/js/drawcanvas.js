/////////////////////////////////////////////////////////////////////////
//                                                                                                                                     
//  HTML5 Drawing Tool                        
//
//  Copyright © 2013 WGBH Digital                                 
//  WGBH Educational Foundation                                        
//
// 	Kal Gieber, Kit Buckley
//
/////////////////////////////////////////////////////////////////////////

;(function($) {
	
	// VARIABLES ********************************************************
	
	// STATIC
	var MARKERsize=5;
	var MARKERalpha=1;
	var BRUSHsize=10;
	var BRUSHalpha=0.5;
	var DEFAULTcolor='000000';
	var DEFAULTtool='marker';
	
	// PARAMETERS
	var currentTool;
	var currentColor;
	var currentSize;
	var currentAlpha;
	var lastMarkerSize;
	var lastBrushSize;
	var currentLayer=-1;
	
	var tapdown;		// used to hold the reference for mouse or touch down
	var tapup;			// used to hold the reference for mouse or touch up
	var tapmove;		// used to hold the reference for mouse or touch move
	var tapenter;		// used to hold the reference for mouse or touch entering area
	var tapleave;		// used to hold the reference for mouse or touch leaving area
	
	// OBJECTS
	var c=createjs;		// reference to createjs namespace
	var canv;			// holds reference to drawing canvas
	var stage;			// holds reference to drawing stage
	var prev_canv;		// holds reference to tool preview canvas
	var prev_stage;		// holds reference to preview stage
	var tool;			// holds the active tool, based on the tool classes
	var graphics;		// holds reference to the current shape/layer's graphics
	var prev_graphics;	// holds reference to tool preview's graphics area
	var draw_cont;		// container for drawing shapes
	var cursor_cont;	// container for cursor shapes
	var cursor_shape;	// shape that contains the graphics for the cursor
	var cursor_graphics;// the graphics for the cursor

	// ARRAYS
	var ca;				// holds current RGB color values
	var drawingLayers;	// holds the containers for each of the undoable layers
	
	// FLAGS
	var activePaint;	// indicates when user is painting/drawing
	var overCanvas;		// indicates when the user has the cursor over the canvas
	var dotouch=true;	// indicates if a touchscreen is in use
	
	var stageFPS = 50;	// stage frames per second

	var stageScale=1;
	var txtBox;			//for trace statements

	var draw_cont_shape;	//for all touch events

	var stageScale; 	//canvas scale percent
	
	// FUNCTIONS ********************************************************
	
	// set up all of the tools
	function initDraw() {

		//debug
		txtBox = new c.Text("","20px Arial","#ff7700");
		txtBox.x=50;
		txtBox.y=30;
		//-----

		// set defaults, buttons, and arrays
		drawingLayers=[];
		
		lastMarkerSize=MARKERsize;
		lastBrushSize=BRUSHsize;
		
		buildColorButtons();
		
		setToolButtons();
		
		// set up canvas pointers
		canv = document.getElementById('draw-canvas');
		prev_canv = document.getElementById('preview-canvas');
		
		// listen for the mouse being used
		canv.addEventListener('mouseover',domouse);
		
		// set height and width of canvases
		canv.width=$('.drawtool-canvas-block').width();
		canv.height=canv.width*.6;//$('.drawtool-canvas-block').height();

		stageScale = canv.height/canv.width;

		//txtBox.text=canv.width+", "+canv.height+": "+stageScale;

		$('.preview-box').height($('.preview-box').width());
		prev_canv.width=$('.preview-box').width();
		prev_canv.height=$('.preview-box').height();
		
		// set up stage for createjs
		stage=new c.Stage(canv);
		prev_stage=new c.Stage(prev_canv);

		
		// add containers to stage
		draw_cont=new c.Container();
		cursor_cont=new c.Container();
		draw_cont_shape = new c.Shape();

		draw_cont_shape.graphics.beginFill('gray').drawRect(0,0,canv.width,canv.height);

		
		stage.addChild(draw_cont);
		stage.addChild(cursor_cont);
		stage.addChild(txtBox);
		stage.addChild(draw_cont_shape);

		draw_cont_shape.alpha=0.01;
		

		// set up initial interactivity
		setMode(dotouch);
		tapdown='mousedown';
		tapmove='pressmove';
		tapup='pressup';
		tapenter='rollover';
		tapleave='rollout';
		rebind();

		//enable touch if supported
		c.Touch.enable(stage,true);

		//enable mouse move outside stage
		stage.mouseMoveOutside = true;

		//don't auto clear stage. help preformance?
		//stage.autoClear = false;
		
		//set mouseover rate
		stage.enableMouseOver(stageFPS);
		//console.log("set mouse over rate");
		
		// add a cache to the drawing stage
		//draw_cont.cache(0,0,canv.width,canv.height);		
		
		// preview shape holder
		var prevShape=new c.Shape();
		prev_graphics=prevShape.graphics;
		prev_graphics.beginFill("green").drawRect(0, 0, prev_canv.width, prev_canv.height);
		prev_stage.addChild(prevShape);
		prev_stage.update();
		
		// set up custom cursor
		overCanvas=false;
		cursor_shape=new c.Shape();
		cursor_cont.addChild(cursor_shape);
		cursor_graphics=cursor_shape.graphics;
		
		// start with touch mode and cursor container hidden
		cursor_cont.visible=false;
		
		// set initial active tool
		currentTool=DEFAULTtool;
		setTool($('#'+currentTool+'-bt').data('tooltype'));
		$('#'+currentTool+'-bt').addClass('active-button');
					
		// set up listener to detect createjs ticks
		c.Ticker.addEventListener('tick', tickUpdate);
		c.Ticker.setFPS(stageFPS);
		//console.log("FPS: "+c.Ticker.getFPS());
		
		onResize();
	}
	
	// used to build the color buttons based on colors listed in html list
	function buildColorButtons(){
		$('.color-list li').each(function(){
			$(this).html('<button id="'+$(this).html()+'-bt" style="background-color:#'+$(this).html()+';border:2px solid #fff;"></button>');//'+$(this).html()+'
		});
		// init first color
		currentColor='#'+DEFAULTcolor;
		$(currentColor+'-bt').addClass('color-active-button');
		ca=colorArrayFromHex(currentColor);

		$(".color-list li:last-child").addClass("last-item");
		// set up color buttons click handler
		$('.color-list li button').click(function(){
			
			
			var newColor='#'+extractButtonName($(this).attr('id'));
			if(newColor!=currentColor){
				// clear last color highlight
				$(currentColor+'-bt').removeClass('color-active-button');
				currentColor=newColor;
				// highlight new tool
				$(this).addClass('color-active-button');
				// get rgb values
				ca=colorArrayFromHex(currentColor);	
				// update tool preview
				tool.showPreview();
			}
		});
	}
	
	// used to set up the actions taken when tool buttons are selected
	function setToolButtons(){
		$('#sticker-bt').data('tooltype',Sticker);
		$('#stamp-bt').data('tooltype',Stamp);
		$('#brush-bt').data('tooltype',PaintBrush2);
		$('#marker-bt').data('tooltype',PaintBrush);
		$('#fill-bt').data('tooltype',Fill);
		$('#bucket-bt').data('tooltype',FillStage);
		// set up listeners for main buttons
		$(".main-tools li:last-child").addClass("last-item");		
		$('.main-tools button.draw-tool').each(function(){
			$(this).click(function(){
				var toolSel=extractButtonName($(this).attr('id'));
				//console.log('TOOL SELECTED['+currentTool+']');
				// if tool button is active, set class of tool to new tooltype
				if((toolSel!=currentTool)&&!$(this).hasClass('bt-inactive')){
					$('#'+currentTool+'-bt').removeClass('active-button');
					setTool($(this).data('tooltype'));
					currentTool=toolSel;
					$('#'+currentTool+'-bt').addClass('active-button');
				}
			});
		});
		
		// set undo tool
		$('#undo-bt').click(function(){
			if(!$(this).hasClass('bt-inactive')){
				undoLastDrawingLayer();
			}
		});
		
		// set clear tool
		$('#clear-bt').click(function(){
			if(!$(this).hasClass('bt-inactive')){
				clearDrawingArea();
			}
		});
				
		// set done tool
		$('#done-bt').click(function(){
			if(!$(this).hasClass('bt-inactive')){
				dispatchDrawingDoneEvent();
			}
		});
		
	}
	
	// extracts the name of the button
	function extractButtonName(btName){
		return btName.slice(0,btName.length-3);
	}
	
	// used to set up the current active tool
	function setTool(toolClass){
		// stop listening for drawing
		draw_cont_shape.removeEventListener(tapdown,startDraw,false);
		// set new tool based on tool class
		tool=new toolClass();	
		// start listening for drawing again
		draw_cont_shape.addEventListener(tapdown,startDraw,false);
		tool.showPreview();
/*		if(tool==Stamp) {
			currenttool.setImage(canv);	
		}
*/	}

	// used to create an RGB color values object
	function colorArrayFromHex(color) {
		// switch a string color into an array
		var colorarr=new Array;
	
		color=color.substr(1,color.length-1);
		var tc=parseInt(color,16);

		colorarr[0]=parseInt(color.substr(0,2),16);
		colorarr[1]=parseInt(color.substr(2,2),16);
		colorarr[2]=parseInt(color.substr(4,2),16);
		
		return colorarr;
	}
	
	// used to set up which type of interaction is occuring (touch or mouse)
	function setMode(dotouchin) {
		//unbind();
		dotouch=dotouchin;
		//tapdown = 'stagemousedown';
		//tapmove = 'stagemousemove';
		//tapup = 'stagemouseup';
		//tapenter = 'mouseenter';
		//tapleave='mouseleave';

		/*tapdown='mousedown';
		tapmove='pressmove';
		tapup='pressup';
		tapenter='rollover';
		tapleave='rollout';*/
		//rebind();
		if(!dotouch) {
			// show custom cursor container
			cursor_cont.visible=true;
			if(tool!=null){
				tool.showPreview();
			}
		}
		
	}

	// used to unbind the current interactive listeners in order to change trigger type
	function unbind() {
		draw_cont_shape.removeEventListener(tapdown,startDraw,false);
		stage.removeEventListener(tapenter,mouseEnterArea,false);
		stage.removeEventListener(tapleave,mouseLeftArea,false);

	}

	// used to rebind the current interactive listeners when trigger type has been changed
	function rebind() {
		draw_cont_shape.addEventListener(tapdown,startDraw,false);
		stage.addEventListener(tapenter,mouseEnterArea,false);
		stage.addEventListener(tapleave,mouseLeftArea,false);

	}
	
	// used to add a new drawing layer to the stage
	function addNewDrawingLayer(){
		// set up graphics holder
	 	var newShape=new c.Shape();
	 	drawingLayers.push(newShape);
	 	currentLayer=drawingLayers.length-1;
	 	graphics=null;
		graphics = drawingLayers[currentLayer].graphics;
		draw_cont.addChild(newShape);
		//draw_cont.updateCache();

		drawingLayers[currentLayer].cache(0,0,canv.width,canv.height);
		stage.update();
		
	}
	
	// used to clear out the last drawing layer when undo button is selected
	function undoLastDrawingLayer(){
		// make sure there are layers
		if(currentLayer!=-1){
			var currShape=drawingLayers[currentLayer];
			// remove layer from array
			drawingLayers.splice(currentLayer,1);
	 		currentLayer=drawingLayers.length-1;
	 		// clear out shape before removing
	 		graphics.clear();
			draw_cont.removeChild(currShape);
			//draw_cont.updateCache();
			stage.update();
		}
	}
	
	// used to clear out all of the layers
	function clearDrawingArea(){
		// make sure there are layers
		if(currentLayer!=-1){
			for(var ln=(drawingLayers.length-1);ln>=0;--ln){
				var currShape2=drawingLayers[ln];
				// remove layer from array
				drawingLayers.splice(ln,1);
				currentLayer=drawingLayers.length-1;
				// clear out shape before removing
				graphics.clear();
				draw_cont.removeChild(currShape2);
			}

			//draw_cont.updateCache();
			stage.update();
		}
	}
	
	// used to trigger the next step when user is done drawing
	function dispatchDrawingDoneEvent(){
		var doneEvent=new Event('DrawingDone');
		document.dispatchEvent(doneEvent);
			//console.log('I dispatched the event!');
	}
	
	// used to get the coordinates depending on touch or mouse
	function getCoords(ev) {
		var offsetX;
		var offsetY;

		offsetX = ev.stageX;
		offsetY = ev.stageY;

		return [offsetX,offsetY];
	}
	

	// EVENT FUNCTIONS **************************************************
	
	// used to listen for mouse being used, if so switch to mouse events
	function domouse(ev) {
		dotouch=false;
		canv.removeEventListener('mouseover',domouse);
		setMode(dotouch);
	}
	
	// used to trigger actions when createjs signals a tick
	function tickUpdate(ev){

		if(!dotouch&&overCanvas){
			// have cursor graphics follow cursor
			cursor_shape.x=stage.mouseX;
			cursor_shape.y=stage.mouseY;
			////console.log("follow mouse")
		}
		stage.update();

		//console.log("FPS: "+c.Ticker.getMeasuredFPS())
		//console.log("TICK: "+c.Ticker.getMeasuredTickTime())
	}
	
	// use to trigger tool's ongoing drawing process when there is touch/mouse movement
	function drawTo(ev) {
		ev.preventDefault();
		if((!dotouch && stage.mouseInBounds) || dotouch)
		{
			////console.log("draw to")
			var contCoords=[ev.stageX,ev.stageY];//getCoords(ev);
			tool.continueMark(contCoords[0],contCoords[1]);
		}else{
			graphics.moveTo(ev.stageX,ev.stageY)
			//tool.startMark(ev.stageX,ev.stageY);
			////console.log("move to")
		}
		
		//console.log("drawing..: "+drawingLayers[currentLayer])
		drawingLayers[currentLayer].updateCache();

	}
	
	// used to start the drawing process when the canvas has been touched or moused down upon
	function startDraw(ev){
	//	console.log("start drawing...")
	//txtBox.text="start drawing init"
		ev.preventDefault();
		activePaint=true;
		// stop listening for starting touch/mouse
		draw_cont_shape.removeEventListener(tapdown,startDraw,false);		
		// start by adding a new layer to work within
		addNewDrawingLayer();

		// start drawing
		var stCoords=[ev.stageX,ev.stageY];//getCoords(ev);
		tool.startMark(stCoords[0],stCoords[1]);
		// add listeners for continuing movement and releasing touch/mouse
		draw_cont_shape.addEventListener(tapmove,drawTo,false);
		draw_cont_shape.addEventListener(tapup,stopDraw,false);
	}
	
	// used to stop the drawing process when the mouse or touch has been released
	function stopDraw(ev){
		//console.log("stop draw")
		ev.preventDefault();
		activePaint=false;

		drawingLayers[currentLayer].updateCache();
		// remove listeners for continuing movement and releasing touch/mouse
		draw_cont_shape.removeEventListener(tapmove,drawTo,false);
		draw_cont_shape.removeEventListener(tapup,stopDraw,false);
		// end drawing
		var endCoords=[ev.stageX,ev.stageY]//getCoords(ev);
		tool.endMark(endCoords[0],endCoords[1]);
		// add listening for starting touch/mouse
		draw_cont_shape.addEventListener(tapdown,startDraw,false);
	}
	
	// used to detect when the mouse or touch has entered the drawing area
	function mouseEnterArea(ev){
		//txtBox.text="enter!"
		//console.log('enter');
		ev.preventDefault();
		if(!dotouch){
			//console.log("show cursor")
			overCanvas=true;
			// hide regular cursor
			$(canv).css('cursor', 'none');
			// show custom cursor
			//console.log('cursor')
			cursor_cont.visible=true;
			//stage.update();
		}
	}
		
	// used to stop the drawing process when the mouse has left the drawing area
	function mouseLeftArea(ev){
	//	txtBox.text="leave!"
		ev.preventDefault();
		if(!dotouch){
			//console.log("hide cursor")
			overCanvas=false;
			// show regular cursor
			$(canv).css('cursor', 'default');
			// hide custom cursor
			cursor_cont.visible=false;
			//stage.update();
		}
		
		if(activePaint){
			/*activePaint=false;
			// remove listeners for continuing movement and releasing touch/mouse
			canv.removeEventListener(tapmove,drawTo,false);
			canv.removeEventListener(tapup,stopDraw,false);
			// end drawing
			tool.endMark(tool.lastx,tool.lasty);
			// add listening for starting touch/mouse
			canv.addEventListener(tapdown,startDraw,false);*/
		}
	}

	function onResize() {

		$('#draw-canvas').width($('.drawtool-page').width()-4);
		$('#draw-canvas').height($('#draw-canvas').width()*stageScale);
		//console.log
		//txtBox.text="resize// scale: "+stageScale+" width: "+$('#draw-canvas').width()+", height: "+$("#draw-canvas").height()
	}

	window.onresize = function() {
		onResize();
	}
	
	// TOOL CLASSES *****************************************************
	
	var PaintBrush=function(){
	
		// set parameters
		this.name='Marker';
		this.didmove=false;
		this.lastx=0;
		this.lasty=0;
		
		// set up stroke size and color
		currentSize=lastMarkerSize;
		
		// drawing started
		this.startMark=function(stX,stY) {
			this.didmove=false;
			graphics.setStrokeStyle(currentSize,'round','round').beginStroke(c.Graphics.getRGB(ca[0],ca[1],ca[2],MARKERalpha));
			//initial point on tap:
			graphics.moveTo(stX, stY);
			

			this.lastx=stX;
			this.lasty=stY;

			//txtBox.text="startDraw.. "+stX+", "+stY;
		}
		
		// drawing continued (mouse or touch move)
		this.continueMark=function(stX,stY) {
			this.didmove=true;
			//txtBox.text="Prev: "+this.lastx+", "+this.lasty+"\ncontinueDraw.. "+stX+", "+stY;
			graphics.lineTo(stX,stY);
			this.lastx=stX;
			this.lasty=stY;
			
		}
		
		// drawing released
		this.endMark=function(stX,stY) {
			// if user didn't move, just create a point
			if(!this.didmove) {
				graphics.lineTo(this.lastx+1,this.lasty);
			}
			else{
				graphics.lineTo(stX,stY);
			}
			graphics.endStroke();
			drawingLayers[currentLayer].updateCache();
			this.lastx=0;
			this.lasty=0;
			//draw_cont.updateCache();
			stage.update();
			//txtBox.text="endDraw"
		}

		// preview of tool
		this.showPreview=function(){
			prev_graphics.clear();
			prev_graphics.setStrokeStyle(.5).beginStroke(c.Graphics.getRGB(0,0,0)).beginFill(c.Graphics.getRGB(ca[0],ca[1],ca[2],MARKERalpha)).drawCircle(prev_canv.width/2,prev_canv.height/2,currentSize/2);
			
			prev_stage.update();
			
			// update the cursor, if mouse enabled
			if(!dotouch){
				cursor_graphics.clear();
				cursor_graphics.setStrokeStyle(.5).beginStroke(c.Graphics.getRGB(0,0,0)).beginFill(c.Graphics.getRGB(ca[0],ca[1],ca[2],MARKERalpha)).drawCircle(0,0,currentSize/2);
				
				stage.update();
			}
			
		}

	};

	var FillStage=function(){
		// set parameters
		this.name='FillStage';
		this.didmove=false;
		this.lastx=0;
		this.lasty=0;
		
		// set up stroke size and color
		//currentSize=lastMarkerSize;
		
		// drawing started
		this.startMark=function(stX,stY) {
			/*graphics.setStrokeStyle(currentSize,'round','round').beginStroke(c.Graphics.getRGB(ca[0],ca[1],ca[2],MARKERalpha));
			//initial point on tap:
			graphics.moveTo(stX, stY);
			this.didmove=false;
			this.lastx=stX;
			this.lasty=stY;*/
			this.lastx=stX;
			this.lasty=stY;
			graphics.beginFill(c.Graphics.getRGB(ca[0],ca[1],ca[2])).drawRect(0, 0, canv.width, canv.height);
		}
		
		// drawing continued (mouse or touch move)
		this.continueMark=function(stX,stY) {
			/*this.didmove=true;
			graphics.lineTo(stX,stY);
			this.lastx=stX;
			this.lasty=stY;*/
			this.lastx=stX;
			this.lasty=stY;
		}
		
		// drawing released
		this.endMark=function(stX,stY) {
			// if user didn't move, just create a point
			/*if(!this.didmove) {
				graphics.lineTo(this.lastx+1,this.lasty);
			}
			else{
				graphics.lineTo(stX,stY);
			}
			graphics.endStroke();*/
			//draw_cont.updateCache();
			stage.update();
		}

		// preview of tool
		this.showPreview=function(){
			prev_graphics.clear();
			prev_graphics.setStrokeStyle(.5).beginStroke(c.Graphics.getRGB(0,0,0)).beginFill(c.Graphics.getRGB(ca[0],ca[1],ca[2],MARKERalpha)).drawCircle(prev_canv.width/2,prev_canv.height/2,currentSize/2);
			
			prev_stage.update();
			
			// update the cursor, if mouse enabled
			if(!dotouch){
				cursor_graphics.clear();
				cursor_graphics.setStrokeStyle(.5).beginStroke(c.Graphics.getRGB(0,0,0)).beginFill(c.Graphics.getRGB(ca[0],ca[1],ca[2],MARKERalpha)).drawCircle(0,0,currentSize);
				
				stage.update();
			}
			
		}
	};
	
	var PaintBrush2=function(){
	
		// set parameters
		this.name='Brush';
		this.didmove=false;
		this.lastx=0;
		this.lasty=0;
		
		// set up stroke size and color
		currentSize=lastBrushSize;
		
		// drawing started
		this.startMark=function(stX,stY) {
			graphics.setStrokeStyle(currentSize,'round','round').beginStroke(c.Graphics.getRGB(ca[0],ca[1],ca[2],BRUSHalpha));
			//initial point on tap:
			graphics.moveTo(stX, stY);
			this.didmove=false;
			this.lastx=stX;
			this.lasty=stY;
		}
		
		// drawing continued (mouse or touch move)
		this.continueMark=function(stX,stY) {
			this.didmove=true;
			graphics.lineTo(stX,stY);
			this.lastx=stX;
			this.lasty=stY;
		}
		
		// drawing released
		this.endMark=function(stX,stY) {
			// if user didn't move, just create a point
			if(!this.didmove) {
				graphics.lineTo(this.lastx+1,this.lasty);
			}
			else{
				graphics.lineTo(stX,stY);
			}
			graphics.endStroke();
			drawingLayers[currentLayer].updateCache();
			//draw_cont.updateCache();
			stage.update();
		}

		// preview of tool
		this.showPreview=function(){
			prev_graphics.clear();
			prev_graphics.setStrokeStyle(.5).beginStroke(c.Graphics.getRGB(0,0,0)).beginFill(c.Graphics.getRGB(ca[0],ca[1],ca[2],BRUSHalpha)).drawCircle(prev_canv.width/2,prev_canv.height/2,currentSize/2);
		
			prev_stage.update();
			
			// update the cursor, if mouse enabled
			if(!dotouch){
				cursor_graphics.clear();
				cursor_graphics.setStrokeStyle(.5).beginStroke(c.Graphics.getRGB(0,0,0)).beginFill(c.Graphics.getRGB(ca[0],ca[1],ca[2],BRUSHalpha)).drawCircle(0,0,currentSize/2);
				
				stage.update();
			}
		}

	};

	var Stamp=function(){
		this.name='Stamping';
		//console.log('instantiating stamp');
	};

	var Sticker=function(){
		this.name='Stickering';
		//console.log('instantiating sticker');
	};

	var Fill=function(){
		this.name='Bucket';
		//console.log('instantiating fill');
	};

	// start initialization
	$(document).ready(initDraw);

})(jQuery);
