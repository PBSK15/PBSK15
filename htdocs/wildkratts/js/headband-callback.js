
	// PBS
	
	PBS.KIDS.$_auth('body').bind('cbox_closed', function() {
		if ( typeof document.getElementById('flashcontent').finishedLogin != 'undefined' )
		{
			document.getElementById('flashcontent').finishedLogin();
		}
	});
	
	
	// TVO
	
	if ( typeof(PKG) == 'undefined' )
	{
		PKG = {
			prmpt: function(arg) {				
				if ( typeof document.getElementById('flashcontent').login != 'undefined' )
				{
					document.getElementById('flashcontent').login();
				}
			},
			finish: function() {
				if ( typeof document.getElementById('flashcontent').finishedLogin != 'undefined' )
				{
					document.getElementById('flashcontent').finishedLogin();
				}
			}
		};
	}
	
	
	// GENERAL	
	
	if ( window.location.search.indexOf('logout=true')!=-1 )
	{
		eraseCookie('pbskids.userid');
	}	

