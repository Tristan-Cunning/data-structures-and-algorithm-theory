function sumN(n) {
	if (n === 1) return 1; // terminal condition: Always Have One
	return n + sumN(n - 1);
}

// 2 + 1 = 3

function factorial(n) {
	if (n === 1) return 1;
	return n * factorial(n - 1);
}
