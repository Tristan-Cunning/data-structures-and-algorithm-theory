function filterDuplicates(list) {
	let current = list;
	while (current !== null) {
		let { value, next } = current; //Same as list.value and list.next

		let candidate = next;
		while (candidate?.value === value) {
			candidate = candidate.next;
		}

		current.next = candidate;
		current = current.next;
	}

	return list;
}

filterDuplicates({
	value: 1,
	next: {
		value: 1,
		next: { value: 2, next: { value: 2, next: { value: 5, next: null } } },
	},
});
