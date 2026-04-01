function checkExpression(expression) {
	let stack = [];
	let count = 0;

	for (let ch of expression) {
		if (ch === "(") {
			count += 1;
		} else if (ch === ")") {
			count -= 1;
			if (count < 0) return false;
		}
		console.log(stack); //During an interview be sure to get rid of
	}

	return count === 0;
}
