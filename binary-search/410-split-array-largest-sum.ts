import assert from "node:assert";

export function splitArray(nums: number[], k: number): number {
  let left = Math.max.apply(Math, nums);
  let right = nums.reduce((prev, curr) => prev + curr, 0);
  let result = right;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (canSplit(mid)) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  function canSplit(largest: number): boolean {
    let subarray = 0,
      currSum = 0;

    for (let num of nums) {
      currSum += num;
      if (currSum > largest) {
        subarray += 1;
        currSum = num;
      }
    }

    return subarray + 1 <= k;
  }

  return result;
}

assert.equal(splitArray([7, 2, 5, 10, 8], 2), 18);
assert.equal(splitArray([1, 2, 3, 4, 5], 2), 9);
