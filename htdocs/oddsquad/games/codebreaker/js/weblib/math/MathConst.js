/*
* Class MathConst
* 	Static class that provides access to standard math constants
*/

/*
* Get the singleton reference to this class
*/
var MathConst = MathConst || new function MathConst(){}; // jshint ignore:line

//Multiplier to convert from degrees to radians
MathConst.DEG_TO_RAD = Math.PI / 180.0;
//Multiplier to convert from radians to degrees
MathConst.RAD_TO_DEG = 180.0 / Math.PI;

//Variants of PI
MathConst.TWO_PI = Math.PI * 2.0;
MathConst.HALF_PI = Math.PI / 2.0;
//Tau - A more reasonable value to use than PI?  The debate continues....
MathConst.TAU = MathConst.TWO_PI;