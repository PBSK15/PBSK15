// get username and password
var username="";
var userid = "";
var cookieString = ""+document.cookie;
var cookieArray = cookieString.split(";");
for (var i=0;i<cookieArray.length;i++) {
	if ( cookieArray[i].indexOf("userid") != -1 ) {
		userid = cookieArray[i].split("=")[1];
	}
	if ( cookieArray[i].indexOf("username") != -1 ) {
		username = cookieArray[i].split("=")[1];
	}
}