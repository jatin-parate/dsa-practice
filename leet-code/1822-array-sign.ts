import assert from "assert";

function arraySign(nums: number[]): number {
  const product = nums.reduce((prev, curr) => prev * curr, 1);
  if (product > 0) {
    return 1;
  }
  if (product < 0) {
    return -1;
  }
  return 0;
}

assert.equal(arraySign([-1, -2, -3, -4, 3, 2, 1]), 1);
assert.equal(arraySign([1, 5, 0, 2, -3]), 0);
assert.equal(arraySign([-1, 1, -1, 1, -1]), -1);
