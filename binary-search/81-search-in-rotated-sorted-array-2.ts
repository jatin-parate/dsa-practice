import assert from "node:assert";

/**
 * @constraints
 * - 1 <= nums.length <= 5000
 * - -10^4 <= nums[i], target <= 10^4
 * - nums is guaranteed to be rotated at some pivot
 */
export function search(
  nums: number[],
  target: number,
  left = 0,
  right = nums.length - 1
): boolean {
  if (left > right) {
    return false;
  }

  const mid = Math.floor((left + right) / 2);

  if (nums[mid] === target) {
    return true;
  }

  // if pivot on right
  if (nums[mid] > nums[right]) {
    if (target >= nums[left] && target < nums[mid]) {
      return search(nums, target, left, mid - 1);
    }

    return search(nums, target, mid + 1, right);
  }

  // if pivot on left
  if (nums[left] > nums[mid]) {
    if (target > nums[mid] && target <= nums[right]) {
      return search(nums, target, mid + 1, right);
    }

    return search(nums, target, left, mid - 1);
  }

  return (
    search(nums, target, left, mid - 1) || search(nums, target, mid + 1, right)
  );
}

assert.equal(search([1, 1, 2, 2, 0, 0], 0), true);
assert.equal(search([1, 3, 5], 1), true);
console.log("0");
assert.equal(search([4, 5, 1, 2, 3], 5), true);
console.log("1");
assert.equal(search([5, 6, 1, 2, 3], 4), false);
console.log("2");
assert.equal(search([1], 1), true);
console.log("3");
assert.equal(search([1], 0), false);
console.log("4");
assert.equal(search([2, 1], 1), true);
console.log("5");
assert.equal(search([2, 1], 0), false);
console.log("6");
assert.equal(search([2, 3, 4, 5, 1], 5), true);
console.log("7");
assert.equal(search([2, 3, 5, 6, 1], 4), false);
console.log("8");
assert.equal(search([1, 0, 1, 1, 1], 0), true);
console.log("9");
