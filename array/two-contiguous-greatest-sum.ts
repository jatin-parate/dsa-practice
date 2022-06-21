import assert from "assert";

const twoContiguousGreatestSum = (arr: number[]): number => {
  if (arr.length < 2) {
    return 0;
  }
  let greatestSum = -Infinity;

  for (let i = 0; i <= arr.length - 2; i += 1) {
    greatestSum = Math.max(greatestSum, arr[i] + arr[i + 1]);
  }

  return greatestSum;
};

assert.equal(twoContiguousGreatestSum([1, 3, 7, 9, 2, 4]), 16);
assert.equal(twoContiguousGreatestSum([]), 0);
assert.equal(twoContiguousGreatestSum([-1]), 0);
assert.equal(twoContiguousGreatestSum([-1, 2, 3]), 5);
assert.equal(twoContiguousGreatestSum([1, -2, 3]), 1);
assert.equal(twoContiguousGreatestSum([1, 2, -3]), 3);
