/**
 * Given a binary array nums,
 * return the maximum number of consecutive 1's in the array.
 * @param {number[]} nums
 * @return {number}
 * @constraints
 * - 1 <= nums.length <= 105
 * - nums[i] is either 0 or 1
 */
// eslint-disable-next-line no-unused-vars
const findMaxConsecutiveOnes = (nums) => {
  let max1s = 0;
  let currMax1s = 0;

  nums.forEach((ele) => {
    if (ele === 0) {
      if (currMax1s > max1s) {
        max1s = currMax1s;
      }
      currMax1s = 0;
    } else {
      currMax1s += 1;
    }
  });

  if (currMax1s > max1s) {
    max1s = currMax1s;
  }

  return max1s;
};
