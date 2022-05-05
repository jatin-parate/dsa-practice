import assert from "assert";

function findMin(nums: number[]): number {
  let i = 0;
  let j = nums.length - 1;

  if (nums[i] < nums[j]) {
    return nums[i];
  }

  while (i < j) {
    const mid = Math.floor((i + j) / 2);

    if (mid > 0 && nums[mid - 1] > nums[mid]) {
      return nums[mid];
    }

    if (nums[mid] >= nums[i] && nums[mid] > nums[j]) {
      // right side is not sorted
      i = mid + 1;
    } else {
      j = mid - 1;
    }
  }

  return nums[i];
}

assert.equal(findMin([3, 4, 5, 1, 2]), 1);
assert.equal(findMin([4, 5, 6, 7, 0, 1, 2]), 0);
assert.equal(findMin([11, 13, 15, 17]), 11);
