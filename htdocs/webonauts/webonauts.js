var get_movie = function(movieName) {
    return document.getElementById(movieName);
};

var prompt_login = function() {
    PKG.prmpt('?refresh=0');
};

var check_login_status = function() {
    return document.cookie.indexOf('pbskids.userid') > 0;
}

var toggle_save_btn = function() {
    // If user is not logged in show a login button
    if (check_login_status()) {
	$("a.floatLogButton").hide();
    } else {
	$("a.floatLogButton").show();
    }
}

// Shortcut to bind to the document.ready event
jQuery(function() {

    toggle_save_btn();
    
    $("a.floatLogButton").click(function(e){
	e.preventDefault();
	prompt_login();
    });
    
    // SWFObject Loading Webonauts
    var flash_vars = {
	asset_prefix: PBS.KIDS.cdn_base + '/webonauts/',
	api_url: PBS.KIDS.base + '/webonauts/'
    };
    
    if (document.cookie.indexOf('pbskids.userid') > 0) flash_vars['user_id'] = parseInt(document.cookie.split('pbskids.userid')[1].split(';')[0].substr(1));
    
    var params = {
	allowScriptAccess: 'always',
	wmode: 'opaque',
	quality: 'high',
	bgcolor: '#000000'
    };
    
    swfobject.embedSWF(PBS.KIDS.cdn_base + '/webonauts/Main-debug.swf', 'flash_game', '950', '450', "9.0.159.0", 'expressInstall.swf', flash_vars, params);
});