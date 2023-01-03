import assert from "node:assert";

export function findDuplicate(nums: number[]): number {
  let slow = 0,
    fast = 0;

  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];

    if (slow === fast) break;
  }

  let slow2 = 0;

  while (true) {
    slow = nums[slow];
    slow2 = nums[slow2];

    if (slow === slow2) return slow;
  }
}

assert.equal(findDuplicate([1, 3, 4, 2, 2]), 2);
assert.equal(findDuplicate([3, 1, 3, 4, 2]), 3);
assert.equal(findDuplicate([2, 2, 2, 2, 2]), 2);
