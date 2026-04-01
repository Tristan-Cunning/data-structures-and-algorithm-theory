/*
Get array
Dictionary keys by number
For each key we check if there is an even or odd amount of them
Odd means no pair even means paired off.
Return element that has no pair
*/

//My work
let arr = [1, 2, 1, 2, 1];

function buildDictionary(arr) {
	let d = {};
	for (num of arr) {
		let key = "n_" + num;
		if (d[key]) {
			d[key] += 1;
		} else {
			d[key] = 1;
		}
	}
	return d;
}

function findUnpaired(arr) {
	let d = buildDictionary(arr);
	for (key in d) {
		if (d[key] % 2 !== 0) {
			return Number.parseInt(key.split("_")[1]);
		}
	}
}

//Walkthrough

//build the dictionary
// return the key of the only element of the dictionary

function buildDictionary2(arr) {
	let dict = {};
	for (let elem of arr) {
		if (elem in dict) {
			delete dict[elem];
		} else {
			dict[elem] = true;
		}
	}
	return dict;
}

function solution(arr) {
	let d2 = buildDictionary2(arr);
	return Number(Object.keys(d2)[0]);
}

//Set Solution

function buildSet(arr) {
	let set = new Set();
	for (let elem of arr) {
		if (set.has(elem)) {
			set.delete(elem); //Knocks off the pair and just gets rid of it
		} else {
			set.add(elem); //Is the first of the pair
		}
	}
	return set;
}

function solution(arr) {
	let s = buildSet(arr);
	return [...s][0];
}

//bitWise Solution

function unpaired2(arr) {
	let result = 0;

	for (let elem of arr) {
		result ^= elem; //XOR: If they're the same it'll come out 0.
	}

	return result;
}

function unpaired3(arr) {
	return arr.reduce((acc, v) => acc ^ v, 0);
}
//Same
const unpaired3 = (arr) => arr.reduce((acc, v) => acc ^ v, 0);
