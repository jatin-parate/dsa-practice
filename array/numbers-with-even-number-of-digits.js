/**
 * Given an array nums of integers,
 * return how many of them contain an even number of digits.
 * @param {number[]} nums
 * @return {number}
 * @constraints
 * - 1 <= nums.length <= 500
 * - 1 <= nums[i] <= 10^5
 */
// eslint-disable-next-line no-unused-vars
const findNumbers = (nums) => {
  let totalEvenNumberDigitNumbers = 0;
  // 1      - 9
  // 10     - 99 // even
  // 100    - 999
  // 1000   - 9999 // even
  // 10000  - 99999
  // 100000 // even

  nums.forEach((ele) => {
    if (
      (ele >= 10 && ele <= 99)
      || (ele >= 1000 && ele <= 9999)
      || (ele === 100000)
    ) {
      totalEvenNumberDigitNumbers += 1;
    }
  });

  return totalEvenNumberDigitNumbers;
};
