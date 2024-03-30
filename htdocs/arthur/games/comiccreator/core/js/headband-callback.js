PBS.KIDS.$_auth('body').bind('cbox_closed', function(){

    //If defined, perform the login callback
    if (typeof(post_login_action) != 'undefined' && typeof(post_login_action['func']) == 'function'){
	post_login_action['func'].apply(window, post_login_action['args']) 
	post_login_action = {};
    }
    
})
