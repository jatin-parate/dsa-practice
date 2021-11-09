/**
 * @constraints
 * - 1 <= nums.length <= 5000
 * - 0 <= nums[i] <= 5000
 * @param {number[]} nums
 * @return {number[]}
 */
// eslint-disable-next-line no-unused-vars
const sortArrayByParity = (nums) => {
  const odd = [];
  let currEven = 0;

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] % 2 === 0) {
      // even
      // eslint-disable-next-line no-param-reassign
      nums[currEven] = nums[i];
      currEven += 1;
    } else {
      // odd
      odd.push(nums[i]);
    }
  }

  console.log(odd);

  for (let i = currEven; i < nums.length; i += 1) {
    // eslint-disable-next-line no-param-reassign
    nums[i] = odd[odd.length - i];
  }

  return nums;
};
