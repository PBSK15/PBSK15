/*
*
* Class Iterator
*   Allows the traversal of an array of values
*/

function Iterator ( array, index ) {

    var _this = this;
    var _index;
    var _array;

	function isEmpty( input ) { 
		if ( null == input || "" == input || input.length == 0 ) { 
			return true; 
		} return false; 
	}

    function _construct ( array, index ) {

        _array = array;
        _index = ( isEmpty ( index ) ) ? -1 : index;

        return _this;
    }


        /*
        * private members
        */
    function shuffleOrder () {
        return ( Math.round ( Math.random () ) - 0.5 );
    }
        /*
        * public members
        */
    _this.shuffle = function () {
        _array = _array.sort ( shuffleOrder );
    }

    _this.reverse = function () {
        _array = reverse ();
        if ( _index > 0 ) {
            _index = ( _array.length - 1 ) - _index;
        }
    }

    _this.reset = function () {
        _index = -1;
    }

    _this.clone = function () {
        return new Iterator ( _array.slice ( 0 ) ) ;
    }

    this.hasNext = function () {
        return ( ( _index + 1 ) < _array.length );
    }

    this.next = function () {
        return _array [ ++_index ];
    }

    this.peek = function ( offset ) {
        return _array [ Math.max ( 0, Math.min ( _index + offset, ( _array.length - 1 ) ) ) ];
    }

    this.hasPrevious = function () {
        return ( _index > 0 );
    }

    this.previous = function () {
        return _array [ --_index ];
    }

    this.toArray = function () {
        return _array.slice ( 0 );
    }

    return _construct ( array, index );
}