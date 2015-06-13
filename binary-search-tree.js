/**
*	Binary Search Tree (BST)
*	unbalanced
*
*	@author Lakha Singh
*/

(function(){
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

	// to traverse the tree
	var _traverse = function( data ){
		var found = null, node;

		if ( !data ){
			return null;
		}

		// start from root
		node = root;

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
		var found = _traverse( data.data || data );

		var node;

		// Duplicates not suppoted
		if ( found && found.data == data ){
			console.log('Duplicate nodes are not currently Supported');
			return null;
		}

		node = data.data && data || _createNode( data );

		// it is a root
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
		var found = _traverse( data );

		var node, parent, leftChild, rightChild;

		// If found
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
		}
	}

	// Search for node
	BST.prototype.search = function( data ){
		var found = _traverse( data );

		// when found
		if ( found && found.data == data ){
			return data;
		}else{
			return -1;
		}
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
