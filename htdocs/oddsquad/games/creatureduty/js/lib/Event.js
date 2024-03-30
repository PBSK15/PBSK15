/**
*   [DEPRECATED]
*   NOTE: In order to avoid name conflicts, BaseEvent should be used instead of this
*
*   type: String - The type of the event
*   data: * - Any object containing extra information related to the event
*/
function Event ( type, data ) {
    "use strict";

        // private functions
    var _this = this;
    var _type;
    
    function _construct ( type, data ) {
        _type = type;
        
        _this.data = data;
    }

    _this.toString = function () {
        return _type;
    }
    
    return _construct ( type, data );
} 