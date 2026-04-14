/*  binary tree
            (5)
         (2)     (8)
            (4)     (10)
         (3)           
            
*/

// Binary tree is described as:
let node = {
	value: 5,
	left: {
		value: 2,
		left: null,
		right: {
			value: 4,
			left: { value: 3, left: null, right: null },
			right: null,
		},
	},
	right: {
		value: 8,
		left: null,
		right: { value: 10, left: null, right: null },
	},
};

//traverse in order
function traverseIO(node) {
	if (node === null) return;
	traverseIO(node.left);
	console.log(node.value);
	traverseIO(node.right);
} //Logs everything left to right. Top to bottom. Left side first, then the initial node. Then the right side.

//traverse pre order
function traversePO(node) {
	if (node === null) return;
	console.log(node.value);

	traversePO(node.left);
	traversePO(node.right);
} //Prints the first one. Then the left side. Then the right side. Top to bottom.

//traverse post order
function traversePost(node) {
	if (node === null) return;

	traversePost(node.left);
	traversePost(node.right);
	console.log(node.value);
} //Prints from bottom up. Left side first, then the right. Then the initial node.

//Solving iteratively
function traverseIPO(node) {
	let nodes = [node];

	//Pre order traversal
	while (nodes.length > 0) {
		let current = nodes.pop();
		console.log(current.value);

		if (current.left !== null) nodes.unshift(current.left);
		if (current.right !== null) nodes.unshift(current.right);
	}
}

//Example on array representation of a binary tree
/*function traverseA(nodeArr) {
    let indexes = [0];

    while(indexes.length > 0) {
        let current = indexes.pop();
        console.log(nodeArr[current]);
        if () {indexes.unshift(2*current+1);}
        if () {indexes.unshift(2*current+2);}
    } 
}*/
