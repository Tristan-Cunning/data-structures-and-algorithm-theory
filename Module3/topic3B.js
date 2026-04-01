let steps = 0;

function fib(n) {
	steps += 1;
	if (n === 0) return 0;
	if (n === 1) return 1;
	return fib(n - 1) + fib(n - 2);
	// Creates a lot of steps. 1973 steps for fib(15)
}
