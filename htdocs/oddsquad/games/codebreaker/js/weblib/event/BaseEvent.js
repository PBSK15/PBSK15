/**
* @param type:String - The type of the event
* @param data:Object - Any object containing extra information related to the event
* @param subclassReference:Object [optional] - Reference to a subclass object that is
*       invoking this as its base class constructor
*/
function BaseEvent ( type, data, subclassReference ) {
    "use strict";

    // private functions
    var _this = subclassReference || this;
    var _type;
    
    function _construct ( type, data ) {
        _type = type;
        
        _this.data = data;

        return _this;
    }

    /*
    * Get the type of this event
    * @return:String - String representing the type of this event
    */
    _this.getType = function(){
        return _type;
    }

    _this.toString = function () {
        return _type;
    }
    
    return _construct ( type, data, subclassReference);
} 