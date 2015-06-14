/**
*	Unist Test for Binary Search Tree (BST), node env
*
*	@author Lakha Singh
*/

var BST = require('../binary-search-tree.js');

var tree = new BST([41,2,78,53,21,11,7,19,20]);

// print tree
console.log('Printing Tree :')
tree.print();

// delete node
console.log('Deleting 11');
tree.delete(11);
tree.print();

// insert node
console.log('inserting 10');
tree.insert(10);
tree.print();

// Search existing - 21
console.log('Searching Existing : 21')
console.log( tree.search(21) == 21 ? 'Found' : 'Not-found' );

// Search Non-existent
console.log('Searching Non-Existing 60:')
console.log( tree.search(60) == 60 ? 'Found' : 'Not-found' );
