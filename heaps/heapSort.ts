import assert from "assert";

type input = number[];

const swap = (arr: input, index1: number, index2: number) => {
  let tmp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = tmp;
};

const getLeftIndex = (parentIndex: number) => parentIndex * 2 + 1;

const maxHeapify = (arr: input, length: number): void => {
  let parentIndex = Math.floor((length - 2) / 2);

  while (parentIndex > -1) {
    const leftIndexOfParent = getLeftIndex(parentIndex);
    const rightIndexOfParent = leftIndexOfParent + 1;

    if (
      arr[parentIndex] <
      (arr[leftIndexOfParent] == null ? -Infinity : arr[leftIndexOfParent])
    ) {
      if (leftIndexOfParent < length) {
        swap(arr, leftIndexOfParent, parentIndex);
      }
      parentIndex = Math.floor((parentIndex - 1) / 2);
    } else if (
      arr[parentIndex] <
      (arr[rightIndexOfParent] == null ? -Infinity : arr[rightIndexOfParent])
    ) {
      if (rightIndexOfParent < length) {
        swap(arr, rightIndexOfParent, parentIndex);
      }
      parentIndex = Math.floor((parentIndex - 1) / 2);
    } else {
      return;
    }
  }
};

const extract = (arr: input, length: number): void => {
  let index = 0;

  while (index < length) {
    const leftIndex = getLeftIndex(index);
    const rightIndex = leftIndex + 1;
    let greatestChildIndex: number = index;

    if (leftIndex < length && arr[leftIndex] > arr[greatestChildIndex]) {
      greatestChildIndex = leftIndex;
    }
    if (rightIndex < length && arr[rightIndex] > arr[greatestChildIndex]) {
      greatestChildIndex = rightIndex;
    }

    if (greatestChildIndex === index) {
      return;
    }

    swap(arr, greatestChildIndex, index);
    index = greatestChildIndex;
  }
};

const heapSort = (arr: input): typeof arr => {
  const heap: input = [];

  for (let ele of arr) {
    heap.push(ele);
    maxHeapify(heap, heap.length);
  }

  for (let i = heap.length - 1; i > -1; i -= 1) {
    swap(heap, i, 0);
    extract(heap, i);
  }

  return heap;
};

assert.deepEqual(
  heapSort([1, 4, 2, 3, 3, 7, 4, 6, 1, 0, 9, 8, 9, 4, 3, 5]),
  [0, 1, 1, 2, 3, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 9]
);
assert.deepEqual(
  heapSort([5, 5, 5, 3, 3, 3, 4, 4, 4, 4]),
  [3, 3, 3, 4, 4, 4, 4, 5, 5, 5]
);
assert.deepEqual(heapSort([99]), [99]);
assert.deepEqual(heapSort([0, 1, 2, 5, 12, 21, 0]), [0, 0, 1, 2, 5, 12, 21]);
