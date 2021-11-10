/* eslint-disable no-param-reassign */
/**
 * @constraints
 * - 1 <= nums.length <= 5000
 * - 0 <= nums[i] <= 5000
 * @param {number[]} nums
 * @return {number[]}
 */
// eslint-disable-next-line no-unused-vars
const sortArrayByParity = (nums) => {
  let firstOdd = nums.findIndex((num) => num % 2 !== 0);

  if (firstOdd === -1 || nums.length === 1) return nums;

  for (let i = firstOdd; i < nums.length; i += 1) {
    if (nums[i] % 2 === 0) {
      [nums[i], nums[firstOdd]] = [nums[firstOdd], nums[i]];
      firstOdd += 1;
    }
  }

  return nums;
};
