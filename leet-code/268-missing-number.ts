import assert from "assert";

function missingNumber(nums: number[]): number {
  const n = nums.length;
  let total = (n * (n + 1)) / 2;

  nums.forEach((num) => {
    total -= num;
  });

  return total;
}

assert.equal(missingNumber([0, 1, 3]), 2);
assert.equal(missingNumber([0, 1]), 2);
assert.equal(missingNumber([9,6,4,2,3,5,7,0,1]), 8);
