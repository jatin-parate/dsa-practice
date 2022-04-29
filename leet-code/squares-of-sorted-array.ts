import assert from "assert";

function sortedSquares(nums: number[]): number[] {
  nums.forEach((num, i) => {
    nums[i] = num * num;
  });

  const ret: typeof nums = [];
  let l = 0;
  let r = nums.length - 1;
  let i = nums.length - 1;

  while (l <= r) {
    if (nums[l] >= nums[r]) {
      ret[i] = nums[l];
      l += 1;
    } else {
      ret[i] = nums[r];
      r -= 1;
    }
    i -= 1;
  }

  return ret;
}

assert.deepEqual(sortedSquares([-5, -3, -2, -1]), [1, 4, 9, 25]);
assert.deepEqual(sortedSquares([-4, -1, 0, 3, 10]), [0, 1, 9, 16, 100]);
assert.deepEqual(sortedSquares([-7, -3, 2, 3, 11]), [4, 9, 9, 49, 121]);
