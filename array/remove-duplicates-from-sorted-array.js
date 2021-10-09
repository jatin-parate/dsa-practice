/* eslint-disable no-param-reassign */
/**
 * @constraints
 * - 0 <= nums.length <= 3 * 104
 * - -100 <= nums[i] <= 100
 * - nums is sorted in non-decreasing order.
 * @param {number[]} nums
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
const removeDuplicates = (nums) => {
  // if only 0 or 1 elements in array
  if (nums.length < 2) {
    // no need to do anything
    return nums;
  }

  // do all operations in nums
  let uniquePointer = 1;
  // return original array
  let travelPointer = 1;

  while (travelPointer < nums.length) {
    if (nums[travelPointer] !== nums[travelPointer - 1]) {
      nums[uniquePointer] = nums[travelPointer];
      uniquePointer += 1;
    }
    travelPointer += 1;
  }
  return uniquePointer;
};
