import assert from "assert";

const mergeTwoSortedArrays = (
  arr: number[],
  leftTableStarting: number,
  leftTableEnding: number,
  rightTableEnding: number
) => {
  const sorted: typeof arr = [];

  let i = leftTableStarting;
  let j = leftTableEnding + 1;

  while (i <= leftTableEnding && j <= rightTableEnding) {
    if (arr[i] <= arr[j]) {
      sorted.push(arr[i]);
      i += 1;
    } else {
      sorted.push(arr[j]);
      j += 1;
    }
  }

  while (i <= leftTableEnding) {
    sorted.push(arr[i]);
    i += 1;
  }

  while (j <= rightTableEnding) {
    sorted.push(arr[j]);
    j += 1;
  }

  for (let k = leftTableStarting; k <= rightTableEnding; k += 1) {
    arr[k] = sorted[k - leftTableStarting];
  }
};

const mergeSort = (arr: number[], start?: number, end?: number): typeof arr => {
  if (start == null) {
    start = 0;
  }
  if (end == null) {
    end = arr.length - 1;
  }

  if (start >= end) {
    return arr;
  }

  const mid = Math.floor((start + end) / 2);
  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end);
  mergeTwoSortedArrays(arr, start, mid, end);

  return arr;
};

assert.deepEqual(mergeSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
assert.deepEqual(mergeSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
