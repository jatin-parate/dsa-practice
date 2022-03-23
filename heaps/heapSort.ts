const maxHeapify = <T>(heap: T[]): T[] => {
  throw new Error("Function not implemented.");
};

const createMaxHeap = <T>(arr: T[]): T[] => {
  const heap: T[] = [];

  arr.forEach((ele) => {
    heap.push(ele);
    maxHeapify<T>(heap);
  });

  return heap;
};

const heapSort = <T>(arr: T[]): T[] => {
  const output: T[] = [];
  // 1. create max heap
  const maxHeap = createMaxHeap<T>(arr);
  // 2. for each last element swap with root
  for (let i = maxHeap.length - 1; i > -1; i -= 1) {
    let tmp = maxHeap[i];
    maxHeap[i] = maxHeap[0];
    maxHeap[0] = tmp;
    output.unshift(maxHeap[i]);
    // 3. remove last node from array
    maxHeap.splice(i);
    // 4. heapify
    maxHeapify(maxHeap);
    // 5. repeat until no elements in array
  }
  return output;
};

console.log(heapSort<number>([1, 4, 2, 3, 6]));
