
/*
* Check if a particular value is undefined
* @return:[Boolean] - True if the value is undefined, false if it is defined
*/
function isUndefined ( value ) {
    "use strict";
    return ( typeof ( value ) === String ( undefined ) );
}

/*
* Check if a particular value is defined
* @return:[Boolean] - True if the value has been defined, false if it is undefined
*/
function isDefined ( value ) {
    "use strict";
    return ( typeof ( value ) !== String ( undefined ) );
}

function isEmpty ( value ) {
    "use strict"; 
    return ( typeof ( value ) === String ( undefined ) || value === null || value === false );
}

function setDefault ( value, defaultVal ) {
    "use strict";
    return ( isUndefined ( value ) ) ? defaultVal : value;
}

function isNumber ( value ) {
    "use strict";
    return !isNaN ( parseFloat ( value ) ) && isFinite ( value );
}