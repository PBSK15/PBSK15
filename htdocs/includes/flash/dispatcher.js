var MM_FlashSnifferURL = "/includes/flash/detectFlash.swf";

var MM_latestPluginRevision = new Object();
MM_latestPluginRevision["10.0"] = new Object();
MM_latestPluginRevision["9.0"] = new Object();
MM_latestPluginRevision["8.0"] = new Object();
MM_latestPluginRevision["7.0"] = new Object();
MM_latestPluginRevision["6.0"] = new Object();
MM_latestPluginRevision["5.0"] = new Object();
MM_latestPluginRevision["4.0"] = new Object();
MM_latestPluginRevision["3.0"] = new Object();
MM_latestPluginRevision["2.0"] = new Object();

MM_latestPluginRevision["10.0"]["Windows"] = 0;
MM_latestPluginRevision["10.0"]["Macintosh"] = 0;

MM_latestPluginRevision["9.0"]["Windows"] = 0;
MM_latestPluginRevision["9.0"]["Macintosh"] = 0;

MM_latestPluginRevision["8.0"]["Windows"] = 0;
MM_latestPluginRevision["8.0"]["Macintosh"] = 0;

MM_latestPluginRevision["7.0"]["Windows"] = 0;
MM_latestPluginRevision["7.0"]["Macintosh"] = 0;

MM_latestPluginRevision["6.0"]["Windows"] = 23;
MM_latestPluginRevision["6.0"]["Macintosh"] = 23;

MM_latestPluginRevision["5.0"]["Windows"] = 42;
MM_latestPluginRevision["5.0"]["Macintosh"] = 41;

MM_latestPluginRevision["4.0"]["Windows"] = 28;
MM_latestPluginRevision["4.0"]["Macintosh"] = 27;
MM_latestPluginRevision["4.0"]["Unix"] = 12;

MM_latestPluginRevision["3.0"]["Windows"] = 10;
MM_latestPluginRevision["3.0"]["Macintosh"] = 10;

MM_latestPluginRevision["2.0"]["Windows"] = 11;
MM_latestPluginRevision["2.0"]["Macintosh"] = 11;


var MM_FlashControlInstalled;	// is the Flash ActiveX control installed?
var MM_FlashControlVersion;	// ActiveX control version if installed

function MM_FlashInfo()
{
    if (navigator.plugins && navigator.plugins.length > 0)
    {
		this.implementation = "Plug-in";
		this.autoInstallable = false;	// until Netscape SmartUpdate supported

		// Check whether the plug-in is installed:

		if (navigator.plugins["Shockwave Flash"])
		{
		    this.installed = true;

		    // Get the plug-in version and revision:

		    var words =
			navigator.plugins["Shockwave Flash"].description.split(" ");

		    for (var i = 0; i < words.length; ++i)
		    {
			if (isNaN(parseInt(words[i])))
			continue;

			this.version = words[i];

			this.revision = parseInt(words[i + 1].substring(1));
		    }
		}
		else
		{
		    this.installed = false;
		}
    }
    else if (MM_FlashControlInstalled != null)
    {
		this.implementation = "ActiveX control";
		this.installed = MM_FlashControlInstalled;
		this.version = MM_FlashControlVersion;
		this.autoInstallable = true;
    }
    else if (MM_FlashDetectedSelf())
    {
		this.installed = true;
		this.implementation = "Plug-in";
		this.autoInstallable = false;
    }

    this.canPlay = MM_FlashCanPlay;
}


var MM_FlashPluginsPage = "http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash";

