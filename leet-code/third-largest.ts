import assert from "assert";

function thirdMax(nums: number[], largestIndex = 3): number {
  const set = new Set<number>();

  nums.forEach((num) => {
    if (!set.has(num)) {
      set.add(num);
    }
  });

  const arr = [...set.keys()].sort((a, b) => (a < b ? -1 : 1));

  if (arr.length < largestIndex) {
    return arr[arr.length - 1];
  }

  return arr[arr.length - largestIndex];
}

assert.equal(thirdMax([1, 2, -2147483648]), -2147483648);
assert.equal(thirdMax([1, 2, 2, 5, 3, 5]), 2);
assert.equal(thirdMax([5, 2, 2]), 5);
assert.equal(thirdMax([1, 2, 2]), 2);
assert.equal(thirdMax([3, 2, 1]), 1);
assert.equal(thirdMax([1, 2]), 2);
assert.equal(thirdMax([2, 2, 3, 1]), 1);
