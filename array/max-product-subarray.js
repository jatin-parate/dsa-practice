"use strict";

/**
 * @param {number[]} nums
 * @return {number}
 * @constraints
 * - 1 <= nums.length <= 2 * 10^4
 * - -10 <= nums[i] <= 10
 * - The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 */
var maxProduct = function (nums) {
  let res = Math.max(...nums);
  let currMin = 1;
  let currMax = 1;
  let tmp;

  nums.forEach((n) => {
    if (n === 0) {
      currMax = 1;
      currMin = 1;
      return;
    }
    tmp = currMax * n;
    currMax = Math.max(tmp, n * currMin, n);
    currMin = Math.min(tmp, n * currMin, n);
    res = Math.max(currMax, res);
  });

  return res;
};

const runWithTimestamp = require("../utils/runWithTimestamp");
runWithTimestamp(maxProduct.bind(this, [2, 3, -2, 4])); // 6
runWithTimestamp(maxProduct.bind(this, [-2, 0, -1])); // 0
runWithTimestamp(maxProduct.bind(this, [-3, -1, -1])); // 3
runWithTimestamp(maxProduct.bind(this, [3, -1, 4])); // 4
