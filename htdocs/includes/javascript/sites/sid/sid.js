/*****************************************************************************

Sid site include.

This include is mandatory on each page of the Sid site.
It is under PBS KIDS control, and allows PBS KIDS to make JS based changes to the
Sid site as needed.

*****************************************************************************/

// Register a callback to run once the PBS object has been created.
siteLoad = function () {
    //alert(PBS.KIDS.base);
    //alert(PBS.KIDS.cdn_base);
}

// Include the master JS include.
document.write('<script type="text/javascript" src="https://pbskids.org/includes/javascript/sites/pbskids.js" ></script>');
