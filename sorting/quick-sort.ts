import assert from "assert";

const swap = (arr: number[], i: number, j: number): void => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

const quickSort = (k: number[], lb: number, ub: number): typeof k => {
  let flag = true;
  if (lb < ub) {
    let i = lb;
    let j = ub + 1;
    let key = k[lb];
    while (flag) {
      i += 1;
      while (k[i] < key) {
        i += 1;
      }
      j -= 1;
      while (k[j] > key) {
        j -= 1;
      }
      if (i < j) {
        swap(k, i, j);
      } else {
        flag = false;
      }
    }
    swap(k, lb, j);
    quickSort(k, lb, j - 1);
    quickSort(k, j + 1, ub);
  }
  return k;
};

const sort = (arr: number[]): typeof arr => {
  return quickSort(arr, 0, arr.length - 1);
};

// [1, 2, 3, 4];

assert.deepEqual(sort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
assert.deepEqual(sort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
