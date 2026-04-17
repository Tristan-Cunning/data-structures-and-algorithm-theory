let arr = [1, 5, 5, 2, 8, 9, 11, 11, 2, -4];

//Sorting
function smallestNotInArr(arr) {
	// 0. Keep positive values only O(n).
	arr = arr.filter((x) => x > 0);
	// 1. Sort O(n log(n)).
	arr.sort((a, b) => a - b); // O(n log(n))
	// 2. Iterate on the sorted result and check the present positive integers 1 by 1.
	//    The next number should be the same or 1 more than the current one.
	let nextCandidate = 1;
	for (let element of arr) {
		// O(n)
		if (element === nextCandidate) {
			nextCandidate += 1;
		} else if (element > nextCandidate) {
			return nextCandidate;
		}
	}
	//Unreachable code
	return -1;
}

//dictionary
function smallestNotInArrDict(arr) {
	// 1. Build a dictionary O(n)
	let dict = {};
	for (let element of arr) {
		dict[element] = true;
	}
	// iterate on 1 ... len(arr) O(n)
	for (let i = 1; i <= arr.length; i++) {
		if (!dict[i]) {
			//
			return i;
		}
	}
	//Unreachable code
	return -1;
}
