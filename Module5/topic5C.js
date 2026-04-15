class BinaryMinHeap {
	constructor(arr = []) {
		this.heap = []; // Space: 0(n), where n is the # of elements
		this.heapify(arr);
	}
	insert(v) {
		// Time complexity: 0(1)*0(log(n)) = O(log(n))
		this.heap.push(v);
		this._bubbleUp(this.heap.length - 1);
	}
	heapify(arr) {
		// O(n *log(n))
		for (let elem of arr) {
			this.insert(elem);
		}
	}
	removeMin() {
		//0(log(n)) Remove all: 0(n * log(n) )
		let minValue = this.heap[0];
		let lastValue = this.heap.pop();
		if (this.heap.length > 0) {
			this.heap[0] = lastValue;
			this._bubbleDown(0);
		}
		return minValue;
	}

	getMin() {
		//0(1)
		return this.heap[0];
	}
	_bubbleUp(currentIndex) {
		//0(log(n))
		let parentIndex = Math.floor((currentIndex - 1) / 2);
		if (this.heap[parentIndex] > this.heap[currentIndex]) {
			this._swap(parentIndex, currentIndex);
			if (parentIndex > 0) {
				this._bubbleUp(parentIndex);
			}
		}
	}
	_bubbleDown(currentIndex) {
		//0(Log(n))
		let leftChildIndex = 2 * currentIndex + 1;
		let rightChildIndex = 2 * currentIndex + 2;
		let leftValue = this.heap[leftChildIndex];
		let rightValue = this.heap[rightChildIndex];
		let currentValue = this.heap[currentIndex];
		if (leftChildIndex >= this.heap.length) {
			return;
		}
		if (typeof rightValue === "undefined") {
			rightValue = Infinity;
		}
		if (leftValue <= rightValue && currentValue > leftValue) {
			this._swap(currentIndex, leftChildIndex);
			this._bubbleDown(leftChildIndex);
		}
		if (rightValue < leftValue && currentValue > rightValue) {
			this._swap(currentIndex, rightChildIndex);
			this._bubbleDown(rightChildIndex);
		}
	}
	_swap(i, j) {
		[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
	}
}
