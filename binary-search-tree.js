/**
*	Binary Search Tree (BST)
*	unbalanced
*
*	@author Lakha Singh
*/

(function(){
	var CHILD = {
		left: 0,
		right: 1
	};

	// to create a new tree node
	var _createNode = function( data ){
		var children = [];

		// set left and right child
		children[0] = null;
		children[1] = null;

		return {
			parent: null,
			data: data,
			children: children
		}
	}

	// searches for data, returns its node from tree
	// if not found, it returns position where it can be inserted
	var _search = function( data, start ){
		var found = null, node;

		if ( !data ){
			return null;
		}

		// start from root
		node = start || root;

		while( node != null ){
			found = node;
			if ( data == node.data ){
				break;
			}else if ( data < node.data ){
				node = node.children[0];
			}else{
				node = node.children[1];
			}
		}

		return found;
	}

	var _print = function( node ){
		if ( !node ){
			return false;
		}

		if ( node.children[0] == null ){
			console.log( node.data );

			if ( node.children[1] == null ){
				return true;
			}else{
				return _print( node.children[1] );
			}
		}
		_print( node.children[0]);
		console.log( node.data );
		_print( node.children[1]);
	}

	// Root node for tree
	var root = null;

	var BST = function( data ){
		if ( data ){
			if ( typeof data == 'number' ){
				this.insert( data );
			}else if ( data.length ){
				for ( i = 0; i < data.length; i++ ){
					this.insert( data[i] );
				}
			}
		}
	}

	// Insert new node
	BST.prototype.insert = function( data ){
		var found = _search( data.data || data );

		var node;

		// Duplicates not suppoted
		if ( found && found.data == data ){
			console.log('Duplicate nodes are not currently Supported');
			return null;
		}

		node = data.data && data || _createNode( data );

		// tree not yet exists, create its root
		if( found == null ){
			root = node;
		}

		// Insert new node
		else {
			node.parent = found;

			if( (data.data || data) < found.data ){
				found.children[0] = node;
			}else{
				found.children[1] = node;
			}
		}
	}

	// delete node
	BST.prototype.delete = function( data ){
		var found = _search( data );

		var parent, leftChild, rightChild;

		// If node is found
		if ( found && found.data == data ){
			parent = found.parent;
			leftChild = found.children[0];
			rightChild = found.children[1];

			if ( parent.children[0] == found ){
				parent.children[0] = null;
			}else{
				parent.children[1] = null;
			}

			// Re-insert left / right subtrees
			this.insert( leftChild );
			this.insert( rightChild );
		}else{
			console.log('Data doesn\'t exists');
		}
	}

	// Search for node
	BST.prototype.search = function( data ){
		var found = _search( data );

		// when found
		if ( found && found.data == data ){
			return data;
		}else{
			return -1;
		}
	}

	// Prints tree
	BST.prototype.print = function(){
		var node = root;

		_print( node );
	}

	// Supporting browser and node env
	if ( typeof window === 'object' ){
		window.tree = window.tree || {};
		window.tree.BST = BST;
	}
	else if ( typeof module === 'object' ){
		module.exports = BST;
	}
}());
