import assert from "assert";

function longestConsecutive(nums: number[]): number {
  if (nums.length < 1) return 0;

  const set = new Set(nums);
  let longest = 0;

  for (let n of nums) {
    if (!set.has(n - 1)) {
      let length = 0;

      while (set.has(n + length)) {
        length += 1;
      }

      longest = Math.max(longest, length);
    }
  }

  return longest;
}

assert.equal(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]), 9);
assert.equal(longestConsecutive([100, 4, 200, 1, 3, 2]), 4);
assert.equal(
  longestConsecutive([0, 1, 2, 4, 8, 5, 6, 7, 9, 3, 55, 88, 77, 99, 999999999]),
  10
);
