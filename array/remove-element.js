/* eslint-disable no-param-reassign */
/**
 * @constraints
 * - 0 <= nums.length <= 100
 * - 0 <= nums[i] <= 50
 * - 0 <= val <= 100
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
const removeElement = (nums, val) => {
  if (nums.length === 0 || val > 50) return nums.length;

  let count = 0;

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== val) {
      nums[count] = nums[i];
      count += 1;
    }
  }

  return count;
};
