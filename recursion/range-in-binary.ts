import assert from "assert";

const searchRange = (arr: number[], k: number): [number, number] => {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    const mid = Math.floor((r + l) / 2);
    if (arr[mid] === k) {
      // get the range and return
      let i = mid;
      let j = mid;
      while (i >= 0) {
        if (arr[i - 1] === k) {
          i -= 1;
        } else {
          break;
        }
      }
      while (j <= arr.length - 1) {
        if (arr[j + 1] == k) {
          j += 1;
        } else {
          break;
        }
      }
      return [i, j];
    } else if (arr[mid] >= k) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return [-1, -1];
};

assert.deepEqual(searchRange([1, 3, 3, 5, 5, 5, 8, 9], 5), [3, 5]);
assert.deepEqual(searchRange([], 5), [-1, -1]);
assert.deepEqual(searchRange([1], 1), [0, 0]);
assert.deepEqual(searchRange([2, 2], 2), [0, 1]);
