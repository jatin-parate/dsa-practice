import assert from "assert";

function binarySearch(
  nums: number[],
  target: number,
  start: number,
  end: number
): number {
  if (start > end) {
    return -1;
  }

  if (start === end) {
    if (nums[start] !== target) {
      return -1;
    }

    return start;
  }

  const mid = Math.floor((start + end) / 2);

  if (nums[mid] === target) {
    return mid;
  }

  if (target > nums[mid]) {
    return binarySearch(nums, target, mid + 1, end);
  }

  return binarySearch(nums, target, start, mid);
}

/**
 *
 * @param nums array
 * @param target ele to find
 * @constraints
 * - 1 <= nums.length <= 5000
 * - -104 <= nums[i] <= 104
 * - All values of nums are unique.
 * - nums is an ascending array that is possibly rotated.
 * - -104 <= target <= 104
 */
function search(nums: number[], target: number): number {
  if (nums.length === 1) {
    return target === nums[0] ? 0 : -1;
  }

  let sortedIndex = -1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      sortedIndex = i - 1;
      break;
    }
  }

  console.log(sortedIndex);

  if (sortedIndex === -1) {
    // run binary search and return index
    return binarySearch(nums, target, 0, nums.length - 1);
  } else {
    // run binary search in left and right side of array
    if (target > nums[sortedIndex]) {
      return -1;
    }

    if (target >= nums[sortedIndex + 1] && target <= nums[nums.length - 1]!) {
      return binarySearch(nums, target, sortedIndex + 1, nums.length - 1);
    }

    return binarySearch(nums, target, 0, sortedIndex);
  }
}

assert.equal(search([4, 5, 6, 7, 0, 1, 2], 0), 4);
assert.equal(search([4, 5, 6, 7, 0, 1, 2], 3), -1);
assert.equal(search([1], 0), -1);
