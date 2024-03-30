/*
 *
 * PBS KIDS Sticker Maker Plugin 0.1
 *
 */

if (typeof (console) == 'undefined'){
    console = {'log': function(){return}}
}

if (typeof PBS == 'undefined'){
    var PBS = {
	'KIDS' : {}
    }
}
else {
    if (typeof PBS.KIDS == 'undefined'){
	PBS.KIDS = {}
    }
}

//START THE CLASS
PBS.KIDS.StickerBook = function(stickerbook){


    //Dynmically compute CDN domain
    var _base = undefined;
    // cdn_base represents the base url to the CDN.
    var _cdn_base = undefined;
    // Cdn represents the host of our CDN.                                                                                                                                                                                        
    var _cdn_host =  "www-tc.pbskids.org";
    // Compute CDN base url based on host.
    var _protocol = window.location.protocol;
    var _host = window.location.host;
    var _base = _protocol + "//" + _host;
    if (_host.match(/.*ernie.*/)) {
        _cdn_host = "ernie-tc.pbskids.org";
    }
    if (_host.match(/.*soup.*/)) {
        _cdn_host = "soup-tc.pbskids.org";
    }
    if (_host.match(/.*localhost.*/)) {
        _cdn_host = "localhost";
    }
    _cdn_base = _protocol + "//" + _cdn_host;

    //console.log("cdb base: "+_cdn_base);

    var _stickerbook = stickerbook;

    var _get_stickers_list_url = function(){
	return _base + '/stickerbooks/' + _stickerbook + '/stickers.json'
    }

    var _get_sticker_url = function(id){
	return _base + '/stickerbooks/sticker/' + id + '.json'
    }
    
    var _get_sticker_post_url = function(){
	return _base + '/stickerbooks/' + _stickerbook + '/stickers.json'
    }

    var _get_vote_service_url = function(sticker_id){
	return _base + '/stickerbooks/' + _stickerbook + '/vote/' + sticker_id + '/'
    }

    var _get_user_service_url = function(user_id){
	return _base + '/stickerbooks/user/' + user_id + '.json'
    }

    var _get_item_service_url = function(type){
	var base_url =  _base + '/stickerbooks/' + _stickerbook + '/items.html';
	//console.log("getting item url type: "+type);
	if (type == 'all'){
	    return base_url
	}
	else{
	    var types = type.split(",");
	    var query_string_types = [];
	    //console.log("query string types: "+types);
	    for (var i=0; i < types.length; i++){
		query_string_types.push("type=" + encodeURIComponent(types[i]))
		//console.log(query_string_types[i]);
	    }
	    return base_url + '?' + query_string_types.join('&');
	}
    }


    var _get_sticker_url_from_name = function(name){
	return _base + '/stickerbooks/media/assets/' + _stickerbook + '/' + name + '.png'
    }
    var _get_sticker_selected_url_from_name = function(name){
    	return _base + '/arthur/games/comiccreator/i/sticker/'+name+'.png';
    }

    var _get_canvas_stickers = function(){
	//Returns the current sticker groups
	//stickers are already in the order needed
	return stickerCanvas.getChildren()[0].children
    }

    var _get_stickers_data = function(){
	//Get layout data for sticker group
	var stickers = _get_canvas_stickers();
	var data = Array();
	var sticker_data;

	//console.log("stickers data: "+stickers.length);

	for ( var z=0; z < stickers.length; z++){
	    sticker_data = {}; 
	    sticker_data['name'] = stickers[z].attrs['name'];
	    sticker_data['z'] = z;
	    sticker_data['x'] = stickers[z].attrs['x'];
	    sticker_data['y'] = stickers[z].attrs['y'];
	    sticker_data['rotation'] = stickers[z].attrs['rotation'];
	    //Width and height must be taken from sticker image
	    //(child of the group)
	    if (stickers[z].children[0].attrs['scale']['x'] == -1){
		sticker_data['flip-left-right'] = true;
	    } 
	    sticker_data['width'] = stickers[z].children[0].attrs['width'];
	    sticker_data['height'] = stickers[z].children[0].attrs['height'];
	    sticker_data['type'] = stickers[z].attrs['id']
	    data.push(sticker_data);
	}
	return data;
    }

    var _serialize_stickers_data = function(){
    	//console.log("JSON data?");
	var data = _get_stickers_data();
	return JSON.stringify(data);
    }

    var _sticker_meta = {};

    var _add_sticker_meta = function(meta_dict){
	//Adds metadata about the sticker
	for (meta in meta_dict){
	    if (meta == 'stickers'){
		//This is reserved for stickers data
		continue;
	    }
	    _sticker_meta[meta] = meta_dict[meta]
	}
    }

    var _get_sticker = function(id, callback){
    	
	var url = _get_sticker_url(id);
	//console.log("get sticker: "+id+" url: "+url);
	$.ajax({
	    'url': url,
	    'type': 'GET',
	    'success': function(data){ callback(data) },
	    'dataType': 'json'
	})
    }

    var _init = function(configuration){
    	//console.log("init!!");
	//When all the sticker sheets are done loading
	//Init the Stage
	$('body').bind('sticker-sheets-loaded', function(){ 
		console.log("STICKER SHEET LOADED");
	    initStage(configuration) ;
	});
	//Prepare the stickers
	_load_sticker_sheets();
    }

    //The dict of events that must be completed
    //before initializing the Stage
    var _sticker_sheets_left = {};
    
    var _check_stickers_left = function(){
    	//console.log("stickers sheets left: "+$.isEmptyObject(_sticker_sheets_left));
	if ( $.isEmptyObject(_sticker_sheets_left) ){
	    //All events have occurred
	    //Let every one know
	    //So we can init the stage
	    $("body").trigger("sticker-sheets-loaded");
	}
    }

    var _get_sticker_sheet_type = function(sticker_sheet){
    	//console.log("GET STICKER SHEET TYPE: "+$(sticker_sheet).attr("type"));
	return $(sticker_sheet).attr("type"); //|| "all";
    }

    var _get_sticker_sheets = function(){
	//All the sticker sheet containers in the page
	var _sticker_sheets =  $(".sticker-sheet");
	//Add the event corresponding to each container loaded
	$.each(_sticker_sheets, function(index, container){

	    var type = _get_sticker_sheet_type(container);
	    _sticker_sheets_left[type] = true;
	    //console.log("sticker sheet..."+type);
	})
	return _sticker_sheets;
    }

    //Get all sticker sheets from server
    //When all are done, Stage can be initialized
    var _load_sticker_sheets = function(){
	//Get sticker sheets from markup
	var _sheet_containers = _get_sticker_sheets();
	
	$.each( _sheet_containers, function(index, container){
	    var type = _get_sticker_sheet_type(container);
	    //Load each sheet from the server
	    $.ajax(
		{
		    'url': _get_item_service_url(type),
		    'type': 'GET',
		    'success': function(data){
			$(container).append(data);
			//Remove this event from the 
			//to do list
			delete(_sticker_sheets_left[type]);
			//console.log($(data).find('li').length);
			var width = $(data).find('li').length;
			//console.log(width / 630);
			//console.log("width: "+width);
			//var real_width = Math.ceil(($(data).find('li').length / 7)) * 700;
			if(type=="text")
			{
				width = Math.ceil(width/5) * 581;
			}else{
				width = Math.ceil(width/7) * 581;
			}
			console.log(type+": "+width);
			$(container).children('.sticker-assets').css('width',width+'px');
			//console.log($(data).find('li').length);
			//console.log('HELLO WIDHT: '+width);

			if(width<800)
			{
				$(container).parent().find('.sheet-actions button.sheet-down-action').removeClass('active');
			}

			//console.log("LOAD STICKER... "+type);

			//See how many are left
			_check_stickers_left();
		    },
		    'dataType': 'html'
		}
	    )
	})
    }


    //This is the main canvas instance
    var stickerCanvas;

    //INIT STICKER STAGE
    function initStage() {

    	console.log("STICKER INIT");
	stickerCanvas = new Kinetic.Stage({
	    container: "sticker-canvas",
	    width: 680,
	    height: 249
	});
	var canvasSticker;
	var canvasStickerOver;
	var stickerGroup;
	var defaultBackground;
    var defaultBackgroundGroup;
	var stickerBackground;
	var selectedSticker;
	var rotateThreshold = 5;
	var stickerReady=true;
	var stickerLayer = new Kinetic.Layer();
	stickerCanvas.add(stickerLayer);
	
	stickerCanvas.draw();
    $("#sticker-canvas canvas").attr("id", "sticker-stage");


    function deselectSticker(){
    	if(selectedSticker!=undefined)
    	{
    		//console.log('DESELECT STICKER - CHANGE BACK STICKER!!!!')

			selectedSticker[0].hide();
			selectedSticker = undefined;
    	}else{
    		//console.log('DESELECT STICKER - NONE')
    	}
    }

	
	function createStickerUI() {
	    
	    // Build Supporting UI
	    $('#sticker-canvas').prepend($('#sticker-ui-holder .sticker-ui-contols.follow'));
	    $('.kineticjs-content').append($('#sticker-ui-holder .sticker-poof'));
	    $("ul.sticker-assets li img[category='default_background']").parent().addClass('default-background');
		$(".tool-buttons ul.sticker-assets").prepend($('.tool-buttons ul.sticker-assets li.default-background'));
	    
	    $(function() {

	    	//console.log("create UI");
		var el, newPoint, newPlace, offset;
		
		// Select all range inputs, watch for change
		$("input[name='sticker-threshold']").change(function() {
		    
		    // Cache this for efficiency
		    el = $(this);
		    
		    // Measure width of range input
		    width = el.width();
		    
		    // Figure out placement percentage between left and right of input
		    newPoint = (el.val() - el.attr("min")) / (el.attr("max") - el.attr("min"));
		    
		    // Janky value to get pointer to line up better
		    offset = -2;
		    
		    // Prevent bubble from going beyond left or right (unsupported browsers)
		    if (newPoint < 0) { newPlace = 0; }
		    else if (newPoint > 1) { newPlace = width; }
		    else { newPlace = width * newPoint + offset; offset -= newPoint; }
		    
		    // Move bubble
		    el
			.next("output")
			.css({
			    left: newPlace,
			    marginLeft: offset + "%"
			})
			.text(el.val());
		})
		// Fake a change to position bubble at page load
		    .trigger('change');
	    });

		$('.sticker-ui-contols button.rotate-btn').unbind('click').live('click',function(){
			//console.log('clicked on rotate');
			var stickerGroups = stickerLayer.getChildren();
			//console.log(stickerGroups);
			var currentSticker = stickerGroups[stickerGroups.length-1].get('.sticker')[0];
			var currentStickerRotate = currentSticker.getRotationDeg();
			var currentStickerOver = stickerGroups[stickerGroups.length-1].get('.stickerOver')[0];
			//currentSticker.setOffset(currentSticker.getWidth()/2,currentSticker.getHeight()/2);
			//console.log("rotate offset: "+currentSticker.getOffset().x+" "+currentSticker.getOffset().y);

			if($(this).hasClass('rotate-right'))
			{
				currentSticker.setRotationDeg(currentStickerRotate+rotateThreshold);
				currentStickerOver.setRotationDeg(currentStickerRotate+rotateThreshold);
			}else{
				currentSticker.setRotationDeg(currentStickerRotate-rotateThreshold);
				currentStickerOver.setRotationDeg(currentStickerRotate-rotateThreshold);
			}
			stickerLayer.draw();
		});

	    
	    $('.sticker-ui-contols button.size-btn').unbind('click').live('click', function (){
	    	//console.log("change size::");
		var stickerGroups = stickerLayer.getChildren();
		//console.log(stickerGroups);
		var currentSticker = stickerGroups[stickerGroups.length-1].get('.sticker')[0];
		var currentStickerOver = stickerGroups[stickerGroups.length-1].get('.stickerOver')[0];
		var currentStickerSize = currentSticker.getSize();
		//console.log("size: ");
		//console.log(currentSticker.getSize());
		//var thresholdMin = $("input[name='sticker-threshold']").attr("min");
		//var thresholdMax = $("input[name='sticker-threshold']").attr("max");
		var thresholdMin = -4;
		var thresholdMax = 4;
		
		//var stickerPosition = currentSticker.getPosition();
		//var currentStickerWidth = currentSticker.getWidth();
		
		
		if (currentSticker.threshold >= thresholdMin && currentSticker.threshold <= thresholdMax) {
		    
		    if($(this).hasClass('make-bigger')){
			
			if (currentSticker.threshold != 4){
			    ++currentSticker.threshold;
			    currentSticker.setAttrs({
				width: currentStickerSize.width *1.1,
				height: currentStickerSize.height *1.1
			    });
			    currentStickerOver.setAttrs({
				width: currentStickerSize.width *1.1,
				height: currentStickerSize.height *1.1
			    });

			}
			
		    } else {   
			if (currentSticker.threshold != -4){
			    currentSticker.setAttrs({
				width: currentStickerSize.width *.9,
				height: currentStickerSize.height *.9
			    });
			    currentStickerOver.setAttrs({
				width: currentStickerSize.width *.9,
				height: currentStickerSize.height *.9
			    });
			    --currentSticker.threshold;
			}
		    }
		    
		    //console.log("sticker threshold: "+currentSticker.threshold);
		    stickerLayer.draw(); 
		    
		}
		
	    });
	    
	}; // End createStickerUI() 
	
	createStickerUI();	

	function createSticker() {
		stickerReady=false;

		//console.log("new sticker");
		//console.log("name: "+sticker.name+" type: "+sticker.type);

	    stickerGroup = new Kinetic.Group({
		x: mousePositionX,
		y: mousePositionY,
		width: sticker.width,
		height: sticker.height,
		name: sticker.name,
		id: sticker.type,
		draggable: true
	    });  
	    //console.log("new sticker: "+sticker.name);

	    stickerBackground = new Kinetic.Group({
		x: 0,
		y: 0,
		width: sticker.width,
		height: sticker.height,
		name: sticker.name,
		id: sticker.type,
		draggable: false
	    });  
	    //console.log("new background: "+sticker.name);   
	    
	    sticker.onload = function() {
	    	stickerReady=true;
	   // console.log("new canvas sticker");

	    if(sticker.type=="background")
		{
			canvasSticker = new Kinetic.Image({
			    width: sticker.width,
			    height: sticker.height,
			    image: sticker,
			    id: sticker.name,
			    name: 'sticker',
			    scale: {
				x: 1.67,
				y: 1.67
			    }
			});
		}else{

			canvasSticker = new Kinetic.Image({
			    width: sticker.width,
			    height: sticker.height,
			    image: sticker,
			    id: sticker.name,
			    name: 'sticker',
			    scale: {
				x: 1,
				y: 1
			    },
			   offset:[sticker.width/2,sticker.height/2]
			});

			canvasStickerOver = new Kinetic.Image({
			    width: stickerOver.width,
			    height: stickerOver.height,
			    image: stickerOver,
			    id: stickerOver.name,
			    name: 'stickerOver',
			    scale: {
				x: 1,
				y: 1
			    },
			   offset:[sticker.width/2,sticker.height/2],
			   visible:false
			});

			//console.log("offset: "+canvasSticker.getOffset().x+" "+canvasSticker.getOffset().y);
		}
		//console.log(canvasSticker.getWidth());
		// This makes submit button look "active", only after a user has interacted with the Canvas
		$("#submit-sticker").addClass('active');
		
		defaultBackgroundGroup = new Kinetic.Group({
		x: 0,
		y: 0,
		width: 680,
		height: 249,
		name: 'default_background',
		id: sticker.type,
		draggable: false
	    });    
		
		var imageObj = new Image();
		var backgroundPath =  $("ul.sticker-assets li.default-background img").attr('name');
		imageObj.src = _get_sticker_url_from_name(backgroundPath);
		
		defaultBackground = new Kinetic.Image({
		    width: 680,
		    height: 249,
		    image: imageObj,
		    id:  'default_background',
		    name: 'sticker',
		    scale: {
			x: 1,
			y: 1
		    }
		});

				
		canvasSticker.threshold = 0;		
		//console.log("current asset type: "+currentAssetType);
		if (currentAssetType == 'background'){
		    stickerLayer.add(stickerBackground);
		    var stickerGroups = stickerLayer.getChildren();
		    stickerBackground.add(canvasSticker);
		    defaultBackgroundGroup.remove();
		    stickerBackground.moveToBottom();

		    stickerLayer.draw(); 
		} else {
		    if (stickerLayer.getChildren().length == 0){
		        stickerLayer.add(defaultBackgroundGroup);
		        defaultBackgroundGroup.add(defaultBackground);
		        defaultBackgroundGroup.moveToBottom();
		        stickerLayer.draw();  
		        $(".tool-buttons ul.sticker-assets li.default-background").addClass('ui-selected');
	        }
		    stickerLayer.add(stickerGroup); 
		   // console.log("add to sticker layer - ");
		    //console.log(stickerLayer.getChildren());
		    stickerGroup.add(canvasSticker); 
		    stickerGroup.add(canvasStickerOver);
		  //  canvasSticker.setShadow({color: '#ffff99', offset: [-4, 4], blur: 0}); 
		  //  $('#sticker-ui-holder').show();
		    stickerLayer.draw();   
		}
		
		stickerBackground.on("mousedown touchstart", function(event) {  
			//console.log("sticker background hide controls");
			//var childSticker = stickerGroup.get('.sticker');
	    	//childSticker[0].setShadow({color: 'transparent', offset: [0, 0], blur: 0});
	    	//console.log('sticker background clicked!');
	    	deselectSticker();
	    	stickerCanvas.draw();
          $('#sticker-ui-holder').hide();
          event.stopPropagation();
	    }); 
	    
	    defaultBackgroundGroup.on("mousedown touchstart", function(event) {  
	    	//console.log("background click?");
			//var childSticker = stickerGroup.get('.sticker');
			//console.log(childSticker[0]);
	    	//childSticker[0].setShadow({color: 'purple', offset: [0, 0], blur: 0});
	    	//console.log('default background clicked');
	    	deselectSticker();
	    	stickerCanvas.draw();
          $('#sticker-ui-holder').hide();
          event.stopPropagation();
	    }); 
		
	    stickerLayer.draw(); 
	    
	    
	    
	    }; // End Sticker load
	       
	    
	    $('#sticker-canvas').bind('clickoutside', function (event){
	    	//console.log("click on canvas hide controls");
	       event.stopPropagation();
	    });
	        


	    
	    stickerGroup.on("mousedown touchstart", function(event) {  
		var childSticker = this.get('.sticker');
		var stickerPosition = this.getPosition();
		var currentStickerWidth = childSticker[0].getWidth();
		var currentStickerHeight = childSticker[0].getHeight();
		var currentStickerType = this.getId();
		//console.log('///	sticker group clicked')

		deselectSticker();

		selectedSticker = this.get('.stickerOver');
		selectedSticker[0].show();
		 //Do not allow flipping if the asset is text                                                                                                                                                                           
		if (currentStickerType == 'text'){
			$('#flip-sticker-action').addClass('inactive');
		}
		else{
			//console.log("show flip controls");
			$('#flip-sticker-action').removeClass('inactive');
		}
		
		var stickerCenter_x = stickerPosition.x + currentStickerWidth/2;
		var stickerCenter_y = stickerPosition.y + currentStickerHeight/2;
		
		/*$('#sticker-canvas .sticker-ui-contols')
		    .css('top', stickerCenter_y - 40)
		    .css('left', stickerCenter_x + 20 + currentStickerWidth/2)
		    .show(); */
		
		this.moveToTop();
		/*childSticker[0].setShadow({
		    color: 'red',
		    blur: 0,
		    offset: [1, 1],
		    alpha: 1
		}); */

		
		/*if (childSticker[0].getScale().x == -1 ){
		  childSticker[0].transitionTo({
		    scale: {
			x: -1.1,
			y: 1.1
		    },
		    duration: 0.1,
		    easing: 'ease-in-out'
		  });
		} else {
		  childSticker[0].transitionTo({
		    scale: {
			x: 1.1,
			y: 1.1
		    },
		    duration: 0.1,
		    easing: 'ease-in-out'
		  });
			
		}   */
		 
		stickerLayer.draw();
	    }); // End Drag Function 
	    
	    stickerGroup.on("mouseup touchend", function() { 
		var childSticker = this.get('.sticker');
		var stickerPosition = this.getPosition();
		var currentStickerWidth = childSticker[0].getWidth();
		var currentStickerHeight = childSticker[0].getHeight();
		
		var stickerCenter_x = stickerPosition.x + currentStickerWidth/2;
		var stickerCenter_y = stickerPosition.y + currentStickerHeight/2;

		//console.log("sticker mouse up");
		//console.log(childSticker[0]);
		//console.log(childSticker[0].getId());

		//childSticker[0].setOffset(0,0);

		//console.log("sticker offset: "+childSticker[0].getOffset().x+" "+childSticker[0].getOffset().y);
	       
		/*childSticker[0].setShadow({color: 'transparent', offset: [0, 0], blur: 0});*/
		if (childSticker[0].getScale().x == -1.1 ){
		    childSticker[0].transitionTo({
			scale: {
			    x: -1,
			    y: 1
			},
			duration: 0.5,
			easing: 'elastic-ease-out'
		    });    
		} else if (childSticker[0].getScale().x == 1.1){
			childSticker[0].transitionTo({
			scale: {
				x: 1,
				y: 1
			},
			duration: 0.5,
			easing: 'elastic-ease-out'
			});
		} 
			//console.log("release scale");
			//console.log(childSticker[0].getScale());   
		    stickerLayer.draw(); 
		    
		    stickerPosition = this.getPosition();
			stickerCenter_x = stickerPosition.x + currentStickerWidth/2;
			stickerCenter_y = stickerPosition.y + currentStickerHeight/2;
			
		   /* $('#sticker-canvas .sticker-ui-contols')
			.css('top', stickerCenter_y - 40)
			.css('left', stickerCenter_x + 20 + currentStickerWidth/2)
			.fadeIn(); */

			$('#sticker-ui-holder').show();
		});
	    
	    stickerGroup.on("dragmove", function(event) { 
		//$('#sticker-ui-holder').fadeOut(100);     
	    });
	    
	    $('.sticker-ui-contols button.set-position').on('click', function(event) { 
	    	//console.log('HIDE:::  set position');
	    	//console.log("sticker set position hide controls");
		//$('#sticker-ui-holder').hide();
		event.stopPropagation()
	    });
	    
	} // End createSticker
	
	// Set max count for text assets
        var textStickerCount = 0;
        var textStickerThreshold = 10;

	$(function() {
	    $(".tool-buttons .sticker-assets.can-drag").removeClass('can-drag').addClass('can-select'); //fix for democracy need to change in markup
	
	    var $draggableAssets = $(".sticker-assets.can-drag");
	    var $selectabledAssets = $(".sticker-assets.can-select");
	    
	    $( "li img", $draggableAssets ).draggable({  
			revert: "invalid", // when not dropped, the item will revert back to its initial position
			containment: $( "#sticker-ui" ).length ? "#sticker-ui" : "document", // assets stay within Sticker UI
			helper: "clone",
			cursor: "move",
			start: function(event, ui) {
				//console.log("drag? hide controls");
				//console.log('HIDE:::  dragging');
				deselectSticker();
				stickerLayer.draw();
			    $('#sticker-ui-holder').hide();
			}  
	    });
        
		$('#sticker-canvas').droppable({ 
			accept: ".sticker-assets.can-drag > li > img",
			activeClass: "ui-state-highlight",
			tolerance: "pointer",
			drop: function(event, ui) {
			    currentAsset = ui.draggable.attr('src');
			    currentAssetType = ui.draggable.attr('type');

			    //console.log(currentAssetType);

			    //Do not allow flipping if the asset is text
			    if (currentAssetType == 'text'){
				//$("#flip-sticker-action").hide() 
				$('#flip-sticker-action').addClass('inactive');
			    }
			    else{
			    	//console.log("drag show flip controls");
				//$("#flip-sticker-action").show() 
				$('#flip-sticker-action').removeClass('inactive');
			    }

			    currentAssetName = ui.draggable.attr('name');

			    //console.log(currentAssetName);
			    
			    sticker = new Image();
			    sticker.src = _get_sticker_url_from_name(currentAssetName);
			    sticker.name = currentAssetName;
			    sticker.type = currentAssetType;

			    stickerOver = new Image();
				stickerOver.src = _get_sticker_selected_url_from_name(currentAssetName+"_yellow");
				stickerOver.name = currentAssetName+"_yellow";
				stickerOver.type = currentAssetType;

				//console.log("STICKER OVER IMG: "+stickerOver.name);
			    
			    canvasOffset = $('#sticker-canvas').offset();

			    
			    mousePosition = ui.offset; //current position of the draggable helper { top: , left: } relative to the page.
	                    
			    mousePositionY = mousePosition.top - canvasOffset.top;
			    mousePositionX = mousePosition.left - canvasOffset.left;

			   //console.log("mouse pos: "+mousePositionX+" "+mousePositionY);

			    
			    
			   if (currentAssetType == 'text'){
			   		// console.log("text?");
			       textStickerCount++;
			       $('#sheet-text-controls p.word-counter em').html(textStickerCount + " of " + textStickerThreshold);
			    }

			   // console.log("count: "+textStickerCount);
			    //console.log("threshold: "+textStickerThreshold);
			    
			   /* if (textStickerCount >= textStickerThreshold){
			       $('.sticker-sheet.text-ui li img').draggable('disable').addClass("done");
				    
			    }
			    if (textStickerCount < textStickerThreshold){
			       $('.sticker-sheet.text-ui li img.ui-draggable-disabled.draggable').draggable('enable').removeClass("done");
			    }*/
			    
			    if (currentAssetType == 'background'){
			    	//console.log("background");
			    	if(stickerReady)
			    	{
						createSticker();
					}
				ui.draggable.draggable('disable').addClass("done");
				
			    } else {
			    	//console.log("regular...");
			    	if(stickerReady)
			    	{
				    	createSticker(); 
					}
			    } 
			    
			}
		    });
		    $($selectabledAssets).selectable({
			filter: "li",
			selected: function(event, ui) {
			    var stickerGroups = stickerLayer.getChildren();
			    
			    currentAsset =  $('.ui-selected').find('img').attr('src');
			    currentAssetType = $('.ui-selected').find('img').attr('type');
			    currentAssetName = $('.ui-selected').find('img').attr('name');
			    
			    sticker = new Image();
			    sticker.src = _get_sticker_url_from_name(currentAssetName);
			    sticker.name = currentAssetName;
			    sticker.type = currentAssetType;
			    
			    //console.log("===		selected: "+sticker.type);
			    
			    canvasOffset = $('#sticker-canvas').offset();
			    
			    mousePosition = $(this).find('img').position();
			           
			    mousePositionY = mousePosition.top - canvasOffset.top;
			    mousePositionX = mousePosition.left - canvasOffset.left;
			    

			    //console.log("STICKER READY? "+stickerReady);
			    if(stickerReady)
			    {
			    	stickerGroups.shift();
			    	stickerLayer.draw();
			   		createSticker();
				}
			    
			    /*$('.tool-buttons ul.sticker-assets').fadeOut();		 */   
		            
			}
		    });
		    
		    //Save Canvas to desktop
		    var stage = document.getElementById("sticker-stage");
		    /*function convertCanvas(strType) {
				if (strType == "PNG")
					var oImg = Canvas2Image.saveAsPNG(stage, true);
				if (strType == "BMP")
					var oImg = Canvas2Image.saveAsBMP(stage, true);
				if (strType == "JPEG")
					var oImg = Canvas2Image.saveAsJPEG(stage, true);
		
				if (!oImg) {
					alert("Sorry, this browser is not capable of saving " + strType + " files!");
					return false;
				}
		
				oImg.id = "canvasimage";
		
				oImg.style.border = stage.style.border;
				stage.parentNode.replaceChild(oImg, stage);
		
				showDownloadText();
			};
		
			function saveCanvas(pCanvas, strType) {
				var bRes = false;
				if (strType == "PNG")
					bRes = Canvas2Image.saveAsPNG(stage);
				if (strType == "BMP")
					bRes = Canvas2Image.saveAsBMP(stage);
				if (strType == "JPEG")
					bRes = Canvas2Image.saveAsJPEG(stages);
		
				if (!bRes) {
					alert("Sorry, this browser is not capable of saving " + strType + " files!");
					return false;
				}
			};*/
		
			/*$("#save-sticker").on('click', function() {
				//saveCanvas(stage, "PNG");

			});*/

			$("#save-sticker").click(function () {

			//var data = stage.toDataURL("image/png").replace("image/png", "image/octet-stream");
			//window.location.href = data;

			/*var complexText = new Kinetic.Text({
	        x: 100,
	        y: 190,
	        stroke: '#555',
	        strokeWidth: 5,
	        fill: '#ddd',
	        text: 'COMPLEX TEXT\n\nAll the world\'s a stage, and all the men and women merely players. They have their exits and their entrances.',
	        fontSize: 14,
	        fontFamily: 'Calibri',
	        textFill: '#555',
	        width: 380,
	        padding: 20,
	        align: 'center',
	        fontStyle: 'italic',
	        shadow: {
	          color: 'black',
	          blur: 10,
	          offset: [10, 10],
	          opacity: 0.2
	        },
	        cornerRadius: 10
	      });

			stickerLayer.add(complexText);
			stickerCanvas.draw();*/

			deselectSticker();
			stickerCanvas.draw();
			$('#sticker-ui-holder').hide();


			var context = document.getElementById("sticker-stage").getContext("2d");
			context.fillStyle = "black";
			context.font = "regluar 12px Arial";
			context.fillText("All characters and underlying materials (including artwork) \u00A9 Marc Brown.", 10,280);
			context.fillText("\"Arthur\" and \"D.W.\" and all of the ARTHUR characters are trademarks of Marc",10,295);
			context.fillText("Brown. \u00A9 2012 WGBH.",10,310)
			//"All characters and underlying materials (including artwork) \u00A9 Marc Brown.\n \"Arthur\" and \"D.W.\" and all of the ARTHUR characters are trademarks of Marc Brown. \u00A9 2012 WGBH."

			/*var data = context.getImageData(0,0,stage.width, stage.height);
			var compositeOperation = context.globalCompositeOperation;
			context.globalCompositeOperation = "destination-over";
			context.fillStyle = "white";
			context.fillRect(0,0,stage.width,stage.height);*/

			var fname = 'sticker';
			var data = stage.toDataURL("image/png");
	        data = data.substr(data.indexOf(',') + 1).toString();
	         
	        var dataInput = document.createElement("input") ;
	        dataInput.setAttribute("name", 'imgdata') ;
	        dataInput.setAttribute("value", data);
	         
	        var nameInput = document.createElement("input") ;
	        nameInput.setAttribute("name", 'name') ;
	        nameInput.setAttribute("value", fname + '.png');
			var myForm = document.createElement("form");
	        myForm.method = 'post';
	        myForm.action = 'save.php';
	        myForm.appendChild(dataInput);
	        myForm.appendChild(nameInput);
	         
	        document.body.appendChild(myForm) ;
	        myForm.submit() ;
	        document.body.removeChild(myForm) ;
	       // stickerLayer.remove(complexText);
	       // stickerCanvas.draw();
	       //context.clearRect(0,0,stage.width, stage.height);
	      // context.putImageData(data,0,0);
	      //context.globalCompositeOperation = compositeOperation;

			//console.log("SEND TO DOWNLOAD");
			});

			$('#print-sticker').bind('click',function(){
				//showCopyrightText();

			deselectSticker();
			stickerCanvas.draw();
			$('#sticker-ui-holder').hide();


			var data = stage.toDataURL("image/png");
			var windowContent = '<!DOCTYPE html>';
			windowContent+='<html>';
			windowContent+='<head><title>Print Canvas</title><style type=text/css>#canvas{border:1px solid #333333;} p{ width:400px; font-size:10px; font-family:Arial;}</style></head>';
			windowContent+='<body>';
			windowContent+='<img src="'+data+'" id=\"canvas\">';
			windowContent+='<p>All characters and underlying materials (including artwork) &copy; Marc Brown. \"Arthur\" and \"D.W.\" and all of the ARTHUR characters are trademarks of Marc Brown. &copy; 2012 WGBH.</p>';
			windowContent+='</body>';
			windowContent+='</html>';
			var printWin = window.open('','','width=800,height=400');
			printWin.document.open();
			printWin.document.write(windowContent);
			//printWin.document.close();
			//printWin.focus();
			/*setTimeout(function(){
				printWin.print();
				printWin.close();
			},400);*/
			
		});

			function showCopyrightText(){
				var context = document.getElementById("sticker-stage").getContext("2d");
				context.fillStyle = "black";
				context.font = "regluar 12px Arial";
				context.fillText("All characters and underlying materials (including artwork) \u00A9 Marc Brown.", 10,280);
				context.fillText("\"Arthur\" and \"D.W.\" and all of the ARTHUR characters are trademarks of Marc",10,295);
				context.fillText("Brown. \u00A9 2012 WGBH.",10,310)
			}	               
		});
		
		$('#clear-all').bind('click', function (){
			//console.log("clear all");
			deselectSticker();
			stickerCanvas.draw();
			$('#sticker-ui-holder').hide();
			$('#screen-overlay').removeClass('inactive');
		});


	setTimeout(function(){
    $('aside.sheet-actions button.active').live('mouseup', function(){
        var action_container = $(this).parent();
        
        if ($(this).parent().hasClass('graphic-ui')){
        	if($(this).parent().parent().attr('id') == 'tabschar')
        	{
        		var action_cousin =  $('#tabschar .sticker-sheet.graphic-ui');
        	}else if($(this).parent().parent().attr('id') == 'tabsprop'){
        		var action_cousin =  $('#tabsprop .sticker-sheet.graphic-ui');
        	}else if($(this).parent().parent().attr('id') == 'tabstext'){
        		var action_cousin =  $('#tabstext .sticker-sheet.graphic-ui');
        	}else{
        		var action_cousin =  $('#tabsbkg .sticker-sheet.graphic-ui');
        	}
            
        } else {
            var action_cousin =  $('.sticker-sheet.text-ui');        
        }
        var sheet_ui = action_cousin;
        var asset_sheet_width = sheet_ui.find('.sticker-assets').width();
        //console.log("SHEET WIDTH: "+asset_sheet_width);



        var scrollAmount = 800;

        /*console.log(action_cousin);
        console.log(action_container);*/
       
        if ($(this).hasClass('sheet-down-action') && asset_sheet_width > scrollAmount){
        	 console.log("LEFT: "+sheet_ui.scrollLeft());
        	//console.log("SCROLL  RIGHT");
             sheet_ui.animate({
                 scrollLeft: "+=585px"
                 }, 600,
                 function () {
	                if (sheet_ui.scrollLeft()>0){
		                action_container.find('button.sheet-up-action').addClass('active');
                    } 
			        if (sheet_ui.scrollLeft()>=asset_sheet_width-scrollAmount){ 
					    action_container.find('button.sheet-down-action').removeClass('active');
					    action_container.find('button.sheet-up-action').addClass('active');
					}  
                 }
	         ); 	              
        }
        if ($(this).hasClass('sheet-up-action') && asset_sheet_width > scrollAmount){
        	 console.log("RIGHT: "+sheet_ui.scrollLeft());
        	//console.log("SCROLL LEFT");
            sheet_ui.animate({
                 scrollLeft: "-=585px"
                 }, 600,
                 function () {
	                 if (sheet_ui.scrollLeft()<asset_sheet_width-scrollAmount){
		                 action_container.find('button.sheet-down-action').addClass('active');
                     }
			        if (sheet_ui.scrollLeft()<=0){ 
					    action_container.find('button.sheet-up-action').removeClass('active');
					    action_container.find('button.sheet-down-action').addClass('active');
					} 
                 }
	         );  
        }
    }); },200);
	
	//RMOVE CURRENT STICKER
	function removeCurrentSticker() {
		//console.log("remove current sticker");
		var stickerGroups = stickerLayer.getChildren();
		//console.log(stickerGroups);
	    var currentSticker = stickerGroups[stickerGroups.length-1].get('.sticker')[0];
	    var currentStickerPosition = stickerGroups[stickerGroups.length-1].getPosition();
		var currentStickerWidth = currentSticker.getWidth();
		var currentStickerHeight = currentSticker.getHeight();
		var currentStickerCenter_x = currentStickerPosition.x + currentStickerWidth/2;
		var currentStickerCenter_y = currentStickerPosition.y + currentStickerHeight/2;
	    var currentStickerType = stickerGroups[stickerGroups.length-1].getId();
		
		/*var stickerPoof = $('#sticker-canvas .sticker-poof');
		var stickerPoofWidth = stickerPoof.width();
		var stickerPoofHeight = stickerPoof.height();*/
		
		
    
	   /* $(stickerPoof)
		    .css('top', currentStickerCenter_y - stickerPoofHeight/2)
		    .css('left', currentStickerCenter_x - stickerPoofWidth/2)
		    .fadeIn(50, function() {
               $(this).delay(400).fadeOut(50);
            }); */
		    
		stickerGroups.pop();    
	    stickerLayer.draw();
	    
	    //console.log("remove sticker length: "+stickerLayer.getChildren().length);
	    if (stickerLayer.getChildren().length == 0){
		$('img.ui-draggable-disabled').draggable('enable').removeClass("done");
	    } 
	    
	    //console.log("remove sticker type: "+currentStickerType);
	    if (currentStickerType == "text" && textStickerCount > 0){
	        textStickerCount--;
	        $('#sheet-text-controls p.word-counter em').html(textStickerCount + " of " + textStickerThreshold);
	        $('.sticker-sheet.text-ui li img.ui-draggable-disabled').draggable('enable').removeClass("done");
	    }
	}
	
	//DELETE STICKER
	$('#delete-sticker-action').bind('click', function (){ 
		deselectSticker();
	    removeCurrentSticker();
	    $('#sticker-ui-holder').hide();
	});
	
	//FLIP THE STICKER
	$('#flip-sticker-action').bind('click', function (){ 
		if(!$('#flip-sticker-action').is('.inactive'))
		{
	     var stickerGroups = stickerLayer.getChildren();
	     var currentSticker = stickerGroups[stickerGroups.length-1].get('.sticker')[0];
	     var currentStickerOver = stickerGroups[stickerGroups.length-1].get('.stickerOver')[0];
	     var currentStickerWidth = currentSticker.getWidth();
	     
	     if (currentSticker.getScale().x == 1 ){
	         currentSticker.setScale(-1,1); 
	         currentStickerOver.setScale(-1,1);
	        // currentSticker.setX(currentStickerWidth);  
	     } else {
		     currentSticker.setScale(1,1); 
		     currentStickerOver.setScale(1,1);
		     //currentSticker.setX(0);       
	     }
	     
	     //console.log("scale: "+currentSticker.getScale().x);
	     stickerLayer.draw();
	 }
	}); 

	//NAV TABS HANDLER
	$('#tabs-nav li').bind('click',function(){
		//console.log('TAB CLICKED');
		//console.log($(this).is('#nav-bkg'))
		$('#tabs-nav li button').removeClass('active');
		$('#myTabs div.tab-content').addClass('hideTabContent');
		if($(this).is('#nav-char'))
		{
			$('#myTabs div#tabschar').removeClass('hideTabContent');
		}else if($(this).is('#nav-bkg'))
		{
			$('#myTabs div#tabsbkg').removeClass('hideTabContent');
		}else if($(this).is('#nav-prop'))
		{
			$('#myTabs div#tabsprop').removeClass('hideTabContent');
		}else if($(this).is('#nav-text'))
		{
			$('#myTabs div#tabstext').removeClass('hideTabContent');
		}
		$(this).children().addClass('active');
	});

	//CLEAR PROMPT  - YES / NO BUTTON
	$('#clear-all-prompt button').click(function(){
		if($(this).is('.btn-yes'))
		{
			//console.log("YES BUTTON");
			 stickerLayer.removeChildren();
		    stickerLayer.draw();
		    textStickerCount = 0;
		    $('img.ui-draggable-disabled').draggable('enable').removeClass("done"); 
		    
		    //$('#sheet-text-controls p.word-counter em').html(textStickerCount + " of " + textStickerThreshold);
		    $('.sticker-sheet.text-ui li img.ui-draggable-disabled').draggable('enable').removeClass("done");
		}
		$('#screen-overlay').addClass('inactive');
	});
}
	 

    return {
	init: function(config) { _init(config) },
	get_canvas: function() { return stickerCanvas },
	add_properties: function(obj) { _add_sticker_meta(obj) },
	submit: function(callback, callback_401) { _submit(callback, callback_401) },
	vote: function(sticker_id, callback){ _vote(sticker_id, callback) },
	get_stickers: function(parameters, callback){ _get_stickers(parameters, callback) },
	get_sticker: function(id, callback){ _get_sticker(id, callback) },
	get_user: function(id, parameters, callback){ _get_user(id, parameters, callback) }
    }


}

