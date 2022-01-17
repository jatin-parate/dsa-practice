/**
 * @param {number[]} nums
 * @return {number[]}
 * @constraints
 * - 2 <= nums.length <= 105
 * - -30 <= nums[i] <= 30
 * @complexity
 * - time: O(n)
 * - space: O(1)
 */
const productExceptSelf = function (nums) {
  let allProduct = 1;
  let zeroCount = 0;
  nums.forEach((num) => {
    if (num === 0) {
      zeroCount += 1;
    } else {
      allProduct *= num;
    }
  });
  if (zeroCount > 1) {
    allProduct = 0;
  }
  const productForNumExceptZero = zeroCount > 0 ? 0 : allProduct;
  nums.forEach((num, i, nums) => {
    if (num === 0) {
      nums[i] = allProduct;
    } else {
      nums[i] = productForNumExceptZero / num;
    }
  });
  return nums;
};

const runWithTimestamp = require("../utils/runWithTimestamp");

runWithTimestamp(productExceptSelf.bind(this, [1, 2, 3, 4]), null); // [24,12,8,6]
runWithTimestamp(productExceptSelf.bind(this, [-1, 1, 0, -3, 3]), null); // [0,0,9,0,0]
runWithTimestamp(productExceptSelf.bind(this, Array(105).fill(30)), null); // [0,0,0,0,0]

// runWithTimestamp(fn.bind(this, Array(10).fill(1)));
// runWithTimestamp(fn2.bind(this, Array(10).fill(1)))
