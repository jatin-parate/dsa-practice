import runWithTimestamp from "../utils/runWithTimestamp";

function getLIS(nums: number[], currentIndex: number, dp: number[]): number {
  let total = 1;

  if (currentIndex === 0) {
    return (dp[currentIndex] = total);
  }

  if (currentIndex < 0) {
    return total;
  }

  let max = total;
  let j = currentIndex;
  while (j > -1) {
    if (nums[j] < nums[currentIndex]) {
      max = Math.max(max, 1 + dp[j]);
    }

    j--;
  }

  return (dp[currentIndex] = max);
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

  return max;
}

runWithTimestamp(
  () => lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]),
  undefined,
  "first"
);
runWithTimestamp(() => lengthOfLIS([0, 1, 0, 3, 2, 3]), undefined, "second");
