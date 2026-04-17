function sortStrArr(arr) {
	let helper = arr.map((str) => ({ v: str, 1: str.length }));
	helper.sort((a, b) => (a[1] === b[1] ? (a.v > b.v ? 1 : -1) : a[1] - b[1]));
	return helper.map((item) => item.v);
}
//with chaining
function sortStrArrChain(arr) {
	return arr
		.map((str) => ({ v: str, 1: str.length }))
		.sort((a, b) => (a[1] === b[1] ? (a.v > b.v ? 1 : -1) : a[1] - b[1]))
		.map((item) => item.v);
}
