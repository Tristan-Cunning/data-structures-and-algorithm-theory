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

function maxLen(tree, len = 0) {
	if (tree === null) return -Infinity;
	if (tree.left === null && tree.right === null) return len;
	return Math.max(maxLen(tree.left, len + 1), maxLen(tree.right, len + 1));
}
