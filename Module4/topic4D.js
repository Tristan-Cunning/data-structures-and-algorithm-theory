/*  binary tree
            (5)
        (2)     (8)
            (4)
            Max length = 2
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
	right: { value: 8, left: null, right: null },
};

function maxSum(tree, sum = 0) {
	if (tree === null) return -Infinity;
	if (tree.left === null && tree.right === null) return sum + tree.value;
	return Math.max(
		maxSum(tree.left, sum + tree.value),
		maxSum(tree.right, sum + tree.value),
	);
}
