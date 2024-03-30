//require.include("weblib/core/Util");
//require.include("weblib/event/AbstractEventDispatcher");

/**
*	Class AbstractObject
*	Provides a base for all classes which includes:
*		Event Dispatching 
*		Child / Parent relationships
*		Component registration and removal
*/
function AbstractObject ( reference ) {

	var _this = AbstractEventDispatcher ( reference );
	var _components;
	var _children;
	var _parent;
	var _id;

	function _construct  () {
		_children = [];
		_components = [];

		return _this;
	}

	_this.parent = function () {
		return _parent;
	}

	_this.id = function ( id ) {
		return ( isEmpty ( id ) ) ? id : _id = id;
	}

	_this.addChild = function ( gameObject ) {

			// first remove the child from the previous parent ( if one is available )
		var gameObjectParent = gameObject.parent ();
		if ( !empty ( gameObjectParent ) )
			gameObjectParent.removeChild ( gameObject );
		
			// just add the child to the 
		_children.push ( gameObject );

			// return "this" for daisy chaining
		return _this;
	}

	_this.removeChild = function ( gameObject ) {
			// if it's already a child take it out and push it to the end
		var indexOf = _children.indexOf ( gameObject )
		if ( indexOf > -1 )
			_children.splice ( indexOf, 1 );
		

			// return "this" for daisy chaining
		return _this;
	}

	_this.getChildById = function ( id ) {
		
			// loop through the children and see if any has 
		for ( var i = 0; i < _children; i++ ) {
			var child = _children [ i ];
			if ( child.id () == id )
				return child;

		}

		return undefined;
 	}

 	_this.addComponent = function ( component ) {

 			// some error handling. Can't add multiple component of the same instance. LOL! then just add it
 		_this.removeComponent ( component );
 		_components.push ( component );

 			// return "this" for daisy chaining
 		return _this;
 	}

 	_this.removeComponent = function ( component ) {
 		var indexOf = _components.indexOf ( component );
 		if ( indexOf > -1 )
			_children.splice ( indexOf, 1 );

 			// return "this" for daisy chaining
 		return _this;
 	}

 	_this.getComponentById = function ( id ) {
 		for ( var i = 0; i < _components.length; i++ ) {
 			var child = _components [ i ];
 			if ( child.id () == id )
 				return _components [ i ];

 		}

 		return undefined;
 	}

 	_this.edit = function ( $container ) {
 		for ( var i = 0; i < _components.length; i++ )
 			_components [ i ].edit ( $container );

 	}

 	_this.begin = function () {
 		for ( var i = 0; i < _components.length; i++ )
 			_components [ i ].begin ();
 	}

 	_this.update = function () {
 		for ( var i = 0; i < _components.length; i++ )
 			_components [ i ].update ( _children );

 	}

 	_this.end = function () {
 		for ( var i = 0; i < _components.length; i++ )
 			_components [ i ].end ();

 	}


	return _construct ();
}