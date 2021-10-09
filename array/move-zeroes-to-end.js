/* eslint-disable no-param-reassign */
/**
 * @constraint
 * - 1 <= nums.length <= 104
 * - -231 <= nums[i] <= 231 - 1
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// eslint-disable-next-line no-unused-vars
const moveZeroes = (nums) => {
  let current = 0;

  // eslint-disable-next-line no-restricted-syntax
  for (const ele of nums) {
    if (ele !== 0) {
      // eslint-disable-next-line no-plusplus
      nums[current++] = ele;
    }
  }
  for (let i = current; i < nums.length; i += 1) {
    nums[i] = 0;
  }
};
