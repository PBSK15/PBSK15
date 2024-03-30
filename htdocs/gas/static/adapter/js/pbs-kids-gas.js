/*
 *
 * PBS KIDS G.A.S.
 *
 *
 */ 

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

PBS.KIDS.GAS = (function(){

    var _init = function(){
    }
    
    return {
	init: function(config){ return _init(config) }
    }
})()


FUNCTIONS = {
    'random-item-inputs' : function(parameters){
	var list = parameters['list'];
	return list[Math.floor(Math.random()*list.length)];
    },
    'random-number-inputs': function(parameters){
	var max = parameters['max'];
	var min = parameters['min'];
	var step = parameters['step'];
	var factor = 1/parseFloat(step);
	var r =  Math.random()*(max-min); 
	return Math.min(Math.round(r*factor)/factor + parseFloat(min), parseFloat(max));
    }
}

PBS.KIDS.GAS = (function(init){

    var _target = init;
    var _gas_service_url = '/gas/api/';
    var _tracked = {};
    var _event_counter = {};
		
    function slugify(text) {
		text = text.replace(/[^-a-zA-Z0-9,&\s]+/ig, '');
	text = text.replace(/-/gi, "_");
	text = text.replace(/\s/gi, "-");
	return text;
    }

    var _serialize_obj = function(obj){
	var qs_components = new Array();
	for (var key in obj){
	    for (var index=0; index < obj[key].length; index++){	   
	       qs_components.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key][index]) );
	    }
	}
	return qs_components.join('&')
    }

    var _track_event = function(event_name){
	if (_event_counter[event_name] == undefined){
		_event_counter[event_name] = 1;
	}
	else{
		_event_counter[event_name]++;
	}
	//Add counter to event label
	_add_to_tracked('__count__', _event_counter[event_name]);
	var label = _serialize_obj(_tracked);
	GA_obj.trackEvent('PBS KIDS GAS; Game ' + _target['game_title'], event_name, label, 0);
	_remove_from_tracked('__count__');
    }

    var _add_to_tracked = function(key, value){
	if (_tracked.hasOwnProperty(key)){
		_tracked[key].push(value);	
	}
	else{
		_tracked[key] = [value];
	}
    }

    var _remove_from_tracked = function(key){
	if (_tracked.hasOwnProperty(key)){
		delete _tracked[key];
	}
    }

    var _display_configuration = function(config_id){
	var gas_url = _gas_service_url + 'configuration/' + config_id + '.json';
	$.ajax({url: gas_url,
		success:  function(data){ 
		    $('root ul .leaf').remove();
		    _add_to_dom($('root ul'), data['repr']);
		    $('#context-panel .active-node-form').html('');
		    $('#update-active-node-data').hide(); 
		    $("root").jstree("clean_node", ".leaf");
		    $("root").jstree("open_all", ".leaf");
		    updateNodeCanvas();   
		},
		dataType: 'json'
	       });
    }
    
    var _display_version = function(config_id, version_id){
	var gas_url = _gas_service_url + 'configuration/' + config_id + '/version/' + version_id + '.json';
	$.ajax({url: gas_url,
		success:  function(data){ 
		    $('root ul .leaf').remove();
		    _add_to_dom($('root ul'), data['repr']);
		    $('#context-panel .active-node-form').html('');
		    $('#update-active-node-data').hide(); 
		    $("root").jstree("clean_node", ".leaf");
		    $("root").jstree("open_all", ".leaf");
		    updateNodeCanvas();   
	           alert("Changed to version " + version_id); 		
		},
		dataType: 'json'
	       });
    }


    var _evaluate = function(operand, attribute_name){
	//This function recursively looks for functions to evaluate
	
	//The fully evaluated object
	var computed = {};

	//At the bottom of the recursion
	//Basic object	
	if (typeof operand == 'number' || typeof operand == 'string'){
		return operand
	}
	//Function to evaluate
	//It may contain attributes of the node
	if (typeof operand == 'object' && operand.hasOwnProperty("#function") ){

		//Find attributes of the node if any
		var function_attributes = {};
		//The stripped function object, without node attributes
		var evaluated_function = FUNCTIONS[operand["#function"]["name"]](operand["#function"]["_params"]);

		for (var a in operand){
		    if (a.match(/^_/)){
			var evaluated_attribute = _evaluate(operand[a], a);
			function_attributes[a.replace(/--[^-]$/, '')] = evaluated_attribute;
		    }
		}

		//If the node has attributes we must put the evaluated function in the #value attribute
		if (! $.isEmptyObject(function_attributes)){
		    computed = $.extend({}, function_attributes);
		    computed["#value"] = evaluated_function;
		    _add_to_tracked(attribute_name, computed["#value"]);
		}
		else{
		    computed = evaluated_function;
		    _add_to_tracked(attribute_name, computed);
		}
		return computed;
	}

	//Not a basic object or function
	//Iterate thorugh attributes and evaluate each
	for (var attr in  operand){

	    //Everything after the final - is an identifier only for tracking 
	    var stripped_attr = attr.replace(/--[^-]$/, '');	

	    //Many sibling nodes with same name
	    //Evaluate each one and put them in array   	
	    if ( operand[attr] instanceof Array ){
		var _computed_items = Array();
		for (var i=0; i < operand[attr].length; i++){
		    _computed_items.push(_evaluate(operand[attr][i], attr));
		}
		computed[stripped_attr] = _computed_items;
	    }
	    //This is the regualar case where attributes are children nodes or attributes
	    //Go deeper in recursion	
	    else {
		computed[stripped_attr] = _evaluate(operand[attr], attr)
	    }
	}
	return computed
    }

    var _get_configuration = function(){
	_tracked = {};
	var config_id = _target['config_id'];
	var config;
	var gas_url = _gas_service_url + 'configuration/' + config_id + '.json';
		
	var set_configuration = function(input){
		_target['game_title'] = input['game_title'];
		config = _evaluate(input['repr']);		
	}

	var _to_json = function(c){
	    return JSON.stringify(c);
	}

	var _to_xml = function(c){
	    return _json_to_xml(c, '<?xml version="1.0" encoding="utf-8" ?>');
	}

	var xhr = $.ajax({
		url: gas_url,
		success:  function(data){ 
			set_configuration(data);
		},
		error: function(r, t, m){
			if(_target['default']){
				set_configuration(_target['default']);
			}
			else{
				set_configuration({});
			}
		},
		dataType: 'json',
		async: false
	});

	return {
		to_xml: function(){ return _to_xml(config) },
		to_json: function(){ return _to_json(config) }
	}

    }

    var _init_console = function(){

	if (_target.config_id){
	    _display_configuration(_target.config_id)
	}
	else{

	}
    };

    var _create_dom_node = function(name, data){
	var template = Handlebars.templates['node-template.html'];
	var context= {'name': name, 'data':data};
	return $(template(context));
    }
    
    var _create_function_node = function(obj, name){
	var template_name;
	
	if (obj["name"] == "random-item-inputs" ){
	    template_name = "random-item-inputs.html";
	}
	if (obj["name"] == "random-number-inputs" ){
	    template_name = "random-number-inputs.html";
	}
	var template = Handlebars.templates[template_name];
	var context = {"value": obj, "name":name}
	var value_node    = template(context);
	return $(value_node);
	
    }

    var _create_value_node = function(name, value){
	var template_name;
	if (typeof value == "string" ){
	    template_name = "string-input-template.html";
	}
	if (typeof value == "number" ){
	    template_name = "number-input-template.html";
	}
	
	var template = Handlebars.templates[template_name];
	var context = {"value": value, "name":name }
	var value_node    = template(context);
	return $(value_node);
    }

    var _find_attributes = function(item){
	//collect attributes of the node
	//Attributes are identified by a leadning underscore
	var attributes = {}
	for (attr in item){
	    //Atributes are elements that start with underscore
	    if (attr.match(/^_/)){
		attributes[attr] = item[attr]
		//delete item[attr];
	    }
	}
	return attributes;
    }

    var _add_attributes = function(item, data){
	//find the attributes of a node and attach the to the gasml representation
	var attributes = _find_attributes(data);
	var new_form_attribute; 
	//Add attributes to node
	if ( ! $.isEmptyObject(attributes) ){
	    for (a in attributes){
		//Add attributes to this element 
		item.attr('data-' + a.replace('_', ''), JSON.stringify(attributes[a]));
		//Add them to the editing form
		new_form_attribute = $('<p class="node-attr input-group clearfix">\
        <label>Attr:</label>\
        <input name="attr-value-1" placeholder="Key=\'Value\'" type="text" >\
        <button class="delete-this-attr button delete">Delete</button>\
        </p>')
		new_form_attribute.find('input').val(a.replace(/^_/,'') + "=" + JSON.stringify(attributes[a]))
		item.find('div.node-attr-form').prepend(new_form_attribute)
	    }
	}	
    }

    var _add_to_dom = function(root, data){
	//root is the <ul> DOM element that 
	//contains the children nodes <li>
	//data will be appended into

	//A clone of the data
	var _data_copy;
	//The new node(s) that will be appended to root
	var new_node; 
	//The node that new items are appended to
	var current_node = root.siblings('a').find('node');

	if (typeof data === 'object'){

	    /* An object can represent:
	        1) A node with chidren nodes
	        2) A node with attributes
	        3) A function 
                4) A value
            */
	    _data_copy = jQuery.extend({}, data);

	    //Find attributes (start with _)
            //and add them to the current node			
	    _add_attributes(current_node, _data_copy);

	    //Loop though the object's attributes
	    //normally attribtes are children
	    //but children may also be placed in the #children attribute
            //attributes starting with _ are node element user defined attributes
	    for (var attr in _data_copy){

		if (attr.match(/^_/)){
		    //Skip attributes
		    //we have already treated the above
		    continue;
		} 
		
		if (attr == '#children'){
		    //If this element has #children attribute
		    //Drop everything and add the children to this item 
		    _add_to_dom(root, _data_copy['#children']);
		    return;
		}

		if (attr == '#value'){
		    //If this element has #value attribute
		    //Drop everything and add the value to this item 
		    _add_to_dom(root, _data_copy['#value']);
		    return;
		}

		if (_data_copy[attr] instanceof Array ){
		    //The value is an array
		    //which means its elements are siblings 
	            //and we must build 
		    //mulitple nodes to be placed under the 
		    //same root
		    var sibling_data;
		    var new_sibling_node;
		    var new_value_node;
		    //The list of siblings
		    var sibling_nodes = Array();
		    //Loop thourhg the array 
		    //and build a new sibling for each item
		    for (var j=0; j < _data_copy[attr].length ; j++){
			    new_sibling_node = _create_dom_node(attr, _data_copy[attr][j])
			    _add_to_dom(new_sibling_node.find('ul'), _data_copy[attr][j]);
			sibling_nodes.push(new_sibling_node);
		    }		    
		    //Now attach all siblings to the root
		    for (var i=0; i < sibling_nodes.length; i++){
			root.append(sibling_nodes[i]);
		    }
		}
		else {
		    if (attr == '#function'){
			current_node.find('value').attr('data-type', 'function'); 
			var function_value_form = current_node.find('value').find('form'); 
			//Set the selectors to the correct values (function/function-name)
			function_value_form.find('div.value-type-select select option').filter(
			    function() {
				return $(this).val() == "function"; 
			    }).attr('selected', true);
			function_value_form.find('div.function-type-select').addClass('visible');    
			function_value_form.find('div.function-type-select select option').filter(
			    function() {
				return $(this).val() == _data_copy["#function"]["name"]; 
			    }).attr('selected', true);
			new_node = _create_function_node(_data_copy["#function"], current_node.attr('name'));
			function_value_form.find('fieldset').remove();
			function_value_form.append(new_node);
		    }
		    else{
			new_node = _create_dom_node(attr, _data_copy[attr]);
			//Repeat the insertion process with the child node
			if (new_node){
			    //If no new node, it's probably in the #children
			    _add_to_dom(new_node.find('ul'), _data_copy[attr]);
			    root.append(new_node);
			}
		    }
		}
	    }
	}
	else if (typeof data === 'number' || typeof data === 'string'){
	    current_node.find('value').attr('data-type', (typeof data)); 
	    var current_value_form = current_node.find('value').find('form');
	    current_value_form.find('div.value-type-select select option').filter(
		function() {
		    return $(this).val() == typeof data; 
		}).attr('selected', true);
	    new_node = _create_value_node(current_node.attr('name'), data);
	    current_value_form.find('fieldset').remove();	
	    current_value_form.append(new_node);
	}
    }

    var _make_function_json = function(node){
	//This translates a function markup
	//into an object with 'name', '_params' properties
	var name = node.attr('id');
	var parameters = {}
	if (name == 'random-item-inputs'){
	    var text = node.find('textarea').html();
	    parameters = {"list": JSON.parse(text)}
	}
	if (name == 'random-number-inputs'){
	    var min = node.find("input[name='random-number-min']").val();
	    var max = node.find("input[name='random-number-max']").val();
	    var step = node.find("input[name='random-number-step']").val();
	    parameters = {"min":min, "max":max, "step":step}
	}
	return {"name":name, "_params":parameters}
    }

    var _add_to_json = function(nodes){
	//Nodes are <li>s
	//This is the new json representation of the nodes
	var o = {};
	//This is attribute name in the object (corresponding to the node name)
	var key;
	//This is the value of the object attribute o[key] value
	var value;	
	//This is the actual <node> element
	var node;

	if (nodes.length > 1){
	    //There are mulitple nodes
	    //Find their names and place them in
	    //Dictionary mapping node names to nodes 
	    var _nodes_by_name = {};
	    $.each(nodes, function(index, item){
		node = $(item).eq(0);
		//Find the name of the node
		key = node.children('a').children('node').attr('name');
		if ( _nodes_by_name.hasOwnProperty(key) ){
		    _nodes_by_name[key].push(node) 
		}
		else {
		    _nodes_by_name[key] = Array(node);
		}
	    })
	    //This array holds the values for each key
	    var values;
	    for( var _key in _nodes_by_name){
		values = [];
		for (var i=0; i < _nodes_by_name[_key].length; i++){
		    //These nodes are the same type (ie {"a":1}, {"a":2})
		    //We must put them under the same key ("a")
		    //And put the values in an array
		    value = _add_to_json(_nodes_by_name[_key][i])
		    values.push(value[_key])
		}
		//Now put the array of values in the object
		if (values.length == 1){
		    o[_key] = values[0];
		}
		else{
		    o[_key] = values;
		}
	    }
	}
	else{
	    //There is only one node
	    //Find the actual node element insed the li
	    var node = nodes.children('a').children('node');
	    //Find the name of the node
	    key = node.attr('name');
	    //find if the node has a child value node, and get its value
	    var node_value = node.find('value[data-value-state="active"] input[name="string-value"]').val();
	    //Is it a string?
	    if (typeof node_value == "undefined"){ 	
		node_value = parseFloat(node.find('value[data-value-state="active"] input[name="number-value"]').val()) 
	        //Is it a number?
		if ( isNaN(node_value) ){
			node_value = undefined;
		}
	    }
	    //Find if the node has a function node
	    var function_node = node.find('value[data-type="function"]');
	    if(! function_node.attr('data-value-state') == 'active'){
		function_node = undefined;
		}

            //Look for children
	    var children = node.parent().siblings('ul').children('li');
	    //Look for attributes
	    var attributes = node[0].attributes;
	    //User defined attributes
	    var user_attributes = {}
	    for(var j=0; j < attributes.length; j++){
		var _val;
		try{
		    _val = JSON.parse(attributes[j].value);
		}
	        catch(err){
		    _val = attributes[j].value;
	        }
		if ( attributes[j].name.match(/^data-/)){
		    user_attributes[attributes[j].name.replace("data-","_")] = _val;
		}
	    }

	    //If there are attributes
	    //The value is an object with attributes #value, #children
	    if (! $.isEmptyObject(user_attributes) || function_node.length > 0){
		value = $.extend({}, user_attributes)
		if (typeof node_value != "undefined" ){
		    value["#value"] = node_value;
		    o[key] = value;
		    return o;
		}
		if (children.length > 0){
		    value["#children"] = _add_to_json(children);  
		    o[key] = value;
		    return o;
		}
		if (function_node.length > 0){
		    value["#function"] = _make_function_json(function_node.find('fieldset'));
		    o[key] = value;
		    return o;
		}
	    }

	    //If it element has a value, but no attributes
	    if (typeof node_value != "undefined" ){
		//Attach it to the object and return the object
		o[key] = node_value;
		return o;
	    }
	    else{
		//Go deeper in the structure
		//Find a child node
		//Create the json object and make it the value for the current key/attribute
		value = _add_to_json(children);
		//Attach it to the object
		if (o.hasOwnProperty(key)){ 
		    //There is already a value assigned to this
		    if (o[key] instanceof Array){
			o[key].push(value)
		    }
		    else{
			o[key] = Array(o[key])
			o[key].push(value)
		    }
		}
		else{
		    o[key] = value;
		}
	    }
	}
	return o;
    }

    var _json_to_xml = function(json, head){
	
	var _xml = head || '';

	if (typeof json == 'number' || typeof json == 'string'){
	    return json;
	}

	for (var attr in json){
	    var attributes = _find_attributes(json[attr]);

	    if (json[attr] instanceof Array){
		var _temp_json = {};
		for(var i=0; i < json[attr].length; i++){
		    _temp_json[attr] = json[attr][i];
		    _xml = _xml + _json_to_xml(_temp_json);
		}
		return _xml;
	    }
	    
	    if (! $.isEmptyObject(attributes)){
		_xml = _xml + '<' + attr;
		for( var  a  in attributes){
		    _xml = _xml + " " + a.replace(/^_/,'') + '="' + attributes[a] + '" ';
		}
		_xml = _xml + ' >';
		if (json[attr].hasOwnProperty("#children")){
		    _xml = _xml + _json_to_xml(json[attr]["#children"])
		} 
		if (json[attr].hasOwnProperty("#value")){
		    _xml = _xml + json[attr]["#value"].toString();
		} 
		_xml = _xml + '</' + attr + '>';		
	    }
	    else {
		_xml = _xml + '<' + attr + '>';
		_xml = _xml + _json_to_xml(json[attr])
		_xml = _xml + '</' + attr + '>';
	    }
	}
	return _xml;
    }

    var _gasml_to_json = function(root){
	var _data = {};
	_data = _add_to_json($('root > ul > li'))
	return _data;
	return JSON.stringify(_data);
    }

    var _save = function(update, tag_data){
	var _json = _gasml_to_json($('root'));
	var _save_url;
	var title;
	var comment;
	var data;

	if (_target.config_id && update){
	    _save_url = '/gas/api/configuration/' + _target.config_id + '.json';
	    title = $('#real-config-title').val();
	    data = {'representation': JSON.stringify(_json), 'title':title}
	    if (!$.isEmptyObject(tag_data)){
		data['tag'] = tag_data['tag'];
		data['comment'] = tag_data['comment'] 
	    }	
	}
	else{
	    _save_url = '/gas/api/game/' + _target.game_id + '/configurations.json';
	    title = $('#real-config-title').val();
	    comment = "First commit";
	    tag = "First commit";	
	    data = {'representation': JSON.stringify(_json), 'comment': comment, 'title':title, 'tag':tag}
	}
	$.ajax({
	    'url' : _save_url,
	    'type': 'POST',
	    'dataType': 'json', 
	    'complete': function(response){ 
		if (response.status == 409){
		    alert("A configuration with this name already exists.");
		}
		else{
		    var data = JSON.parse(response.responseText);
		    _target.config_id = data.guid
		    if (update){
			alert("The configuration was saved.");
		    }	
		    else {
			window.location.href = '/gas/console/game/' + _target.game_id + '/configuration/' + _target.config_id + '/';
            	    }	
		}
	    },
	    'data': data
	})
    }

    return  {
	update: function(){
	    _save(true, {});
	},		
	tag: function(tag_data){
	    _save(true, tag_data);	
	},
	save: function(){ 
	    _save(false); 
	},
	show: function(){
	    var _json = _gasml_to_json($('root')); 
	    return _evaluate(_json)	 
	},
	to_xml: function(json){ 
	    return _json_to_xml(json, '<?xml version="1.0" encoding="utf-8" ?>')
	},
	get_info: function(){ 
	    return _target; 
	},
	console: function() { 
	    _init_console(); 
	},
	get_configuration: function() { 
	    return _get_configuration(); 
	},
	display_version: function(version_id){
	    return _display_version(_target.config_id, version_id);
	},
	track: function(event){
	    return _track_event(event);
	}
    }

})

