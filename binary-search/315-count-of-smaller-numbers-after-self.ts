import assert from "node:assert";

export function countSmaller(nums: number[]): number[] {
  const output = new Array<number>(nums.length).fill(0);

  for (let i = nums.length - 2; i > -1; i--) {
    let sum = 0;

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === nums[i]) {
        sum += output[j]
        break;
      }

      if (nums[j] < nums[i]) {
        sum += 1
      }
    }

    output[i] = sum;
  }

  return output;
}

assert.deepEqual(countSmaller([5, 2, 6, 1]), [2, 1, 1, 0]);
assert.deepEqual(countSmaller([-1]), [0]);
assert.deepEqual(countSmaller([-1, -1]), [0, 0]);
assert.deepEqual(countSmaller([1, 2, 1, 3, 2, 1]), [0, 2, 0, 2, 1, 0]);
