function getLIS(nums: number[], i: number, dp: number[]): number {
  let total = 1;

  if (i === 0) {
    return (dp[i] = total);
  }

  if (i < 0) {
    return total;
  }

  let max = total;
  let j = i;
  while (j >= 0) {
    if (nums[j] >= nums[i]) {
      j--;
      continue;
    }

    if (dp[j] !== -1) {
      max = Math.max(max, 1 + dp[j]);
    } else {
      max = Math.max(max, 1 + getLIS(nums, j, dp));
    }

    j--;
  }

  return (dp[i] = max);
}

/**
 * @constraints
 * - 1 <= nums.length <= 2500
 * - -10^4 <= nums[i] <= 10^4
 */
function lengthOfLIS(nums: number[]): number {
  let max = 1;
  let dp = new Array(nums.length).fill(-1);
  dp[0] = 1;

  for (let i = 1; i < nums.length; i++) {
    max = Math.max(max, getLIS(nums, i, dp));
  }
  // console.log(dp);

  return max;
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]));
