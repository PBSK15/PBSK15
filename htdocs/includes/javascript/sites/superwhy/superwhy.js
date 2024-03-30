/*****************************************************************************

SuperWhy site include.

This include is mandatory on each page of the SuperWhy site.
It is under PBS control, and allows PBS to make JS based changes to the
SuperWhy site as needed.

*****************************************************************************/

// Register a callback to run once the PBS object has been created.
siteLoad = function () {
    //alert(PBS.KIDS.base);
    //alert(PBS.KIDS.cdn_base);
}

// Include the master JS include.
document.write('<script type="text/javascript" src="/includes/javascript/sites/pbskids.js" ></script>');
