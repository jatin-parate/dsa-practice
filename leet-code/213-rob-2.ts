function rob(nums: number[]): number {
  return Math.max(nums[0], helper(nums.slice(1)), helper(nums.slice(0, -1)));
}

function helper(nums: number[]): number {
  let dp = new Array(nums.length).fill(-Infinity);

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i >= nums.length - 2) {
      dp[i] = nums[i];
    } else {
      let currMax = nums[i];
      for (let j = i + 2; j < nums.length; j++) {
        currMax = Math.max(currMax, nums[i] + dp[j]);
      }

      dp[i] = currMax;
    }
  }

  return Math.max(...dp);
}

console.log(rob([2, 3, 2]));

console.log(rob([1, 2, 3, 1]));
