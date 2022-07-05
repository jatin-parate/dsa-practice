class PriorityQueue {
  private _heap: number[];
  private _comparator: (a: number, b: number) => boolean;

  constructor(comparator = (a: number, b: number) => a > b) {
    this._heap = [];
    this._comparator = comparator;
  }

  size(): number {
    return this._heap.length;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  peek() {
    return this._heap[0];
  }

  private _parent(idx: number) {
    return Math.floor((idx - 1) / 2);
  }

  private _leftChild(idx: number) {
    return idx * 2 + 1;
  }

  private _rightChild(idx: number) {
    return idx * 2 + 2;
  }

  private _swap(i: number, j: number) {
    const temp = this._heap[i];
    this._heap[i] = this._heap[j];
    this._heap[j] = temp;
  }

  private _compare(i: number, j: number) {
    return this._comparator(this._heap[i], this._heap[j]);
  }

  push(value: number) {
    this._heap.push(value);
    this._shiftUp();
    return this.size();
  }

  private _shiftUp() {
    let nodeIdx = this.size() - 1;
    while (nodeIdx > 0 && this._compare(nodeIdx, this._parent(nodeIdx))) {
      this._swap(nodeIdx, this._parent(nodeIdx));
      nodeIdx = this._parent(nodeIdx);
    }
  }

  pop() {
    if (this.size() > 1) {
      this._swap(0, this.size() - 1);
    }

    const poppedValue = this._heap.pop();
    this._shiftDown();
    return poppedValue;
  }

  private _shiftDown() {
    let nodeIdx = 0;
    while (
      (this._leftChild(nodeIdx) < this.size() &&
        this._compare(this._leftChild(nodeIdx), nodeIdx)) ||
      (this._rightChild(nodeIdx) < this.size() &&
        this._compare(this._rightChild(nodeIdx), nodeIdx))
    ) {
      const greaterNodeIdx =
        this._rightChild(nodeIdx) < this.size() &&
        this._compare(this._rightChild(nodeIdx), this._leftChild(nodeIdx))
          ? this._rightChild(nodeIdx)
          : this._leftChild(nodeIdx);

      this._swap(greaterNodeIdx, nodeIdx);
      nodeIdx = greaterNodeIdx;
    }
  }
}
