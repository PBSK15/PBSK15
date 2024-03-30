/*****************************************************************************

Cat in the Hat site include.

This include is mandatory on each page of the Cat in the Hat site.
It is under PBS KIDS control, and allows PBS KIDS to make JS based changes to the
Cat in the Hat site as needed.

*****************************************************************************/

// Register a callback to run once the PBS object has been created.
siteLoad = function () {
    //alert(PBS.KIDS.base);
    //alert(PBS.KIDS.cdn_base);
}

// Include the master JS include.
document.write('<script type="text/javascript" src="/includes/javascript/sites/pbskids.js" ></script>');