function MM_FlashDispatch(contentURL, contentVersion, requireLatestRevision,
			  upgradeURL, install, installURL, altURL,
			  overridePluginsPage)
{
    if (overridePluginsPage == null)
    {
		alert("ERROR: MM_FlashDispatch() called with too few arguments.");
		return;
    }


    if (overridePluginsPage && installURL.substring(0, 7) != "http://")
    {
		alert("ERROR: MM_FlashDispatch() called with relative URL" +
		    " for PLUGINSPAGE (" + installURL + ")");

		return;
    }


    var player = new MM_FlashInfo();

    if (player.installed == null)
    {
		var sniffer =
		    "<EMBED HIDDEN=\"true\" TYPE=\"application/x-shockwave-flash\"" +
			  " WIDTH=\"18\" HEIGHT=\"18\"" +
			  " BGCOLOR=\"" + document.bgcolor + "\"" +
			  " SRC=\"" + MM_FlashSnifferURL +
				"?contentURL=" + contentURL + "?" +
				"&contentVersion=" + contentVersion +
				"&requireLatestRevision=" + requireLatestRevision +
				"&latestRevision=" +
				    MM_FlashLatestPluginRevision(contentVersion) +
				"&upgradeURL=" + upgradeURL +
				"\"" +
			  " LOOP=\"false\" MENU=\"false\"" +
			  " PLUGINSPAGE=\"" +
			    (overridePluginsPage ? installURL : MM_FlashPluginsPage) +
			    "\"" +
		    ">" +
		    "</EMBED>";

		document.open();
		document.write("<HTML><HEAD><TITLE>");
		document.write("Checking for the Flash Player");
		document.write("</TITLE></HEAD>");
		document.write("<BODY BGCOLOR=\"" + document.bgcolor + "\">");
		document.write(sniffer);
		document.write("</BODY>");
		document.write("</HTML>");
		document.close();
    }
    else if (player.installed)
    {
	if (player.canPlay(contentVersion, requireLatestRevision))
	{
	    location.replace(contentURL);
	}
	else
	{
	    location = player.autoInstallable ? contentURL : upgradeURL;
	}
    }
    else if (install)
    {
		location = player.autoInstallable ? contentURL : installURL;
    }
    else
    {
		location.replace(altURL);
    }
}


function MM_FlashRememberIfDetectedSelf(count, units)
{
    // the sniffer appends an empty search string to the URL
    // to indicate that it is the referrer

    if (document.location.search.indexOf("?") != -1)
    {
		if (!count) count = 60;
		if (!units) units = "days";

		var msecs = new Object();

		msecs.minute = msecs.minutes = 60000;
		msecs.hour = msecs.hours = 60 * msecs.minute;
		msecs.day = msecs.days = 24 * msecs.hour;

		var expires = new Date();

		expires.setTime(expires.getTime() + count * msecs[units]);

		document.cookie =
		    'MM_FlashDetectedSelf=true ; expires=' + expires.toGMTString();
    }
}


function MM_FlashDemur(count, units)
{
    if (!count) count = 60;
    if (!units) units = "days";

    var msecs = new Object();

    msecs.minute = msecs.minutes = 60000;
    msecs.hour = msecs.hours = 60 * msecs.minute;
    msecs.day = msecs.days = 24 * msecs.hour;

    var expires = new Date();

    expires.setTime(expires.getTime() + count * msecs[units]);

    document.cookie =
	'MM_FlashUserDemurred=true ; expires=' + expires.toGMTString();


    if (!MM_FlashUserDemurred())
    {
		alert("Your browser must accept cookies in order to " +
		      "save this information.  Try changing your preferences.");

		return false;
    }
    else
		return true;
}


function MM_FlashUserDemurred()
{
    return (document.cookie.indexOf("MM_FlashUserDemurred") != -1);
}


function MM_FlashLatestPluginRevision(playerVersion)
{
    var latestRevision;
    var platform;

    if (navigator.appVersion.indexOf("Win") != -1)
		platform = "Windows";
    else if (navigator.appVersion.indexOf("Macintosh") != -1)
		platform = "Macintosh";
    else if (navigator.appVersion.indexOf("X11") != -1)
		platform = "Unix";

    latestRevision = MM_latestPluginRevision[playerVersion][platform];

    return latestRevision;
}


function MM_FlashCanPlay(contentVersion, requireLatestRevision)
{
    var canPlay;

    if (this.version)
    {
		canPlay = (parseInt(contentVersion) <= this.version);

		if (requireLatestRevision)
		{
		    if (this.revision &&
			this.revision < MM_FlashLatestPluginRevision(this.version))
		    {
			canPlay = false;
		    }
		}
    }
    else
    {
		canPlay = MM_FlashDetectedSelf();
    }

    return canPlay;
}


function MM_FlashDetectedSelf()
{
    return (document.cookie.indexOf("MM_FlashDetectedSelf") != -1);
}
