/**
 * @param {number[]} nums
 * @return {number[]}
 * @constraints
 * - 2 <= nums.length <= 500
 * - 0 <= nums[i] <= 100
 */
// eslint-disable-next-line no-unused-vars
const smallerNumbersThanCurrent = (nums) => {
  const freq = new Array(101).fill(0);
  const ans = new Array(101).fill(0);

  nums.forEach((num) => { freq[num] += 1; });

  for (let i = 1; i < 101; i += 1) {
    ans[i] = ans[i - 1] + freq[i - 1];
  }

  return nums.map((num) => ans[num]);
};
