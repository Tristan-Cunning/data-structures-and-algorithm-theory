let steps = 0;

function fibO(n) {
	steps += 1;
	if (n === 0) return 0;
	if (n === 1) return 1;
	return fibO(n - 1) + fibO(n - 2);
	// Creates a lot of steps. 1973 steps for fib(15).
}

//Back to sum() function from 3A.
function sumN(n) {
	if (n === 1) return 1;
	return n + sumN(n - 1);
	//Crashes broswer at sumN(10000)
}

//memoization upgrade
function fibM(n, memo = {}) {
	steps += 1;
	let fib1, fib2;
	if (n === 0) return 0;
	if (n === 1) return 1;
	if (typeof memo[n - 1] === "number") {
		fib1 = memo[n - 1];
	} else {
		fib1 = fibM(n - 1, memo);
		memo[n - 1] = fib1;
	}
	if (typeof memo[n - 2] === "number") {
		fib2 = memo[n - 2];
	} else {
		fib2 = fibM(n - 2, memo);
		memo[n - 2] = fib2;
	}
	console.log(n, JSON.stringify(memo));

	return fib1 + fib2;
}

// Iterative version
function fibI(n) {
	if (n === 0) return 0;
	if (n === 1) return 1;
	let fib1 = fibI(n - 1, memo);
	let fib2 = fibI(n - 2, memo);
	return fib1 + fib2;
}

//From 3A
function factorial(n, acc = 1) {
	if (n === 0) return acc;
	return factorial(n - 1, acc * n);
}
//tail recursive
function factI(n) {
	let acc = 1;
	while (n > 0) {
		acc *= n;
		n -= 1;
	}
	return acc;
}
function fibITR(n, first = 0, second = 1) {
	if (n === 0) return first;
	if (n === 1) return second;
	return fibITR(n - 1, second, first + second);
}

//Iterative and tail recursion
function fibI2(n) {
	if (n === 0) return 0;
	let first = 0;
	letsecond = 1;

	while (n > 1) {
		[first, second] = [second, first + second]; //Destructuring asignment
	}
	return second;
}
