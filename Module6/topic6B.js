//Using a table
function fib(n) {
	let table = [0, 1];

	for (let i = 2; i <= n; i += 1) {
		table.push(table.at(-1) + table.at(-2));
	}

	console.log(table);

	return table[n];
}
//Using a sliding window
function fib1(n) {
	if (n === 0) return 0;
	let slidingWindow = [0, 1];

	for (let i = 2; i <= n; i += 1) {
		slidingWindow = [slidingWindow[1], slidingWindow[0] + slidingWindow[1]];
	}

	console.log(slidingWindow);

	return slidingWindow[1];
}
