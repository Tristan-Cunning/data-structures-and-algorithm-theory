function heapSort(arr) {
	const result = [];
	const heap = new BinaryMinHeap(arr);
	while (heap.heap.length > 0) {
		let min = heap.removeMin();
		result.push(min);
	}
	return result;
}
