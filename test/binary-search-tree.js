/**
*	Unist Test for Binary Search Tree (BST), node env
*
*	@author Lakha Singh
*/

var BST = require('../binary-search-tree.js');

var tree = new BST([41,2,78,53,21,11,7,19,20]);

// print tree
tree.print();

// delete node
tree.delete(11);
console.log('Deleting 11');
tree.print();

// insert node
tree.insert(10);
console.log('inserted 10');
tree.print();
