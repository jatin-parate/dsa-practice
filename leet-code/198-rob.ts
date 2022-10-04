function rob(nums: number[]): number {
  const dp = Array(nums.length).fill(-Infinity);

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

console.log(rob([1, 2, 3, 1]));

console.log(rob([2, 7, 9, 3, 1]));

console.log(
  rob([
    114, 117, 207, 117, 235, 82, 90, 67, 143, 146, 53, 108, 200, 91, 80, 223,
    58, 170, 110, 236, 81, 90, 222, 160, 165, 195, 187, 199, 114, 235, 197, 187,
    69, 129, 64, 214, 228, 78, 188, 67, 205, 94, 205, 169, 241, 202, 144, 240,
  ])
);
